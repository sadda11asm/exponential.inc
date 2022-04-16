import React from 'react';



import { useVisibility } from '../utils';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout'
import teamData from '../data/team';
import AlumniCard from '../components/AlumniCard';


const Alumni = () => {


  return (
    <Layout>
      <div className="container mx-auto my-48">
        <h2 className="lg:text-5xl font-bold text-center">Выпускники</h2>
        <h2 className="lg:text-2xl font-bold text-center text-primary-changed mb-12 ">batch #1</h2>
        <div className="flex flex-col md:flex-row md:-mx-3 lg:mx-1">
          {teamData.map(mentor => (
            <div key={mentor.mentorName} className="flex-1 px-6 flex flex-col">
              <AlumniCard mentor={mentor} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default Alumni;

