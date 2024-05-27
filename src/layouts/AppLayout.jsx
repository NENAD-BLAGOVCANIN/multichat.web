import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/home/Footer";

function AppLayout({darkMode, toggleDarkMode}) {

    return (
        <div className="main-content-wrapper">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <div className="main-container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default AppLayout