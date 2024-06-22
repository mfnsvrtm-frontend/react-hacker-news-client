import { useQuery } from 'react-query';
import { StoryType } from '../types';
import { fetchStories } from '../api/stories';

export const useQueryStoryIdList = (storyType: StoryType) => {
  return useQuery({
    queryKey: [storyType],
    queryFn: fetchStories(storyType)
  });
}