import React from 'react'

function PaymentSuccess() {
    return (
        <div style={{ minHeight: '90vh' }} className='container w-100 d-flex align-items-center justify-content-center bg-white'>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12s col-lg-12s m-auto">
                    <div>
                        <div class="card-body text-center">
                            <p class="card-icon"><i class="icon an an-shield-check fs-1"></i></p>
                            <h2 class="bold mb-3">Thank you for your order!</h2>
                            <p class="card-text mb-1">You will receive an email with details of your subscription and a monthly reminder for next payments.</p>
                            <p class="card-text mb-1">All necessary information about the subscription, will be sent to your email</p>
                            <p class="card-text text-order badge bg-success my-3">Your payment # is: <b>00000123</b></p>
                            <p class="card-text mb-0">Order date: 14 Nov 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess