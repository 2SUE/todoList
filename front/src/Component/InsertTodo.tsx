import { ChangeEvent, useCallback, KeyboardEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { ITodoTypes, todoState } from '../Recoil/Todo';
import { RiAddBoxLine } from "react-icons/ri";
import './../Scss/InsertTodo.scss';
import axios from 'axios';

export const InsertTodo: React.FC = () => {
    const [content, setContent] = useState<string>('');

    // const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todoState); 와 동일
    // useRecoilValue : get 변수
    // useSetRecoilState : setter 지정
    const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todoState);

    const addTodo = useCallback(():void => {
        if (!content.trim()) return; // 빈칸 입력 방지

        setContent('');

        axios.post('/insTodo', {content})
        .then(res => {
            const todo:ITodoTypes = {
                id: res.data,
                content: content,
                deleteAt: false,
                isDone: false,
            };
            setTodos([...todos, todo]);
        })
        .catch(e => console.log(e)) 
        
    }, [content, setContent, todos, setTodos]);

    const onChange = useCallback((e:ChangeEvent<HTMLInputElement>):void => {
        const { value } = e.target;
        setContent(value);
    }, [setContent]);

    const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>):void => {
        if (e.key === 'Enter') addTodo();
    }, [addTodo]);

    return (
        <div className='InsertTodo'>
            <span className='InsertTodo-AddIcon'>
                <RiAddBoxLine size={19} onClick={addTodo}/>
            </span>
            <input
                type='text' 
                className='InsertTodo-Input' 
                autoFocus 
                placeholder='할 일을 입력하고 Enter를 누르세요.'
                value={content}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}