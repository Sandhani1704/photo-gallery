import React from 'react';
import './About.css';
import aboutAvatar from '../images/123.png'

function About() {
    return (
        <section className='about'>
            <div className='about__avatar-conteiner'>
                <img className='about__avatar' src={aboutAvatar} alt='Аватар' />
            </div>
            <div className='about__text-conteiner'>
                <h1 className='about__title'>Об авторе</h1>
                <p className='about__description'>Это блок с описанием автора проекта. Здесь следует указать,
                как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.
                </p>
                <p className='about__description'>Также можно рассказать о процессе обучения в Практикуме,
                    чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
            </div>
        </section>
    )
}

export default About