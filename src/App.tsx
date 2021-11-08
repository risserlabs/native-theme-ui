import React, { FC } from 'react';
import { Text } from 'react-native';

export interface AppProps {}

const App: FC<AppProps> = (_props: AppProps) => <Text>Hello, multiverse!</Text>;

export default App;
