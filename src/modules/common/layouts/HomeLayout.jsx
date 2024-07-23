import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

function HomeLayout() {

    return (
        <div className="main-content-wrapper">
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default HomeLayout