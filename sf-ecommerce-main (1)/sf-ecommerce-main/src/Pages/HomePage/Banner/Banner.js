import React from 'react';
import './Banner.css';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Slider Image
import sliderImg from '../../../images/banner.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='w-full px-4 lg:px-10 py-6'>
            <div className='banner-wrapper'>
                {/* Swiper Slider Part */}
                <div>
                    <Swiper
                        slidesPerView={1}
                        fade='true'
                        speed={1000}
                        grabCursor='true'
                        loop='true'
                        autoplay={{
                            delay: 3000,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, A11y, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='slide'>
                            <div className='inner-slide'>
                                <div className='w-full'>
                                    <span className='px-3 py-2 bg-primary text-secondary rounded-md font-medium sm:font-semibold uppercase'>New Arrivals</span>
                                    <h2 style={{ color: '#333333' }} className='pt-4 sm:pt-8 text-md sm:text-xl md:text-4xl font-medium sm:font-bold'>Quality of product is more important than price</h2>
                                    <Link className='mt-5 sm:mt-8 inline-block rounded-sm text-xl px-4 py-2 border border-primary hover:bg-primary hover:text-secondary' to='/'>Shop Now</Link>
                                </div>
                                <div className='w-full'>
                                    <img src={sliderImg} alt="sliderImage" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <div className='inner-slide'>
                                <div className='w-full'>
                                    <span className='px-3 py-2 bg-primary text-secondary rounded-md font-medium sm:font-semibold uppercase'>New Arrivals</span>
                                    <h2 style={{ color: '#333333' }} className='pt-4 sm:pt-8 text-md sm:text-xl md:text-4xl font-medium sm:font-bold'>Quality of product is more important than price</h2>
                                    <Link className='mt-5 sm:mt-8 inline-block rounded-sm text-xl px-4 py-2 border border-primary hover:bg-primary hover:text-secondary' to='/'>Shop Now</Link>
                                </div>
                                <div className='w-full'>
                                    <img src={sliderImg} alt="sliderImage" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <div className='inner-slide'>
                                <div className='w-full'>
                                    <span className=' px-3 py-2 bg-primary text-secondary rounded-md font-medium sm:font-semibold uppercase'>New Arrivals</span>
                                    <h2 style={{ color: '#333333' }} className='pt-4 sm:pt-8 text-md sm:text-xl md:text-4xl font-medium sm:font-bold'>Quality of product is more important than price</h2>
                                    <Link className='mt-5 sm:mt-8 inline-block rounded-sm text-xl px-4 py-2 border border-primary hover:bg-primary hover:text-secondary' to='/'>Shop Now</Link>
                                </div>
                                <div className='w-full'>
                                    <img src={sliderImg} alt="sliderImage" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* Side Bar Part */}
                <div className='flex-none gap-3 md:flex lg:flex-col banner-sidebar'>
                    <div className='flex items-center bg-accent rounded-md px-4 py-6 mb-4 lg:mb-[14px]'>
                        <div className='w-full'>
                            <p className='text-primary text-lg pb-1'>Electric</p>
                            <h3 className='text-2xl font-semibold'>Get Satisfactory Product </h3>
                        </div>
                        <div className='w-full'>
                            <img className='w-full' src={sliderImg} alt="sidebarImage" />
                        </div>
                    </div>
                    <div className='flex items-center bg-accent rounded-md px-4 py-6 mb-4 lg:mb-0'>
                        <div className='w-full'>
                            <p className='text-primary text-lg pb-1'>Electric</p>
                            <h3 className='text-2xl font-semibold'>Get Satisfactory Product </h3>
                        </div>
                        <div className='w-full'>
                            <img className='w-full' src={sliderImg} alt="sidebarImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;