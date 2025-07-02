import { useRecoilState } from "recoil";
import { todoListFilterState } from "../store/atom";

const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    return (
        <>
            Filter:
            <select value={filter} onChange={e => setFilter(e.target.value)}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    );
}

export default TodoListFilters;