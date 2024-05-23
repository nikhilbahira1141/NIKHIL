
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';
import AddProduct from './Admin/AddProduct';
import ListProduct from './ListProduct';
import Login from './Login';
import ListByCatagory from './ListByCatagory';
import RegisterUser from './RegisterUser';
import PlaceOrder from './PlaceOrder';
import ListAllProducts from './Admin/ListAllProducts';
import OrdersReport from './OrdersReport';
import DayWiseReport from './Admin/DayWiseReport';
import TodaysReport from './Admin/TodaysReport';
import Logout from './Logout';
import ProductDetails from './Admin/ProductDetails';
import FillStock from './Admin/FillStock';
import AdminDashboard from './Admin/AdminDashboard';
import AddAdmin from './Admin/AddAdmin';
import UserDashboard from './Admin/UserDashboard';
import Invoice from './Invoice';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route path="/Products/:catagory" element={<ListProduct></ListProduct>} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/ListByCatagory/:cat' element={<ListByCatagory />} />
          <Route path="/UserDashboard/:user_id/:user_name" element={<UserDashboard></UserDashboard>} />
          <Route path="/AdminDashboard/:user_id/:user_name" element={<AdminDashboard></AdminDashboard>} />
          <Route path="/register" element={<RegisterUser></RegisterUser>} />
          <Route path="/addAdmin" element={<AddAdmin></AddAdmin>} />
          <Route path="/placeorder/:id" element={<PlaceOrder></PlaceOrder>} />
          <Route path="/bycatagory" element={<ListByCatagory ></ListByCatagory>} />
          <Route path="/listall" element={<ListAllProducts></ListAllProducts>} />
          <Route path="/orderreports" element={<OrdersReport></OrdersReport>} />
          <Route path="/daywise" element={<DayWiseReport></DayWiseReport>}></Route>
          <Route path="/report" element={<TodaysReport></TodaysReport>}></Route>
          <Route path="/logout" element={<Logout></Logout>}></Route>
          <Route path='/details/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/fillStock/:id' element={<FillStock></FillStock>}></Route>
          <Route path='invoice' element={<Invoice></Invoice>}></Route>
        </Routes>
      </BrowserRouter>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
