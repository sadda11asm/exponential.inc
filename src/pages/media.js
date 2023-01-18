import React, { useEffect } from 'react';



import { useVisibility } from '../utils';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import mediaData from '../data/media-posts';
import MediaPosts from '../components/MediaPosts';


const Media = () => {
  useEffect(() => {
    document.title = 'Media about us';
  }, []);

  return (
    <Layout>
      <div className="container mx-auto my-48">
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold font-sans text-center">Media About Us</h2>
        <MediaPosts mediaPostsInfo={mediaData}/>
      </div>
    </Layout>
  );
}
export default Media;

