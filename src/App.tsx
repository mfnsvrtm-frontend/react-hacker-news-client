import { ThemeProvider, theme } from './theme';
import { useEffect } from 'react';
import Header from './components/Header';
import { Content, Footer } from 'antd/es/layout/layout';

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = theme.colors.light;
  }, []);

  return (
    <ThemeProvider>
      <Header />
      <Content>

      </Content>
    </ThemeProvider>
  );
};

export default App;