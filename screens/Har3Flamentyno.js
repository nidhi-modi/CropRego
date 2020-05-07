import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';



function Har3Flamentyno(props) {

    const { navigation } = props

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

                <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle} >

                    <Image source={require('../assets/green_floating_button.png')}

                        style={styles.FloatingButtonStyle} />

                </TouchableOpacity>

                <ScrollView>


                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('FlamentynoPlant1')}>
                        <Text style={styles.buttonText}>Plant 1 - week 2009</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('Har3Flamentyno')}>
                        <Text style={styles.buttonText}>Plant 2 - Week 2009</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('Har3Flamentyno')}>
                        <Text style={styles.buttonText}>Plant 3 - week 2009</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('Har3Flamentyno')}>
                        <Text style={styles.buttonText}>Plant 4 - Week 2009</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('Har3Flamentyno')}>
                        <Text style={styles.buttonText}>Plant 5 - Week 2009</Text>
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
})

export default Har3Flamentyno
