import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import { Pie, Doughnut, Line } from 'react-chartjs-2';
import { CurrencyDollar, Person } from 'react-bootstrap-icons';
import { getDashboardStats, getMonthlyEarnings } from '../api/dashboard';

function Dashboard() {

    const [stats, setStats] = useState({
        total_number_of_users: 0,
        total_earnings: 0,
        number_of_subscribed_users: 0,
        number_of_standard_subscribed_users: 0,
        number_of_pro_subscribed_users: 0,
    });

    const [monthlyEarnings, setMonthlyEarnings] = useState({ months: [], earnings: [] });
    const [lineChartData, setLineChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Monthly Earnings',
                data: [],
                fill: true,
                backgroundColor: '#791f9055',
                borderColor: '#791f90',
                tension: 0.4,
            },
        ],
    });

    const subscriptionData = {
        labels: ['Standard Plan', 'Pro Enterprise'],
        datasets: [
            {
                label: '',
                data: [
                    Math.floor(stats.number_of_standard_subscribed_users * 100),
                    Math.floor(stats.number_of_pro_subscribed_users * 100),
                ],
                backgroundColor: ['#cf004c', '#4D81F1'],
                borderColor: ['#cf004c', '#4D81F1'],
                backgroundColor: ['#791f9055', '#ffc10755'],
                borderColor: ['#791f90', '#ffc107'],
                borderWidth: 1,
            },
        ],
    };


    function generateSmoothData(base, variation) {
        return Array.from({ length: 12 }, (_, i) => base + (Math.sin(i) * variation));
    }

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
                setStats(fetchedStats);
            } catch (error) {
                console.error('Error fetching :', error);
            }
        };

        const fetchMonthlyEarnings = async () => {
            try {
                const data = await getMonthlyEarnings();
                setMonthlyEarnings(data);

                setLineChartData({
                    labels: data.months,
                    datasets: [
                        {
                            label: 'Monthly Earnings',
                            data: data.earnings,
                            fill: true,
                            backgroundColor: '#791f9055',
                            borderColor: '#791f90',
                            tension: 0.4,
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching monthly earnings:', error);
            }
        };
        fetchDashboardStats();
        fetchMonthlyEarnings();
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
                            <h2 className="m-0 pe-2">{stats.total_number_of_users}</h2>
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
                            <h2 className="m-0 pe-2">{stats.total_earnings}</h2>
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
                            <h2 className="m-0 pe-2">{stats.number_of_subscribed_users}</h2>
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
                <div className="col-md-12 p-3">
                    <div className="card p-3 rounded d-flex justify-content-center flex-column w-100">
                        <h5 className="mb-4">Subscripitions</h5>
                        <div className="m-auto pb-3" style={{ maxWidth: 400 }}>
                            <Doughnut data={subscriptionData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;
