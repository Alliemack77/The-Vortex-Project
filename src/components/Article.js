import React from 'react'
import Button from './Button'
import SectionHeading from './SectionHeading'


const Article = () => {
    return (
        <div className="article">
            <div className="description">
                <SectionHeading subtitle="The Next Doctor?"/>
                <div className="body">
                    <p>Your guess is as good as ours. Checkout our predictions for the next Doctor.</p>
                </div>
                <Button text="Read More" href="#" arrow/>
            </div>
        </div>
    )
}

export default Article