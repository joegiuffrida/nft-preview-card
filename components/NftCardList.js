import NftItem from './NftItem';

import classes from './NftCardList.module.css';

const NftCardList = ({ nftCards }) => {
  return (
    <ul className={classes.list}>
      {nftCards.map((nft) => (
        <NftItem
          key={nft.id}
          id={nft.id}
          title={nft.title}
          image={nft.image}
          description={nft.description}
          balance={nft.balance}
          time={nft.time}
          creator={nft.creator}
        />
      ))}
    </ul>
  );
};

export default NftCardList;
