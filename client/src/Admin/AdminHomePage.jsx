import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import AdminRouter from "../Routers/AdminRouter";
import style from "./AdminHome.module.css";

const AdminHomePage = () => {
  return (
    <div className={style.main}>
      <div>
        <Sidebar />
      </div>
      <div className={style.mainSec}>
        <div>
          <Navbar />
        </div>

        <div>
          <AdminRouter />
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
