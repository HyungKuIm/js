import { useRecoilValue } from "recoil";

import { todoListState } from "../store/atom";

import TodoItem from "./TodoItem";

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);

  return (
    <>
    {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;