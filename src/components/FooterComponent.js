import React,{Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 col-sm-2">
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Menu</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-7 col-sm-5">
                            <h5>Our Address</h5>
                            <address>Kathmandu,Nepal</address>
                            <br/>

                        </div>
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;