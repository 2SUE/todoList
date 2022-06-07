import { useRecoilValue } from 'recoil';
import { dateState } from './Recoil/Todo';
import { List } from './Component/List';
import { DoneList } from './Component/DoneList';
import { InsertTodo } from './Component/InsertTodo';
import { Count } from './Component/Count';
import './Scss/Common.scss';

export const App: React.FC = () => {
  const date = useRecoilValue<string>(dateState);
  
  return (
    <div className='container'>
      <div className='topHeader'>
          <span>{date}</span>
      </div>
      <div className='listContainer'>
        <div className='bottomHeader'>
          TODO LIST
        </div>
        <InsertTodo />
        <div className='List'>
          <List />
          <DoneList />
        </div>
        <Count />
      </div>
    </div>
  );
}

export default App;
