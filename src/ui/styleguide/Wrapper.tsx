import React, { FC } from 'react';
import { moodlenet } from 'ui/themes';
import { ThemeProvider as StyledTheme } from 'styled-components';
import { MoodleThemeInterface } from 'ui/themes/styled';

const ThemeProvider: FC<{ theme?: MoodleThemeInterface | undefined }> = ({
  children,
  theme = moodlenet
}) => {
  return <StyledTheme theme={theme}>{children}</StyledTheme>;
};

export default ThemeProvider;
