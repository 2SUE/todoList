import { useRecoilState } from 'recoil';
import { ITodoTypes, todoState } from '../Recoil/Todo';
import './../Scss/List.scss';
import Item from './Item';

export const DoneList: React.FC = () => {
    const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todoState);
    const doneList = todos.filter((todo:any) => todo.isDone === true);
    
    return (
        <div>
            {
                todos.length > 0 
                ? 
                doneList.map((todo:ITodoTypes):JSX.Element => {
                    const { id, content, isDone, deleteAt } = todo;
                    return (
                        <Item 
                            key={id} 
                            id={id} 
                            content={content} 
                            isDone={isDone} 
                            todos={todos}
                            deleteAt={deleteAt}
                            setTodos={setTodos}
                        />
                    );
                })
                : 
                <></>   
            }
        </div>
    );
}