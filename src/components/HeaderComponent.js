import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component{
    render(){
      return(
          <React.Fragment>
            <div className="logo">
              <h4>Foodilicious</h4>
            </div>
            <input type="text" className="search" placeholder="What are you looking for??"></input>
          <div className="trans-navbar">

          </div>
          </React.Fragment>
          
      ); 
    }
  }
  
  export default Header;