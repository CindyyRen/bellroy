// src/redux/reducers.js
import {
  SET_COMMAND_STR,
  SET_ROBOT,
  SET_ERROR,
  SET_OUTPUT,
  TOGGLE_TABLE,
  HANDLE_COMMAND,
} from '../actions/gameActions.js';
import { tableSize, facing, errorMessages } from '../utils/constants';
import { checkCommand, checkParams } from '../utils/helpers';

const initialState = {
  robot: { x: 2, y: 2, facing: 'WEST' },
  error: { value: false, info: '' },
  output: '',
  commandStr: '',
  showTable: true,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMAND_STR:
      return { ...state, commandStr: action.payload };

    case SET_ROBOT:
      return { ...state, robot: action.payload };

    case SET_ERROR:
      return { ...state, error: action.payload };

    case SET_OUTPUT:
      return { ...state, output: action.payload };

    case TOGGLE_TABLE:
      return { ...state, showTable: !state.showTable };

    case HANDLE_COMMAND: {
      const { command, param, checkResult } = checkCommand(state.commandStr);
      if (checkResult.value) {
        return { ...state, commandStr: '', error: checkResult };
      }

      if (!state.robot && command !== 'PLACE') {
        return {
          ...state,
          commandStr: '',
          error: { value: true, info: errorMessages.wrongBegin },
        };
      }

      if (!state.robot && command === 'PLACE') {
        const check = checkParams(param);
        if (!check.checkResult.value) {
          return {
            ...state,
            robot: { ...check.info },
            output: 'Success',
            error: { value: false, info: '' },
          };
        } else {
          return {
            ...state,
            commandStr: '',
            error: { value: true, info: errorMessages.wrongBegin },
          };
        }
      }

      let newState = { ...state, error: { value: false, info: '' } };

      switch (command) {
        case 'PLACE': {
          const check = checkParams(param);
          if (!check.checkResult.value) {
            newState = { ...newState, robot: check.info, output: 'Success' };
          } else {
            newState = {
              ...newState,
              error: check.checkResult,
              output: 'Failed',
            };
          }
          break;
        }
        case 'REPORT': {
          newState = {
            ...newState,
            output: `${state.robot.x},${state.robot.y},${state.robot.facing}`,
          };
          break;
        }
        case 'LEFT': {
          let facingIndex = facing.indexOf(state.robot.facing) - 1;
          if (facingIndex === -1) facingIndex = facing.length - 1;
          newState = {
            ...newState,
            robot: { ...state.robot, facing: facing[facingIndex] },
            output: 'Success',
          };
          break;
        }
        case 'RIGHT': {
          let facingIndex = facing.indexOf(state.robot.facing) + 1;
          if (facingIndex === facing.length) facingIndex = 0;
          newState = {
            ...newState,
            robot: { ...state.robot, facing: facing[facingIndex] },
            output: 'Success',
          };
          break;
        }
        case 'MOVE': {
          let xLocation = state.robot.x;
          let yLocation = state.robot.y;
          let output = 'success';
          if (state.robot.facing === 'NORTH') {
            xLocation--;
            if (xLocation < 0) {
              xLocation = 0;
              output = 'failed';
            }
          }
          if (state.robot.facing === 'SOUTH') {
            xLocation++;
            if (xLocation >= tableSize) {
              xLocation = tableSize - 1;
              output = 'failed';
            }
          }
          if (state.robot.facing === 'EAST') {
            yLocation++;
            if (yLocation >= tableSize) {
              yLocation = tableSize - 1;
              output = 'failed';
            }
          }
          if (state.robot.facing === 'WEST') {
            yLocation--;
            if (yLocation < 0) {
              yLocation = 0;
              output = 'failed';
            }
          }
          newState = {
            ...newState,
            robot: { ...state.robot, x: xLocation, y: yLocation },
            output,
          };
          break;
        }
        default:
          break;
      }
      return newState;
    }

    default:
      return state;
  }
};

export default gameReducer;
