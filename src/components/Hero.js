import React from 'react'
import SectionHeading from './SectionHeading'
import Button from '../components/Button'
import SocialBar from '../components/SocialBar'
import heroImg from '../assets/hero-img.jpg'

const Hero = () => {
    return (
        <section className="hero">
            <img className="hero_image" src={heroImg} alt='The Doctor and her companions fighting off the Dalek invasion'/>
            <div className="hero_body">
                <SectionHeading title='Picks' subtitle='Eve of the Daleks' />
                <div className='data flex'>
                    <p>Series 13 Episode 7</p>
                    <p>1 January, 2022</p>
                </div>
                <p className='description'>New Year’s Eve. Sarah is working - again. Nick is her only customer - again. Same old same old. Except this year, their countdown to midnight will be the strangest and deadliest they have ever known. Why is an executioner Dalek targeting these two people, in this place, on this night? Why are they having to live through the same moments again? Can the Doctor, Yaz and Dan save them and survive into the New Year?</p>
                <div className='cta'>
                    <div>
                        <Button
                            icon
                            text='Watch on BBC'
                            href='https://www.bbc.co.uk/programmes/m000qr8k' />
                    </div>
                    <SocialBar/>
                </div>
            </div>



        </section>
    )
}

export default Hero;