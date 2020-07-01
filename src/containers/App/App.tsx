import * as React from 'react';
import ThemeProvider from 'ui/styleguide/Wrapper';
import { Router } from './Router';
import { TopMessage } from './topMessage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <>
        <TopMessage />
        <Router />
      </>
    </ThemeProvider>
  );
};

export default App;
