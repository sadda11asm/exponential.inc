import React from 'react';



import { useVisibility } from '../utils';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout'
import alumniData from '../data/alumni';
import AlumniCard from '../components/AlumniCard';


const Alumni = () => {

  const finalData = [];
  let tempData = [];
  for (let i = 0; i <= alumniData.length; i++) {
    if (i == alumniData.length) {
      finalData.push(tempData);
      break;
    }
    console.log(i);
    if (i % 3 == 0) {
      if (tempData.length) finalData.push(tempData);
      tempData = [alumniData[i]];
    } else {
      tempData.push(alumniData[i]);
    }
  }

  console.log(finalData)

  return (
    <Layout>
      <div className="container mx-auto my-48">
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold font-sans text-center">Our Alumni</h2>
        <h2 className="lg:text-2xl md:text-xl text-sm font-bold text-center text-primary-changed mb-12 ">batch #1</h2>
        {
          finalData.map(data => (
            <div className="flex flex-col md:flex-row md:-mx-3 lg:mx-1">
              {data.map(mentor => (
                <div key={mentor.mentorName} className="md:w-4/12 px-6 flex flex-col">
                  <AlumniCard mentor={mentor} link={mentor.bioLink} />
                </div>
              ))}
            </div>
            )
          )
        }
      </div>
    </Layout>
  );
}
export default Alumni;

