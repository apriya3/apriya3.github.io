import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionBlog = ({ posts }) => {
  return (
    <Section title="Portfolio">
      {posts.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal
        />
      ))}
      <SummaryItem
        name="Google Maps Reviews"
        description="My reviews on Google Maps"
        link="https://google.com/maps/contrib/101112107729949975275/reviews/@47.6176503,-122.355194,13z/data=!4m3!8m2!3m1!1e1?authuser=1&entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D"
      />
      {posts.length >= 5 && (
        <Link className="text-gray-500 text-sm hover:text-black" to="/blog">
          View all posts &rarr;
        </Link>
      )}
    </Section>
  );
};

export default SectionBlog;
