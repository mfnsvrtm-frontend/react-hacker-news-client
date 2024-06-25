import { ThemeProvider } from './theme';
import Header from './components/Header';
import { Content } from 'antd/es/layout/layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import Container from './components/Container';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    }
  }
});

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <Header />
        <Content>
          <Container>
            <Outlet />
          </Container>
        </Content>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;