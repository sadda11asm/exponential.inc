import React from 'react';

import { Link } from 'gatsby';

const Card = ({ className, children }) => (
  <div
    className={`p-12 rounded-lg border border-solid border-gray-200 ${className} relative overflow-hidden`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)'
    }}
  >
    {children}
  </div>
);


const TechMentorCard = ({ mentor, link }) => {
    const shortDescription = mentor.mentorDescription.split('\n').slice(0, 2).join('\n');
  
    return (
      <Card className="mb-8 bg-opacity-60 bg-white flex flex-col h-full text-center">
      <div className="flex-1">
        <img
          className="w-20 h-20 mt-5 mb-5 mx-auto rounded-full"
          src={mentor.mentorImage}
          alt={mentor.mentorName}
        />
        <p>{mentor.mentorName}</p>
        <div className="mb-4"><text className="whitespace-pre-line font-display text-sm text-gray-600">Software Engineer @ Meta</text></div>
        <div className="absolute inset-x-0 bottom-0">
          {link ? 
          <>
            <Link to={link} target="_blank">
            <p className="mt-2" style={{ color: '#166EFF' }}>Book</p>
          </Link>
          </> : <p className="mt-2" style={{ color: '#166EFF' }}>Resume</p>}
          <div className="mt-3 w-full h-2" style={{ backgroundColor: '#166EFF' }}></div>
        </div>
      </div>
    </Card>
    )
  };


  export default TechMentorCard;