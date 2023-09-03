import './styles/styles.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Product from './components/Products/Product';
import Location from './components/Location/Location';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navigation/Navigation';
import Overview from './components/Overview/Overview';
import SignIn from './components/SignIn/SignIn';
import Footer from './components/Footer/Footer';
import Regulation from './components/Footer/PrivacyRegulation';
import Impressum from './components/Footer/Impressum';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false
    }
  }

  changeSignIn = (value) => {
    this.setState({isSignedIn: value})
  }

  render() {
    return (
      <Router>
          <Navbar/> 
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/produkte" element={<Products/>} />
            <Route path='/produkt' element={<Product/>} />
            <Route path="/standort" element={<Location/>} />
            <Route path="/kontakt" element={<Contact/>} />
            <Route path="/datenschutzrichtlinien" element={<Regulation/>} />
            <Route path="/impressum" element={<Impressum/>} />
            
            <Route path="/anmeldung" element={this.state.isSignedIn ? <Overview/> : <SignIn changeSignIn={this.changeSignIn}/>} />
            {/* <Route path="/anmeldung" element={<SignIn/>} /> */}
          </Routes>
          <Footer/>
      </Router>
    );
  }
}

export default App;