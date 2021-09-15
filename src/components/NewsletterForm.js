import React from 'react';
import Mailchimp from "react-mailchimp-form";
import "../css/mailchimp-form.css";

function NewsletterForm(props) {
  return (
    <Mailchimp 
      action="https://gmail.us5.list-manage.com/subscribe/post?u=e63a03e3f9533dc9e99b4d560&amp;id=64c1f7c62e"
      // action={`https://gmail.us5.list-manage.com/subscribe/post?u=e63a03e3f9533dc9e99b4d560&id=64c1f7c62e`}
      className="chimp-form" 
      fields={[
        {name: "EMAIL", placeholder: "Email", type: "email", required: true}
      ]}
      messages={{button: "Subscribe"}}
    />
  );
}

export default NewsletterForm;