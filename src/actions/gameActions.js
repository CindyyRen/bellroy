// src/redux/actions.js
export const SET_COMMAND_STR = 'SET_COMMAND_STR';
// export const SET_ROBOT = 'SET_ROBOT';
// export const SET_ERROR = 'SET_ERROR';
// export const SET_OUTPUT = 'SET_OUTPUT';
export const TOGGLE_TABLE = 'TOGGLE_TABLE';
export const HANDLE_COMMAND = 'HANDLE_COMMAND';

// Action creators
export const setCommandStr = (commandStr) => ({ type: SET_COMMAND_STR, payload: commandStr });
// export const setRobot = (robot) => ({ type: SET_ROBOT, payload: robot });
// export const setError = (error) => ({ type: SET_ERROR, payload: error });
// export const setOutput = (output) => ({ type: SET_OUTPUT, payload: output });
export const toggleTable = () => ({ type: TOGGLE_TABLE });
export const handleCommand = () => ({ type: HANDLE_COMMAND });
