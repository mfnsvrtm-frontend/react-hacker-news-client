interface ItemIdProps {
  id: number;
};

const ItemId = ({ id }: ItemIdProps): React.ReactNode => {
  return <span className='item-id'><span className='item-id-label'>ID</span> {id}</span>;
};

export default ItemId;