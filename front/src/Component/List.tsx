import { useRecoilState } from 'recoil';
import { ITodoTypes, todoState } from '../Recoil/Todo';
import './../Scss/List.scss';
import Item from './Item';

export const List: React.FC = () => {
    const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todoState);
    const list = todos.filter((todo:any) => todo.isDone === false);
    
    return (
        <div>
            {
                list.map((todo:ITodoTypes):JSX.Element => {
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
            }
        </div>
    );
}