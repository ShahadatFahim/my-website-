import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './FeaturedProduct.css';

const FeaturedProduct = () => {
    return (
        <div className='w-full px-4 lg:px-10 pt-2 pb-10'>
            <h2 className='text-2xl sm:text-3xl font-semibold sm:font-extrabold uppercase text-primary text-center pb-0 highlight-title'>Featured <span className='text-secondary'>Products</span></h2>
            {/* Link Part */}
            <div className='pt-16 pb-4 featured-link-part'>
                <ul>
                    <li className='flex justify-center'>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} style={{ borderRadius: '5px 0 0 5px' }} to='/'>Featured</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/latest'>Latest</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/bestSeller'>Best Seller</NavLink>
                        <NavLink style={{ borderRadius: '0 5px 5px 0' }} className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/special'>Special</NavLink>
                    </li>
                </ul>
            </div>
            {/* Outlet Part */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default FeaturedProduct;