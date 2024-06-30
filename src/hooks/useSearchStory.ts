import { useQuery } from 'react-query';
import { searchStories } from '../api/stories';

export const useSearchStory = (search: string) => {
  return useQuery({
    queryKey: ['search', search],
    queryFn: searchStories(search)
  });
}