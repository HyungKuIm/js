import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <ul>
            {props.tasks.map(task => (
               <TodoItem key={task.id} task={task}
                    onToggleTask = {props.onToggleTask}
                    onDeleteTask = {props.onDeleteTask} /> 
            ))}
        </ul>
    );
}

export default TodoList;