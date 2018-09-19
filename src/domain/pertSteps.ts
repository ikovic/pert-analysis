import { Machine } from 'xstate';

export enum PERT_STATES {
  START = 'start',
  OPTIMISTIC = 'optimistic',
  NOMINAL = 'nominal',
  PESSIMISTIC = 'pessimistic',
  RESULTS = 'results',
}

export enum PERT_START_STATES {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
}

export enum PERT_ACTIONS {
  NEXT = 'next',
  PREVIOUS = 'previous',
  FINISH = 'finish',
  RESTART = 'restart',
  FILL_FORM = 'fillForm',
}

const flow = {
  initial: PERT_STATES.START,
  key: 'Pert',
  states: {
    [PERT_STATES.START]: {
      on: {
        [PERT_ACTIONS.NEXT]: PERT_STATES.OPTIMISTIC,
      },
      initial: PERT_START_STATES.DISABLED,
      key: 'Landing',
      states: {
        [PERT_START_STATES.DISABLED]: {
          on: {
            [PERT_ACTIONS.FILL_FORM]: PERT_START_STATES.ENABLED,
            [PERT_ACTIONS.NEXT]: PERT_START_STATES.DISABLED,
          },
        },
        [PERT_START_STATES.ENABLED]: {
          on: {},
        },
      },
    },
    [PERT_STATES.OPTIMISTIC]: {
      on: {
        [PERT_ACTIONS.NEXT]: PERT_STATES.NOMINAL,
      },
    },
    [PERT_STATES.NOMINAL]: {
      on: {
        [PERT_ACTIONS.PREVIOUS]: PERT_STATES.OPTIMISTIC,
        [PERT_ACTIONS.NEXT]: PERT_STATES.PESSIMISTIC,
      },
    },
    [PERT_STATES.PESSIMISTIC]: {
      on: {
        [PERT_ACTIONS.PREVIOUS]: PERT_STATES.NOMINAL,
        [PERT_ACTIONS.FINISH]: PERT_STATES.RESULTS,
      },
    },
    [PERT_STATES.RESULTS]: {
      on: {
        [PERT_ACTIONS.RESTART]: PERT_STATES.START,
      },
    },
  },
};

export const createStateMachine = () => Machine(flow);
