import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Slider Image
import userImage from '../../../images/userImage.png';

const Testimonial = () => {
    return (
        <div >
            <h2 className='text-3xl font-extrabold uppercase text-primary text-center pb-0 mb-14 highlight-title'>What Customer say's <span className='text-secondary'>about us</span> </h2>
            <div className='w-full px-4 lg:px-10 py-8 bg-accent featured-wrapper'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={35}
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
                        1140: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    <SwiperSlide className='featured-slide bg-white pt-6 pb-3 shadow-md rounded-xl'>
                        <div className='inner-featured-slide'>
                            <div className='flex justify-center py-6'>
                                <img style={{ borderRadius: '5px 5px 0 0' }} className='w-[140px]' src={userImage} alt="featuredImage" />
                            </div>
                            <div className=' text-center pt-5 pb-8 px-2'>
                                <p className='text-xl'>"This one is the best. the lighting is great, although you will probably need to adjust the exposure when editing it."</p>
                                <h2 className='text-primary text-2xl font-semibold pt-7'> Jamshed Rahman </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='featured-slide bg-white pt-6 pb-3 shadow-md rounded-xl'>
                        <div className='inner-featured-slide'>
                            <div className='flex justify-center py-6'>
                                <img style={{ borderRadius: '5px 5px 0 0' }} className='w-[140px]' src={userImage} alt="featuredImage" />
                            </div>
                            <div className=' text-center pt-5 pb-8 px-2'>
                                <p className='text-xl'>"This one is the best. the lighting is great, although you will probably need to adjust the exposure when editing it."</p>
                                <h2 className='text-primary text-2xl font-semibold pt-7'> Samiul Alam </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='featured-slide bg-white pt-6 pb-3 shadow-md rounded-xl'>
                        <div className='inner-featured-slide'>
                            <div className='flex justify-center py-6'>
                                <img style={{ borderRadius: '5px 5px 0 0' }} className='w-[140px]' src={userImage} alt="featuredImage" />
                            </div>
                            <div className=' text-center pt-5 pb-8 px-2'>
                                <p className='text-xl'>"This one is the best. the lighting is great, although you will probably need to adjust the exposure when editing it."</p>
                                <h2 className='text-primary text-2xl font-semibold pt-7'> Raihan Uddin </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='featured-slide bg-white pt-6 pb-3 shadow-md rounded-xl'>
                        <div className='inner-featured-slide'>
                            <div className='flex justify-center py-6'>
                                <img style={{ borderRadius: '5px 5px 0 0' }} className='w-[140px]' src={userImage} alt="featuredImage" />
                            </div>
                            <div className=' text-center pt-5 pb-8 px-2'>
                                <p className='text-xl'>"This one is the best. the lighting is great, although you will probably need to adjust the exposure when editing it."</p>
                                <h2 className='text-primary text-2xl font-semibold pt-7'> Raihan Uddin </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper >
            </div>
        </div >
    );
};

export default Testimonial;