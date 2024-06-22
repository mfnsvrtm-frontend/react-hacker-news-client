import { useQueryStory } from '../hooks/useQueryStory';

interface StoryProps {
  id: number;
};

const Story = ({ id }: StoryProps): React.ReactNode => {
  const { data } = useQueryStory(id);

  return (
    data?.title
  );
};

export default Story;