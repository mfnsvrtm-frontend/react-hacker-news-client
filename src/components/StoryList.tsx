import { useQueryStoryIdList } from '../hooks/useQueryStoryIdList';
import { StoryType } from '../types';
import Story from './Story';

interface StoryListProps {
  storyType: StoryType;
};

const StoryList = ({ storyType }: StoryListProps): React.ReactNode => {
  const { data } = useQueryStoryIdList(storyType);

  console.log(data);

  return (
    <ul>
      {data?.map(id => (
        <li key={id}><Story id={id} /></li>
      ))}
    </ul>
  );
};

export default StoryList;