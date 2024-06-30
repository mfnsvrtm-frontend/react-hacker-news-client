import { Header as AntdHeader } from 'antd/es/layout/layout';
import { Input, Menu, theme } from 'antd';
import Container from './Container';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

const labels = ['New', 'Top', 'Best', 'Ask', 'Show', 'Job'];
const items = labels.map(label => ({ label, key: label.toLowerCase() }));

interface HeaderProps {
  searchState: [string, React.Dispatch<React.SetStateAction<string>>];
}

const Header = ({ searchState }: HeaderProps): React.ReactNode => {
  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname.split('/').at(-1) ?? '';

  const [search, setSearch] = searchState;

  return (
    <AntdHeader style={{ position: 'sticky', top: 0, zIndex: 1, borderBottom: `1px solid ${theme.getDesignToken().colorBorderSecondary}` }} >
      <Container style={{ display: 'flex', height: '100%', gap: '32px', justifyContent: 'safe center' }} >
        <img src="https://news.ycombinator.com//y18.svg" height='100%' style={{ padding: '8px' }}></img>
        <Menu
          mode="horizontal"
          selectedKeys={[selected]}
        >
          {items.map(item => (
            <Menu.Item key={item.key} onClick={() => navigate(item.key)}>{item.label}</Menu.Item>
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
            />
          </Menu.Item>
        </Menu>
      </Container>
    </AntdHeader>
  );
};

export default Header;