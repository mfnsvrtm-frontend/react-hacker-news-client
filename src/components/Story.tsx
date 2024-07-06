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
      <h3 className='story-title' onClick={() => setSelectedStory(id)} >{story.title}</h3>
      <div className='story-info'>
        <StoryTag story={story} />
        <span className='story-score'><UpCircleOutlined />{story.score}</span>
        {hasDescendants(story) && story.descendants > 0 && <span className='story-comments'><MessageOutlined />{story.descendants}</span>}
        <span>
          <span className="item-by">by <span className='item-by-author'>{story.by}</span></span>
          &nbsp;
          <span className="item-age">{age(story.time)}</span>
          &nbsp;
          {hasUrl(story) && story.url && <span className='story-url'>at <a className='story-url-link' href={story.url}>{new URL(story.url).hostname}</a></span>}
        </span>
        <span className='item-id'><span className='item-id-label'>ID</span> {story.id}</span>
      </div>
    </List.Item>
  );
};

export default Story;