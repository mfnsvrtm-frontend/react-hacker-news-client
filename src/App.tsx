import { ThemeProvider } from './theme';
import Header from './components/Header';
import { Content } from 'antd/es/layout/layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import Container from './components/Container';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    }
  }
});

const App = () => {
  const searchState = useState('');
  const [search] = searchState;
  const [debounced] = useDebounce(search, 300);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <Header searchState={searchState} />
        <Content style={{ flexGrow: 1 }}>
          <Container>
            <Outlet context={debounced} />
          </Container>
        </Content>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;