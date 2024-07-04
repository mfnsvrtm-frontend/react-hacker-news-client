import { Drawer } from 'antd';
import { hasDescendants } from '../../api';
import { useQueryStory } from '../../hooks/useQueryStory';
import Comment from '../Comment';

interface CommentSectionMainProps {
  desktop?: boolean;
  storyId: number;
  close: () => void;
};

const CommentSectionMain = ({ desktop, storyId, close }: CommentSectionMainProps): React.ReactNode => {
  const { data: story } = useQueryStory(storyId);
  
  if (!story || !hasDescendants(story)) {
    console.error(`Error showing comment section for story ${story} (undefined or no comments)`)
    return null;
  }

  return (
    <Drawer
      placement={desktop ? 'right' : 'bottom'}
      size='large'
      open={true}
      onClose={close}
    >
      {story.kids ? (
        story.kids.map(id => <Comment id={id} />)
      ) : (
        'No comments yet'
      )}
    </Drawer>
  );
};

export default CommentSectionMain;