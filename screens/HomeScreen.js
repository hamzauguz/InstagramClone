import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/home/Header";
import PostHeader from "../components/PostHeader";
import Stories from "../components/Stories";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Header/> */}
            <Header />
            <Stories />
            <PostHeader />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,

    }
})
export default HomeScreen