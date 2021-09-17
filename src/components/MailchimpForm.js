import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import "../css/mailchimp-form.css"

const url = `https://gmail.us5.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () => {
    email && name && email.value.indexOf("@") > -1 && 
    onValidated({ EMAIL: email.value, MMERGE1: name.value});
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
        />
      <button className="subscribe-btn" onClick={submit}>Subscribe</button>
    </div>
      {status === "sending" && <div className="signup-message">sending...</div>}
      {status === "error" && <div className="signup-message">{message}</div>}
      {status === "success" && <div className="signup-message">Thanks for subscribing!</div>}
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