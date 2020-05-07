import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ActivityIndicator, ImageBackground, SafeAreaView, Alert, ToastAndroid, AlertIOS, Platform } from 'react-native'
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

const screenDetails = [{
    name: 'HAR 3 - Flamentyno',
    row: '356',
    week: '2009'
}]




export default class FlamentynoPlant1 extends React.Component {


    constructor(props) {
        super(props)
        /*this.state = {
            txtLeaves: '',
            txtTruss: ''
        }*/



        //this.onFocus = this.onFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        /*this.onSubmitLeavesPerPlant = this.onSubmitLeavesPerPlant.bind(this);
        this.onSubmitFullysetTruss = this.onSubmitFullysetTruss.bind(this);
        this.onSubmitTrussLength = this.onSubmitTrussLength.bind(this);
        this.onSubmitWeeklyGrowth = this.onSubmitWeeklyGrowth.bind(this);
        this.onSubmitFlowerTrussHeight = this.onSubmitFlowerTrussHeight.bind(this);
        this.onSubmitLeafLength = this.onSubmitLeafLength.bind(this);
        this.onSubmitLeafWidth = this.onSubmitLeafWidth.bind(this);
        this.onSubmitStmDiameter = this.onSubmitStmDiameter.bind(this);
        this.onSubmitLastWeekStmDiameter = this.onSubmitLastWeekStmDiameter.bind(this);*/
        this.onSubmitTrussNumber = this.onSubmitTrussNumber.bind(this);
        this.onSubmitLastWeek = this.onSubmitLastWeek.bind(this);
        this.onSubmitSetFruits = this.onSubmitSetFruits.bind(this);
        this.onSubmitFlowers = this.onSubmitFlowers.bind(this);
        this.onSubmitPruningNumber = this.onSubmitPruningNumber.bind(this);
        //this.onAccessoryPress = this.onAccessoryPress.bind(this);


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


            isLoading: false

        };
    }



    updateTextInput = (text, field) => {
        const state = this.state
        state[field] = text;
        this.setState(state);
    }



    savePlantsToDb = () => {

        this.setState({
            isLoading: true,
        });

        var that = this;
        const { plantRow } = this.state;
        const { plantName } = this.state;;
        const { plantWeek } = this.state;;
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
            plantRow: '365',
            plantName: 'HAR 3 - Flamentyno',
            plantWeek: '2009',
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
                                            if (trussNumber) {
                                                if (lastWeekNumber) {
                                                    if (setFruits) {
                                                        if (setFlowers) {
                                                            if (pruningNumber) {
                                                                db.addPlants(data).then((result) => {
                                                                    console.log(result);

                                                                    db.addList(data).then((result) => {
                                                                        console.log(result);
                                                                        this.setState({
                                                                            isLoading: false,
                                                                        });
                                                                        if (Platform.OS === 'android') {
                                                                            ToastAndroid.show('Completed!!', ToastAndroid.SHORT)

                                                                        } else {
                                                                            AlertIOS.alert('Completed!!');

                                                                        }
                                                                        this.props.navigation.navigate('Har3Flamentyno')

                                                                    }).catch((err) => {
                                                                        console.log(err);
                                                                        this.setState({
                                                                            isLoading: false,
                                                                        });
                                                                    })
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
                                        } else {
                                            alert('Please fill Last Week Stem Diameter');
                                            this.setState({
                                                isLoading: false,
                                            });

                                        }
                                    } else {
                                        alert('Please fill Steam Diamater');
                                        this.setState({
                                            isLoading: false,
                                        });
                                    }
                                } else {
                                    alert('Please fill Leaf Width');
                                    this.setState({
                                        isLoading: false,
                                    });
                                }
                            } else {
                                alert('Please fill Leaf Length');
                                this.setState({
                                    isLoading: false,
                                });
                            }
                        } else {
                            alert('Please fill Flower Truss Height');
                            this.setState({
                                isLoading: false,
                            });
                        }
                    } else {
                        alert('Please fill Weekly Growth');
                        this.setState({
                            isLoading: false,
                        });
                    }
                } else {
                    alert('Please fill Fully Set Truss Length');
                    this.setState({
                        isLoading: false,
                    });
                }
            } else {
                alert('Please fill Fully Set Truss');
                this.setState({
                    isLoading: false,
                });
            }
        } else {

            alert('Please fill Leaves Per Plant');
            this.setState({
                isLoading: false,
            });
        }
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
            plantRow: '365',
            plantName: 'HAR 3 - Flamentyno',
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
                                if (Platform.OS === 'android') {
                                    ToastAndroid.show('Completed!!', ToastAndroid.SHORT)

                                } else {
                                    AlertIOS.alert('Completed!!');

                                }
                                this.props.navigation.navigate('Har3Flamentyno')

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

    /*onFocus() {
        let { errors = {} } = this.state;

        for (let name in errors) {
            let ref = this[name];

            if (ref && ref.isFocused()) {
                delete errors[name];
            }
        }

        this.setState({ errors });
    }*/



    onChangeText(text) {
        ['LeavesPerPlant', 'FullysetTruss', 'TrussLength', 'WeeklyGrowth', 'FlowerTrussHeight', 'LeafLength', 'LeafWidth', 'StmDiameter', 'LastWeekStmDiameter', 'TrussNumber', 'LastWeekNumber', 'SetFruits', 'SetFlowers', 'PruningNumber']
            .map((name) => ({ name, ref: this[name] }))
            .forEach(({ name, ref }) => {
                if (ref.isFocused()) {
                    this.setState({ [name]: text });
                }
            });
    }

    /*onAccessoryPress() {
        this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
    }

    onSubmitLeavesPerPlant() {
        this.LeavesPerPlant.focus();
    }

    onSubmitFullysetTruss() {
        this.fullySetTruss.focus();
    }

    onSubmitTrussLength() {
        this.setTrussLength.focus();
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
    }*/

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
                                value={this.state.plantRow}>Row No 356</Text>

                            <View style={styles.inputLayout}>


                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    labelHeight={60}
                                    multiline={false}
                                    ref={this.leavesPerPlantRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    onChangeText={(text) => this.updateTextInput(text, 'leavesPerPlant')}
                                    value={this.state.LeavesPerPlant}
                                    onSubmitEditing={this.onSubmitFullysetTruss}
                                    returnKeyType='next'
                                    label='Leaves Per Plant'
                                    error={errors.LeavesPerPlant}
                                    keyboardType={'numeric'}
                                    blurOnSubmit={false}

                                />

                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    labelHeight={60}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    multiline={false}
                                    ref={this.fullysetTrussRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitFullysetTruss}
                                    returnKeyType='next'
                                    label='Fully Set Truss'
                                    error={errors.FullysetTruss}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'fullySetTruss')}
                                    value={this.state.fullySetTruss}

                                />


                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    labelHeight={60}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    multiline={false}
                                    ref={this.trussLengthRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitTrussLength}
                                    returnKeyType='next'
                                    label='Fully Set Truss Length'
                                    error={errors.TrussLength}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'setTrussLength')}
                                    value={this.state.setTrussLength}

                                />

                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    labelHeight={60}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    multiline={false}
                                    ref={this.weeklyGrowthRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitWeeklyGrowth}
                                    returnKeyType='next'
                                    label='Weekly Growth'
                                    error={errors.WeeklyGrowth}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'weeklyGrowth')}
                                    value={this.state.weeklyGrowth}

                                />


                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    labelHeight={60}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    multiline={false}
                                    ref={this.flowerTrussHeightRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitFlowerTrussHeight}
                                    returnKeyType='next'
                                    label='Flower Truss Height'
                                    error={errors.FlowerTrussHeight}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'floweringTrussHeight')}
                                    value={this.state.floweringTrussHeight}

                                />

                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    labelHeight={60}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    multiline={false}
                                    ref={this.leafLengthRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitLeafLength}
                                    returnKeyType='next'
                                    label='Leaf Length'
                                    error={errors.LeafLength}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'leafLength')}
                                    value={this.state.leafLength}
                                />

                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    labelHeight={60}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    multiline={false}
                                    ref={this.leafWidthRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitLeafWidth}
                                    returnKeyType='next'
                                    label='Leaf Width'
                                    error={errors.LeafWidth}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'leafWidth')}
                                    value={this.state.leafWidth}


                                />

                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    labelHeight={60}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    multiline={false}
                                    ref={this.stmDiameterRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitStmDiameter}
                                    returnKeyType='next'
                                    label='Stem Diameter'
                                    error={errors.StmDiameter}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'stmDiameter')}
                                    value={this.state.stmDiameter}

                                />

                                <TextField
                                    textColor='#000000'
                                    fontSize={18}
                                    labelHeight={60}
                                    tintColor='#000000'
                                    baseColor='#000000'
                                    multiline={false}
                                    ref={this.lastWeekStmDiameterRef}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitLastWeekStmDiameter}
                                    returnKeyType='next'
                                    label='Last Week Stem Diameter'
                                    error={errors.LastWeekStmDiameter}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => this.updateTextInput(text, 'lastWeekStmDiameter')}
                                    value={this.state.lastWeekStmDiameter} />


                            </View>


                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={this.saveTrussToDb}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>



                            <Text style={styles.text}
                                value={this.state.plantRow}>Truss Details</Text>


                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigate('TrussDetails')}>
                                <Text style={styles.buttonText}>Truss Number 1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigate('TrussDetails')}>
                                <Text style={styles.buttonText}>Truss Number 2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigate('TrussDetails')}>
                                <Text style={styles.buttonText}>Truss Number 3</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigate('TrussDetails')}>
                                <Text style={styles.buttonText}>Truss Number 4</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigate('TrussDetails')}>
                                <Text style={styles.buttonText}>Truss Number 5</Text>
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

//export default FlamentynoPlant1
