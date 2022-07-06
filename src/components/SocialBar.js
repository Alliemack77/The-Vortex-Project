import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

const SocialBar = () => {
    return (
        <div className='social-bar flex'>
            <a href="https://www.facebook.com/DoctorWho/" target='_blank' rel="noreferrer">
                <AiOutlineFacebook />
                <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com/bbcdoctorwho/?hl=en" target='_blank' rel="noreferrer">
                <AiOutlineInstagram />
                <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.youtube.com/user/doctorwho" target='_blank' rel="noreferrer">
                <AiOutlineYoutube />
                <span className="sr-only">YouTube</span>
            </a>
        </div>
    )
}

export default SocialBar