/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"
import Header from "../components/header"
import StickyFooter from 'react-sticky-footer';
import { UncontrolledCarousel } from 'reactstrap';
import mypic from '../images/webb.jpg'
 import offshorepic from '../images/offshore.jpg'
 import stock from '../images/stock.jpg'
 import save from '../images/save.jpg'
 import health from '../images/healthinsurance.jpg'
 import vet from '../images/gatsby-icon.png'
import '../components/layout.css'





const items = [
  {
    src: mypic,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: save,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: health,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];
const Layout = ({ children }) => {
  

  return (
    <>
     
      <div   >
     <Header/>
     
    
      </div>
      
      
       <div
      style={{
        margin: '0 auto',
       
        
     
      }} 
    >
      
        <main>{children}</main>
       
      </div>
      
      <footer className="footer-distributed">
 
 <div className="footer-left">

 <h3>WebDev<span>Trick</span></h3>

 <p className="footer-links">
 <a href="#">Home</a>
·
 <a href="#">Blog</a>
·
 <a href="#">Pricing</a>
·
 <a href="#">About</a>
·
 <a href="#">Faq</a>
·
 <a href="#">Contact</a>
 </p>

 <p className="footer-company-name">webdevtrick &copy; 2019</p>
 </div>

 <div className="footer-center">

 <div>
 <i className="fa fa-map-marker"></i>
 <p><span>21 Revolution Street</span> Delhi, India</p>
 </div>

 <div>
 <i className="fa fa-phone"></i>
 <p>+1 555 123456</p>
 </div>

 <div>
 <i className="fa fa-envelope"></i>
 <p><a href="mailto:support@company.com">contact@webdevtrick.com</a></p>
 </div>

 </div>

 <div className="footer-right">

 <p className="footer-company-about">
 <span>About the company</span>
Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
 </p>

 <div className="footer-icons">

 <a href="#"><i className="fa fa-facebook"></i></a>
 <a href="#"><i className="fa fa-twitter"></i></a>
 <a href="#"><i className="fa fa-linkedin"></i></a>
 <a href="#"><i className="fa fa-github"></i></a>

 </div>

 </div>

 </footer>
      
    </>
  )
}



export default Layout
