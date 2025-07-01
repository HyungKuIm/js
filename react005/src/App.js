import './reset.css';

import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {

const [tasks, setTasks] = useState([]);  //작업할 작업

//작업 추가
const addTask = (task) => {
  setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
};

// 작업 완료여부 토글
const toggleTask = (id) => {
  setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
};

// 작업 삭제
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};

  return (
    <div>
        <h1>Todo 앱입니다.</h1>
        <TodoInput onAddTask={addTask}/>
        <TodoList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
