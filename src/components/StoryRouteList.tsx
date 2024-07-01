import { useQueryStoryIdList } from '../hooks/useQueryStoryIdList';
import { StoryRoute } from '../types';
import StoryList from './StoryList';

interface StoryRouteListProps {
  route: StoryRoute;
};

const StoryRouteList = ({ route }: StoryRouteListProps): React.ReactNode => {
  const { data, isLoading } = useQueryStoryIdList(route);
  return <StoryList ids={data} isLoading={isLoading} />
};

export default StoryRouteList;