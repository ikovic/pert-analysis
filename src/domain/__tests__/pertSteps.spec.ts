import { createStateMachine, PERT_STATES, PERT_ACTIONS } from '../pertSteps';

/**
 * Tests here are a bit overzealous. They also prove that xstate is working correctly,
 * not just the model. They were a part of learning the xstate API and state machines overall.
 */
describe('#PERT State Machine', () => {
  it('should correctly transition forward states', () => {
    const pertStateMachine = createStateMachine();
    const initialState = pertStateMachine.initialState;
    const optimisticState = pertStateMachine.transition(initialState, PERT_ACTIONS.NEXT);
    const nominalState = pertStateMachine.transition(optimisticState, PERT_ACTIONS.NEXT);
    const pessimisticState = pertStateMachine.transition(nominalState, PERT_ACTIONS.NEXT);
    const showResultsState = pertStateMachine.transition(pessimisticState, PERT_ACTIONS.FINISH);

    expect(optimisticState.value).toBe(PERT_STATES.OPTIMISTIC);
    expect(nominalState.value).toBe(PERT_STATES.NOMINAL);
    expect(pessimisticState.value).toBe(PERT_STATES.PESSIMISTIC);
    expect(showResultsState.value).toBe(PERT_STATES.RESULTS);
  });

  it('should correctly navigate through previous states', () => {
    const pertStateMachine = createStateMachine();
    const initialState = pertStateMachine.initialState;
    const optimisticState = pertStateMachine.transition(initialState, PERT_ACTIONS.NEXT);
    const nominalState = pertStateMachine.transition(optimisticState, PERT_ACTIONS.NEXT);
    const pessimisticState = pertStateMachine.transition(nominalState, PERT_ACTIONS.NEXT);

    const pastNominalState = pertStateMachine.transition(pessimisticState, PERT_ACTIONS.PREVIOUS);
    const pastOptimisticState = pertStateMachine.transition(
      pastNominalState,
      PERT_ACTIONS.PREVIOUS
    );

    const impossiblePreviousState = pertStateMachine.transition(
      PERT_STATES.RESULTS,
      PERT_ACTIONS.PREVIOUS
    );

    expect(pastNominalState.value).toBe(nominalState.value);
    expect(pastOptimisticState.value).toBe(optimisticState.value);
    expect(impossiblePreviousState.value).toBe(PERT_STATES.RESULTS);
  });

  it('should reset state on RESET action', () => {
    const pertStateMachine = createStateMachine();
    const initialState = pertStateMachine.initialState;
    const resultState = pertStateMachine.transition(PERT_STATES.PESSIMISTIC, PERT_ACTIONS.FINISH);
    const resetState = pertStateMachine.transition(resultState, PERT_ACTIONS.RESTART);

    expect(resetState.value).toEqual(initialState.value);
  });

  it('should ignore incorrect transitions', () => {
    const pertStateMachine = createStateMachine();
    const initialState = pertStateMachine.initialState;
    const optimisticState = pertStateMachine.transition(initialState, PERT_ACTIONS.NEXT);
    const impossibleState = pertStateMachine.transition(optimisticState, PERT_ACTIONS.FINISH);

    expect(impossibleState.value).not.toBe(PERT_STATES.RESULTS);
    expect(impossibleState.value).toBe(PERT_STATES.OPTIMISTIC);
  });
});
