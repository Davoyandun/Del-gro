import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/admin/AdminSideBar";

export default function Admin() {
  return (
    <div>
      <AdminSideBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
