import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import pexels3 from './pexels3.jpg';
import ranking from './ranking.jpg';
import computer from './computer.jpg';
import tools from './tools.png';
import logo2 from './logo2.png';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
       <div className="home-div">
       
             <header className="header-home">
             <h2 className="we-are"> Innovative-code</h2>
     
      <div className="header-title">
            
              <h2 className="title-h1">Development and design company</h2>
 
      </div>
     <Link className="link3" href="/about" to="/about"> <div className="mail">
                <h3>CONTACT US</h3>
                Phone:095/575/5081<br/>
                E-mail:perkov.fp@gmail.com

      </div></Link>
      <h3 className="scroll"><i  class="fa fa-arrow-down " aria-hidden="true"></i>  <Link href="/about" to="/about">     <button type="button" className="button" >CLICK FOR OFFER</button></Link><i  class="fa fa-arrow-down" aria-hidden="true"></i></h3>
  
      </header>
      

    <div className="main">
    <div className="H1-back">
    
     
   <h1>What we offer</h1>
 
     </div>
     <div className="frame2-div" >
     <div className="frames"><i class="fas fa-globe fa-3x"></i><p>Web aplication</p></div>
     <div className="frames"><i class="fab fa-wordpress-simple fa-3x"></i><p>Wordpress</p></div>
     <div className="frames"><i class="fas fa-mobile fa-3x"></i><p>Responsive design</p></div>
     <div className="frames"><i class="fas fa-search-plus fa-3x"></i><p>Google SEO</p></div>
     <div className="frames"><i class="fas fa-hand-holding-usd fa-3x"></i><p>Fair price</p></div>
  
       </div>
     <div className="empty">

     </div>
    </div>

                            <div className="main1">
                                  <div> <h3 className="div-main-h3">Why Innovative code</h3>
                                        <img src={computer}alt="computer" className="computer"/> <p className="div-p">Theme by Your choice and Your photos our You want from us to help you, no problem. All from coding to design.That is where are You want from us to help you, no problem. All from coding to design</p></div>
                            
                                   <div><h3 className="div-main-h3">Our services</h3>
                                   <img src={ranking}alt="computer" className="computer"/><p className="div-p"> All from coding to design.That is where are creation starts. All from coding to design.That is where are creation starts. All from coding to design.That is wherjYou want from us to help you, no problem. All from coding to design</p></div>
                            </div> 




                            <div className="main2">
                            <div>  <h3 className="div-main-h3">Some of our tools</h3>
                                     <img src={tools} alt="computer" className="tools"/> <p className="div-p"> Here you can see with what program's we are working. From language like HTML witch is for building web sites number one. Also programs CSS , PHOOTOSHOP. We also use React , GIT for web aplications and some hosting's like Aws, Heroku, Netlify, GithubPages. Also we make SEO for your site making here in top of google search engine</p></div>
                            <div>   <h3 className="div-main-h3">Some of our tools</h3>
       <img src={pexels3} className="pexels3"/>
       <p className="div-p">That is where are creation starts. Theme by e you can see with what program'se you can see with what program'sYour choice and Your photos our e you can see with what program'se you can see with what program's You want from us to help you, no problem. All from coding to design.That is where are creation starts. Theme by Your choice and Your photos our You want from us to help you, no problem. All from coding to design.</p></div>
                              </div>                 
    

  
      
              
              <div className="main3">
              hello

              </div>
       
       
       
       
       
       
       
       <div className="whitee-footer">
       <ul className="ul-1">
       <li><h3>Find us</h3></li>
       <li><a href="mailto:perkov.fp@gmail.com"><i class="fas fa-at"></i> perkov.fp@gmail.com</a></li>
       <li><a href="tel:+385-1-325623252"><i class="fa fa-phone" aria-hidden="true"></i> +385 95 575 5081</a></li>
       <li><a href="https://goo.gl/maps/uNLucTAhkg22" target="_blank"><i className="d" class="fa fa-location-arrow" aria-hidden="true"></i>Zagreb</a></li>
       <li className="copy"> Innovative code © 2019.</li>
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
   

     
    
   
      </div>
      
      
    );
  }
}