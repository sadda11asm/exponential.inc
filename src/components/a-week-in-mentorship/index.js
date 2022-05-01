import React from 'react';
import Layout from '../layout/Layout';

import Calendar from '../../../assets/calendar.svg';

const WeekInMentorship = () => {
    return (
            <div className="mt-16 container md:mx-auto">
                <div className="text-center font-mono">
                    <h1 className="md:text-4xl text-2xl font-bold">A week in the mentorship</h1>
                    <hr style={{ width: '50%', margin: '0 auto', border: '0.5px solid #166EFF' }}/>
                    <p className="text-sm md:text-xl" style={{ color: '#166EFF' }}>We'll build an individual program for every student</p>
                </div>
                <Calendar className="mt-8 mx-auto md:w-full w-11/12"/>
            </div>
    );
};

export default WeekInMentorship;
