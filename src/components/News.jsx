import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo2 from './logo2.png';
import pexels1 from './pexels1.jpeg';
import pexels2 from './pexels2.jpeg';
import pexels5 from './pexels5.jpeg';

import './News.css';

export default class News extends Component {
  render() {
    return (
     <servicer className="services">
                       <div className="services1"><h1>SERVICES</h1> <p>DESIGN YOUR SUCCESS AROUND OUR TALENT.<br/>WE BRING PROMESING IDEAS TO WEB LIFE</p></div>
                                             <div className="sevices-background">
                                             <div className="main7">
                                  <div> <h3 className="div-main-h3">Why Innovative code</h3>
                                  <i id="my-i" class="fas fa-laptop-code fa-4x"></i> <p className="div-s">Theme by Your choice and Your photos our You want from us to help you, no problem. All from coding to design.That is where are You want from us to help you, no problem. All from coding to design</p></div>
                            
                                   <div><h3 className="div-main-h3">Our services</h3>
                                   
                                   <i id="my-i" class="fas fa-tablet-alt fa-4x"></i><p className="div-s"> All from coding to design.That is where are creation starts. All from coding to design.That is where are creation starts. All from coding to design.That is wherjYou want from us to help you, no problem. All from coding to design</p></div>
                              
                                  <div><h3 className="div-main-h3">Our services</h3>
                                  <i id="my-i" class="fab fa-wordpress-simple fa-4x"></i><p className="div-s"> All from coding to design.That is where are creation starts. All from coding to design.That is where are creation starts. All from coding to design.That is wherjYou want from us to help you, no problem. All from coding to design</p></div>
                          
                          
                          
                            </div> 
                            <div className="main7">
                                  <div> <h3 className="div-main-h3">Why Innovative code</h3>
                                        <img src={pexels1}alt="computer" className="pexels1"/> <p className="div-s">Theme by Your choice and Your photos our You want from us to help you, no problem. All from coding to design.That is where are You want from us to help you, no problem. All from coding to design</p></div>
                            
                                   <div><h3 className="div-main-h3">Our services</h3>
                                   
                                  <img src={pexels5}alt="computer" className="pexels1"/><p className="div-s"> All from coding to design.That is where are creation starts. All from coding to design.That is where are creation starts. All from coding to design.That is wherjYou want from us to help you, no problem. All from coding to design</p></div>
                              
                                  <div><h3 className="div-main-h3">Our services</h3>
                                   <img src={pexels2}alt="computer" className="pexels1"/><p className="div-s"> All from coding to design.That is where are creation starts. All from coding to design.That is where are creation starts. All from coding to design.That is wherjYou want from us to help you, no problem. All from coding to design</p></div>
                          
                          
                          
                            </div> 

                            


                                              </div>
                                              
                <div className="s-back">
          

                </div>




    
     
     <div className="whitee-footer">
     <ul className="ul-1">
     <li><h3>Find us</h3></li>
     <li><a href="mailto:perkov.fp@gmail.com"><i class="fas fa-at"></i> perkov.fp@gmail.com</a></li>
     <li><a href="tel:+385-1-325623252"><i class="fa fa-phone" aria-hidden="true"></i> +385 95 575 5081</a></li>
     <li><a href="https://goo.gl/maps/uNLucTAhkg22" target="_blank"><i className="d" class="fa fa-location-arrow" aria-hidden="true"></i>Zagreb</a></li>
     <li className="copy">Innovative code © 2019.</li>
     </ul>
     <ul className="ul-2">
     <li><h3>Company</h3></li>
     <li><a href="/about">About</a></li>
     <li><a href="https://web.facebook.com" target="_blank">Facebook</a></li>
     <li><a href="https://www.instagram.com/?hl=hr" target="_blank">Instagram</a></li>
     <li className="my-logo"><Link href="/" to="/">  <img src={logo2} className="logoo-footer" href="/home"/></Link>
    </li>
     </ul>
   
   </div>
   
  







     </servicer>
    )
  }
}