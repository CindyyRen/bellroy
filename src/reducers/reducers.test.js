// src/redux/reducers.test.js
import gameReducer from './gameReducer';
import { HANDLE_COMMAND, TOGGLE_TABLE } from '../actions/gameActions.js';

describe('gameReducer', () => {
  it('should handle TOGGLE_TABLE command', () => {
    const initialState = {
      showTable: true,
    };
    const action = { type: TOGGLE_TABLE };
    const newState = gameReducer(initialState, action);
    expect(newState.showTable).toBe(false);
  });
  it('should handle HANDLE_COMMAND LEFT command', () => {
    const initialState = {
      robot: { x: 1, y: 1, facing: 'NORTH' },
      commandStr: 'LEFT()',
    };
    const action = { type: HANDLE_COMMAND };
    const newState = gameReducer(initialState, action);
    expect(newState.robot).toEqual({ x: 1, y: 1, facing: 'WEST' });
    expect(newState.output).toBe('Success');
  });
  it('should handle HANDLE_COMMAND RIGHT command', () => {
    const initialState = {
      robot: { x: 1, y: 1, facing: 'NORTH' },
      commandStr: 'RIGHT()',
    };
    const action = { type: HANDLE_COMMAND };
    const newState = gameReducer(initialState, action);
    expect(newState.robot).toEqual({ x: 1, y: 1, facing: 'EAST' });
    expect(newState.output).toBe('Success');
  });
  it('should handle HANDLE_COMMAND PLACE command', () => {
    const initialState = { robot: null, commandStr: 'PLACE(1,2,NORTH)' };
    const action = { type: HANDLE_COMMAND };
    const newState = gameReducer(initialState, action);
    expect(newState.robot).toEqual({ x: 1, y: 2, facing: 'NORTH' });
    expect(newState.output).toBe('Success');
  });

  it('should handle HANDLE_COMMAND REPORT command', () => {
    const initialState = {
      robot: { x: 1, y: 2, facing: 'NORTH' },
      commandStr: 'REPORT()',
    };
    const action = { type: HANDLE_COMMAND };
    const newState = gameReducer(initialState, action);
    expect(newState.output).toBe('1,2,NORTH');
  });

  it('should handle HANDLE_COMMAND MOVE command', () => {
    const initialState = {
      robot: { x: 1, y: 1, facing: 'NORTH' },
      commandStr: 'MOVE()',
    };
    const action = { type: HANDLE_COMMAND };
    const newState = gameReducer(initialState, action);
    expect(newState.robot).toEqual({ x: 0, y: 1, facing: 'NORTH' });
    expect(newState.output).toBe('Success');
  });

  it('should handle HANDLE_COMMAND MOVE command with boundaries', () => {
    const initialState = {
      robot: { x: 0, y: 0, facing: 'NORTH' },
      commandStr: 'MOVE()',
    };
    const action = { type: HANDLE_COMMAND };
    const newState = gameReducer(initialState, action);
    expect(newState.robot).toEqual({ x: 0, y: 0, facing: 'NORTH' });
    expect(newState.output).toBe('Failed');
  });
});
