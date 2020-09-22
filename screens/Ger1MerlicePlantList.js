import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ActivityIndicator, ImageBackground, SafeAreaView, RefreshControl } from 'react-native'
import { ListItem, Button } from 'react-native-elements';
import Database from './Database'
import { ScrollView } from 'react-native-gesture-handler';




const db = new Database();




export default class Ger1MerlicePlantList extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            plants: [],
            truss: [],
            notFound: 'Plant Details not found.',
            refreshing: false
        };

    }


    componentDidMount() {

        this.focusListener = this.props.navigation.addListener('focus', () => {

            this.getPlants();
        });

        //this.getPlants();


    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        this.getPlants();

    }

    getTruss = () => {

        let truss = [];
        db.listTruss().then((data) => {
            console.log("Calling database")
            truss = data;
            this.setState({
                truss,
            });
        }).catch((err) => {
            console.log(err);

        })
    }


    getPlants = () => {

        this.setState({
            isLoading: true,
        });
        let plants = [];
        db.plantByWeekInList('GER 1 - Merlice').then((data) => {
            console.log("Calling database")
            plants = data;
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

    keyExtractor = (item, index) => index.toString()


    renderItem = ({ item }) => (


        <ListItem


            title={item.plantName}
            subtitle={item.plantWeek}
            //badge={{ value: 1, textStyle: { color: 'orange' }, containerStyle: { marginTop: -5 } }}

            onPress={() => {
                this.props.navigation.navigate('PlantDetails', {
                    plantId: `${item.plantId}`,
                    plantName: 'GER 1 - Merlice',


                });
            }}

            chevron
            bottomDivider
        />
    )

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }


        if (this.state.plants.length === 0) {
            return (
                <SafeAreaView style={styles.safeContainer}>

                    <View style={styles.container}>

                        <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>

                            <ScrollView style={styles.formContainer}
                                keyboardShouldPersistTaps='handled'>

                                {this.state.plants.length === 0 ? (<Text style={styles.message}>{this.state.notFound}</Text>) : null}


                            </ScrollView>
                        </ImageBackground>
                    </View>
                </SafeAreaView>
            )

        }


        return (

            <View style={styles.container}>
                <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>

                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.plants}
                        renderItem={this.renderItem}
                    />

                </ImageBackground>

            </View>



        );

    }
}

const styles = StyleSheet.create({
    /*container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ebebeb'
    },
    text: {
      color: '#101010',
      fontSize: 24,
      fontWeight: 'bold'
    }*/

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

        borderRadius: 5,
        padding: 10,
        margin: 20,
        height: '100%',
        width: '91%'


    },
    buttonContainer1: {
        //backgroundColor: 'rgba(0,0,0,0.65)',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'

    },

    buttonContainer: {
        //backgroundColor: 'rgba(0,128,0,0.65)',
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
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
})