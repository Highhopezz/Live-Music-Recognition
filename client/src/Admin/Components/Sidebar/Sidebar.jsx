import React from 'react'
import style from './sidebar.module.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className={style.main}>
     <div><Link to={'/admin/addprivacy'}>Add Privacy</Link></div>   
       <div> <Link to={'/admin/adminregistration'}>Admin Registration</Link></div>
       
    </div>
  )
}

export default Sidebar