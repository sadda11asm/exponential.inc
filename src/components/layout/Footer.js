import React from 'react';
import ButtonLight from '../ButtonLight';

import { Link } from 'gatsby';

const Footer = () => (
  <footer className="font-mono text-white bg-dark">
    <div className="flow-root container mx-auto mt-5">
      <h3 className="text-5xl font-bold spacing-xl">Do you want an internship at FAANG?</h3>
      <p className="mt-3 text-xl font-normal">Join Exponential and become one of the 30 participants of our exclusive program!</p>
      <div className="float-left">
        <p className="mt-8">
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfEXdTmGSKaBnU_W-K95pV4xw_1Rca0ihzixFdbhDxYFCptqg/viewform?usp=sf_link">
            <ButtonLight size="xl">Apply now</ButtonLight>
          </Link>
        </p>
        <p className="mt-8 text-xl mx-auto">
          Applications accepted until July 22
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
