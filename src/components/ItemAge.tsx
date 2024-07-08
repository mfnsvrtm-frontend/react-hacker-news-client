import { age } from '../utils';

interface ItemAgeProps {
  timestamp: number;
};

const ItemAge = ({ timestamp }: ItemAgeProps): React.ReactNode => {
  return <span className="item-age">{age(timestamp)}</span>;
};

export default ItemAge;