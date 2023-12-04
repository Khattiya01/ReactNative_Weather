import { Text, View,StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";


const IconText = (props) => {
    const { iconName, iconColor, bodyText, bodyTextStyle} = props;
    const { textTheme, container } = styles;
    return (
        <View style={container}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[textTheme, bodyTextStyle]}>{bodyText}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: "bold",
    },
    container: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default IconText;