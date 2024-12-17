import React from 'react'
import './Contact.css'
import { IoIosMail } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {

   
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "150812dc-0330-422b-87cf-a56bbf96e719");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id='contact' className='Contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new project, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
              <div className="contact-detail">
              <IoIosMail /> <p>logeshwaran6069@gmail.com</p>
              </div>
              <div className="contact-detail">
              <FiPhoneCall /> <p>91+ 7010364226</p>
              </div>
              <div className="contact-detail">
              <FaLocationDot /> <p>Karur, IN</p>
              </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name' name='name'/>
        <label htmlFor="">Your Email</label>
        <input type="text" placeholder='Enter your email' name='email'/>
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
        <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
