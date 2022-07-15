import React from 'react'
import SectionHeading from './SectionHeading'
import SectionSubheading from './SectionSubheading'
import jennaSpotlight from '../assets/clara-spotlight.jpg'


const Spotlight = () => {

    return (
        <>
            <section className="spotlight">
                <div className="description">
                    <SectionHeading title="Spotlights" subtitle="Clara Oswald" />
                    <p>Clara Oswald is one of the Doctor’s most extraordinary companions. In order to help the Doctor she allowed the time winds to tear her into countless different iterations of herself. These different Claras helped the Time Lord on many occasions, with one of them even persuading the First Doctor to steal the TARDIS that became ‘his’ time machine.</p>
                </div>
                <div className="details-wrapper">
                    <SectionSubheading title="About Clara"/>
                    <div className="details">
                        <div className="detail">
                            <p className="text-secondary-50">Home Planet:</p>
                            <p>Earth, London, Blackpool</p>
                        </div>
                        <div className="detail">
                            <p className="text-secondary-50">First Appearence:</p>
                            <p>“Asylum of the Daleks” (2012)</p>
                        </div>
                        <div className="detail">
                            <p className="text-secondary-50">Occupation:</p>
                            <p>Teacher, Coal Hill School</p>
                        </div>
                        <div className="detail">
                            <p className="text-secondary-50">Last Appearence:</p>
                            <p>“Twice Upon a Time” (2017)</p>
                        </div>
                        <div className="detail">
                            <p className="text-secondary-50">Affiliations:</p>
                            <p>11th &#38; 12th Doctors</p>
                        </div>
                        <div className="detail">
                            <p className="text-secondary-50">Portrayed by:</p>
                            <p>Jenna Coleman</p>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={jennaSpotlight} alt="Clara Oswald played by Jenna Coleman"/>
                </div>
            </section>

            
        </>
    )
}

export default Spotlight