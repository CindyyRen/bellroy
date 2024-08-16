import React from 'react';
import { facing } from '../utils/constants';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Tips = () => {
  return (
    <div className="mt-4 text-sm p-2">
      <h4 className="text-xl mb-2">Tips: </h4>
      <ul>
        <li className="flex items-center mt-2">
          <MdKeyboardDoubleArrowRight /> Commands is{' '}
          <strong>CASE INSENSITIVE</strong>;{' '}
        </li>
        <li className="flex items-cente mt-2">
          <MdKeyboardDoubleArrowRight /> Invalid commands will be discarded;{' '}
        </li>
        <li className="flex items-center mt-2">
          <MdKeyboardDoubleArrowRight /> Facing value :
          <strong>{facing.map((face, index) => `"${face}",`)}</strong>
        </li>
      </ul>
    </div>
  );
};

export default Tips;
