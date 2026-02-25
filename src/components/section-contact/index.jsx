import React from 'react';

const SectionContact = ({ email }) => {
  return (
    <div className="block pt-4">
      <a href={`mailto:${email}`} className="block pb-6 hover:underline">
        <h2 className="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase">
          Contact
        </h2>
      </a>
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
