import { List, Spin } from 'antd';
import Story from './Story';

interface StoryListProps {
  ids?: number[];
  isLoading: boolean;
};

const StoryList = ({ ids, isLoading }: StoryListProps): React.ReactNode => {
  if (isLoading)
    return <Spin size="large" />

  return (
    <List
      itemLayout="horizontal"
      dataSource={ids}
      renderItem={id => <Story id={id} />}
    />
  );
};

export default StoryList;