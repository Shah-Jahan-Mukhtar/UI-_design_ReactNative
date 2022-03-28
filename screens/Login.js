import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useCallback } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const COLORS = { Primary: "#12AA73", Secondary: "#BFDBD1", login: "#135B46" };

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.Primary,
          TextColor: "#fff",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            marginTop: 50,
            fontWeight: "bold",
          }}
        >
          Smartr
        </Text>
        <View
          style={{
            width: "100%",
            height: 200,
            backgroundColor: COLORS.Secondary,
            borderTopLeftRadius: 150,
            borderTopRightRadius: 150,
            marginTop: "10%",
          }}
        ></View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            backgroundColor: COLORS.Secondary,
            width: "100%",
            height: "100%",
            //   justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Login</Text>
          <Text style={{ marginRight: "50%", marginBottom: 5, marginTop: 18 }}>
            Email
          </Text>

          <TextInput
            style={styles.Input}
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={{ marginRight: "45%", marginBottom: 5, marginTop: 12 }}>
            Password
          </Text>
          <TextInput
            style={styles.Input}
            keyboardType="default"
            value={pswd}
            onChangeText={(text) => setPswd(text)}
            secureTextEntry={true}
          />

          <View style={{ flexDirection: "row", marginTop: 130 }}>
            <Text style={{ color: "black", fontWeight: "bold" }}>
              Create a new-account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={{ color: "#12AA73", fontWeight: "bold" }}>
                Sign-up
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Archieve");
            }}
            style={{
              width: 250,
              height: 42,
              backgroundColor: "#135B46",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              borderRadius: 20,
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Input: {
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 6,
    width: 260,
    height: 45,
    padding: 10,
  },
});

export default Login;
