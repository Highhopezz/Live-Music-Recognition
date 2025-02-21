import React from "react";
import AddPrivacy from "../Admin/Pages/AddPrivacy/AddPrivacy";
import AdminRegistration from "../Admin/Pages/AdminRegistration/AdminRegistration";
import { Route, Routes } from "react-router-dom";

const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="addprivacy" element={<AddPrivacy />} />
        <Route path="adminregistration" element={<AdminRegistration />} />
       
      </Routes>
    </div>
  );
};

export default AdminRouter;
