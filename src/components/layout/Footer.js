import React from 'react';
import ButtonLight from '../ButtonLight';
import logo from '../../images/transparent_exp_logo.png';
import insta_logo from '../../images/transparent_insta_logo.png';
import './Footer.css'

import { Link } from 'gatsby';

const CustomApplicationButton = ({ children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${className}
        py-4 px-20
        bg-white
        hover:bg-primary-darker
        rounded-lg
        text-mainblue
        font-semibold
    `}
    >
      {children}
    </button>
  );
}

const Footer = () => (
  <footer className="font-mono text-white bg-dark pt-24 pb-24 divide-y">
    <div className="container mx-auto divide-y divide-gray-700 pb-24">
      <div className="flow-root pb-32">
        <div className="px-8">
          <h3 className="font-bold spacing-xl md:text-4xl text-2xl">Do you want an internship at FAANG?</h3>
          <p className="mt-3 md:text-xl text-xs font-medium">Join Exponential and become one of the 30 participants of our exclusive program!</p>
          <div className="float-left">
            <p className="mt-10 font-semibold">
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfEXdTmGSKaBnU_W-K95pV4xw_1Rca0ihzixFdbhDxYFCptqg/viewform?usp=sf_link">
                <CustomApplicationButton size="xl">Apply now</CustomApplicationButton>
              </Link>
            </p>
            <p className="mt-12 md:text-xl text-xs mx-auto">
              Applications accepted until July 22
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="pt-10 px-8 flex flex-row">
        <div className="w-8 h-8 flex-shrink-0"><img src={logo} style={{ marginTop: "5px" }}/></div>
          <div className="w-14 pl-4 md:pl-12  md:text-sm text-xs">
            <div><Link to="">Mentors</Link></div>
            <div><Link to="/alumni">Graduates</Link></div>
            <div><Link to="">Pricing</Link></div>
          </div>
          <div className="w-14 pl-4 md:pl-12  md:text-sm text-xs">
            <div><Link to="/blog">Blog</Link></div>
            <div><Link to="">Press&Media</Link></div>
          </div>
          <div className="flex-1">
            <Link className="float-right w-12 h-8 flex-shrink-0" to="https://www.instagram.com/exp.program/" target="_blank"><img src={insta_logo}/></Link>
          </div>
        </div>
        <div className="mt-16 px-8 md:text-sm text-xs">
          <span className="block md:inline">Made by exp-program. All rights reserved.</span>
          <span className="md:ml-4">Terms</span>
          <span> · </span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
