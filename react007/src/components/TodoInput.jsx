import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../store/atom";

const TodoInput = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addTodo = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: Date.now(),
                text: inputValue,
                completed: false
            },
        ]);
        setInputValue('');
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
    );
}

export default TodoInput;