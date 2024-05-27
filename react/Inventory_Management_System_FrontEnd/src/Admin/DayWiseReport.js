import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";

export default function DayWiseReport() {

    const [reports, setReports] = useState([]);
    const [startdate, setStartdate] = useState("");
    const [enddate, setEnddate] = useState("")

    useEffect(() => {
        fetch(`http://localhost:8080/api/report/allReports`)
            .then((res) => res.json())
            .then((result) => {
                setReports(result);
            })
    }, []);

    const fetchFilterd = () => {
        fetch(`http://localhost:8080/api/report/filterdReports/${startdate}/${enddate}`)
            .then((res) => res.json())
            .then((result) => {
                setReports(result);
            })

    }

    return (

        <div className="container">
            <div className="row mb-4">
                <div className="col-md-4">
                    <label htmlFor="startDate" className="form-label">From:</label>
                    <input
                        id="startDate"
                        className="form-control"
                        type="date"
                        value={startdate}
                        onChange={(e) => setStartdate(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="endDate" className="form-label">To:</label>
                    <input
                        id="endDate"
                        className="form-control"
                        type="date"
                        value={enddate}
                        onChange={(e) => setEnddate(e.target.value)}
                    />
                </div>
                <div className="col-md-4 d-flex align-items-end">
                    <button
                        className="btn btn-primary"
                        onClick={fetchFilterd}
                    >
                        Search
                    </button>
                </div>
            </div>
            <h2 className="mb-4">Daywise Report</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Report ID</th>
                            <th>Date</th>
                            <th>Earned</th>
                            <th>Purchase</th>
                            <th>Sales</th>
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
        </div>

    )
}
