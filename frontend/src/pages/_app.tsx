import { ApolloProvider } from '@apollo/client';
import { client } from 'lib/apollo';
import ContextProvider from '@hooks/context';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
