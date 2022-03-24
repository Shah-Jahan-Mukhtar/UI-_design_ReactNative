import { View, Text, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const COLORS = { BgColor: "#BFDBD1", PayStack: "#12AA73" };

const Archieve = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.BgColor }}>
      <View
        style={{
          flexDirection: "row",
          //   justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/ArchiveMan.jpg")}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            marginTop: 60,
            marginLeft: 20,
          }}
        />
        <Icon name="bell" size={25} />
      </View>

      <Text>Archieve</Text>
    </View>
  );
};

export default Archieve;
