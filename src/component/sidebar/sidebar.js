import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';
import { faHome,faUser,faEnvelope, faCode, faClose} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';
// import { useState } from 'react';

export const Sidebar = ()=>{
    const[show, setshow] = useState(false)
    function click(){
        setshow(!show)
    }
    useEffect(()=>{
        if(show==true){
            setTimeout(()=>{
                setshow(false)
            },5000)
        }
    })
   
    return (
        <div className='nav-bar'>
            <div className='logo'>
            <h1 className='sub-logo'>ZK</h1>
            </div>
            <nav className={show?'nav-show':''}>
                <NavLink exact="true" activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink className='about-link' activeclassname='active' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink className='contact-link' activeclassname='active' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
                <NavLink className='project-link' activeclassname='active' to='/project'>
                    <FontAwesomeIcon icon={faCode} color='#4d4d4e'/>
                </NavLink>
            </nav>
            <ul className={show?'ul-show':''}>
                <li>
                    <a href='https://www.linkedin.com/in/zeeshan-khan-34009a228' target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} className="social-link"/>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/ZeeshankhanDa' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} className="social-link"/>
                    </a>
                </li>
            </ul>
            <button type='submit' className='btn' onClick={()=>click()}>
            <FontAwesomeIcon  icon={faBars} className={`sd-btn ${show?'btn-close':'btn-show'}`} />
            <FontAwesomeIcon icon={faClose} className={`sd-btn ${show?'btn-show':'btn-close'}`} />
            </button>
        </div>
    )
    
}