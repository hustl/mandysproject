import React, { useState, useEffect } from 'react';
import { Formik, yupToFormErrors } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import  "../components/stylez.css"
import Layout from "../components/layout2"
import { navigate } from "gatsby"
import lit from '../images/lit.jpg'
import Header from "../components/neweader"
import '../components/layout.css'
import  ResponsiveDialog from '../components/dialog'

var store = require('store')
const windowGlobal = typeof window !== 'undefined' && window
const accounts = [{firstName:"Sam", lastName:"Frederick", account :'46210999'},
{firstName:"Oliver", lastName:"Dominic", account:'41376656'},
{firstName:"Alexander", lastName:"Yurnimov", account :'53866401'},
{firstName:"Amy", lastName:"Jackson", account :'43478199'},
{firstName:"Luka", lastName:"Stavros", account :'12720079'}];
function getd(){
  var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
return date;
}
const updatebalance = async (currentamount,deducter) =>{
 try{
   const newbalance= parseFloat(currentamount)-parseFloat(deducter)
  
    let result= await fetch( 'https://kui-app.firebaseio.com/.json',{
      method:'put',
      
     
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body : JSON.stringify({
        "balance" : newbalance
      }
      )
    });
    console.log(result);
   

    windowGlobal.location.reload();
  }

  
  catch(e){
    console.log(e);
  }
}
 const postdata = async (amount,fullname) =>{
  try{
    let result= await fetch( "https://mandy-25207.firebaseio.com/.json",{
      method:'post',
      mode:'no-cors',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body : JSON.stringify({
        amount:amount,
        name:fullname,
        type:'debit',
        date:getd(),
      })
    });
    console.log(result);
  }
  catch(e){
    console.log(e);
  }
  }
var fullname="";

const ValidatedLoginForm = () => (

 
  <div  style={{display:'flex'}} >


 
<div  className='bg'>

  <Formik
 
    initialValues={{ account: "", token: "" ,accountname:'',amount :0, alrt:false, 
   }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
       
       
        console.log("Logging in", values);
        setSubmitting(false);
        
        if(window.navigator.onLine){
         

          for(let i=0;i<accounts.length;i++){
            if(values.account===accounts[i].account){
               fullname=accounts[i].firstName +' '+accounts[i].lastName
              console.log(fullname);
              //accounts[i].firstName+ ' ' + accounts[i].lastName
              break
            }
            else fullname=''
           
          }
        if (window.confirm('Are you sure you wish to send ' +values.amount +' USD to \n '+values.account +'\n '+ fullname
        )){
        postdata(values.amount,fullname)
       
        updatebalance(store.get('rememberme').number,values.amount)
        }}

      }, 500);
    }}
    
    //********Handling validation messages yourself*******/
    // validate={values => {
    //   let errors = {};
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (!EmailValidator.validate(values.email)) {
    //     errors.email = "Invalid email address";
    //   }

    //   const passwordRegex = /(?=.*[0-9])/;
    //   if (!values.password) {
    //     errors.password = "Required";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Password must be 8 characters long.";
    //   } else if (!passwordRegex.test(values.password)) {
    //     errors.password = "Invalida password. Must contain one number";
    //   }

    //   return errors;
    // }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
     accountname: Yup.string()
        
        ,
      account: Yup.string()
        .required("No account number provided.")
        .matches(/(^[0-9]{8}$)/, "Account number  must be 8  digits. our offshore standard")
        //.max(8,'number is too long - should be 8 chars')
      ,
        token: Yup.string()
       .required("No token number provided.")
       .matches(/(^[0-9]{10}$)/, "Token must  be 10 digits.")
        ,
        amount: Yup.number().required('please put the exact amount you wish to send'), 
      
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      
      } = props;
     
      
      
      return (
        <div>
        <form onSubmit={handleSubmit}>
          <label >Recipient Account</label>
          <input
            name="account"
            type="text"
            placeholder="Enter acct num"
            value={values.account}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.account && touched.account && "error"}
          />
         
          {errors.account && touched.account && (
            <div className="input-feedback">{errors.account}</div>
          )}
          <label>Token</label>
          <input
            name="token"
            
            placeholder="Enter your 10 digit token"
            value={values.token}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.token && touched.token && "error"}
          />
          {errors.token && touched.token && (
            <div className="input-feedback">{errors.token}</div>
         
          )}
           <label>Amount (USD)</label>
          <input
            name="amount"
            
            placeholder="Enter amount in digits"
            value={values.amount}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.amount && touched.amount && "error"}
          />
           {errors.amount && touched.amount && (
            <div className="input-feedback">{errors.amount}</div>
          )}
          {values.alrt && (
            <div className="input-feedback"><ResponsiveDialog namer ='food' setfunction ={values.setstate} /></div>
          )}
          <button type="submit" disabled={isSubmitting} >
            transfer
          </button>
          
        </form>
        </div>
      );
    }}
  </Formik>
  
  </div>
 
  </div>
);


export default ValidatedLoginForm;