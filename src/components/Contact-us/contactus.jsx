import React from 'react'
import './contactus.css'
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_iceon  from '../../assets/edusity_assets/mail-icon.png'
import phone_icone from '../../assets/edusity_assets/phone-icon.png'
import addr_iceon  from '../../assets/edusity_assets/location-icon.png'
import white from '../../assets/edusity_assets/white-arrow.png'

function contactus() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "cb3c103a-8648-4025-b620-f2073c6d0494");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact' id='contactus'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon}></img></h3>
            <p>If you have any questions, suggestions, or concerns, please don’t hesitate to reach out.
Fill out the form below, and our team will get back to you promptly.
Thank you for connecting with us!</p>
<ul>
    <li> <img src={phone_icone}></img>  (555) 123-4567</li> 
    <li> <img src={mail_iceon}></img>info@example.com</li>
    <li>  <img src={addr_iceon}></img>1234 Elm Street, Springfield, IL 62701, USA</li>

</ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter Your name' required></input>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter Your Phone Number' required></input>
                <label>Enter Your Message</label>
                <textarea name='message' rows='6' placeholder='Enter your Message' required></textarea>
                <button className='btn dark-btn' type='submit'> Submit Now <img src={white} alt="" /></button>
                

            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default contactus
