import React from 'react'
import  Tp from  "../components/transferform"
import  "../components/stylez.css"
import  '../components/prof.css'
import Footerstick from '../components/footerstick'
function useDataFetcher() {
    const [balanc,setbalance]= React.useState({})
    React.useEffect(() => {
        fetch('https://access-b3b7e.firebaseio.com/blocked/.json')
        
      .then(response => response.json())
      .then(data => setbalance({ data }));
       
      }, [])
    
 
     // windowGlobal.localStorage.setItem('rememberMe', balanc.data);
  console.log(balanc.data)
    return { balanc }
  }
export default function transferpage() {
    const { balanc } = useDataFetcher()
    return (
        <>
           
              <img src={require("../images/LOGOLOGO.png")} className="Logo" alt="logo" /> 
         
              {balanc.data==='true' && < Tp/> }
              {balanc.data==='false' && <h3 style={{color:'red',fontWeight:'bold'}} >THIS ACCOUNT HAS BLOCKED ALL TRANSACTIONS TEMPORARILY</h3> }  
          <Footerstick/> 
        </>
    )
}
