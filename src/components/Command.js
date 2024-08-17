import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCommandStr, handleCommand } from '../actions/gameActions';

const Game = () => {
  const dispatch = useDispatch();
  const { robot, error, commandStr } = useSelector((state) => state.game);

  const handleChange = (e) => {
    dispatch(setCommandStr(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleCommand());
  };

  return (
    <>
      <div className="section section-center flexcontainer ">
        <div className="section-center command_box">
          <form className="p-4 space-y-4" onSubmit={handleSubmit}>
            <label
              htmlFor="commandInput"
              className="block text-lg font-medium text-gray-700"
            >
              Please input your commands:
            </label>
            <input
              className="w-full border-b-2 border-yellow-dark bg-transparent focus:border-yellow-light focus:outline-none py-2 px-3 text-gray-700 placeholder-gray-400"
              id="commandInput"
              placeholder={
                !robot
                  ? 'Begin with place(x,y,facing) command'
                  : 'Enter your next command'
              }
              value={commandStr}
              onChange={handleChange}
            />
            <div>
              <button
                className="w-full sm:max-w-fit bg-yellow-dark text-white py-2 px-4 rounded hover:bg-yellow-light focus:outline-none focus:ring-2"
                type="submit"
              >
                Submit Commands
              </button>
            </div>
          </form>
          {error.value && (
            <p className="text-yellow-light">
              <strong>Error Message : {error.info} </strong>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Game;
