import React from 'react'

function Account() {
    return (
        <div className="container">

            <h3 className="mt-5 pb-5 bold">My Account</h3>

            <p className="text-muted">Name: NENAD BLAGOVCANIN</p>
            <p className="text-muted">Email: nenadblagovcanin2@gmail.com</p>
            <p className="text-muted">
                Profile Created At: 12 April
            </p>
            <p className="text-muted">
                Email Verified:{" "}
                <span className="badge bagde-primary bg-danger">No</span>
            </p>
            <p className="text-muted m-0">
                Subscription:
                <span className="badge bagde-primary bg-success">
                    Free
                </span>
            </p>

        </div>
    )
}

export default Account