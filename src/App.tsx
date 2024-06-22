import { ThemeProvider, theme } from './theme';
import { useEffect } from 'react';
import Header from './components/Header';
import { Content } from 'antd/es/layout/layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    }
  }
});

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = theme.colors.light;
  }, []);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;