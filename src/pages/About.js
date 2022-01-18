import React from 'react';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';

const About = () => {
    return (
        <section className='section'>
            <div className='section-title'>
                <h1>The Story</h1>
            </div>
            <div className='about-section'>
                <img 
                    src = {logo2}
                    className='img-left'
                />
                <div className='about-text'>
                    <p>
                        I began my journey learning the foundations of 
                        development 
                        <span className='highlight'> HTML, CSS and JavaScript</span>
                        , as a beginner, I fell in love with creating interactive 
                        websites for users. 
                    </p>
                </div>
            </div>
            <div className='about-section'>
                <img 
                    src = {logo3}
                    className='img-right'
                />
                <div className='about-text'>
                    <p>
                        As the world of development changes constantly, 
                        I felt as if it was time to choose a framework and 
                        a backend service to store data. I fell in love
                        with <span className='highlight'>React JS </span>
                        because of it's versatility and most importantly
                        the reusability aspect, allowing developers, such 
                        as myself to develop and maintain applications 
                        much more efficiently. When choosing a stack to work 
                        for backend to integrate with my frontend development, 
                        I chose <span className='highlight'> Ruby on Rails. </span>
                        Ruby on Rails, has many benefits, when it comes to 
                        building applications efficiently and in a cost 
                        effective manner. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;