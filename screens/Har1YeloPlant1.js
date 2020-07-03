import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, TextInput, ImageBackground, SafeAreaView, Alert, ToastAndroid, AlertIOS, Platform } from 'react-native'
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
import { Divider } from 'react-native-elements';
import { fbDB } from '../screens/config';
import AsyncStorage from '@react-native-community/async-storage';










/*let defaults = {
    LeavesPerPlant: '0',
    FullysetTruss: '0',
    TrussLength: '0',
    WeeklyGrowth: '0',
    FlowerTrussHeight: '0',
    LeafLength: '0',
    LeafWidth: '0',
    StmDiameter: '0',
    LastWeekStmDiameter: '0',
};*/
const db = new Database();
let abc, plantNo;
let weekNum = 2010;
var numberWeek;
let no1, no2, no3, no4, no5, no;
const screenDetails = [{
    name: 'HAR 3 - Flamentyno',
    row: '356',
    week: '2009'
}]

var currentWeekNumber = require('current-week-number');







export default class Har1YeloPlant1 extends React.Component {






    constructor(props) {
        super(props)
        /*this.state = {
            txtLeaves: '',
            txtTruss: ''
        }*/





        this.onFocus = this.onFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitLeavesPerPlant = this.onSubmitLeavesPerPlant.bind(this);
        this.onSubmitFullysetTruss = this.onSubmitFullysetTruss.bind(this);
        this.onSubmitTrussLength = this.onSubmitTrussLength.bind(this);
        this.onSubmitWeeklyGrowth = this.onSubmitWeeklyGrowth.bind(this);
        this.onSubmitFlowerTrussHeight = this.onSubmitFlowerTrussHeight.bind(this);
        this.onSubmitLeafLength = this.onSubmitLeafLength.bind(this);
        this.onSubmitLeafWidth = this.onSubmitLeafWidth.bind(this);
        this.onSubmitStmDiameter = this.onSubmitStmDiameter.bind(this);
        this.onSubmitLastWeekStmDiameter = this.onSubmitLastWeekStmDiameter.bind(this);
        this.onSubmitTrussNumber = this.onSubmitTrussNumber.bind(this);
        this.onSubmitLastWeek = this.onSubmitLastWeek.bind(this);
        this.onSubmitSetFruits = this.onSubmitSetFruits.bind(this);
        this.onSubmitFlowers = this.onSubmitFlowers.bind(this);
        this.onSubmitPruningNumber = this.onSubmitPruningNumber.bind(this);
        this.onAccessoryPress = this.onAccessoryPress.bind(this);


        this.leavesPerPlantRef = this.updateRef.bind(this, 'LeavesPerPlant');
        this.fullysetTrussRef = this.updateRef.bind(this, 'FullysetTruss');
        this.trussLengthRef = this.updateRef.bind(this, 'TrussLength');
        this.weeklyGrowthRef = this.updateRef.bind(this, 'WeeklyGrowth');
        this.flowerTrussHeightRef = this.updateRef.bind(this, 'FlowerTrussHeight');
        this.leafLengthRef = this.updateRef.bind(this, 'LeafLength');
        this.leafWidthRef = this.updateRef.bind(this, 'LeafWidth');
        this.stmDiameterRef = this.updateRef.bind(this, 'StmDiameter');
        this.lastWeekStmDiameterRef = this.updateRef.bind(this, 'LastWeekStmDiameter');
        this.trussNumberRef = this.updateRef.bind(this, 'TrussNumber');
        this.lastWeekNumberRef = this.updateRef.bind(this, 'LastWeekNumber');
        this.setFruitsRef = this.updateRef.bind(this, 'SetFruits');
        this.setFlowersRef = this.updateRef.bind(this, 'SetFlowers');
        this.pruningNumberRef = this.updateRef.bind(this, 'PruningNumber');




        this.state = {
            secureTextEntry: true,
            plantId: '',
            plantRow: '',
            plantName: '',
            plantWeek: '',
            leavesPerPlant: '',
            fullySetTruss: '',
            setTrussLength: '',
            weeklyGrowth: '',
            floweringTrussHeight: '',
            leafLength: '',
            leafWidth: '',
            stmDiameter: '',
            lastWeekStmDiameter: '',
            trussNumber: '',
            lastWeekNumber: '',
            setFruits: '',
            setFlowers: '',
            pruningNumber: '',
            plantNumber: '',


            leaves: '',
            fullySet: '',
            trussLength: '',
            growth: '',
            trussHeight: '',
            length: '',
            width: '',
            stmDm: '',
            lastWeekStmDm: '',


            isLoading: false,
            isDataSend: false,
            show: false,
            weekNumber: '',
            dataPresent: false,

            plant: {},
            id: '',


        };


    }

    setAsyncValues(text1, text2) {

        try {
            AsyncStorage.setItem('leavesPerPlant', text1);
            AsyncStorage.setItem('fullySetTruss', text2);
        } catch (error) {
        }

    }

    getAsysncValues() {

       

        abc = '0';

        try {
            AsyncStorage.getItem('leavesPerPlant').then((text1Value) => {
                this.setState({ leavesPerPlant: JSON.parse(text1Value) });
                console.log(this.state.leavesPerPlant)

                abc = '0';

            }).done();
        } catch (error) {
        }
        try {
            AsyncStorage.getItem('fullySetTruss').then((text2Value) => {
                this.setState({ fullySetTruss: JSON.parse(text2Value) });
                console.log(this.state.fullySetTruss)

                abc = '0';

            }).done();
        } catch (error) {
        }
        try {
            AsyncStorage.getItem('setTrussLength').then((text3Value) => {
                this.setState({ setTrussLength: JSON.parse(text3Value) });
                console.log(this.state.setTrussLength)

                abc = '0';

            }).done();
        } catch (error) {
        }
        try {
            AsyncStorage.getItem('weeklyGrowth').then((text4Value) => {
                this.setState({ weeklyGrowth: JSON.parse(text4Value) });
                console.log(this.state.weeklyGrowth)

                abc = '0';

            }).done();
        } catch (error) {
        } try {
            AsyncStorage.getItem('floweringTrussHeight').then((text5Value) => {
                this.setState({ floweringTrussHeight: JSON.parse(text5Value) });
                console.log(this.state.floweringTrussHeight)

                abc = '0';

            }).done();
        } catch (error) {
        }
        try {
            AsyncStorage.getItem('leafLength').then((text6Value) => {
                this.setState({ leafLength: JSON.parse(text6Value) });
                console.log(this.state.leafLength)

                abc = '0';

            }).done();
        } catch (error) {
        } try {
            AsyncStorage.getItem('leafWidth').then((text7Value) => {
                this.setState({ leafWidth: JSON.parse(text7Value) });
                console.log(this.state.leafWidth)

                abc = '0';

            }).done();
        } catch (error) {
        }
        try {
            AsyncStorage.getItem('stmDiameter').then((text8Value) => {
                this.setState({ stmDiameter: JSON.parse(text8Value) });
                console.log(this.state.stmDiameter)
                abc = '0';

            }).done();
        } catch (error) {
        } try {
            AsyncStorage.getItem('lastWeekStmDiameter').then((text9Value) => {
                this.setState({ lastWeekStmDiameter: JSON.parse(text9Value) });
                console.log(this.state.lastWeekStmDiameter)

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

        numberWeek = 2000 + currentWeekNumber()-2;
        console.log("Current Week Number: ", numberWeek);

        console.ignoredYellowBox = ['react-native BugReporting extraData'];


        console.log("Count : ", abc);
        console.log("Data send : ", this.state.isDataSend);
        console.log("show : ", this.state.show);
        this.ShowHideComponent();

        if (this.props.route.params.plant1 !== undefined) {
            no1 = this.props.route.params.plant1;
            console.log("Plant " + JSON.stringify(no1));
        } else {

        }

        if (this.props.route.params.plant2 !== undefined) {
            no2 = this.props.route.params.plant2;
            console.log("Plant " + JSON.stringify(no2));
        } else {
        }

        if (this.props.route.params.plant3 !== undefined) {
            no3 = this.props.route.params.plant3;
            console.log("Plant " + JSON.stringify(no3));
        } else {

        }

        if (this.props.route.params.plant4 !== undefined) {
            no4 = this.props.route.params.plant4;
            console.log("Plant " + JSON.stringify(no4));
        } else {

        }

        if (this.props.route.params.plant5 !== undefined) {
            no5 = this.props.route.params.plant5;
            console.log("Plant " + JSON.stringify(no5));
        } else {

        }




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

            numberWeek = 2000 + currentWeekNumber();


        } else if (abc === '1' && abc !== null) {

            AsyncStorage.clear();
            numberWeek = numberWeek + 1;
            this.setState({ weekNumber: numberWeek.toString() });
            console.log("Week Number: ", numberWeek);


            this.setState({
                isDataSend: false,

            });



        } else {

            AsyncStorage.clear();
            numberWeek = numberWeek + 1;
            console.log("Week Number: ", numberWeek);
            this.setState({ weekNumber: numberWeek.toString() });

            this.setState({
                isDataSend: false,

            });


        }

        /*if (no1 !== undefined && no1 !== null) {

            console.log("No1 Value:", no1);
            console.log("No2 Value:", no2);

            no = '1';


            db.plantsByWeekNumberAndName(no1, numberWeek-1, 'HAR 1 - Yelo').then((data) => {
                console.log(data);
                console.log("Calling database")
                plant = data;
                this.setState({
                    plant,
                    dataPresent: true ,

                });
            }).catch((err) => {
                console.log(err);

            })

            no1 = null;


        } else {

            if (no2 !== undefined && no2 !== null) {

                console.log("No2 Value:", no2);
                no = '2';


                db.plantsByWeekNumberAndName(no2, numberWeek-1, 'HAR 1 - Yelo').then((data) => {
                    console.log(data);
                    console.log("Calling database")
                    plant = data;
                    this.setState({
                        plant,
                        dataPresent: true ,

                    });
                }).catch((err) => {
                    console.log(err);

                })

                no2 = null;


            } else {

                if (no3 !== undefined && no3 !== null) {

                    no = '3';

                    console.log("No3 Value:", no3);


                    db.plantsByWeekAndName(no3, numberWeek-1, 'HAR 1 - Yelo').then((data) => {
                        console.log(data);
                        console.log("Calling database")
                        plant = data;
                        this.setState({
                            plant,
                            dataPresent: true ,

                        });
                    }).catch((err) => {
                        console.log(err);

                    })

                    no3 = null;


                } else {

                    if (no4 !== undefined && no4 !== null) {

                        console.log("No4 Value:", no4);

                        no = '4';


                        db.plantsByWeekAndName(no4, numberWeek-1, 'HAR 1 - Yelo').then((data) => {
                            console.log(data);
                            console.log("Calling database")
                            plant = data;
                            this.setState({
                                plant,
                                dataPresent: true ,

                            });
                        }).catch((err) => {
                            console.log(err);

                        })

                        no4 = null;


                    } else {

                        if (no5 !== undefined && no5 !== null) {

                            console.log("No5 Value:", no5);

                            no = '5';


                            db.plantsByWeekAndName(no5, numberWeek-1, 'HAR 1 - Yelo').then((data) => {
                                console.log(data);
                                console.log("Calling database")
                                plant = data;
                                this.setState({
                                    plant,
                                    dataPresent: true ,

                                });
                            }).catch((err) => {
                                console.log(err);

                            })

                            no5 = null;


                        }
                    }
                }
            }
        }*/




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
        //this.setAsyncValues(text.leavesPerPlant,text.fullySetTruss);


    }



    savePlantsToDb = () => {


        this.setState({
            isLoading: true,
            isDataSend: false,

        });

        abc = '0';


        var that = this;
        const { plantRow } = this.state;
        const { plantName } = this.state;;
        const { plantWeek } = this.state;
        const { plantNumber } = this.state;
        const { leavesPerPlant } = this.state;
        const { fullySetTruss } = this.state;
        const { setTrussLength } = this.state;
        const { weeklyGrowth } = this.state;
        const { floweringTrussHeight } = this.state;
        const { leafLength } = this.state;
        const { leafWidth } = this.state;
        const { stmDiameter } = this.state;
        const { lastWeekStmDiameter } = this.state;
        const { trussNumber } = this.state;
        const { lastWeekNumber } = this.state;
        const { setFruits } = this.state;
        const { setFlowers } = this.state;
        const { pruningNumber } = this.state;

        let data = {
            plantRow: '123',
            plantName: 'HAR 1 - Yelo',
            plantWeek: numberWeek,
            plantNumber: no,
            leavesPerPlant: this.state.leavesPerPlant,
            fullySetTruss: this.state.fullySetTruss,
            setTrussLength: this.state.setTrussLength,
            weeklyGrowth: this.state.weeklyGrowth,
            floweringTrussHeight: this.state.floweringTrussHeight,
            leafLength: this.state.leafLength,
            leafWidth: this.state.leafWidth,
            stmDiameter: this.state.stmDiameter,
            lastWeekStmDiameter: this.state.lastWeekStmDiameter,
            trussNumber: this.state.trussNumber,
            lastWeekNumber: this.state.lastWeekNumber,
            setFruits: this.state.setFruits,
            setFlowers: this.state.setFlowers,
            pruningNumber: this.state.pruningNumber,


        }


        if (leavesPerPlant) {
            if (fullySetTruss) {
                if (setTrussLength) {
                    if (weeklyGrowth) {
                        if (floweringTrussHeight) {
                            if (leafLength) {
                                if (leafWidth) {
                                    if (stmDiameter) {
                                        if (lastWeekStmDiameter) {

                                            db.addPlants(data).then((result) => {
                                                console.log(result);


                                                this.setState({
                                                    isLoading: false,
                                                    isDataSend: true,
                                                });
                                                abc = '1';
                                               
                                                Alert.alert('Completed!')
                                                this.props.navigation.navigate('Har1Yelo')
                                                this.setState({

                                                    isDataSend: true,
                                                });
                                                abc = '1';

                                            }).catch((err) => {
                                                console.log(err);
                                                this.setState({
                                                    isLoading: false,
                                                    isDataSend: false,
                                                });
                                                abc = '0';
                                            })



                                        } else {
                                            alert('Please fill Last Week Stem Diameter');
                                            this.setState({
                                                isLoading: false,
                                                isDataSend: false,

                                            });
                                            abc = '0';

                                        }
                                    } else {
                                        alert('Please fill Steam Diamater');
                                        this.setState({
                                            isLoading: false,
                                            isDataSend: false,
                                        });
                                        abc = '0';
                                    }
                                } else {
                                    alert('Please fill Leaf Width');
                                    this.setState({
                                        isLoading: false,
                                        isDataSend: false,
                                    });
                                    abc = '0';
                                }
                            } else {
                                alert('Please fill Leaf Length');
                                this.setState({
                                    isLoading: false,
                                    isDataSend: false,
                                });
                                abc = '0';
                            }
                        } else {
                            alert('Please fill Flower Truss Height');
                            this.setState({
                                isLoading: false,
                                isDataSend: false,
                            });
                            abc = '0';
                        }
                    } else {
                        alert('Please fill Weekly Growth');
                        this.setState({
                            isLoading: false,
                            isDataSend: false,
                        });
                        abc = '0';
                    }
                } else {
                    alert('Please fill Fully Set Truss Length');
                    this.setState({
                        isLoading: false,
                        isDataSend: false,
                    });
                    abc = '0';
                }
            } else {
                alert('Please fill Fully Set Truss');
                this.setState({
                    isLoading: false,
                    isDataSend: false,
                });
                abc = '0';
            }
        } else {

            alert('Please fill Leaves Per Plant');
            this.setState({
                isLoading: false,
                isDataSend: false,
            });
            abc = '0';
        }


    }

    sendTrussNumber() {

        navigate('TrussDetails', { trussNo: 1 });


    }

    saveTrussToDb = () => {

        this.setState({
            isLoading: true,
        });

        var that = this;
        let listdata = [];

        const { trussNumber } = this.state;
        const { lastWeekNumber } = this.state;
        const { setFruits } = this.state;
        const { setFlowers } = this.state;
        const { pruningNumber } = this.state;

        const { trussNumber2 } = this.state;
        const { lastWeekNumber2 } = this.state;
        const { setFruits2 } = this.state;
        const { setFlowers2 } = this.state;
        const { pruningNumber2 } = this.state;


        let data = {
            trussNumber: this.state.trussNumber,
            lastWeekNumber: this.state.lastWeekNumber,
            setFruits: this.state.setFruits,
            setFlowers: this.state.setFlowers,
            pruningNumber: this.state.pruningNumber,
            plantRow: '123',
            plantName: 'HAR 1 - Yelo',
            plantWeek: '2009',

            trussNumber2: this.state.trussNumber2,
            lastWeekNumber2: this.state.lastWeekNumber2,
            setFruits2: this.state.setFruits2,
            setFlowers2: this.state.setFlowers2,
            pruningNumber2: this.state.pruningNumber2


        }

        listdata = data;
        console.log('mmmmmmmmmmmmmmmmmm:', listdata);
        if (trussNumber) {
            if (lastWeekNumber) {
                if (setFruits) {
                    if (setFlowers) {
                        if (pruningNumber) {

                            db.addList(listdata).then((result) => {
                                console.log(result);
                                this.setState({
                                    isLoading: false,
                                });
                                Alert.alert('Completed!')

                                this.props.navigation.navigate('Har1Yelo')

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

    onFocus() {
        let { errors = {} } = this.state;

        for (let name in errors) {
            let ref = this[name];

            if (ref && ref.isFocused()) {
                delete errors[name];
            }
        }

        this.setState({ errors });
    }



    onChangeText(text) {
        ['LeavesPerPlant', 'FullysetTruss', 'TrussLength', 'WeeklyGrowth', 'FlowerTrussHeight', 'LeafLength', 'LeafWidth', 'StmDiameter', 'LastWeekStmDiameter', 'TrussNumber', 'LastWeekNumber', 'SetFruits', 'SetFlowers', 'PruningNumber']
            .map((name) => ({ name, ref: this[name] }))
            .forEach(({ name, ref }) => {
                if (ref.isFocused()) {
                    this.setState({ [name]: text });
                }
            });
    }

    onAccessoryPress() {
        this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
    }


    onSubmitFullysetTruss() {
        this.FullysetTruss.focus();
    }

    onSubmitTrussLength() {
        this.TrussLength.focus();
    }

    onSubmitWeeklyGrowth() {
        this.WeeklyGrowth.focus();
    }

    onSubmitFlowerTrussHeight() {
        this.FlowerTrussHeight.focus();
    }

    onSubmitLeafLength() {
        this.LeafLength.focus();
    }

    onSubmitLeafWidth() {
        this.LeafWidth.focus();
    }

    onSubmitStmDiameter() {
        this.StmDiameter.focus();
    }

    onSubmitLastWeekStmDiameter() {
        this.LastWeekStmDiameter.focus();
    }

    onSubmitLeavesPerPlant() {
        this.LeavesPerPlant.focus();
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

    getProducts() {
        let plants = [];
        db.listPlants().then((data) => {
            products = data;
            this.setState({
                plants,
                isLoading: false,
            });
        }).catch((err) => {
            console.log(err);
            this.setState = {
                isLoading: false
            }
        })
    }



    onSubmit() {
        let errors = {};

        ['LeavesPerPlant', 'FullysetTruss', 'TrussLength', 'WeeklyGrowth', 'FlowerTrussHeight', 'LeafLength', 'LeafWidth', 'StmDiameter', 'LastWeekStmDiameter', 'TrussNumber', 'LastWeekNumber', 'SetFruits', 'SetFlowers', 'PruningNumber']
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



    /*CheckTextInput = () => {
        if (this.state.txtLeaves.trim != '') {

            if (this.state.txtTruss.trim != '') {

                if (Platform.OS === 'android') {

                    ToastAndroid.show('Completed!!', ToastAndroid.SHORT)

                } else {

                    AlertIOS.alert('Completed!!');
                }
            } else {
                Alert.alert('Please Enter Truss');

            }
        } else {
            Alert.alert('Please Enter Leaves');

        }

    };*/




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


                            <Text style={styles.text} onChangeText={(text) => this.updateTextInput(text, 'plantRow')}
                                value={this.state.plantRow}>Row No 123</Text>



                            <View
                                style={{
                                    marginTop: 20
                                }}
                            />



                            <View style={styles.inputText}>

                                <View style={styles.row}>
                                    <Text style={styles.text4}>Leaves Per Plant</Text>
                                    {this.state.dataPresent ? (<Text style={styles.text5}>Last Week {this.state.plant.leavesPerPlant}</Text>) : null}
                                </View>
                                <TextInput style={styles.textInputStyle}
                                    underlineColorAndroid="#000000"
                                    placeholder="Enter Leaves Per Plant"
                                    placeholderTextColor="transparent"
                                    multiline={false}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    onChangeText={(text) => this.updateTextInput(text, 'leavesPerPlant')}
                                    value={this.state.leavesPerPlant}
                                    editable={true}
                                    returnKeyType={"next"}
                                    error={errors.LeavesPerPlant}
                                    keyboardType={'numeric'}
                                    onFocus={this.onFocus}
                                    onSubmitEditing={() => { this.fullySetTrussTextInput.focus(); }}
                                    blurOnSubmit={false}
                                />

                            </View>


                            <View
                                style={{
                                    marginBottom: 20
                                }}
                            />



                            <View style={styles.inputText}>

                                <View style={styles.row}>
                                    <Text style={styles.text4}>Fully Set Truss</Text>
                                    {this.state.dataPresent ? (<Text style={styles.text5}>Last Week {this.state.plant.fullySetTruss}</Text>) : null}
                                </View>
                                <TextInput style={styles.textInputStyle}
                                    underlineColorAndroid="#000000"
                                    placeholder="Enter Fully Set Truss"
                                    placeholderTextColor="transparent"
                                    autoCapitalize="none"
                                    multiline={false}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    returnKeyType={"next"}
                                    error={errors.FullysetTruss}
                                    keyboardType={'numeric'}
                                    editable={true}
                                    onChangeText={(text) => this.updateTextInput(text, 'fullySetTruss')}
                                    value={this.state.fullySetTruss}
                                    ref={(input) => { this.fullySetTrussTextInput = input; }}
                                    onSubmitEditing={() => { this.fullySetTrussLengthTextInput.focus(); }}
                                    blurOnSubmit={false}
                                />

                            </View>


                            <View
                                style={{
                                    marginBottom: 20
                                }}
                            />




                            <View style={styles.inputText}>

                                <View style={styles.row}>
                                    <Text style={styles.text4}>Fully Set Truss Length</Text>
                                    {this.state.dataPresent ? ( <Text style={styles.text5}>Last Week {this.state.plant.setTrussLength}</Text>) : null}
                                </View>
                                <TextInput style={styles.textInputStyle}
                                    underlineColorAndroid="#000000"
                                    placeholder="Enter Fully Set Truss Length"
                                    placeholderTextColor="transparent"
                                    autoCapitalize="none"
                                    multiline={false}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    returnKeyType={"next"}
                                    error={errors.TrussLength}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'setTrussLength')}
                                    value={this.state.setTrussLength}
                                    ref={(input) => { this.fullySetTrussLengthTextInput = input; }}
                                    onSubmitEditing={() => { this.weeklyGrowthTextInput.focus(); }}
                                    blurOnSubmit={false}

                                />

                            </View>


                            <View
                                style={{
                                    marginBottom: 20
                                }}
                            />






                            <View style={styles.inputText}>

                                <View style={styles.row}>
                                    <Text style={styles.text4}>Weekly Growth</Text>
                                    {this.state.dataPresent ? (<Text style={styles.text5}>Last Week {this.state.plant.weeklyGrowth}</Text>) : null}
                                </View>
                                <TextInput style={styles.textInputStyle}
                                    underlineColorAndroid="#000000"
                                    placeholder="Enter Weekly Growth"
                                    placeholderTextColor="transparent"
                                    autoCapitalize="none"
                                    multiline={false}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    returnKeyType={"next"}
                                    error={errors.WeeklyGrowth}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'weeklyGrowth')}
                                    value={this.state.weeklyGrowth}
                                    ref={(input) => { this.weeklyGrowthTextInput = input; }}
                                    onSubmitEditing={() => { this.FlowerTrussHeightTextInput.focus(); }}
                                    blurOnSubmit={false}

                                />

                            </View>


                            <View
                                style={{
                                    marginBottom: 20
                                }}
                            />




                            <View style={styles.inputText}>

                                <View style={styles.row}>
                                    <Text style={styles.text4}>Flower Truss Height</Text>
                                    {this.state.dataPresent ? (<Text style={styles.text5}>Last Week {this.state.plant.floweringTrussHeight}</Text>) : null}
                                </View>
                                <TextInput style={styles.textInputStyle}
                                    underlineColorAndroid="#000000"
                                    placeholder="Enter Weekly Growth"
                                    placeholderTextColor="transparent"
                                    autoCapitalize="none"
                                    multiline={false}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    returnKeyType={"next"}
                                    error={errors.FlowerTrussHeight}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'floweringTrussHeight')}
                                    value={this.state.floweringTrussHeight}
                                    ref={(input) => { this.FlowerTrussHeightTextInput = input; }}
                                    onSubmitEditing={() => { this.leafLengthTextInput.focus(); }}
                                    blurOnSubmit={false}

                                />

                            </View>


                            <View
                                style={{
                                    marginBottom: 20
                                }}
                            />



                            <View style={styles.inputText}>

                                <View style={styles.row}>
                                    <Text style={styles.text4}>Leaf Length</Text>
                                    {this.state.dataPresent ? (<Text style={styles.text5}>Last Week {this.state.plant.leafLength}</Text>) : null}
                                </View>
                                <TextInput style={styles.textInputStyle}
                                    underlineColorAndroid="#000000"
                                    placeholder="Enter Leaf Length"
                                    placeholderTextColor="transparent"
                                    autoCapitalize="none"
                                    multiline={false}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    returnKeyType={"next"}
                                    label='Leaf Length'
                                    error={errors.LeafLength}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'leafLength')}
                                    value={this.state.leafLength}
                                    ref={(input) => { this.leafLengthTextInput = input; }}
                                    onSubmitEditing={() => { this.leafWidthTextInput.focus(); }}
                                    blurOnSubmit={false}

                                />

                            </View>


                            <View
                                style={{
                                    marginBottom: 20
                                }}
                            />




                            <View style={styles.inputText}>

                                <View style={styles.row}>
                                    <Text style={styles.text4}>Leaf Width</Text>
                                    {this.state.dataPresent ? (<Text style={styles.text5}>Last Week {this.state.plant.leafWidth}</Text>) : null}
                                </View>
                                <TextInput style={styles.textInputStyle}
                                    underlineColorAndroid="#000000"
                                    placeholder="Enter Leaf Width"
                                    placeholderTextColor="transparent"
                                    autoCapitalize="none"
                                    multiline={false}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    returnKeyType={"next"}
                                    error={errors.LeafWidth}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'leafWidth')}
                                    value={this.state.leafWidth}
                                    ref={(input) => { this.leafWidthTextInput = input; }}
                                    onSubmitEditing={() => { this.stmDiameterTextInput.focus(); }}
                                    blurOnSubmit={false}

                                />

                            </View>


                            <View
                                style={{
                                    marginBottom: 20
                                }}
                            />




                            <View style={styles.inputText}>

                                <View style={styles.row}>
                                    <Text style={styles.text4}>Stem Diameter</Text>
                                    {this.state.dataPresent ? (<Text style={styles.text5}>Last Week {this.state.plant.stmDiameter}</Text>) : null}
                                </View>
                                <TextInput style={styles.textInputStyle}
                                    underlineColorAndroid="#000000"
                                    placeholder="Enter Stem Diameter"
                                    placeholderTextColor="transparent"
                                    autoCapitalize="none"
                                    multiline={false}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    returnKeyType={"next"}
                                    error={errors.StmDiameter}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'stmDiameter')}
                                    value={this.state.stmDiameter}
                                    ref={(input) => { this.stmDiameterTextInput = input; }}
                                    onSubmitEditing={() => { this.lastWeekSmDiameterTextInput.focus(); }}
                                    blurOnSubmit={false}

                                />

                            </View>


                            <View
                                style={{
                                    marginBottom: 20
                                }}
                            />




                            <View style={styles.inputText}>

                                <View style={styles.row}>
                                    <Text style={styles.text4}>Last Week Stem Diameter</Text>
                                    {this.state.dataPresent ? (<Text style={styles.text5}>Last Week {this.state.plant.lastWeekStmDiameter}</Text>) : null}
                                </View>
                                <TextInput style={styles.textInputStyle}
                                    underlineColorAndroid="#000000"
                                    placeholder="Enter Last Week Stem Diameter"
                                    placeholderTextColor="transparent"
                                    autoCapitalize="none"
                                    multiline={false}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    returnKeyType={"done"}
                                    error={errors.LastWeekStmDiameter}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'lastWeekStmDiameter')}
                                    value={this.state.lastWeekStmDiameter}
                                    ref={(input) => { this.lastWeekSmDiameterTextInput = input; }}

                                />

                            </View>


                            <View
                                style={{
                                    marginBottom: 20
                                }}
                            />


                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={this.savePlantsToDb}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>



                            <Text style={styles.text}
                                value={this.state.plantRow}> Enter Truss Details</Text>


                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => this.props.navigation.navigate('Har1YeloTrussDetails')}>
                                <Text style={styles.buttonText}>Truss Details</Text>
                            </TouchableOpacity>


                        </ScrollView>
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
    messageBoxTitleText: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
    messageBoxBodyText: {
        color: '#fff',
        fontSize: 16
    },

    head: {
        height: 50,
        backgroundColor: '#808B97'
    },
    text: {
        margin: 6
    },
    row: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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

    inputLayout2: {
        marginTop: 14,
        flexDirection: 'row',

    },
    text: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },

    text2: {
        color: '#0B5345',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,

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
        height: 90,
        fontSize: 18,
        borderColor: '#000000',
        borderWidth: 2,
        marginTop: 10
    },
    inputText: {
        marginBottom: 10,
        height: 90,
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10
    },
    textInputStyle: {
        fontSize: 15,
        color: 'black',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: "transparent",
        borderBottomWidth: 1,
        borderBottomColor: 'black',


    },
    text4: {
        color: '#110A6A',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 12,
        marginRight: 10,

    },

    text5: {
        color: '#110A6A',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 12,
        marginRight: 10,

    },

    inputBox: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    }

})

//export default FlamentynoPlant1
