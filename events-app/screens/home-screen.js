import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import EventList from "../components/events/event-list";

const HomeScreen = ( ) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000')
            const data = await response.json()
            setData(data)
        }

    return (
        <View style={styles.screen}>
            <Text>This is a home screen</Text>
            <EventList data={data} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
});

export default HomeScreen;
