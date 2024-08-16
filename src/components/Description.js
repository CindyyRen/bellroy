import React from 'react';
import { commandLists } from '../utils/constants';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Description = () => {
  return (
    <div className="w-screen bg-grey-light p-5">
      {/* List the control commands */}
      <div className="container mx-auto text-sm ">
        <h4 className="text-xl bold mb-4">
          Control the robot using below commands:
        </h4>
        <ul>
          {commandLists.map((command) => {
            return (
              <li key={command.id}>
                <p className="flex mt-2">
                  <span>
                    {' '}
                    <MdKeyboardDoubleArrowRight />{' '}
                  </span>
                  <strong>
                    {command.name}({command.params ? `${command.params}` : ``})
                  </strong>
                  <span> -- {command.desp}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Description;
