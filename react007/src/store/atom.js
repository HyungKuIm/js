import { atom } from "recoil";

const textState = atom({
        key: 'textState', // unique ID (with respect to other atoms/selectors)
        default: '', // default value (aka initial value)
    });

const todoListState = atom({
  key: 'TodoList',
  default: [],
});

const todoListFilterState = atom({
  key: 'TodoListFilter',
  default: 'Show All',
});

export {textState, todoListState, todoListFilterState};