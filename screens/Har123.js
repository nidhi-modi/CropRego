import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TouchableHighlight, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import AwesomeButton from 'react-native-really-awesome-button';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import AsyncStorage from '@react-native-community/async-storage';

var har1YeloPlant1 = '', har1YeloPlant2 = '', har1YeloPlant3 = '', har1YeloPlant4 = '', har1YeloPlant5 = ''
var num;
export default class Har123 extends Component {

  constructor(props) {
    super(props)

    this.state = {

      har1YeloPlant1: '',
      har1YeloPlant2: '',
      har1YeloPlant3: '',
      har1YeloPlant4: '',
      har1YeloPlant5: '',
    }



  }

  componentDidMount() {


    this.focusListener = this.props.navigation.addListener('focus', () => {

      this.callQuery()
    });

    num = 2244444444444445555555555511111111111115552; // any number between 0 & 99
    let result = ('0' + num).substr(-2);

    console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII : "+ result);


    //this.callQuery()
  }


  callQuery = () => {

    try {
      AsyncStorage.getItem('har1Yelo1').then((text1Value) => {
        this.setState({ har1YeloPlant1: JSON.parse(text1Value) });
        har1YeloPlant1 = JSON.parse(text1Value);
        console.log("HARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR " + this.state.har1YeloPlant1)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('har1Yelo2').then((text2Value) => {
        this.setState({ har1YeloPlant2: JSON.parse(text2Value) });
        har1YeloPlant2 = JSON.parse(text2Value)
        console.log("HARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR " + this.state.har1YeloPlant2)

      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('har1Yelo3').then((text3Value) => {
        this.setState({ har1YeloPlant3: JSON.parse(text3Value) });
        har1YeloPlant3 = JSON.parse(text3Value)
        console.log("HARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR " + text3Value)

      }).done();
    } catch (error) {
    }


    try {
      AsyncStorage.getItem('har1Yelo4').then((text4Value) => {
        this.setState({ har1YeloPlant4: JSON.parse(text4Value) });
        har1YeloPlant4 = JSON.parse(text4Value)
        console.log("HARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR " + text4Value)

      }).done();
    } catch (error) {
    }


    try {
      AsyncStorage.getItem('har1Yelo5').then((text5Value) => {
        this.setState({ har1YeloPlant5: JSON.parse(text5Value) });
        har1YeloPlant5 = JSON.parse(text5Value)
        console.log("HARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR " + text5Value)

      }).done();
    } catch (error) {
    }

  }


  render() {
    return (
      <View style={styles.container}>

        <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>

          <ScrollView>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Har1YeloRow')}>
              <Text style={styles.buttonText}>HAR 1 - Yelo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Har1AngelleRow')}>
              <Text style={styles.buttonText}>HAR 1 - Angelle</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Har1RedDelightRow')}>
              <Text style={styles.buttonText}>HAR 1 - Red Delight </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Har2AngelleRow')}>
              <Text style={styles.buttonText}>HAR 2 - Angelle </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Har3KmRow')}>
              <Text style={styles.buttonText}>HAR 3 - KM5512 </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Har3BambelloRow')}>
              <Text style={styles.buttonText}>HAR 3 - Bambello</Text>
            </TouchableOpacity>

          </ScrollView>

        </ImageBackground>

      </View>
    );
  }

}


const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#ebebeb'
  },


  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#54B948',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center'

  },

  buttonContainer: {
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    padding: 10,
    margin: 20,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'

  },

  buttonContainer1: {
    backgroundColor: 'rgba(44, 144, 61, 0.68)',
    borderRadius: 5,
    padding: 10,
    margin: 20,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'


  },
  buttonText: {
    fontSize: 19,
    color: '#000000',
    fontWeight: 'bold',

  },
  backgroundImage: {

    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  FloatingButtonStyle2: {

    resizeMode: 'contain',
    marginLeft: 15
  },
})

