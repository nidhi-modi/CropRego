import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, BackHandler } from 'react-native'

export default class FavHome extends React.Component {

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
      <Text style={styles.text}>FAV Home Screen</Text>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

