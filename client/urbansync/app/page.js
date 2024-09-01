'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from './_components/Navbar'; // Adjust the path if necessary

import UserDashboard from './_components/UserDashboard';
import ProjMDashboard from './_components/ProjectManagerDashboard';
import AdminDashboard from './_components/AdminDashboard';
import SuperAdminDashboard from './_components/SupAdminDashboard';
import ITAdminDashboard from './_components/ITAdminDashboard'
const roleComponentMap = {
  'Department Head': AdminDashboard,
  'employee': UserDashboard,
  'SuperAdmin': SuperAdminDashboard,
  'Project Manager': ProjMDashboard,
  'IT Admin' : ITAdminDashboard
};

const Dashboard = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = sessionStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
    } else {
      console.error('Role not found in session storage');
    }
  }, []);

  if (role === null) return <div>Loading...</div>;

  const ComponentToRender = roleComponentMap[role];

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard for different user roles" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div style={{ marginLeft: '20%', marginRight: '2%' }}>
        {ComponentToRender ? (
          <ComponentToRender />
        ) : (
          <div>Access Denied</div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
