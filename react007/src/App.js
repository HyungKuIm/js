import {RecoilRoot} from 'recoil';

import CharacterCounter from './components/CharacterCounter';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoListFilters from './components/TodoListFilters';


function App() {
  

  return (
    <RecoilRoot>
      <TodoListFilters />
      <TodoInput />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
