import React from "react";
import '../components/layout.css'
import  "../components/stylez.css"
import { navigate } from "gatsby"
const BASE_URL = "https://apxusers.firebaseio.com/.json";
var store = require('store2')
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
         // console.log(result)
          setIsLoading(false)
        })
        .catch(error => {
          setError(error)
        })
    }, [url])
  
    return { posts, isLoading, error }
  }

  const submitValue = (posts,uid,pasword) => {
   
    posts.map(post => {
     
   if(post[1].uid==uid && post[1].password ==pasword){
    store('currentuser',post[1].name)
    store('pic',post[1].pic)
    setTimeout(() => {
     
      navigate('/profile2/'); 
  
      
     
     
    }, 1100);

   }
}
  
          )
   // const { posts, isLoading, error } = useDataFetcher(BASE_URL)
   }

  export default function LoginForm () {
    const { posts, isLoading, error } = useDataFetcher(BASE_URL)
    const [uid, setUid] = React.useState('');
    const [pasword, setPassword] = React.useState('');

  
    return (
      <>
      <form>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={uid}
          onChange={e => setUid(e.target.value)}
        />
        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={pasword}
          onChange={e => setPassword(e.target.value)}
        />
       
      </form>
       <button onClick  ={() => { submitValue(posts,uid,pasword) }} >Login</button>
       </>
    );
  }

  

 
