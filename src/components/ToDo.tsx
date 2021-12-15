import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, currentCategory, IToDo, toDoState } from '../atoms';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const curCategory = useRecoilValue(currentCategory);
  const categories = useRecoilValue(categoryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name };
      const newTodos = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem('toDoState', JSON.stringify(newTodos));
      return newTodos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {categories.map((ctg) => {
        return ctg !== curCategory ? (
          <button key={ctg} name={ctg} onClick={onClick}>
            {ctg}
          </button>
        ) : null;
      })}
    </li>
  );
}

export default ToDo;
