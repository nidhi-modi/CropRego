import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground, SafeAreaView, Alert, ToastAndroid, AlertIOS, Platform, AsyncStorage } from 'react-native'
import { ListItem, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputLayout } from 'rn-textinputlayout';


import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Database from '../screens/Database'


const db = new Database();
let abc;
let numberWeek;
let no1;
var currentWeekNumber = require('current-week-number');





export default class TrussDetails extends React.Component {



    constructor(props) {
        super(props)

        if (this.props.route.params.num !== 'undefined') {
            no1 = this.props.route.params.num1;
            console.log(JSON.stringify(no1));
        } else {

        }

        if (this.props.route.params.num2 !== 'undefined') {
            const no2 = this.props.route.params.num2;
            console.log(JSON.stringify(no2));
        }else{

        }

        if (this.props.route.params.num3 !== 'undefined') {
            const no3 = this.props.route.params.num3;
            console.log(JSON.stringify(no3));
        }else{
            
        }

        if (this.props.route.params.num !== 'undefined') {
            const no4 = this.props.route.params.num4;
            console.log(JSON.stringify(no4));
        } else {

        }

        if (this.props.route.params.num2 !== 'undefined') {
            const no5 = this.props.route.params.num5;
            console.log(JSON.stringify(no5));
        }else{

        }

        if (this.props.route.params.num3 !== 'undefined') {
            const no6 = this.props.route.params.num6;
            console.log(JSON.stringify(no6));
        }else{
            
        }

        
        if (this.props.route.params.num3 !== 'undefined') {
            const no7 = this.props.route.params.num7;
            console.log(JSON.stringify(no7));
        }else{
            
        }

        if (this.props.route.params.num !== 'undefined') {
            const no8 = this.props.route.params.num8;
            console.log(JSON.stringify(no8));
        } else {

        }

        if (this.props.route.params.num2 !== 'undefined') {
            const no9 = this.props.route.params.num9;
            console.log(JSON.stringify(no9));
        }else{

        }

        if (this.props.route.params.num3 !== 'undefined') {
            const no10 = this.props.route.params.num10;
            console.log(JSON.stringify(no10));
        }else{
            
        }



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

            number: '',
            lastNumber: '',
            fruits: '',
            flowers: '',
            pruning: '',


            isLoading: false,
            isDataSend: false,
            show: false,
            weekNumber: '',
            truss: {},

        };


    }


    setAsyncValues(text1, text2) {

        try {
            AsyncStorage.setItem('trussNumber', text1);
            AsyncStorage.setItem('lastWeekNumber', text2);
        } catch (error) {
        }

    }

    getAsysncValues() {




        try {
            AsyncStorage.getItem('trussNumber').then((text1Value) => {
                this.setState({ number: JSON.parse(text1Value) });
                console.log(this.state.number)
            }).done();
        } catch (error) {
        }
        try {
            AsyncStorage.getItem('lastWeekNumber').then((text2Value) => {
                this.setState({ lastNumber: JSON.parse(text2Value) });
                console.log(this.state.lastNumber)
            }).done();
        } catch (error) {
        }
        try {
            AsyncStorage.getItem('setFruits').then((text3Value) => {
                this.setState({ fruits: JSON.parse(text3Value) });
                console.log(this.state.fruits)
            }).done();
        } catch (error) {
        }
        try {
            AsyncStorage.getItem('setFlowers').then((text4Value) => {
                this.setState({ flowers: JSON.parse(text4Value) });
                console.log(this.state.flowers)
            }).done();
        } catch (error) {
        } try {
            AsyncStorage.getItem('pruningNumber').then((text5Value) => {
                this.setState({ pruning: JSON.parse(text5Value) });
                console.log(this.state.pruning)
            }).done();
        } catch (error) {
        }


    }


    async setItem(myKey, value) {
        try {
            this.setState({
                isDataSend: false,

            });
            abc = '0';

            return await AsyncStorage.setItem(myKey, JSON.stringify(value));
        } catch (error) {
            // console.error('AsyncStorage#setItem error: ' + error.message);
        }
    }
    async getItem(myKey) {
        this.setState({
            isDataSend: false,

        });
        abc = '0';
        return await AsyncStorage.getItem(myKey)
            .then((result) => {
                if (result != null) {
                    try {
                        result = JSON.parse(result);

                        this.setState({ myKey: result });
                        this.setState({ leaves: result.leavesPerPlant });
                        console.log("Getting data from Async Storage " + myKey, result);
                        console.log("gfgfgfg", this.state.lea);


                    } catch (e) {
                        // console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
                    }
                } else {

                    //console.log("Async key is null");

                }
                return result;
            });

    }
    async removeItem(myKey) {

        return await AsyncStorage.removeItem(myKey);
    }

    componentDidMount() {

        numberWeek = 2100 + currentWeekNumber()-2;


        console.log("Count : ", abc);
        console.log("show : ", this.state.show);
        this.ShowHideComponent();
        /*this.ShowHideFullySetComponent();
        this.ShowHideTrussLengthComponent();
        this.ShowHideGrowthComponent();
        this.ShowHideTrussHeightComponent();
        this.ShowHideWidthComponent();
        this.ShowHideLengthComponent();
        this.ShowHideStmDiaComponent();
        this.ShowHideLastWeekStmDiaComponent();*/

        if (abc === '0' || abc === null) {
            this.getAsysncValues();
            this.setState({
                isDataSend: true,

            });

        } else if (abc === '1' && abc !== null) {

            AsyncStorage.clear();
            numberWeek = numberWeek+1;
            this.setState({ weekNumber: numberWeek.toString()});
            console.log("Week Number: ", numberWeek);
            

            this.setState({
                isDataSend: false,

            });



        } else {

            AsyncStorage.clear();
            numberWeek = numberWeek+1;
            console.log("Week Number: ", numberWeek);
            this.setState({ weekNumber: numberWeek.toString()});
            
            this.setState({
                isDataSend: false,

            });


        }

        if(no1 !== 'undefined'){
        db.trussById('HAR 3 - Flamentyno',numberWeek,no1).then((data) => {
            console.log(data);
            console.log("Calling database")
            truss = data;
            this.setState({
                truss,
            });
            console.log("Truss Details", this.state.truss);
        }).catch((err) => {
            console.log(err);
           
        })
    }else{


    }


    }

    ShowHideComponent = () => {
        if (abc === '1' && abc !== null) {
            this.setState({ show: false });
        } else if (abc === '0' || abc === null) {
            this.setState({ show: true });
        } else {
            this.setState({ show: false });

        }
    };




    updateTextInput = (text, field) => {
        this.setItem(field, text)
        this.setState({
            isDataSend: false,

        });
        abc = '0';
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

        abc = '0';
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
            plantWeek: numberWeek,


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
                                    isDataSend: true,

                                });
                                abc = '1';
                                if (Platform.OS === 'android') {
                                    ToastAndroid.show('Completed!!', ToastAndroid.SHORT)

                                } else {
                                    AlertIOS.alert('Completed!!');

                                }
                                this.props.navigation.navigate('FlamentynoPlant1')
                                this.setState({

                                    isDataSend: true,
                                });
                                abc = '1';

                            }).catch((err) => {
                                console.log(err);
                                this.setState({
                                    isLoading: false,
                                });
                                abc = '0';
                            })

                        } else {
                            alert('Please fill Pruning Number');
                            this.setState({
                                isLoading: false,
                            });
                            abc = '0';
                        }
                    } else {
                        alert('Please fill Set Flowers');
                        this.setState({
                            isLoading: false,
                        });
                        abc = '0';
                    }
                } else {
                    alert('Please fill Set Fruits');
                    this.setState({
                        isLoading: false,
                    });
                    abc = '0';
                }
            } else {
                alert('Please fill Last Week Number');
                this.setState({
                    isLoading: false,
                });
                abc = '0';
            }
        } else {

            alert('Please fill Truss Number');
            this.setState({
                isLoading: false,
            });
            abc = '0';
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

                                <View style={styles.row}>
                                    {this.state.show ? (
                                        <Text style={styles.text2}>Last Unsend Value  {this.state.number}</Text>) : null}

                                    {this.state.show ? (
                                        <Text style={styles.text2}>Last Weeks Value  0</Text>) : null}

                                </View>

                                <TextInput style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Truss Number"
                                    placeholderTextColor="#000000"
                                    autoCapitalize="none"
                                    multiline={false}
                                    keyboardType={'numeric'}
                                    multiline={false}
                                    returnKeyType={"next"}
                                    ref={this.trussNumberRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={() => { this.lastWeekTextInput.focus(); }}
                                    onChangeText={(text) => this.updateTextInput(text, 'trussNumber')}
                                    error={errors.TrussNumber}
                                    blurOnSubmit={false}
                                    value={this.state.trussNumber}

                                />

                                <View style={styles.row}>
                                    {this.state.show ? (
                                        <Text style={styles.text2}>Last Unsend Value  {this.state.lastNumber}</Text>) : null}

                                    {this.state.show ? (
                                        <Text style={styles.text2}>Last Weeks Value  0</Text>) : null}

                                </View>

                                <TextInput style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Last Week"
                                    placeholderTextColor="#000000"
                                    autoCapitalize="none"
                                    multiline={false}
                                    blurOnSubmit={false}
                                    returnKeyType={"next"}
                                    keyboardType={'numeric'}
                                    multiline={false}
                                    ref={(input) => { this.lastWeekTextInput = input; }}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={() => { this.setFruitsTextInput.focus(); }}
                                    onChangeText={(text) => this.updateTextInput(text, 'lastWeekNumber')}
                                    error={errors.LastWeekNumber}
                                    value={this.state.lastWeekNumber}

                                />

                                <View style={styles.row}>
                                    {this.state.show ? (
                                        <Text style={styles.text2}>Last Unsend Value  {this.state.fruits}</Text>) : null}

                                    {this.state.show ? (
                                        <Text style={styles.text2}>Last Weeks Value  0</Text>) : null}

                                </View>

                                <TextInput style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Set fruits"
                                    placeholderTextColor="#000000"
                                    autoCapitalize="none"
                                    multiline={false}
                                    returnKeyType={"next"}
                                    keyboardType={'numeric'}
                                    ref={(input) => { this.setFruitsTextInput = input; }}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onChangeText={(text) => this.updateTextInput(text, 'setFruits')}
                                    onSubmitEditing={() => { this.setFlowersTextInput.focus(); }}
                                    blurOnSubmit={false}
                                    error={errors.SetFruits}
                                    value={this.state.setFruits}

                                />

                                <View style={styles.row}>
                                    {this.state.show ? (
                                        <Text style={styles.text2}>Last Unsend Value  {this.state.flowers}</Text>) : null}

                                    {this.state.show ? (
                                        <Text style={styles.text2}>Last Weeks Value  0</Text>) : null}

                                </View>

                                <TextInput style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Flowers"
                                    placeholderTextColor="#000000"
                                    autoCapitalize="none"
                                    multiline={false}
                                    keyboardType={'numeric'}
                                    ref={(input) => { this.setFlowersTextInput = input; }}
                                    autoCorrect={false}
                                    returnKeyType={"next"}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={() => { this.pruningNumbersTextInput.focus(); }}
                                    blurOnSubmit={false}
                                    onChangeText={(text) => this.updateTextInput(text, 'setFlowers')}
                                    error={errors.SetFlowers}
                                    value={this.state.setFlowers}

                                />

                                <View style={styles.row}>
                                    {this.state.show ? (
                                        <Text style={styles.text2}>Last Unsend Value  {this.state.pruning}</Text>) : null}

                                    {this.state.show ? (
                                        <Text style={styles.text2}>Last Weeks Value  0</Text>) : null}

                                </View>

                                <TextInput style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Pruning Number"
                                    placeholderTextColor="#000000"
                                    autoCapitalize="none"
                                    multiline={false}
                                    keyboardType={'numeric'}
                                    ref={(input) => { this.pruningNumbersTextInput = input; }}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    returnKeyType={"done"}
                                    onChangeText={this.onChangeText}
                                    onChangeText={(text) => this.updateTextInput(text, 'pruningNumber')}
                                    error={errors.PruningNumber}
                                    value={this.state.pruningNumber}

                                />


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
    },

    input: {
        marginBottom: 10,
        height: 50,
        fontSize: 18,
        borderColor: '#000000',
        borderWidth: 2,
        marginTop: 10
    },
    text2: {
        color: '#110A6A',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    row: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }


})

