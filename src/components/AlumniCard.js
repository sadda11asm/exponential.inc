import React from 'react';
import Card from './Card';
import { Link } from 'gatsby';
import insta from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import alumnibadge from '../images/alumnibadge.png'

const AlumniCard = ({ mentor, link }) => {

  return (
    <Card className="mb-8 px-6 py-6 bg-opacity-60 pb-20 bg-white flex flex-col h-full text-center font-body">
      <div className="flex flex-row">
        <img
          className="w-16 h-16 mx-auto rounded-full"
          src={mentor.image}
        />
        <div className="flex flex-col ml-4">
          <p className="font-bold font-body text-left">{mentor.name}</p>
          <img
            className="w-3/12 mt-1"
            src={alumnibadge}
            alt={mentor.name}
          />
        </div>
      </div>
      <div className="flex flex-none flex-col justify-between">
        <div className="mb-4"><p className="mt-4 text-left h-12 text-sm font-semibold font-body">{mentor.title}</p></div>
        <div className="h-80">
          <blockquote className="pl-3 text-left border-l-4 bg-neutral-200 border-primary-changed quote text-sm">
            <p className="mb-2 italic">
              {mentor.quote}
            </p>
          </blockquote>
        </div>
      </div>
      <div className="mt-2 flex flex-row justify-end w-3/12 mb-6 ml-6 absolute inset-x-0 bottom-0">
        <a href={mentor.instaLink}>
          <img
            src={insta}
          />
        </a>
        <a href={mentor.bioLink}>
          <img
            src={linkedin}
          />
        </a>
      </div>
    </Card>
  )
};

export default AlumniCard;
