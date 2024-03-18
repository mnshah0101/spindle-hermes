import { useEffect } from 'react';
import '../public/css/style.css';
import '../styles/custom.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.setAttribute('data-menu-collapse', 'lg');
  });

  return (
    <SessionProvider> 
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
