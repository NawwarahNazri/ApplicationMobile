import { Ionicons } from "@expo/vector-icons"
import { Text } from "react-native";

export const navOptions = (nav) => {
    return {
        headerTintColor: '#cbd5e1',
        headerStyle: {
            backgroundColor: "#0f172a"
        },
        headerLeft: () => (
            <Ionicons
                name ="menu"
                size={32}
                color="white"
                onPress={()=> nav.toggleDrawer()}
                style={{paddingLeft: 15}}
            />
            
        ),
        headerRight: () => (
            <Text style={{color:'white', fontSize: 20, paddingRight: 15}}>Logo</Text>
        ),
    }
}