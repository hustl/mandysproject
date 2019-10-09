/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"
import Header from "../components/neweader"
import Footerstick from '../components/footerstick'
import { UncontrolledCarousel } from 'reactstrap';
import mypic from '../images/webb.jpg'
 import offshorepic from '../images/offshore.jpg'
 import stock from '../images/stock.jpg'
 import save from '../images/save.jpg'
 import health from '../images/healthinsurance.jpg'
 import vet from '../images/gatsby-icon.png'






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
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
     
      <div   >
     <Header/>
     <div   > <img src={mypic} alt="Card image cap"
     style={{objectFit:'cover',width:'100%',height:'300px'}}/></div>
    
      </div>
      
      
       <div
      style={{
        margin: '0 auto',
        maxWidth: 1100,
        
     
      }} 
    >
      
        <main>{children}</main>
        
      </div>
      
      <Footerstick/>
      
    </>
  )
}



export default Layout
