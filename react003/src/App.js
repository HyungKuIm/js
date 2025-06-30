import logo from './logo.svg';
import './reset.css';

import Title from './components/Title';
import Form from './components/Form';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Title />
      <Form />
      <Counter />
    </div>
  );
}

export default App;
