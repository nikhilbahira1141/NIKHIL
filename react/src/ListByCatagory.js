import React from 'react';
import { Link } from 'react-router-dom';

export default function ListByCategory() {

  return (
    <div className="container">
      <h2 className="my-4">Product Categories</h2>
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="card">
          <img src="/images/E.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">ELECTRONIC</h5>
              <div className="card-body">
              </div>
              <div className="card-img-overlay">
                <Link to="/Products/ELECTRONIC" className="btn btn-primary">View Products</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card">
          <img src="/images/S.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">STATIONARY</h5>
              <div className="card-body">
              </div>
              <div className="card-img-overlay">
                <Link to="/Products/STATIONARY" className="btn btn-primary">View Products</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card">
          <img src="/images/A.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">ACCESSORIES</h5>
              <div className="card-body">
              </div>
              <div className="card-img-overlay">
                <Link to="/Products/ACCESSORIES" className="btn btn-primary">View Products</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
