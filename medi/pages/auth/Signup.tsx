import React from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    ImageBackground,
    Dimensions,
    StatusBar,
    SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomSubmitButton from "@/components/authInputs/SubmitButton";
import InputField from "@/components/authInputs/AuthInput";
import { Link } from "expo-router";

const { height, width } = Dimensions.get('window');

export const Signup = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handlePress = () => {
        navigation.navigate('Signup');
    };

    return (
        <View style={styles.container}>
            {/* Transparent Status Bar */}
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

            {/* Fixed background image */}
            <ImageBackground
                source={require('../../assets/images/signup-bg.png')}
                style={styles.background}
                resizeMode="cover"
            >
                {/* Safe Area for proper spacing */}
                <SafeAreaView style={styles.safeArea}>
                    <ScrollView
                        style={styles.scrollView}
                        contentContainerStyle={styles.scrollContent}
                    >
                        <Text style={styles.header}>Signup page</Text>
                        {/* You can place other components here */}
                        <CustomSubmitButton buttonText="Sign Up" onPress={handlePress} />
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // The background is fixed in place and covers the entire screen
    background: {
        position: 'absolute',  // Fix the background image in place
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,  
    },
    safeArea: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
        width: '100%',
    },
    scrollView: {
        flex: 1,
        width: '100%', // Ensure ScrollView takes full width
    },
    scrollContent: {
        paddingBottom: 20, // Optional, to add extra space at the bottom
    },
    header: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 100, // Adjust the padding to move the content down if needed
    },
    logoName: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
    },
    logoWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingTop: 25,
    },
    inputWrapper: {
        paddingTop: 305,
        gap: 15,
    },
    submitwrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 5,
    },
    link: {
        color: '#09363B',
        fontSize: 15,
        fontWeight: 'bold',
    },
    wrapper: {
        paddingHorizontal: 25,
        gap: 10,
    },
    wrap: {
        alignItems: 'flex-end',
    },
});
