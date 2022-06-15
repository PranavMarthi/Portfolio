import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

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
               <div className="info-map">
                Slobodan Gajić,
                <br />
                Serbia,
                <br />
                Branka RadiČevića 19, 22000 <br />
                Sremska Mitrovica <br />
                <br />
                <span>freelancerslobodan@gmail.com</span>
                </div>
                <div className="map-wrap">
                <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[44.96366, 19.61045]}>
                    <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
                </div>
           </div>
        </div>
        </>

    );
}

export default Contact;
