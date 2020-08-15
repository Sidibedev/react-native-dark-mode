import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

const Stack = createStackNavigator();

function screen1({ navigation }) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: colors.text }}>I am the screen 1</Text>
      <Button
        title="Go to Screen 2"
        color={colors.primary}
        onPress={() => navigation.navigate("screen2")}
      />
    </View>
  );
}

function screen2() {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: colors.text }}>I am the screen 2</Text>
    </View>
  );
}

export default function App() {
  const scheme = useColorScheme();
  const MyDarkTheme = {
    dark: true,
    colors: {
      primary: "#9933FF",
      background: "#000023",
      card: "#000028",
      text: "#ffffff",
      border: "#000028",
      notification: "#9933FF",
    },
  };
  return (
    <AppearanceProvider>
      <NavigationContainer
        theme={scheme === "dark" ? MyDarkTheme : DefaultTheme}
      >
        <Stack.Navigator mode="modal">
          <Stack.Screen name="screen1" component={screen1} />
          <Stack.Screen name="screen2" component={screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
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
