import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = () => {

    const { wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles;
    return (
        < SafeAreaView style={wrapper} >
            <View style={container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={temp}>6</Text>
                <Text style={feels}>Feels like 5</Text>
                <RowText containerStyles={highLowWrapper} messageOneStyles={highLow} messageTwoStyles={highLow} messageOne={"High: 8"} messageTwo={"Low: 6"} />
                <RowText containerStyles={bodyWrapper} messageOneStyles={description} messageTwoStyles={message} messageOne={"Its sunny"} messageTwo={weatherType['Thunderstorm'].message} />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        flex: 1,
        backgroundColor: "pink"
    },
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    temp: {
        color: "black",
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: "black"
    },
    highLow: {
        color: "black",
        fontSize: 20
    },
    highLowWrapper: {
        flexDirection: "row",
    },
    bodyWrapper: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingLeft: 25,
        marginBottom: 40
    }
    ,
    description: {
        fontSize: 48
    },
    message: {
        fontSize: 30
    }
});
export default CurrentWeather;