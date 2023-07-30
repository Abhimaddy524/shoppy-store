import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './companant/Register/Register';
import Login from './companant/Login/Login';

import reportWebVitals from './reportWebVitals';
// import Navbar from './companant/shared/Navbar';
// import Navbara from './companant/unshared/Navbara';
// import Productcart from './companant/Cart/ProductCart';
import Home from './Home/Home';
import Cart from './companant/CartPage/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './companant/store';
import MenClothing from './companant/Catagary/MenColthing/menClothing';
import Electronic from './companant/Catagary/Electronics/Electronics';
import WomenClothing from './companant/Catagary/WomenClothing/WomenClothing';
import Jewelery from './companant/Catagary/Jewelery/Jewelery';
// import WomenClothing from './companant/Catagary/WomenClothing';
// import Navbara from './companant/unshared/Navbara';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />}>
  </Route>
  <Route path='/cart' element={<Cart />}>
  </Route>
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/men'scloth" element={<MenClothing />} />
  <Route path="/electronics" element={<Electronic />} />
  <Route path="/womenclothing" element={<WomenClothing/>} />
  <Route path="/jewelery" element={<Jewelery/>} />
  {/* <Route path="/women'scloth" element={<WomenClothing />} /> */}
</Routes>
</BrowserRouter>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
