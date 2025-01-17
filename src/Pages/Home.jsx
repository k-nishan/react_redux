import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../Slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();
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
  };

  const addUsers = (event) => {
    /* after form submit form will refresh as default
      if the form is refreshed the store data will be erased
      so need to restrict the default behaviour of the form */
    event.preventDefault(); 
    /* dispatching the action from user slice 
       the formInput will set to the action.payload */
    dispatch(setUsers(formInput));
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
        <button onClick={addUsers}>Add</button>
      </form>
    </div>
  );
};

export default Home;
