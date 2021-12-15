import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { categoryState } from '../atoms';
import _ from 'lodash';

interface IForm {
  category: string;
}

function CreateCategory() {
  const [categories, setCategory] = useRecoilState(categoryState);
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {
    const trimmedCategory = _.trim(category);
    if (_.indexOf(categories, trimmedCategory) !== -1) {
      setError('category', { message: 'already exsist' });
      return;
    }
    setCategory((oldCategories) => {
      const newCategories = [...oldCategories, trimmedCategory];
      localStorage.setItem('categoryState', JSON.stringify(newCategories));
      return newCategories;
    });
    setValue('category', '');
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register('category')} placeholder="Write a Category" />
      <button>Add</button>
      {errors?.category?.message && <span>{errors?.category?.message}</span>}
    </form>
  );
}

export default CreateCategory;
