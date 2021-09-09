import React from "react";

import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';

import Home from "./pages/Home";
import theme from './theme';
import GithubProvider from "./providers/github-provider";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ThemeProvider theme={theme}>
            <Reset />
            <Home />
        </ThemeProvider>
      </GithubProvider>
    </main>
  );
};

export default Providers;
