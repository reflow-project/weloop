import React from 'react';
import { MoodleThemeInterface } from 'ui/themes/styled';
import ThemeProvider from './Wrapper';
import { DecoratorFn } from '@storybook/react';

export const themeDeco = (theme?: MoodleThemeInterface): DecoratorFn => storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
