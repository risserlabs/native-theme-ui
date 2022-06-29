import React, { FC } from "react";
import { Text } from "react-native";

export interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = (_props: HomeScreenProps) => (
  <Text>Hello, multiplatform-framework!</Text>
);

export default HomeScreen;
