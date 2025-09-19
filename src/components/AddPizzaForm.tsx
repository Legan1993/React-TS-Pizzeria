import React, { FC, useState } from 'react';
import './styles.css';

const initState = {
  title: '',
  price: '',
  img: ''
};

const AddPizzaForm: FC = () => {
  const [newPizza, setNewPizza] = useState<{title: string, price: string, img: string}>(initState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPizza({
      ...newPizza,
      [name]: value
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('handle change >> ', e.target);
    console.log('new pizza >> ', newPizza);
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">
        + Добавить в меню
      </button>
    </form>
  )
}

export default AddPizzaForm;