import React, { useState } from "react";

const Home = () => {
  const [formInput, setFormInput] = useState({
    userName: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((currentInput) => {
      return {
        ...currentInput,
        [name]: value,
      };
    });
    console.log(name, value);
  };
  return (
    <div>
      <form>
        <label>Name</label>
        <br />
        <input
          name='userName'
          type='text'
          value={formInput.name}
          onChange={handleChange}
        />
        <br />
        <label>Age</label>
        <br />
        <input
          name='age'
          type='number'
          value={formInput.age}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          name='email'
          type='text'
          value={formInput.email}
          onChange={handleChange}
        />
        <br />
        <label>Contact</label>
        <br />
        <input
          name='contact'
          type='number'
          value={formInput.contact}
          onChange={handleChange}
        />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Home;
