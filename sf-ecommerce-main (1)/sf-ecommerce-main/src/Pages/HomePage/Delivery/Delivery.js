import { faCube, faReply, faShield, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Delivery = () => {
    return (
        <div style={{ backgroundColor: '#3A4754' }} className='w-full px-4 lg:px-10 py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                {/* Free Shipping */}
                <div className='flex items-center mb-7 lg:mb-0'>
                    <div className='pr-5'>
                        <FontAwesomeIcon className='text-red-500 px-4 py-5 border-2 border-blue-500 rounded-full text-3xl font-bold' icon={faTruckFast}></FontAwesomeIcon>
                    </div>
                    <div>
                        <h4 className='text-white text-xl font-semibold'>Free Shipping</h4>
                        <p className='text-gray-300'>Free delivery over $100</p>
                    </div>
                </div>
                {/* Free Returns */}
                <div className='flex items-center mb-7 lg:mb-0'>
                    <div className='pr-5'>
                        <FontAwesomeIcon className='text-red-500 p-5 border-2 border-blue-500 rounded-full text-3xl font-bold' icon={faReply}></FontAwesomeIcon>
                    </div>
                    <div>
                        <h4 className='text-white text-xl font-semibold'>Free Returns</h4>
                        <p className='text-gray-300'>Hassle free returns</p>
                    </div>
                </div>
                {/* Secure Shopping */}
                <div className='flex items-center mb-7 lg:mb-0'>
                    <div className='pr-5'>
                        <FontAwesomeIcon className='text-red-500 p-5 border-2 border-blue-500 rounded-full text-3xl font-bold' icon={faShield}></FontAwesomeIcon>
                    </div>
                    <div>
                        <h4 className='text-white text-xl font-semibold'>Secure Shopping</h4>
                        <p className='text-gray-300'>Best security features</p>
                    </div>
                </div>
                {/* Unlimited Blogs */}
                <div className='flex items-center mb-7 lg:mb-0'>
                    <div className='pr-5'>
                        <FontAwesomeIcon className='text-red-500 p-5 border-2 border-blue-500 rounded-full text-3xl font-bold' icon={faCube}></FontAwesomeIcon>
                    </div>
                    <div>
                        <h4 className='text-white text-xl font-semibold'>24/7 Support</h4>
                        <p className='text-gray-300'>Dedicated support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;