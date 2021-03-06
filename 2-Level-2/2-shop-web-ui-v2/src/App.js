import React from 'react';
import './App.css';
import CartView from './components/CartView';
import Home from './components/Home'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProductList from './components/ProductList';
import NotFound from './components/NotFound'

class App extends React.Component {
  state = {
    cart: [],
  }

  addToCart(e) {
    let { item, qty } = e;
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart })
  }


  renderCart() {
    let { cart } = this.state;
    return <CartView cart={cart} />
  }
  render() {
    let { cart } = this.state;
    return (
      <div className="">
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">online shopping</a>
        </nav>
        <hr />
        <div className="container">
          <i className="fa fa-shopping-cart"></i>
          &nbsp;<span className="badge badge-danger">{cart.length}</span> item(s)
        </div>
        <hr />
        <Router>
          <div>
            <div className="container">
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/products">Products</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/cart">Cart</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/orders">Orders</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Sign-in</Link>
                </li>
              </ul>
            </div>
            <hr />
            <div className="container">
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/products" render={props => <ProductList onBuy={e => this.addToCart(e)} />} />
                <Route path="/cart" render={props => this.renderCart()} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </div >
    );
  }
}

export default App;
