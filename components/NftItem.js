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
        <div className={classes.image}>
          <Image src={`/${image}`} layout="fill" objectFit="cover" />
        </div>
        <div className={classes.content}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={classes.stats}>
          <div className={classes.balance}>
            <Image src="/icon-ethereum.svg" width={15} height={25} />
            <p>{balance}</p>
          </div>
          <div className={classes.time}>
            <Image src="/icon-clock.svg" width={20} height={20} />
            <p>{time}</p>
          </div>
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
