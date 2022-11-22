import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faLocationDot, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            {/* Top Footer or Main Footer Part */}
            <div className='w-full px-4 lg:px-10 bg-accent py-10'>
                <div className='text-center md:text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div>
                        <h2 className='text-4xl text-neutral uppercase font-extrabold'>SF Shop</h2>
                        <p className='pt-6 text-lg'>The quality of product is more important than the price. We are provide the best quality of product and confident about our quality.</p>
                    </div>
                    <div>
                        <h2 className='text-2xl text-neutral font-bold'>Quick Links</h2>
                        <ul>
                            <li>
                                <Link className='block text-lg hover:text-primary font-medium pt-7' to='/'>Home</Link>
                                <Link className='block text-lg hover:text-primary font-medium' to='/'>Shop</Link>
                                <Link className='block text-lg hover:text-primary font-medium' to='/'>Cart</Link>
                                <Link className='block text-lg hover:text-primary font-medium' to='/'>Checkout</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-2xl text-neutral font-bold'>Customer Services</h2>
                        <ul>
                            <li>
                                <Link className='block text-lg hover:text-primary font-medium pt-7' to='/'>Privacy Policy</Link>
                                <Link className='block text-lg hover:text-primary font-medium' to='/'>Terms & Condition</Link>
                                <Link className='block text-lg hover:text-primary font-medium' to='/'>FAQs</Link>
                                <Link className='block text-lg hover:text-primary font-medium' to='/'>About Us</Link>
                                <Link className='block text-lg hover:text-primary font-medium' to='/'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <h2 className='text-2xl text-neutral font-bold'>Contact Us</h2>
                        <div className='pt-7 flex justify-center md:justify-start pb-3'>
                            <div className='pr-4'>
                                <FontAwesomeIcon className='text-primary text-2xl' icon={faLocationDot}></FontAwesomeIcon>
                            </div>
                            <p className=''>Bangladesh, Chattogram, Hathazari, Dhalai , 4333, Enayetpur</p>
                        </div>
                        <div className='pt-0 flex justify-center md:justify-start pb-3'>
                            <div className='pr-4'>
                                <FontAwesomeIcon className='text-primary text-2xl' icon={faPhoneAlt}></FontAwesomeIcon>
                            </div>
                            <p className=''> + 880 1872238027</p>
                        </div>
                        <div className='pt-0 flex justify-center md:justify-start pb-3'>
                            <div className='pr-4'>
                                <FontAwesomeIcon className='text-primary text-2xl' icon={faWhatsapp}></FontAwesomeIcon>
                            </div>
                            <p className=''> + 880 1872238027</p>
                        </div>
                        <div className='pt-0 flex justify-center md:justify-start pb-3'>
                            <div className='pr-4'>
                                <FontAwesomeIcon className='text-primary text-2xl' icon={faEnvelope}></FontAwesomeIcon>
                            </div>
                            <p className=''> rajebulalam@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Footer Part */}
            <div className='flex-none sm:flex justify-between py-6 w-full px-4 lg:px-10'>
                <p className='text-primary text-center sm:text-start text-lg font- mb-4 sm:mb-0'>&copy;All rights reserved by - Rajebul Alam Khokan</p>
                <div className='text-center sm:text-start'>
                    <FontAwesomeIcon className='px-3 py-2 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-full' icon={faFacebookF}></FontAwesomeIcon>
                    <FontAwesomeIcon className='px-[9px] py-2 ml-2 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-full' icon={faWhatsapp}></FontAwesomeIcon>
                    <FontAwesomeIcon className='p-2 ml-2 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-full' icon={faTwitter}></FontAwesomeIcon>
                    <FontAwesomeIcon className='p-2 ml-2 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-full' icon={faInstagram}></FontAwesomeIcon>
                </div>
            </div>
        </div >
    );
};

export default Footer;