import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/home/Footer";

function HomeLayout() {

    return (
        <div className="main-content-wrapper">
            <div className="main-container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default HomeLayout