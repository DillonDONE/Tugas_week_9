import React from "react";

const Contact = ({ contact }) => {
  return (
    <div className="contact">
        <img src={contact.imgURL} alt={contact.name} className="contact-icon" />    
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
};

export default Contact;
