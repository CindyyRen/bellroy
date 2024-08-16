import React from 'react';
import Chessboard from './Chessboard';
import Description from './Description';
import Tips from './Tips';
import Command from './Command';

const RobotController = () => {
  return (
    <div className="mx-auto flex flex-col min-h-screen">
      <Description />
      <div className="container mx-auto p-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Tips />
          <Command />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Chessboard />
        </div>
      </div>
    </div>
  );
};

export default RobotController;
