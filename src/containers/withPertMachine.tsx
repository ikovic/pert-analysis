import React, { ComponentType } from 'react';
import { createStateMachine } from '../domain/pertMachine';
import { StandardMachine, ParallelMachine } from 'xstate/lib/types';

type State = {
  pertMachine: StandardMachine | ParallelMachine;
};

/**
 * A HOC used to push pertMachine to props of the wrapped component.
 * It is used so that the machine lifecycle is decoupled from underlying React component.
 * @param WrappedComponent
 */
const withPertMachine = WrappedComponent =>
  class ComponentWithMachine extends React.Component<any, State> {
    constructor(props) {
      super(props);
      this.state = {
        pertMachine: createStateMachine(),
      };
    }

    render() {
      return (
        <React.Fragment>
          <WrappedComponent {...this.props} pertMachine={this.state.pertMachine} />
        </React.Fragment>
      );
    }
  };

export default withPertMachine;
