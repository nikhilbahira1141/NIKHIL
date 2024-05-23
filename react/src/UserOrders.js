import { useState, useEffect } from 'react';
import React from 'react'

export default function UserOrders({ userId }) {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/api/orders/allorder/${userId}`)
            .then(res => res.json())
            .then(result => { setOrders(result); });
        console.log(orders)
    }, []);

    return (
        <div className="container">
            <h5>All Orders</h5>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Order Date</th>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(ord => (
                            <tr key={ord.orderId}>
                                <td>{ord.orderId}</td>
                                <td>{ord.orderDate}</td>
                                <td>{ord.inventory.productName}</td>
                                <td>
                                    <img
                                        src={ord.inventory.imageUrl}
                                        alt={ord.inventory.productName}
                                        width="80"
                                        height="80"
                                    />
                                </td>
                                <td>{ord.quantity}</td>
                                <td>{ord.inventory.mrp}</td>
                                <td>{ord.ammount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    )
}
