import * as React from 'react';
import type { Viewport } from 'next';

import '@/styles/global.css';

import { GoogleOAuthProvider } from '@react-oauth/google';

import { UserProvider } from '@/contexts/user-context';
import { LocalizationProvider } from '@/components/core/localization-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <LocalizationProvider>
          <GoogleOAuthProvider clientId="23020782984-pimnbrtmtq2hjmr4eecsm06ddqcq2uj2.apps.googleusercontent.com">
            <UserProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </UserProvider>
          </GoogleOAuthProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
