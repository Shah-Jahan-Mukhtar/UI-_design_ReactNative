import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const COLORS = {
  flexColor: "#BFDBD1",
  viewColor: "#fff",
  ButtonColor: "#135B46",
};

const JuniorUX = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.flexColor }}>
      <ScrollView>
        <View
          style={{
            width: "100%",
            height: 229,
            backgroundColor: COLORS.viewColor,
            marginBottom: 5,
          }}
        >
          <View style={{ marginLeft: 20, marginTop: 80 }}>
            <Image
              source={require("../assets/canvaLogo.png")}
              style={{ width: 60, height: 60 }}
            />

            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}>
              Junior UX Designer
            </Text>
            <Text style={{ color: "#434545", fontWeight: "bold" }}>Canva</Text>
            <Text style={{ color: "#434545" }}>Posted on 3 March</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 153,
            backgroundColor: COLORS.viewColor,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <View>
            <Text style={{ color: "#434545", fontWeight: "bold" }}>
              APPLY BEFORE
            </Text>

            <Text> 3 June,2022</Text>
            <Text></Text>
            <Text></Text>

            <Text style={{ color: "#434545", fontWeight: "bold" }}>
              SALARY RANGE
            </Text>
            <Text>40k-60k/yearly</Text>
          </View>
          <View style={{ marginLeft: 50 }}>
            <Text style={{ color: "#434545", fontWeight: "bold" }}>
              JOB NATURE
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#BFDBD1",
                width: 80,
                height: 25,
                justifyContent: "center",
                alignItems: "center",

                borderRadius: 10,
              }}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>
                Full-time
              </Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>

            <Text style={{ color: "#434545", fontWeight: "bold" }}>
              JOB LOCATION
            </Text>
            <Text>Work from anywhere</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 238,
            backgroundColor: COLORS.viewColor,
            marginBottom: 5,
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              // alignItems: "center",
              width: 320,
              height: 126,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#434545", fontWeight: "bold" }}>
              JOB DESCRIPTION
            </Text>
            <Text style={{ marginTop: 20 }}>
              Can you bring creative human-centered ideas to life and make great
              things happen beyond what meets the eye? We believe in teamwork,
              fun, complex projects, diverse perspectives, and simple solutions.
              How about you? We're looking for a like-minded
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: "-62%",
              // justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Text style={{ fontSize: 13, color: "#0FAC74", marginRight: 7 }}>
              All Relevance
            </Text>
            <Icon name="caret-down" size={25} color="#12AA73" />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 237,
            backgroundColor: COLORS.viewColor,
            marginBottom: 5,
            //   justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              // alignItems: "center",
              width: 320,
              height: 126,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#434545", fontWeight: "bold" }}>
              ROLES AND RESPONSIBILTIES
            </Text>
            <Text style={{ marginTop: 20 }}>
              Can you bring creative human-centered ideas to life and make great
              things happen beyond what meets the eye? We believe in teamwork,
              fun, complex projects, diverse perspectives, and simple solutions.
              How about you? We're looking for a like-minded
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          marginTop: "175%",
          marginLeft: 55,
        }}
      >
        <TouchableOpacity
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
            APPLY NOW
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JuniorUX;
