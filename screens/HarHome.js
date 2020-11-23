import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, TouchableOpacity, ImageBackground, BackHandler, Alert, Image, Linking } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";






export default class HarHome extends React.Component {


  constructor(props) {
    super(props)




  }

  handleBackButton = () => {

    BackHandler.exitApp();

  }

  onButtonPress = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // then navigate
    navigate('NewScreen');
  }



  componentDidMount() {

  

    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  


  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    return (
      <View style={styles.container}>

        <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>


          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('Har123')}>
            <Text style={styles.buttonText}>HAR 123 Registration </Text>
          </TouchableOpacity>

             <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('Har456')}>
            <Text style={styles.buttonText}>HAR 456 Registration</Text>
          </TouchableOpacity>



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
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    //backgroundColor:'black'
  },

  buttonContainer1: {
    borderRadius: 5,
    padding: 10,
    margin: 20,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'

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
  buttonText: {
    fontSize: 19,
    color: '#000000',
    fontWeight: 'bold',

  },
  backgroundImage: {

    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
})

