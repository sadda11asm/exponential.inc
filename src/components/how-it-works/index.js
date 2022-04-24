import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'gatsby';

import LargeHowItWorksSteps from '../../../assets/large_how_it_works_steps.svg';
import MobileHowItWorksSteps from '../../../assets/mobile_how_it_works_steps.svg';
import YoutubeIcon from '../../../assets/youtube_icon.svg';

function getWindowDimensions() {
  const isBrowser = () => typeof window !== "undefined"
  const { innerWidth: width, innerHeight: height } = isBrowser() ? window :  { innerWidth: 1536, innerHeight: 748 };
    return {
      width,
      height
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useLayoutEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }

const HowItWorks = () => {
    const { width } = useWindowDimensions();

    return (
        <>
            <h2 className="sm:text-4xl lg:text-5xl">How does it <span style={{ color: '#2778FD' }}>work?</span></h2>
            <Link to="" target="_blank"><span className="inline-block" style={{ color: '#2778FD' }}>Watch video</span> <YoutubeIcon className="inline-block"/> </Link>
            <div className="mt-8">
                { width >= 1536 ? <LargeHowItWorksSteps className="mx-auto"/> : <MobileHowItWorksSteps className="mx-auto"/> }
            </div>
        </>
    );
};

export default HowItWorks;
