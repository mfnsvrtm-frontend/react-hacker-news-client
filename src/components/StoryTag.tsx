import { Tag } from 'antd';
import { Story, StoryKind } from '../api';

interface StoryTagProps {
  story: Story;
};

const StoryTag = ({ story }: StoryTagProps): React.ReactNode => {
  let color;
  switch (story.kind) {
    case StoryKind.Show: color = 'orange'; break;
    case StoryKind.Ask: color = 'blue'; break;
    case StoryKind.Job: color = 'purple'; break;
  }

  return (
    <Tag color={color}>{story.kind}</Tag>
  );
};

export default StoryTag;