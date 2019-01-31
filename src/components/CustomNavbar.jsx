import React, { Component } from 'react'
import ResponsiveMenu from 'react-responsive-navbar';
import { Link } from 'react-router-dom';
import logo2 from './logo2.png';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
        
        <nav className="nav" >
    <Link href="/" to="/" ><img src={logo2} className="logo2" href="/"/></Link> 
            
    <ResponsiveMenu
        menuOpenButton={ <i className="fas fa-caret-down fa-2x"></i>}
        menuCloseButton={	<i class="fas fa-sort-up fa-2x"></i>}
        changeMenuOn="700px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
       
        <div className="menu" >
        <ul className="my-menu">
          <li> <Link className="link" eventKey={1} componentClass={Link}  href="/" to="/">
            <p className="p-nav">HOME</p>
            </Link></li>
           <li> <Link className="link" eventKey={2} componentClass={Link} href="/about" to="/about">
              <p className="p-nav">CONTACT</p>
            </Link></li>
           <li> <Link className="link" eventKey={3} componentClass={Link} href="/news" to="/news">
            <p className="p-nav">SERVICES</p>
            </Link></li>
            </ul>
            </div>
       
      
     
        }
      />      
   
   
   
         
   
      </nav>
     
    
    )
  }
}