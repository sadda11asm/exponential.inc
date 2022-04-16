import React from 'react';
import { Link } from 'gatsby';

import HowItWorksSteps from '../../../assets/how_it_works_steps.svg';
import YoutubeIcon from '../../../assets/youtube_icon.svg';

const HowItWorks = () => {
    return (
        <>
            <h2 className="lg:text-5xl">How does it <span style={{ color: '#2778FD' }}>work?</span></h2>
            <Link to="" target="_blank"><span className="inline-block" style={{ color: '#2778FD' }}>Watch video</span> <YoutubeIcon className="inline-block"/> </Link>
            <HowItWorksSteps className="mx-auto mt-8"/>
        </>
    );
};

export default HowItWorks;