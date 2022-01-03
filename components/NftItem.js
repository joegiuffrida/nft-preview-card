import Card from '../ui/Card';

import classes from './NftItem.module.css';

const NftItem = ({ id, title, image, description, balance, time, creator }) => {
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

        <div>
          <p>creator icon</p>
          <p>{creator}</p>
        </div>
      </Card>
    </li>
  );
};

export default NftItem;
