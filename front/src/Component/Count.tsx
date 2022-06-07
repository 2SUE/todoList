import './../Scss/Count.scss';
import { useRecoilValue } from 'recoil';
import { todoState } from '../Recoil/Todo';

export const Count:React.FC = ():JSX.Element => {
    const todos = useRecoilValue(todoState);
    const doneList = todos.filter((list:any) => list.isDone === true);
    
    return (
        <div className="count">
            {
                todos.length > 0?
                (
                <>
                    <span>{todos.length}</span>개의 일 중 <span>{doneList.length}</span>개를 완료했습니다.
                    {todos.length === doneList.length ? <span> 축하드립니다!</span> : <></>}
                </>
                )
                :
                <>오늘의 할일을 추가해 보세요!</>
            }
            
        </div>
    );
}