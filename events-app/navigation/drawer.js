import { DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack, ProfileStack } from './stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, Linking } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{flex: 1, paddingTop: 20, backgroundColor:'#ADD8E6' }}>
            <View style={{justifyContent: 'center', alignItems:'center', height: 140}}>
              <Image
                style={{width: 200, resizeMode: 'contain'}}
                source={require("../assets/images/logos/logo.png")}
                />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Jungkook ipnidaa"
              onPress={()=> Linking.openURL('https://youtu.be/OsP5FF47gQk?si=JQM6RlO0hvXKx8e8')}
              icon ={()=>(
                <Ionicons name="information" size={22} />
              )}
            />
          </SafeAreaView>
        )
      }}
          screenOptions={{headerShown: false}}
    
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{
        title: 'Home',
        drawerIcon: ()=> <Ionicons name="home" size={22} />
      }}/>
      <Drawer.Screen name="ProfileStack" component={ProfileStack} options={{
        title: 'Profile',
        drawerIcon: ()=> <MaterialCommunityIcons name="face-man-profile" size={22} />
      }}/>
    </Drawer.Navigator>
  );
}