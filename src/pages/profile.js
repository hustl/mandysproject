import React from 'react'
import Layout from "../components/layout"
import { Table } from 'reactstrap'
import Header from "../components/neweader"
import ImageAvatars from '../components/avatar'
import  "../components/stylez.css"
import  ValidatedLoginForm from  "../components/transferform"
import Abalance from '../components/balance'
import CurrencyFormat from 'react-currency-format';
import Footerstick from '../components/footerstick'
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

        
      )).reverse()}
          
          
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
    <Footerstick/>

    </>
  ); 
}
