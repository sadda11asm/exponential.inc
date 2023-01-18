import React from 'react';



import { useVisibility } from '../utils';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout'
import AlumniCard from '../components/AlumniCard';
import blogData from '../data/blog';
import Card from '../components/Card'



const Blog = () => {
  useEffect(() => {
    document.title = 'Blog';
  }, []);

  return (
    <Layout>
      <div className="container mx-auto my-48">
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold font-sans text-center">Blog</h2>
        {
          blogData.map(data => (
            <div className="mt-6">
              <Card className="bg-gray-100 font-display">
                <p className="lg:text-2xl md:text-xl text-l font-bold"> {data.title}</p>
                <p className="lg:text-xl md:text-l text-sm mt-2 "> {data.subtitle}</p>
                <p className="lg:text-l md:text-sm text-xs mt-4  text-gray-500"> {data.date}</p>
                <div className=" mt-2">
                  <Link to={data.link}>
                    <a className="text-bold text-primary-changed"> Читать далее </a>
                  </Link>
                </div>
              </Card>
            </div>
            )
          )
        }
      </div>
    </Layout>
  );
}
export default Blog;

