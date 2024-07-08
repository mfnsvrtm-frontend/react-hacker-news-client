import { List } from 'antd';
import { useQueryStory } from '../hooks/useQueryStory';
import { MessageOutlined, UpCircleOutlined } from '@ant-design/icons';
import { hasDescendants, hasUrl } from '../api';
import StoryTag from './StoryTag';
import { OutletContextType } from '../types';
import { useOutletContext } from 'react-router-dom';
import ItemBy from './ItemBy';
import ItemAge from './ItemAge';
import ItemId from './ItemId';
import StoryUrl from './StoryUrl';

interface StoryProps {
  id: number;
};

const Story = ({ id }: StoryProps): React.ReactNode => {
  const { setSelectedStory } = useOutletContext<OutletContextType>();
  const { data: story } = useQueryStory(id);

  if (!story) return null;

  return (
    <List.Item className='story'>
      <h3 className='story-title' onClick={() => setSelectedStory(id)}>{story.title}</h3>
      <div className='story-info'>
        <StoryTag story={story} />
        <span className='story-score'><UpCircleOutlined />{story.score}</span>
        {hasDescendants(story) && story.descendants > 0 &&
          <span className='story-comments'><MessageOutlined />{story.descendants}</span>}
        <span>
          <ItemBy author={story.by} />
          &nbsp;
          <ItemAge timestamp={story.time} />
          &nbsp;
          {hasUrl(story) && story.url && <StoryUrl url={story.url} />}
        </span>
        <ItemId id={story.id} />
      </div>
    </List.Item>
  );
};

export default Story;