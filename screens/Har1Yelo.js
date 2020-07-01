import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';




var currentWeekNumber = require('current-week-number');
var numberWeek;

function Har1Yelo(props) {
    const { navigation } = props

    numberWeek = 2000 + currentWeekNumber()-1;

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.TouchableOpacityStyle2}
                    onPress={() => navigation.navigate('PlantList')}>

                    <Image source={require('../assets/icon1.png')} style={styles.FloatingButtonStyle2} />

                </TouchableOpacity>
            ),
        });
    }, [navigation]);


    return (
        <View style={styles.container}>

            <ImageBackground source={require('../assets/T&G_Tomatoes.jpg')} style={styles.backgroundImage}>


                <ScrollView>


                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('Har1YeloPlant1', { plant1: 1 })}>
                        <Text style={styles.buttonText}>Plant 1 - week {numberWeek}</Text>
                    </TouchableOpacity>

            
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('Har1YeloPlant1', { plant2: 2 })}>
                        <Text style={styles.buttonText}>Plant 2 - Week {numberWeek}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('Har1YeloPlant1', { plant3: 3 })}>
                        <Text style={styles.buttonText}>Plant 3 - week {numberWeek}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('Har1YeloPlant1', { plant4: 4 })}>
                        <Text style={styles.buttonText}>Plant 4 - Week {numberWeek}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('Har1YeloPlant1', { plant5: 5 })}>
                        <Text style={styles.buttonText}>Plant 5 - Week {numberWeek}</Text>
                    </TouchableOpacity>


                </ScrollView>


            </ImageBackground>

        </View>


    )
}


const styles = StyleSheet.create({
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#54B948',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    submitText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
        textAlign: 'center'

    },
    container: {
        flex: 1,
        backgroundColor: '#ebebeb'
    },

    buttonContainer1: {
        backgroundColor: 'rgba(0,0,0,0.65)',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'

    },

    buttonContainer: {
        backgroundColor: 'rgba(0,128,0,0.65)',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        fontSize: 23,
        color: '#ffffff',
        fontWeight: 'bold',
        fontStyle: 'italic'

    },

    backgroundImage: {

        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    TouchableOpacityStyle: {

        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },

    FloatingButtonStyle: {

        resizeMode: 'contain',
        width: 70,
        height: 70,
    },
    backgroundImage: {

        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    TouchableOpacityStyle2: {


        alignItems: 'center',
        justifyContent: 'center',
        right: 5,

    },

    FloatingButtonStyle2: {

        resizeMode: 'contain',
        width: 40,
        height: 40,
    },

    textInputStyle: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: "transparent"


    },
    text2: {
        color: '#0B5345',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 18,
        marginRight: 15,

    },
})
export default Har1Yelo
