import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // 你的 Home 组件
import Robot from './components/Robot'; // 你的 Robot 组件
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/robot" element={<Robot />} />
        <Route path="/" element={<Home />} /> {/* 默认路由 */}
      </Routes>
    </Router>
  );
}

export default App;
