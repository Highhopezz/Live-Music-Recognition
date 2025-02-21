import React from 'react'
import style from './sidebar.module.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className={style.main}>
      <div className={style.sub}>
          <div className={style.sidebar_link}><Link to={'/user/editprofile'}>Edit Profile</Link></div>   
          <div> <Link to={'/user/myprofile'}>My Profile</Link></div>
          <div> <Link to={'/user/changepassword'}>Change Password</Link></div>
      </div>
     
    </div>
  )
}

export default Sidebar