import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = ()=> {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_nm30gke',
            'template_q13wwyg',
            form.current,
            'Fb0b8DgYojJsgMdGH'
          )
          .then(
            () => {
              alert('Sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    
    return (
        <>
        <div className='container contact-page'>
           <div className='text-zone'>
               <h1 style={{
                   "color":"white"
               }}>
                   Contact Me
               </h1>
               <p>
                   
               </p>
               <div className='contact-form'>
                   <form ref={form} onSubmit={sendEmail}>
                       <ul>
                           <li className='half'>
                               <input type='text' name='name' placeholder='Name' required />
                           </li>
                           <li className='half'>
                               <input type='email' name='email' placeholder='Email' required />
                           </li>
                           <li>
                               <input placeholder="Subject" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND"/>
                            </li>
                       </ul>
                   </form>
               </div>
        </div>
        </div>
        </>

    );
}

export default Contact;
