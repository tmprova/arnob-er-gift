import React, { useState } from "react";
import CustomLink from "../../customlink/CustomLink";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8
  return (
    <div className="bg-gray-100 m-20 p-5">
      <div className="px-4 py-5 content-between w-50">
        <div className="relative flex items-center justify-between">
          
          <ul className="flex items-center space-x-8">
            <li>
             <CustomLink to='/'><div>Home</div></CustomLink>
            </li>
            <li>
            <CustomLink to='about'><div>About</div></CustomLink>
            </li>
            <li>
            <CustomLink to='clients'><div>Clients</div></CustomLink>
            </li>
            <li>
            <CustomLink to='contacts'><div>Contacts</div></CustomLink>
            </li>
          </ul>
          
          
        </div>
      </div>
    </div>
  );
};

export default Header;
