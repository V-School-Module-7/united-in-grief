import React from 'react';
import Mailchimp from "react-mailchimp-form";
// import "../css/mailchimp-form.css";

function NewsletterForm(props) {
  return (
    <Mailchimp 
      action="https://gmail.us5.list-manage.com/subscribe/post?u=e63a03e3f9533dc9e99b4d560&amp;id=64c1f7c62e"
      className="chimp-form" 
      fields={[
        {name: "FNAME", placeholder:"Your Name", type: "text", required: true},
        {name: "EMAIL", placeholder: "Email", type: "email", required: true}
      ]}
      messages={{button: "Subscribe", sending: "Sending..", success: "Thank you for subscribing!", error: "an unexpected error has occurred"}}
    />
  );
}

export default NewsletterForm;