import { Header as AntdHeader } from 'antd/es/layout/layout';
import { Menu } from 'antd';
import Container from './Container';
import { useLocation, useNavigate } from 'react-router-dom';

const labels = ['New', 'Top', 'Best', 'Ask', 'Show', 'Job', 'Search'];
const items = labels.map(label => ({ label, key: label.toLowerCase() }));

const Header = (): React.ReactNode => {
  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname.split('/').at(-1) ?? '';

  return (
    <AntdHeader style={{ position: 'sticky', top: 0 }} >
      <Container style={{ display: 'flex', height: '100%', gap: '32px', justifyContent: 'center' }} >
        <img src="https://news.ycombinator.com//y18.svg" height='100%' style={{ padding: '8px'}}></img>
        <Menu
          mode="horizontal"
          items={items}
          selectedKeys={[selected]}
          onClick={({ key }) => navigate(key)}
        />
      </Container>
    </AntdHeader>
  );
};

export default Header;