import { ConfigProvider } from 'antd';

export const theme = {
  colors: {
    primary: 'rgb(251, 101, 30)',
    secondary: 'rgb(253, 169, 66)',
    light: 'rgb(245, 245, 238)',
    white: '#fff'
  },
  shadows: {
    tertiary: '0px 0px 10px 0 rgba(0, 0, 0, 0.15)',
  }
};

export const ThemeProvider = ({ children }: React.PropsWithChildren): React.ReactNode => {
  return (
    <ConfigProvider
      theme={{
        token: {
          boxShadowTertiary: theme.shadows.tertiary,
          colorPrimary: theme.colors.primary,
        },
        components: {
          Layout: {
            headerBg: theme.colors.white,
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
};