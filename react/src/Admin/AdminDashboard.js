import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ListAllProducts from "./ListAllProducts";
import AddAdmin from "./AddAdmin";
import Logout from "../Logout";
import AddProduct from "./AddProduct";
import TodaysReport from "./TodaysReport";
import DayWiseReport from "./DayWiseReport";

function AdminDashboard() {
    const { user_name } = useParams();
    const navigate = useNavigate();
    const user = sessionStorage.getItem('userData');
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleComponentChange = (component) => {
        setSelectedComponent(component);
    };

    const renderSelectedComponent = () => {
        switch (selectedComponent) {
            case 'listAll':
                return <ListAllProducts />;
            case 'addAdmin':
                return <AddAdmin />;
            case 'logout':
                return <Logout></Logout>;
            case 'addproduct':
                return <AddProduct></AddProduct>
             case 'reports':
                return <DayWiseReport></DayWiseReport>
            default:
                return <ListAllProducts />;
        }
    };

    return (
        <div className="dashboard">
             <h2 align="center">Welcome to Admin Dashboard {user_name}</h2>
            <TodaysReport></TodaysReport>
            <div className="main-content">
               
                <div className="button-container d-flex justify-content-center mt-4">
                    <div className="btn-group" role="group">
                        <button className="btn btn-outline-primary" onClick={() => handleComponentChange('listAll')}>List All Products</button>
                        <button className="btn btn-outline-primary" onClick={() => handleComponentChange('addAdmin')}>Add User</button>
                        <button className="btn btn-outline-primary" onClick={() => handleComponentChange('addproduct')}>Add Product</button>
                        <button className="btn btn-outline-primary" onClick={() => handleComponentChange('reports')}>Reports</button>
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

export default AdminDashboard;
