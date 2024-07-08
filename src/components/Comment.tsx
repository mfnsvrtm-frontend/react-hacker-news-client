import { Card } from 'antd';
import { useQueryComment } from '../hooks/useQueryComment';
import { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import ItemBy from './ItemBy';
import ItemAge from './ItemAge';
import ItemId from './ItemId';

interface CommentProps {
  id: number;
};

const Comment = ({ id }: CommentProps): React.ReactNode => {
  const { data } = useQueryComment(id);
  const [showChildren, setShowChildren] = useState(false);

  if (!data) return null;

  return (
    <div className='comment-wrapper'>
      <Card
        className='comment'
        title={(
          <div className='comment-header'>
            <ItemBy author={data.by} />
            &nbsp;
            <ItemAge timestamp={data.time} />
            &nbsp;
            <ItemId id={data.id} />
          </div>
        )}
      >
        <div className='comment-body' dangerouslySetInnerHTML={{ __html: data.text }}></div>
        {data.kids && <div className='comment-show-replies' onClick={() => setShowChildren(!showChildren)}>
          {showChildren ? (
            <><UpOutlined /> hide replies</>
          ) : (
            <><DownOutlined /> show replies</>
          )}
        </div>}
      </Card>
      {showChildren && data.kids && (
        <div className='comment-children'>
          <div className='comment-rule' onClick={() => setShowChildren(false)}></div>
          {data.kids.map(id => <Comment key={id} id={id} />)}
        </div>
      )}
    </div>
  );
};

export default Comment;