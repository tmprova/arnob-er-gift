import React from 'react';
import CustomLink from '../../customlink/CustomLink';

const Header = () => {
    return (
        <div className=''>
            <div classsName="">
                <CustomLink to= "/n">Home</CustomLink>
                <CustomLink to= "/about">About</CustomLink>
                <CustomLink to= "/clients">Clients</CustomLink>
                <CustomLink to= "/contacts">Contact</CustomLink>
            </div>
        </div>
    );
};

export default Header;