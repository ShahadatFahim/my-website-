import React from 'react';
import Banner from '../Banner/Banner';
import ContactPart from '../ContactPart/ContactPart';
import Delivery from '../Delivery/Delivery';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import HomeProduct from '../HomeProduct/HomeProduct';
import Testimonial from '../Testimonial/Testimonial';
import WhatsApp from '../Whatsapp/WhatsApp';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Delivery></Delivery>
            <HomeProduct></HomeProduct>
            <FeaturedProduct></FeaturedProduct>
            <Testimonial></Testimonial>
            <ContactPart></ContactPart>
            <WhatsApp></WhatsApp>
        </div>
    );
};

export default Home;