import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Database from '../screens/Database'
import AsyncStorage from '@react-native-community/async-storage';



const db = new Database();
var currentWeekNumber = require('current-week-number');
var numberWeek;
var myBoolen;

export default class Har1Annasum extends Component {


    constructor(props) {
        super(props)


        this.state = {

            dataSet1: 0,
            dataSet2: false,
            dataSet3: false,
            dataSet4: false,
            dataSet5: false,
            week:''


        }

    }


    componentDidMount() {


        numberWeek = 2100 + currentWeekNumber(new Date())-1;

        console.log("New Week number : "+numberWeek);

        this.setState({ week : numberWeek});

        this.focusListener = this.props.navigation.addListener('focus', () => {
            
            //this.callQuery()
        });

        //this.callQuery()
    }


    async setItem(myKey, value) {
        try {
            return await AsyncStorage.setItem(myKey, JSON.stringify(value));
        } catch (error) {
        }
    }
    

    callQuery= () => {

        setTimeout(() => {
            db.plantsByWeekNumberAndName("1", numberWeek, 'HAR 1 - Annasun').then((data) => {
                console.log(data);
                console.log("Calling database")
                this.setState({
                    dataSet1: 1,

                });

                this.setItem('har1Annasum1', 1 )



            }).catch((err) => {
                console.log(err);
                this.setState({
                    dataSet1: 0,

                });
            })

        }, 1000);

        setTimeout(() => {
            db.plantsByWeekNumberAndName("2", numberWeek, 'HAR 1 - Annasun').then((data) => {
                console.log(data);
                console.log("Calling database")
                this.setState({
                    dataSet2: 1,
                    

                });

                this.setItem('har1Annasum2', 2 )



            }).catch((err) => {
                console.log(err);
                this.setState({
                    dataSet2: 0,

                });
            })

        }, 3000);

        setTimeout(() => {
            db.plantsByWeekNumberAndName("3", numberWeek, 'HAR 1 - Annasun').then((data) => {
                console.log(data);
                console.log("Calling database")
                this.setState({
                    dataSet3: 1,

                });

                this.setItem('har1Annasum3', 3 )



            }).catch((err) => {
                console.log(err);
                this.setState({
                    dataSet3: 0,

                });
            })

        }, 4000);

        setTimeout(() => {
            db.plantsByWeekNumberAndName("4", numberWeek, 'HAR 1 - Annasun').then((data) => {
                console.log(data);
                console.log("Calling database")
                this.setState({
                    dataSet4: 1,

                });

                this.setItem('har1Annasum4', 4)


            }).catch((err) => {
                console.log(err);
                this.setState({
                    dataSet4: 0,

                });
            })

        }, 5000);

        setTimeout(() => {
            db.plantsByWeekNumberAndName("5", numberWeek, 'HAR 1 - Annasun').then((data) => {
                console.log(data);
                console.log("Calling database")
                this.setState({
                    dataSet5: 1,

                });

                this.setItem('har1Annasum5', 5)


            }).catch((err) => {
                console.log(err);
                this.setState({
                    dataSet5: 0,

                });
            })

        }, 6000);



    }

    


    render() {
        return (
            <View style={styles.container}>

                <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>


                    <ScrollView>


                        {this.state.dataSet1 !== 1 ? (
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => this.props.navigation.navigate('Har1AnnasumPlant1', { plant1: 1 })}>
                                <Text style={styles.buttonText}>Plant 1 - week {this.state.week}</Text>
                            </TouchableOpacity>) :

                            <TouchableOpacity
                                style={styles.buttonContainer1}
                                onPress={() => this.props.navigation.navigate('Har1AnnasumPlant1', { plant1: 1 })}>
                                <Text style={styles.buttonText}>Plant 1 - week {this.state.week}</Text>
                                <Image source={require('../assets/check.png')} style={styles.FloatingButtonStyle2} />

                            </TouchableOpacity>}


                        {this.state.dataSet2 !== 1 ? (
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => this.props.navigation.navigate('Har1AnnasumPlant1', { plant2: 2 })}>
                                <Text style={styles.buttonText}>Plant 2 - Week {this.state.week}</Text>
                            </TouchableOpacity>) :

                            <TouchableOpacity
                                style={styles.buttonContainer1}
                                onPress={() => this.props.navigation.navigate('Har1AnnasumPlant1', { plant2: 2 })}>
                                <Text style={styles.buttonText}>Plant 2 - Week {this.state.week}</Text>
                                <Image source={require('../assets/check.png')} style={styles.FloatingButtonStyle2} />

                            </TouchableOpacity>}



                        {this.state.dataSet3 !== 1 ? (
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => this.props.navigation.navigate('Har1AnnasumPlant1', { plant3: 3 })}>
                                <Text style={styles.buttonText}>Plant 3 - week {this.state.week}</Text>
                            </TouchableOpacity>) :

                            <TouchableOpacity
                                style={styles.buttonContainer1}
                                onPress={() => this.props.navigation.navigate('Har1AnnasumPlant1', { plant3: 3 })}>
                                <Text style={styles.buttonText}>Plant 3 - week {this.state.week}</Text>
                                <Image source={require('../assets/check.png')} style={styles.FloatingButtonStyle2} />

                            </TouchableOpacity>}



                        {this.state.dataSet4 !== 1 ? (
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => this.props.navigation.navigate('Har1AnnasumPlant1', { plant4: 4 })}>
                                <Text style={styles.buttonText}>Plant 4 - Week {this.state.week}</Text>
                            </TouchableOpacity>) :

                            <TouchableOpacity
                                style={styles.buttonContainer1}
                                onPress={() => this.props.navigation.navigate('Har1AnnasumPlant1', { plant4: 4 })}>
                                <Text style={styles.buttonText}>Plant 4 - Week {this.state.week}</Text>
                                <Image source={require('../assets/check.png')} style={styles.FloatingButtonStyle2} />

                            </TouchableOpacity>}


                        {this.state.dataSet5 !== 1 ? (
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => this.props.navigation.navigate('Har1AnnasumPlant1', { plant5: 5 })}>
                                <Text style={styles.buttonText}>Plant 5 - Week {this.state.week}</Text>
                            </TouchableOpacity>) :

                            <TouchableOpacity
                                style={styles.buttonContainer1}
                                onPress={() => this.props.navigation.navigate('Har1AnnasumPlant1', { plant5: 5 })}>
                                <Text style={styles.buttonText}>Plant 5 - Week {this.state.week}</Text>
                                <Image source={require('../assets/check.png')} style={styles.FloatingButtonStyle2} />

                            </TouchableOpacity>}



                    </ScrollView>


                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ebebeb'
    },

    buttonContainer1: {
        backgroundColor: 'rgba(44, 144, 61, 0.68)',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'


    },

    buttonContainer: {
        backgroundColor: '#D3D3D3',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    },


    buttonText: {
        fontSize: 19,
        color: '#000000',
        fontWeight: 'bold',

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
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
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
        marginLeft: 15
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
});


