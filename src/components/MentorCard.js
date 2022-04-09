import React from 'react';
import Card from './Card';

import { Link } from 'gatsby';

const MentorCard = ({ mentor, link }) => {
  const shortDescription = mentor.mentorDescription.split('\n').slice(0, 2).join('\n');

  return (
    <Card className="mb-8 bg-opacity-60 bg-white flex flex-col h-full text-center">
    <div className="flex-1">
      <p className="text-l font-bold">{mentor.title}</p>
      <img
        className="w-20 h-20 mt-5 mb-5 mx-auto rounded-full"
        src={mentor.mentorImage}
        alt={mentor.mentorName}
      />
      <p>{mentor.mentorName}</p>
      <div className="mb-4"><text className="whitespace-pre-line font-display text-sm text-gray-600">{shortDescription}</text></div>
      <div className="absolute inset-x-0 bottom-0">
        {link ? 
        <>
          <Link to={link}>
          <p className="mt-2" style={{ color: '#166EFF' }}>Подробнее</p>
        </Link>
        </> : <p className="mt-2" style={{ color: '#166EFF' }}>Подробнее</p>}
        <div className="mt-3 w-full h-2" style={{ backgroundColor: '#166EFF' }}></div>
      </div>
    </div>
  </Card>
  )
};

export default MentorCard;
