import React from "react";
import { Route, Routes } from "react-router-dom";
import GuestHomePage from "../Guest/GuestHomePage";
import AdminHomePage from "../Admin/AdminHomePage";
import UserHomePage from "../User/UserHomePage";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GuestHomePage />} />
        <Route path="admin/*" element={<AdminHomePage />} />
        <Route path="user/*" element={<UserHomePage />} />
       
      </Routes>
    </div>
  );
};

export default MainRouter;
