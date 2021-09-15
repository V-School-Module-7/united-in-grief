import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import "../css/mailchimp-form.css";

const url = `https://gmail.us5.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

const SimpleForm = () => <MailchimpSubscribe url={url} />
const MailchimpForm = () => (
  <MailchimpSubscribe 
    url={url}
    render= {({subscribe, status, message}) => (
      <div className="form-container">
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div className="status"> sending... </div> }
        {status === "error" && <div className="status">{message}</div> }
        {status === "success" && <div className="status"> subscribed! </div> }
      </div>
    )}
  />
)

export default MailchimpForm;