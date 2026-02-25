import React from 'react';

const SectionContact = ({ email }) => {
  return (
    <div className="block pt-4">
      <div className="pb-6">
        <h2 className="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase">
          Contact Me
        </h2>
      </div>
      <div className="mb-6">
        <a
          href={`mailto:${email}`}
          className="text-lg text-gray-600 font-light hover:text-black hover:underline"
        >
          {email}
        </a>
      </div>
    </div>
  );
};

export default SectionContact;
