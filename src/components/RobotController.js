import React from 'react';
import Chessboard from './Chessboard';
import Description from './Description';

const RobotController = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Description />
      <Chessboard />
    </div>
  );
};

export default RobotController;
