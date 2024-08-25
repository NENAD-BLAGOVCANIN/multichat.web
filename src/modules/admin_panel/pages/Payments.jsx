import React, { useState, useEffect } from 'react'
import { getPayments } from '../api/payments';

function Payments() {

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const fetchedPayments = await getPayments();
        setPayments(fetchedPayments);
      } catch (error) {
        console.error('Error fetching :', error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className='container'>
      <h3 className='mt-4 mb-3 ps-2'>Payments</h3>
      <span className='medium ps-2'>A list of all subscription payments</span>


      <div className='m-auto d-block w-100 mt-4' style={{ maxWidth: 1500, overflowX: 'auto' }}>
        <div className='table-responsive'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th className='medium fw-400'>Amount</th>
                <th className='medium fw-400'>User ID</th>
                <th className='medium fw-400'>Time Created</th>
                <th className='medium fw-400'>Transaction Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(payment => (
                <tr key={payment.id}>
                  <td className='medium py-3'>{payment.amount.toFixed(2)} USD</td>
                  <td className='medium py-3'>{payment.user}</td>
                  <td className='medium py-3'>{payment.created_at}</td>
                  <td className='medium py-3 text-success'>Successfull</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Payments