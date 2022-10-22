import { Cycle } from './reducer';

export enum ACTION_TYPES {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export const addNewCycleAction = (newCycle: Cycle) => {
  return {
    type: ACTION_TYPES.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
};

export const markCurrentCycleAsFinishedAction = () => {
  return {
    type: ACTION_TYPES.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
};

export const interrupedCurrentCycleAction = () => {
  return {
    type: ACTION_TYPES.INTERRUPT_CURRENT_CYCLE,
  };
};
