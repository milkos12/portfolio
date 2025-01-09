import { useRef, useState } from 'react';
import './About.css';

export const About = () => {
    const titleRef = useRef(null);

    
    return (
        <div className='about' >
            <h4>ABOUT</h4>
            <p>
            With over a year of experience in React JS, and technologies such as JavaScript, APIs, and No-code tools, I have worked on process automation and data visualization, optimizing operational efficiency in projects.
            <br />
            <br />
            </p>
        </div>
    );
}

export default About;