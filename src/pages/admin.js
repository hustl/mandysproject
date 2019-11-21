import React from "react";
const postdata = async (uId,pasword,fullname,email,gender,address,phone,picurl) =>{
    try{
      let result= await fetch( "https://apxusers.firebaseio.com/.json",{
        method:'post',
        mode:'no-cors',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body : JSON.stringify({
          
          name:fullname,
          uid:uId,
          password:pasword,
          emailadd:email,
          Gender:gender,
          Address:address,
          Phone:phone,
          pic:picurl


         
         
        })
      });
      console.log(result);
    }
    catch(e){
      console.log(e);
    }
    }
const submitValue = (uid,pasword,fullname,email,gender,address,phone,picurl) => {
   if(uid !='' && pasword !=''  && fullname !=''  && picurl !='' && email !='' && gender !='' && address !=''  && phone !='' )
   {
       postdata(uid,pasword,fullname,email,gender,address,phone,picurl)

   }
  
   // const { posts, isLoading, error } = useDataFetcher(BASE_URL)
   }
   const submitValue2 = async () => {
    try{
        let result= await fetch( "https://access-b3b7e.firebaseio.com/.json",{
          method:'put',
         
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body : JSON.stringify({
            
            blocked:'true'
  
  
           
           
          })
        });
        console.log(result);
      }
      catch(e){
        console.log(e);
      }
      }
   
   const submitValue3 = async () => {
    try{
        let result= await fetch( "https://access-b3b7e.firebaseio.com/.json",{
          method:'put',
         
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body : JSON.stringify({
            
            blocked:'false'
  
  
           
           
          })
        });
        console.log(result);
      }
      catch(e){
        console.log(e);
      }
   }
export default function LoginForm () {
    const [uid, setUid] = React.useState('');
    const [pasword, setPassword] = React.useState('');
    const [fullname, setFullname] = React.useState('');
    const [address, setadd] = React.useState('');
    const [phone, setphone] = React.useState('');
    const [email, setemail] = React.useState('');
    const [gender, setgender] = React.useState('');
    const [picurl, setpicurl] = React.useState('');

  
    return (
      <>
      <form>
        <label htmlFor="email">Account Id</label>
        <input
          name="email"
          type="text"
          placeholder="Enter new Account Id"
          value={uid}
          onChange={e => setUid(e.target.value)}
        />
        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="text"
          placeholder="Enter your password"
          value={pasword}
          onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor="email">gender</label>
        <input
          name="password"
          type="text"
          placeholder="Enter your gender number"
          value={gender}
          onChange={e => setgender(e.target.value)}
        />
        <label htmlFor="email">image location</label>
        <input
          name="password"
          type="text"
          placeholder="Enter your image url"
          value={picurl}
          onChange={e => setpicurl(e.target.value)}
        />
        <label htmlFor="email">Phone</label>
        <input
          name="password"
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={e => setphone(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          name="password"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={e => setemail(e.target.value)}
        />
        <label htmlFor="email">fullname</label>
        <input
          name="password"
          type="text"
          placeholder="Enter fullname"
          value={fullname}
          onChange={e => setFullname(e.target.value)}
        />
        <label htmlFor="email">address</label>
        <input
          name="password"
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={e => setadd(e.target.value)
        }
        />
       
      </form>
       <button onClick  ={() => { submitValue(uid,pasword,fullname,email,gender,address,phone,picurl) }} >submit</button>
       <button onClick  ={() => { submitValue3() }} >turn off access</button>
       <button onClick  ={() => { submitValue2() }} >turn on access</button>
       </>
    );
  }