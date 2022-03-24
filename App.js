import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GetStarted from "./screens/GetStarted";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Archieve from "./screens/Archieve";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <GetStarted />
    // <SignUp />
    <Archieve />
    // <NavigationContainer>
    //   <Stack.Navigator style={{ backgroundColor: "black" }}>
    //     <Stack.Screen name="Get Start" component={GetStarted} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
