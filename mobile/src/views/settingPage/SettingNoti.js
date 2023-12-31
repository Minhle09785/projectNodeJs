import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  Platform,
  Alert,
  Switch,
} from "react-native";
import IconAwesome from "react-native-vector-icons/FontAwesome";
<<<<<<< HEAD
=======
import { io } from "socket.io-client";
>>>>>>> c69209fc884e98c40476f8aeba617cce2f4e4b0a

function SettingnNoti({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledApp, setEnableApp] = useState(false);
  const [isEnabledMusic, setEnableMusic] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
<<<<<<< HEAD
=======
const openNotification = ({ message, title, link }) => {
  Alert.alert("Thông báo", `${message}`, [
    {
      text: "Cancel",
      // onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    {
      text: "OK",
      //  onPress: () => console.log("OK Pressed")
    },
  ]);
};
useEffect(() => {
    const socket = io(`http://localhost:5000`, { reconnection: true });
    console.log(`Connecting socket...`);
    socket.emit("add-session","62e659b016876b78f6fdb8f1")
    socket.on("receive", ({ message, title, link }) => {
      // console.log(message)
      openNotification({ message, title, link })
      // setDotShow(true)
      // setRefreshNoti((pre)=>pre+1)
    });
    // console.log(socket);
    return ()=>socket.disconnect()
  }, []);

>>>>>>> c69209fc884e98c40476f8aeba617cce2f4e4b0a
  return (
    <SafeAreaView style={{backgroundColor: "#FFD124", height: "100%"}}>
      <View
        style={{
          height: "12%",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 24,
            width: 50,
            height: 50,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <IconAwesome name="arrow-left" size={26} />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>
          Cài đặt thông báo
        </Text>
      </View>
      <View
        style={{
          height: "88%",
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingHorizontal: 24,
          // justifyContent: "center",
        }}
      >
        <View style={{paddingTop:20}}>
          <View style={{flexDirection: "row", justifyContent:"space-between",paddingVertical:10}}>
            <Text style={{fontSize:18, fontWeight: "600"}}>Thông báo ứng dụng</Text>
            <Switch
              trackColor={{false: "#D9D9D9", true: "#2498DB"}}
              thumbColor={isEnabled ? "#F9F9F9" : "#3A3C3F"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={()=>setIsEnabled(pre=>!pre)}
              value={isEnabled}
            />
          </View>

          <View style={{flexDirection: "row", justifyContent:"space-between",paddingVertical:10}}>
            <Text style={{fontSize:18, fontWeight: "600"}}>Thông báo đơn hàng</Text>
            <Switch
              trackColor={{false: "#D9D9D9", true: "#2498DB"}}
              thumbColor={isEnabledApp ? "#F9F9F9" : "#3A3C3F"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={()=>setEnableApp(pre=>!pre)}
              value={isEnabledApp}
            />
          </View>

          <View style={{flexDirection: "row", justifyContent:"space-between",paddingVertical:10}}>
            <Text style={{fontSize:18, fontWeight: "600"}}>Nhạc chuông thông báo</Text>
            <Switch
              trackColor={{false: "#D9D9D9", true: "#2498DB"}}
              thumbColor={isEnabledMusic ? "#F9F9F9" : "#3A3C3F"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={()=>setEnableMusic(pre=>!pre)}
              value={isEnabledMusic}
            />
          </View>
          
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SettingnNoti;
