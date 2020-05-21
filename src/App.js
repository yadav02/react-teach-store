import React from 'react';
import 'bootstrap//dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';
import Default from './pages/Default';
import Cart from './pages/CartPage';
import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideCart from './components/SideCart'
import Sidebar from './components/Sidebar'


function App() {
  return (
    <>
    {/* navbar, sidebar, cart, footer  */}
    <Navbar />
    <Sidebar />
    <SideCart />
    <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/about"  component={About} />
       <Route path="/contact"  component={Contact} />
       <Route path="/products"  component={Products} />
       <Route path="/products/:id" exact component={SingleProduct} />
       <Route path="/cart"  component={Cart} />
       <Route  component={Default} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
