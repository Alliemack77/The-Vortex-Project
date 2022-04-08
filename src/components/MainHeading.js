import React from 'react'

const MainHeading = ({title, subtitle}) => {
    return (
        <h2>
            <span className="heading-accent fs-700">The Vortex</span> 
            <span className="heading-title"> {title}:</span> <br></br> 
            <span className="heading-subtitle">{subtitle}</span>
        </h2>
    )
}

export default MainHeading;