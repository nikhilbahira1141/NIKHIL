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
            <h2 className="my-4">All Orders</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
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
                        {orders.map(order => (
                            <tr key={order.orderId}>
                                <td>{order.orderId}</td>
                                <td>{order.orderDate}</td>
                                <td>{order.inventory.productName}</td>
                                <td>
                                    <img
                                        src={order.inventory.imageUrl}
                                        alt={order.inventory.productName}
                                        width="80"
                                        height="80"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </td>
                                <td>{order.quantity}</td>
                                <td>₹{order.inventory.mrp}</td>
                                <td>₹{order.ammount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>



    )
}
