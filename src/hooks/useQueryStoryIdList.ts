import { useQuery } from 'react-query';
import { StoryRoute } from '../types';
import { fetchStories } from '../api/stories';

export const useQueryStoryIdList = (route: StoryRoute) => {
  return useQuery({
    queryKey: [route],
    queryFn: fetchStories(route)
  });
}