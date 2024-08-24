import React from 'react'
import { Outlet } from "react-router";
import AccountSideNav from '../components/AccountSideNav';

function AccountLayout() {
    return (
        <div className="container-fluid pt-4 px-3 pb-6">

            <div className="d-flex g-4">
                <AccountSideNav />
                <div className="col-md-7 mx-auto">
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default AccountLayout