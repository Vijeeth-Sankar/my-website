import React from 'react';
import emailjs from '@emailjs/browser'
import './mail.css'

export default function Contactus() {

    function sendEmail(e){
        e.preventDefault();
    
        emailjs.sendForm('service_mj9mau7', 'template_pijqoo8', e.target, '67zr8SJUB3wfHDOrt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };


    return(
        <div id="mes" className='d-flex justify-content-center'>
            <form onSubmit={sendEmail} >
                <input type="text" id='boxs' placeholder="Hello bro!..." name="message"/>
                <div className='d-flex justify-content-center'>
                <input type="submit" id='direct' value="Direct message"/>
                </div>
                
            </form>
        </div>
    )
}