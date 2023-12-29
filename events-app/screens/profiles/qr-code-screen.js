import { View, Text , StyleSheet} from "react-native";

const QrCodeScreen = () => {
  return (
    <View style={StyleSheet.screen}>
        <Text>QR Code scan</Text>
    </View>
  );
}

const style = StyleSheet.create({
    screen: {
        padding: 20,
    },
})

export default QrCodeScreen;