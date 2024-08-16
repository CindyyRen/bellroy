import React, { useState } from 'react';

const Command = () => {
  const [robot, setRobot] = useState(null);
  const [error, setError] = useState({});
  return (
    <div className="">
      <form className="p-4 space-y-4">
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
          // value={commandStr}
          // onChange={handleChange}
        />
        <div>
          <button
            className="w-full max-w-fit bg-yellow-dark text-white py-2 px-4 rounded hover:bg-yellow-light focus:outline-none focus:ring-2"
            type="submit"
          >
            Submit Commands
          </button>
        </div>
      </form>

      {error.value && (
        <p className="error">
          <strong>Error Message : {error.info} </strong>
        </p>
      )}
    </div>
  );
};

export default Command;
