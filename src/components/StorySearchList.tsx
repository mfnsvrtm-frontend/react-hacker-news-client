import { useOutletContext } from 'react-router-dom';
import { useSearchStory } from '../hooks/useSearchStory';
import StoryList from './StoryList';

const StorySearchList = (): React.ReactNode => {
  const search = useOutletContext() as string;
  const { data, isLoading } = useSearchStory(search);
  return <StoryList ids={data} isLoading={isLoading} />
};

export default StorySearchList;