import React from 'react';
import { Link } from 'react-router-dom';

export default function ListByCategory() {

  return (
    <div class="container">
  <h2 class="my-4 text-center">Product Categories</h2>
  <div class="row justify-content-center">
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="/images/E.jpg" class="card-img-top" alt="Electronic Category"/>
        <div class="card-body">
          <h5 class="card-title text-center">ELECTRONIC</h5>
          <div class="text-center">
            <a href="/Products/ELECTRONIC" class="btn btn-primary">View Products</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="/images/S.jpg" class="card-img-top" alt="Stationary Category"/>
        <div class="card-body">
          <h5 class="card-title text-center">STATIONARY</h5>
          <div class="text-center">
            <a href="/Products/STATIONARY" class="btn btn-primary">View Products</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="/images/A.jpg" class="card-img-top" alt="Accessories Category"/>
        <div class="card-body">
          <h5 class="card-title text-center">ACCESSORIES</h5>
          <div class="text-center">
            <a href="/Products/ACCESSORIES" class="btn btn-primary">View Products</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
