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
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";






import Database from './Database'
import { identity } from 'lodash';
import { color } from 'react-native-reanimated';


const db = new Database();
let abc;
let numberWeek;
let no1, no2, no3, no4, no5, no6, no7, no8, no9, no10;
let count = 0;
var currentWeekNumber = require('current-week-number');
var number, data;






export default class Har5AngelleTrussDetails extends React.Component {



    constructor(props) {
        super(props)

        const elementButton = (value) => (
            <TouchableOpacity onPress={() => this._alertIndex(value)}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>button</Text>
                </View>
            </TouchableOpacity>
        );



        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitTrussNumber = this.onSubmitTrussNumber.bind(this);
        this.onSubmitLastWeek = this.onSubmitLastWeek.bind(this);
        this.onSubmitSetFruits = this.onSubmitSetFruits.bind(this);
        this.onSubmitFlowers = this.onSubmitFlowers.bind(this);
        this.onSubmitPruningNumber = this.onSubmitPruningNumber.bind(this);
        this.onSubmitFruitDiameter = this.onSubmitFruitDiameter.bind(this);

        this.onSubmitTrussNumber1 = this.onSubmitTrussNumber1.bind(this);
        this.onSubmitLastWeek1 = this.onSubmitLastWeek1.bind(this);
        this.onSubmitSetFruits1 = this.onSubmitSetFruits1.bind(this);
        this.onSubmitFlowers1 = this.onSubmitFlowers1.bind(this);
        this.onSubmitPruningNumber1 = this.onSubmitPruningNumber1.bind(this);
        this.onSubmitFruitDiameter1 = this.onSubmitFruitDiameter1.bind(this);

        this.trussNumberRef = this.updateRef.bind(this, 'TrussNumber');
        this.setFruitsRef = this.updateRef.bind(this, 'SetFruits');
        this.setFlowersRef = this.updateRef.bind(this, 'SetFlowers');
        this.pruningNumberRef = this.updateRef.bind(this, 'PruningNumber');
        this.fruitDiameterRef = this.updateRef.bind(this, 'FruitDiameter');

        this.trussNumberRef1 = this.updateRef.bind(this, 'TrussNumber1');
        this.setFruitsRef1 = this.updateRef.bind(this, 'SetFruits1');
        this.setFlowersRef1 = this.updateRef.bind(this, 'SetFlowers1');
        this.pruningNumberRef1 = this.updateRef.bind(this, 'PruningNumber1');
        this.fruitDiameterRef1 = this.updateRef.bind(this, 'FruitDiameter1');


        this.trussNumberRef2 = this.updateRef.bind(this, 'TrussNumber2');
        this.setFruitsRef2 = this.updateRef.bind(this, 'SetFruits2');
        this.setFlowersRef2 = this.updateRef.bind(this, 'SetFlowers2');
        this.pruningNumberRef2 = this.updateRef.bind(this, 'PruningNumber2');
        this.fruitDiameterRef2 = this.updateRef.bind(this, 'FruitDiameter2');


        this.trussNumberRef3 = this.updateRef.bind(this, 'TrussNumber3');
        this.setFruitsRef3 = this.updateRef.bind(this, 'SetFruits3');
        this.setFlowersRef3 = this.updateRef.bind(this, 'SetFlowers3');
        this.pruningNumberRef3 = this.updateRef.bind(this, 'PruningNumber3');
        this.fruitDiameterRef3 = this.updateRef.bind(this, 'FruitDiameter3');


        this.trussNumberRef4 = this.updateRef.bind(this, 'TrussNumber4');
        this.setFruitsRef4 = this.updateRef.bind(this, 'SetFruits4');
        this.setFlowersRef4 = this.updateRef.bind(this, 'SetFlowers4');
        this.pruningNumberRef4 = this.updateRef.bind(this, 'PruningNumber4');
        this.fruitDiameterRef4 = this.updateRef.bind(this, 'FruitDiameter4');


        this.trussNumberRef5 = this.updateRef.bind(this, 'TrussNumber5');
        this.setFruitsRef5 = this.updateRef.bind(this, 'SetFruits5');
        this.setFlowersRef5 = this.updateRef.bind(this, 'SetFlowers5');
        this.pruningNumberRef5 = this.updateRef.bind(this, 'PruningNumber5');
        this.fruitDiameterRef5 = this.updateRef.bind(this, 'FruitDiameter5');


        this.trussNumberRef6 = this.updateRef.bind(this, 'TrussNumber6');
        this.setFruitsRef6 = this.updateRef.bind(this, 'SetFruits6');
        this.setFlowersRef6 = this.updateRef.bind(this, 'SetFlowers6');
        this.pruningNumberRef6 = this.updateRef.bind(this, 'PruningNumber6');
        this.fruitDiameterRef6 = this.updateRef.bind(this, 'FruitDiameter6');


        this.trussNumberRef7 = this.updateRef.bind(this, 'TrussNumber7');
        this.setFruitsRef7 = this.updateRef.bind(this, 'SetFruits7');
        this.setFlowersRef7 = this.updateRef.bind(this, 'SetFlowers7');
        this.pruningNumberRef7 = this.updateRef.bind(this, 'PruningNumber7');
        this.fruitDiameterRef7 = this.updateRef.bind(this, 'FruitDiameter7');


        this.trussNumberRef8 = this.updateRef.bind(this, 'TrussNumber8');
        this.setFruitsRef8 = this.updateRef.bind(this, 'SetFruits8');
        this.setFlowersRef8 = this.updateRef.bind(this, 'SetFlowers8');
        this.pruningNumberRef8 = this.updateRef.bind(this, 'PruningNumber8');
        this.fruitDiameterRef8 = this.updateRef.bind(this, 'FruitDiameter8');


        this.trussNumberRef9 = this.updateRef.bind(this, 'TrussNumber9');
        this.setFruitsRef9 = this.updateRef.bind(this, 'SetFruits9');
        this.setFlowersRef9 = this.updateRef.bind(this, 'SetFlowers9');
        this.pruningNumberRef9 = this.updateRef.bind(this, 'PruningNumber9');
        this.fruitDiameterRef9 = this.updateRef.bind(this, 'FruitDiameter9');



        this.state = {
            secureTextEntry: true,
            trussID: '',
            plantRow: '',
            plantName: '',
            plantWeek: '',
            trussNumber: '',
            setFruits: '',
            setFlowers: '',
            pruningNumber: '',
            fruitDiameter: '',

            trussNumber1: '',
            setFruits1: '',
            setFlowers1: '',
            pruningNumber1: '',
            fruitDiameter1: '',

            trussNumber2: '',
            setFruits2: '',
            setFlowers2: '',
            pruningNumber2: '',
            fruitDiameter2: '',

            trussNumber3: '',
            setFruits3: '',
            setFlowers3: '',
            pruningNumber3: '',
            fruitDiameter3: '',

            trussNumber4: '',
            setFruits4: '',
            setFlowers4: '',
            pruningNumber4: '',
            fruitDiameter4: '',

            trussNumber5: '',
            setFruits5: '',
            setFlowers5: '',
            pruningNumber5: '',
            fruitDiameter5: '',

            trussNumber6: '',
            setFruits6: '',
            setFlowers6: '',
            pruningNumber6: '',
            fruitDiameter6: '',

            trussNumber7: '',
            setFruits7: '',
            setFlowers7: '',
            pruningNumber7: '',
            fruitDiameter7: '',

            trussNumber8: '',
            setFruits8: '',
            setFlowers8: '',
            pruningNumber8: '',
            fruitDiameter8: '',

            trussNumber9: '',
            setFruits9: '',
            setFlowers9: '',
            pruningNumber9: '',
            fruitDiameter9: '',

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
            truss1: {},
            truss2: {},
            truss3: {},
            truss4: {},
            truss5: {},
            truss6: {},
            truss7: {},
            truss8: {},
            truss9: {},
            counter: 0,

            no1: '',
            no2: '',
            no3: '',
            no4: '',
            no5: '',
            no6: '',
            no7: '',
            no8: '',
            no9: '',
            no10: '',

            sent: false,
            error: false,

            fruitLoad: '',
            harvestTruss: '',
            pruningHar: '',
            settingTrussNumber: '',
            prunSetting: '',
            pruneFlowering: '',

            floweringTrussNumber: '',
            settingTruss: '',
            settingTruss2: '',
            floweringTrussss: '',

            isItConnected: '',


            tableHead: ['Truss', 'Set Fruit', 'Flowers', 'Pruning Number'],
            tableData: [
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd']
            ],

            tableData2: [
                [elementButton('1'), 'a', 'b', 'c', 'd'],
                [elementButton('2'), '1', '2', '3', '4'],
                [elementButton('3'), 'a', 'b', 'c', 'd']
            ]



        };


    }



    setAsyncValues(text1, text2) {

        try {
            AsyncStorage.setItem('trussNumber', text1);
            AsyncStorage.setItem('fruitDiameter', text2);
        } catch (error) {
        }

    }

    getAsysncValues() {


        abc = '0';


        try {
            AsyncStorage.getItem('trussNumber').then((text1Value) => {
                this.setState({ number: JSON.parse(text1Value) });
                console.log(this.state.number)

                abc = '0';
            }).done();
        } catch (error) {
        }
        try {
            AsyncStorage.getItem('fruitDiameter').then((text2Value) => {
                this.setState({ lastNumber: JSON.parse(text2Value) });
                console.log(this.state.lastNumber)

                abc = '0';
            }).done();
        } catch (error) {
        }
        try {
            AsyncStorage.getItem('setFruits').then((text3Value) => {
                this.setState({ fruits: JSON.parse(text3Value) });
                console.log(this.state.fruits)

                abc = '0';
            }).done();
        } catch (error) {
        }
        try {
            AsyncStorage.getItem('setFlowers').then((text4Value) => {
                this.setState({ flowers: JSON.parse(text4Value) });
                console.log(this.state.flowers)

                abc = '0';
            }).done();
        } catch (error) {
        } try {
            AsyncStorage.getItem('pruningNumber').then((text5Value) => {
                this.setState({ pruning: JSON.parse(text5Value) });
                console.log(this.state.pruning)

                abc = '0';
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

        console.ignoredYellowBox = ['react-native BugReporting extraData:'];


        if (this.props.route.params.plantNum !== undefined) {
            number = this.props.route.params.plantNum;
            console.log("Plant No00000000 " + number);
        } else {

        }


        numberWeek = 2100 + currentWeekNumber(new Date()) - 1;
        console.log("Current Week Number:  ", numberWeek);
        this.setState({ weekNumber: numberWeek.toString() });


        NetInfo.addEventListener(this.handleConnectivityChange);




        console.log("Count : ", abc);
        console.log("show : ", this.state.show);
        this.ShowHideComponent();

        if (abc === '0' || abc === null) {
            this.getAsysncValues();
            this.setState({
                isDataSend: true,

            });


        } else if (abc === '1' && abc !== null) {

            AsyncStorage.clear();
            //numberWeek = numberWeek + 1;
            this.setState({ weekNumber: numberWeek.toString() });
            console.log("Week Number: ", numberWeek);


            this.setState({
                isDataSend: false,

            });



        } else {

            AsyncStorage.clear();
            //numberWeek = numberWeek + 1;
            console.log("Week Number: ", numberWeek);
            this.setState({ weekNumber: numberWeek.toString() });

            this.setState({
                isDataSend: false,

            });


        }








    }

    handleConnectivityChange = state => {
        if (state.isConnected) {

            this.setState({ isItConnected: 'Online' });

        } else {

            this.setState({ isItConnected: 'Offline' });
        }
    };

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
        this.setState(state)

        this.calculateFruitLoad();
        this.calculateHarvestTruss();
        this.calculateSettingTruss2();
        this.calculateFloweringTruss2();


    }

    updateTextInput22 = (text, field) => {
        this.setItem(field, text)
        this.setState({
            isDataSend: false,

        });
        abc = '0';
        const state = this.state
        state[field] = text;
        this.setState(state)

        this.setState({ trussNumber1: parseInt(this.state.trussNumber) + 1 })
        this.setState({ trussNumber2: parseInt(this.state.trussNumber) + 2 })
        this.setState({ trussNumber3: parseInt(this.state.trussNumber) + 3 })
        this.setState({ trussNumber4: parseInt(this.state.trussNumber) + 4 })
        this.setState({ trussNumber5: parseInt(this.state.trussNumber) + 5 })
        this.setState({ trussNumber6: parseInt(this.state.trussNumber) + 6 })
        this.setState({ trussNumber7: parseInt(this.state.trussNumber) + 7 })
        this.setState({ trussNumber8: parseInt(this.state.trussNumber) + 8 })
        this.setState({ trussNumber9: parseInt(this.state.trussNumber) + 9 })


          if(this.state.trussNumber !== ""){

            this.calculateSettingTruss2();
            this.calculateFloweringTruss2();
            this.calculateFruitLoad();
            this.calculateHarvestTruss();
            this.getTrussData();

        }
        //For testing I have changed the numberweek - 2 to numberWeek in the below method

    }

    calculateFruitLoad = () => {

        var sum = 0;
        sum = ((parseInt(this.state.setFruits) ? parseInt(this.state.setFruits) : 0) + (parseInt(this.state.setFruits1) ? parseInt(this.state.setFruits1) : 0) + (parseInt(this.state.setFruits2) ? parseInt(this.state.setFruits2) : 0) + (parseInt(this.state.setFruits3) ? parseInt(this.state.setFruits3) : 0) + (parseInt(this.state.setFruits4) ? parseInt(this.state.setFruits4) : 0) + (parseInt(this.state.setFruits5) ? parseInt(this.state.setFruits5) : 0) + (parseInt(this.state.setFruits6) ? parseInt(this.state.setFruits6) : 0) + (parseInt(this.state.setFruits7) ? parseInt(this.state.setFruits7) : 0) + (parseInt(this.state.setFruits8) ? parseInt(this.state.setFruits8) : 0) + (parseInt(this.state.setFruits9) ? parseInt(this.state.setFruits9) : 0));
        this.setState({
            fruitLoad: sum,
        });

        console.log("Fruit Load : " + sum);

    }

    calculateHarvestTruss = () => {

        var div = 0;
        var sub = 0;
        var add = 0;
        var prunNum = 0;

        if (this.state.setFlowers === "") {

            prunNum = parseInt(this.state.pruningNumber)

            div = (parseInt((this.state.setFruits) ? (this.state.setFruits) : 0) / parseFloat((this.state.pruningNumber) ? (this.state.pruningNumber) : 0))
            sub = (1 - div);
            add = (((parseInt(this.state.trussNumber) ? parseInt(this.state.trussNumber) : 0) + sub).toFixed(2))
            this.setState({
                harvestTruss: add,
                pruningHar: prunNum,
            });

        } else {

            prunNum = parseInt(this.state.pruningNumber)
            var num = this.state.trussNumber

            this.setState({
                harvestTruss: num,
                pruningHar: prunNum,
            });
        }

        console.log("Harvest Truss : " + add);


    }

    calculateSettingTruss2 = () => {

        var div = 0;
        var sub = 0;
        var add = 0;
        var pruningSet = 0;
        var settingTruss = 0;
        var settingFruit = 0;
        var trussNum = 0;

        console.log("Setting truss called : "+this.state.setFruits2);

        if (this.state.setFruits9 === "") {

            if (this.state.setFruits8 === "") {

                if (this.state.setFruits7 === "") {

                    if (this.state.setFruits6 === "") {

                        if (this.state.setFruits5 === "") {

                            if (this.state.setFruits4 === "") {

                                if (this.state.setFruits3 === "") {

                                    if (this.state.setFruits2 === "") {

                                        if (this.state.setFruits1 === "") {

                                            if (this.state.setFruits === "") {


                                            } else {

                                                pruningSet = parseInt(this.state.pruningNumber);
                                                trussNum = parseInt(this.state.trussNumber);
                                                settingFruit = parseInt(this.state.setFruits);
                                                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                                console.log("Setting Truss Number : " + settingTruss);
                                                this.setState({
                                                    settingTrussNumber: settingTruss,
                                                    settingTruss: trussNum,
                                                    prunSetting: pruningSet,

                                                });

                                            }

                                        } else {

                                            var number = (parseInt(this.state.trussNumber) + 1)

                                            pruningSet = parseInt(this.state.pruningNumber1);
                                            trussNum = parseInt(number);
                                            settingFruit = parseInt(this.state.setFruits1);
                                            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                            console.log("Setting Truss Number 1 : " + settingTruss);
                                            this.setState({
                                                settingTrussNumber: settingTruss,
                                                settingTruss: trussNum,
                                                prunSetting: pruningSet,

                                            });

                                        }

                                    } else {

                                        var number2 = (parseInt(this.state.trussNumber)+2)

                                        pruningSet = parseInt(this.state.pruningNumber2);
                                        trussNum = parseInt(number2);
                                        settingFruit = parseInt(this.state.setFruits2);
                                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                        console.log("Setting Truss Number 2 : " + settingTruss);
                                        this.setState({
                                            settingTrussNumber: settingTruss,
                                            settingTruss: trussNum,
                                            prunSetting: pruningSet,

                                        });

                                    }

                                } else {

                                    var number3 = (parseInt(this.state.trussNumber)+3)

                                    pruningSet = parseInt(this.state.pruningNumber3);
                                    trussNum = parseInt(number3);
                                    settingFruit = parseInt(this.state.setFruits3);
                                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                    console.log("Setting Truss Number 3 : " + settingTruss);
                                    this.setState({
                                        settingTrussNumber: settingTruss,
                                        settingTruss: trussNum,
                                        prunSetting: pruningSet,

                                    });

                                }

                            } else {

                                var number4 = (parseInt(this.state.trussNumber)+4)

                                pruningSet = parseInt(this.state.pruningNumber4);
                                trussNum = parseInt(number4);
                                settingFruit = parseInt(this.state.setFruits4);
                                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                console.log("Setting Truss Number 4 : " + settingTruss);
                                this.setState({
                                    settingTrussNumber: settingTruss,
                                    settingTruss: trussNum,
                                    prunSetting: pruningSet,

                                });

                            }

                        } else {

                            var number5 = (parseInt(this.state.trussNumber)+5)

                            pruningSet = parseInt(this.state.pruningNumber5);
                            trussNum = parseInt(number5);
                            settingFruit = parseInt(this.state.setFruits5);
                            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                            console.log("Setting Truss Number 5 : " + settingTruss);
                            this.setState({
                                settingTrussNumber: settingTruss,
                                settingTruss: trussNum,
                                prunSetting: pruningSet,

                            });


                        }

                    } else {

                        var number6 = (parseInt(this.state.trussNumber)+6)

                        pruningSet = parseInt(this.state.pruningNumber6);
                        trussNum = parseInt(number6);
                        settingFruit = parseInt(this.state.setFruits6);
                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                        console.log("Setting Truss Number 6 : " + settingTruss);
                        this.setState({
                            settingTrussNumber: settingTruss,
                            settingTruss: trussNum,
                            prunSetting: pruningSet,

                        });


                    }

                } else {
                    var number7 = (parseInt(this.state.trussNumber)+7)

                    pruningSet = parseInt(this.state.pruningNumber7);
                    trussNum = parseInt(number7);
                    settingFruit = parseInt(this.state.setFruits7);
                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                    console.log("Setting Truss Number 7 : " + settingTruss);
                    this.setState({
                        settingTrussNumber: settingTruss,
                        settingTruss: trussNum,
                        prunSetting: pruningSet,

                    });
                }

            } else {

                var number8 = (parseInt(this.state.trussNumber)+8)

                pruningSet = parseInt(this.state.pruningNumber8);
                trussNum = parseInt(number8);
                settingFruit = parseInt(this.state.setFruits8);
                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                console.log("Setting Truss Number 8 : " + settingTruss);
                this.setState({
                    settingTrussNumber: settingTruss,
                    settingTruss: trussNum,
                    prunSetting: pruningSet,

                });

            }

        } else {

            var number9 = (ParseInt(this.state.trussNumber)+9)

            pruningSet = parseInt(this.state.pruningNumber9);
            trussNum = parseInt(number9);
            settingFruit = parseInt(this.state.setFruits9);
            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
            console.log("Setting Truss Number 9 : " + settingTruss);
            this.setState({
                settingTrussNumber: settingTruss,
                settingTruss2: trussNum,
                prunSetting: pruningSet,
            });

        }

    }

    calculateFloweringTruss2 = () => {

        var floweringTrussNum = 0;
        var flowerPruningNumner = 0;
        var flowering = 0;
        var flowerSetFruits = 0;
        var summ = 0;
        var floweringTruss = 0;
        var trussNum = 0;

        console.log("Flowering truss called : "+this.state.setFlowers2);


        if (this.state.setFlowers9 === "") {

            if (this.state.setFlowers8 === "") {

                if (this.state.setFlowers7 === "") {

                    if (this.state.setFlowers6 === "") {

                        if (this.state.setFlowers5 === "") {

                            if (this.state.setFlowers4 === "") {

                                if (this.state.setFlowers3 === "") {

                                    if (this.state.setFlowers2 === "") {

                                        if (this.state.setFlowers1 === "") {

                                            if (this.state.setFlowers === "") {


                                            } else {

                                                var number01 = this.state.trussNumber


                                                flowerPruningNumner = parseInt(this.state.pruningNumber);
                                                flowering = parseInt(this.state.setFlowers);
                                                flowerSetFruits = parseInt(this.state.setFruits);
                                                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                                                floweringTruss = ((parseInt(number01) + (summ / flowerPruningNumner)).toFixed(2));
                                                console.log("Flowering Truss Value : " + floweringTruss);
                                                this.setState({
                                                    floweringTrussss: floweringTruss,
                                                    pruneFlowering: flowerPruningNumner,
                                                });
                                            }


                                        } else {

                                            var number11 = + (this.state.trussNumber) + 1

                                            console.log("oooooooooooooooooooooooooooooo : "+number11);
                                            flowerPruningNumner = parseInt(this.state.pruningNumber1);
                                            flowering = parseInt(this.state.setFlowers1);
                                            flowerSetFruits = parseInt(this.state.setFruits1);
                                            trussNum = number11
                                            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                                            floweringTruss = ((parseInt(number11) + (summ / flowerPruningNumner)).toFixed(2));
                                            console.log("Flowering Truss Value : " + floweringTruss);
                                            this.setState({
                                                floweringTrussss: floweringTruss,
                                                pruneFlowering: flowerPruningNumner,

                                            });


                                        }


                                    } else {

                                        var number21 = + (this.state.trussNumber) + 2

                                        flowerPruningNumner = parseInt(this.state.pruningNumber2);
                                        flowering = parseInt(this.state.setFlowers2);
                                        flowerSetFruits = parseInt(this.state.setFruits2);
                                        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                                        floweringTruss = ((parseInt(number21) + (summ / flowerPruningNumner)).toFixed(2));
                                        console.log("Flowering Truss Value : " + floweringTruss);
                                        this.setState({
                                            floweringTrussss: floweringTruss,
                                            pruneFlowering: flowerPruningNumner,

                                        });

                                    }


                                } else {

                                    var number31 = + (this.state.trussNumber) + 3

                                    flowerPruningNumner = parseInt(this.state.pruningNumber3);
                                    flowering = parseInt(this.state.setFlowers3);
                                    flowerSetFruits = parseInt(this.state.setFruits3);
                                    summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                                    floweringTruss = ((parseInt(number31) + (summ / flowerPruningNumner)).toFixed(2));
                                    console.log("Flowering Truss Value : " + floweringTruss);
                                    this.setState({
                                        floweringTrussss: floweringTruss,
                                        pruneFlowering: flowerPruningNumner,

                                    });


                                }


                            } else {

                                var number41 = + (this.state.trussNumber) + 4

                                flowerPruningNumner = parseInt(this.state.pruningNumber4);
                                flowering = parseInt(this.state.setFlowers4);
                                flowerSetFruits = parseInt(this.state.setFruits4);
                                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                                floweringTruss = ((parseInt(number41) + (summ / flowerPruningNumner)).toFixed(2));
                                console.log("Flowering Truss Value : " + floweringTruss);
                                this.setState({
                                    floweringTrussss: floweringTruss,
                                    pruneFlowering: flowerPruningNumner,

                                });


                            }


                        } else {

                            var number51 = + (this.state.trussNumber) + 5

                            flowerPruningNumner = parseInt(this.state.pruningNumber5);
                            flowering = parseInt(this.state.setFlowers5);
                            flowerSetFruits = parseInt(this.state.setFruits5);
                            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                            floweringTruss = ((parseInt(number51) + (summ / flowerPruningNumner)).toFixed(2));
                            console.log("Flowering Truss Value : " + floweringTruss);
                            this.setState({
                                floweringTrussss: floweringTruss,
                                pruneFlowering: flowerPruningNumner,

                            });

                        }


                    } else {

                        var number61 = + (this.state.trussNumber) + 6
 
                        flowerPruningNumner = parseInt(this.state.pruningNumber6);
                        flowering = parseInt(this.state.setFlowers6);
                        flowerSetFruits = parseInt(this.state.setFruits6);
                        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                        floweringTruss = ((parseInt(number61) + (summ / flowerPruningNumner)).toFixed(2));
                        console.log("Flowering Truss Value : " + floweringTruss);
                        this.setState({
                            floweringTrussss: floweringTruss,
                            pruneFlowering: flowerPruningNumner,

                        });

                    }


                } else {

                    var number71 = + (this.state.trussNumber) + 7

                    flowerPruningNumner = parseInt(this.state.pruningNumber7);
                    flowering = parseInt(this.state.setFlowers7);
                    flowerSetFruits = parseInt(this.state.setFruits7);
                    summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                    floweringTruss = ((parseInt(number71) + (summ / flowerPruningNumner)).toFixed(2));
                    console.log("Flowering Truss Value : " + floweringTruss);
                    this.setState({
                        floweringTrussss: floweringTruss,
                        pruneFlowering: flowerPruningNumner,

                    });

                }


            } else {
                var number81 = + (this.state.trussNumber) + 8

                flowerPruningNumner = parseInt(this.state.pruningNumber8);
                flowering = parseInt(this.state.setFlowers8);
                flowerSetFruits = parseInt(this.state.setFruits8);
                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                floweringTruss = ((parseInt(number81) + (summ / flowerPruningNumner)).toFixed(2));
                console.log("Flowering Truss Value : " + floweringTruss);
                this.setState({
                    floweringTrussss: floweringTruss,
                    pruneFlowering: flowerPruningNumner,

                });

            }


        } else {

            var number91 = + (this.state.trussNumber) + 9

            flowerPruningNumner = parseInt(this.state.pruningNumber9);
            flowering = parseInt(this.state.setFlowers9);
            flowerSetFruits = parseInt(this.state.setFruits9);
            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
            floweringTruss = ((parseInt(number91) + (summ / flowerPruningNumner)).toFixed(2));
            console.log("Flowering Truss Value : " + floweringTruss);
            this.setState({
                floweringTrussss: floweringTruss,
                pruneFlowering: flowerPruningNumner,

            });

        }

    }

    calculateSettingTruss = () => {

        var div = 0;
        var sub = 0;
        var add = 0;
        var pruningSet = 0;
        var settingTruss = 0;
        var settingFruit = 0;
        var trussNum = 0;


        if (this.state.setFlowers === "") {

            if (this.state.setFlowers1 === "") {

                if (this.state.setFlowers2 === "") {

                    if (this.state.setFlowers3 === "") {

                        if (this.state.setFlowers4 === "") {

                            if (this.state.setFlowers5 === "") {

                                if (this.state.setFlowers6 === "") {

                                    if (this.state.setFlowers7 === "") {

                                        if (this.state.setFlowers8 === "") {

                                            if (this.state.setFlowers9 === "") {


                                            } else {


                                                pruningSet = parseInt(this.state.pruningNumber9);
                                                trussNum = parseInt(this.state.trussNumber9);
                                                settingFruit = parseInt(this.state.setFruits9);
                                                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                                console.log("Setting Truss Number 9 : " + settingTruss);
                                                this.setState({
                                                    settingTrussNumber: settingTruss,
                                                    settingTruss2: trussNum,
                                                    prunSetting: pruningSet,
                                                });




                                            }



                                        } else {

                                            if (this.state.setFruits9 !== "") {

                                                pruningSet = parseInt(this.state.pruningNumber9);
                                                trussNum = parseInt(this.state.trussNumber9);
                                                settingFruit = parseInt(this.state.setFruits9);
                                                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                                console.log("Setting Truss Number 9 : " + settingTruss);
                                                this.setState({
                                                    settingTrussNumber: settingTruss,
                                                    settingTruss2: trussNum,
                                                    prunSetting: pruningSet,
                                                });


                                            } else {

                                                pruningSet = parseInt(this.state.pruningNumber8);
                                                trussNum = parseInt(this.state.trussNumber8);
                                                settingFruit = parseInt(this.state.setFruits8);
                                                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                                console.log("Setting Truss Number 8 : " + settingTruss);
                                                this.setState({
                                                    settingTrussNumber: settingTruss,
                                                    settingTruss: trussNum,
                                                    prunSetting: pruningSet,

                                                });

                                            }


                                        }



                                    } else {

                                        if (this.state.setFruits8 !== "") {

                                            pruningSet = parseInt(this.state.pruningNumber8);
                                            trussNum = parseInt(this.state.trussNumber8);
                                            settingFruit = parseInt(this.state.setFruits8);
                                            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                            console.log("Setting Truss Number 8 : " + settingTruss);
                                            this.setState({
                                                settingTrussNumber: settingTruss,
                                                settingTruss2: trussNum,
                                                prunSetting: pruningSet,

                                            });

                                        } else {

                                            pruningSet = parseInt(this.state.pruningNumber7);
                                            trussNum = parseInt(this.state.trussNumber7);
                                            settingFruit = parseInt(this.state.setFruits7);
                                            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                            console.log("Setting Truss Number 7 : " + settingTruss);
                                            this.setState({
                                                settingTrussNumber: settingTruss,
                                                settingTruss: trussNum,
                                                prunSetting: pruningSet,

                                            });


                                        }



                                    }


                                } else {

                                    if (this.state.setFruits7 !== "") {

                                        pruningSet = parseInt(this.state.pruningNumber7);
                                        trussNum = parseInt(this.state.trussNumber7);
                                        settingFruit = parseInt(this.state.setFruits7);
                                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                        console.log("Setting Truss Number 7 : " + settingTruss);
                                        this.setState({
                                            settingTrussNumber: settingTruss,
                                            settingTruss2: trussNum,
                                            prunSetting: pruningSet,

                                        });

                                    } else {

                                        pruningSet = parseInt(this.state.pruningNumber6);
                                        trussNum = parseInt(this.state.trussNumber6);
                                        settingFruit = parseInt(this.state.setFruits6);
                                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                        console.log("Setting Truss Number 6 : " + settingTruss);
                                        this.setState({
                                            settingTrussNumber: settingTruss,
                                            settingTruss: trussNum,
                                            prunSetting: pruningSet,

                                        });

                                    }

                                }


                            } else {

                                if (this.state.setFruits6 !== "") {
                                    pruningSet = parseInt(this.state.pruningNumber6);
                                    trussNum = parseInt(this.state.trussNumber6);
                                    settingFruit = parseInt(this.state.setFruits6);
                                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                    console.log("Setting Truss Number 6 : " + settingTruss);
                                    this.setState({
                                        settingTrussNumber: settingTruss,
                                        settingTruss2: trussNum,
                                        prunSetting: pruningSet,

                                    });

                                } else {

                                    pruningSet = parseInt(this.state.pruningNumber5);
                                    trussNum = parseInt(this.state.trussNumber5);
                                    settingFruit = parseInt(this.state.setFruits5);
                                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                    console.log("Setting Truss Number 5 : " + settingTruss);
                                    this.setState({
                                        settingTrussNumber: settingTruss,
                                        settingTruss: trussNum,
                                        prunSetting: pruningSet,

                                    });


                                }




                            }



                        } else {

                            if (this.state.setFruits5 !== "") {

                                pruningSet = parseInt(this.state.pruningNumber5);
                                trussNum = parseInt(this.state.trussNumber5);
                                settingFruit = parseInt(this.state.setFruits5);
                                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                console.log("Setting Truss Number 5 : " + settingTruss);
                                this.setState({
                                    settingTrussNumber: settingTruss,
                                    settingTruss: trussNum,
                                    prunSetting: pruningSet,

                                });

                            } else {


                                pruningSet = parseInt(this.state.pruningNumber4);
                                trussNum = parseInt(this.state.trussNumber4);
                                settingFruit = parseInt(this.state.setFruits4);
                                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                                console.log("Setting Truss Number 4 : " + settingTruss);
                                this.setState({
                                    settingTrussNumber: settingTruss,
                                    settingTruss: trussNum,
                                    prunSetting: pruningSet,

                                });

                            }


                        }



                    } else {

                        if (this.state.setFruits4 !== "") {

                            pruningSet = parseInt(this.state.pruningNumber4);
                            trussNum = parseInt(this.state.trussNumber4);
                            settingFruit = parseInt(this.state.setFruits4);
                            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                            console.log("Setting Truss Number 4 : " + settingTruss);
                            this.setState({
                                settingTrussNumber: settingTruss,
                                settingTruss2: trussNum,
                                prunSetting: pruningSet,

                            });

                        } else {

                            pruningSet = parseInt(this.state.pruningNumber3);
                            trussNum = parseInt(this.state.trussNumber3);
                            settingFruit = parseInt(this.state.setFruits3);
                            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                            console.log("Setting Truss Number 3 : " + settingTruss);
                            this.setState({
                                settingTrussNumber: settingTruss,
                                settingTruss: trussNum,
                                prunSetting: pruningSet,

                            });

                        }



                    }



                } else {

                    if (this.state.setFruits3 !== "") {

                        pruningSet = parseInt(this.state.pruningNumber3);
                        trussNum = parseInt(this.state.trussNumber3);
                        settingFruit = parseInt(this.state.setFruits3);
                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                        console.log("Setting Truss Number 3 : " + settingTruss);
                        this.setState({
                            settingTrussNumber: settingTruss,
                            settingTruss2: trussNum,
                            prunSetting: pruningSet,

                        });

                    } else {


                        pruningSet = parseInt(this.state.pruningNumber2);
                        trussNum = parseInt(this.state.trussNumber2);
                        settingFruit = parseInt(this.state.setFruits2);
                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                        console.log("Setting Truss Number 2 : " + settingTruss);
                        this.setState({
                            settingTrussNumber: settingTruss,
                            settingTruss: trussNum,
                            prunSetting: pruningSet,

                        });

                    }




                }


            } else {

                if (this.state.setFruits2 !== "") {

                    pruningSet = parseInt(this.state.pruningNumber2);
                    trussNum = parseInt(this.state.trussNumber2);
                    settingFruit = parseInt(this.state.setFruits2);
                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                    console.log("Setting Truss Number 2 : " + settingTruss);
                    this.setState({
                        settingTrussNumber: settingTruss,
                        settingTruss2: trussNum,
                        prunSetting: pruningSet,

                    });

                } else {

                    pruningSet = parseInt(this.state.pruningNumber1);
                    trussNum = parseInt(this.state.trussNumber1);
                    settingFruit = parseInt(this.state.setFruits1);
                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                    console.log("Setting Truss Number 1 : " + settingTruss);
                    this.setState({
                        settingTrussNumber: settingTruss,
                        settingTruss: trussNum,
                        prunSetting: pruningSet,

                    });
                }


            }


        } else {

            if (this.state.setFruits1 !== "") {

                pruningSet = parseInt(this.state.pruningNumber1);
                trussNum = parseInt(this.state.trussNumber1);
                settingFruit = parseInt(this.state.setFruits1);
                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                console.log("Setting Truss Number 1 : " + settingTruss);
                this.setState({
                    settingTrussNumber: settingTruss,
                    settingTruss2: trussNum,
                    prunSetting: pruningSet,

                });

            } else {

                pruningSet = parseInt(this.state.pruningNumber);
                trussNum = parseInt(this.state.trussNumber);
                settingFruit = parseInt(this.state.setFruits);
                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                console.log("Setting Truss Number : " + settingTruss);
                this.setState({
                    settingTrussNumber: settingTruss,
                    settingTruss: trussNum,
                    prunSetting: pruningSet,

                });


            }



        }

    }

    calculateFloweringTruss = () => {

        var floweringTrussNum = 0;
        var flowerPruningNumner = 0;
        var flowering = 0;
        var flowerSetFruits = 0;
        var summ = 0;
        var floweringTruss = 0;


        if (this.state.settingTruss !== "") {

            floweringTrussNum = this.state.settingTruss + 1;


        } else {

            floweringTrussNum = this.state.settingTruss2;


        }
        if (this.state.trussNumber === floweringTrussNum) {

            flowerPruningNumner = parseInt(this.state.pruningNumber);
            flowering = parseInt(this.state.setFlowers);
            flowerSetFruits = parseInt(this.state.setFruits);
            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
            floweringTruss = ((parseInt(this.state.trussNumber) + (summ / flowerPruningNumner)).toFixed(2));
            console.log("Flowering Truss Value : " + floweringTruss);
            this.setState({
                floweringTrussss: floweringTruss,
                pruneFlowering: flowerPruningNumner,
            });

        } else {


            if (this.state.trussNumber1 === floweringTrussNum) {



                flowerPruningNumner = parseInt(this.state.pruningNumber1);
                flowering = parseInt(this.state.setFlowers1);
                flowerSetFruits = parseInt(this.state.setFruits1);
                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                floweringTruss = ((parseInt(this.state.trussNumber1) + (summ / flowerPruningNumner)).toFixed(2));
                console.log("Flowering Truss Value : " + floweringTruss);
                this.setState({
                    floweringTrussss: floweringTruss,
                    pruneFlowering: flowerPruningNumner,

                });

            } else {

                if (this.state.trussNumber2 === floweringTrussNum) {

                    flowerPruningNumner = parseInt(this.state.pruningNumber2);
                    flowering = parseInt(this.state.setFlowers2);
                    flowerSetFruits = parseInt(this.state.setFruits2);
                    summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                    floweringTruss = ((parseInt(this.state.trussNumber2) + (summ / flowerPruningNumner)).toFixed(2));
                    console.log("Flowering Truss Value : " + floweringTruss);
                    this.setState({
                        floweringTrussss: floweringTruss,
                        pruneFlowering: flowerPruningNumner,

                    });

                } else {


                    if (this.state.trussNumber3 === floweringTrussNum) {

                        flowerPruningNumner = parseInt(this.state.pruningNumber3);
                        flowering = parseInt(this.state.setFlowers3);
                        flowerSetFruits = parseInt(this.state.setFruits3);
                        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                        floweringTruss = ((parseInt(this.state.trussNumber3) + (summ / flowerPruningNumner)).toFixed(2));
                        console.log("Flowering Truss Value : " + floweringTruss);
                        this.setState({
                            floweringTrussss: floweringTruss,
                            pruneFlowering: flowerPruningNumner,

                        });

                    } else {

                        if (this.state.trussNumber4 === floweringTrussNum) {

                            flowerPruningNumner = parseInt(this.state.pruningNumber4);
                            flowering = parseInt(this.state.setFlowers4);
                            flowerSetFruits = parseInt(this.state.setFruits4);
                            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                            floweringTruss = ((parseInt(this.state.trussNumber4) + (summ / flowerPruningNumner)).toFixed(2));
                            console.log("Flowering Truss Value : " + floweringTruss);
                            this.setState({
                                floweringTrussss: floweringTruss,
                                pruneFlowering: flowerPruningNumner,

                            });

                        } else {

                            if (this.state.trussNumber5 === floweringTrussNum) {

                                flowerPruningNumner = parseInt(this.state.pruningNumber5);
                                flowering = parseInt(this.state.setFlowers5);
                                flowerSetFruits = parseInt(this.state.setFruits5);
                                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                                floweringTruss = ((parseInt(this.state.trussNumber5) + (summ / flowerPruningNumner)).toFixed(2));
                                console.log("Flowering Truss Value : " + floweringTruss);
                                this.setState({
                                    floweringTrussss: floweringTruss,
                                    pruneFlowering: flowerPruningNumner,

                                });

                            } else {


                                if (this.state.trussNumber6 === floweringTrussNum) {

                                    flowerPruningNumner = parseInt(this.state.pruningNumber6);
                                    flowering = parseInt(this.state.setFlowers6);
                                    flowerSetFruits = parseInt(this.state.setFruits6);
                                    summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                                    floweringTruss = ((parseInt(this.state.trussNumber6) + (summ / flowerPruningNumner)).toFixed(2));
                                    console.log("Flowering Truss Value : " + floweringTruss);
                                    this.setState({
                                        floweringTrussss: floweringTruss,
                                        pruneFlowering: flowerPruningNumner,

                                    });

                                } else {

                                    if (this.state.trussNumber7 === floweringTrussNum) {
                                        flowerPruningNumner = parseInt(this.state.pruningNumber7);
                                        flowering = parseInt(this.state.setFlowers7);
                                        flowerSetFruits = parseInt(this.state.setFruits7);
                                        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                                        floweringTruss = ((parseInt(this.state.trussNumber7) + (summ / flowerPruningNumner)).toFixed(2));
                                        console.log("Flowering Truss Value : " + floweringTruss);
                                        this.setState({
                                            floweringTrussss: floweringTruss,
                                            pruneFlowering: flowerPruningNumner,

                                        });





                                    } else {

                                        if (this.state.trussNumber8 === floweringTrussNum) {
                                            flowerPruningNumner = parseInt(this.state.pruningNumber8);
                                            flowering = parseInt(this.state.setFlowers8);
                                            flowerSetFruits = parseInt(this.state.setFruits8);
                                            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                                            floweringTruss = ((parseInt(this.state.trussNumber8) + (summ / flowerPruningNumner)).toFixed(2));
                                            console.log("Flowering Truss Value : " + floweringTruss);
                                            this.setState({
                                                floweringTrussss: floweringTruss,
                                                pruneFlowering: flowerPruningNumner,

                                            });

                                        } else {

                                            if (this.state.trussNumber9 === floweringTrussNum) {

                                                flowerPruningNumner = parseInt(this.state.pruningNumber9);
                                                flowering = parseInt(this.state.setFlowers9);
                                                flowerSetFruits = parseInt(this.state.setFruits9);
                                                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                                                floweringTruss = ((parseInt(this.state.trussNumber9) + (summ / flowerPruningNumner)).toFixed(2));
                                                console.log("Flowering Truss Value : " + floweringTruss);
                                                this.setState({
                                                    floweringTrussss: floweringTruss,
                                                    pruneFlowering: flowerPruningNumner,

                                                });

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }


        }



    }



    getTrussData = () => {


        if (this.state.trussNumber != null) {

            db.trussById(this.state.trussNumber, numberWeek - 1, 'HAR 5 - Angelle', number, '533/534').then((data) => {
                console.log(data);
                console.log("Calling database")
                truss = data;
                this.setState({
                    truss,
                    setFruits: data.setFruits,
                    setFlowers: data.setFlowers,
                    pruningNumber: data.pruningNumber,
                });
                console.log("Truss Details", this.state.truss);

                this.calculateFruitLoad();
                this.calculateHarvestTruss();
                this.calculateSettingTruss2();
                this.calculateFloweringTruss2();


            }).catch((err) => {
                console.log(err);

            })
        } else {


        }





        setTimeout(() => {

            if ((parseInt(this.state.trussNumber) + 1) != null) {

                db.trussByIdRow((parseInt(this.state.trussNumber) + 1), numberWeek - 1, 'HAR 5 - Angelle', number, '533/534').then((data1) => {
                    console.log(data1);
                    console.log("Calling database")
                    truss1 = data1;
                    this.setState({
                        truss1,
                        setFruits1: data1.setFruits,
                        setFlowers1: data1.setFlowers,
                        pruningNumber1: data1.pruningNumber,
                    });
                    console.log("Truss Details", this.state.truss1);

                    this.calculateFruitLoad();
                    this.calculateHarvestTruss();
                    this.calculateSettingTruss2();
                    this.calculateFloweringTruss2();


                }).catch((err) => {
                    console.log(err);

                })
            } else {


            }


        }, 1000);



        setTimeout(() => {
            if ((parseInt(this.state.trussNumber) + 2) != null) {

                db.trussById((parseInt(this.state.trussNumber) + 2), numberWeek - 1, 'HAR 5 - Angelle', number, '533/534').then((data2) => {
                    console.log(data2);
                    console.log("Calling database")
                    truss2 = data2;
                    this.setState({
                        truss2,
                        setFruits2: data2.setFruits,
                        setFlowers2: data2.setFlowers,
                        pruningNumber2: data2.pruningNumber,
                    });
                    console.log("Truss Details", this.state.truss2);

                    this.calculateFruitLoad();
                    this.calculateHarvestTruss();
                    this.calculateSettingTruss2();
                    this.calculateFloweringTruss2();


                }).catch((err) => {
                    console.log(err);

                })
            } else {


            }

        }, 2000);


        setTimeout(() => {
            if ((parseInt(this.state.trussNumber) + 3) != null) {

                db.trussById((parseInt(this.state.trussNumber) + 3), numberWeek - 1, 'HAR 5 - Angelle', number, '533/534').then((data3) => {
                    console.log(data3);
                    console.log("Calling database")
                    truss3 = data3;
                    this.setState({
                        truss3,
                        setFruits3: data3.setFruits,
                        setFlowers3: data3.setFlowers,
                        pruningNumber3: data3.pruningNumber,
                    });
                    console.log("Truss Details", this.state.truss3);

                    this.calculateFruitLoad();
                    this.calculateHarvestTruss();
                    this.calculateSettingTruss2();
                    this.calculateFloweringTruss2();

                }).catch((err) => {
                    console.log(err);

                })
            } else {


            }

        }, 3000);



        setTimeout(() => {
            if ((parseInt(this.state.trussNumber) + 4) != null) {

                db.trussById((parseInt(this.state.trussNumber) + 4), numberWeek - 1, 'HAR 5 - Angelle', number, '533/534').then((data4) => {
                    console.log(data4);
                    console.log("Calling database")
                    truss4 = data4;
                    this.setState({
                        truss4,
                        setFruits4: data4.setFruits,
                        setFlowers4: data4.setFlowers,
                        pruningNumber4: data4.pruningNumber,
                    });
                    console.log("Truss Details", this.state.truss4);

                    this.calculateFruitLoad();
                    this.calculateHarvestTruss();
                    this.calculateSettingTruss2();
                    this.calculateFloweringTruss2();

                }).catch((err) => {
                    console.log(err);

                })
            } else {


            }

        }, 4000);


        setTimeout(() => {

            if ((parseInt(this.state.trussNumber) + 5) != null) {

                db.trussById((parseInt(this.state.trussNumber) + 5), numberWeek - 1, 'HAR 5 - Angelle', number, '533/534').then((data5) => {
                    console.log(data5);
                    console.log("Calling database")
                    truss5 = data5;
                    this.setState({
                        truss5,
                        setFruits5: data5.setFruits,
                        setFlowers5: data5.setFlowers,
                        pruningNumber5: data5.pruningNumber,
                    });
                    console.log("Truss Details", this.state.truss5);

                    this.calculateFruitLoad();
                    this.calculateHarvestTruss();
                    this.calculateSettingTruss2();
                    this.calculateFloweringTruss2();

                }).catch((err) => {
                    console.log(err);

                })
            } else {


            }

        }, 5000);


        setTimeout(() => {

            if ((parseInt(this.state.trussNumber) + 6) != null) {

                db.trussById((parseInt(this.state.trussNumber) + 6), numberWeek - 1, 'HAR 5 - Angelle', number, '533/534').then((data6) => {
                    console.log(data6);
                    console.log("Calling database")
                    truss6 = data6;
                    this.setState({
                        truss6,
                        setFruits6: data6.setFruits,
                        setFlowers6: data6.setFlowers,
                        pruningNumber6: data6.pruningNumber,
                    });
                    console.log("Truss Details", this.state.truss6);

                    this.calculateFruitLoad();
                    this.calculateHarvestTruss();
                    this.calculateSettingTruss2();
                    this.calculateFloweringTruss2();

                }).catch((err) => {
                    console.log(err);

                })
            } else {


            }

        }, 6000);


        setTimeout(() => {

            if ((parseInt(this.state.trussNumber) + 7) != null) {

                db.trussById((parseInt(this.state.trussNumber) + 7), numberWeek - 1, 'HAR 5 - Angelle', number, '533/534').then((data7) => {
                    console.log(data7);
                    console.log("Calling database")
                    truss7 = data7;
                    this.setState({
                        truss7,
                        setFruits7: data7.setFruits,
                        setFlowers7: data7.setFlowers,
                        pruningNumber7: data7.pruningNumber,
                    });
                    console.log("Truss Details", this.state.truss7);

                    this.calculateFruitLoad();
                    this.calculateHarvestTruss();
                    this.calculateSettingTruss2();
                    this.calculateFloweringTruss2();

                }).catch((err) => {
                    console.log(err);

                })
            } else {


            }

        }, 7000);


        setTimeout(() => {

            if ((parseInt(this.state.trussNumber) + 8) != null) {

                db.trussById((parseInt(this.state.trussNumber) + 8), numberWeek - 1, 'HAR 5 - Angelle', number, '533/534').then((data8) => {
                    console.log(data8);
                    console.log("Calling database")
                    truss8 = data8;
                    this.setState({
                        truss8,
                        setFruits8: data8.setFruits,
                        setFlowers8: data8.setFlowers,
                        pruningNumber8: data8.pruningNumber,
                    });
                    console.log("Truss Details", this.state.truss8);

                    this.calculateFruitLoad();
                    this.calculateHarvestTruss();
                    this.calculateSettingTruss2();
                    this.calculateFloweringTruss2();

                }).catch((err) => {
                    console.log(err);

                })
            } else {


            }

        }, 8000);


        setTimeout(() => {

            if ((parseInt(this.state.trussNumber) + 9) != null) {

                db.trussById((parseInt(this.state.trussNumber) + 9), numberWeek - 1, 'HAR 5 - Angelle', number, '533/534').then((data9) => {
                    console.log(data9);
                    console.log("Calling database")
                    truss9 = data9;
                    this.setState({
                        truss9,
                        setFruits9: data9.setFruits,
                        setFlowers9: data9.setFlowers,
                        pruningNumber9: data9.pruningNumber,
                    });
                    console.log("Truss Details", this.state.truss9);


                    this.calculateFruitLoad();
                    this.calculateHarvestTruss();
                    this.calculateSettingTruss2();
                    this.calculateFloweringTruss2();

                }).catch((err) => {
                    console.log(err);

                })
            } else {


            }

        }, 9000);


    }



    onChangeText(text) {
        ['TrussNumber', 'FruitDiameter', 'SetFruits', 'SetFlowers', 'PruningNumber', 'TrussNumber1', 'FruitDiameter1', 'SetFruits1', 'SetFlowers1', 'PruningNumber1', 'TrussNumber2', 'FruitDiameter2', 'SetFruits2', 'SetFlowers2', 'PruningNumber2',
            'TrussNumber3', 'FruitDiameter3', 'SetFruits3', 'SetFlowers3', 'PruningNumber3', 'TrussNumber4', 'FruitDiameter4', 'SetFruits4', 'SetFlowers4', 'PruningNumber4', 'TrussNumber5', 'FruitDiameter5', 'SetFruits5', 'SetFlowers5', 'PruningNumber5',
            'TrussNumber6', 'FruitDiameter6', 'SetFruits6', 'SetFlowers6', 'PruningNumber6', 'TrussNumber7', 'FruitDiameter7', 'SetFruits7', 'SetFlowers7', 'PruningNumber7',
            'TrussNumber8', 'FruitDiameter8', 'SetFruits8', 'SetFlowers8', 'PruningNumber8', 'TrussNumber9', 'FruitDiameter9', 'SetFruits9', 'SetFlowers9', 'PruningNumber9',]
            .map((name) => ({ name, ref: this[name] }))
            .forEach(({ name, ref }) => {
                if (ref.isFocused()) {
                    this.setState({ [name]: text });
                }
            });
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


    saveTrussToDb = () => {

        if (this.state.trussNumber !== null && this.state.pruningNumber !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber } = this.state;
            const { fruitDiameter } = this.state;
            const { setFruits } = this.state;
            const { setFlowers } = this.state;
            const { pruningNumber } = this.state;



            let data = {
                trussNumber: this.state.trussNumber,
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits,
                setFlowers: this.state.setFlowers,
                pruningNumber: this.state.pruningNumber,
                plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'no'

            }


            let dataSend11 = {
                trussNumber: this.state.trussNumber,
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits,
                setFlowers: this.state.setFlowers,
                pruningNumber: this.state.pruningNumber,
                plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'yes'


            }


            if (this.state.isItConnected === 'Online') {



                db.addTrussDetails(dataSend11).then((result) => {
                    console.log(result);
                    this.setState({

                        isLoading: true,
                        isDataSend: true,

                    });
                    abc = '1';


                    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                    const url = `${scriptUrl}?
                    callback=ctrlq&plantRow=${'533/534'}&plantName=${'HAR 5 - Angelle'}&plantWeek=${numberWeek}&plantNumber=${number}&trussNumber=${this.state.trussNumber}&setFruits=${this.state.setFruits}&setFlowers=${this.state.setFlowers}&pruningNumber=${this.state.pruningNumber}&fruitLoad=${this.state.fruitLoad}&fruitDiameter=${this.state.fruitDiameter}&pruningFlower=${this.state.pruneFlowering}&floweringTruss=${this.state.floweringTrussss}&pruningSet=${this.state.prunSetting}&settingTruss=${this.state.settingTrussNumber}&pruningHarvest=${this.state.pruningHar}&harvestTruss=${this.state.harvestTruss}`;

                    console.log("URL : " + url);
                    fetch(url, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                            this.setState({

                                isLoading: true,
                                isDataSend: true,

                            });
                            if ((parseInt(this.state.trussNumber) + 1) !== null && this.state.pruningNumber1 !== '') {

                                this.saveTrussToDB1();


                            } else {

                                this.setState({

                                    isLoading: false,
                                    isDataSend: true,

                                });

                                Alert.alert('Completed!')

                                this.props.navigation.navigate('Har5AngellePlant1')

                            }

                        }

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


                db.addTrussDetails(data).then((result) => {
                    console.log(result);
                    this.setState({
                        isLoading: false,
                        isDataSend: true,

                    });
                    abc = '1';


                    if ((parseInt(this.state.trussNumber) + 1) !== null && this.state.pruningNumber1 !== '') {

                        this.saveTrussToDB1();


                    } else {

                        Alert.alert('Completed!')

                        this.props.navigation.navigate('Har5AngellePlant1')

                    }
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




            }





        } else {



        }



    }
    saveTrussToDB1 = () => {


        if ((parseInt(this.state.trussNumber) + 1) != null && this.state.pruningNumber1 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber1 } = this.state;
            const { fruitDiameter1 } = this.state;
            const { setFruits1 } = this.state;
            const { setFlowers1 } = this.state;
            const { pruningNumber1 } = this.state;



            let data1 = {
                trussNumber: (parseInt(this.state.trussNumber) + 1),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits1,
                setFlowers: this.state.setFlowers1,
                pruningNumber: this.state.pruningNumber1,
                plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'no'


            }

            let data1Send = {
                trussNumber: (parseInt(this.state.trussNumber) + 1),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits1,
                setFlowers: this.state.setFlowers1,
                pruningNumber: this.state.pruningNumber1,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'yes'


            }


            if (this.state.isItConnected === 'Online') {


                db.addTrussDetails(data1Send).then((result) => {
                    console.log(result);
                    this.setState({

                        isLoading: true,
                        isDataSend: true,

                    });

                    abc = '1';



                    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                    const url = `${scriptUrl}?
                    callback=ctrlq&plantRow=${'533/534'}&plantName=${'HAR 5 - Angelle'}&plantWeek=${numberWeek}&plantNumber=${number}&trussNumber=${parseInt(this.state.trussNumber) + 1}&setFruits=${this.state.setFruits1}&setFlowers=${this.state.setFlowers1}&pruningNumber=${this.state.pruningNumber1}&fruitLoad=${this.state.fruitLoad}&fruitDiameter=${this.state.fruitDiameter1}&pruningFlower=${this.state.pruneFlowering}&floweringTruss=${this.state.floweringTrussss}&pruningSet=${this.state.prunSetting}&settingTruss=${this.state.settingTrussNumber}&pruningHarvest=${this.state.pruningHar}&harvestTruss=${this.state.harvestTruss}`;

                    console.log("URL : " + url);
                    fetch(url, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                            this.setState({

                                isLoading: true,
                                isDataSend: true,

                            });

                            if ((parseInt(this.state.trussNumber) + 2) !== null && this.state.pruningNumber2 !== '') {

                                this.saveTrussToDB2();


                            } else {

                                this.setState({

                                    isLoading: false,
                                    isDataSend: true,

                                });

                                Alert.alert('Completed!')

                                this.props.navigation.navigate('Har5AngellePlant1')

                            }

                        }

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

                db.addTrussDetails(data1).then((result) => {
                    console.log(result);
                    this.setState({
                        isLoading: false,
                        isDataSend: true,

                    });
                    abc = '1';

                    if ((parseInt(this.state.trussNumber) + 2) !== null && this.state.pruningNumber2 !== '') {

                        this.saveTrussToDB2();


                    } else {

                        Alert.alert('Completed!')

                        this.props.navigation.navigate('Har5AngellePlant1')

                    }
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





            }









        } else {


        }



    }

    saveTrussToDB2 = () => {

        if ((parseInt(this.state.trussNumber) + 2) != null && this.state.pruningNumber2 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber2 } = this.state;
            const { fruitDiameter2 } = this.state;
            const { setFruits2 } = this.state;
            const { setFlowers2 } = this.state;
            const { pruningNumber2 } = this.state;



            let data2 = {
                trussNumber: (parseInt(this.state.trussNumber) + 2),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits2,
                setFlowers: this.state.setFlowers2,
                pruningNumber: this.state.pruningNumber2,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'no'


            }

            let data2Send = {
                trussNumber: (parseInt(this.state.trussNumber) + 2),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits2,
                setFlowers: this.state.setFlowers2,
                pruningNumber: this.state.pruningNumber2,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'yes'


            }



            if (this.state.isItConnected === 'Online') {



                db.addTrussDetails(data2Send).then((result) => {
                    console.log(result);
                    this.setState({
                        isLoading: true,
                        isDataSend: true,

                    });
                    abc = '1';



                    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                    const url = `${scriptUrl}?
                    callback=ctrlq&plantRow=${'533/534'}&plantName=${'HAR 5 - Angelle'}&plantWeek=${numberWeek}&plantNumber=${number}&trussNumber=${parseInt(this.state.trussNumber) + 2}&setFruits=${this.state.setFruits2}&setFlowers=${this.state.setFlowers2}&pruningNumber=${this.state.pruningNumber2}&fruitLoad=${this.state.fruitLoad}&fruitDiameter=${this.state.fruitDiameter2}&pruningFlower=${this.state.pruneFlowering}&floweringTruss=${this.state.floweringTrussss}&pruningSet=${this.state.prunSetting}&settingTruss=${this.state.settingTrussNumber}&pruningHarvest=${this.state.pruningHar}&harvestTruss=${this.state.harvestTruss}`;

                    console.log("URL : " + url);
                    fetch(url, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                            this.setState({

                                isLoading: true,
                                isDataSend: true,

                            });
                            if ((parseInt(this.state.trussNumber) + 3) !== null && this.state.pruningNumber3 !== '') {

                                this.saveTrussToDB3();


                            } else {

                                this.setState({

                                    isLoading: false,
                                    isDataSend: true,

                                });

                                Alert.alert('Completed!')

                                this.props.navigation.navigate('Har5AngellePlant1')

                            }

                        }

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

                db.addTrussDetails(data2).then((result) => {
                    console.log(result);
                    this.setState({
                        isLoading: false,
                        isDataSend: true,

                    });
                    abc = '1';

                    if ((parseInt(this.state.trussNumber) + 3) !== null && this.state.pruningNumber3 !== '') {

                        this.saveTrussToDB3();


                    } else {

                        Alert.alert('Completed!')

                        this.props.navigation.navigate('Har5AngellePlant1')

                    }
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

            }




        } else {




        }

    }

    saveTrussToDB3 = () => {

        if ((parseInt(this.state.trussNumber) + 3) !== null && this.state.pruningNumber3 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber3 } = this.state;
            const { fruitDiameter3 } = this.state;
            const { setFruits3 } = this.state;
            const { setFlowers3 } = this.state;
            const { pruningNumber3 } = this.state;



            let data3 = {
                trussNumber: (parseInt(this.state.trussNumber) + 3),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits3,
                setFlowers: this.state.setFlowers3,
                pruningNumber: this.state.pruningNumber3,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'no'


            }

            let data3Send = {
                trussNumber: (parseInt(this.state.trussNumber) + 3),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits3,
                setFlowers: this.state.setFlowers3,
                pruningNumber: this.state.pruningNumber3,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'yes'


            }



            if (this.state.isItConnected === 'Online') {



                db.addTrussDetails(data3Send).then((result) => {
                    console.log(result);
                    this.setState({
                        isLoading: true,
                        isDataSend: true,

                    });
                    abc = '1';



                    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                    const url = `${scriptUrl}?
                    callback=ctrlq&plantRow=${'533/534'}&plantName=${'HAR 5 - Angelle'}&plantWeek=${numberWeek}&plantNumber=${number}&trussNumber=${parseInt(this.state.trussNumber) + 3}&setFruits=${this.state.setFruits3}&setFlowers=${this.state.setFlowers3}&pruningNumber=${this.state.pruningNumber3}&fruitLoad=${this.state.fruitLoad}&fruitDiameter=${this.state.fruitDiameter3}&pruningFlower=${this.state.pruneFlowering}&floweringTruss=${this.state.floweringTrussss}&pruningSet=${this.state.prunSetting}&settingTruss=${this.state.settingTrussNumber}&pruningHarvest=${this.state.pruningHar}&harvestTruss=${this.state.harvestTruss}`;

                    console.log("URL : " + url);
                    fetch(url, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                            this.setState({

                                isLoading: true,
                                isDataSend: true,

                            });
                            if ((parseInt(this.state.trussNumber) + 4) !== null && this.state.pruningNumber4 !== '') {

                                this.saveTrussToDB4();


                            } else {

                                this.setState({

                                    isLoading: false,
                                    isDataSend: true,

                                });

                                Alert.alert('Completed!')

                                this.props.navigation.navigate('Har5AngellePlant1')

                            }

                        }

                    });



                    this.setState({

                        isLoading: false,
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

                db.addTrussDetails(data3).then((result) => {
                    console.log(result);
                    this.setState({
                        isLoading: false,
                        isDataSend: true,

                    });
                    abc = '1';

                    if ((parseInt(this.state.trussNumber) + 4) !== null && this.state.pruningNumber4 !== '') {

                        this.saveTrussToDB4();


                    } else {

                        Alert.alert('Completed!')

                        this.props.navigation.navigate('Har5AngellePlant1')

                    }
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



            }




        } else {



        }



    }

    saveTrussToDB4 = () => {

        if ((parseInt(this.state.trussNumber) + 4) != null && this.state.pruningNumber4 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber4 } = this.state;
            const { fruitDiameter4 } = this.state;
            const { setFruits4 } = this.state;
            const { setFlowers4 } = this.state;
            const { pruningNumber4 } = this.state;



            let data4 = {
                trussNumber: (parseInt(this.state.trussNumber) + 4),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits4,
                setFlowers: this.state.setFlowers4,
                pruningNumber: this.state.pruningNumber4,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'no'


            }

            let data4Send = {
                trussNumber: (parseInt(this.state.trussNumber) + 4),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits4,
                setFlowers: this.state.setFlowers4,
                pruningNumber: this.state.pruningNumber4,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'yes'


            }

            if (this.state.isItConnected === 'Online') {



                db.addTrussDetails(data4Send).then((result) => {
                    console.log(result);
                    this.setState({

                        isLoading: true,
                        isDataSend: true,

                    });
                    abc = '1';



                    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                    const url = `${scriptUrl}?
                    callback=ctrlq&plantRow=${'533/534'}&plantName=${'HAR 5 - Angelle'}&plantWeek=${numberWeek}&plantNumber=${number}&trussNumber=${parseInt(this.state.trussNumber) + 4}&setFruits=${this.state.setFruits4}&setFlowers=${this.state.setFlowers4}&pruningNumber=${this.state.pruningNumber4}&fruitLoad=${this.state.fruitLoad}&fruitDiameter=${this.state.fruitDiameter4}&pruningFlower=${this.state.pruneFlowering}&floweringTruss=${this.state.floweringTrussss}&pruningSet=${this.state.prunSetting}&settingTruss=${this.state.settingTrussNumber}&pruningHarvest=${this.state.pruningHar}&harvestTruss=${this.state.harvestTruss}`;

                    console.log("URL : " + url);
                    fetch(url, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                            this.setState({

                                isLoading: true,
                                isDataSend: true,

                            });
                            if ((parseInt(this.state.trussNumber) + 5) !== null && this.state.pruningNumber5 !== '') {

                                this.saveTrussToDB5();


                            } else {

                                this.setState({

                                    isLoading: false,
                                    isDataSend: true,

                                });

                                Alert.alert('Completed!')

                                this.props.navigation.navigate('Har5AngellePlant1')

                            }


                        }

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

                db.addTrussDetails(data4).then((result) => {
                    console.log(result);
                    this.setState({
                        isLoading: false,
                        isDataSend: true,

                    });
                    abc = '1';


                    if ((parseInt(this.state.trussNumber) + 5) !== null && this.state.pruningNumber5 !== '') {

                        this.saveTrussToDB5();



                    } else {

                        Alert.alert('Completed!')

                        this.props.navigation.navigate('Har5AngellePlant1')

                    }
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

            }

        } else {



        }



    }

    saveTrussToDB5 = () => {

        if ((parseInt(this.state.trussNumber) + 5) != null && this.state.pruningNumber5 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber5 } = this.state;
            const { fruitDiameter5 } = this.state;
            const { setFruits5 } = this.state;
            const { setFlowers5 } = this.state;
            const { pruningNumber5 } = this.state;



            let data5 = {
                trussNumber: (parseInt(this.state.trussNumber) + 5),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits5,
                setFlowers: this.state.setFlowers5,
                pruningNumber: this.state.pruningNumber5,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'no'


            }

            let data5Send = {
                trussNumber: (parseInt(this.state.trussNumber) + 5),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits5,
                setFlowers: this.state.setFlowers5,
                pruningNumber: this.state.pruningNumber5,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'yes'


            }

            if (this.state.isItConnected === 'Online') {



                db.addTrussDetails(data5Send).then((result) => {
                    console.log(result);
                    this.setState({

                        isLoading: true,
                        isDataSend: true,

                    });
                    abc = '1';


                    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                    const url = `${scriptUrl}?
                    callback=ctrlq&plantRow=${'533/534'}&plantName=${'HAR 5 - Angelle'}&plantWeek=${numberWeek}&plantNumber=${number}&trussNumber=${parseInt(this.state.trussNumber) + 5}&setFruits=${this.state.setFruits5}&setFlowers=${this.state.setFlowers5}&pruningNumber=${this.state.pruningNumber5}&fruitLoad=${this.state.fruitLoad}&fruitDiameter=${this.state.fruitDiameter5}&pruningFlower=${this.state.pruneFlowering}&floweringTruss=${this.state.floweringTrussss}&pruningSet=${this.state.prunSetting}&settingTruss=${this.state.settingTrussNumber}&pruningHarvest=${this.state.pruningHar}&harvestTruss=${this.state.harvestTruss}`;

                    console.log("URL : " + url);
                    fetch(url, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                            this.setState({

                                isLoading: true,
                                isDataSend: true,

                            });
                            if ((parseInt(this.state.trussNumber) + 6) !== null && this.state.pruningNumber6 !== '') {

                                this.saveTrussToDB6();
        
        
                            } else {
        
                                this.setState({
        
                                    isLoading: false,
                                    isDataSend: true,
        
                                });
        
                                Alert.alert('Completed!')
        
                                this.props.navigation.navigate('Har5AngellePlant1')
        
                            }


                        }

                    });



                    this.setState({

                        isLoading: false,
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

                db.addTrussDetails(data5).then((result) => {
                    console.log(result);
                    this.setState({
                        isLoading: false,
                        isDataSend: true,

                    });
                    abc = '1';

                    if ((parseInt(this.state.trussNumber) + 6) !== null && this.state.pruningNumber6 !== '') {

                        this.saveTrussToDB6();


                    } else {

                        this.setState({

                            isLoading: false,
                            isDataSend: true,

                        });

                        Alert.alert('Completed!')

                        this.props.navigation.navigate('Har5AngellePlant1')

                    }
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

            }


        } else {



        }



    }

    saveTrussToDB6 = () => {

        if ((parseInt(this.state.trussNumber) + 6) != null && this.state.pruningNumber6 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber6 } = this.state;
            const { fruitDiameter6 } = this.state;
            const { setFruits6 } = this.state;
            const { setFlowers6 } = this.state;
            const { pruningNumber6 } = this.state;



            let data6 = {
                trussNumber: (parseInt(this.state.trussNumber) + 6),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits6,
                setFlowers: this.state.setFlowers6,
                pruningNumber: this.state.pruningNumber6,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'no'


            }

            let data6Send = {
                trussNumber: (parseInt(this.state.trussNumber) + 6),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits6,
                setFlowers: this.state.setFlowers6,
                pruningNumber: this.state.pruningNumber6,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'yes'


            }

            if (this.state.isItConnected === 'Online') {



                db.addTrussDetails(data6Send).then((result) => {
                    console.log(result);
                    this.setState({

                        isLoading: true,
                        isDataSend: true,

                    });

                    abc = '1';


                    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                    const url = `${scriptUrl}?
                    callback=ctrlq&plantRow=${'533/534'}&plantName=${'HAR 5 - Angelle'}&plantWeek=${numberWeek}&plantNumber=${number}&trussNumber=${parseInt(this.state.trussNumber) + 6}&setFruits=${this.state.setFruits6}&setFlowers=${this.state.setFlowers6}&pruningNumber=${this.state.pruningNumber6}&fruitLoad=${this.state.fruitLoad}&fruitDiameter=${this.state.fruitDiameter6}&pruningFlower=${this.state.pruneFlowering}&floweringTruss=${this.state.floweringTrussss}&pruningSet=${this.state.prunSetting}&settingTruss=${this.state.settingTrussNumber}&pruningHarvest=${this.state.pruningHar}&harvestTruss=${this.state.harvestTruss}`;

                    console.log("URL : " + url);
                    fetch(url, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                            this.setState({

                                isLoading: true,
                                isDataSend: true,

                            });

                            if ((parseInt(this.state.trussNumber) + 7) !== null && this.state.pruningNumber7 !== '') {

                                this.saveTrussToDB7();


                            } else {
                                this.setState({

                                    isLoading: false,
                                    isDataSend: true,

                                });

                                Alert.alert('Completed!')

                                this.props.navigation.navigate('Har5AngellePlant1')

                            }


                        }

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

                db.addTrussDetails(data6).then((result) => {
                    console.log(result);
                    this.setState({
                        isLoading: false,
                        isDataSend: true,

                    });
                    abc = '1';

                    if ((parseInt(this.state.trussNumber) + 7) !== null && this.state.pruningNumber7 !== '') {

                        this.saveTrussToDB7();


                    } else {

                        Alert.alert('Completed!')

                        this.props.navigation.navigate('Har5AngellePlant1')

                    }
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

            }


        } else {



        }



    }

    saveTrussToDB7 = () => {

        if ((parseInt(this.state.trussNumber) + 7) != null && this.state.pruningNumber7 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber7 } = this.state;
            const { fruitDiameter7 } = this.state;
            const { setFruits7 } = this.state;
            const { setFlowers7 } = this.state;
            const { pruningNumber7 } = this.state;



            let data7 = {
                trussNumber: (parseInt(this.state.trussNumber) + 7),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits7,
                setFlowers: this.state.setFlowers7,
                pruningNumber: this.state.pruningNumber7,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'no'


            }

            let data7Send = {
                trussNumber: (parseInt(this.state.trussNumber) + 7),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits7,
                setFlowers: this.state.setFlowers7,
                pruningNumber: this.state.pruningNumber7,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'yes'


            }


            if (this.state.isItConnected === 'Online') {



                db.addTrussDetails(data7Send).then((result) => {
                    console.log(result);

                    this.setState({

                        isLoading: true,
                        isDataSend: true,

                    });
                    abc = '1';


                    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                    const url = `${scriptUrl}?
                    callback=ctrlq&plantRow=${'533/534'}&plantName=${'HAR 5 - Angelle'}&plantWeek=${numberWeek}&plantNumber=${number}&trussNumber=${parseInt(this.state.trussNumber) + 7}&setFruits=${this.state.setFruits7}&setFlowers=${this.state.setFlowers7}&pruningNumber=${this.state.pruningNumber7}&fruitLoad=${this.state.fruitLoad}&fruitDiameter=${this.state.fruitDiameter7}&pruningFlower=${this.state.pruneFlowering}&floweringTruss=${this.state.floweringTrussss}&pruningSet=${this.state.prunSetting}&settingTruss=${this.state.settingTrussNumber}&pruningHarvest=${this.state.pruningHar}&harvestTruss=${this.state.harvestTruss}`;

                    console.log("URL : " + url);
                    fetch(url, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {


                            this.setState({

                                isLoading: true,
                                isDataSend: true,

                            });
                            if ((parseInt(this.state.trussNumber) + 8) !== null && this.state.pruningNumber8 !== '') {

                                this.saveTrussToDB8();


                            } else {

                                this.setState({

                                    isLoading: false,
                                    isDataSend: true,

                                });
                                Alert.alert('Completed!')

                                this.props.navigation.navigate('Har5AngellePlant1')

                            }


                        }

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


                db.addTrussDetails(data7).then((result) => {
                    console.log(result);
                    this.setState({
                        isLoading: false,
                        isDataSend: true,

                    });
                    abc = '1';

                    if ((parseInt(this.state.trussNumber) + 8) !== null && this.state.pruningNumber8 !== '') {

                        this.saveTrussToDB8();


                    } else {

                        Alert.alert('Completed!')

                        this.props.navigation.navigate('Har5AngellePlant1')

                    }
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

            }



        } else {



        }



    }

    saveTrussToDB8 = () => {

        if ((parseInt(this.state.trussNumber) + 8) != null && this.state.pruningNumber8 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber8 } = this.state;
            const { fruitDiameter8 } = this.state;
            const { setFruits8 } = this.state;
            const { setFlowers8 } = this.state;
            const { pruningNumber8 } = this.state;



            let data8 = {
                trussNumber: (parseInt(this.state.trussNumber) + 8),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits8,
                setFlowers: this.state.setFlowers8,
                pruningNumber: this.state.pruningNumber8,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'no'


            }

            let data8Send = {
                trussNumber: (parseInt(this.state.trussNumber) + 8),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits8,
                setFlowers: this.state.setFlowers8,
                pruningNumber: this.state.pruningNumber8,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'yes'


            }

            if (this.state.isItConnected === 'Online') {



                db.addTrussDetails(data8Send).then((result) => {
                    console.log(result);

                    this.setState({

                        isLoading: true,
                        isDataSend: true,

                    });

                    abc = '1';


                    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                    const url = `${scriptUrl}?
                    callback=ctrlq&plantRow=${'533/534'}&plantName=${'HAR 5 - Angelle'}&plantWeek=${numberWeek}&plantNumber=${number}&trussNumber=${parseInt(this.state.trussNumber) + 8}&setFruits=${this.state.setFruits8}&setFlowers=${this.state.setFlowers8}&pruningNumber=${this.state.pruningNumber8}&fruitLoad=${this.state.fruitLoad}&fruitDiameter=${this.state.fruitDiameter8}&pruningFlower=${this.state.pruneFlowering}&floweringTruss=${this.state.floweringTrussss}&pruningSet=${this.state.prunSetting}&settingTruss=${this.state.settingTrussNumber}&pruningHarvest=${this.state.pruningHar}&harvestTruss=${this.state.harvestTruss}`;

                    console.log("URL : " + url);
                    fetch(url, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {


                            this.setState({

                                isLoading: true,
                                isDataSend: true,

                            });

                            if ((parseInt(this.state.trussNumber) + 9) !== null && this.state.pruningNumber9 !== '') {

                                this.saveTrussToDB9();


                            } else {



                                this.setState({

                                    isLoading: false,
                                    isDataSend: true,

                                });

                                Alert.alert('Completed!')

                                this.props.navigation.navigate('Har5AngellePlant1')

                            }


                        }

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

                db.addTrussDetails(data8).then((result) => {
                    console.log(result);
                    this.setState({
                        isLoading: false,
                        isDataSend: true,

                    });
                    abc = '1';

                    if ((parseInt(this.state.trussNumber) + 9) !== null && this.state.pruningNumber9 !== '') {

                        this.saveTrussToDB9();


                    } else {

                        Alert.alert('Completed!')

                        this.props.navigation.navigate('Har5AngellePlant1')

                    }
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
            }





        } else {


        }

    }

    saveTrussToDB9 = () => {

        if ((parseInt(this.state.trussNumber) + 9) != null && this.state.pruningNumber9 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber9 } = this.state;
            const { fruitDiameter9 } = this.state;
            const { setFruits9 } = this.state;
            const { setFlowers9 } = this.state;
            const { pruningNumber9 } = this.state;



            let data9 = {
                trussNumber: (parseInt(this.state.trussNumber) + 9),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits9,
                setFlowers: this.state.setFlowers9,
                pruningNumber: this.state.pruningNumber9,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'no'


            }

            let data9Send = {
                trussNumber: (parseInt(this.state.trussNumber) + 9),
                fruitDiameter: this.state.fruitDiameter,
                setFruits: this.state.setFruits9,
                setFlowers: this.state.setFlowers9,
                pruningNumber: this.state.pruningNumber9,
                 plantRow: '533/534',
                plantName: 'HAR 5 - Angelle',
                plantWeek: numberWeek,
                plantNumber: number,
                fruitLoad: this.state.fruitLoad,
                pruningFlower: this.state.pruneFlowering,
                floweringTruss: this.state.floweringTrussss,
                pruningSet: this.state.prunSetting,
                settingTruss: this.state.settingTrussNumber,
                pruningHarvest: this.state.pruningHar,
                harvestTruss: this.state.harvestTruss,
                dataSend: 'yes'


            }

            if (this.state.isItConnected === 'Online') {




                db.addTrussDetails(data9Send).then((result) => {
                    console.log(result);
                    this.setState({

                        isLoading: true,
                        isDataSend: true,

                    });

                    abc = '1';


                    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                    const url = `${scriptUrl}?
                        callback=ctrlq&plantRow=${'533/534'}&plantName=${'HAR 5 - Angelle'}&plantWeek=${numberWeek}&plantNumber=${number}&trussNumber=${parseInt(this.state.trussNumber) + 9}&setFruits=${this.state.setFruits9}&setFlowers=${this.state.setFlowers9}&pruningNumber=${this.state.pruningNumber9}&fruitLoad=${this.state.fruitLoad}&fruitDiameter=${this.state.fruitDiameter9}&pruningFlower=${this.state.pruneFlowering}&floweringTruss=${this.state.floweringTrussss}&pruningSet=${this.state.prunSetting}&settingTruss=${this.state.settingTrussNumber}&pruningHarvest=${this.state.pruningHar}&harvestTruss=${this.state.harvestTruss}`;

                    console.log("URL : " + url);
                    fetch(url, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                            this.setState({

                                isLoading: false,
                                isDataSend: true,

                            });

                            Alert.alert('Completed!')

                            this.props.navigation.navigate('Har5AngellePlant1')


                        }

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


                db.addTrussDetails(data9).then((result) => {
                    console.log(result);
                    this.setState({
                        isLoading: false,
                        isDataSend: true,

                    });
                    abc = '1';
                    Alert.alert('Completed!')

                    this.props.navigation.navigate('Har5AngellePlant1')


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
            }



        } else {


        }



    }
    onSubmitTrussNumber() {
        this.TrussNumber.focus();
    }

    onSubmitLastWeek() {
        this.FruitDiameter.focus();
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

    onSubmitTrussNumber1() {
        this.TrussNumber1.focus();
    }

    onSubmitLastWeek1() {
        this.FruitDiameter1.focus();
    }

    onSubmitSetFruits1() {
        this.SetFruits1.focus();
    }

    onSubmitFlowers1() {
        this.SetFlowers1.focus();
    }

    onSubmitPruningNumber1() {
        this.PruningNumber1.focus();
    }

    onSubmitTrussNumber2() {
        this.TrussNumber2.focus();
    }

    onSubmitLastWeek2() {
        this.FruitDiameter2.focus();
    }

    onSubmitSetFruits2() {
        this.SetFruits2.focus();
    }

    onSubmitFlowers2() {
        this.SetFlowers2.focus();
    }

    onSubmitPruningNumber2() {
        this.PruningNumber2.focus();
    }

    onSubmitTrussNumber3() {
        this.TrussNumber3.focus();
    }

    onSubmitLastWeek3() {
        this.FruitDiameter3.focus();
    }

    onSubmitSetFruits3() {
        this.SetFruits3.focus();
    }

    onSubmitFlowers3() {
        this.SetFlowers3.focus();
    }

    onSubmitPruningNumber3() {
        this.PruningNumber3.focus();
    }

    onSubmitTrussNumber4() {
        this.TrussNumber4.focus();
    }

    onSubmitLastWeek4() {
        this.FruitDiameter4.focus();
    }

    onSubmitSetFruits4() {
        this.SetFruits4.focus();
    }

    onSubmitFlowers4() {
        this.SetFlowers4.focus();
    }

    onSubmitPruningNumber4() {
        this.PruningNumber4.focus();
    }

    onSubmitTrussNumber5() {
        this.TrussNumber5.focus();
    }

    onSubmitLastWeek5() {
        this.FruitDiameter5.focus();
    }

    onSubmitSetFruits5() {
        this.SetFruits5.focus();
    }

    onSubmitFlowers5() {
        this.SetFlowers5.focus();
    }

    onSubmitPruningNumber5() {
        this.PruningNumber5.focus();
    }

    onSubmitTrussNumber6() {
        this.TrussNumber6.focus();
    }

    onSubmitLastWeek6() {
        this.FruitDiameter6.focus();
    }

    onSubmitSetFruits6() {
        this.SetFruits6.focus();
    }

    onSubmitFlowers6() {
        this.SetFlowers6.focus();
    }

    onSubmitPruningNumber6() {
        this.PruningNumber6.focus();
    }

    onSubmitTrussNumber7() {
        this.TrussNumber7.focus();
    }

    onSubmitLastWeek7() {
        this.FruitDiameter7.focus();
    }

    onSubmitSetFruits7() {
        this.SetFruits7.focus();
    }

    onSubmitFlowers7() {
        this.SetFlowers7.focus();
    }

    onSubmitPruningNumber7() {
        this.PruningNumber7.focus();
    }

    onSubmitTrussNumber8() {
        this.TrussNumber8.focus();
    }

    onSubmitLastWeek8() {
        this.FruitDiameter8.focus();
    }

    onSubmitSetFruits8() {
        this.SetFruits8.focus();
    }

    onSubmitFlowers8() {
        this.SetFlowers8.focus();
    }

    onSubmitPruningNumber8() {
        this.PruningNumber8.focus();
    }

    onSubmitTrussNumber9() {
        this.TrussNumber9.focus();
    }

    onSubmitLastWeek9() {
        this.FruitDiameter9.focus();
    }

    onSubmitSetFruits9() {
        this.SetFruits9.focus();
    }

    onSubmitFlowers9() {
        this.SetFlowers9.focus();
    }

    onSubmitPruningNumber9() {
        this.PruningNumber9.focus();
    }

    onSubmitFruitDiameter() {
        this.FruitDiameter.focus();
    }

    onSubmitFruitDiameter1() {
        this.FruitDiameter1.focus();
    }


    _alertIndex(index) {
        Alert.alert(`This is row ${index + 1}`);
    }



    onSubmit() {
        let errors = {};

        ['TrussNumber', 'FruitDiameter', 'SetFruits', 'SetFlowers', 'PruningNumber', 'FruitDiameter']
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

        let { LeavesPerPlant, FullySetTruss, TrussLength, WeeklyGrowth, FloweringTrussHeight, LeafLength, LeafWidth, StmDiameter, LastWeekStmDiameter, TrussNumber, FruitDiameter, SetFruits, SetFlowers, PruningNumber } = data;

        if (this.state.isLoading) {
            return (
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }

        const state = this.state;
        const element = (data, index) => (
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={this.handleEmail} />

        );



        return (

            <SafeAreaView style={styles.safeContainer}>

                <View style={styles.container}>

                    <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>

                        <View style={styles.formContainer}
                            keyboardShouldPersistTaps='handled'>




                            <View
                                style={{
                                    borderTopColor: 'black',
                                    borderTopWidth: 1,
                                }}
                            />

                            {Platform.isPad ? (<View style={styles.rowContainer222}>

                                <View
                                    style={{
                                        borderLeftColor: 'black',
                                        borderLeftWidth: 1,
                                    }}
                                />


                                <Text style={styles.text222}>TrussNo</Text>
                                <View
                                    style={{
                                        borderRightColor: 'black',
                                        borderRightWidth: 1,
                                    }}
                                />



                                <Text style={styles.text222}>Set Fruit</Text>

                                <View
                                    style={{
                                        borderRightColor: 'black',
                                        borderRightWidth: 1,
                                    }}
                                />


                                <Text style={styles.text222}>Flowers</Text>

                                <View
                                    style={{
                                        borderRightColor: 'black',
                                        borderRightWidth: 1,
                                    }}
                                />


                                <Text style={styles.text222}>Pruning</Text>

                                <View
                                    style={{
                                        borderRightColor: 'black',
                                        borderRightWidth: 1,
                                    }}
                                />

                                <Text style={styles.text222}>Fruit Dia</Text>

                                <View
                                    style={{
                                        borderRightColor: 'black',
                                        borderRightWidth: 1,
                                    }}
                                />

                            </View>) : (<View style={styles.rowContainer21}>

                                <View
                                    style={{
                                        borderLeftColor: 'black',
                                        borderLeftWidth: 1,
                                    }}
                                />


                                <Text style={styles.text222}>TrussNo</Text>
                                <View
                                    style={{
                                        borderRightColor: 'black',
                                        borderRightWidth: 1,
                                    }}
                                />



                                <Text style={styles.text222}>Set Fruit</Text>

                                <View
                                    style={{
                                        borderRightColor: 'black',
                                        borderRightWidth: 1,
                                    }}
                                />


                                <Text style={styles.text222}>Flowers</Text>

                                <View
                                    style={{
                                        borderRightColor: 'black',
                                        borderRightWidth: 1,
                                    }}
                                />


                                <Text style={styles.text222}>Pruning</Text>

                                <View
                                    style={{
                                        borderRightColor: 'black',
                                        borderRightWidth: 1,
                                    }}
                                />

                                <Text style={styles.text222}>Fruit Dia</Text>

                                <View
                                    style={{
                                        borderRightColor: 'black',
                                        borderRightWidth: 1,
                                    }}
                                />

                            </View>)}




                            <View
                                style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                }}
                            />


                            <View

                                style={{
                                    margin: 8

                                }}
                            />

                            <View
                                style={{
                                    borderTopColor: 'black',
                                    borderTopWidth: 1,


                                }}
                            />
                            <ScrollView>
                                <View style={styles.rowContainer222}>



                                    <View
                                        style={{
                                            borderLeftColor: 'black',
                                            borderLeftWidth: 1,

                                        }}
                                    />




                                    <TextInput
                                        style={styles.textinputheight2}
                                        //underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        placeholderTextColor="#000000"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.setFruitsTextInput.focus(); }}
                                        //onChangeText={(text) => this.updateTextInput(text, 'trussNumber')}
                                        onChangeText={(text) => this.updateTextInput22(text, 'trussNumber')}
                                        error={errors.TrussNumber}
                                        blurOnSubmit={false}
                                        value={this.state.trussNumber.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,

                                        }}
                                    />




                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
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
                                        value={this.state.setFruits.toString()}
                                    />



                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
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
                                        value={this.state.setFlowers.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
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
                                        onSubmitEditing={() => { this.fruitDiamterTextInput.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber')}
                                        error={errors.PruningNumber}
                                        value={this.state.pruningNumber.toString()}
                                    />


                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.fruitDiamterTextInput = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onSubmitEditing={() => { this.setFruitsTextInput1.focus(); }}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter')}
                                        error={errors.FruitDiameter}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                </View>



                                <View
                                    style={{
                                        borderTopColor: 'black',
                                        borderTopWidth: 1,

                                    }}
                                />

                                <View style={styles.rowContainer222}>

                                    <View
                                        style={{
                                            borderLeftColor: 'black',
                                            borderLeftWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.textinputheight}
                                        //underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        editable={false}
                                        selectTextOnFocus={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef1}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.lastWeekTextInput1.focus(); }}
                                        //onChangeText={(text) => this.updateTextInput(text, 'trussNumber1')}
                                        onChangeText={(text) => this.updateTextInput22(text, 'trussNumber1')}
                                        error={errors.TrussNumber1}
                                        blurOnSubmit={false}
                                        value={this.state.trussNumber1.toString()}
                                    />
                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />



                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        returnKeyType={"next"}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFruitsTextInput1 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFruits1')}
                                        onSubmitEditing={() => { this.setFlowersTextInput1.focus(); }}
                                        blurOnSubmit={false}
                                        error={errors.SetFruits1}
                                        value={this.state.setFruits1.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFlowersTextInput1 = input; }}
                                        autoCorrect={false}
                                        returnKeyType={"next"}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.pruningNumbersTextInput1.focus(); }}
                                        blurOnSubmit={false}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFlowers1')}
                                        error={errors.SetFlowers1}
                                        value={this.state.setFlowers1.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.pruningNumbersTextInput1 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.fruitDiamterTextInput1.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber1')}
                                        error={errors.PruningNumber1}
                                        value={this.state.pruningNumber1.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.fruitDiamterTextInput1 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onSubmitEditing={() => { this.setFruitsTextInput2.focus(); }}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter1')}
                                        error={errors.FruitDiameter1}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                </View>

                                <View
                                    style={{
                                        borderTopColor: 'black',
                                        borderTopWidth: 1,

                                    }}
                                />

                                <View style={styles.rowContainer222}>

                                    <View
                                        style={{
                                            borderLeftColor: 'black',
                                            borderLeftWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.textinputheight}
                                        // underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        editable={false}
                                        selectTextOnFocus={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef2}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.lastWeekTextInput2.focus(); }}
                                        //onChangeText={(text) => this.updateTextInput(text, 'trussNumber2')}
                                        onChangeText={(text) => this.updateTextInput22(text, 'trussNumber2')}
                                        error={errors.TrussNumber2}
                                        blurOnSubmit={false}
                                        value={this.state.trussNumber2.toString()}
                                    />
                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />



                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        returnKeyType={"next"}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFruitsTextInput2 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFruits2')}
                                        onSubmitEditing={() => { this.setFlowersTextInput2.focus(); }}
                                        blurOnSubmit={false}
                                        error={errors.SetFruits2}
                                        value={this.state.setFruits2.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFlowersTextInput2 = input; }}
                                        autoCorrect={false}
                                        returnKeyType={"next"}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.pruningNumbersTextInput2.focus(); }}
                                        blurOnSubmit={false}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFlowers2')}
                                        error={errors.SetFlowers2}
                                        value={this.state.setFlowers2.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.pruningNumbersTextInput2 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.fruitDiamterTextInput2.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber2')}
                                        error={errors.PruningNumber2}
                                        value={this.state.pruningNumber2.toString()}
                                    />
                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.fruitDiamterTextInput2 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onSubmitEditing={() => { this.setFruitsTextInput3.focus(); }}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter2')}
                                        error={errors.FruitDiameter1}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                </View>

                                <View
                                    style={{
                                        borderTopColor: 'black',
                                        borderTopWidth: 1,

                                    }}
                                />

                                <View style={styles.rowContainer222}>

                                    <View
                                        style={{
                                            borderLeftColor: 'black',
                                            borderLeftWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.textinputheight}
                                        //underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        editable={false}
                                        selectTextOnFocus={false}
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef3}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.setFruitsTextInput3.focus(); }}
                                        //onChangeText={(text) => this.updateTextInput(text, 'trussNumber3')}
                                        onChangeText={(text) => this.updateTextInput22(text, 'trussNumber3')}
                                        error={errors.TrussNumber3}
                                        blurOnSubmit={false}
                                        value={this.state.trussNumber3.toString()}
                                    />
                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />



                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        returnKeyType={"next"}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFruitsTextInput3 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFruits3')}
                                        onSubmitEditing={() => { this.setFlowersTextInput3.focus(); }}
                                        blurOnSubmit={false}
                                        error={errors.SetFruits3}
                                        value={this.state.setFruits3.toString()} />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFlowersTextInput3 = input; }}
                                        autoCorrect={false}
                                        returnKeyType={"next"}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.pruningNumbersTextInput3.focus(); }}
                                        blurOnSubmit={false}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFlowers3')}
                                        error={errors.SetFlowers3}
                                        value={this.state.setFlowers3.toString()} />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.pruningNumbersTextInput3 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.fruitDiamterTextInput3.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber3')}
                                        error={errors.PruningNumber3}
                                        value={this.state.pruningNumber3.toString()} />


                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.fruitDiamterTextInput3 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onSubmitEditing={() => { this.setFruitsTextInput4.focus(); }}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter3')}
                                        error={errors.FruitDiameter1}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                </View>

                                <View
                                    style={{
                                        borderTopColor: 'black',
                                        borderTopWidth: 1,

                                    }}
                                />

                                <View style={styles.rowContainer222}>

                                    <View
                                        style={{
                                            borderLeftColor: 'black',
                                            borderLeftWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.textinputheight}
                                        //underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        editable={false}
                                        selectTextOnFocus={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef4}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.lastWeekTextInput4.focus(); }}
                                        //onChangeText={(text) => this.updateTextInput(text, 'trussNumber4')}
                                        onChangeText={(text) => this.updateTextInput22(text, 'trussNumber4')}
                                        error={errors.TrussNumber4}
                                        blurOnSubmit={false}
                                        value={this.state.trussNumber4.toString()}
                                    />
                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />



                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        returnKeyType={"next"}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFruitsTextInput4 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFruits4')}
                                        onSubmitEditing={() => { this.setFlowersTextInput4.focus(); }}
                                        blurOnSubmit={false}
                                        error={errors.SetFruits4}
                                        value={this.state.setFruits4.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFlowersTextInput4 = input; }}
                                        autoCorrect={false}
                                        returnKeyType={"next"}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.pruningNumbersTextInput4.focus(); }}
                                        blurOnSubmit={false}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFlowers4')}
                                        error={errors.SetFlowers4}
                                        value={this.state.setFlowers4.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.pruningNumbersTextInput4 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.fruitDiamterTextInput4.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber4')}
                                        error={errors.PruningNumber4}
                                        value={this.state.pruningNumber4.toString()}
                                    />


                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.fruitDiamterTextInput4 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onSubmitEditing={() => { this.setFruitsTextInput5.focus(); }}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter4')}
                                        error={errors.FruitDiameter1}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                </View>

                                <View
                                    style={{
                                        borderTopColor: 'black',
                                        borderTopWidth: 1,

                                    }}
                                />

                                <View style={styles.rowContainer222}>

                                    <View
                                        style={{
                                            borderLeftColor: 'black',
                                            borderLeftWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.textinputheight}
                                        //underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        editable={false}
                                        selectTextOnFocus={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef5}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.setFruitTextInput5.focus(); }}
                                        //onChangeText={(text) => this.updateTextInput(text, 'trussNumber5')}
                                        onChangeText={(text) => this.updateTextInput22(text, 'trussNumber5')}
                                        error={errors.TrussNumber5}
                                        blurOnSubmit={false}
                                        value={this.state.trussNumber5.toString()}
                                    />
                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />



                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        returnKeyType={"next"}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFruitsTextInput5 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFruits5')}
                                        onSubmitEditing={() => { this.setFlowersTextInput5.focus(); }}
                                        blurOnSubmit={false}
                                        error={errors.SetFruits5}
                                        value={this.state.setFruits5.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFlowersTextInput5 = input; }}
                                        autoCorrect={false}
                                        returnKeyType={"next"}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.pruningNumbersTextInput5.focus(); }}
                                        blurOnSubmit={false}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFlowers5')}
                                        error={errors.SetFlowers5}
                                        value={this.state.setFlowers5.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.pruningNumbersTextInput5 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.fruitDiamterTextInput5.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber5')}
                                        error={errors.PruningNumber5}
                                        value={this.state.pruningNumber5.toString()}
                                    />


                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.fruitDiamterTextInput5 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onSubmitEditing={() => { this.setFruitsTextInput6.focus(); }}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter5')}
                                        error={errors.FruitDiameter1}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                </View>

                                <View
                                    style={{
                                        borderTopColor: 'black',
                                        borderTopWidth: 1,

                                    }}
                                />

                                <View style={styles.rowContainer222}>

                                    <View
                                        style={{
                                            borderLeftColor: 'black',
                                            borderLeftWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.textinputheight}
                                        //underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        editable={false}
                                        selectTextOnFocus={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef6}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.setFruitsTextInput6.focus(); }}
                                        //onChangeText={(text) => this.updateTextInput(text, 'trussNumber6')}
                                        onChangeText={(text) => this.updateTextInput22(text, 'trussNumber6')}
                                        error={errors.TrussNumber6}
                                        blurOnSubmit={false}
                                        value={this.state.trussNumber6.toString()}
                                    />
                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />



                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        returnKeyType={"next"}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFruitsTextInput6 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFruits6')}
                                        onSubmitEditing={() => { this.setFlowersTextInput6.focus(); }}
                                        blurOnSubmit={false}
                                        error={errors.SetFruits6}
                                        value={this.state.setFruits6.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFlowersTextInput6 = input; }}
                                        autoCorrect={false}
                                        returnKeyType={"next"}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.pruningNumbersTextInput6.focus(); }}
                                        blurOnSubmit={false}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFlowers6')}
                                        error={errors.SetFlowers6}
                                        value={this.state.setFlowers6.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.pruningNumbersTextInput6 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.fruitDiamterTextInput6.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber6')}
                                        error={errors.PruningNumber6}
                                        value={this.state.pruningNumber6.toString()}
                                    />


                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.fruitDiamterTextInput6 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onSubmitEditing={() => { this.setFruitsTextInput7.focus(); }}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter6')}
                                        error={errors.FruitDiameter1}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                </View>

                                <View
                                    style={{
                                        borderTopColor: 'black',
                                        borderTopWidth: 1,

                                    }}
                                />

                                <View style={styles.rowContainer222}>

                                    <View
                                        style={{
                                            borderLeftColor: 'black',
                                            borderLeftWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.textinputheight}
                                        //underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        editable={false}
                                        selectTextOnFocus={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef7}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.setFruitsTextInput7.focus(); }}
                                        //onChangeText={(text) => this.updateTextInput(text, 'trussNumber7')}
                                        onChangeText={(text) => this.updateTextInput22(text, 'trussNumber7')}
                                        error={errors.TrussNumber7}
                                        blurOnSubmit={false}
                                        value={this.state.trussNumber7.toString()}
                                    />
                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />



                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        returnKeyType={"next"}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFruitsTextInput7 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFruits7')}
                                        onSubmitEditing={() => { this.setFlowersTextInput7.focus(); }}
                                        blurOnSubmit={false}
                                        error={errors.SetFruits7}
                                        value={this.state.setFruits7.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFlowersTextInput7 = input; }}
                                        autoCorrect={false}
                                        returnKeyType={"next"}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.pruningNumbersTextInput7.focus(); }}
                                        blurOnSubmit={false}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFlowers7')}
                                        error={errors.SetFlowers7}
                                        value={this.state.setFlowers7.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.pruningNumbersTextInput7 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.fruitDiamterTextInput7.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber7')}
                                        error={errors.PruningNumber7}
                                        value={this.state.pruningNumber7.toString()}

                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.fruitDiamterTextInput7 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onSubmitEditing={() => { this.setFruitsTextInput8.focus(); }}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter7')}
                                        error={errors.FruitDiameter1}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                </View>

                                <View
                                    style={{
                                        borderTopColor: 'black',
                                        borderTopWidth: 1,

                                    }}
                                />

                                <View style={styles.rowContainer222}>

                                    <View
                                        style={{
                                            borderLeftColor: 'black',
                                            borderLeftWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.textinputheight}
                                        //underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        editable={false}
                                        selectTextOnFocus={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef8}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.setFruitsTextInput8.focus(); }}
                                        //onChangeText={(text) => this.updateTextInput(text, 'trussNumber8')}
                                        onChangeText={(text) => this.updateTextInput22(text, 'trussNumber8')}
                                        error={errors.TrussNumber8}
                                        blurOnSubmit={false}
                                        value={this.state.trussNumber8.toString()}
                                    />
                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />



                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        returnKeyType={"next"}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFruitsTextInput8 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFruits8')}
                                        onSubmitEditing={() => { this.setFlowersTextInput8.focus(); }}
                                        blurOnSubmit={false}
                                        error={errors.SetFruits8}
                                        value={this.state.setFruits8.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFlowersTextInput8 = input; }}
                                        autoCorrect={false}
                                        returnKeyType={"next"}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.pruningNumbersTextInput8.focus(); }}
                                        blurOnSubmit={false}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFlowers8')}
                                        error={errors.SetFlowers8}
                                        value={this.state.setFlowers8.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.pruningNumbersTextInput8 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.fruitDiamterTextInput8.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber8')}
                                        error={errors.PruningNumber8}
                                        value={this.state.pruningNumber8.toString()}
                                    />


                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.fruitDiamterTextInput8 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onSubmitEditing={() => { this.setFruitsTextInput9.focus(); }}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter8')}
                                        error={errors.FruitDiameter1}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />



                                </View>

                                <View
                                    style={{
                                        borderTopColor: 'black',
                                        borderTopWidth: 1,

                                    }}
                                />

                                <View style={styles.rowContainer222}>

                                    <View
                                        style={{
                                            borderLeftColor: 'black',
                                            borderLeftWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.textinputheight}
                                        //underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        editable={false}
                                        selectTextOnFocus={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef9}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.setFruitsTextInput9.focus(); }}
                                        //onChangeText={(text) => this.updateTextInput(text, 'trussNumber9')}
                                        onChangeText={(text) => this.updateTextInput(text, 'trussNumber9')}
                                        error={errors.TrussNumber9}
                                        blurOnSubmit={false}
                                        value={this.state.trussNumber9.toString()}
                                    />
                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />



                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        returnKeyType={"next"}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFruitsTextInput9 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFruits9')}
                                        onSubmitEditing={() => { this.setFlowersTextInput9.focus(); }}
                                        blurOnSubmit={false}
                                        error={errors.SetFruits9}
                                        value={this.state.setFruits9.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.setFlowersTextInput9 = input; }}
                                        autoCorrect={false}
                                        returnKeyType={"next"}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.pruningNumbersTextInput9.focus(); }}
                                        blurOnSubmit={false}
                                        onChangeText={(text) => this.updateTextInput(text, 'setFlowers9')}
                                        error={errors.SetFlowers9}
                                        value={this.state.setFlowers9.toString()}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.pruningNumbersTextInput9 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.fruitDiamterTextInput9.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber9')}
                                        error={errors.PruningNumber9}
                                        value={this.state.pruningNumber9.toString()}
                                    />


                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                    <TextInput
                                        style={styles.bottonColor}
                                        underlineColorAndroid="black"
                                        placeholderTextColor="#000000"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        ref={(input) => { this.fruitDiamterTextInput9 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter9')}
                                        error={errors.FruitDiameter1}
                                    />

                                    <View
                                        style={{
                                            borderRightColor: 'black',
                                            borderRightWidth: 1,
                                        }}
                                    />

                                </View>

                                <View
                                    style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }}
                                />



                                <View
                                    style={{
                                        marginBottom: 20
                                    }}
                                />

                                <View style={styles.borderEdit}>

                                    <View style={[(this.state.fruitLoad <= 22 || this.state.fruitLoad >= 40) ? styles.borderErrorColor : null]}>

                                        <View
                                            style={{
                                                marginTop: 1
                                            }}
                                        />

                                        <View style={styles.row}>
                                            <Text style={styles.text4}>Fruit Load</Text>
                                            <Text style={styles.text5}>{this.state.fruitLoad}</Text>
                                        </View>

                                        <View
                                            style={{
                                                marginBottom: 5
                                            }}
                                        />

                                    </View>

                                    <View style={[(this.state.floweringTrussss <= 0 || this.state.floweringTrussss >= 45) ? styles.borderErrorColor : null]}>
                                        <View style={styles.row}>
                                            <Text style={styles.text4}>Flowering Truss</Text>
                                            <Text style={styles.text5}>{this.state.floweringTrussss}</Text>
                                        </View>


                                        <View
                                            style={{
                                                marginBottom: 5
                                            }}
                                        />
                                    </View>

                                    <View style={[(this.state.settingTrussNumber <= 1 || this.state.settingTrussNumber >= 45) ? styles.borderErrorColor : null]}>
                                        <View style={styles.row}>
                                            <Text style={styles.text4}>Setting Truss</Text>
                                            <Text style={styles.text5}>{this.state.settingTrussNumber}</Text>
                                        </View>
                                        <View
                                            style={{
                                                marginBottom: 5
                                            }}
                                        />
                                    </View>

                                    <View style={[(this.state.floweringTrussss <= 0 || this.state.floweringTrussss >= 45) ? styles.borderErrorColor : null]}>
                                        <View style={styles.row}>
                                            <Text style={styles.text4}>Harvest Truss</Text>
                                            <Text style={styles.text5}>{this.state.harvestTruss}</Text>
                                        </View>
                                        <View
                                            style={{
                                                marginBottom: 5
                                            }}
                                        />
                                    </View>
                                </View>

                                <TouchableOpacity
                                    style={styles.buttonContainer}
                                    onPress={this.saveTrussToDb}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>


                            </ScrollView>
                        </View>
                    </ImageBackground>
                </View>

            </SafeAreaView >

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
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    borderEdit: {
        marginTop: 8,
        marginLeft: 6,
        marginRight: 6,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: 'rgba(192,192,192,0.55)',
    },

    borderErrorColor: {

        backgroundColor: 'rgba(255,0,0,0.3)',

    },

    text4: {
        //color: '#110A6A',
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 12,
        marginRight: 10,

    },
    text5: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 12,
        marginRight: 10,

    },

    container22: { flex: 1, padding: 16, paddingTop: 30 },
    head: {
        height: 50,
        alignContent: "center",
        backgroundColor: 'red'
    },
    row: { flexDirection: 'row', alignItems: 'center' },
    btn: { width: 58, height: 18, borderRadius: 2 },
    btnText: { textAlign: 'center', color: 'black' },

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
    container222: {
        padding: 8,
        alignItems: "stretch"
    },
    rowContainer222: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    rowContainer21: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },

    rowContainer2226: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },



    text222: {
        color: '#2C903D',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        width: 60,
        margin: 12

    },
    textInputStyle: {
        fontSize: 20

    },
    textOutputStyle: {
        fontSize: 20
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

        //backgroundColor: 'rgba(192,192,192,0.55)',
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
    },
    textinputheight: {

        height: 60,
        width: 40,
        //borderBottomWidth: 1.2,
        //borderBottomColor: 'black',
        marginBottom: 5,
        textAlign: 'center',
        color: '#000000'


    },

    textinputheight2: {

        height: 60,
        width: 40,
        borderBottomWidth: 3.5,
        borderBottomColor: '#ff0000',
        marginBottom: 5,
        textAlign: 'center',
        color: '#000000'


    },

    yellowBackground: {

        backgroundColor: '#ffff00'

    },

    bottonColor: {
        borderBottomWidth: 1.2,
        borderBottomColor: 'black',
        marginBottom: 5,
        height: 60,
        width: 40,
        textAlign: 'center',
        color: '#000000'
    }

})