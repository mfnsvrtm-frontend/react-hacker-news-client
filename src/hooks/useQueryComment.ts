import { useQuery } from 'react-query';
import { fetchComment } from '../api/stories';

export const useQueryComment = (id: number) => {
  return useQuery({
    queryKey: ['comment', id],
    queryFn: fetchComment(id)
  });
}