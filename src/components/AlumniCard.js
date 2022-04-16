import React from 'react';
import Card from './Card';
import { Link } from 'gatsby';
import insta from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import alumnibadge from '../images/alumnibadge.png'

const AlumniCard = ({ mentor, link }) => {

  return (
    <Card className="mb-8 px-6 py-6 bg-opacity-60 bg-white flex flex-col h-full text-center font-sans">
      <div className="flex flex-row">
        <img
          className="w-16 h-16 mx-auto rounded-full"
          src={mentor.image}
        />
        <div className="flex flex-col ml-4">
          <p className="font-bold text-left">{mentor.name}</p>
          <img
            className="w-3/12 mt-1"
            src={alumnibadge}
            alt={mentor.name}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="mb-4"><p className="mt-4 text-left text-sm font-semibold">{mentor.title}</p></div>
        <blockquote className="p-4 text-left border-l-4 bg-neutral-200 border-primary-changed quote text-sm">
          <p className="mb-2">
            {mentor.quote}
          </p>
        </blockquote>
        <div className="mt-2 flex flex-row justify-end w-3/12">
          <a href="https://www.google.com/">
            <img
              src={insta}
            />
          </a>
          <a href="https://www.qries.com/">
            <img
              src={linkedin}
            />
          </a>
        </div>
      </div>
    </Card>
  )
};

export default AlumniCard;
