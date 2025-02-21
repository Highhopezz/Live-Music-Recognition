import React from 'react'
import EditProfile from '../User/Pages/EditProfile/EditProfile'
import MyProfile from '../User/Pages/MyProfile/MyProfile'
import ChangePassword from '../User/Pages/ChangePassword/ChangePassword'
import { Route, Routes } from 'react-router-dom'

const UserRouter = () => {
  return (
    <div><Routes>
    <Route path="editprofile" element={<EditProfile />} />
    <Route path="myprofile" element={<MyProfile />} />
    <Route path="changepassword" element={<ChangePassword />} />
  </Routes></div>
  )
}

export default UserRouter