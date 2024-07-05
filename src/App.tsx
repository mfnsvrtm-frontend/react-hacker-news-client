import { ThemeProvider } from './theme';
import Header from './components/Header';
import { Content } from 'antd/es/layout/layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import Container from './components/Container';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import CommentSection from './components/CommentSection';
import { useMediaQuery } from 'react-responsive';

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
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const isDesktop = useMediaQuery({query: '(min-width: 685px)'});

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <Header searchState={searchState} />
        <Content style={{ flexGrow: 1 }}>
          <Container>
            <Outlet context={{ search: debounced, setSelectedStory }} />
          </Container>
        </Content>
        <CommentSection desktop={isDesktop} storyId={selectedStory} close={() => setSelectedStory(null)} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;