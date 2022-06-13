import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import HomeScreen from '-/screens/Home';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Multiplatform Framework</title>
      <meta name="description" content="write once, render anywhere" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeScreen />
  </>
);

export default Home;
