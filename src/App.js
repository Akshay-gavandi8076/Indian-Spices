import React,{ Component } from 'react';
import './App.css';
import {  Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import SpicesProductList from './components/SpicesProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
            <Route path="/details" component={Details}/>
            <Route path="/cart" component={Cart}/>        
            <Route exact path="/" component={SpicesProductList}/>
            <Route component={Default}/>
          </Switch>
      </React.Fragment>  
    );
  }
}

export default App;
