<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./Pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Productlist from "./Pages/Productlist";
import Productdetails from "./Pages/Productdetails";
import CustomerService from "./Pages/CustomerService";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Productlist />} />
        <Route path="/products/:id" element={<Productdetails />}/>
        <Route path="/customer-service" element={<CustomerService />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element = {
            <ProtectedRoute>
              <Cart/>
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
=======
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import Mainpart from './components/Mainpart'
import Category from './components/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Mainpart />
      <Category/>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
        <Card title="men polo crew neck T-shirt" price="299 " image="/Images/Tshirt.jpg"/>
        <Card title="Men fit polo Shirt" price="429" image="/Images/Shirt.jpg"/>
        <Card title="Women Short Skirt" price= "599" image ="/Images/Skirt.jpg"/>
      </section>
      <Footer />
    </>
  );
};
>>>>>>> f03efc8c054698558f1783fdd2236a615bc2173b
export default App;