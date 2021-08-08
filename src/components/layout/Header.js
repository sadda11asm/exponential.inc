import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import logo from '../../images/logo.png';

const Header = () => (
  <header className="font-mono sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-20 mr-6">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#what-we-offer">
          What We Offer
        </AnchorLink>
        <AnchorLink className="px-4" href="#program">
          Program
        </AnchorLink>
        <AnchorLink className="px-4" href="#value">
          Value
        </AnchorLink>
        <AnchorLink className="px-4" href="#mentors">
          Mentors
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Подать заявку</Button>
      </div>
    </div>
  </header>
);

export default Header;
