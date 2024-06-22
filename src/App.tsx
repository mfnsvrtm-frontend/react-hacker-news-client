import { ThemeProvider, theme } from './theme';
import { useEffect } from 'react';
import Header from './components/Header';
import { Content } from 'antd/es/layout/layout';
import StoryList from './components/StoryList';
import { StoryType } from './types';
import { QueryClient, QueryClientProvider } from 'react-query';

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
          <StoryList storyType={StoryType.New} />
        </Content>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;