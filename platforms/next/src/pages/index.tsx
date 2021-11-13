import type { NextPage } from 'next';
import Head from 'next/head';
import HomeScreen from 'app/screens/Home';
import React from 'react';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Multiverse</title>
      <meta name="description" content="write once, render anywhere" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeScreen />
  </>
);

export default Home;
