import { SafeAreaView, Text, StyleSheet, ImageBackground, View } from "react-native";
import logoCity from "../../assets/images/city.jpg"

import IconText from "../components/IconText";

const City = () => {

    const { container, cityName, cityText, countryName, populationWrapper, populationText, rowLayout, imageLayout, riseSetWrapper, riseSetText } = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground style={imageLayout} source={logoCity}>
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>UK</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText iconName={"user"} iconColor={"red"} bodyText={"8000"} bodyTextStyle={populationText} />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText iconName={"sunrise"} iconColor={"white"} bodyText={"10:46:58am"} bodyTextStyle={riseSetText} />
                    <IconText iconName={"sunset"} iconColor={"white"} bodyText={"17:28:15pm"} bodyTextStyle={riseSetText} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    imageLayout: {
        flex: 1,

    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold',
    },
    riseSetWrapper: {
        justifyContent: "space-around",
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    rowLayout: {
        flexDirection: "row",
        alignItems: "center",
    }
})
export default City;