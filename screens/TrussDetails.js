import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground, SafeAreaView, Alert, ToastAndroid, AlertIOS, Platform } from 'react-native'
import { ListItem, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputLayout } from 'rn-textinputlayout';
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import { RaisedTextButton } from 'react-native-material-buttons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Database from '../screens/Database'


const db = new Database();




export default class TrussDetails extends React.Component {



    constructor(props) {
        super(props)

        



        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitTrussNumber = this.onSubmitTrussNumber.bind(this);
        this.onSubmitLastWeek = this.onSubmitLastWeek.bind(this);
        this.onSubmitSetFruits = this.onSubmitSetFruits.bind(this);
        this.onSubmitFlowers = this.onSubmitFlowers.bind(this);
        this.onSubmitPruningNumber = this.onSubmitPruningNumber.bind(this);


        this.trussNumberRef = this.updateRef.bind(this, 'TrussNumber');
        this.lastWeekNumberRef = this.updateRef.bind(this, 'LastWeekNumber');
        this.setFruitsRef = this.updateRef.bind(this, 'SetFruits');
        this.setFlowersRef = this.updateRef.bind(this, 'SetFlowers');
        this.pruningNumberRef = this.updateRef.bind(this, 'PruningNumber');


        this.state = {
            secureTextEntry: true,
            trussID: '',
            plantRow: '',
            plantName: '',
            plantWeek: '',
            trussNumber: '',
            lastWeekNumber: '',
            setFruits: '',
            setFlowers: '',
            pruningNumber: '',


            isLoading: false

        };


    }

    updateTextInput = (text, field) => {
        const state = this.state
        state[field] = text;
        this.setState(state);
    }

    onChangeText(text) {
        ['TrussNumber', 'LastWeekNumber', 'SetFruits', 'SetFlowers', 'PruningNumber']
            .map((name) => ({ name, ref: this[name] }))
            .forEach(({ name, ref }) => {
                if (ref.isFocused()) {
                    this.setState({ [name]: text });
                }
            });
    }
    saveTrussToDb = () => {

        this.setState({
            isLoading: true,
        });

        var that = this;

        const { trussNumber } = this.state;
        const { lastWeekNumber } = this.state;
        const { setFruits } = this.state;
        const { setFlowers } = this.state;
        const { pruningNumber } = this.state;



        let data = {
            trussNumber: this.state.trussNumber,
            lastWeekNumber: this.state.lastWeekNumber,
            setFruits: this.state.setFruits,
            setFlowers: this.state.setFlowers,
            pruningNumber: this.state.pruningNumber,
            plantRow: '365',
            plantName: 'HAR 3 - Flamentyno',
            plantWeek: '2009',


        }

        if (trussNumber) {
            if (lastWeekNumber) {
                if (setFruits) {
                    if (setFlowers) {
                        if (pruningNumber) {

                            db.addTrussDetails(data).then((result) => {
                                console.log(result);
                                this.setState({
                                    isLoading: false,
                                });
                                if (Platform.OS === 'android') {
                                    ToastAndroid.show('Completed!!', ToastAndroid.SHORT)

                                } else {
                                    AlertIOS.alert('Completed!!');

                                }
                                this.props.navigation.navigate('FlamentynoPlant1')

                            }).catch((err) => {
                                console.log(err);
                                this.setState({
                                    isLoading: false,
                                });
                            })

                        } else {
                            alert('Please fill Pruning Number');
                            this.setState({
                                isLoading: false,
                            });
                        }
                    } else {
                        alert('Please fill Set Flowers');
                        this.setState({
                            isLoading: false,
                        });
                    }
                } else {
                    alert('Please fill Set Fruits');
                    this.setState({
                        isLoading: false,
                    });
                }
            } else {
                alert('Please fill Last Week Number');
                this.setState({
                    isLoading: false,
                });
            }
        } else {

            alert('Please fill Truss Number');
            this.setState({
                isLoading: false,
            });
        }
    }

    onSubmitTrussNumber() {
        this.TrussNumber.focus();
    }

    onSubmitLastWeek() {
        this.LastWeekNumber.focus();
    }

    onSubmitSetFruits() {
        this.SetFruits.focus();
    }

    onSubmitFlowers() {
        this.SetFlowers.focus();
    }

    onSubmitPruningNumber() {
        this.PruningNumber.focus();
    }


    onSubmit() {
        let errors = {};

        ['TrussNumber', 'LastWeekNumber', 'SetFruits', 'SetFlowers', 'PruningNumber']
            .forEach((name) => {
                let value = this[name].value();

                if (!value) {
                    errors[name] = 'Should not be empty';
                } else {
                    if (Platform.OS === 'android') {
                        this.savePlantsToDb()
                        ToastAndroid.show('Completed!!', ToastAndroid.SHORT)

                    } else {
                        this.savePlantsToDb()
                        AlertIOS.alert('Completed!!');

                    }
                }
            });

        this.setState({ errors });
    }

    updateRef(name, ref) {
        this[name] = ref;
    }




    render() {

        const { navigate } = this.props.navigation

      
        let { errors = {}, ...data } = this.state;

        let { LeavesPerPlant, FullySetTruss, TrussLength, WeeklyGrowth, FloweringTrussHeight, LeafLength, LeafWidth, StmDiameter, LastWeekStmDiameter, TrussNumber, LastWeekNumber, SetFruits, SetFlowers, PruningNumber } = data;

        if (this.state.isLoading) {
            return (
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }

        return (

            <SafeAreaView style={styles.safeContainer}>

                <View style={styles.container}>

                    <ImageBackground source={require('../assets/T&G_Tomatoes.jpg')} style={styles.backgroundImage}>

                        <ScrollView style={styles.formContainer}
                            keyboardShouldPersistTaps='handled'>

                            <View style={styles.inputLayout}>


                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    labelHeight={60}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    multiline={false}
                                    label='Truss Number'
                                    keyboardType={'numeric'}
                                    multiline={false}
                                    ref={this.trussNumberRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitTrussNumber}
                                    onChangeText={(text) => this.updateTextInput(text, 'trussNumber')}
                                    error={errors.TrussNumber}
                                    value={this.state.trussNumber} />

                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    labelHeight={60}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    multiline={false}
                                    label='Last Week'
                                    keyboardType={'numeric'}
                                    multiline={false}
                                    ref={this.lastWeekNumberRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitLastWeek}
                                    onChangeText={(text) => this.updateTextInput(text, 'lastWeekNumber')}
                                    error={errors.LastWeekNumber}
                                    value={this.state.lastWeekNumber} />

                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    labelHeight={60}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    multiline={false}
                                    label='Set fruits'
                                    keyboardType={'numeric'}
                                    ref={this.setFruitsRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onChangeText={(text) => this.updateTextInput(text, 'setFruits')}
                                    onSubmitEditing={this.onSubmitSetFruits}
                                    error={errors.SetFruits}
                                    value={this.state.setFruits} />


                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    labelHeight={60}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    multiline={false}
                                    label='Flowers'
                                    keyboardType={'numeric'}
                                    ref={this.setFlowersRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitFlowers}
                                    onChangeText={(text) => this.updateTextInput(text, 'setFlowers')}
                                    error={errors.SetFlowers}
                                    value={this.state.setFlowers} />

                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    labelHeight={60}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    multiline={false}
                                    label='Pruning Number'
                                    keyboardType={'numeric'}
                                    ref={this.pruningNumberRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitPruningNumber}
                                    onChangeText={(text) => this.updateTextInput(text, 'pruningNumber')}
                                    error={errors.PruningNumber}
                                    value={this.state.pruningNumber} />

                            </View>

                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={this.saveTrussToDb}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </ImageBackground>
                </View>

            </SafeAreaView>

        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },

    head: {
        height: 50,
        backgroundColor: '#808B97'
    },
    text: {
        margin: 6
    },
    row: {
        flexDirection: 'row'
    },

    textInput: {
        fontSize: 18,
        height: 50
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: 'black',
        fontSize: 18,
        borderWidth: 1
    },

    inputLayout: {
        marginTop: 16,
        margin: 10,
    },
    text: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        backgroundColor: '#ebebeb'
    },
    formContainer: {

        backgroundColor: 'rgba(192,192,192,0.55)',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        height: '100%',
        width: '91%'


    },
    buttonContainer1: {
        backgroundColor: 'rgba(0,0,0,0.65)',
        borderRadius: 5,
        padding: 10,
        margin: 10,
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
    safeContainer: {
        flex: 1,
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

