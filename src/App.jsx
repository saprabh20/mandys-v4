import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./components/AboutUs";
import ContactPage from "./pages/ContactPage";

const App = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    return (
        <div>
            <ToastContainer />
            <BrowserRouter>
                <Navbar cart={cart} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/products"
                        element={
                            <AllProducts
                                products={products}
                                setProducts={setProducts}
                            />
                        }
                    />
                    <Route
                        path="/products/:id"
                        element={<Product setCart={setCart} />}
                    />
                    <Route
                        path="/cart"
                        element={<Cart cart={cart} setCart={setCart} />}
                    />
                    <Route path="/user" element={<User />} />
                    {/* <Route path="/signin" element={<Signin />} /> */}
                    {/* <Route path="/signup" element={<Signup />} /> */}
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
