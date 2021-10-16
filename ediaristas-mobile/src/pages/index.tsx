import React from "react";
import { Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "ui/router/Router";

type NavigationProp = StackNavigationProp<RootStackParamList, "Index">;

interface IndexProps {
  navigation: NavigationProp;
}

const Index: React.FC<IndexProps> = () => {
  return (
    <View>
      <Text>Index</Text>
    </View>
  );
};

export default Index;
