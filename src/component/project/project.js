import { useEffect, useState } from 'react';
import { AnimatedLetters } from '../animatedLetters/animatedletter';
import './project.scss';
import resortImg from '../../assets/img/zero-take-WvHrrR1C5Po-unsplash.jpg'
import ecmmrcImg from '../../assets/img/oleksii-s-23gXCebItDQ-unsplash.jpg'
import Loader from 'react-loaders';

export const Project = ()=>{
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = ["P","r","o","j","e","c","t","s"];
    useEffect(() => {
      return () => {
        setTimeout(() => {
          setLetterClass("text-animate-hover");
        }, 4000);
      };
    }, []);
    return (
      <>
        <div className='project'>
         <h1 className="content">
            <span className="name">
              <AnimatedLetters
                letterClass={letterClass}
                strArry={nameArray}
                index={12}
              />
            </span>
            </h1>
            <div className='modules'>
              <div className='box'>
              <img className='img' src={ecmmrcImg}/>
                <h2 className='title'>MeenKart</h2>
                <h3 className='about-title'>E-commerce Web Application</h3>
                
                <button className="btn">Source</button>
              </div>
              <div className='box'>
              <img className='img' src={resortImg}/>
                <h2 className='title'>MeenResort</h2>
                <h3 className='about-title'>Resort booking Web Application</h3>
                
                <button className="btn">Source</button>
              </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
     )
}