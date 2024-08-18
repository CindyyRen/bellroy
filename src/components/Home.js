import React from 'react';
import wali from '../assets/64456.png';
import arrowpng from '../assets/arrow.svg';
import logo from '../assets/robot-svgrepo-com.svg';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-grey-normal p-4">
      <h1 className="text-4xl font-bold mb-10">Welcome to Toy Robot Game</h1>
      <Link to="/robot">
        {/* <img src={wali} alt="logo" className="h-[250px]" /> */}
        <img src={logo} alt="logo" className="h-[200px]" />
      </Link>
      <div className="mt-10 flex flex-col justify-center">
        <p className="mb-5">
          Control toy robot on a grid with a setof commands.
        </p>
        <button
          onClick={() => {
            navigate('/robot');
          }}
          className="flex items-center justify-center text-yellow-dark hover:text-yellow-light bg-transparent border-none font-bold"
        >
          <span className="transition-transform duration-300 hover:scale-110">
            Let's play
          </span>
          <img className="ml-3" src={arrowpng} alt="play icon" />
        </button>
      </div>
      {/* <img src={logo} alt="logo" width="100px" /> */}
    </div>
  );
};

export default Home;
