import React from 'react';
import logo from '../images/portfolio-img.png';

const Home = () => {
    return (
        <div className='container'>
            <img 
                src = {logo} 
                className='img'
            />np
            <div className='home-text'>
                <h3>Hey, I'm</h3>
                <h1 className='name'>Purtha Shaariyaar</h1>
                <p>
                    I'm a 
                    <span className='highlight'> Software Engineering Student</span>
                    , my main areas of interest are 
                    <span className='highlight'> Frontend</span> and 
                    <span className='highlight'> Backend Development</span>
                    . I'm constantly learning and my goal is 
                    to be able to fully utilize being a 
                    <span className='highlight'> Full Stack Developer</span>.
                </p>
            </div>
        </div>
    )
}

export default Home;