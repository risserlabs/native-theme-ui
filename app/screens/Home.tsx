import React, { FC } from 'react';
import { Text } from 'react-native';

export interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = (_props: HomeScreenProps) => (
  <Text>Hello, multiverse!</Text>
);

export default HomeScreen;
