import React from 'react';
import ButtonLight from '../ButtonLight';
import rocket_logo from '../../images/transparent_rocket_logo.png';
import insta_logo from '../../images/transparent_insta_logo.png';

import { Link } from 'gatsby';

const Footer = () => (
  <footer className="font-mono text-white bg-dark pt-24 pb-24 divide-y">
    <div className="container mx-auto divide-y divide-gray-700 pb-24">
      <div className="flow-root pb-20">
        <h3 className="text-5xl font-bold spacing-xl">Do you want an internship at FAANG?</h3>
        <p className="mt-3 text-xl font-normal">Join Exponential and become one of the 30 participants of our exclusive program!</p>
        <div className="float-left">
          <p className="mt-10">
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfEXdTmGSKaBnU_W-K95pV4xw_1Rca0ihzixFdbhDxYFCptqg/viewform?usp=sf_link">
              <ButtonLight size="xl">Apply now</ButtonLight>
            </Link>
          </p>
          <p className="mt-12 text-xl mx-auto">
            Applications accepted until July 22
          </p>
        </div>
      </div>
      <div>
        <div className="pt-10 flex flex-row">
          <div className="w-14"><img src={rocket_logo} width="45"/></div>
          <div className="w-14 pl-12 pr-20">
            <div><Link to="">Mentors</Link></div>
            <div><Link to="">Graduates</Link></div>
            <div><Link to="">Pricing</Link></div>
          </div>
          <div className="w-14">
            <div><Link to="">Blog</Link></div>
            <div><Link to="">Press&Media</Link></div>
          </div>
          <div className="flex-1">
            <div className="float-right"><img src={insta_logo} width="45"/></div>
          </div>
        </div>
        <div className="mt-16">
          <span>Made by exp-program. All rights reserved.</span>
          <span className="ml-4">Terms</span>
          <span> · </span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
