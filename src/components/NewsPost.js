import React from 'react';
import Card from './Card';

import { Link } from 'gatsby';

const NewsPost = ({ media, link }) => {
  const shortDescription = media.postDescription.split('\n').slice(0, 2).join('\n');

  return (
    <Card className="bg-opacity-60 bg-grey flex flex-col h-full">
    <div className="flex-1">
      <img
        className="w-20 h-20 mt-5 mb-5"
        src={media.postImage}
        alt={media.postName}
      />
      <p className='font-bold'>{media.postName}</p>
      <div className="mb-4"><text className="whitespace-pre-line font-display text-sm text-gray-600">{shortDescription}</text></div>
      {link ? 
      <>
        <Link to={link} target="_blank">
        <p className="mt-2" style={{ color: '#166EFF' }}>Read -{'>'}</p>
      </Link>
      </> : <p className="mt-2" style={{ color: '#166EFF' }}>Read -{'>'}</p>}
    </div>
  </Card>
  )
};

export default NewsPost;
