import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { ListItem, Button } from 'react-native-elements';
import Database from '../screens/Database'


const db = new Database();




export default class GerHome extends Component {


  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      plants: [],
      notFound: 'Plant Details not found.'
    };

  }


  componentDidMount() {
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
    this.getPlants();
    });
  }

  getPlants = () => {

    this.setState({
      isLoading: true,
    });
    let plants = [];
    db.listPlants().then((data) => {
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

      onPress={() => {
        this.props.navigation.navigate('OhaHome', {
          plantId: `${item.plantId}`,
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
        <View>

          <Button
            title="Press me"
            color="#f194ff"
            onPress={this.getPlants}
          />
          <Text style={styles.message}>{this.state.notFound}</Text>
        </View>
      )

    }


    return (

      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.plants}
          renderItem={this.renderItem}
        />
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
    paddingBottom: 22
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

