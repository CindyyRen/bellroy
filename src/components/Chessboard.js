import React, { useState } from 'react';
import { BsRobot } from 'react-icons/bs';
export default function Chessboard() {
  const rows = Array(5).fill(null);
  const cols = Array(5).fill(null);
  const [robot, setRobot] = useState({ x: 2, y: 2, facing: 'NORTH' });
  return (
    <div className="w-[320px] h-[320px]  border border-gray-400">
      {' '}
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
              {/* <BsRobot className="w-6 h-6" /> */}
              {rowIndex === robot.y && colIndex === robot.x && (
                <BsRobot
                  className={`w-8 h-8 ${
                    robot.facing === 'NORTH'
                      ? 'text-custom-gray'
                      : 'text-red-500'
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
