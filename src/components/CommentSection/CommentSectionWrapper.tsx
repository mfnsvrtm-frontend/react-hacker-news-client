import CommentSectionMain from './CommentSectionMain';

interface CommentSectionWrapperProps {
  desktop?: boolean;
  storyId: number | null;
  close: () => void;
};

const CommentSectionWrapper = (props: CommentSectionWrapperProps): React.ReactNode => {
  return props.storyId ? <CommentSectionMain {...props} storyId={props.storyId} /> : null;
};

export default CommentSectionWrapper;