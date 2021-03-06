import { atom, selector } from 'recoil';

export enum Categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}
export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const currentCategory = atom<string>({
  key: 'currentCategory',
  default:
    localStorage.getItem('currentCategory') === null
      ? Categories.TO_DO
      : JSON.parse(localStorage.getItem('currentCategory') as string),
});

export const categoryState = atom<string[]>({
  key: 'catogory',
  default:
    localStorage.getItem('categoryState') === null
      ? [Categories.TO_DO, Categories.DOING, Categories.DONE]
      : JSON.parse(localStorage.getItem('categoryState') as string),
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: JSON.parse(
    (localStorage.getItem('toDoState') === null
      ? '[]'
      : localStorage.getItem('toDoState')) as string
  ),
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(currentCategory);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
