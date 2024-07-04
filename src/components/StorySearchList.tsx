import { useOutletContext } from 'react-router-dom';
import { useSearchStory } from '../hooks/useSearchStory';
import StoryList from './StoryList';
import { useState } from 'react';
import { OutletContextType } from '../types';

const StorySearchList = (): React.ReactNode => {
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const { search } = useOutletContext<OutletContextType>();
  const { data, isLoading } = useSearchStory(search, pageSize, pageNumber - 1);

  const pagination = {
    pageSize,
    setPageSize,
    pageNumber,
    setPageNumber,
    resultCount: Math.min(1000, data?.resultCount ?? 0),
  }

  return <StoryList ids={data?.results} isLoading={isLoading} pagination={pagination} />
};

export default StorySearchList;