import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import { Pie, Doughnut, Line } from 'react-chartjs-2';
import { CurrencyDollar, Person } from 'react-bootstrap-icons';
import { getDashboardStats } from '../api/dashboard';

function Dashboard() {

    const [data, setData] = useState([]);

    const [stats] = useState({
        contactCount: Math.floor(Math.random() * 100),
        leadCount: Math.floor(Math.random() * 100),
        taskCount: Math.floor(Math.random() * 100),
        todoTasksCount: Math.floor(Math.random() * 100),
        inProgressTasksCount: Math.floor(Math.random() * 100),
        doneTasksCount: Math.floor(Math.random() * 100),
    });

    const contactData = {
        labels: ['Contacts', 'Leads'],
        datasets: [
            {
                label: '',
                data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
                backgroundColor: ['#cf004c', '#4D81F1'],
                borderColor: ['#cf004c', '#4D81F1'],
                borderWidth: 1,
            },
        ],
    };

    const taskCompletionData = {
        labels: ['To Do', 'In Progress', 'Completed'],
        datasets: [
            {
                label: '',
                data: [
                    Math.floor(Math.random() * 100),
                    Math.floor(Math.random() * 100),
                    Math.floor(Math.random() * 100),
                ],
                backgroundColor: ['#cf004c', '#4D81F1', '#20c997'],
                borderColor: ['#cf004c', '#4D81F1', '#20c997'],
                borderWidth: 1,
            },
        ],
    };


    function generateSmoothData(base, variation) {
        return Array.from({ length: 12 }, (_, i) => base + (Math.sin(i) * variation));
    }

    const lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Smooth Data 1',
                data: [1, 3, 10, 7, 8, 12, 15, 20, 17, 18, 28, 28, 30, 28, 35],
                fill: true,
                backgroundColor: '#791f9055',
                borderColor: '#791f90',
                tension: 0.4,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
        },
        maintainAspectRatio: false,
    };

    useEffect(() => {
        const fetchDashboardStats = async () => {
            try {
                const fetchedStats = await getDashboardStats();
                setData(fetchedStats);
            } catch (error) {
                console.error('Error fetching :', error);
            }
        };

        fetchDashboardStats();
    }, []);

    return (

        <div className="container">

            <h3 className='mt-4 mb-3 ps-2'>Dashboard</h3>

            <div className="row">
                <div className="col-md-4 p-3">
                    <div className="card p-3 rounded">
                        <div className='d-flex align-items-center justify-content-between pb-2'>
                            <span className="medium fw-500">Users</span>
                            <Person className='text-muted' />
                        </div>
                        <div className="d-flex align-items-center">
                            <h2 className="m-0 pe-2">{data.total_number_of_users}</h2>
                        </div>

                        <div className='pt-1'>
                            <span className='small'><span className='text-success'>+100.0%</span> from last period</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-3">
                    <div className="card p-3 rounded">
                        <div className='d-flex align-items-center justify-content-between pb-2'>
                            <span className="medium fw-500">Revenue</span>
                            <CurrencyDollar className='text-muted' />
                        </div>
                        <div className="d-flex align-items-center">
                            <h2 className="m-0 pe-2">{data.total_earnings}</h2>
                        </div>

                        <div className='pt-1'>
                            <span className='small'><span className='text-success'>+100.0%</span> from last period</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-3">
                    <div className="card p-3 rounded">
                        <div className='d-flex align-items-center justify-content-between pb-2'>
                            <span className="medium fw-500">Subscriptions</span>
                            <CurrencyDollar className='text-muted' />
                        </div>
                        <div className="d-flex align-items-center">
                            <h2 className="m-0 pe-2">{data.number_of_subscribed_users}</h2>
                        </div>

                        <div className='pt-1'>
                            <span className='small'><span className='text-success'>+100.0%</span> from last period</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 p-3">
                    <div className="card p-3 rounded d-flex justify-content-center flex-column w-100">
                        <h5 className="mb-3">Monthly Earnings</h5>
                        <div className="m-auto w-100 h-100 d-flex justify-content-center text-center">
                            <Line data={lineChartData} options={options} style={{ height: 320 }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 p-3">
                    <div className="card p-3 rounded d-flex justify-content-center flex-column w-100">
                        <h5 className="mb-4">Contact Management</h5>
                        <div className="m-auto pb-3" style={{ maxWidth: 400 }}>
                            <Doughnut data={contactData} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-3">
                    <div className="card p-3 rounded d-flex justify-content-center flex-column w-100">
                        <h5 className="mb-4">Task Management</h5>
                        <div className="m-auto pb-3" style={{ maxWidth: 400 }}>
                            <Doughnut data={taskCompletionData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;
