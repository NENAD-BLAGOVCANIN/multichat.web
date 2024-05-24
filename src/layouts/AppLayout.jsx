import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function AppLayout() {

    return (
        <div className="main-content-wrapper">
            <Navbar />
            <div className="main-container">
                <Outlet />
            </div>
        </div>
    );
}

export default AppLayout