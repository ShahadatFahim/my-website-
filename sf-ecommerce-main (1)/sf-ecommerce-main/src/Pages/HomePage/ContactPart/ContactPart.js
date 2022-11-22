import React from 'react';

const ContactPart = () => {
    return (
        <div className='w-full px-4 lg:px-10 py-10'>
            <h2 className='text-3xl font-extrabold uppercase text-primary text-center pb-0 mb-8 highlight-title'>Our <span className='text-secondary'>Location</span></h2>
            <div className='py-10'>
                <div className='w-full'>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=bangladesh,%20Chattogram,%20Hathazari,%20Enayetpur&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPart;