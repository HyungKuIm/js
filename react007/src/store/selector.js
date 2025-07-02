import { selector } from "recoil";
import { textState, todoListState, todoListFilterState } from "./atom";

const charCountState = selector({
    key: 'charCountState',
    get: ({get}) => {
        const text = get(textState);

        return text.length;
    },
});


const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.completed);
      case 'Show Uncompleted':
        return list.filter((item) => !item.completed);
      default:
        return list;
    }
  },
});

export {charCountState, filteredTodoListState};