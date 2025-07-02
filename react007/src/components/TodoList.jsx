import { useRecoilValue } from "recoil";

import { todoListState } from "../store/atom";
import { filteredTodoListState } from "../store/selector";

import TodoItem from "./TodoItem";

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
    {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;