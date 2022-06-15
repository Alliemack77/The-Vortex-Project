import React from 'react'

const SectionHeading = ({title, subtitle}) => {
    return (
        <h2>
            <span className="heading-accent">The Vortex</span> 
            <span className="heading-title"> {title}:</span> <br></br> 
            <span className="heading-subtitle">{subtitle}</span>
        </h2>
    )
}

export default SectionHeading;