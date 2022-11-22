import React from 'react';
import BottomHeader from '../BootomHeader/BottomHeader';
import MiddleHeader from '../MiddleHeader/MiddleHeader';
import TopHeader from '../TopHeader/TopHeader';

const Header = () => {
    return (
        <header>
            <TopHeader></TopHeader>
            <MiddleHeader></MiddleHeader>
            <BottomHeader></BottomHeader>
        </header>
    );
};

export default Header;