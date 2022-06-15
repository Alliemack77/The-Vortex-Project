import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

const SocialBar = () => {
    return (
        <div className='social-bar flex'>
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineYoutube />
        </div>
    )
}

export default SocialBar