import React from 'react';

interface StepsProps {
  currentStep: string;
}

const StepsContext: React.Context<string> = React.createContext('');

/**
 * Steps component provides a wrapper and context holder for these things:
 * - progress indicator (passed as child Step)
 * - content (whatever goes in together with the rest of the stuff)
 * - step navigation buttons (previous/next)
 * Everything is fully controlled by the parent component, this wrapper exists just to share context
 * @param param0
 */
export const Steps: React.SFC<StepsProps> = ({ currentStep, children }) => {
  return (
    <StepsContext.Provider value={currentStep}>
      <div>{children}</div>
    </StepsContext.Provider>
  );
};

interface StepProps {
  name: string;
}
export const Step: React.SFC<StepProps> = ({ children, name }) => {
  return (
    <StepsContext.Consumer>
      {(currentStep: string) => (
        <div>
          {name === currentStep && 'Active '}
          {children}
        </div>
      )}
    </StepsContext.Consumer>
  );
};
