
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import { AnimatedLetters } from '../animatedLetters/animatedletter'
import Loader from 'react-loaders';



export const Home = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' Z','e','e','s','h','a','n',' ','K','h','a','n']
    const  jobArray = ['F','u','l','l','','S','t','a','c','k','','D','e','v','e','l','o','p','e','r']
    useEffect(()=>{
        return()=>{
            setTimeout(()=>{
                setLetterClass('text-animate-hover')
            },4000)
            
        }
    },[])
    return(
        <>
        <div className='home'>
            <div className='title'>
                <h1 className='content'>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I'</span>
                    <span className={`${letterClass} _14`}>m </span><span> </span>
                    <span className='name'><AnimatedLetters letterClass={letterClass} strArry={nameArray} index={15}/> </span><br/>
                    <span className='sub-title'><AnimatedLetters letterClass={letterClass} strArry={jobArray} index={12}/></span><br/>
                    
                </h1>
            </div>
            <p>
            Full Stack Developer with expertise in JavaScript, React, Java and Springboot along with having Intermediate knowledge in MERN Stack development, with good communication skills and ability to work in a team and Fast Learner. I like to explore new Web Technology
            </p>
            <div className='btn-group'>
                <Link to='/contact' className='btn'>Contact</Link>

            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}