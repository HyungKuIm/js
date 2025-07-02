import {RecoilRoot} from 'recoil';

import CharacterCounter from './components/CharacterCounter';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';


function App() {
  

  return (
    <RecoilRoot>
      <TodoInput />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
