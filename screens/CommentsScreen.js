import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";




const CommentsScreen = props => {
    const commentsUser1 = props.route.params.commentsUser1;
    const commentsUser2 = props.route.params.commentsUser2;
    const commentsDescription1 = props.route.params.commentsDescription1
    const commentsDescription2 = props.route.params.commentsDescription2
    const imageavatar = props.route.params.imageavatar
    const commentsminutes = props.route.params.commentsminutes
    const commentslike = props.route.params.commentslike
    const commentsUserAvatar1 = props.route.params.commentsUserAvatar1
    const commentsUserAvatar2 = props.route.params.commentsUserAvatar2
    const commentslike2 = props.route.params.commentslike2


    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //   <Text>Profile Screen {commentsUser1}</Text>
        //   <Text>Profile Screen {commentsUser2}</Text>
        //   <Text>Profile Screen {commentsDescription1}</Text>
        //   <Text>Profile Screen {commentsDescription2}</Text>
        //     <Image style={{ height: 40, width: 40 }} source={{ uri: imageavatar }} />
        // </View>
        <View>
            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: "row", width: "75%", }}>
                    <TouchableOpacity>
                        <Image source={{ uri: commentsUserAvatar1 }} style={styles.avatar} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ right: -5, fontWeight: "600" }}>{commentsUser1} </Text>
                    </TouchableOpacity>
                    <Text style={{ right: -5 }}>{commentsDescription1}</Text>
                </View>
                <View>
                    <Ionicons style={{ left: 345, bottom: 40 }} name="heart-sharp" size={20} color="gray" />
                </View>
                <View style={{ flexDirection: "row", left: 80, bottom: 40 }}>
                    <TouchableOpacity>

                        <Text style={styles.commentweight}>{commentsminutes}     </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.commentweight}>{commentslike}     </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.commentweight}> Reply</Text>
                    </TouchableOpacity>



                </View>
            </View>

            <View style={{ padding: 10, bottom: 30 }}>
                <View style={{ flexDirection: "row", width: "75%" }}>
                    <TouchableOpacity>
                        <Image source={{ uri: commentsUserAvatar2 }} style={styles.avatar} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ right: -5, fontWeight: "600" }}>{commentsUser2} </Text>
                    </TouchableOpacity>
                    <Text style={{ right: -5 }}>{commentsDescription2}</Text>
                </View>
                <View>

                    <Ionicons style={{ left: 345, bottom: 40 }} name="heart-sharp" size={20} color="gray" />

                </View>
                <View style={{ flexDirection: "row", left: 80, bottom: 40 }}>
                    <TouchableOpacity>

                        <Text style={styles.commentweight}>{commentsminutes}     </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.commentweight}>{commentslike2}     </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.commentweight}> Reply</Text>
                    </TouchableOpacity>


                </View>
            </View>


        </View>





    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "#fe4164",
    },
    userbold: {
        fontWeight: "600",
        bottom: 10,

    },
    commentweight: {
        right: 16,
        fontWeight: "400",
        color: "gray",
        fontSize: 15
    }

})
export default CommentsScreen;