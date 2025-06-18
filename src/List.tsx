
//写一个todolist任务列表功能组件，实现任务列表中的任务的新增、删除（添加删除线）、展示功能

import { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');

  // 新增任务（添加ID字段）
  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  // 根据ID删除任务
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // 切换任务完成状态
  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={addTask}>
        Add
      </button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
            <button type="button" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;