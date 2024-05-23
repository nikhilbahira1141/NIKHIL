import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import FillStock from './FillStock';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';

export default function ProductDetails() {

    const { id } = useParams();
    const navigate = useNavigate()
    const user = JSON.parse(sessionStorage.getItem('userData'))
    const [product, setProduct] = useState({});
    const [selectedComponent, setSelectedComponent] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/api/inventory/getProduct/${id}`)
            .then(res => res.json())
            .then((result) => { console.log(result); setProduct((result)); });
    }, []);



    const handleComponentChange = (component) => {
        setSelectedComponent(component);
    };

    const renderSelectedComponent = () => {
        switch (selectedComponent) {
            case 'fillStock':
                return <FillStock id={id}></FillStock>;
            case 'update':
                return <UpdateProduct id={id}></UpdateProduct>;
            case 'delete':
                return <DeleteProduct id={id}></DeleteProduct>;
            default:
                return null;
        }
    }
    const HandleBack = () => {
        navigate(`/AdminDashboard/${user.userId}/${user.userName}`)
    }
    return (
        <div class="container">
            <button className="btn btn-danger" onClick={HandleBack}><h6>X</h6></button>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title">{product.productName}</h5>
                        </div>
                        <div class="card-body">
                            <img src={product.imageUrl} class="card-img-top" alt="Category 1" style={{ Width: '150', height: '150', display: 'block', margin: 'auto' }} />
                            <p class="card-text">Category: {product.category}</p>
                            <p class="card-text">Price: ₹{product.costPrice}</p>
                            <p class="card-text">MRP: ₹{product.mrp}</p>
                            <p class="card-text">Make: {product.make}</p>
                            <p class="card-text">In Stock: {product.quantity}</p>
                            <button className="btn btn-outline-primary" onClick={() => handleComponentChange('fillStock')}>FillStock</button>
                            <button className="btn btn-outline-success" onClick={() => handleComponentChange('update')}>Update</button>
                            <button className="btn btn-outline-danger" onClick={() => handleComponentChange('delete')}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="view-all">
                {renderSelectedComponent()}
            </div>
        </div>

    )
}
