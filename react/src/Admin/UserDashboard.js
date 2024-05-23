import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListByCategory from '../ListByCatagory';
import { useParams } from 'react-router-dom';
import Logout from '../Logout';
import UserOrders from '../UserOrders';
import Invoice from '../Invoice';

export default function UserDashboard() {
    const { user_id, user_name } = useParams();
    const navigate = useNavigate();
    const user = sessionStorage.getItem('userData');
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleComponentChange = (component) => {
        setSelectedComponent(component);
    };

    const renderSelectedComponent = () => {
        switch (selectedComponent) {
            case 'explore':
                return <ListByCategory></ListByCategory>;
            case 'allorders':
                return <UserOrders userId={user_id}></UserOrders>
            case 'logout':
                return <Logout></Logout>;
            case 'invoice':
                return <Invoice></Invoice>
            default:
                return <ListByCategory></ListByCategory>;
        }
    };
    return (
        <div className="dashboard">
            <div className="main-content">
                <h2 align="center">Welcome {user_name}</h2>
                <div className="button-container d-flex justify-content-center mt-4">
                    <div className="btn-group" role="group">
                        <button className="btn btn-outline-primary" onClick={() => handleComponentChange('explore')}>Explore</button>
                        <button className="btn btn-outline-primary" onClick={() => handleComponentChange('allorders')}>All Orders</button>
                        <button className="btn btn-outline-primary" onClick={() => handleComponentChange('invoice')}>Invoice</button>
                        <button className="btn btn-outline-primary" onClick={() => handleComponentChange('logout')}>Logout</button>
                    </div>
                </div>
            </div>
            <div className="view-all">
                {renderSelectedComponent()}
            </div>
        </div>
    );
}
