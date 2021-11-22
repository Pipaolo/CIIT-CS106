import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import HomePage from "../features/home/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomAppBar from "../components/CustomAppBar";
type RootStackParamList = {
  Home: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            header: (props) => <CustomAppBar {...props} />,
          }}
          initialRouteName="Home"
        >
          <RootStack.Screen name="Home" component={HomePage} />
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(App);
