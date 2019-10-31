import React from 'react'
import Layout from "../components/layout"
import { Table } from 'reactstrap'
import Header from "../components/neweader"
import  '../components/prof.css'
import ImageAvatars from '../components/avatar'
import  "../components/stylez.css"
import  ValidatedLoginForm from  "../components/transferform"
import Abalance from '../components/balance'
import CurrencyFormat from 'react-currency-format';
import Footerstick from '../components/footerstick'
import  {Tab,Tabs} from 'react-bootstrap'
import Link from "gatsby-link"
import ci from '../images/ci.jpg'

const BASE_URL = "https://mandy-25207.firebaseio.com/.json";

function getd(){
    var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  return dateTime;
  }
  function useDataFetcher(url) {
      const [posts, setPosts] = React.useState([])
      const [isLoading, setIsLoading] = React.useState(false)
      const [error, setError] = React.useState(null)
      
      React.useEffect(() => {
        setIsLoading(true);
        fetch(url)
          .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw Error("Error fetching posts! reload page to try again")
            }
          })
          .then(posts => {
            var result = [];
  
  for(var i in posts)
      result.push([i, posts [i]]);
  
           
            setPosts(result);
            console.log(result)
            setIsLoading(false)
          })
          .catch(error => {
            setError(error)
          })
      }, [url])
    
      return { posts, isLoading, error }
    }

export default function profile2() {
    const [showingtrans, setShowingtrans] = React.useState('none');
    const [showingtrans2, setShowingtrans2] = React.useState('none');
    const [showingtrans3, setShowingtrans3] = React.useState('none');
    const { posts, isLoading, error } = useDataFetcher(BASE_URL)

    if (error) {
      
      return  <Layout> <p style={{ color: 'red' }}>{error.message}</p>
      </Layout>
    }
  
    if (isLoading) {
  
      return <><Header/> <p>Loading posts...</p>
      </>
    }
    return (
      <>
        <div  style={{
          margin: '0 auto',
          maxWidth: 900
       
        }} >
           <img src={require("../images/LOGOLOGO.png")} className="Logo" alt="logo" /> 
        <div class="menu_des">

<ul>

<li><button>Home</button></li>

<li><button onClick ={()=>{setShowingtrans('block');
setShowingtrans3('none');
setShowingtrans2('none');}}>Personal profile</button></li>

<li><button onClick ={()=>{setShowingtrans('none');
setShowingtrans3('block');
setShowingtrans2('none');}}>Account Details</button></li>

<li><button onClick ={()=>{setShowingtrans('none');
setShowingtrans3('none');
setShowingtrans2('block');}}>Transaction History</button></li>

<li><Link to="/login/">LOG OUT</Link></li>

</ul>

</div>
        <div  className='profile2 profilemust'>
          <div className ='nameb'>You are Logged in as Ernsting P.</div>
          <img src= {ci} style ={{maxHeight:'250px',maxWidth:'200px',paddingBottom:'10px',paddingTop:'5px'}} />
        </div>
        

         <div className = {showingtrans}>
          <div className='personalinfo profile2'>
          <div><h5 className ='profile2'>Personal Information</h5>
          </div><hr/>
            <div  className ='profile2' style ={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            <table  className ='profile2' style={{
          
          width: '400px',
          
       
        }}>
  <tr  className ='profile2'>
    <th  className ='profile2'>Name</th>
    <td  className ='profile2' >Ernsting P. Braw</td>
  </tr>
  <tr  className ='profile2'>
    <th  className ='profile2'>Telephone</th>
    <td>+16089272340</td>
  </tr>
  <tr  className ='profile2'>
    <th  className ='profile2'>Current City</th>
    <td  className ='profile2'>Pennsylvania</td>
  </tr>
  <tr  className ='profile2'>
    <th  className ='profile2'>Nationality</th>
    <td  className ='profile2'>United State Of America</td>
  </tr>
  
</table>
<table   className ='profile2' style={{
          
          width: '400px',
          
       
        }} >
  <tr  className ='profile2'>
    <th  className ='profile2'>Gender</th>
    <td  className ='profile2'>Male</td>
  </tr>
  <tr  className ='profile2'>
    <th  className ='profile2'>Identification</th>
    <td  className ='profile2'>Passport</td>
  </tr>
  <tr>
    <th  className ='profile2'>Email</th>
    <td  className ='profile2'>ernstingpete3352@gmail.com
</td>
  </tr>
 
</table>


            </div>
            </div>
            </div>
            <div className = {showingtrans3}>
          <div className='personalinfo profile2'>
          <div><h5 className ='profile2'>Account Details</h5>
          </div><hr/>
            <div  className ='profile2' style ={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            <table  className ='profile2' style={{
          
          width: '400px',
          
       
        }}>
  <tr  className ='profile2'>
    <th  className ='profile2'> Account Number</th>
    <td  className ='profile2' >2419334916</td>
  </tr>
  <tr  className ='profile2'>
    <th  className ='profile2'>Account Balance</th>
    <td><Abalance/></td>
  </tr>
 
  
</table>
<table   className ='profile2' style={{
          
          width: '400px',
          
       
        }} >
  <tr  className ='profile2'>
    <th  className ='profile2'>	
 Account Type</th>
    <td  className ='profile2'>Non-Residential Account</td>
  </tr>
  <tr  className ='profile2'>
    <th  className ='profile2'>	 Currency</th>
    <td  className ='profile2'>USD</td>
  </tr>
  

</table>


            </div>
            </div>
            </div>
            <div  className= {showingtrans2}>
            <div className =' profile2 transactionlist'>
            <div><h5 className ='profile2'>Transaction History</h5>
          </div><hr/>
            <Table   className ='profile2'>
        <thead>
          <tr>
          
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        {posts.map(post => (
        <tr>
           
        <td>
          {post[1].name}
        </td>
        <td><CurrencyFormat value= {post[1].amount} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
        </td>
        <td>{post[1].date}</td>
      </tr>

        
      )).reverse()}
          
          
        </tbody>
      </Table>
      </div>
        </div>
        </div>
         <Footerstick/>
         </>
    )
}
