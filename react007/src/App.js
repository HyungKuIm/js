import {RecoilRoot} from 'recoil';

import CharacterCounter from './components/CharacterCounter';



function App() {
  

  return (
    <RecoilRoot>
      <div>리코일 상태관리자 연습중입니다.</div>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
