//dependencies
import React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

//Bootstrap
import './App.css';
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import 'bootstrap/dist/css/bootstrap.min.css'


//components
import NavBar from './components/Navigation/Navbar';
import HomePage from './pages/Homepage';
import Footer from './components/Footer/Footer'
import BusinessOffer from './pages/Businessoffers';
import MariageOffer from './pages/Marriage';
import PortraitOffer from './pages/Portraits';
import OfficialPics from './pages/Officialpics'

class App extends React.Component {

  state = {
    // add admin option to change pictures and prices
  }

  render() {
    return (
      <div className="App">
      <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path='/marriage' element={<MariageOffer/>}></Route>
          <Route exact path='/portrait' element={<PortraitOffer/>}></Route>
          <Route exact path='/business' element={<BusinessOffer/>}></Route>
          <Route exact path='/applicants' element={<OfficialPics/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;