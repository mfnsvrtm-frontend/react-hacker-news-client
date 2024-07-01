import { useQuery } from 'react-query';
import { searchStories } from '../api/stories';

export const useSearchStory = (search: string, pageSize: number, pageNumber: number) => {
  return useQuery({
    queryKey: ['search', search, { pageSize, pageNumber }],
    queryFn: searchStories(search, pageSize, pageNumber)
  });
}