import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeProduct = () => {

    // Product Loaded
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='w-full px-4 lg:px-10 pt-10 pb-0'>
            <h2 className='text-3xl font-extrabold text-center text-primary uppercase pb-8'>Our All <span className='text-secondary'>Products</span> </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    products.slice(0, 6).map(product =>
                        <div key={product.id} className='bg-accent rounded-md'>
                            <img style={{ borderRadius: '5px 5px 0 0' }} className='w-full h-[350px]' src={product.img} alt="productImage" />
                            <div className='px-4 pt-10 pb-7'>
                                <div className='flex justify-between pb-8'>
                                    <h3 className='text-primary text-xl font-semibold'> {product.name} </h3>
                                    <p style={{ color: '#3A4754' }} className='text-lg font-bold'> ${product.price} </p>
                                </div>
                                <p>
                                    {
                                        product.description.slice(0, 109)
                                    }
                                    ....
                                </p>
                                <div className='flex justify-between pt-5'>
                                    <button className='text-secondary hover:text-primary bg-primary hover:bg-secondary px-4 py-3 font-bold rounded-md'>Add to Cart
                                        <FontAwesomeIcon className='text-secondary px-1' icon={faShoppingCart}></FontAwesomeIcon>
                                    </button>
                                    <button className='text-secondary hover:text-primary bg-primary hover:bg-secondary px-4 py-3 font-bold rounded-md'>Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-center pt-10 pb-8'>
                <Link className='text-primary text-xl font-semibold underline hover:text-blue-500' to='/'>Get All Product</Link>
            </div>
        </div>
    );
};

export default HomeProduct;