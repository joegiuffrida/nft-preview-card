import Card from '../ui/Card';
import Image from 'next/image';

import classes from './NftItem.module.css';

const NftItem = ({
  id,
  title,
  image,
  description,
  balance,
  time,
  avatar,
  creator,
}) => {
  return (
    <li className={classes.item}>
      <Card>
        <div>{image}</div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div>
          <p>{balance}</p>
          <p>{time}</p>
        </div>
        <div className={classes.creator}>
          <div>
            <Image src={`/${avatar}`} width="100%" height="100%" />
          </div>
          <p>
            <span>Creation of</span> {creator}
          </p>
        </div>
      </Card>
    </li>
  );
};

export default NftItem;
