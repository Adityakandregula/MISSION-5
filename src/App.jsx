import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState({ todo: [], inProgress: [], done: [] });
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [editing, setEditing] = useState(null); // { column, id }

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('kanban-tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      const task = { id: Date.now(), text: newTask, priority };
      setTasks(prev => ({ ...prev, todo: [...prev.todo, task] }));
      setNewTask('');
    }
  };

  const deleteTask = (column, id) => {
    setTasks(prev => ({ ...prev, [column]: prev[column].filter(t => t.id !== id) }));
  };

  const moveTask = (from, to, id) => {
    const task = tasks[from].find(t => t.id === id);
    setTasks(prev => ({
      ...prev,
      [from]: prev[from].filter(t => t.id !== id),
      [to]: [...prev[to], task]
    }));
  };

  const editTask = (column, id, newText) => {
    setTasks(prev => ({
      ...prev,
      [column]: prev[column].map(t => t.id === id ? { ...t, text: newText } : t)
    }));
  };

  const startEdit = (column, id) => setEditing({ column, id });

  const saveEdit = (text) => {
    if (editing) {
      editTask(editing.column, editing.id, text);
      setEditing(null);
    }
  };

  const getBorderColor = (priority) => {
    switch (priority) {
      case 'High': return 'red';
      case 'Medium': return 'yellow';
      case 'Low': return 'green';
      default: return 'black';
    }
  };

  return (
    <div className="kanban">
      <h1>📋 Kanban Task Board</h1>
      <div className="add-task">
        <input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="New task"
          onKeyDown={e => e.key === 'Enter' && addTask()}
        />
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="columns">
        {['todo', 'inProgress', 'done'].map(col => (
          <div key={col} className="column">
            <h2>{col === 'todo' ? '📝 To Do' : col === 'inProgress' ? '⚙️ In Progress' : '✅ Done'}</h2>
            {tasks[col].map(task => (
              <div key={task.id} className="task" style={{ borderColor: getBorderColor(task.priority) }}>
                {editing && editing.column === col && editing.id === task.id ? (
                  <input
                    defaultValue={task.text}
                    onBlur={e => saveEdit(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && saveEdit(e.target.value)}
                    autoFocus
                  />
                ) : (
                  <span onClick={() => startEdit(col, task.id)}>{task.text}</span>
                )}
                <div className="actions">
                  {col === 'todo' && (
                    <>
                      <button onClick={() => moveTask(col, 'inProgress', task.id)}>→ Progress</button>
                      <button onClick={() => moveTask(col, 'done', task.id)}>✓ Done</button>
                      <button onClick={() => deleteTask(col, task.id)}>🗑️ Delete</button>
                    </>
                  )}
                  {col === 'inProgress' && (
                    <>
                      <button onClick={() => moveTask(col, 'todo', task.id)}>← To Do</button>
                      <button onClick={() => moveTask(col, 'done', task.id)}>✓ Done</button>
                      <button onClick={() => deleteTask(col, task.id)}>🗑️ Delete</button>
                    </>
                  )}
                  {col === 'done' && (
                    <>
                      <button onClick={() => moveTask(col, 'inProgress', task.id)}>⚙️ Progress</button>
                      <button onClick={() => moveTask(col, 'todo', task.id)}>← To Do</button>
                      <button onClick={() => deleteTask(col, task.id)}>🗑️ Delete</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
