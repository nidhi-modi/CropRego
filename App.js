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
import BackgroundTask from 'react-native-background-task'



const db = new Database();
var firebase = require("firebase");

var currentWeekNumber = require('current-week-number');
var numberWeek;


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

BackgroundTask.define(() => {

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
  const url = `${scriptUrl}?
    callback=ctrlq&plantRow=${this.state.listPlants.plantRow}&plantName=${this.state.listPlants.plantName}&plantWeek=${this.state.listPlants.plantWeek}&plantNumber=${this.state.listPlants.plantNumber}&leaves=${this.state.listPlants.leavesPerPlant}&fullySetTruss=${this.state.listPlants.fullySetTruss}&setTrussLength=${this.state.listPlants.setTrussLength}&weeklyGrowth=${this.state.listPlants.weeklyGrowth}&flowerHeight=${this.state.listPlants.floweringTrussHeight}&leafLength=${this.state.listPlants.leafLength}&leafWidth=${this.state.listPlants.leafWidth}&stmDia=${this.state.listPlants.stmDiameter}&lastWkStmDia=${this.state.listPlants.lastWeekStmDiameter}`;

  fetch(url, { mode: 'no-cors' }).then(
    () => { this.setState({ sent: true }); },
    () => { this.setState({ error: true }); }
  );


  const scriptUrl2 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
  const url1 = `${scriptUrl2}?
  callback=ctrlq&plantRow=${this.state.listTrusss.plantRow}&plantName=${this.state.listTrusss.plantName}&plantWeek=${this.state.listTrusss.plantWeek}&plantNumber=${this.state.listTrusss.plantNumber}&trussNumber=${this.state.listTrusss.trussNumber}&setFruits=${this.state.listTrusss.setFruits}&setFlowers=${this.state.listTrusss.setFlowers}&pruningNumber=${this.state.listTrusss.pruningNumber}&fruitLoad=${this.state.listTrusss.fruitLoad}&fruitDiameter=${this.state.listTrusss.fruitDiameter}&pruningFlower=${this.state.listTrusss.pruneFlowering}&floweringTruss=${this.state.listTrusss.floweringTrussss}&pruningSet=${this.state.listTrusss.prunSetting}&settingTruss=${this.state.listTrusss.settingTrussNumber}&pruningHarvest=${this.state.listTrusss.pruningHar}&harvestTruss=${this.state.listTrusss.harvestTruss}`;

  console.log("URL : "+url1);
  fetch(url1, { mode: 'no-cors' }).then(
      () => { this.setState({ sent: true }); },
      () => { this.setState({ error: true }); }
  );
  BackgroundTask.finish()

})

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

      listPlants: {},
      listTrusss: {},



    };
  }



  async componentDidMount() {

    console.disableYellowBox = true;

    console.ignoredYellowBox = ['react-native BugReporting extraData:'];

    numberWeek = 2000 + currentWeekNumber(new Date()) - 1;
    console.log("Current Week Number From App: ", numberWeek);


    module.hot.accept(() => { });




    SplashScreen.hide();

    this.getPlantsByInfoStatus();
     const data = await this.performTimeConsumingTask();

     if (data !== null) {
       // alert('Moved to next Screen here');
 
     }
 
     this.getTrussByInfoStatus();

    BackgroundTask.schedule();

    this.checkStatus()


   

  }



  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    );
  }


  async checkStatus() {
    const status = await BackgroundTask.statusAsync()

    if (status.available) {
      console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
      return
    }

    const reason = status.unavailableReason
    if (reason === BackgroundTask.UNAVAILABLE_DENIED) {
      Alert.alert('Denied', 'Please enable background "Background App Refresh" for this app')
    } else if (reason === BackgroundTask.UNAVAILABLE_RESTRICTED) {
      Alert.alert('Restricted', 'Background tasks are restricted on your device')
    }
  }


  getPlantsByInfoStatus = () => {

    let plants = {};
    db.plantListByStatus(numberWeek).then((data) => {
      console.log("Calling database")
      listPlants = data;
      plants = data;
      console.log('details from App:', data)

      firebase.database().ref('croprego/').push(objify("PlantDetails", data)

      ).then((data) => {
        //success callback
        console.log('data ', data)
      }).catch((error) => {
        //error callback
        console.log('error ', error)
      })
      this.setState({
        listPlants,
      });

    }).catch((err) => {
      console.log(err);

    })


  }


  getTrussByInfoStatus = () => {

    let truss = {};
    db.listTrussByStatus(numberWeek).then((data) => {
      console.log("Calling database")
      listTrusss = data;

      truss = data;
      console.log('details from App:', data)

      firebase.database().ref('croprego/').push(objify("TrussDetails", data)

      ).then((data) => {
        //success callback
        console.log('data ', data)
      }).catch((error) => {
        //error callback
        console.log('error ', error)
      })

      this.setState({
        listTrusss,
      });

    }).catch((err) => {
      console.log(err);

    })


  }

  /*getPlants = () => {
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


     
      this.setState({
        truss,
      });

    }).catch((err) => {
      console.log(err);

    })
  }*/


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