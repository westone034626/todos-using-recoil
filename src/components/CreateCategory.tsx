import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { categoryState } from '../atoms';
import _ from 'lodash';

interface IForm {
  category: string;
}

function CreateCategory() {
  const setCategory = useSetRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {
    setCategory((oldCategories) => [...oldCategories, _.trim(category)]);
    setValue('category', '');
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('category', {
          required: 'Please write a Category',
        })}
        placeholder="Write a Category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
