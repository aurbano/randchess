import { extendTheme, ThemeConfig, theme as baseTheme } from '@chakra-ui/react';

export const DEFAULT_COLOR_MODE = 'dark';

const config: ThemeConfig = { initialColorMode: DEFAULT_COLOR_MODE, useSystemColorMode: false };

const theme = extendTheme({
  config,
  colors: {
    primary: baseTheme.colors.blue,
    secondary: baseTheme.colors.purple,
    positive: baseTheme.colors.green,
    negative: baseTheme.colors.red,
    warning: baseTheme.colors.orange,
    information: baseTheme.colors.blue,
  },
});

export default theme;
