import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const COLORS = { BgColor: "#BFDBD1", PayStack: "#12AA73" };

const Archieve = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.BgColor }}>
      <View
        style={{
          flexDirection: "row",

          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,

            justifyContent: "center",
            alignItems: "center",
            marginTop: 60,
          }}
        >
          <Image
            source={require("../assets/ArchiveMan.jpg")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginLeft: 20,
            }}
          />
        </View>
        <View
          style={{
            width: 50,
            height: 50,

            justifyContent: "center",
            alignItems: "center",
            marginTop: 60,
            marginLeft: "70%",
          }}
        >
          <Icon name="bell" size={25} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <View>
          <Text style={{ color: "#434545", fontWeight: "bold", fontSize: 14 }}>
            12 JOBS RELEVANT TO YOU
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 40,
            // justifyContent: "space-evenly",
            alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            width: "90%",
            height: 90,
            backgroundColor: "#fff",
            borderRadius: 20,
          }}
          /* Rectangle 9 */
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/canvaLogo.png")}
              style={{ width: 40, height: 40, marginTop: 10, marginLeft: 10 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Junior UX Designer</Text>
              <Text style={{ color: "#434545" }}>Canva</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("JuniorUX");
              }}
              style={{
                marginLeft: 10,
                backgroundColor: "#BFDBD1",
                width: 80,
                height: 27,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#53595F" }}>PayStack</Text>
            </TouchableOpacity>
            <Text style={{ color: "#434545", marginLeft: "40%" }}>
              $40-60k/yearly
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            width: "90%",
            height: 90,
            backgroundColor: "#fff",
            borderRadius: 20,
          }}
          /* Rectangle 9 */
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/canvaLogo.png")}
              style={{ width: 40, height: 40, marginTop: 10, marginLeft: 10 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Junior UX Designer</Text>
              <Text style={{ color: "#434545" }}>Canva</Text>
            </View>
            <View
              style={{
                backgroundColor: "#07864B",
                width: 85,
                height: 25,
                marginLeft: 58,
                borderTopRightRadius: 4,
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Icon name="check-circle" size={15} color="#fff" />
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Applied</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                backgroundColor: "#BFDBD1",
                width: 80,
                height: 27,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#53595F" }}>PayStack</Text>
            </TouchableOpacity>
            <Text style={{ color: "#434545", marginLeft: "40%" }}>
              $40-60k/yearly
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            width: "90%",
            height: 90,
            backgroundColor: "#fff",
            borderRadius: 20,
          }}
          /* Rectangle 9 */
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/canvaLogo.png")}
              style={{ width: 40, height: 40, marginTop: 10, marginLeft: 10 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Junior UX Designer</Text>
              <Text style={{ color: "#434545" }}>Canva</Text>
            </View>
            <View
              style={{
                backgroundColor: "#DAA400",
                width: 110,
                height: 25,
                marginLeft: 33,
                borderTopRightRadius: 4,
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Icon name="info-circle" size={15} color="#fff" />
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Expires Soon
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                backgroundColor: "#BFDBD1",
                width: 80,
                height: 27,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#53595F" }}>PayStack</Text>
            </TouchableOpacity>
            <Text style={{ color: "#434545", marginLeft: "40%" }}>
              $40-60k/yearly
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            width: "90%",
            height: 90,
            backgroundColor: "#fff",
            borderRadius: 20,
          }}
          /* Rectangle 9 */
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/canvaLogo.png")}
              style={{ width: 40, height: 40, marginTop: 10, marginLeft: 10 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Junior UX Designer</Text>
              <Text style={{ color: "#434545" }}>Canva</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                backgroundColor: "#BFDBD1",
                width: 80,
                height: 27,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#53595F" }}>PayStack</Text>
            </TouchableOpacity>
            <Text style={{ color: "#434545", marginLeft: "40%" }}>
              $40-60k/yearly
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            width: "90%",
            height: 90,
            backgroundColor: "#fff",
            borderRadius: 20,
          }}
          /* Rectangle 9 */
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/canvaLogo.png")}
              style={{ width: 40, height: 40, marginTop: 10, marginLeft: 10 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Junior UX Designer</Text>
              <Text style={{ color: "#434545" }}>Canva</Text>
            </View>
            <View
              style={{
                backgroundColor: "#DAA400",
                width: 110,
                height: 25,
                marginLeft: 33,
                borderTopRightRadius: 4,
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Icon name="info-circle" size={15} color="#fff" />
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Expires Soon
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                backgroundColor: "#BFDBD1",
                width: 80,
                height: 27,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#53595F" }}>PayStack</Text>
            </TouchableOpacity>
            <Text style={{ color: "#434545", marginLeft: "40%" }}>
              $40-60k/yearly
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            width: "90%",
            height: 90,
            backgroundColor: "#fff",
            borderRadius: 20,
          }}
          /* Rectangle 9 */
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/canvaLogo.png")}
              style={{ width: 40, height: 40, marginTop: 10, marginLeft: 10 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Junior UX Designer</Text>
              <Text style={{ color: "#434545" }}>Canva</Text>
            </View>
            <View
              style={{
                backgroundColor: "#DAA400",
                width: 110,
                height: 25,
                marginLeft: 33,
                borderTopRightRadius: 4,
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Icon name="info-circle" size={15} color="#fff" />
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Expires Soon
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                backgroundColor: "#BFDBD1",
                width: 80,
                height: 27,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#53595F" }}>PayStack</Text>
            </TouchableOpacity>
            <Text style={{ color: "#434545", marginLeft: "40%" }}>
              $40-60k/yearly
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Archieve;
