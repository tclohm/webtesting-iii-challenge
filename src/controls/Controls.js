import React from 'react';

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div data-testid="controlComponent"
         className="controls panel">

      <button data-testid="controlLockButton" 
         disabled={!closed} 
         onClick={toggleLocked} 
         className="toggle-btn">
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>

      <button data-testid="controlDoorButton"
      disabled={locked} 
      onClick={toggleClosed} 
      className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

export default Controls;
