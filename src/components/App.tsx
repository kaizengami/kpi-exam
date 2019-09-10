import React from 'react';
import Questions from './Questions';
import Answers_1_39 from './Answers-1-39';
import Answers_40_80 from './Answers-40-80';

import { AppWrapper, AnswersWrappe, UpButton } from './app.styles';

const App: React.FC = (): JSX.Element => {
  return (
    <AppWrapper>
      <Questions />
      <AnswersWrappe>
        <Answers_1_39 />
        <Answers_40_80 />
      </AnswersWrappe>
      <UpButton href="#">⬆</UpButton>
    </AppWrapper>
  );
};

export default App;
