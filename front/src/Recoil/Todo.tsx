import axios from 'axios';
import { atom, selector } from "recoil";

export interface ITodoTypes {
    id: number;
    content: string;
    deleteAt: boolean;
    isDone: boolean;
}

export const todoState = atom({
    key: 'todos',
    default: selector({
        key: 'selTodo',
        get: async () => {
            const res = await axios.get('/selList');
            const list = res.data.filter((todo:any) => todo.deleteAt === false);
            return list;
    }})
});

let fullDate:Date = new Date();
const month = (fullDate.getMonth()+1).toString().length === 1?'0'+(fullDate.getMonth()+1):(fullDate.getMonth()+1);
const day = (fullDate.getDate()).toString().length === 1?'0'+(fullDate.getDate()):(fullDate.getDate());
const date = `${fullDate.getFullYear()}년 ${month}월 ${day}일`;
export const dateState = atom<string>({
    key: 'date',
    default: date
})