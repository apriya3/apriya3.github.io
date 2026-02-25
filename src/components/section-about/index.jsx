import React from 'react';

const SectionAbout = ({ about }) => {
  return (
    <div className="block pt-4">
      <div className="pb-6">
        <h2 className="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase">
          About Me
        </h2>
      </div>
      <div className="mb-6">
        <p className="text-lg text-gray-600 font-light">{about}</p>
      </div>
    </div>
  );
};

export default SectionAbout;
