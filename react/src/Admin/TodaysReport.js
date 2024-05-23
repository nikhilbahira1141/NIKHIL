import React, { useState, useEffect } from 'react';

export default function TodaysReport() {
    const [todaysEarned,setTodaysearned]=useState(0);
    const [totalPurches,setTotalPurches]=useState(0);
    const [totalSales,setTotalSales]=useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/api/report/todaysReport")
            .then((res) => res.json())
            .then((result) => {
                if(result)
                    {
                        setTodaysearned(result.todaysEarned)
                        setTotalPurches(result.totalPurches)
                        setTotalSales(result.totalSales)
                    }
            })
    }, []); 

    return (
        <div className="container">
            <h2 className="my-4">TODAYS REPORT</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">EARNED:₹ {todaysEarned}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">PURCHASED:₹ {totalPurches}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">SALES:₹ {totalSales}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
