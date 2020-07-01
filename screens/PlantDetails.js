import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ImageBackground, Image, ActivityIndicator, SafeAreaView, Alert } from 'react-native'
import { ListItem, Button } from 'react-native-elements';
import Database from '../screens/Database'
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';





const db = new Database();




export default class PlantDetails extends Component {


    constructor() {
        super();
        this.state = {
            isLoading: true,
            plant: {},
            truss: {},
            id: '',
        };
    }


    componentDidMount() {

        //this._subscribe = this.props.navigation.addListener('didFocus', () => {
            
        db.plantsById(this.props.route.params.plantId).then((data) => {
            console.log(data);
            console.log("Calling database")
            plant = data;
            this.setState({
                plant,
                isLoading: false,
                id: plant.plantId
            });
        }).catch((err) => {
            console.log(err);
            this.setState = {
                isLoading: false
            }
        })
        //});
    }

    deletePlant(){


        Alert.alert(
            //title
            'Delete',
            //body
            'Are you sure you want to delete this entry ?',
            [
              {text: 'Yes', onPress: () => this.onYesPress()
            },
              {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
            //clicking out side of alert will not cancel
          );

    }

    onYesPress(){

        
        db.deleteplants(this.state.id);
        this.props.navigation.navigate('PlantList')
    }




    render() {
        <ImageBackground source={require('../assets/T&G_Tomatoes.jpg')} style={styles.backgroundImage}></ImageBackground>

        if (this.state.isLoading) {
            return (
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
        return (
            <ImageBackground source={require('../assets/T&G_Tomatoes.jpg')} style={styles.backgroundImage}>

                <ScrollView>
                    <Card style={styles.container}>
                        <View style={styles.subContainer}>

                            <View>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>Plant Id :  {this.state.plant.plantId}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>Plant Name :  {this.state.plant.plantName}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>Leaves Per Plant :  {this.state.plant.leavesPerPlant}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>Fully Set Truss :  {this.state.plant.fullySetTruss}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>Set Truss Length :  {this.state.plant.setTrussLength}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>Weekly Growth :  {this.state.plant.weeklyGrowth}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>Flowering Truss Height :  {this.state.plant.floweringTrussHeight}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>Leaf Length :  {this.state.plant.leafLength}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>Leaf Width :  {this.state.plant.leafWidth}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>Stem Diameter :  {this.state.plant.stmDiameter}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>Last Week Stem Diameter :  {this.state.plant.lastWeekStmDiameter}</Text>
                            </View>

                        </View>

                        <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}
                            onPress={() => this.deletePlant()} >

                            <Image source={require('../assets/delete.jpg')}

                                style={styles.FloatingButtonStyle} />

                        </TouchableOpacity>
                    </Card>
                </ScrollView>
            </ImageBackground>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    TouchableOpacityStyle: {

        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 5,
        bottom: 10,
    },
    subContainer: {
        flex: 1,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'red',


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

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
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
    message: {
        padding: 16,
        fontSize: 18,
        color: 'red'
    }
})

