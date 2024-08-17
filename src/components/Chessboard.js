import React from 'react';
import { BsRobot } from 'react-icons/bs';
import { useSelector } from 'react-redux';

// 定义旋转类映射
const rotationClasses = {
  EAST: 'rotate-90',
  SOUTH: 'rotate-180',
  WEST: '-rotate-90',
  NORTH: 'rotate-0',
};

export default function Chessboard({ num }) {
  const { robot } = useSelector((state) => state.game);
  console.log(robot);
  const rows = Array(num).fill(null);
  const cols = Array(num).fill(null);

  // Default values if robot is not defined
  const robotX = robot?.x ?? 0;
  const robotY = robot?.y ?? 0;
  const robotFacing = robot?.facing ?? 'NORTH';

  return (
    <div className="w-[320px] h-[320px]  border border-gray-400 mt-7">
      {rows.map((_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {cols.map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-16 h-16 ${
                (rowIndex + colIndex) % 2 === 0
                  ? 'bg-chessboard-light'
                  : 'bg-chessboard-dark'
              } flex items-center justify-center`}
            >
              {rowIndex === robotX && colIndex === robotY && (
                <BsRobot
                  className={`w-8 h-8 text-custom-gray ${rotationClasses[robotFacing]}`}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
