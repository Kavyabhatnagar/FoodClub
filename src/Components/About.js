import React from 'react';
import Userclass from './UserClass';

function About() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex justify-center">
          <img
            alt="golden-lines.png"
            className="object-cover w-full rounded-md "
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/golden%20lines.png"
          />
        </div>
        <div className="flex flex-col justify-center text-left space-y-4">
          <p className="text-2xl font-bold text-pink-700">Lorem ipsum dolor</p>
          <p className="text-amber-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-amber-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-amber-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
