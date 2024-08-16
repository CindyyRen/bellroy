import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // 你的 Home 组件
import RobotController from './components/RobotController';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/robot" element={<RobotController />} />
        <Route path="/" element={<Home />} /> {/* 默认路由 */}
      </Routes>
    </Router>
  );
}

export default App;
