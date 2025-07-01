import {useState} from 'react';

const TodoInput = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === "") return;
        props.onAddTask(inputValue);
    };

    return (
        <form action="">
            <input type="text" onChange={e => setInputValue(e.target.value)} placeholder='새로운 작업을 입력하세요'/>
            <button type="submit" onClick={handleSubmit}>작업 추가</button>
        </form>
    );
}

export default TodoInput;
