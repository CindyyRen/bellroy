import React from 'react';
import { Link } from 'react-router-dom'; // 使用 react-router-dom 处理导航
import '../index.css';
import logo from '../assets/bellroy-white.png';
const Navbar = () => {
  return (
    <nav className="bg-custom-gray p-2 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* 左侧 Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/" className="hover:text-gray-400">
            <img src={logo} alt="logo" width="60px" />
            {/* <img src={logo} width="65px" alt="bellroy"/> */}
          </Link>
        </div>

        {/* 右侧导航按钮 */}
        <div className="space-x-4">
          <Link
            to="/home"
            className="text-white hover:text-gray-400 font-medium"
          >
            Home
          </Link>
          <Link
            to="/robot"
            className="text-white hover:text-gray-400 font-medium"
          >
            Robot
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
