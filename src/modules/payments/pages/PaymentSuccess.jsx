import React from 'react'
import { ShieldFillCheck } from 'react-bootstrap-icons';

function PaymentSuccess() {

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const today = new Date();

    return (
        <div style={{ minHeight: '90vh' }} className='container w-100 d-flex align-items-center justify-content-center bg-white'>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12s col-lg-12s m-auto">
                    <div>
                        <div class="card-body text-center">
                            <p class="card-icon">
                                <ShieldFillCheck className='h1 text-success' />
                            </p>
                            <h2 class="bold mb-3">Thank you for your order!</h2>
                            <p class="card-text mb-1">You will receive an email with details of your subscription and a monthly reminder for next payments.</p>
                            <p class="card-text mb-1">All necessary information about the subscription, will be sent to your email</p>
                            <p class="card-text text-order badge bg-success my-3">Your payment # is: <b>00000523</b></p>
                            <p class="card-text mb-0">Order date: {formatDate(today)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess