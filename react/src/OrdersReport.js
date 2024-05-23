import React from 'react'

export default function OrdersReport() {
    return (
        <div className="container">
            <h2 className="my-4">Order Reports</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">Monthly Sales Report</h5>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Month</th>
                                        <th>Total Orders</th>
                                        <th>Total Revenue</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>January</td>
                                        <td>50</td>
                                        <td>$5000</td>
                                    </tr>
                                    <tr>
                                        <td>February</td>
                                        <td>60</td>
                                        <td>$6000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
