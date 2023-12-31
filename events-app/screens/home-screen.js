import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import EventList from "../components/events/event-list";
import { useNavigation } from "@react-navigation/native";
import DummyList from "../components/events/event-list";

const HomeScreen = ( ) => {
    const [data, setData] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
            const response = await fetch('/api/v1/projects')
            const data = await response.json()
            setData(data)

            console.log(data)
        }

    return (
        <View style={styles.screen}>
            <Text>This is a home screen</Text>
            {/* <DummyList />  */}
            <EventList data={data}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
});

export default HomeScreen;
