import React,{Component} from 'react';
import '../css/footer.css'

class Footer extends Component{
    render(){
        return(
            <div className = 'footer-wrapper'>
                <div className="container-fluid">
                    <div className="footer-social-icons">
                        <h1>Logo Here</h1>
                    </div>
                    <div className='info-wrapper'>
                        <div className="contactus">
                            <h1>CONTACT US</h1>
                            <div className = 'contactus-info'>
                                <ul>
                                    <li>Address:University of Peradeniya Sri Lanka</li>
                                    <li>+94 81 2 575 440</li>
                                    <li>+94 77 310 16 55</li>
                                    <li>isemTechnologies.com</li>
                                    <li>isemTechnologies@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="quicklink">
                                <h1>QUICK LINK</h1>
                                <div className="quicklink-info">
                                    <ul>
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Web Services</li>
                                        <li>Graphic Design</li>
                                        <li>Web Markrting</li>
                                        <li>Services</li>
                                        <li>Training</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                        </div>
                        <div className="ourservices">
                                <h1>OUR SERVICES</h1>
                                <div className="ourservices-info">
                                    <ul>
                                        <li>Linux Hosting</li>
                                        <li>Window Hosting</li>
                                        <li>Domain Registration</li>
                                        <li>SEO Promotion</li>
                                        <li>Our Plans</li>
                                        <li>Latest Offer</li>
                                        <li>Sitemap</li>
                                        <li>Website Maintence</li>
                                    </ul>
                                </div>
                        </div>
                        <div className="getintouch">
                                <h1>GET IN TOUCH</h1>
                                <form action="#">
                                    <input type="text" name='name' placeholder='Name'/><br/>
                                    <input type="text" name='email' placeholder='Email'/><br/>
                                    <input type="text" name='number' placeholder='Phone Number'/><br/>
                                    <button>SUBMIT</button>
                                </form>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright 2019 @ isemTechnology (pvt) Ltd All Rights Reserved</p>
                    </div>


                </div>
            </div>
        );
    }
}

export default Footer;