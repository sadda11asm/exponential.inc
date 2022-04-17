import React from 'react';
import { Link } from 'gatsby';

import LargeHowItWorksSteps from '../../../assets/large_how_it_works_steps.svg';
import MobileHowItWorksSteps from '../../../assets/mobile_how_it_works_steps.svg';
import YoutubeIcon from '../../../assets/youtube_icon.svg';

const HowItWorks = () => {
    return (
        <>
            <h2 className="sm:text-4xl lg:text-5xl">How does it <span style={{ color: '#2778FD' }}>work?</span></h2>
            <Link to="" target="_blank"><span className="inline-block" style={{ color: '#2778FD' }}>Watch video</span> <YoutubeIcon className="inline-block"/> </Link>
            <div className="mt-8">
                { window.innerWidth >= 1536 ? <LargeHowItWorksSteps className="mx-auto"/> : <MobileHowItWorksSteps className="mx-auto"/> }
            </div>
        </>
    );
};

export default HowItWorks;