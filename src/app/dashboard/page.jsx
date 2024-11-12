'use client'
import Layout from "@/Components/Layout";
import withAuth from "../../../middleware/withAuth";

import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, PointElement, LineElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useState } from "react";
// Register necessary Chart.js components
ChartJS.register(ArcElement, CategoryScale,PointElement, LineElement, LinearScale, BarElement, Title, Tooltip, Legend);


const Dashboard = () => {
 
  // Data for the Bar Chart
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Current clients',
        data: [30, 45, 60, 80, 70, 90, 100, 85, 60, 50, 40, 65],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Subscribers',
        data: [20, 35, 50, 60, 55, 70, 90, 60, 40, 35, 30, 50],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'New customers',
        data: [10, 25, 40, 50, 45, 60, 80, 55, 30, 25, 20, 35],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Options for the Bar Chart
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
      },
    },
  };

  // Data for the Doughnut Chart (Circular Progress)
  const doughnutData = {
    labels: ['Organic', 'Social', 'Direct'],
    datasets: [
      {
        data: [80, 60, 50],
        backgroundColor: ['#8e44ad', '#3498db', '#e74c3c'],
        hoverBackgroundColor: ['#9b59b6', '#5dade2', '#ec7063'],
      },
    ],
  };

  const doughnutOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'white',
        },
      },
    },
  };

  // Line chart data for completed tasks over time
  const lineData = {
    labels: ['Jan 1', 'Jan 8', 'Jan 16', 'Jan 24', 'Jan 31', 'Feb 1'],
    datasets: [
      {
        label: 'Completed tasks',
        data: [0, 100, 200, 180, 257, 300],
        fill: false,
        borderColor: '#3498db',
        backgroundColor: '#3498db',
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false, // Disable the default aspect ratio
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { color: '#fff' },
      },
      y: {
        ticks: { color: '#fff' },
      },
    },
  };

  const ordersData = [
    { id: '#1526', client: 'Emma Grace', email: 'wow@emmagrace.com', date: 'Jan 12, 2024', status: 'Delivered', country: 'Australia', total: '$6,729.82' },
    { id: '#1525', client: 'Ava Rose', email: 'me@avarose.com', date: 'Jan 09, 2024', status: 'Canceled', country: 'Canada', total: '$784.94' },
    { id: '#1524', client: 'Olivia Jane', email: 'info@oliviajane.com', date: 'Jan 06, 2024', status: 'Pending', country: 'Singapur', total: '$1,247.86' },
    { id: '#1523', client: 'Mason Alexander', email: 'myinfo@alexander.com', date: 'Jan 03, 2024', status: 'Delivered', country: 'United States', total: '$304.89' },
    { id: '#1522', client: 'Samuel David', email: 'me@samueledavid.com', date: 'Jan 01, 2024', status: 'Pending', country: 'Japan', total: '$2,209.76' },
    { id: '#1521', client: 'Henry Joseph', email: 'contact@henryjoseph.com', date: 'Dec 28, 2023', status: 'Delivered', country: 'North Korea', total: '$5,245.68' },
    { id: '#1526', client: 'Ema Grace', email: 'wow@emmagrace.com', date: 'Jan 12, 2024', status: 'Delivered', country: 'Australia', total: '$6,729.82' },
    { id: '#1525', client: 'Ava Rose', email: 'me@avarose.com', date: 'Jan 09, 2024', status: 'Canceled', country: 'Canada', total: '$784.94' },
    { id: '#1524', client: 'Olivia Jane', email: 'info@oliviajane.com', date: 'Jan 06, 2024', status: 'Pending', country: 'Singapur', total: '$1,247.86' },
    { id: '#1523', client: 'Mason Alexander', email: 'myinfo@alexander.com', date: 'Jan 03, 2024', status: 'Delivered', country: 'United States', total: '$304.89' },
    { id: '#1522', client: 'Samuel David', email: 'me@samueledavid.com', date: 'Jan 01, 2024', status: 'Pending', country: 'Japan', total: '$2,209.76' },
    { id: '#1521', client: 'Henry Joseph', email: 'contact@henryjoseph.com', date: 'Dec 28, 2023', status: 'Delivered', country: 'North Korea', total: '$5,245.68' },
  ];

  const [currentPage, setCurrentPage] = useState(2);
  const rowsPerPage = 6;

  const totalPages = Math.ceil(ordersData.length / rowsPerPage);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500';
      case 'Canceled':
        return 'bg-red-500';
      case 'Pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const displayedOrders = ordersData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );



  return (
     <Layout>
      <div className='min-h-screen'>
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      
      <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Analytics</h1>
       
      </header>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-purple-400">Save Products</h2>
            <span className="material-icons">more_vert</span>
          </div>
          <div className="text-3xl font-bold">50.8K</div>
          <div className="text-green-500 mt-2">+28.4%</div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-pink-400">Stock Products</h2>
            <span className="material-icons">more_vert</span>
          </div>
          <div className="text-3xl font-bold">23.6K</div>
          <div className="text-red-500 mt-2">-12.6%</div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-purple-400">Sale Products</h2>
            <span className="material-icons">more_vert</span>
          </div>
          <div className="text-3xl font-bold">756</div>
          <div className="text-green-500 mt-2">+3.1%</div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-purple-400">Average Revenue</h2>
            <span className="material-icons">more_vert</span>
          </div>
          <div className="text-3xl font-bold">2.3K</div>
          <div className="text-green-500 mt-2">+11.3%</div>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="flex gap-6 w-full">
        {/* Website Visitors - Doughnut Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-1/3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Website Visitors</h2>
            <button className="bg-gray-700 py-1 px-3 rounded-full">Export</button>
          </div>
          <Doughnut data={doughnutData} options={doughnutOptions} />
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-purple-500">Organic</span>
              <span>80%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-500">Social</span>
              <span>60%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-pink-500">Direct</span>
              <span>50%</span>
            </div>
          </div>
        </div>

        {/* Revenue by Customer Type - Bar Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-2/3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Revenue by customer type</h2>
            <div className="bg-gray-700 py-1 px-3 rounded-full">Jan 2024</div>
          </div>
          <div className="text-4xl font-bold mb-4">$240.8K</div>
          <div className="text-green-500">+14.8%</div>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>


    
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Product and Graph Section */}
      <div className="grid grid-cols-1 gap-4 mb-8 w-full">
       
       

        {/* Line Chart Section */}
        
<div className="bg-gray-800 p-6 rounded-lg shadow-md">
  <h2 className="text-lg font-bold mb-4 text-white">Completed tasks over time</h2>
  <div className="text-3xl font-bold mb-2 text-white">257</div>
  <div className="text-green-500 mb-4">+18.8%</div>
  <div style={{ height: '300px', position: 'relative' }}>
    <Line data={lineData} options={lineOptions} height={300} />
  </div>
</div>
      
      </div> 

      
      <div className="p-6 bg-[#13172a] text-white min-h-screen">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Orders Status</h1>
        
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-[#0d111d]">
              <th className="px-4 py-2">
                <input type="checkbox" className="form-checkbox" />
              </th>
              <th className="px-4 py-2">Order</th>
              <th className="px-4 py-2">Client</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {displayedOrders.map((order, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="px-4 py-2">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-col">
                    <span>{order.client}</span>
                    <span className="text-sm text-gray-400">{order.email}</span>
                  </div>
                </td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">{order.country}</td>
                <td className="px-4 py-2">{order.total}</td>
                <td className="px-4 py-2 flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-white">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span>{(currentPage - 1) * rowsPerPage + 1}-{Math.min(currentPage * rowsPerPage, ordersData.length)} of {ordersData.length}</span>
        <div className="flex space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-3 py-1 rounded-full bg-gray-800 ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded-full ${currentPage === i + 1 ? 'bg-purple-600' : 'bg-gray-800'}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-3 py-1 rounded-full bg-gray-800 ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>








    </div>



      </div>
      </Layout>
  );
};

export default Dashboard;