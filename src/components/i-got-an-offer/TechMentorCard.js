import React from 'react';

import { Link } from 'gatsby';

const Card = ({ className, children }) => (
  <div
    className={`p-6 rounded-lg border border-solid border-gray-200 ${className} relative overflow-hidden`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)'
    }}
  >
    {children}
  </div>
);


const TechMentorCard = ({ mentor, link }) => {
    let conductsInterviews;
    let previouslyEmployedAt;

    try {
      conductsInterviews = mentor.conductsInterviews.sort().map(txt => txt.toLowerCase()).join(', ');
    }
    catch(err) {}

    try {
      previouslyEmployedAt = mentor.previousCompanies.sort().join(', ');
    }
    catch(err) {}

    return (
      <Card className="mb-8 bg-opacity-60 bg-white flex flex-col h-full text-center">
      <div className="flex-1">
        <img
          className="w-20 h-20 mt-5 mb-5 mx-auto rounded-full"
          src={mentor.mentorImage}
          alt={mentor.mentorName}
        />
        <p>{mentor.mentorName}</p>
        <div className=""><text className="whitespace-pre-line font-display text-sm text-gray-600">{`${mentor.role} @ ${mentor.company}`}</text></div>
        <div className="mb-4"><text className="whitespace-pre-line font-display text-sm text-gray-600">{`ex-${previouslyEmployedAt}`}</text></div>
        { conductsInterviews && <div className="mb-2"><text className="whitespace-pre-line font-display text-sm"><span className="font-semibold">Conducts: </span> {conductsInterviews} </text></div> }
        <div className="absolute inset-x-0 bottom-0 hover:bg-blue-100">
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