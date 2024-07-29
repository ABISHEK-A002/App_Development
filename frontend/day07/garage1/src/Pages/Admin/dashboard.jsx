import React from 'react';
import { FaChartLine, FaUser, FaCalendarWeek, FaCalendarDay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import '../../Assets/Styles/Admin/dashboard.css';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Revenue',
      data: [3000, 2000, 3500, 4000, 5000, 6000],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      fill: true,
    },
  ],
};

const pieData = {
  labels: ['Direct', 'Referral', 'Social'],
  datasets: [
    {
      data: [55, 25, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <motion.aside
        className="sidebar"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <h2>Dashboard</h2>
        <ul>
          <li>
            <FaUser /> Recent Customers
          </li>
          <li>
            <FaChartLine /> Monthly Report
          </li>
          <li>
            <FaCalendarWeek /> Weekly Report
          </li>
          <li>
            <FaCalendarDay /> Daily Report
          </li>
        </ul>
      </motion.aside>
      <main className="content">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>Select a report from the sidebar to view details.</p>
        <div className="charts">
          <motion.div
            className="chart-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3>Revenue Over Time</h3>
            <Line data={data} />
          </motion.div>
          <motion.div
            className="chart-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3>Customer Distribution</h3>
            <Pie data={pieData} />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
