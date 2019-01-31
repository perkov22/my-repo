import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo2 from './logo2.png';
import IMG from './IMG.png';
import './About.css';

export default class About extends Component {
  
  render() {
    return (
      <contact className="contact">
      <div className="contact-background">
      <div className="read">
        <h3>Read somethin about us and give us Your plan</h3>
      </div>
      <div className="Container-form">
      <p>Contact Me</p>
      <div>
      <form action="https://formspree.io/perkov.fp@gmail.com" method="POST">
      <label>First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      <label>Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
  
  
      <label>Email</label>
      <input type="email" id="email" name="_replyto" placeholder="Your email" />
  
  
      <label>Message</label>
      <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
      <input type="submit" value="Send" />
      </form>
      </div>
      </div>
     
     
     
     
     
     
     
     
     
     
     
      <div className="about-us">
            <div className="div-photo">
             <img src={IMG} className="img" alt="filip perkov"/>
             <p className="p-me"> <h3>Filip Perkov, CEO</h3> <br/>    Web designer and Algebra C# Asp.net development certificate  </p>
             
            </div>
        
          </div>




          <div id="bars">
	<div class="bar" data-percent="98">
		<h3 className="bar-h3"><i id="my-i" class="fas fa-laptop-code fa-2x"></i></h3>
		<canvas class="bar-circle" width="70" height="70"></canvas>
	</div>
	<div class="bar" data-percent="36">
		<h3 className="bar-h3"><i id="my-i" class="fas fa-backward fa-2x"></i></h3>
		<canvas class="bar-circle" width="70" height="70"></canvas>
	</div>
	<div class="bar" data-percent="75">
		<h3 className="bar-h3"><i id="my-i" class="fas fa-forward fa-2x"></i></h3>
		<canvas class="bar-circle" width="70" height="70"></canvas>
	</div>
	<div class="bar" data-percent="92">
		<h3 className="bar-h3"><i id="my-i" class="fas fa-pencil-alt fa-2x"></i></h3>
		<canvas class="bar-circle" width="70" height="70"></canvas>
	</div>
	<div class="bar" data-percent="90">
		<h3 className="bar-h3"><i id="my-i" class="fab fa-wordpress-simple fa-2x"></i></h3>
		<canvas class="bar-circle" width="70" height="70"></canvas>
	</div>
</div>	
</div>

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
<div className="footer">
     
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
   
      </contact>
    
     
 
    );
  }
}