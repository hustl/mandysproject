import React from 'react'
import Layout from "../components/neweader"
import Footerstick from '../components/footerstick'

export default function content({location}) {
 if (location.state){
   const title=location.state.tite
   const img=location.state.img
   const desc=location.state.desc
  return (
    <>
    <Layout/>
    
      <div style= {{textAlign:'center',marginLeft:'10px',marginRight:'10px'}}>
      <h3 style={{fontWeight:'bold'}}>{title} </h3> 
       <hr/>
       <img  src={img} alt="Card image cap"  style={{width:'60%',maxHeight:'30vh',margin:'0 auto',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
       

       <p style={{maxWidth:'60%',margin:'0 auto',paddingTop:'10px',font:'Times New Roman',fontStyle:'italic'}}>{desc}</p>
       <div style={{margin:'0 auto'
}}>
  <h2 style={{color:'black'}}>Contact US :</h2>
  <div style={{background: 'black',
border:'#8f6B29 2px solid',borderRadius:'10px',display:'flex',flexWrap:'true', alignItems: 'center',
justifyContent: 'center',overflowWrap: 'break-word'
}}><h5 style={{color:'white'}}>contactapexfinance@yandex.com </h5></div>
</div>
      </div>
      <Footerstick/>
     </>
  )
 }
 return `null`
  
}
