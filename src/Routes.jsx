import React from "react";
import Center from "./Center";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";

const Stack = createStackNavigator();

function Login({ navigation }) {
  return (
    <Center>
      <Text>I'm the Login page</Text>
      <Button
        title="go to reg"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </Center>
  );
}
function Register({ navigation }) {
  return (
    <Center>
      <Text>I'm the Register page</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </Center>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
