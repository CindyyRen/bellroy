import React from 'react';
import Chessboard from './Chessboard';
import Description from './Description';

const RobotController = () => {
  return (
    <div className="mx-auto flex flex-col min-h-screen">
      <Description />
      <Chessboard />
    </div>
  );
};

export default RobotController;
