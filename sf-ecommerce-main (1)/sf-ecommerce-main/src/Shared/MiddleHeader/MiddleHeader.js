import { faCartShopping, faPen, faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MiddleHeader.css';

const MiddleHeader = () => {
    return (
        <div className='w-full px-4 lg:px-10 bg-accent py-8'>
            <div className='middle-header-wrapper flex justify-between items-center'>
                {/* Logo Part */}
                <div>
                    <h2 className='hidden lg:block text-4xl text-neutral uppercase font-extrabold'>SF Shop</h2>
                </div>
                {/* Search Option Part */}
                <div className='hidden md:block'>
                    <select style={{ borderRadius: '5px 0 0 5px' }} className='text-secondary font-semibold bg-primary px-2 py-3 border-0 outline-0' name="category" id="category">
                        <option value="All">All</option>
                        <option value="All">Light</option>
                        <option value="All">Bags</option>
                        <option value="All">Shoes</option>
                        <option value="All">Electric</option>
                    </select>
                    <input className='text-black font-semibold px-2 py-3 border-0 outline-0' type="search" name="search" id="search" placeholder='Search here...' />
                    <button style={{ borderRadius: '0 5px 5px 0' }} className='text-secondary font-semibold bg-primary px-3 py-3 border-0 outline-0'>
                        <FontAwesomeIcon className='text-xl' icon={faSearch}></FontAwesomeIcon>
                    </button>
                </div>
                {/* Login & Register Part */}
                <div className='login-register-wrapper flex justify-center items-center'>
                    <p className='text-center login-register-hover pr-4'>
                        <FontAwesomeIcon className='border icon border-primary rounded-full p-[6px] sm:p-2' icon={faUserAlt}></FontAwesomeIcon>
                        <span className='block'>Login</span>
                    </p>
                    <p className='text-center login-register-hover'>
                        <FontAwesomeIcon className='border icon border-primary rounded-full p-[6px] sm:p-2' icon={faPen}></FontAwesomeIcon>
                        <span className='block'>Register</span>
                    </p>
                </div>

                {/* Add Cart Part */}
                <div className='flex items-center justify-center'>
                    {/* Search Icon In Mobile and Tab Version */}
                    <div className='search-option-hover'>
                        <div className='md:hidden pr-3'>
                            <button className='text-primary rounded-full font-semibold px-1 py-[10px] mt-[-7 px] outline-0'>
                                <FontAwesomeIcon className='text-xl' icon={faSearch}></FontAwesomeIcon>
                            </button>
                        </div>
                        {/* Search Option Part */}
                        <div className='hover-search rounded-lg h-[50px]'>
                            <select className='text-primary font-semibold bg-secondary h-full px-1 sm:px-2 py-3 border-0 outline-0' name="category" id="category">
                                <option value="All">All</option>
                                <option value="All">Light</option>
                                <option value="All">Bags</option>
                                <option value="All">Shoes</option>
                                <option value="All">Electric</option>
                            </select>
                            <input className='text-black font-semibold px-1 h-full py-3 border-0 outline-0' type="search" name="search" id="search" placeholder='Search here...' />
                            <button type='search' className='text-primary h-full font-semibold bg-secondary px-2 py-3 border-0 outline-0'>
                                <FontAwesomeIcon className='text-xl' icon={faSearch}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                    <p className='pr-3 hidden lg:block'> 0 item(s) - $0.00 </p>
                    <p><FontAwesomeIcon className='p-3 text-xl text-primary rounded' icon={faCartShopping}></FontAwesomeIcon> </p>
                    <p className='mt-[-50px] ml-[-20px]'><sup className='bg-secondary px-2 py-1 text-md font-semibold rounded-full text-primary'>0</sup></p>
                </div>
            </div>
        </div>
    );
};

export default MiddleHeader;