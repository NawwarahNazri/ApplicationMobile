import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

const ProfileScreen = () => {
    const navigation = useNavigation()  
    return (
    <View>
        <Text>profiles screen</Text>
        <Button title="some profile" onPress={() => navigation.navigate('Profile', {profileId: 1})} />
    </View>
    );
}


export default ProfileScreen;