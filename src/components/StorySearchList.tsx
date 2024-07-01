import { useOutletContext } from 'react-router-dom';
import { useSearchStory } from '../hooks/useSearchStory';
import StoryList from './StoryList';
import { useState } from 'react';

const StorySearchList = (): React.ReactNode => {
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const search = useOutletContext() as string;
  const { data, isLoading } = useSearchStory(search, pageSize, pageNumber);

  const pagination = {
    pageSize,
    setPageSize,
    pageNumber,
    setPageNumber,
    resultCount: data?.resultCount ?? 0,
  }

  return <StoryList ids={data?.results} isLoading={isLoading} pagination={pagination} />
};

export default StorySearchList;