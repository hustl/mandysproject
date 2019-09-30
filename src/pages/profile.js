import React from 'react'
import Layout from "../components/layout"
import { Table } from 'reactstrap'
import Header from "../components/neweader"
import ImageAvatars from '../components/avatar'
import  "../components/stylez.css"
import  ValidatedLoginForm from  "../components/transferform"
import Abalance from '../components/balance'
import CurrencyFormat from 'react-currency-format';

import  {Tab,Tabs} from 'react-bootstrap'
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
  export default function  AppHooks() {
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
<Header/>


<div className='profile'>
<ImageAvatars/>
<Abalance style= {{margin:'0 auto'}}/>
<p>Ernsting Braw</p>


</div>
    <div  >
    
      <div style= {{margin:'0 auto'}}>
      <Tabs defaultActiveKey="TRANSACTIONS" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="TRANSACTIONS">
  <Table dark>
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

        
      ))}
          
          
        </tbody>
      </Table>
  </Tab>
  <Tab eventKey="profile" title="ACTIVITY LOG">
    <p>No new notification ,cleared on <span>{getd()}</span> </p>
    

  </Tab>
  <Tab eventKey="contact" title="TRANSFER FUNDS"  style={{fontWeight:'bold'}}>
   < ValidatedLoginForm/> 
  </Tab>
</Tabs>
</div>
     
      
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
  ); 
}
