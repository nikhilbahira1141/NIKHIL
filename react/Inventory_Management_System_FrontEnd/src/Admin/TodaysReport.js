import React, { useState, useEffect } from 'react';

export default function TodaysReport() {
    const [todaysEarned, setTodaysearned] = useState(0);
    const [totalPurches, setTotalPurches] = useState(0);
    const [totalSales, setTotalSales] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/api/report/todaysReport")
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    setTodaysearned(result.todaysEarned)
                    setTotalPurches(result.totalPurches)
                    setTotalSales(result.totalSales)
                }
            })
    }, []);

    return (
        <div className="container">
            <h2 className="my-4 text-center">TODAY'S REPORT</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-center">EARNED</h5>
                            <p className="card-text text-center">₹ {todaysEarned}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-center">PURCHASED</h5>
                            <p className="card-text text-center">₹ {totalPurches}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-center">SALES</h5>
                            <p className="card-text text-center">₹ {totalSales}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
