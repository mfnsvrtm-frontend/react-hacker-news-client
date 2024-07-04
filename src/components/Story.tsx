import { List } from 'antd';
import { useQueryStory } from '../hooks/useQueryStory';
import { MessageOutlined, UpCircleOutlined } from '@ant-design/icons';
import { age } from '../utils';
import { hasDescendants, hasUrl } from '../api';
import StoryTag from './StoryTag';
import { OutletContextType } from '../types';
import { useOutletContext } from 'react-router-dom';

interface StoryProps {
  id: number;
};

const Story = ({ id }: StoryProps): React.ReactNode => {
  const { setSelectedStory } = useOutletContext<OutletContextType>();
  const { data: story } = useQueryStory(id);
  
  if (!story) return null;

  return (
    <List.Item className='story'>
      <div className='story-section-1'>
        <h3 className='story-title' onClick={() => setSelectedStory(id)} >{story.title}</h3>
        {hasUrl(story) && story.url && <a className='story-url' href={story.url}>{new URL(story.url).hostname}</a>}
      </div>
      <div className='story-section-2'>
        <StoryTag story={story} />
        <span className='story-score'><UpCircleOutlined />{story.score}</span>
        {hasDescendants(story) && story.descendants > 0 && <span className='story-comments'><MessageOutlined />{story.descendants}</span>}
        <span>
          <span className="story-by">by {story.by}</span>
          &nbsp;
          <span className="story-age">{age(story.time)}</span>
        </span>
        <span className='story-id'><span className='story-id-id'>ID</span> {story.id}</span>
      </div>
    </List.Item>
  );
};

export default Story;