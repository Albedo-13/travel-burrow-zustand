import '@styles/index.scss';

import { ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from './router-provider';
import { theme } from './styles/mui-theme';

async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //   return;
  // }
  const { worker } = await import('./mocks/setup');
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
});
