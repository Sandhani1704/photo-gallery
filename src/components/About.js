import React from 'react';
import './About.css';
import avatar from '../images/avatar2.jpg'

function About() {

    return (
        <>
            <section className='about'>
                <div className='about__avatar-conteiner'>
                    <img className='about__avatar' src={avatar} alt='Аватар' />
                </div>
                <div className='about__text-conteiner'>
                    <h1 className='about__title'>Обо мне</h1>
                    <p className='about__description'>Я начинающий Front-end-разработчик. 
                    Мне очень нравится развиваться в данной области, узнавать как можно больше нового. 
                    Хочу построить карьеру на том, что мне действительно интересно. 
                    За время обучения в Яндекс Практикуме научилась создавать веб-приложения с использованием HTML, CSS, JavaScript, React, Node.js
                </p>

                </div>
            </section>

        </>
    )
}

export default About