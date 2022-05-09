import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return <Component {...pageProps} />;
};

export default MyApp;
