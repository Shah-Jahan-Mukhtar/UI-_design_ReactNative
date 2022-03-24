import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

const GetStarted = ({ navigation }) => {
  return (
    <ScrollView>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: 170,
              marginTop: 20,
              height: 70,
            }}
          >
            <Icon name="arrow-up" size={25} color="#fff" />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 30,
                fontWeight: "bold",
                color: "white",
              }}
            >
              SmartRecruiters portal is now Smartr
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: 170,
              marginTop: 20,
              height: 70,
            }}
          >
            <Icon name="sign-in" size={25} color="#fff" />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 30,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Enter the same login info used for your smartProfile
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: 170,
              marginTop: 20,
              height: 70,
            }}
          >
            <Icon name="rotate-right" size={25} color="#fff" />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 25,
                fontWeight: "bold",
                color: "white",
              }}
            >
              If login details were save,you may need to re-save
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              marginTop: 25,
              color: "#fff",
            }}
          >
            Why Smartr? Read More
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
            style={{
              width: 250,
              height: 42,
              backgroundColor: "#BCC6CC",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              borderRadius: 20,
              marginBottom: 30,
            }}
          >
            <Text
              style={{ color: "#135B46", fontSize: 18, fontWeight: "bold" }}
            >
              GET STARTED
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
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
