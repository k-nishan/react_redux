import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import {deleteUsers} from '../Slices/userSlice'

const Users = () => {
  const dispatch = useDispatch();

  /* state is represent the reducer object in the store */
  const users = useSelector((state) => state.userInfo.users);

  const deleteUser = (index) => {
    dispatch(deleteUsers(index))
  }
  console.log(users)
  return (
    <div>
      {users?.map((user, index) => {
        return(
          <div key={index} style={{background: 'gray', margin: '10px', padding: '10px'}}>
            <h2>{user.userName}</h2>
            <h2>{user.age}</h2>
            <h2>{user.email}</h2>
            <h2>{user.contact}</h2>
            <button onClick={() => deleteUser(index)}>Delete</button>
           </div> 
        )
      })}
    </div>
  )
}

export default Users
