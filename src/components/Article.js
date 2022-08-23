import React from 'react'
import Button from './Button'
import SectionHeading from './SectionHeading'
import tardisForrest from '../assets/tardis-forrest.jpg'



const Article = () => {
    return (
        <div className="article">
            <div className="description">
                <SectionHeading subtitle="The Next Doctor?"/>
                <div className="body">
                    <p>Your guess is as good as ours. Checkout our predictions for the next Doctor.</p>
                </div>
                <Button text="Read More" href="#" icon={false} arrow={false}/>
            </div>
            {/* <img src={tardisForrest} alt=""/> */}
        </div>
    )
}

export default Article