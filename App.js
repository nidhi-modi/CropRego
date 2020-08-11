/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  YellowBox 
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStackNavigator from './navigation/MainStackNavigator'
import Home from './screens/Home'
import Database from '../rego/screens/Database'
import { fbDB } from '../rego/screens/config'
import { Firebase } from 'react-native-firebase';



const db = new Database();
var firebase = require("firebase");

function replaceUndefinedOrNull(key, value) {
  if (value === null || value === undefined) {
    return undefined;
  }

  return value;
}


var objify = function () {
  var rv = {};
  for (var i = 0; i < arguments.length; i += 2)
    rv[arguments[i]] = arguments[i + 1];
  return rv;
}

YellowBox.ignoreWarnings(['Setting a timer']);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    console.warn(message);
  }
};

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated', // works
  'Module RCTImageLoader', // works
  'Require cycle:', // doesn't work
])


export default class App extends Component {

  constructor(props) {
    super(props);

    const highestTimeoutId = setTimeout(() => ';');
    for (let i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }

    this.state = {
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
      trussNumber: '',
      lastWeekNumber: '',
      setFruits: '',
      setFlowers: '',
      pruningNumber: '',
      isLoading: false,



      plants: [],
      truss: [],



    };
  }

  

  async componentDidMount() {

    console.disableYellowBox = true;

    module.hot.accept(() => { });

    SplashScreen.hide();

  
    this.getPlants();
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
   // alert('Moved to next Screen here');

    }

    this.getTruss();


  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    );
  }


  getPlants = () => {
    let plants = [];
    db.listPlants().then((data) => {
      console.log("Calling database")
      plants = data;
      console.log('details from App:', plants)

        
      
        firebase.database().ref('croprego/').push(objify("PlantDetails", plants)

        ).then((data) => {
          //success callback
          console.log('data ', data)
        }).catch((error) => {
          //error callback
          console.log('error ', error)
        })
        this.setState({
          plants,
        });

    }).catch((err) => {
      console.log(err);

    })
  }

  getTruss = () => {
    let truss = [];
    db.listTruss().then((data) => {
      console.log("Calling database")
      truss = data;
      console.log('details from App:', truss)

      
        firebase.database().ref('croprego/').push(objify("TrussDetails", truss)

        ).then((data) => {
          //success callback
          console.log('data ', data)
        }).catch((error) => {
          //error callback
          console.log('error ', error)
        })
        this.setState({
          truss,
        });

    }).catch((err) => {
      console.log(err);

    })
  }


  keyExtractor = (item, index) => index.toString()


  render() {
    return (


      <MainStackNavigator />



      /* <View style={styles.container}>
           <Text>
         Main Activity
       </Text>
 
       <Button
         title = 'Navigate'
         color = 'coral'/>
       </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
});