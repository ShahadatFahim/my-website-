import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Slider Image
import mobileHolder from '../../../../images/mobileholder.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Latest = () => {
    return (
        <div className='w-full px-4 lg:px-10 pt-0 pb-8 featured-wrapper' >
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                fade='true'
                speed={1000}
                grabCursor='true'
                loop='true'
                autoplay={{
                    delay: 3000,
                }
                }
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, A11y, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    1140: {
                        slidesPerView: 4,
                    }
                }}
            >
                <SwiperSlide className='featured-slide bg-accent shadow-md rounded-md'>
                    <div className='inner-featured-slide'>
                        <img style={{ borderRadius: '5px 5px 0 0' }} className='w-full' src={mobileHolder} alt="featuredImage" />
                        <div className='flex justify-between pt-5 pb-6 px-2'>
                            <h2 className='text-primary text-xl font-semibold'>Tree Lamp</h2>
                            <p className='text-xl'>$29.99</p>
                        </div>
                        <div className='flex justify-between pb-5 pt-5 px-2'>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Add to Cart
                                <FontAwesomeIcon className='text-white px-1' icon={faShoppingCart}></FontAwesomeIcon>
                            </button>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='featured-slide bg-accent shadow-md rounded-md'>
                    <div className='inner-featured-slide'>
                        <img style={{ borderRadius: '5px 5px 0 0' }} className='w-full' src={mobileHolder} alt="featuredImage" />
                        <div className='flex justify-between pt-5 pb-6 px-2'>
                            <h2 className='text-primary text-xl font-semibold'>Tree Lamp</h2>
                            <p className='text-xl'>$29.99</p>
                        </div>
                        <div className='flex justify-between pb-5 pt-5 px-2'>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Add to Cart
                                <FontAwesomeIcon className='text-white px-1' icon={faShoppingCart}></FontAwesomeIcon>
                            </button>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='featured-slide bg-accent shadow-md rounded-md'>
                    <div className='inner-featured-slide'>
                        <img style={{ borderRadius: '5px 5px 0 0' }} className='w-full' src={mobileHolder} alt="featuredImage" />
                        <div className='flex justify-between pt-5 pb-6 px-2'>
                            <h2 className='text-primary text-xl font-semibold'>Tree Lamp</h2>
                            <p className='text-xl'>$29.99</p>
                        </div>
                        <div className='flex justify-between pb-5 pt-5 px-2'>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Add to Cart
                                <FontAwesomeIcon className='text-white px-1' icon={faShoppingCart}></FontAwesomeIcon>
                            </button>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='featured-slide bg-accent shadow-md rounded-md'>
                    <div className='inner-featured-slide'>
                        <img style={{ borderRadius: '5px 5px 0 0' }} className='w-full' src={mobileHolder} alt="featuredImage" />
                        <div className='flex justify-between pt-5 pb-6 px-2'>
                            <h2 className='text-primary text-xl font-semibold'>Tree Lamp</h2>
                            <p className='text-xl'>$29.99</p>
                        </div>
                        <div className='flex justify-between pb-5 pt-5 px-2'>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Add to Cart
                                <FontAwesomeIcon className='text-white px-1' icon={faShoppingCart}></FontAwesomeIcon>
                            </button>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='featured-slide bg-accent shadow-md rounded-md'>
                    <div className='inner-featured-slide'>
                        <img style={{ borderRadius: '5px 5px 0 0' }} className='w-full' src={mobileHolder} alt="featuredImage" />
                        <div className='flex justify-between pt-5 pb-6 px-2'>
                            <h2 className='text-primary text-xl font-semibold'>Tree Lamp</h2>
                            <p className='text-xl'>$29.99</p>
                        </div>
                        <div className='flex justify-between pb-5 pt-5 px-2'>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Add to Cart
                                <FontAwesomeIcon className='text-white px-1' icon={faShoppingCart}></FontAwesomeIcon>
                            </button>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='featured-slide bg-accent shadow-md rounded-md'>
                    <div className='inner-featured-slide'>
                        <img style={{ borderRadius: '5px 5px 0 0' }} className='w-full' src={mobileHolder} alt="featuredImage" />
                        <div className='flex justify-between pt-5 pb-6 px-2'>
                            <h2 className='text-primary text-xl font-semibold'>Tree Lamp</h2>
                            <p className='text-xl'>$29.99</p>
                        </div>
                        <div className='flex justify-between pb-5 pt-5 px-2'>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Add to Cart
                                <FontAwesomeIcon className='text-white px-1' icon={faShoppingCart}></FontAwesomeIcon>
                            </button>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='featured-slide bg-accent shadow-md rounded-md'>
                    <div className='inner-featured-slide'>
                        <img style={{ borderRadius: '5px 5px 0 0' }} className='w-full' src={mobileHolder} alt="featuredImage" />
                        <div className='flex justify-between pt-5 pb-6 px-2'>
                            <h2 className='text-primary text-xl font-semibold'>Tree Lamp</h2>
                            <p className='text-xl'>$29.99</p>
                        </div>
                        <div className='flex justify-between pb-5 pt-5 px-2'>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Add to Cart
                                <FontAwesomeIcon className='text-white px-1' icon={faShoppingCart}></FontAwesomeIcon>
                            </button>
                            <button className='text-lg px-3 py-2 rounded-md font-semibold bg-primary text-secondary hover:bg-secondary hover:text-primary'>Details</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </div >
    );
};

export default Latest;