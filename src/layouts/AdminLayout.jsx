import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/admin/layout/Sidebar";
import Header from "../components/admin/layout/Header";

function AdminLayout({ darkMode, toggleDarkMode }) {
    return (
        <div className="page-content-wrapper">
            <Sidebar />
            <div className="admin-content-wrapper">
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div className="main-container">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout