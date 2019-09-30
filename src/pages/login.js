import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import  "../components/stylez.css"
import Layout from "../components/layout2"
import { navigate } from "gatsby"
import lit from '../images/lit.jpg'
import Header from "../components/neweader"
import '../components/layout.css'
const ValidatedLoginForm = () => (
  <div  >

<Header/>
<div className='bg'>
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
        if((values.email==='ernstingrise@gmail.com')&&(values.password==='ern0943sting'))
        navigate('/about/');
        else
        console.log("error",);
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
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
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
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
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
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      );
    }}
  </Formik>
  
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
  </div>
);

export default ValidatedLoginForm;
