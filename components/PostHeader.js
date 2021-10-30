import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { POSTS } from "../data/posts";
import { } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'


const PostHeader = ({ props }) => {
    const navigation = useNavigation(props)


    return (

        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
            <FlatList
                data={POSTS}
                renderItem={({ item, index }) => {
                    return <View key={index}>
                        <View style={styles.ppphotoview}>
                            <View style={{ flexDirection: "row", top: 10 }}>
                                <TouchableOpacity>
                                    <Image style={styles.ppphoto} source={{ uri: item.imageavatar }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.ppphototext}>{item.user}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Ionicons name="ellipsis-horizontal" size={32} color="white" />
                            </TouchableOpacity>

                        </View>
                        <View style={styles.alltheground}>
                            <Image resizeMode={"contain"} style={styles.alltheground} source={{ uri: item.imagepost }} />
                        </View>
                        <View style={{ padding: 17, justifyContent: "space-between", alignItems: "baseline", flexDirection: "row" }}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={{ marginRight: 13 }}  >
                                    <Ionicons name="heart-sharp" size={30} color="white" />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigation.navigate("CommentsScreen", {

                                    commentsUser1: item.commentsUser1,
                                    commentsUser2: item.commentsUser2,
                                    //commentsUser2: item.commentsUser2,
                                    commentsDescription1: item.commentsDescription1,
                                    commentsDescription2: item.commentsDescription2,
                                    imageavatar: item.imageavatar,
                                    commentsminutes: item.commentsminutes,
                                    commentslike: item.commentslike,
                                    commentsUserAvatar1: item.commentsUserAvatar1,
                                    commentsUserAvatar2: item.commentsUserAvatar2,
                                    commentslike2: item.commentslike2

                                })}>
                                    <Ionicons name="cloudy" size={30} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 8, transform: [{ rotate: '-45deg' }], bottom: 3 }}>
                                    <Ionicons name="send-sharp" size={30} color="white" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Ionicons name="pricetags" size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity >
                                <Text style={{ color: "white", fontWeight: "600", fontSize: 15, bottom: 10, left: 5 }}>
                                    {item.likes} likes
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontWeight: "600", fontSize: 14, left: 5 }}>{item.user}</Text>
                            </TouchableOpacity>
                            <Text style={{ color: "white" }}>   {item.description}</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("CommentsScreen", {

                                commentsUser1: item.commentsUser1,
                                commentsUser2: item.commentsUser2,
                                //commentsUser2: item.commentsUser2,
                                commentsDescription1: item.commentsDescription1,
                                commentsDescription2: item.commentsDescription2,
                                imageavatar: item.imageavatar,
                                commentsminutes: item.commentsminutes,
                                commentslike: item.commentslike,
                                commentsUserAvatar1: item.commentsUserAvatar1,
                                commentsUserAvatar2: item.commentsUserAvatar2,
                                commentslike2: item.commentslike2

                            })} >
                                <Text style={{ color: "grey", padding: 5 }}>{item.viewTotal}</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontWeight: "600", fontSize: 14, left: 5 }}>{item.commentsUser1}  </Text>
                            </TouchableOpacity>
                            <Text style={{ color: "white" }}> {item.commentsDescription1}</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontWeight: "600", fontSize: 14, left: 5 }}>{item.commentsUser2}  </Text>
                            </TouchableOpacity>
                            <Text style={{ color: "white", flex: 1, }}> {item.commentsDescription2}</Text>
                        </View>

                    </View>




                }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {

    },
    alltheground: {
        width: "100%",
        height: 350,
        bottom: -8,

    },
    ppphotoview: {
        width: "100%",
        height: 40,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "black",




    },
    ppphoto: {
        borderColor: "#fe4164",
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 2,
        marginLeft: 6,
        marginRight: 20,



    },
    ppphototext: {
        fontWeight: "600",
        color: "white",
        padding: 10,
        right: 20





    }
})


export default PostHeader