import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";

const Header = () => {
    return (

        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require("../../assets/header-logo.png")} />
            </TouchableOpacity>


            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={{
                        uri: "https://www.pngkit.com/png/full/115-1152543_white-plus-sign-png-plus-white-icon-png.png"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={{
                        uri: "https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-health-icon-png-image_4295737.jpg"
                    }} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.icon2} source={{
                        uri: "https://image.flaticon.com/icons/png/512/2190/2190414.png"
                    }} />
                    <View style={styles.unbreadBadge}>
                        <Text style={styles.unreadBadgeText}>
                            11
                        </Text>

                    </View>

                </TouchableOpacity>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 50,
        resizeMode: "contain"
    },
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20
    },
    iconsContainer: {
        alignItems: "center",
        flexDirection: "row"
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: "contain",
        backgroundColor: "white"
    },
    icon2: {
        width: 40,
        height: 40,
        marginLeft: 10,
        resizeMode: "contain",
        backgroundColor: "white",
        top: 10

    },
    unbreadBadge: {
        backgroundColor: "#FF3250",
        borderRadius: 10,
        width: 27,
        height: 20,
        left: 30,
        bottom: 35
    },
    unreadBadgeText: {
        textAlign: "center",
        color: "white",
        fontSize: 15,
        fontWeight: "600"

    }

})

export default Header