import React from 'react';




import { useVisibility } from '../utils';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout'


const Alumni = () => {
  const [ topmostSectionIsVisible, topmostSection ] = useVisibility(100);

  return (
    <Layout>
      {"heeey"}
    </Layout>
  );
}
export default Alumni;

