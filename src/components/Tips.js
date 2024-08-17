import React from 'react';
import { facing } from '../utils/constants';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Tips = () => {
  return (
    <div className=" text-xs p-2">
      <h4 className="text-lg mb-2">Tips: </h4>
      <ul>
        <li className="flex items-center mt-1">
          <MdKeyboardDoubleArrowRight /> Commands is &nbsp;
          <strong> CASE INSENSITIVE</strong>;
        </li>
        <li className="flex items-cente mt-1">
          <MdKeyboardDoubleArrowRight /> Invalid commands will be discarded;
        </li>
        <li className="flex items-center mt-1">
          <MdKeyboardDoubleArrowRight /> Facing value :
          <strong>{facing.map((face, index) => `"${face}",`)}</strong>
        </li>
      </ul>
    </div>
  );
};

export default Tips;
