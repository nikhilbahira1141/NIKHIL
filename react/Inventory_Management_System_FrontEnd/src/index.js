import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Admin/Header';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <Header></Header>
    <App></App>
 </React.StrictMode>
);
reportWebVitals();
