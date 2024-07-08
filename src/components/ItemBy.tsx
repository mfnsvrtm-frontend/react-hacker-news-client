interface ItemByProps {
  author: string;
};

const ItemBy = ({ author }: ItemByProps): React.ReactNode => {
  return <span className="item-by">by <span className='item-by-author'>{author}</span></span>;
};

export default ItemBy;