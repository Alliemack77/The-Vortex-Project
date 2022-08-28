import React from 'react';
import { SiBbciplayer } from 'react-icons/si';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Button = ({icon, text, arrow, href}) => {
    return (
        <a 
            className='button bg-tertiary text-primary fw-500' 
            href={href} 
            target="_blank"
        >
            { icon && <SiBbciplayer />} 
            {text}
            { arrow && <AiOutlineArrowRight />}
        </a>
    )
}

export default Button 