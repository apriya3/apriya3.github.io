import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title={<span className="block mt-6">About Me</span>}>
      <div className="mb-6">
        <p>{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
