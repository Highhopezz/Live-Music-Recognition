import React from "react";

import style from "./UserHomePage.module.css";
import UserRouter from "../Routers/UserRouter";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";

const UserHomePage = () => {
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
          <UserRouter/>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
