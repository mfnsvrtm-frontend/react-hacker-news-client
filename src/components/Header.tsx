import { Header as AntdHeader } from 'antd/es/layout/layout';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Container from './Container';

const items: MenuProps['items'] = [
  { label: 'New', key: 'new' },
  { label: 'Top', key: 'top' },
  { label: 'Best', key: 'best' },
  { label: 'Ask', key: 'ask' },
  { label: 'Show', key: 'show' },
  { label: 'Job', key: 'job' },
  { label: 'Search', key: 'search' },
];

const Header = (): React.ReactNode => {
  return (
    <AntdHeader style={{ position: 'sticky', top: 0 }} >
      <Container style={{ display: 'flex', height: '100%', gap: '32px', justifyContent: 'center' }} >
        <img src="https://news.ycombinator.com//y18.svg" height='100%' style={{ padding: '8px'}}></img>
        <Menu mode="horizontal" items={items} />
      </Container>
    </AntdHeader>
  );
};

export default Header;