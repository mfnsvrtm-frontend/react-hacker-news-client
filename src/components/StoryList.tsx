import { List } from 'antd';
import { useQueryStoryIdList } from '../hooks/useQueryStoryIdList';
import { StoryRoute } from '../types';
import Story from './Story';

interface StoryListProps {
  route: StoryRoute;
};

const StoryList = ({ route }: StoryListProps): React.ReactNode => {
  const { data } = useQueryStoryIdList(route);

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={id => <Story id={id} />}
    />

  );
};

export default StoryList;