import { Header as AntdHeader } from 'antd/es/layout/layout';
import { Button, Drawer, Input, Menu } from 'antd';
import Container from './Container';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const labels = ['New', 'Top', 'Best', 'Ask', 'Show', 'Job'];
const items = labels.map(label => ({ label, key: label.toLowerCase() }));

interface HeaderProps {
  searchState: [string, React.Dispatch<React.SetStateAction<string>>];
}

const Header = ({ searchState }: HeaderProps): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 685px)' });

  return (
    <AntdHeader>
      {isDesktop && (
        <Container className='desktop-header-content'>
          <img src="https://news.ycombinator.com//y18.svg" className='logo'></img>
          <MainMenu searchState={searchState} vertical={false} />
        </Container>
      )}
      {!isDesktop && (
        <div className='mobile-header-content'>
          <img src="https://news.ycombinator.com//y18.svg" className='logo'></img>
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
      )}
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
          className='header-search'
          prefix={<SearchOutlined />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => { if (e.code === 'Enter') onSelect(); }}
        />
      </Menu.Item>
    </Menu>
  );
};

export default Header;