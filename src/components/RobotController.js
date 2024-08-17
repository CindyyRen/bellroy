import React from 'react';
import Chessboard from './Chessboard';
import Description from './Description';
import Tips from './Tips';
import Command from './Command';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTable } from '../actions/gameActions';

const RobotController = () => {
  const dispatch = useDispatch();
  const { output, showTable } = useSelector((state) => state.game);
  return (
    <div className="mx-auto flex flex-col min-h-screen">
      <Description />
      <div className="container mx-auto p-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Tips />
          <Command />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center">
            {/* <button
              className="w-full sm:max-w-fit bg-yellow-dark text-white py-2 px-4 rounded hover:bg-yellow-light focus:outline-none focus:ring-2"
              onClick={() => dispatch(toggleTable())}
            >
              {showTable ? 'Hide ChessBoard' : 'Show ChessBoard'}
            </button> */}
            {showTable && <Chessboard num={5} />}
            <h2 className="text-center mt-2 text-xl font-bold text-yellow-light">
              {showTable && output}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotController;
