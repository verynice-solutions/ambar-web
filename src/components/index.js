import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './general/navbar'
import Landing from './landing/landing'
import OrdersView from './orders/orders'
import ProductPage from './products/productPage'
import AllProducts from './products/allProducts'
import AboutPage from './general/about'
import Footer from './general/footer'

@inject("rootStore") 
@observer
class Routes extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />  
            <Switch>
              <Route exact path="/" component={Landing} />
              {
                this.props.rootStore.userStore.session()&& (
                  <Route path="/ordenes" component={OrdersView} />
                )
              }
              <Route path="/products" component={AllProducts} />
              <Route path="/about" component={AboutPage} />
              <Route path="/product/:id" component={ProductPage} />
              <Route component={Landing}/>
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;
