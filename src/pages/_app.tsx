import type { AppProps } from 'next/app';
import '@styles/globals.css';
import GlobalStyle from '@styles/GlobalStyles';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from '@components/Layout';
import { ThemeProvider } from 'styled-components';
import { colors } from '@styles/theme';
import { Provider } from 'react-redux';
import store from 'src/store';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <ThemeProvider theme={colors}>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}
