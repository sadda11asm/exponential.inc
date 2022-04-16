import React from 'react';
import Layout from '../components/layout/Layout';

import CalendarBase from '../../assets/calendar_base.svg';
import CalendarEvents from '../../assets/calendar_events.svg';

const Program = () => {
    return (
        <Layout>
            <div className="mt-16 mb-16">
                <div className="text-center font-mono">
                    <h1 className="text-4xl font-bold">A week in the mentorship</h1>
                    <hr style={{ width: '50%', margin: '0 auto', border: '0.5px solid #166EFF' }}/>
                    <p style={{ color: '#166EFF' }}>We'll build an individual program for every student</p>
                </div>
                <div className="relative container mx-auto" style={{ backgroundColor: 'white', paddingLeft: '4rem' }}>
                    <CalendarBase/>
                    <CalendarEvents className="absolute" style={{ left: '8rem', top: '9.5rem' }}/>
                </div>
            </div>
        </Layout>
    );
};

export default Program;