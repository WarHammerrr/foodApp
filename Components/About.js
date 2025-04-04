import React from 'react'

export default function About() {
  return (
    <div className="flex justify-center items-center my-30 bg-gray-100">
      <div className="w-full max-w-md bg-teal-400 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-100">About Us</h1>
        <p className="text-gray-100 font-sans font-semibold">
          Welcome to our website! We are passionate about building great
          experiences and providing quality services. Our mission is to make
          technology simple and accessible for everyone.
        </p>
      </div>
    </div>
  );
}


