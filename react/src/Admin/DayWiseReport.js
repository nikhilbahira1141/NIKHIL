import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


export default function DayWiseReport() {

    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/report/allReports`)
            .then((res) => res.json())
            .then((result) => {
                setReports(result);
            })
    }
    );

    return (
        <div className="table-container table-responsive">
        <h2 className="mb-4">DAYWISE REPORT...</h2>
        <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>REPORT ID</th>
                    <th>DATE</th>
                    <th>EARNED</th>
                    <th>PURCHASE</th>
                    <th>SALES</th>
                </tr>
            </thead>
            <tbody>
                {reports.map((report) => (
                    <tr key={report.reportId}>
                        <td>{report.reportId}</td>
                        <td>{report.reportdate}</td>
                        <td>{report.todaysEarned}</td>
                        <td>{report.totalPurches}</td>
                        <td>{report.totalSales}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
    )
}
