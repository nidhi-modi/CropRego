import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TouchableHighlight, ScrollView, BackHandler, Alert } from 'react-native'
import AwesomeButton from 'react-native-really-awesome-button';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';


export default class RepHome extends React.Component {

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

          <ScrollView>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepMerliceRow')}>
              <Text style={styles.buttonText}>REP - Merlice</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepAngelleRow')}>
              <Text style={styles.buttonText}>REP - Angelle</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepDuelleRow')}>
              <Text style={styles.buttonText}>REP - Duelle</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepKMRow')}>
              <Text style={styles.buttonText}>REP - KM5512</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepBambelloRow')}>
              <Text style={styles.buttonText}>REP - Bambello</Text>
            </TouchableOpacity>


          </ScrollView>

        </ImageBackground>

      </View>
    )

  }
}


const styles = StyleSheet.create({

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
  container: {
    flex: 1,
    backgroundColor: '#ebebeb'
  },

  buttonContainer1: {
    backgroundColor: 'rgba(0,0,0,0.65)',
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
