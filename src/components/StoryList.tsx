import { List, Spin } from 'antd';
import Story from './Story';

interface StoryListProps {
  ids?: number[];
  isLoading: boolean;
  pagination?: {
    pageSize: number;
    setPageSize: React.Dispatch<React.SetStateAction<number>>,
    pageNumber: number;
    setPageNumber: React.Dispatch<React.SetStateAction<number>>,
    resultCount: number;
  };
};

const StoryList = ({ ids, isLoading, pagination }: StoryListProps): React.ReactNode => {
  if (isLoading)
    return <Spin size="large" />;

  console.log(pagination?.resultCount);

  const handleChange = pagination
    ? (page: number, pageSize: number) => {
      pagination.setPageNumber(page);
      pagination.setPageSize(pageSize);
    }
    : () => { };

  return (
    <List
      itemLayout="horizontal"
      dataSource={ids}
      renderItem={id => <Story id={id} />}
      pagination={{
        onChange: handleChange,
        defaultPageSize: 10,
        hideOnSinglePage: true,
        align: 'center',
        ...(pagination && { 
          total: pagination.resultCount,
          current: pagination.pageNumber,
          pageSize: pagination.pageSize
        })
      }}
    />
  );
};

export default StoryList;