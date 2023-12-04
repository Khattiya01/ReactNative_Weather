import { SafeAreaView, Text, StyleSheet, View, FlatList, StatusBar, ImageBackground } from "react-native";
import Sky from "../../assets/images/sky.jpg"
import ListItem from "../components/ListItem";

const UpcomingWeather = () => {

    const DATA = [
        {
            id: 1,
            dt_txt: "2023-02-18 12:00:00",
            main: {
                temp_max: 8.55,
                temp_min: 7.55
            },
            weather: [
                {
                    main: "Clear"
                }
            ]
        },
        {
            id: 2,
            dt_txt: "2023-02-18 12:00:00",
            main: {
                temp_max: 8.55,
                temp_min: 7.55
            },
            weather: [
                {
                    main: "Clear"
                }
            ]
        },
        {
            id: 3,
            dt_txt: "2023-02-18 12:00:00",
            main: {
                temp_max: 8.55,
                temp_min: 7.55
            },
            weather: [
                {
                    main: "Clear"
                }
            ]
        },
    ];

    const Empty = () => {
        return (
            <View>
                <Text> Empty
                </Text>
            </View>
        )
    }

    const { container, Image } = styles;
    const renderItem = ({ item }) => (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
    )
    return (
        <SafeAreaView style={container}>
            <Text>
                Upcoming Weather
            </Text>
            <ImageBackground style={Image} source={Sky}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#5194da"
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink',
    },
    title: {
        fontSize: 32,
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    Image: {
        width: "100%",
        height: "100%",
    }
});
export default UpcomingWeather;