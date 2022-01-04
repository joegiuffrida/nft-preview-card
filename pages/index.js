import Head from 'next/head';
import styles from '../styles/Home.module.css';

import NftCardList from '../components/NftCardList';

const DUMMY_NFT_DATA = [
  {
    id: 'm1',
    title: 'Equilibrium #3429',
    image: 'image-equilibrium.jpg',
    description: 'Our Equilibrium collection promotes balance and calm.',
    balance: '0.041 ETH',
    time: '3 days left',
    avatar: 'image-avatar.png',
    creator: 'Jules Wyvern',
  },
  {
    id: 'm2',
    title: 'Equilibrium #3430',
    image: 'image-equilibrium.jpg',
    description: 'Our Equilibrium collection promotes chaos and stress.',
    balance: '40.041 ETH',
    time: '2 days left',
    avatar: 'image-avatar.png',
    creator: 'Mr. Butterflies & Rainbows',
  },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Preview Card</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-32x32.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&family=Outfit:wght@300;400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <h1>NFT Preview Cards</h1>
        <NftCardList nftCards={DUMMY_NFT_DATA} />
      </main>
    </div>
  );
};

export default Home;
