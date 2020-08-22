import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Carousel from './components/CaraouselComponent';
import Home from './components/HomeComponent';
class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Carousel/>
        <Home/>
        <Footer/>
      </div>
    ); 
  }
}

export default App;
