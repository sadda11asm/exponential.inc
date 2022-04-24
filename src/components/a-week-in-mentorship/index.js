import React from 'react';
import Layout from '../layout/Layout';

import Calendar from '../../../assets/calendar.svg';

const WeekInMentorship = () => {
    return (
            <div className="mt-16 container mx-auto">
                <div className="text-center font-mono">
                    <h1 className="text-4xl font-bold">A week in the mentorship</h1>
                    <hr style={{ width: '50%', margin: '0 auto', border: '0.5px solid #166EFF' }}/>
                    <p style={{ color: '#166EFF' }}>We'll build an individual program for every student</p>
                </div>
                <Calendar className="mt-8"/>
            </div>
    );
};

export default WeekInMentorship;