import { useQuery } from 'react-query';
import { fetchStory } from '../api/stories';

export const useQueryStory = (id: number) => {
  return useQuery({
    queryKey: ['story', id],
    queryFn: fetchStory(id)
  });
}