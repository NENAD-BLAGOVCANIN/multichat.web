import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/home/Footer";

function AppLayout() {

    return (
        <div className="main-content-wrapper">
            <div className="navbar-wrapper">
                <Navbar />
            </div>
            <div className="main-container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default AppLayout