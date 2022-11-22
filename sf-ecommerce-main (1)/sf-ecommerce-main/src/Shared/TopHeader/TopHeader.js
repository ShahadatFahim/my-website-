import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faHomeAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return (
        <div className='w-full px-  py-2 sm:py-0 lg:px-10'>
            <div className='flex justify-center md:justify-between items-center py-1'>
                <div>
                    <Link className='pr-5 hover:text-blue-500' to='/'>
                        <FontAwesomeIcon className='pr-2' icon={faHomeAlt}></FontAwesomeIcon>
                        Home
                    </Link>
                    <Link className='pr-5 hover:text-blue-500' to='/'>
                        <FontAwesomeIcon className='pr-2' icon={faUserAlt}></FontAwesomeIcon>
                        About Us
                    </Link>
                    <Link className='pr-5 hover:text-blue-500' to='/'>
                        <FontAwesomeIcon className='pr-2' icon={faEnvelope}></FontAwesomeIcon>
                        Contact
                    </Link>
                </div>
                <div className='py-1 hidden md:flex'>
                    <FontAwesomeIcon className='px-3 py-2 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-full' icon={faFacebookF}></FontAwesomeIcon>
                    <FontAwesomeIcon className='px-[9px] py-2 ml-2 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-full' icon={faWhatsapp}></FontAwesomeIcon>
                    <FontAwesomeIcon className='p-2 ml-2 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-full' icon={faTwitter}></FontAwesomeIcon>
                    <FontAwesomeIcon className='p-2 ml-2 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-full' icon={faInstagram}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;