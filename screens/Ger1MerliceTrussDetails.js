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





import Database from '../screens/Database'
import { identity } from 'lodash';


const db = new Database();
let abc;
let numberWeek;
let plantNo;
let count = 0;
var currentWeekNumber = require('current-week-number');





export default class Ger1MerliceTrussDetails extends React.Component {



    constructor(props) {
        super(props)


        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitTrussNumber = this.onSubmitTrussNumber.bind(this);
        this.onSubmitLastWeek = this.onSubmitLastWeek.bind(this);
        this.onSubmitSetFruits = this.onSubmitSetFruits.bind(this);
        this.onSubmitFlowers = this.onSubmitFlowers.bind(this);
        this.onSubmitPruningNumber = this.onSubmitPruningNumber.bind(this);


        this.onSubmitTrussNumber1 = this.onSubmitTrussNumber1.bind(this);
        this.onSubmitLastWeek1 = this.onSubmitLastWeek1.bind(this);
        this.onSubmitSetFruits1 = this.onSubmitSetFruits1.bind(this);
        this.onSubmitFlowers1 = this.onSubmitFlowers1.bind(this);
        this.onSubmitPruningNumber1 = this.onSubmitPruningNumber1.bind(this);


        this.trussNumberRef = this.updateRef.bind(this, 'TrussNumber');
        this.lastWeekNumberRef = this.updateRef.bind(this, 'LastWeekNumber');
        this.setFruitsRef = this.updateRef.bind(this, 'SetFruits');
        this.setFlowersRef = this.updateRef.bind(this, 'SetFlowers');
        this.pruningNumberRef = this.updateRef.bind(this, 'PruningNumber');

        this.trussNumberRef1 = this.updateRef.bind(this, 'TrussNumber1');
        this.lastWeekNumberRef1 = this.updateRef.bind(this, 'LastWeekNumber1');
        this.setFruitsRef1 = this.updateRef.bind(this, 'SetFruits1');
        this.setFlowersRef1 = this.updateRef.bind(this, 'SetFlowers1');
        this.pruningNumberRef1 = this.updateRef.bind(this, 'PruningNumber1');

        this.trussNumberRef2 = this.updateRef.bind(this, 'TrussNumber2');
        this.lastWeekNumberRef2 = this.updateRef.bind(this, 'LastWeekNumber2');
        this.setFruitsRef2 = this.updateRef.bind(this, 'SetFruits2');
        this.setFlowersRef2 = this.updateRef.bind(this, 'SetFlowers2');
        this.pruningNumberRef2 = this.updateRef.bind(this, 'PruningNumber2');

        this.trussNumberRef3 = this.updateRef.bind(this, 'TrussNumber3');
        this.lastWeekNumberRef3 = this.updateRef.bind(this, 'LastWeekNumber3');
        this.setFruitsRef3 = this.updateRef.bind(this, 'SetFruits3');
        this.setFlowersRef3 = this.updateRef.bind(this, 'SetFlowers3');
        this.pruningNumberRef3 = this.updateRef.bind(this, 'PruningNumber3');

        this.trussNumberRef4 = this.updateRef.bind(this, 'TrussNumber4');
        this.lastWeekNumberRef4 = this.updateRef.bind(this, 'LastWeekNumber4');
        this.setFruitsRef4 = this.updateRef.bind(this, 'SetFruits4');
        this.setFlowersRef4 = this.updateRef.bind(this, 'SetFlowers4');
        this.pruningNumberRef4 = this.updateRef.bind(this, 'PruningNumber4');

        this.trussNumberRef5 = this.updateRef.bind(this, 'TrussNumber5');
        this.lastWeekNumberRef5 = this.updateRef.bind(this, 'LastWeekNumber5');
        this.setFruitsRef5 = this.updateRef.bind(this, 'SetFruits5');
        this.setFlowersRef5 = this.updateRef.bind(this, 'SetFlowers5');
        this.pruningNumberRef5 = this.updateRef.bind(this, 'PruningNumber5');

        this.trussNumberRef6 = this.updateRef.bind(this, 'TrussNumber6');
        this.lastWeekNumberRef6 = this.updateRef.bind(this, 'LastWeekNumber6');
        this.setFruitsRef6 = this.updateRef.bind(this, 'SetFruits6');
        this.setFlowersRef6 = this.updateRef.bind(this, 'SetFlowers6');
        this.pruningNumberRef6 = this.updateRef.bind(this, 'PruningNumber6');

        this.trussNumberRef7 = this.updateRef.bind(this, 'TrussNumber7');
        this.lastWeekNumberRef7 = this.updateRef.bind(this, 'LastWeekNumber7');
        this.setFruitsRef7 = this.updateRef.bind(this, 'SetFruits7');
        this.setFlowersRef7 = this.updateRef.bind(this, 'SetFlowers7');
        this.pruningNumberRef7 = this.updateRef.bind(this, 'PruningNumber7');

        this.trussNumberRef8 = this.updateRef.bind(this, 'TrussNumber8');
        this.lastWeekNumberRef8 = this.updateRef.bind(this, 'LastWeekNumber8');
        this.setFruitsRef8 = this.updateRef.bind(this, 'SetFruits8');
        this.setFlowersRef8 = this.updateRef.bind(this, 'SetFlowers8');
        this.pruningNumberRef8 = this.updateRef.bind(this, 'PruningNumber8');

        this.trussNumberRef9 = this.updateRef.bind(this, 'TrussNumber9');
        this.lastWeekNumberRef9 = this.updateRef.bind(this, 'LastWeekNumber9');
        this.setFruitsRef9 = this.updateRef.bind(this, 'SetFruits9');
        this.setFlowersRef9 = this.updateRef.bind(this, 'SetFlowers9');
        this.pruningNumberRef9 = this.updateRef.bind(this, 'PruningNumber9');


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
            plantNumber: '',

            trussNumber1: '',
            lastWeekNumber1: '',
            setFruits1: '',
            setFlowers1: '',
            pruningNumber1: '',

            trussNumber2: '',
            lastWeekNumber2: '',
            setFruits2: '',
            setFlowers2: '',
            pruningNumber2: '',

            trussNumber3: '',
            lastWeekNumber3: '',
            setFruits3: '',
            setFlowers3: '',
            pruningNumber3: '',

            trussNumber4: '',
            lastWeekNumber4: '',
            setFruits4: '',
            setFlowers4: '',
            pruningNumber4: '',

            trussNumber5: '',
            lastWeekNumber5: '',
            setFruits5: '',
            setFlowers5: '',
            pruningNumber5: '',

            trussNumber6: '',
            lastWeekNumber6: '',
            setFruits6: '',
            setFlowers6: '',
            pruningNumber6: '',

            trussNumber7: '',
            lastWeekNumber7: '',
            setFruits7: '',
            setFlowers7: '',
            pruningNumber7: '',

            trussNumber8: '',
            lastWeekNumber8: '',
            setFruits8: '',
            setFlowers8: '',
            pruningNumber8: '',

            trussNumber9: '',
            lastWeekNumber9: '',
            setFruits9: '',
            setFlowers9: '',
            pruningNumber9: '',

            number: '',
            lastNumber: '',
            fruits: '',
            flowers: '',
            pruning: '',

            week: '',

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
            AsyncStorage.getItem('lastWeekNumber').then((text2Value) => {
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

        console.ignoredYellowBox = ['react-native BugReporting extraData'];

        //numberWeek = 2000 + currentWeekNumber();
        //console.log("Current Week Number: ", numberWeek);

        if (abc === '0' || abc === null || abc === undefined) {
            this.getAsysncValues();
            this.setState({
                isDataSend: true,
                week: 2000 + currentWeekNumber()
            });


        } else if (abc === '1' && abc !== null) {

            AsyncStorage.clear();
            numberWeek = 2000 + currentWeekNumber() + 1;
            console.log("Week Number: ", numberWeek);


            this.setState({
                isDataSend: false,
                week: numberWeek

            });



        } else {

            AsyncStorage.clear();
            numberWeek = numberWeek + 1;
            console.log("Week Number: ", numberWeek);

            this.setState({
                isDataSend: false,
                week: numberWeek

            });


        }

        console.log("Count : ", abc);
        console.log("show : ", this.state.show);
        this.ShowHideComponent();

        if (this.props.route.params.plant !== undefined) {
            plantNo = this.props.route.params.plant;
            console.log("Plant " +plantNo);
            this.setState({
              
                plantNumber: "Plant "+plantNo,

            });
        } else {

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


    }

    getDataFromDB = () => {

        /*trussNumber: '',
            lastWeekNumber: '',
            setFruits: '',
            setFlowers: '',
            pruningNumber: '',*/


        if (this.state.trussNumber != null) {

            db.trussById(this.state.trussNumber, this.state.week - 1, 'GER 1 - Merlice').then((data) => {
                console.log(data);
                console.log("Calling database")
                truss = data;
                this.setState({
                    truss,
                    setFruits: truss.setFruits,
                });
                console.log("Truss Details", this.state.truss);

                if ((parseInt(this.state.trussNumber) + 1) != null) {

                    this.getDataFromDB1();


                }


            }).catch((err) => {
                console.log(err);

            })
        } else {


        }

    }

    getDataFromDB1 = () => {


        if ((parseInt(this.state.trussNumber) + 1) != null) {

            db.trussById((parseInt(this.state.trussNumber) + 1), this.state.week - 1, 'GER 1 - Merlice').then((data) => {
                console.log(data);
                console.log("Calling database")
                truss1 = data;
                this.setState({
                    truss1,
                });
                console.log("Truss Details", this.state.truss1);

                if ((parseInt(this.state.trussNumber) + 2) != null) {

                    this.getDataFromDB2();


                }


            }).catch((err) => {
                console.log(err);

            })
        } else {


        }

    }

    getDataFromDB2 = () => {


        if ((parseInt(this.state.trussNumber) + 2) != null) {

            db.trussById((parseInt(this.state.trussNumber) + 2), this.state.week - 1, 'GER 1 - Merlice').then((data) => {
                console.log(data);
                console.log("Calling database")
                truss2 = data;
                this.setState({
                    truss2,
                });
                console.log("Truss Details", this.state.truss2);

                if ((parseInt(this.state.trussNumber) + 3) != null) {

                    this.getDataFromDB3();


                }


            }).catch((err) => {
                console.log(err);

            })
        } else {


        }

    }

    getDataFromDB3 = () => {


        if ((parseInt(this.state.trussNumber) + 3) != null) {

            db.trussById((parseInt(this.state.trussNumber) + 3), this.state.week - 1, 'GER 1 - Merlice').then((data) => {
                console.log(data);
                console.log("Calling database")
                truss3 = data;
                this.setState({
                    truss3,
                });
                console.log("Truss Details", this.state.truss3);

                if ((parseInt(this.state.trussNumber) + 4) != null) {

                    this.getDataFromDB4();


                }


            }).catch((err) => {
                console.log(err);

            })
        } else {


        }

    }

    getDataFromDB4 = () => {


        if ((parseInt(this.state.trussNumber) + 4) != null) {

            db.trussById((parseInt(this.state.trussNumber) + 4), this.state.week - 1, 'GER 1 - Merlice').then((data) => {
                console.log(data);
                console.log("Calling database")
                truss4 = data;
                this.setState({
                    truss4,
                });
                console.log("Truss Details", this.state.truss4);

                if ((parseInt(this.state.trussNumber) + 5) != null) {

                    //this.getDataFromDB5();


                }


            }).catch((err) => {
                console.log(err);

            })
        } else {


        }

    }


    onChangeText(text) {
        ['TrussNumber', 'LastWeekNumber', 'SetFruits', 'SetFlowers', 'PruningNumber', 'TrussNumber1', 'LastWeekNumber1', 'SetFruits1', 'SetFlowers1', 'PruningNumber1', 'TrussNumber2', 'LastWeekNumber2', 'SetFruits2', 'SetFlowers2', 'PruningNumber2',
            'TrussNumber3', 'LastWeekNumber3', 'SetFruits3', 'SetFlowers3', 'PruningNumber3', 'TrussNumber4', 'LastWeekNumber4', 'SetFruits4', 'SetFlowers4', 'PruningNumber4', 'TrussNumber5', 'LastWeekNumber5', 'SetFruits5', 'SetFlowers5', 'PruningNumber5',
            'TrussNumber6', 'LastWeekNumber6', 'SetFruits6', 'SetFlowers6', 'PruningNumber6', 'TrussNumber7', 'LastWeekNumber7', 'SetFruits7', 'SetFlowers7', 'PruningNumber7',
            'TrussNumber8', 'LastWeekNumber8', 'SetFruits8', 'SetFlowers8', 'PruningNumber8', 'TrussNumber9', 'LastWeekNumber9', 'SetFruits9', 'SetFlowers9', 'PruningNumber9',]
            .map((name) => ({ name, ref: this[name] }))
            .forEach(({ name, ref }) => {
                if (ref.isFocused()) {
                    this.setState({ [name]: text });
                }
            });
    }
    saveTrussToDb = () => {

        if (this.state.trussNumber !== null && this.state.setFlowers !== null) {

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
                plantNumber: this.state.plantNumber,
                lastWeekNumber: '0',
                setFruits: this.state.setFruits,
                setFlowers: this.state.setFlowers,
                pruningNumber: this.state.pruningNumber,
                plantRow: '45/46',
                plantName: 'GER 1 - Merlice',
                plantWeek: this.state.week,


            }


            db.addTrussDetails(data).then((result) => {
                console.log(result);
                this.setState({
                    isLoading: false,
                    isDataSend: true,

                });
                abc = '1';


                if ((parseInt(this.state.trussNumber) + 1) != null) {

                    this.saveTrussToDB1();


                } else {

                    Alert.alert('Completed!')

                    this.props.navigation.navigate('Ger1MerlicePlant1')

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


        } else {



        }



    }

    saveTrussToDB1 = () => {

        if ((parseInt(this.state.trussNumber) + 1) != null && this.state.setFlowers1 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber1 } = this.state;
            const { lastWeekNumber1 } = this.state;
            const { setFruits1 } = this.state;
            const { setFlowers1 } = this.state;
            const { pruningNumber1 } = this.state;



            let data1 = {
                trussNumber: (parseInt(this.state.trussNumber) + 1),
                plantNumber: this.state.plantNumber,
                lastWeekNumber: '0',
                setFruits: this.state.setFruits1,
                setFlowers: this.state.setFlowers1,
                pruningNumber: this.state.pruningNumber1,
                plantRow: '45/46',
                plantName: 'GER 1 - Merlice',
                plantWeek: this.state.week,


            }



            db.addTrussDetails(data1).then((result) => {
                console.log(result);
                this.setState({
                    isLoading: false,
                    isDataSend: true,

                });
                abc = '1';

                if ((parseInt(this.state.trussNumber) + 2) != null) {

                    this.saveTrussToDB2();


                } else {

                    Alert.alert('Completed!')

                    this.props.navigation.navigate('Ger1MerlicePlant1')

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



        } else {


        }



    }

    saveTrussToDB2 = () => {

        if ((parseInt(this.state.trussNumber) + 2) != null && this.state.setFlowers2 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber2 } = this.state;
            const { lastWeekNumber2 } = this.state;
            const { setFruits2 } = this.state;
            const { setFlowers2 } = this.state;
            const { pruningNumber2 } = this.state;



            let data2 = {
                trussNumber: (parseInt(this.state.trussNumber) + 2),
                plantNumber: this.state.plantNumber,
                lastWeekNumber: '0',
                setFruits: this.state.setFruits2,
                setFlowers: this.state.setFlowers2,
                pruningNumber: this.state.pruningNumber2,
                plantRow: '45/46',
                plantName: 'GER 1 - Merlice',
                plantWeek: this.state.week,


            }



            db.addTrussDetails(data2).then((result) => {
                console.log(result);
                this.setState({
                    isLoading: false,
                    isDataSend: true,

                });
                abc = '1';

                if ((parseInt(this.state.trussNumber) + 3) != null) {

                    this.saveTrussToDB3();


                } else {

                    Alert.alert('Completed!')

                    this.props.navigation.navigate('Ger1MerlicePlant1')

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




        } else {




        }

    }

    saveTrussToDB3 = () => {

        if ((parseInt(this.state.trussNumber) + 3) != null && this.state.setFlowers3 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber3 } = this.state;
            const { lastWeekNumber3 } = this.state;
            const { setFruits3 } = this.state;
            const { setFlowers3 } = this.state;
            const { pruningNumber3 } = this.state;



            let data3 = {
                trussNumber: (parseInt(this.state.trussNumber) + 3),
                plantNumber: this.state.plantNumber,
                lastWeekNumber: '0',
                setFruits: this.state.setFruits3,
                setFlowers: this.state.setFlowers3,
                pruningNumber: this.state.pruningNumber3,
                plantRow: '45/46',
                plantName: 'GER 1 - Merlice',
                plantWeek: this.state.week,


            }



            db.addTrussDetails(data3).then((result) => {
                console.log(result);
                this.setState({
                    isLoading: false,
                    isDataSend: true,

                });
                abc = '1';

                if ((parseInt(this.state.trussNumber) + 4) != null) {

                    this.saveTrussToDB4();


                } else {

                    Alert.alert('Completed!')

                    this.props.navigation.navigate('Ger1MerlicePlant1')

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



        } else {



        }



    }

    saveTrussToDB4 = () => {

        if ((parseInt(this.state.trussNumber) + 4) != null && this.state.setFlowers4 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber4 } = this.state;
            const { lastWeekNumber4 } = this.state;
            const { setFruits4 } = this.state;
            const { setFlowers4 } = this.state;
            const { pruningNumber4 } = this.state;



            let data4 = {
                trussNumber: (parseInt(this.state.trussNumber) + 4),
                plantNumber: this.state.plantNumber,
                lastWeekNumber: '0',
                setFruits: this.state.setFruits4,
                setFlowers: this.state.setFlowers4,
                pruningNumber: this.state.pruningNumber4,
                plantRow: '45/46',
                plantName: 'GER 1 - Merlice',
                plantWeek: this.state.week,


            }



            db.addTrussDetails(data4).then((result) => {
                console.log(result);
                this.setState({
                    isLoading: false,
                    isDataSend: true,

                });
                abc = '1';

                if ((parseInt(this.state.trussNumber) + 5) != null) {

                    this.saveTrussToDB5();


                } else {

                    Alert.alert('Completed!')

                    this.props.navigation.navigate('Ger1MerlicePlant1')

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



        } else {



        }



    }

    saveTrussToDB5 = () => {

        if ((parseInt(this.state.trussNumber) + 5) != null && this.state.setFlowers5 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber5 } = this.state;
            const { lastWeekNumber5 } = this.state;
            const { setFruits5 } = this.state;
            const { setFlowers5 } = this.state;
            const { pruningNumber5 } = this.state;



            let data5 = {
                trussNumber: (parseInt(this.state.trussNumber) + 5),
                plantNumber: this.state.plantNumber,
                lastWeekNumber: '0',
                setFruits: this.state.setFruits5,
                setFlowers: this.state.setFlowers5,
                pruningNumber: this.state.pruningNumber5,
                plantRow: '45/46',
                plantName: 'GER 1 - Merlice',
                plantWeek: this.state.week,


            }



            db.addTrussDetails(data5).then((result) => {
                console.log(result);
                this.setState({
                    isLoading: false,
                    isDataSend: true,

                });
                abc = '1';

                if ((parseInt(this.state.trussNumber) + 6) != null) {

                    this.saveTrussToDB6();


                } else {

                    Alert.alert('Completed!')

                    this.props.navigation.navigate('Ger1MerlicePlant1')

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




        } else {



        }



    }

    saveTrussToDB6 = () => {

        if ((parseInt(this.state.trussNumber) + 6) != null && this.state.setFlowers6 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber6 } = this.state;
            const { lastWeekNumber6 } = this.state;
            const { setFruits6 } = this.state;
            const { setFlowers6 } = this.state;
            const { pruningNumber6 } = this.state;



            let data6 = {
                trussNumber: (parseInt(this.state.trussNumber) + 6),
                plantNumber: this.state.plantNumber,
                lastWeekNumber: '0',
                setFruits: this.state.setFruits6,
                setFlowers: this.state.setFlowers6,
                pruningNumber: this.state.pruningNumber6,
                plantRow: '45/46',
                plantName: 'GER 1 - Merlice',
                plantWeek: this.state.week,


            }



            db.addTrussDetails(data6).then((result) => {
                console.log(result);
                this.setState({
                    isLoading: false,
                    isDataSend: true,

                });
                abc = '1';

                if ((parseInt(this.state.trussNumber) + 7) != null) {

                    this.saveTrussToDB7();


                } else {

                    Alert.alert('Completed!')

                    this.props.navigation.navigate('Ger1MerlicePlant1')

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




        } else {



        }



    }

    saveTrussToDB7 = () => {

        if ((parseInt(this.state.trussNumber) + 7) != null && this.state.setFlowers7 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber7 } = this.state;
            const { lastWeekNumber7 } = this.state;
            const { setFruits7 } = this.state;
            const { setFlowers7 } = this.state;
            const { pruningNumber7 } = this.state;



            let data7 = {
                trussNumber: (parseInt(this.state.trussNumber) + 7),
                plantNumber: this.state.plantNumber,
                lastWeekNumber: '0',
                setFruits: this.state.setFruits7,
                setFlowers: this.state.setFlowers7,
                pruningNumber: this.state.pruningNumber7,
                plantRow: '45/46',
                plantName: 'GER 1 - Merlice',
                plantWeek: this.state.week,


            }



            db.addTrussDetails(data7).then((result) => {
                console.log(result);
                this.setState({
                    isLoading: false,
                    isDataSend: true,

                });
                abc = '1';

                if ((parseInt(this.state.trussNumber) + 8) != null) {

                    this.saveTrussToDB8();


                } else {

                    Alert.alert('Completed!')

                    this.props.navigation.navigate('Ger1MerlicePlant1')

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




        } else {



        }



    }

    saveTrussToDB8 = () => {

        if ((parseInt(this.state.trussNumber) + 8) != null && this.state.setFlowers8 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber8 } = this.state;
            const { lastWeekNumber8 } = this.state;
            const { setFruits8 } = this.state;
            const { setFlowers8 } = this.state;
            const { pruningNumber8 } = this.state;



            let data8 = {
                trussNumber: (parseInt(this.state.trussNumber) + 8),
                plantNumber: this.state.plantNumber,
                lastWeekNumber: '0',
                setFruits: this.state.setFruits8,
                setFlowers: this.state.setFlowers8,
                pruningNumber: this.state.pruningNumber8,
                plantRow: '45/46',
                plantName: 'GER 1 - Merlice',
                plantWeek: this.state.week,


            }



            db.addTrussDetails(data8).then((result) => {
                console.log(result);
                this.setState({
                    isLoading: false,
                    isDataSend: true,

                });
                abc = '1';

                if ((parseInt(this.state.trussNumber) + 9) != null) {

                    this.saveTrussToDB9();


                } else {

                    Alert.alert('Completed!')

                    this.props.navigation.navigate('Ger1MerlicePlant1')

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




        } else {


        }

    }

    saveTrussToDB9 = () => {

        if ((parseInt(this.state.trussNumber) + 9) != null && this.state.setFlowers9 !== null) {

            this.setState({
                isLoading: true,
            });

            abc = '0';
            var that = this;

            const { trussNumber9 } = this.state;
            const { lastWeekNumber9 } = this.state;
            const { setFruits9 } = this.state;
            const { setFlowers9 } = this.state;
            const { pruningNumber9 } = this.state;



            let data9 = {
                trussNumber: (parseInt(this.state.trussNumber) + 9),
                plantNumber: this.state.plantNumber,
                lastWeekNumber: '0',
                setFruits: this.state.setFruits9,
                setFlowers: this.state.setFlowers9,
                pruningNumber: this.state.pruningNumber9,
                plantRow: '45/46',
                plantName: 'GER 1 - Merlice',
                plantWeek: this.state.week,


            }



            db.addTrussDetails(data9).then((result) => {
                console.log(result);
                this.setState({
                    isLoading: false,
                    isDataSend: true,

                });
                abc = '1';
                Alert.alert('Completed!')

                this.props.navigation.navigate('Ger1MerlicePlant1')


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

    onSubmitTrussNumber1() {
        this.TrussNumber1.focus();
    }

    onSubmitLastWeek1() {
        this.LastWeekNumber1.focus();
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
        this.LastWeekNumber2.focus();
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
        this.LastWeekNumber3.focus();
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
        this.LastWeekNumber4.focus();
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
        this.LastWeekNumber5.focus();
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
        this.LastWeekNumber6.focus();
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
        this.LastWeekNumber7.focus();
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
        this.LastWeekNumber8.focus();
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
        this.LastWeekNumber9.focus();
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

    _alertIndex(index) {
        Alert.alert(`This is row ${index + 1}`);
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

                    <ImageBackground source={require('../assets/T&G_Tomatoes.jpg')} style={styles.backgroundImage}>

                        <ScrollView style={styles.formContainer}
                            keyboardShouldPersistTaps='handled'>




                            <View
                                style={styles.container222}>

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

                                </View>

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

                                <View style={styles.rowContainer222}>

                                    <View
                                        style={{
                                            borderLeftColor: 'black',
                                            borderLeftWidth: 1,
                                        }}
                                    />


                                    <TextInput
                                        style={styles.textinputheight}
                                        underlineColorAndroid="black"
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
                                        onChangeText={(text) => this.updateTextInput(text, 'trussNumber')}
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
                                    //value={this.state.setFruits.toString()}
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
                                        value={this.state.truss.setFlowers}
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
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber')}
                                        error={errors.PruningNumber}
                                        value={this.state.pruningNumber}
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
                                        underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef1}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.lastWeekTextInput1.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'trussNumber1')}
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
                                        value={this.state.setFruits1}
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
                                    //value={this.state.truss1.setFlowers}
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
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber1')}
                                        error={errors.PruningNumber1}
                                    //value={this.state.truss1.pruningNumber}
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
                                        underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef2}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.lastWeekTextInput2.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'trussNumber2')}
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
                                        value={this.state.setFruits2}
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
                                        value={this.state.setFlowers2}
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
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber2')}
                                        error={errors.PruningNumber2}
                                        value={this.state.pruningNumber2}
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
                                        underlineColorAndroid="black"
                                        autoCapitalize="none"
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
                                        onChangeText={(text) => this.updateTextInput(text, 'trussNumber3')}
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
                                        value={this.state.setFruits3}
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
                                        value={this.state.setFlowers3}
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
                                        ref={(input) => { this.pruningNumbersTextInput3 = input; }}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        returnKeyType={"done"}
                                        onChangeText={this.onChangeText}
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber3')}
                                        error={errors.PruningNumber3}
                                        value={this.state.pruningNumber3}
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
                                        underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef4}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.lastWeekTextInput4.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'trussNumber4')}
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
                                        value={this.state.setFruits4}
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
                                        value={this.state.setFlowers4}
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
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber4')}
                                        error={errors.PruningNumber4}
                                        value={this.state.pruningNumber4}
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
                                        underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef5}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.setFruitTextInput5.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'trussNumber5')}
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
                                        value={this.state.setFruits5}
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
                                        value={this.state.setFlowers5}
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
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber5')}
                                        error={errors.PruningNumber5}
                                        value={this.state.pruningNumber5}
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
                                        underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef6}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.setFruitsTextInput6.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'trussNumber6')}
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
                                        value={this.state.setFruits6}
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
                                        value={this.state.setFlowers6}
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
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber6')}
                                        error={errors.PruningNumber6}
                                        value={this.state.pruningNumber6}
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
                                        underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef7}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.setFruitsTextInput7.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'trussNumber7')}
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
                                        value={this.state.setFruits7}
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
                                        value={this.state.setFlowers7}
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
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber7')}
                                        error={errors.PruningNumber7}
                                        value={this.state.pruningNumber7}
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
                                        underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef8}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.setFruitsTextInput8.focus(); }}
                                        onChangeText={(text) => this.updateTextInput(text, 'trussNumber8')}
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
                                        value={this.state.setFruits8}
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
                                        value={this.state.setFlowers8}
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
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber8')}
                                        error={errors.PruningNumber8}
                                        value={this.state.pruningNumber8}
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
                                        underlineColorAndroid="black"
                                        autoCapitalize="none"
                                        multiline={false}
                                        keyboardType={'numeric'}
                                        multiline={false}
                                        returnKeyType={"next"}
                                        ref={this.trussNumberRef9}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onFocus={this.onFocus}
                                        onChangeText={this.onChangeText}
                                        onSubmitEditing={() => { this.setFruitsTextInput9.focus(); }}
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
                                        value={this.state.setFruits9}
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
                                        value={this.state.setFlowers9}
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
                                        onChangeText={(text) => this.updateTextInput(text, 'pruningNumber9')}
                                        error={errors.PruningNumber9}
                                        value={this.state.pruningNumber9}
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

                            </View>

                            <View
                                style={{
                                    marginBottom: 20
                                }}
                            />



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



    text222: {
        margin: 10,
        color: '#110A6A',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'

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
    },
    textinputheight: {

        height: 70,
        borderBottomWidth: 1.2,
        borderBottomColor: 'black',
        marginBottom: 5

    },

    bottonColor: {
        borderBottomWidth: 1.2,
        borderBottomColor: 'black',
        marginBottom: 5
    }

})

