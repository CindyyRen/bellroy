import React from 'react';
import Chessboard from './Chessboard';
import Description from './Description';
import Tips from './Tips';

const RobotController = () => {
  return (
    <div className="mx-auto flex flex-col min-h-screen">
      <Description />
      <div className="container mx-auto flex justify-between items-start p-4">
        <div className="flex-none">
          <Tips />
        </div>
        <div className="flex-grow flex justify-center mx-20">
          <Chessboard />
        </div>
      </div>
    </div>
  );
};

export default RobotController;
