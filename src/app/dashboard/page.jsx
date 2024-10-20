'use client'
import Layout from "@/Components/Layout";
import withAuth from "../../../middleware/withAuth";


const Dashboard = () => {
 
 // console.log('efeflkej');
  
  
  return (
     <Layout>
      <div className='h-screen'>
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold">Statistics</h2>
          <p className="text-gray-600">View your statistics here.</p>
        </div>
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold">Reports</h2>
          <p className="text-gray-600">Check your reports here.</p>
        </div>
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold">Settings</h2>
          <p className="text-gray-600">Manage your settings here.</p>
        </div>
      </div>
      </div>
      </Layout>
  );
};

export default Dashboard;