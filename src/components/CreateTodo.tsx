import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentCategory, toDoState } from '../atoms';

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(currentCategory);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => {
      const newTodos = [{ text: toDo, id: Date.now(), category }, ...oldToDos];
      localStorage.setItem('toDoState', JSON.stringify(newTodos));
      return newTodos;
    });
    setValue('toDo', '');
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('toDo', {
          required: 'Please write a To Do',
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
      {errors?.toDo?.message && <span>{errors?.toDo?.message}</span>}
    </form>
  );
}

export default CreateToDo;
