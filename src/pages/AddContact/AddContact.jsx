import { useState } from 'react';

export const AddContacts = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const onChangeHandler = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'age':
        setAge(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <form>
        <label>
          Name
          <input
            type="text"
            value={name}
            name="name"
            onChange={onChangeHandler}
          />
        </label>
        <label>
          Age
          <input
            type="text"
            value={age}
            name="age"
            onChange={onChangeHandler}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
