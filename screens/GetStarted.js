import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

const GetStarted = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 2 }}
      colors={["#12AA73", "#135B46"]}
      style={{ flex: 1 }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 30, color: "white", padding: 30 }}>
          Smartr
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          borderColor: "black",
          // borderWidth: 1,
          height: 200,
        }}
      >
        <Image
          style={{
            width: "60%",
            height: "100%",
            borderRadius: 200,
            // borderWidth: 1,
            borderColor: "black",
          }}
          source={require("../assets/LoginMan.png")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Fresh look,same login
        </Text>
        <View>
          <Icon name="arrow" size={25} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
export default GetStarted;
