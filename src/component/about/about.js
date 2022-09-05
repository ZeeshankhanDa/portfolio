import "./about.scss";

import { useEffect, useState } from "react";
import { AnimatedLetters } from "../animatedLetters/animatedletter";
import zeeshanResume from '../../assets/resume/zeeshankhanResume.pdf'
import Loader from 'react-loaders';
export const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [" A", "b", "o", "u", "t"];
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    };
  }, []);
  return (
    <>
      <div className="about">
        <div>
          <h1 className="content">
            <span className="name">
              <AnimatedLetters
                letterClass={letterClass}
                strArry={nameArray}
                index={12}
              />
            </span>
          </h1>
        </div>
        <div className="section2">
          <div className="about-content">
            <p>
              Passionate and dedicated solution seeker with experience in design and developing
              Web Application.
              proficient in developing Database, create User Interface, writing and testing codes,
              troubleshooting simple/complex issues implement new features based on user's feedbacks
            </p>
            <p>
              Expert in Front-End and Back-End development and performing quality assurance and have done Master in Computer Application   
            </p>
          </div>
          <div className="section3">
            <div className="skills">
              <h1 className="user-skills">Skills</h1>
              <h2 className="skill-group">
                <span className="type">Expert</span>
                <br />
              <p className="skill-name">
                    Java React SpringBoot JavaScript Sql Scss tailwindCss
              </p>
              </h2>
              <h2 className="skill-group">
                <span className="type">Familier</span>
                <br />
                <p className="skill-name">
                    NodeJs ExpressJs MongoDB MaterialUI
              </p>
              </h2>
            </div>
            <div className="btn-group">
              <button className="btn"><a href={zeeshanResume} download='zeeshan-Resume'>Resume</a></button>
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman'/>
    </>
  );
};
