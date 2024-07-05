import { Card } from 'antd';
import { useQueryComment } from '../hooks/useQueryComment';
import { age } from '../utils';
import { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

interface CommentProps {
  id: number;
};

const Comment = ({ id }: CommentProps): React.ReactNode => {
  const { data } = useQueryComment(id);
  const [showChildren, setShowChildren] = useState(false);

  if (!data) return null;

  return (
    <div className='comment-wrapper'>
      <Card className='comment'>
        <div className='comment-header'>
          <span className='item-by'>by {data.by}</span>
          &nbsp;
          <span className='item-age'>{age(data.time)}</span>
          &nbsp;
          <span className='item-id'><span className='item-id-label'>ID</span> {data.id}</span>
        </div>
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