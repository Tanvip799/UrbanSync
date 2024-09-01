import React from 'react'
import Navbar from '../_components/Navbar'
import UserDashboard from '../_components/UserDashboard'


function page() {
    return (
        <div>
            <Navbar />
            <div style={{ marginLeft: '20%', marginRight: '2%' }}>
                <UserDashboard />
            </div>
        </div>
    )
}

export default page