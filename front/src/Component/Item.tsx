import { useState, useCallback, ChangeEvent } from 'react';import './../Scss/Item.scss';
import { RiDeleteBinLine, RiPencilLine, RiCheckLine, RiCloseLine } from "react-icons/ri";
import { ITodoTypes } from '../Recoil/Todo';
import { SetterOrUpdater } from 'recoil';
import './../Scss/Item.scss';
import axios from 'axios';

interface PropTypes {
    id: number;
    content: string;
    isDone: boolean;
    deleteAt: boolean;

    todos: ITodoTypes[];
    setTodos: SetterOrUpdater<ITodoTypes[]>;
}

const Item: React.FC<PropTypes> = ({id, content, isDone, deleteAt, todos, setTodos}: PropTypes) => {
    const [modifyContents, setModifyContents] = useState<string>('');
    const [isMod, setIsMod] = useState<boolean>(false);

    const onModifyTodo = useCallback(():void => {
        if (!modifyContents.trim()) return;
        
        axios.put('/updContent', {id, content: modifyContents})
        .then(res => {
            setTodos(todos.map((todo:ITodoTypes) => {
                return todo.id === id ? {...todo, content: modifyContents} : todo;
            }));
        })
        .catch(e => {
            console.log(e);
        });
        setIsMod(!isMod);
    }, [id, modifyContents, setTodos, todos, setIsMod, isMod]);

    const onChange = useCallback((e:ChangeEvent<HTMLInputElement>):void => {
        const { value } = e.target;
        
        setModifyContents(value);
    }, []);

    const onCheckTodo = useCallback(() => {
        axios.put('/updIsDone', {id, isDone: !isDone})
        .then(res => {
            setTodos(todos.map((todo:ITodoTypes) => {
                return todo.id === id ? {...todo, isDone: !isDone} : todo;
            }));
        })
        .catch(e => {
            console.log(e);
        });
    }, [id, todos, setTodos, isDone]);

    const onDelTodo = useCallback(() =>{
        if(window.confirm('삭제하시겠습니까?')) {
            axios.delete('/delTodo', {data : {id: id, deleteAt: !deleteAt}})
            .then(res => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(e => {
                console.log(e);
            });
        }
    }, [id, deleteAt, todos, setTodos]);

    return (
        <div className='Item'>
            <div className='Item-State'>
                <span className='Item-State-IsCompleted' onClick={onCheckTodo}> {isDone ? '■' : '□'}</span>
                {
                    isMod 
                    ? <input className='Item-State-Input' type='text' defaultValue={content} onChange={onChange} autoFocus/> 
                    : <span onClick={onCheckTodo}>{content}</span>
                }
            </div>
            
            <div className='Item-Manage'>   
                {
                    isMod
                    ?
                    <>
                        <RiCheckLine className='Item-Manage-Icon' onClick={onModifyTodo}/>
                        <RiCloseLine onClick={():void => setIsMod(!isMod)}/>
                    </>
                    : 
                    <>
                        <RiPencilLine className='Item-Manage-Icon' onClick={():void => setIsMod(!isMod)}/>
                        <RiDeleteBinLine onClick={onDelTodo}/>
                    </>
                }             
                
            </div>
        </div> 
    );
}

export default Item;