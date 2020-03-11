import React,{ Component } from 'react';
import './App.css';
import {  Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import SpicesProductList from './components/SpicesProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
// import home from './components/Home';
import Home from './components/Home';
import PersonalDetails from './components/PersonalDetails';
import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <div className="page-container">
      <div className="content-wrap">
      <React.Fragment>
        <Header/>
        <Navbar/>
        <Switch>
            <Route path="/details" component={Details}/>
            <Route path="/cart" component={Cart}/>        
            <Route path="/SpicesProductList" component={SpicesProductList}/>
            <Route path="/personaldetails" component={PersonalDetails}/>
            <Route path="/login" component={Login}/>
            <Route exact path="/" component={Home}/>
            <Route component={Default}/>
          </Switch>
          <Modal/>
      </React.Fragment>  
      </div>
          <Footer/>
    </div>
    );
  }
}

export default App;
