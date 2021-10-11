import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import "../css/mailchimp-form.css"

const url = `https://gmail.us5.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () => {
    // email && name && email.value.indexOf("@") > -1 && 
    onValidated({ EMAIL: email.value, MMERGE1: name.value});
  }
  const customErrorMsg = (message) => {
    if(message.includes('already subscribed')) {
      return "It looks like that email address is already subscribed"
    }else if(message.includes("enter a value")) {
      return "Please fill in all fields"
    }else if(message.includes("An email address must contain a single @") || message.includes("domain portion of the email address is invalid")) {
      return 'Please enter a valid email address'
    }else {
      return "We're sorry, something went wrong.  Please try again later."
    }
  }

  return (
    <>
    <div className="form" >
      <input 
        ref={node => (name = node)}
        type="text"
        placeholder="Your name" 
        className="name-input"
        />
      <div className="inputs-divider"></div>
      <input 
        ref={node => (email = node)}
        type="email"
        placeholder="Your email" 
        className="email-input"
      />
      <button className="subscribe-btn" onClick={submit}>Subscribe</button>
    </div>
      {status === "sending" && <div className="signup-message">sending...</div>}
      {status === "error" && console.log(message)}
      {status === "error" && <div className="signup-message">{customErrorMsg(message)}</div>}
      {status === "success" && <div className="signup-message">Thank you for subscribing</div>}
    </>
  )
}

const MailchimpForm = (props) => (
  <div id={props.formId} >
    <MailchimpSubscribe
       url={url}
       render={({ subscribe, status, message }) => (
         <CustomForm status={status} message={message} onValidated={formData => subscribe(formData)} />
       )}
     /> 
  </div>
)

export default MailchimpForm;