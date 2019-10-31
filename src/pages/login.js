import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import  "../components/stylez.css"
import Layout from "../components/layout2"
import { navigate } from "gatsby"
import lit from '../images/lit.jpg'
import Header from "../components/neweader"
import Footerstick from '../components/footerstick'
import '../components/layout.css'

const ValidatedLoginForm = () => (
 
  <div  >
  
<Header/>
<div className='bg'>
  <Formik
    initialValues={{ email: null, password: "",isloading:'false'}}
    onSubmit={(values, { setSubmitting }) => {
      values.isloading='true'
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
        if((values.email==2419334916)&&(values.password==='297421')){
        values.isloading='true'
        navigate('/profile2/'); 

        }
        else
        values.isloading='false'
       
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
      email: Yup.number()
        
        .required("Required"),
        isloading:Yup.string(),
      password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
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
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">ID</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your Account id"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting} > {values.isloading==='true' && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          {values.isloading==='true' && <span>logging in</span>}
          {values.isloading==='false' && <span>login</span>}
           
          </button>
        </form>
      );
    }}
  </Formik>
  
  </div>
 
  <footerstick/>
  </div>
);

export default ValidatedLoginForm;
