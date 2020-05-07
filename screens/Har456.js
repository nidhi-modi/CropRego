import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Har456() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Har 456 Home Screen</Text>
    </View>
  )
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

export default Har456
