import { AppProps } from 'next/dist/next-server/lib/router/router';
import 'styles/styles.scss';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default App;
