import React from 'react';
import styled from 'react-emotion';

import Landing from '../components/Landing';
import { Steps, Step } from '../components/Steps';
import NumberInput from '../components/NumberInput';

import { PERT_ACTIONS, PERT_STATES } from '../domain/pertMachine';
import { StandardMachine, ParallelMachine } from 'xstate/lib/types';

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
`;

type Props = {
  pertMachine: StandardMachine | ParallelMachine;
};

type State = {
  pertState: PERT_STATES;
};

class App extends React.Component<Props, State> {
  state = {
    pertState: PERT_STATES.START,
  };

  handleStartAnalysis = () => {
    this.setState(state => ({
      pertState: this.props.pertMachine.transition(state.pertState, PERT_ACTIONS.NEXT).value,
    }));
  };

  render() {
    const renderMap = {
      [PERT_STATES.START]: <Landing />,
      [PERT_STATES.OPTIMISTIC]: <div>Optimistic</div>,
    }[this.state.pertState];

    return (
      <Content>
        <h1>PERT Estimation Tool</h1>
        {renderMap}
        <button onClick={this.handleStartAnalysis}>NEXT</button>
      </Content>
    );
  }
}

export default App;
