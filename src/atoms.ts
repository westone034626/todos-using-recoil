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
  default: Categories.TO_DO,
});

export const categoryState = atom<string[]>({
  key: 'catogory',
  default: [Categories.TO_DO, Categories.DOING, Categories.DONE],
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
