import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image, FlatList,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pick from "./Pick";

import * as Speech from 'expo-speech'

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { color } from "react-native-reanimated";
//import { FlatList } from "react-native-gesture-handler";

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

let Post = require("./PostPick.json");

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
        };
    }

    componentDidMount() {
        this._loadFontsAsync();

    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts)
        this.setState({ fontsLoaded: true })
    }

    keyExtractor = (item, index) => index.toString();


    renderItem = ({ item: myPick }) => {
        return <Pick Post={myPick} navigation={this.props.navigation} />;
    }
   
render() {
        if (!this.state.fontsLoaded) {
            // !true = fale
            return <AppLoading />;
        }
        else {

            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image
                                source={require("../assets/logo1.png")}
                                style={styles.iconImage} />
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}> SPECRAGRAM </Text>
                        </View>
                    </View>

                    <View style={styles.PostContainer}>
                        <ScrollView>
                            <Image
                                source={require('../assets/image_1.jpg')}
                                style={styles.image}
                            />
                            <View style={styles.dataContainer}>
                                <View style={styles.titleTextContainer}>
                                    <Text style={styles.PostAuthorText}>
                                        {this.props.route.params.Post.author}
                                    </Text>
                                </View>
                                <View style={styles.iconContainer}>
                                    <TouchableOpacity>
                                        <Ionicons name={this.state.speakerIcon}
                                            size={RFValue(30)}
                                            color={this.state.speakerColor}
                                            style={{ margin: RFValue(15) }} />

                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.PostTextContainer}>
                                <Text style={styles.PostText}>
                                    {this.props.route.params.Post.Post}
                                </Text>
                                <Text>
                                    Moral - {this.props.route.params.Post.moral}
                                </Text>
                            </View>
                            <View style={styles.actionContainer}>
                                <View>
                                    <Text>100K</Text>
                                    <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />


                                </View>

                            </View>

                        </ScrollView>
                    </View>


                </View>


            );
        }
    }
}


