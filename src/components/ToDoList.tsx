import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, currentCategory, toDoSelector } from '../atoms';
import CreateCategory from './CreateCategory';
import CreateToDo from './CreateTodo';
import ToDo from './ToDo';

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(currentCategory);
  const categories = useRecoilValue(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        {categories.map((ctg) => (
          <option key={ctg} value={ctg}>
            {ctg}
          </option>
        ))}
      </select>
      <CreateCategory />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
