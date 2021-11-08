import Head from 'next/head';
import React from 'react';
import type { NextPage } from 'next';
import App from '../App';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Hello, multiverse!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  );
};

export default Home;
