import React, { useState } from 'react';
import { BsRobot } from 'react-icons/bs';

// 定义旋转类映射
const rotationClasses = {
  EAST: 'rotate-90',
  SOUTH: 'rotate-180',
  WEST: '-rotate-90',
  NORTH: 'rotate-0',
};

export default function Chessboard({ robot }) {
  if (!robot) robot = { x: 2, y: 2, facing: 'WEST' };
  const rows = Array(5).fill(null);
  const cols = Array(5).fill(null);
  const [robotPos, setRobotPos] = useState(robot);
  return (
    <div className="w-[320px] h-[320px]  border border-gray-400 mt-7">
      {/* 棋盘容器 */}
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
              {rowIndex === robotPos.y && colIndex === robotPos.x && (
                <BsRobot
                  className={`w-8 h-8 text-custom-gray ${
                    rotationClasses[robotPos.facing]
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
