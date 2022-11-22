import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const BottomHeader = () => {

    const menuItem = <>
        <li><Link className='text-secondary hover:bg-primary hover:text-white  font-semibold text-md uppercase md:pl-0' to='/'>Home</Link></li>
        <li tabIndex="0">
            <Link to='/' className="justify-between bg-primary hover:text-white text-secondary font-semibold text-md uppercase">
                All Categories
                {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> */}
            </Link>
            <ul className="p-2 bg-primary z-50 rounded-md w-[200px] ">
                <li><Link className='text-secondary hover:bg-primary hover:text-white font-semibold text-md uppercase' to='/'>Light</Link></li>
                <li><Link className='text-secondary hover:bg-primary hover:text-white font-semibold text-md uppercase' to='/'>Bags</Link></li>
                <li><Link className='text-secondary hover:bg-primary hover:text-white font-semibold text-md uppercase' to='/'>Shoes</Link></li>
                <li><Link className='text-secondary hover:bg-primary hover:text-white font-semibold text-md uppercase' to='/'>Electric</Link></li>
                <li><Link className='text-secondary hover:bg-primary hover:text-white font-semibold text-md uppercase' to='/'>Jewelry</Link></li>
            </ul>
        </li>
        <li><Link className='text-secondary hover:bg-primary hover:text-white font-semibold text-md uppercase' to='/'>Shop</Link></li>
        <li><Link className='text-secondary hover:bg-primary hover:text-white font-semibold text-md uppercase' to='/'>Checkout</Link></li>
        <li><Link className='text-secondary hover:bg-primary hover:text-white font-semibold text-md uppercase' to='/'>Cart</Link></li>
    </>;

    return (
        <div className='bg-primary w-full px-4 lg:px-10'>
            <div className="navbar bg-primary justify-between">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden border border-secondary hover:border-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div className='hidden lg:flex lg:navbar-end text-secondary text-lg font-semibold'>
                    <FontAwesomeIcon className='pr-4' icon={faPhoneAlt}></FontAwesomeIcon>
                    +01872 238027
                </div>
                {/* Logo */}
                <div className='flex justify-end lg:hidden'>
                    <h2 className='text-4xl text-secondary uppercase font-extrabold'>SF Shop</h2>
                </div>
            </div>
        </div>
    );
};

export default BottomHeader;