import React from 'react';

import { TitleButton } from '../../components';
import './style.css';

function App() {
  return (
    <div className="App">
      <TitleButton
        title="WELCOME TO DANSKE BANK"
        ballSize={3.4}
        fontSize={2.7}
        textOffset={6.5}
        textAreaWidth={19}
        topOffset={40}
        leftOffset={8}
      />
      <TitleButton title="OUR HIGHLIGHTS" topOffset={70} leftOffset={25} textAreaWidth={4} />
      <TitleButton
        title="A JOURNEY THROUGH LIFE WITH  DANSKE BANK"
        topOffset={55}
        leftOffset={50}
        textAreaWidth={17.5}
      />
    </div>
  );
}

export default App;
