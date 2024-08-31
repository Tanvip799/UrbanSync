
'use client';
import { useEffect, useState } from 'react';

import UserDashboard from '../_components/UserDashboard';
import ProjMDashboard from '../_components/projectManagerDashboard';
import AdminDashboard from '../_components/AdminDashboard';
import SuperAdminDashboard from '../_components/SupAdminDashboard';


const Dashboard = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {

    const storedRole = sessionStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
      console.log(storedRole);
    } else {
     
      console.error('Role not found in session storage');
     
    }
  }, []);

  if (!role) return <div>Loading...</div>;

  return (
    <div>
      {role === 'Admin' && <AdminDashboard />}
      {role === 'user' && <UserDashboard />}
      {role === 'SuperAdmin' && <SuperAdminDashboard />}
      {role === 'Project Manager' && <ProjMDashboard />}
      {!['Admin', 'user', 'SuperAdmin','Project Manager'].includes(role) && <div>Access Denied</div>}
    </div>
  );
};

export default Dashboard;
