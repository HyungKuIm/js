const TodoItem = (props) => {
    return (
        <li>
            <span style={{textDecoration: props.task.completed ? 'line-through': 'none', cursor: 'pointer'}}
                    onClick={e => props.onToggleTask(props.task.id)}>
                {props.task.text}
            </span>
            <button onClick={e => props.onDeleteTask(props.task.id)}>삭제</button>
        </li>
    );
}

export default TodoItem;