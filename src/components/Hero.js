import React from 'react'
import MainHeading from './MainHeading'
import heroImg from '../assets/hero-img.jpg'

const Hero = () => {
    return (
        <section className="hero">
            <img className="hero_image" src={heroImg} />
            <div className="hero_body">
                <MainHeading title='Picks' subtitle='Eve of the Daleks' />
            </div>


        </section>
    )
}

export default Hero;