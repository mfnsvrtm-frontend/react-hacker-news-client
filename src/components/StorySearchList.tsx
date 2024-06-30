import { List } from 'antd';
import Story from './Story';
import { useOutletContext } from 'react-router-dom';
import { useSearchStory } from '../hooks/useSearchStory';

const StorySearchList = (): React.ReactNode => {
  const search = useOutletContext() as string;
  const { data } = useSearchStory(search);

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={id => <Story id={id} />}
    />
  );
};

export default StorySearchList;