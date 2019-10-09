import React from 'react'
import Layout from "../components/neweader"
import Footerstick from '../components/footerstick'

export default function content({location}) {
 
  return (
      <>
      <Layout/>
      
        <div style= {{textAlign:'center',marginLeft:'10px',marginRight:'10px'}}>
        <h3>{location.state.tite} </h3> 
         <hr/>
         <img  src={location.state.img} alt="Card image cap"  style={{width:'60%',maxHeight:'30vh',margin:'0 auto',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
         
         <p>{location.state.desc}</p>
         <div style={{margin:'0 auto'
}}>
    <h2 style={{color:'black'}}>Contact US :</h2>
    <div style={{background: 'black',
border:'#8f6B29 2px solid',borderRadius:'10px'
}}><h2 style={{color:'white'}}>contact@apexFinance.com </h2></div>
</div>
        </div>
        <Footerstick/>
       </>
    )
}
