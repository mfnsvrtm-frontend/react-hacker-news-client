import { Header as AntdHeader } from 'antd/es/layout/layout';
import { Button, Drawer, Input, Menu, theme } from 'antd';
import Container from './Container';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';

const labels = ['New', 'Top', 'Best', 'Ask', 'Show', 'Job'];
const items = labels.map(label => ({ label, key: label.toLowerCase() }));

interface HeaderProps {
  searchState: [string, React.Dispatch<React.SetStateAction<string>>];
}

const Header = ({ searchState }: HeaderProps): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AntdHeader style={{ position: 'sticky', top: 0, zIndex: 1, borderBottom: `1px solid ${theme.getDesignToken().colorBorderSecondary}` }} >
      <Container className='desktop-header-content' style={{ display: 'flex', height: '100%', gap: '32px', justifyContent: 'safe center' }} >
        <img src="https://news.ycombinator.com//y18.svg" height='100%' style={{ padding: '8px' }}></img>
        <MainMenu searchState={searchState} vertical={false} />
      </Container>
      <div className='mobile-header-content'>
        <img src="https://news.ycombinator.com//y18.svg" height='100%' style={{ padding: '8px' }}></img>
        <Button
          type='text'
          size='large'
          icon={<MenuOutlined />}
          onClick={() => setIsOpen(true)}
        />
        <Drawer
          size='large'
          placement='top'
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <MainMenu searchState={searchState} vertical={true} onSelect={() => setIsOpen(false)} />
        </Drawer>
      </div>
    </AntdHeader>
  );
};

interface MenuProps {
  searchState: [string, React.Dispatch<React.SetStateAction<string>>];
  vertical?: boolean;
  onSelect?: () => void;
}

const MainMenu = ({ searchState, vertical, onSelect }: MenuProps) => {
  onSelect = onSelect ?? (() => { });

  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname.split('/').at(-1) ?? '';

  const [search, setSearch] = searchState;

  return (
    <Menu
      mode={vertical ? 'vertical' : 'horizontal'}
      selectedKeys={[selected]}
    >
      {items.map(item => (
        <Menu.Item key={item.key} onClick={() => { onSelect(); navigate(item.key); }}>{item.label}</Menu.Item>
      ))}
      <Menu.Item
        className='search'
        key='search'
        onClick={() => navigate('search')}
      >
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          style={{ width: '175px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => { if (e.code === 'Enter') onSelect(); }}
        />
      </Menu.Item>
    </Menu>
  );
};

export default Header;