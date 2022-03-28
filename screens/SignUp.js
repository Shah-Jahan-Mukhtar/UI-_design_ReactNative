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

const SignUp = ({ navigation }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
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
            height: 100,
            backgroundColor: COLORS.Secondary,
            borderTopLeftRadius: 150,
            borderTopRightRadius: 150,
            marginTop: "10%",
          }}
        ></View>
        <View
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            backgroundColor: COLORS.Secondary,
            width: "100%",
            height: "100%",
            //   justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Let's get you started
          </Text>
          <Text
            style={{
              marginRight: "42%",
              marginBottom: 5,
              marginTop: 2,
              color: "#29465B",
            }}
          >
            First name
          </Text>

          <TextInput
            style={styles.Input}
            keyboardType="email-address"
            value={fname}
            onChangeText={(text) => setFname(text)}
          />
          <Text
            style={{
              marginRight: "45%",
              marginBottom: 5,
              marginTop: 2,
              color: "#29465B",
            }}
          >
            Last name
          </Text>
          <TextInput
            style={styles.Input}
            keyboardType="default"
            value={lname}
            onChangeText={(text) => setLname(text)}
          />
          <Text
            style={{
              marginRight: "50%",
              marginBottom: 5,
              marginTop: 2,
              color: "#29465B",
            }}
          >
            Email
          </Text>

          <TextInput
            style={styles.Input}
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text
            style={{
              marginRight: "45%",
              marginBottom: 5,
              marginTop: 2,
              color: "#29465B",
            }}
          >
            Password
          </Text>
          <TextInput
            style={styles.Input}
            keyboardType="default"
            value={pswd}
            onChangeText={(text) => setPswd(text)}
            secureTextEntry={true}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "60%",
            }}
          >
            <Icon name="info-circle" size={25} />
            <Text style={{ marginLeft: 15 }}>
              By signing up,you will declare that you read and understand the{" "}
              <Text style={{ color: "#12AA73" }}>Smart Servicee Agreement</Text>
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 85 }}>
            <Text style={{ color: "black", fontWeight: "bold" }}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={{ color: "#12AA73", fontWeight: "bold" }}>
                <Text> </Text>Sign-In
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: 250,
              height: 42,
              backgroundColor: "#135B46",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              borderRadius: 20,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              GET STARTED
            </Text>
          </TouchableOpacity>
        </View>
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

export default SignUp;
