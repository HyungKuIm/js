import { useRecoilState } from "recoil";
import { todoListState } from "../store/atom";

const TodoItem = ({item}) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const toggleTodo = (id) => {
        setTodoList(todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    };

    const deleteTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <span style={{textDecoration: item.completed ? 'line-through': 'none', cursor: 'pointer'}}
                onClick={e => toggleTodo(item.id)}>{item.text}</span>
                <button onClick={e => deleteTodo(item.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;