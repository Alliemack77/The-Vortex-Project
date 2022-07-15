import React from 'react'
import Button from './Button'
import SectionHeading from './SectionHeading'
import tardisForrest from '../assets/tardis-forrest.jpg'



const Article = () => {
    return (
        <section className="article">
            <div className="description">
                <SectionHeading subtitle="What's next for the Doctor?"/>
                <p>Your guess is as good as ours. Checkout our predictions for the next Doctor.</p>
                <p>January 12, 2022</p>
                <Button text="Read More"/>
            </div>
            {/* <img src={tardisForrest} alt=""/> */}
        </section>
    )
}

export default Article