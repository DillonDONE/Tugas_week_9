import React from "react";
import Contact from "./Contact";

const contacts = [
  {
    id: 1,
    name: "John Doe",
    imgURL:
        "https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
    email: "john@.com",
    phone: "123-456-7890"
  },
  {
    id: 2,
    name: "Jane Smith",
    imgURL:
        "https://assets-global.website-files.com/61766c42e8e50c99a04fbd4b/64e69f71607b05d852db97ae_CPO-p-800.jpeg",
    email: "jane@.com",
    phone: "987-654-3210"
  },
  {
    id: 3,
    name: "Jackson",
    imgURL:
        "https://s.hdnux.com/photos/51/23/24/10827008/4/ratio3x2_2300.jpg",
    email: "j@ckson.com",
    phone: "987-654-4310"
  },
];

const ContactList = () => {
  return (
    <div className="contact-list">
      <center><h1>My Contact</h1></center>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
