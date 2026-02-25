import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import profileImg from '../../images/profile.jpg';

const classes = {
  wrapper: 'block mb-3 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black mb-6',
  description: 'text-gray-600 mt-4',
  list: 'mt-8 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black',
};

const Header = ({ metadata = {}, noBlog = false }) => {
  const twitter = false; // get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={metadata.name} />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
          {(
            <li className={classes.item}>
              <a
                className={classes.link}
                href="./resume.pdf"
              target="_blank" rel="noreferrer" >
                Resume
              </a>
            </li>
          )}
          {/* {(
            <li className={classes.item}>
              <a
                className={classes.link}
                href="./transcript.pdf"
              target="_blank" rel="noreferrer" >
                Transcript
              </a>
            </li>
          )} */}
          {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                Twitter
              </a>
            </li>
          )}
          {/* {(
            <li className={classes.item}>
              <a
                className={classes.link}
                href="./coverletter.pdf"
              >
                Cover Letter
              </a>
            </li>
          )} */}
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          {/* <li className={classes.item}>
            <a
              className={classes.link}
              href="https://open.spotify.com/user/93rz4x10dego9i1j96pjbxr5a?si=e93fc9791ca9423b"
              target="_blank"
              rel="noreferrer"
            >
              Spotify
            </a>
          </li> */}
          <li className={classes.item}>
            <a
              className={classes.link}
              href="mailto:annupub3@gmail.com"
            >
              Contact
            </a>
          </li>
          {/* <li className={classes.item}>
            <a
              className={classes.link}
              href="https://google.com/maps/contrib/101112107729949975275/reviews/@47.6176503,-122.355194,13z/data=!4m3!8m2!3m1!1e1?authuser=1&entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              Google Reviews
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
