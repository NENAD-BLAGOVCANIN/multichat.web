import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/home/Footer";

function AppLayout() {

    return (
        <div className="main-content-wrapper">
            <Navbar />
            <div className="main-container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default AppLayout