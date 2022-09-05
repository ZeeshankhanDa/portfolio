import { useEffect, useRef, useState } from 'react';
import { AnimatedLetters } from '../animatedLetters/animatedletter'
import './contact.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from 'react-loaders';


export const Contact=()=>{
    const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [" C", "o"," n", "t", "a", "c","t"];
  const formref = useRef();
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    };
  }, []);

  // Email setup
 
  function sendemail(e){
    e.preventDefault();
    emailjs.sendForm('', formref.current, '')
    .then(() => {
      alert('message sent successfully')
        window.location.reload(false)
        
    }, () => {
      alert('Enter correct details')
      formref.taget.reset();
    
    });
};

    return(
      <>
        <div className='contact'>
            <h1 className="content">
            <span className="name">
              <AnimatedLetters
                letterClass={letterClass}
                strArry={nameArray}
                index={12}
              />
            </span>
            </h1>
            <div className='show-flex'>
            <div className='contact-form'>
                <form ref={formref} onSubmit={sendemail}>
                    <div className='input1'>
                    <input className='user-text inp' type='text' placeholder='Name: ' name='name' required />
                    <input className='email-text inp'  type='email' placeholder='Email: ' name='email' required/>
                    
                    </div>
                    <input className='subject-text inp'  type='text' placeholder='Subject: ' name='subject'/>
                    <textarea className='text-area inp' required name='message' placeholder='message:'/>
                    <input  value='SEND' type='submit' className='smbt-btn'/>
                </form>

            </div>
           
            </div>
            
        </div>
        <Loader type='pacman'/>
        </>
    )

}