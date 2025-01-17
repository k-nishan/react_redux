import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {
  /* state is represent the reducer object in the store */
  const users = useSelector((state) => state.userInfo.users);
  console.log(users)
  return (
    <div>
      Users
    </div>
  )
}

export default Users
