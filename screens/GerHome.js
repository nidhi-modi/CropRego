import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TouchableHighlight, ScrollView, BackHandler, Alert, Image, ActivityIndicator } from 'react-native'
import AwesomeButton from 'react-native-really-awesome-button';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import Database from '../screens/Database'
//import { GoogleSpreadsheet } from "google-spreadsheet";



const db = new Database();
var currentWeekNumber = require('current-week-number');
var numberWeek;

// Config variables
const SHEET_ID = '1ASKC0hG-h4WG85cdEabn2Sy-NdeiIn_b0o4g5m68hD0';
const ACCESS_TOKEN = 'ya29.a0AfH6SMC8iPPOLzDmhHfjs_f7pzoFRSuoUf30cBPLwFv0ZLjTVPGgTqJYA2b4T8bpcSbzW_pxi4hpKQZ_Wwv1vl9E9Yl0GBrmffDMpQ5qQusFJ4uvRaipJjBSLw4YJ-oPQc5RVmBc671rIuvJUyZtLwwuVPAamIGDPemWjxdslkA';
//const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export default class GerHome extends React.Component {

  constructor(props) {
    super(props)

    this.state = {


      plants: [],
      truss: [],

      listPlants: {},
      listTrusss: {},

      filteredJob: {},
      sent: false,
      error: false,

      isLoading: false,





    };


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

    numberWeek = 2100 + currentWeekNumber(new Date()) - 1;
    console.log("Current Week Number From GER : ", numberWeek);



  }




  getPlants = () => {

    this.setState({ isLoading: true })
    let plants = {};
    db.plantListByStatus(numberWeek).then((data) => {
      console.log("Calling database")
      plants = data;
      console.log('GER Plants details from App:', data)


      this.setState({
        plants,
      });

      this.sendPlant1()



    }).catch((err) => {
      console.log(err);

      this.setState({ isLoading: false })


    })


  }

  getTruss = () => {


    this.setState({ isLoading: true })
    let truss = {};
    db.listTrussByStatus(numberWeek).then((data1) => {
      console.log("Calling database")

      truss = data1;

      console.log('GER Truss details from App:', data1)

      this.setState({
        truss,
      });

      this.sendPlant1Trusses();

    }).catch((err) => {
      console.log(err);

      this.setState({ isLoading: false })


    })


  }

  sendPlant1Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 45/46 PLANT 1 
    let G1FilterPlant1Truss1 = []
    let G1FilterPlant1Truss2 = []
    let G1FilterPlant1Truss3 = []
    let G1FilterPlant1Truss4 = []
    let G1FilterPlant1Truss5 = []
    let G1FilterPlant1Truss6 = []
    let G1FilterPlant1Truss7 = []
    let G1FilterPlant1Truss8 = []
    let G1FilterPlant1Truss9 = []
    let G1FilterPlant1Truss0 = []
    //END


    if (this.state.truss && this.state.truss.length) {

      this.setState({ isLoading: true })


      //GER 1 Merlice/ Plant 1/ Truss Number 1-10

      G1FilterPlant1Truss1 = this.state.truss.filter(sampleItemTruss => {

        return (

          sampleItemTruss.plantName === 'GER 1 - Merlice' &&
          sampleItemTruss.plantRow === '45/46' &&
          sampleItemTruss.plantNumber === '1' &&
          sampleItemTruss.trussNumber === 1

        )
      });


      G1FilterPlant1Truss2 = this.state.truss.filter(sampleItemTruss => {

        return (

          sampleItemTruss.plantName === 'GER 1 - Merlice' &&
          sampleItemTruss.plantRow === '45/46' &&
          sampleItemTruss.plantNumber === '1' &&
          sampleItemTruss.trussNumber === 2

        )
      });

      G1FilterPlant1Truss3 = this.state.truss.filter(sampleItemTruss => {

        return (

          sampleItemTruss.plantName === 'GER 1 - Merlice' &&
          sampleItemTruss.plantRow === '45/46' &&
          sampleItemTruss.plantNumber === '1' &&
          sampleItemTruss.trussNumber === 3

        )
      });

      G1FilterPlant1Truss4 = this.state.truss.filter(sampleItemTruss => {

        return (

          sampleItemTruss.plantName === 'GER 1 - Merlice' &&
          sampleItemTruss.plantRow === '45/46' &&
          sampleItemTruss.plantNumber === '1' &&
          sampleItemTruss.trussNumber === 4

        )
      });

      G1FilterPlant1Truss5 = this.state.truss.filter(sampleItemTruss => {

        return (

          sampleItemTruss.plantName === 'GER 1 - Merlice' &&
          sampleItemTruss.plantRow === '45/46' &&
          sampleItemTruss.plantNumber === '1' &&
          sampleItemTruss.trussNumber === 5

        )
      });

      G1FilterPlant1Truss6 = this.state.truss.filter(sampleItemTruss => {

        return (

          sampleItemTruss.plantName === 'GER 1 - Merlice' &&
          sampleItemTruss.plantRow === '45/46' &&
          sampleItemTruss.plantNumber === '1' &&
          sampleItemTruss.trussNumber === 6

        )
      });

      G1FilterPlant1Truss7 = this.state.truss.filter(sampleItemTruss => {

        return (

          sampleItemTruss.plantName === 'GER 1 - Merlice' &&
          sampleItemTruss.plantRow === '45/46' &&
          sampleItemTruss.plantNumber === '1' &&
          sampleItemTruss.trussNumber === 7

        )
      });

      G1FilterPlant1Truss8 = this.state.truss.filter(sampleItemTruss => {

        return (

          sampleItemTruss.plantName === 'GER 1 - Merlice' &&
          sampleItemTruss.plantRow === '45/46' &&
          sampleItemTruss.plantNumber === '1' &&
          sampleItemTruss.trussNumber === 8

        )
      });

      G1FilterPlant1Truss9 = this.state.truss.filter(sampleItemTruss => {

        return (

          sampleItemTruss.plantName === 'GER 1 - Merlice' &&
          sampleItemTruss.plantRow === '45/46' &&
          sampleItemTruss.plantNumber === '1' &&
          sampleItemTruss.trussNumber === 9

        )
      });

      G1FilterPlant1Truss0 = this.state.truss.filter(sampleItemTruss => {

        return (

          sampleItemTruss.plantName === 'GER 1 - Merlice' &&
          sampleItemTruss.plantRow === '45/46' &&
          sampleItemTruss.plantNumber === '1' &&
          sampleItemTruss.trussNumber === 10

        )
      });



      const scriptUrl20 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
      const url20 = `${scriptUrl20}?
  callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant1Truss1[0].plantNumber}&trussNumber=${G1FilterPlant1Truss1[0].trussNumber}&setFruits=${G1FilterPlant1Truss1[0].setFruits}&setFlowers=${G1FilterPlant1Truss1[0].setFlowers}&pruningNumber=${G1FilterPlant1Truss1[0].pruningNumber}&fruitLoad=${G1FilterPlant1Truss1[0].fruitLoad}&fruitDiameter=${G1FilterPlant1Truss1[0].fruitDiameter}&pruningFlower=${G1FilterPlant1Truss1[0].pruneFlowering}&floweringTruss=${G1FilterPlant1Truss1[0].floweringTrussss}&pruningSet=${G1FilterPlant1Truss1[0].prunSetting}&settingTruss=${G1FilterPlant1Truss1[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant1Truss1[0].pruningHar}&harvestTruss=${G1FilterPlant1Truss1[0].harvestTruss}`;

      console.log("URL : " + url20);
      fetch(url20, { mode: 'no-cors' }).then((response) => {

        if (response.status === 200) {

          if (G1FilterPlant1Truss2.length) {


            const scriptUrl21 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
            const url21 = `${scriptUrl21}?
  callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant1Truss2[0].plantNumber}&trussNumber=${G1FilterPlant1Truss2[0].trussNumber}&setFruits=${G1FilterPlant1Truss2[0].setFruits}&setFlowers=${G1FilterPlant1Truss2[0].setFlowers}&pruningNumber=${G1FilterPlant1Truss2[0].pruningNumber}&fruitLoad=${G1FilterPlant1Truss2[0].fruitLoad}&fruitDiameter=${G1FilterPlant1Truss2[0].fruitDiameter}&pruningFlower=${G1FilterPlant1Truss2[0].pruneFlowering}&floweringTruss=${G1FilterPlant1Truss2[0].floweringTrussss}&pruningSet=${G1FilterPlant1Truss2[0].prunSetting}&settingTruss=${G1FilterPlant1Truss2[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant1Truss2[0].pruningHar}&harvestTruss=${G1FilterPlant1Truss2[0].harvestTruss}`;

            console.log("URL : " + url21);
            fetch(url21, { mode: 'no-cors' }).then((response) => {

              if (response.status === 200) {

                if (G1FilterPlant1Truss3.length) {

                  const scriptUrl22 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                  const url22 = `${scriptUrl22}?
  callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant1Truss3[0].plantNumber}&trussNumber=${G1FilterPlant1Truss3[0].trussNumber}&setFruits=${G1FilterPlant1Truss3[0].setFruits}&setFlowers=${G1FilterPlant1Truss3[0].setFlowers}&pruningNumber=${G1FilterPlant1Truss3[0].pruningNumber}&fruitLoad=${G1FilterPlant1Truss3[0].fruitLoad}&fruitDiameter=${G1FilterPlant1Truss3[0].fruitDiameter}&pruningFlower=${G1FilterPlant1Truss3[0].pruneFlowering}&floweringTruss=${G1FilterPlant1Truss3[0].floweringTrussss}&pruningSet=${G1FilterPlant1Truss3[0].prunSetting}&settingTruss=${G1FilterPlant1Truss3[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant1Truss3[0].pruningHar}&harvestTruss=${G1FilterPlant1Truss3[0].harvestTruss}`;

                  console.log("URL : " + url22);
                  fetch(url22, { mode: 'no-cors' }).then((response) => {

                    if (response.status === 200) {

                      if (G1FilterPlant1Truss4.length) {

                        const scriptUrl23 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                        const url23 = `${scriptUrl23}?
  callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant1Truss4[0].plantNumber}&trussNumber=${G1FilterPlant1Truss4[0].trussNumber}&setFruits=${G1FilterPlant1Truss4[0].setFruits}&setFlowers=${G1FilterPlant1Truss4[0].setFlowers}&pruningNumber=${G1FilterPlant1Truss4[0].pruningNumber}&fruitLoad=${G1FilterPlant1Truss4[0].fruitLoad}&fruitDiameter=${G1FilterPlant1Truss4[0].fruitDiameter}&pruningFlower=${G1FilterPlant1Truss4[0].pruneFlowering}&floweringTruss=${G1FilterPlant1Truss4[0].floweringTrussss}&pruningSet=${G1FilterPlant1Truss4[0].prunSetting}&settingTruss=${G1FilterPlant1Truss4[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant1Truss4[0].pruningHar}&harvestTruss=${G1FilterPlant1Truss4[0].harvestTruss}`;

                        console.log("URL : " + url23);

                        fetch(url23, { mode: 'no-cors' }).then((response) => {

                          if (response.status === 200) {

                            if (G1FilterPlant1Truss5.length) {

                              const scriptUrl24 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                              const url24 = `${scriptUrl24}?
  callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant1Truss5[0].plantNumber}&trussNumber=${G1FilterPlant1Truss5[0].trussNumber}&setFruits=${G1FilterPlant1Truss5[0].setFruits}&setFlowers=${G1FilterPlant1Truss5[0].setFlowers}&pruningNumber=${G1FilterPlant1Truss5[0].pruningNumber}&fruitLoad=${G1FilterPlant1Truss5[0].fruitLoad}&fruitDiameter=${G1FilterPlant1Truss5[0].fruitDiameter}&pruningFlower=${G1FilterPlant1Truss5[0].pruneFlowering}&floweringTruss=${G1FilterPlant1Truss5[0].floweringTrussss}&pruningSet=${G1FilterPlant1Truss5[0].prunSetting}&settingTruss=${G1FilterPlant1Truss5[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant1Truss5[0].pruningHar}&harvestTruss=${G1FilterPlant1Truss5[0].harvestTruss}`;

                              console.log("URL : " + url24);

                              fetch(url24, { mode: 'no-cors' }).then((response) => {

                                if (response.status === 200) {

                                  if (G1FilterPlant1Truss6.length !== 0) {


                                    const scriptUrl25 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                    const url25 = `${scriptUrl25}?
  callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant1Truss6[0].plantNumber}&trussNumber=${G1FilterPlant1Truss6[0].trussNumber}&setFruits=${G1FilterPlant1Truss6[0].setFruits}&setFlowers=${G1FilterPlant1Truss6[0].setFlowers}&pruningNumber=${G1FilterPlant1Truss6[0].pruningNumber}&fruitLoad=${G1FilterPlant1Truss6[0].fruitLoad}&fruitDiameter=${G1FilterPlant1Truss6[0].fruitDiameter}&pruningFlower=${G1FilterPlant1Truss6[0].pruneFlowering}&floweringTruss=${G1FilterPlant1Truss6[0].floweringTrussss}&pruningSet=${G1FilterPlant1Truss6[0].prunSetting}&settingTruss=${G1FilterPlant1Truss6[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant1Truss6[0].pruningHar}&harvestTruss=${G1FilterPlant1Truss6[0].harvestTruss}`;

                                    console.log("URL : " + url25);

                                    fetch(url25, { mode: 'no-cors' }).then((response) => {

                                      if (response.status === 200) {

                                        if (G1FilterPlant1Truss7.length) {

                                          const scriptUrl26 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                          const url26 = `${scriptUrl26}?
  callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant1Truss7[0].plantNumber}&trussNumber=${G1FilterPlant1Truss7[0].trussNumber}&setFruits=${G1FilterPlant1Truss7[0].setFruits}&setFlowers=${G1FilterPlant1Truss7[0].setFlowers}&pruningNumber=${G1FilterPlant1Truss7[0].pruningNumber}&fruitLoad=${G1FilterPlant1Truss7[0].fruitLoad}&fruitDiameter=${G1FilterPlant1Truss7[0].fruitDiameter}&pruningFlower=${G1FilterPlant1Truss7[0].pruneFlowering}&floweringTruss=${G1FilterPlant1Truss7[0].floweringTrussss}&pruningSet=${G1FilterPlant1Truss7[0].prunSetting}&settingTruss=${G1FilterPlant1Truss7[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant1Truss7[0].pruningHar}&harvestTruss=${G1FilterPlant1Truss7[0].harvestTruss}`;

                                          console.log("URL : " + url26);

                                          fetch(url26, { mode: 'no-cors' }).then((response) => {

                                            if (response.status === 200) {

                                              if (G1FilterPlant1Truss8.length) {

                                                const scriptUrl27 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                const url27 = `${scriptUrl27}?
  callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant1Truss8[0].plantNumber}&trussNumber=${G1FilterPlant1Truss8[0].trussNumber}&setFruits=${G1FilterPlant1Truss8[0].setFruits}&setFlowers=${G1FilterPlant1Truss8[0].setFlowers}&pruningNumber=${G1FilterPlant1Truss8[0].pruningNumber}&fruitLoad=${G1FilterPlant1Truss8[0].fruitLoad}&fruitDiameter=${G1FilterPlant1Truss8[0].fruitDiameter}&pruningFlower=${G1FilterPlant1Truss8[0].pruneFlowering}&floweringTruss=${G1FilterPlant1Truss8[0].floweringTrussss}&pruningSet=${G1FilterPlant1Truss8[0].prunSetting}&settingTruss=${G1FilterPlant1Truss8[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant1Truss8[0].pruningHar}&harvestTruss=${G1FilterPlant1Truss8[0].harvestTruss}`;

                                                console.log("URL : " + url27);

                                                fetch(url27, { mode: 'no-cors' }).then((response) => {

                                                  if (response.status === 200) {

                                                    if (G1FilterPlant1Truss9.length) {

                                                      const scriptUrl28 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                      const url28 = `${scriptUrl28}?
  callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant1Truss9[0].plantNumber}&trussNumber=${G1FilterPlant1Truss9[0].trussNumber}&setFruits=${G1FilterPlant1Truss9[0].setFruits}&setFlowers=${G1FilterPlant1Truss9[0].setFlowers}&pruningNumber=${G1FilterPlant1Truss9[0].pruningNumber}&fruitLoad=${G1FilterPlant1Truss9[0].fruitLoad}&fruitDiameter=${G1FilterPlant1Truss9[0].fruitDiameter}&pruningFlower=${G1FilterPlant1Truss9[0].pruneFlowering}&floweringTruss=${G1FilterPlant1Truss9[0].floweringTrussss}&pruningSet=${G1FilterPlant1Truss9[0].prunSetting}&settingTruss=${G1FilterPlant1Truss9[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant1Truss9[0].pruningHar}&harvestTruss=${G1FilterPlant1Truss9[0].harvestTruss}`;

                                                      console.log("URL : " + url28);

                                                      fetch(url28, { mode: 'no-cors' }).then((response) => {

                                                        if (response.status === 200) {

                                                          if (G1FilterPlant1Truss0.length) {

                                                            const scriptUrl29 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                            const url29 = `${scriptUrl29}?
                                                              callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant1Truss0[0].plantNumber}&trussNumber=${G1FilterPlant1Truss0[0].trussNumber}&setFruits=${G1FilterPlant1Truss0[0].setFruits}&setFlowers=${G1FilterPlant1Truss0[0].setFlowers}&pruningNumber=${G1FilterPlant1Truss0[0].pruningNumber}&fruitLoad=${G1FilterPlant1Truss0[0].fruitLoad}&fruitDiameter=${G1FilterPlant1Truss0[0].fruitDiameter}&pruningFlower=${G1FilterPlant1Truss0[0].pruneFlowering}&floweringTruss=${G1FilterPlant1Truss0[0].floweringTrussss}&pruningSet=${G1FilterPlant1Truss0[0].prunSetting}&settingTruss=${G1FilterPlant1Truss0[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant1Truss0[0].pruningHar}&harvestTruss=${G1FilterPlant1Truss0[0].harvestTruss}`;

                                                            console.log("URL : " + url29);

                                                            fetch(url29, { mode: 'no-cors' }).then((response) => {

                                                              if (response.status === 200) {

                                                                this.sendPlant2Trusses()

                                                              } else {

                                                                this.setState({ isLoading: false })
                                                                this.sendPlant2Trusses()

                                                              }




                                                            });

                                                          } else {
                                                            this.setState({ isLoading: false })
                                                            this.sendPlant2Trusses()

                                                          }

                                                        } else {

                                                          this.setState({ isLoading: false })
                                                          this.sendPlant2Trusses()

                                                        }




                                                      });

                                                    } else {
                                                      this.setState({ isLoading: false })
                                                      this.sendPlant2Trusses()

                                                    }

                                                  } else {

                                                    this.setState({ isLoading: false })
                                                    this.sendPlant2Trusses()

                                                  }




                                                });

                                              } else {
                                                this.setState({ isLoading: false })
                                                this.sendPlant2Trusses()

                                              }

                                            } else {

                                              this.setState({ isLoading: false })
                                              this.sendPlant2Trusses()

                                            }




                                          });

                                        } else {
                                          this.setState({ isLoading: false })
                                          this.sendPlant2Trusses()

                                        }

                                      } else {

                                        this.setState({ isLoading: false })
                                        this.sendPlant2Trusses()

                                      }




                                    });

                                  } else {
                                    this.setState({ isLoading: false })
                                    this.sendPlant2Trusses()

                                  }

                                } else {

                                  this.setState({ isLoading: false })
                                  this.sendPlant2Trusses()

                                }




                              });

                            } else {
                              this.setState({ isLoading: false })
                              this.sendPlant2Trusses()

                            }

                          } else {

                            this.setState({ isLoading: false })
                            this.sendPlant2Trusses()

                          }




                        });

                      } else {
                        this.setState({ isLoading: false })
                        this.sendPlant2Trusses()

                      }

                    } else {

                      this.setState({ isLoading: false })
                      this.sendPlant2Trusses()

                    }




                  });

                } else {
                  this.setState({ isLoading: false })
                  this.sendPlant2Trusses()

                }

              } else {

                this.setState({ isLoading: false })
                this.sendPlant2Trusses()

              }




            });

          } else {
            this.setState({ isLoading: false })
            this.sendPlant2Trusses()

          }

        } else {

          this.setState({ isLoading: false })
          this.sendPlant2Trusses()
        }




      });

    } else {
      this.setState({ isLoading: false })
      this.sendPlant2Trusses()

    }


  }

  sendPlant2Trusses = () => {

    this.setState({ isLoading: true })


    //INITIALIZATION G1 MERLICE ROW 45/46 PLANT 2 
    let G1FilterPlant2Truss1 = []
    let G1FilterPlant2Truss2 = []
    let G1FilterPlant2Truss3 = []
    let G1FilterPlant2Truss4 = []
    let G1FilterPlant2Truss5 = []
    let G1FilterPlant2Truss6 = []
    let G1FilterPlant2Truss7 = []
    let G1FilterPlant2Truss8 = []
    let G1FilterPlant2Truss9 = []
    let G1FilterPlant2Truss0 = []
    //END

    console.log("IN PLANT 2 TRUSSES METHOD");

    //GER 1 Merlice/ Plant 2/ Truss Number 1-10

    G1FilterPlant2Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1FilterPlant2Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1FilterPlant2Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1FilterPlant2Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1FilterPlant2Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1FilterPlant2Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1FilterPlant2Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1FilterPlant2Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1FilterPlant2Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1FilterPlant2Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl30 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url30 = `${scriptUrl30}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant2Truss1[0].plantNumber}&trussNumber=${G1FilterPlant2Truss1[0].trussNumber}&setFruits=${G1FilterPlant2Truss1[0].setFruits}&setFlowers=${G1FilterPlant2Truss1[0].setFlowers}&pruningNumber=${G1FilterPlant2Truss1[0].pruningNumber}&fruitLoad=${G1FilterPlant2Truss1[0].fruitLoad}&fruitDiameter=${G1FilterPlant2Truss1[0].fruitDiameter}&pruningFlower=${G1FilterPlant2Truss1[0].pruneFlowering}&floweringTruss=${G1FilterPlant2Truss1[0].floweringTrussss}&pruningSet=${G1FilterPlant2Truss1[0].prunSetting}&settingTruss=${G1FilterPlant2Truss1[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant2Truss1[0].pruningHar}&harvestTruss=${G1FilterPlant2Truss1[0].harvestTruss}`;

    console.log("URL : " + url30);

    fetch(url30, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1FilterPlant2Truss2.length) {


          const scriptUrl31 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url31 = `${scriptUrl31}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant2Truss2[0].plantNumber}&trussNumber=${G1FilterPlant2Truss2[0].trussNumber}&setFruits=${G1FilterPlant2Truss2[0].setFruits}&setFlowers=${G1FilterPlant2Truss2[0].setFlowers}&pruningNumber=${G1FilterPlant2Truss2[0].pruningNumber}&fruitLoad=${G1FilterPlant2Truss2[0].fruitLoad}&fruitDiameter=${G1FilterPlant2Truss2[0].fruitDiameter}&pruningFlower=${G1FilterPlant2Truss2[0].pruneFlowering}&floweringTruss=${G1FilterPlant2Truss2[0].floweringTrussss}&pruningSet=${G1FilterPlant2Truss2[0].prunSetting}&settingTruss=${G1FilterPlant2Truss2[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant2Truss2[0].pruningHar}&harvestTruss=${G1FilterPlant2Truss2[0].harvestTruss}`;

          console.log("URL : " + url31);

          fetch(url31, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1FilterPlant2Truss3.length) {


                const scriptUrl32i = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url32i = `${scriptUrl32i}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant2Truss3[0].plantNumber}&trussNumber=${G1FilterPlant2Truss3[0].trussNumber}&setFruits=${G1FilterPlant2Truss3[0].setFruits}&setFlowers=${G1FilterPlant2Truss3[0].setFlowers}&pruningNumber=${G1FilterPlant2Truss3[0].pruningNumber}&fruitLoad=${G1FilterPlant2Truss3[0].fruitLoad}&fruitDiameter=${G1FilterPlant2Truss3[0].fruitDiameter}&pruningFlower=${G1FilterPlant2Truss3[0].pruneFlowering}&floweringTruss=${G1FilterPlant2Truss3[0].floweringTrussss}&pruningSet=${G1FilterPlant2Truss3[0].prunSetting}&settingTruss=${G1FilterPlant2Truss3[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant2Truss3[0].pruningHar}&harvestTruss=${G1FilterPlant2Truss3[0].harvestTruss}`;

                console.log("URL : " + url32i);

                fetch(url32i, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1FilterPlant2Truss4.length) {


                      const scriptUrl32 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url32 = `${scriptUrl32}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant2Truss4[0].plantNumber}&trussNumber=${G1FilterPlant2Truss4[0].trussNumber}&setFruits=${G1FilterPlant2Truss4[0].setFruits}&setFlowers=${G1FilterPlant2Truss4[0].setFlowers}&pruningNumber=${G1FilterPlant2Truss4[0].pruningNumber}&fruitLoad=${G1FilterPlant2Truss4[0].fruitLoad}&fruitDiameter=${G1FilterPlant2Truss4[0].fruitDiameter}&pruningFlower=${G1FilterPlant2Truss4[0].pruneFlowering}&floweringTruss=${G1FilterPlant2Truss4[0].floweringTrussss}&pruningSet=${G1FilterPlant2Truss4[0].prunSetting}&settingTruss=${G1FilterPlant2Truss4[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant2Truss4[0].pruningHar}&harvestTruss=${G1FilterPlant2Truss4[0].harvestTruss}`;

                      console.log("URL : " + url32);

                      fetch(url32, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1FilterPlant2Truss5.length) {


                            const scriptUrl33 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url33 = `${scriptUrl33}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant2Truss5[0].plantNumber}&trussNumber=${G1FilterPlant2Truss5[0].trussNumber}&setFruits=${G1FilterPlant2Truss5[0].setFruits}&setFlowers=${G1FilterPlant2Truss5[0].setFlowers}&pruningNumber=${G1FilterPlant2Truss5[0].pruningNumber}&fruitLoad=${G1FilterPlant2Truss5[0].fruitLoad}&fruitDiameter=${G1FilterPlant2Truss5[0].fruitDiameter}&pruningFlower=${G1FilterPlant2Truss5[0].pruneFlowering}&floweringTruss=${G1FilterPlant2Truss5[0].floweringTrussss}&pruningSet=${G1FilterPlant2Truss5[0].prunSetting}&settingTruss=${G1FilterPlant2Truss5[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant2Truss5[0].pruningHar}&harvestTruss=${G1FilterPlant2Truss5[0].harvestTruss}`;

                            console.log("URL : " + url33);

                            fetch(url33, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1FilterPlant2Truss6.length) {


                                  const scriptUrl34 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url34 = `${scriptUrl34}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant2Truss6[0].plantNumber}&trussNumber=${G1FilterPlant2Truss6[0].trussNumber}&setFruits=${G1FilterPlant2Truss6[0].setFruits}&setFlowers=${G1FilterPlant2Truss6[0].setFlowers}&pruningNumber=${G1FilterPlant2Truss6[0].pruningNumber}&fruitLoad=${G1FilterPlant2Truss6[0].fruitLoad}&fruitDiameter=${G1FilterPlant2Truss6[0].fruitDiameter}&pruningFlower=${G1FilterPlant2Truss6[0].pruneFlowering}&floweringTruss=${G1FilterPlant2Truss6[0].floweringTrussss}&pruningSet=${G1FilterPlant2Truss6[0].prunSetting}&settingTruss=${G1FilterPlant2Truss6[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant2Truss6[0].pruningHar}&harvestTruss=${G1FilterPlant2Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url34);

                                  fetch(url34, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1FilterPlant2Truss7.length) {


                                        const scriptUrl35 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url35 = `${scriptUrl35}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant2Truss7[0].plantNumber}&trussNumber=${G1FilterPlant2Truss7[0].trussNumber}&setFruits=${G1FilterPlant2Truss7[0].setFruits}&setFlowers=${G1FilterPlant2Truss7[0].setFlowers}&pruningNumber=${G1FilterPlant2Truss7[0].pruningNumber}&fruitLoad=${G1FilterPlant2Truss7[0].fruitLoad}&fruitDiameter=${G1FilterPlant2Truss7[0].fruitDiameter}&pruningFlower=${G1FilterPlant2Truss7[0].pruneFlowering}&floweringTruss=${G1FilterPlant2Truss7[0].floweringTrussss}&pruningSet=${G1FilterPlant2Truss7[0].prunSetting}&settingTruss=${G1FilterPlant2Truss7[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant2Truss7[0].pruningHar}&harvestTruss=${G1FilterPlant2Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url35);

                                        fetch(url35, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1FilterPlant2Truss8.length) {


                                              const scriptUrl36 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url36 = `${scriptUrl36}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant2Truss8[0].plantNumber}&trussNumber=${G1FilterPlant2Truss8[0].trussNumber}&setFruits=${G1FilterPlant2Truss8[0].setFruits}&setFlowers=${G1FilterPlant2Truss8[0].setFlowers}&pruningNumber=${G1FilterPlant2Truss8[0].pruningNumber}&fruitLoad=${G1FilterPlant2Truss8[0].fruitLoad}&fruitDiameter=${G1FilterPlant2Truss8[0].fruitDiameter}&pruningFlower=${G1FilterPlant2Truss8[0].pruneFlowering}&floweringTruss=${G1FilterPlant2Truss8[0].floweringTrussss}&pruningSet=${G1FilterPlant2Truss8[0].prunSetting}&settingTruss=${G1FilterPlant2Truss8[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant2Truss8[0].pruningHar}&harvestTruss=${G1FilterPlant2Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url36);

                                              fetch(url36, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1FilterPlant2Truss9.length) {


                                                    const scriptUrl37 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url37 = `${scriptUrl37}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant2Truss9[0].plantNumber}&trussNumber=${G1FilterPlant2Truss9[0].trussNumber}&setFruits=${G1FilterPlant2Truss9[0].setFruits}&setFlowers=${G1FilterPlant2Truss9[0].setFlowers}&pruningNumber=${G1FilterPlant2Truss9[0].pruningNumber}&fruitLoad=${G1FilterPlant2Truss9[0].fruitLoad}&fruitDiameter=${G1FilterPlant2Truss9[0].fruitDiameter}&pruningFlower=${G1FilterPlant2Truss9[0].pruneFlowering}&floweringTruss=${G1FilterPlant2Truss9[0].floweringTrussss}&pruningSet=${G1FilterPlant2Truss9[0].prunSetting}&settingTruss=${G1FilterPlant2Truss9[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant2Truss9[0].pruningHar}&harvestTruss=${G1FilterPlant2Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url37);

                                                    fetch(url37, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1FilterPlant2Truss0.length) {


                                                          const scriptUrl38 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url38 = `${scriptUrl38}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant2Truss0[0].plantNumber}&trussNumber=${G1FilterPlant2Truss0[0].trussNumber}&setFruits=${G1FilterPlant2Truss0[0].setFruits}&setFlowers=${G1FilterPlant2Truss0[0].setFlowers}&pruningNumber=${G1FilterPlant2Truss0[0].pruningNumber}&fruitLoad=${G1FilterPlant2Truss0[0].fruitLoad}&fruitDiameter=${G1FilterPlant2Truss0[0].fruitDiameter}&pruningFlower=${G1FilterPlant2Truss0[0].pruneFlowering}&floweringTruss=${G1FilterPlant2Truss0[0].floweringTrussss}&pruningSet=${G1FilterPlant2Truss0[0].prunSetting}&settingTruss=${G1FilterPlant2Truss0[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant2Truss0[0].pruningHar}&harvestTruss=${G1FilterPlant2Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url38);

                                                          fetch(url38, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendPlant3Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendPlant3Trusses()

                                                            }




                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendPlant3Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendPlant3Trusses()
                                                      }




                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendPlant3Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendPlant3Trusses()
                                                }




                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendPlant3Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendPlant3Trusses()
                                          }




                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendPlant3Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendPlant3Trusses()
                                    }




                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendPlant3Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendPlant3Trusses()
                              }




                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendPlant3Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendPlant3Trusses()
                        }




                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendPlant3Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendPlant3Trusses()
                  }




                });

              } else {
                this.setState({ isLoading: false })
                this.sendPlant3Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendPlant3Trusses()
            }




          });

        } else {
          this.setState({ isLoading: false })
          this.sendPlant3Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendPlant3Trusses()
      }




    });





  }

  sendPlant3Trusses = () => {


    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 45/46 PLANT 3 
    let G1FilterPlant3Truss1 = []
    let G1FilterPlant3Truss2 = []
    let G1FilterPlant3Truss3 = []
    let G1FilterPlant3Truss4 = []
    let G1FilterPlant3Truss5 = []
    let G1FilterPlant3Truss6 = []
    let G1FilterPlant3Truss7 = []
    let G1FilterPlant3Truss8 = []
    let G1FilterPlant3Truss9 = []
    let G1FilterPlant3Truss0 = []
    //END

    //GER 1 Merlice/ Plant 3/ Truss Number 1-10

    G1FilterPlant3Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1FilterPlant3Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1FilterPlant3Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1FilterPlant3Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1FilterPlant3Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1FilterPlant3Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1FilterPlant3Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1FilterPlant3Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1FilterPlant3Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1FilterPlant3Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END


    const scriptUrl59 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url59 = `${scriptUrl59}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant3Truss1[0].plantNumber}&trussNumber=${G1FilterPlant3Truss1[0].trussNumber}&setFruits=${G1FilterPlant3Truss1[0].setFruits}&setFlowers=${G1FilterPlant3Truss1[0].setFlowers}&pruningNumber=${G1FilterPlant3Truss1[0].pruningNumber}&fruitLoad=${G1FilterPlant3Truss1[0].fruitLoad}&fruitDiameter=${G1FilterPlant3Truss1[0].fruitDiameter}&pruningFlower=${G1FilterPlant3Truss1[0].pruneFlowering}&floweringTruss=${G1FilterPlant3Truss1[0].floweringTrussss}&pruningSet=${G1FilterPlant3Truss1[0].prunSetting}&settingTruss=${G1FilterPlant3Truss1[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant3Truss1[0].pruningHar}&harvestTruss=${G1FilterPlant3Truss1[0].harvestTruss}`;

    console.log("URL : " + url59);

    fetch(url59, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1FilterPlant3Truss2.length) {


          const scriptUrl60 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url60 = `${scriptUrl60}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant3Truss2[0].plantNumber}&trussNumber=${G1FilterPlant3Truss2[0].trussNumber}&setFruits=${G1FilterPlant3Truss2[0].setFruits}&setFlowers=${G1FilterPlant3Truss2[0].setFlowers}&pruningNumber=${G1FilterPlant3Truss2[0].pruningNumber}&fruitLoad=${G1FilterPlant3Truss2[0].fruitLoad}&fruitDiameter=${G1FilterPlant3Truss2[0].fruitDiameter}&pruningFlower=${G1FilterPlant3Truss2[0].pruneFlowering}&floweringTruss=${G1FilterPlant3Truss2[0].floweringTrussss}&pruningSet=${G1FilterPlant3Truss2[0].prunSetting}&settingTruss=${G1FilterPlant3Truss2[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant3Truss2[0].pruningHar}&harvestTruss=${G1FilterPlant3Truss2[0].harvestTruss}`;

          console.log("URL : " + url60);

          fetch(url60, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1FilterPlant3Truss3.length) {

                const scriptUrl61 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url61 = `${scriptUrl61}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant3Truss3[0].plantNumber}&trussNumber=${G1FilterPlant3Truss3[0].trussNumber}&setFruits=${G1FilterPlant3Truss3[0].setFruits}&setFlowers=${G1FilterPlant3Truss3[0].setFlowers}&pruningNumber=${G1FilterPlant3Truss3[0].pruningNumber}&fruitLoad=${G1FilterPlant3Truss3[0].fruitLoad}&fruitDiameter=${G1FilterPlant3Truss3[0].fruitDiameter}&pruningFlower=${G1FilterPlant3Truss3[0].pruneFlowering}&floweringTruss=${G1FilterPlant3Truss3[0].floweringTrussss}&pruningSet=${G1FilterPlant3Truss3[0].prunSetting}&settingTruss=${G1FilterPlant3Truss3[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant3Truss3[0].pruningHar}&harvestTruss=${G1FilterPlant3Truss3[0].harvestTruss}`;

                console.log("URL : " + url61);

                fetch(url61, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1FilterPlant3Truss4.length) {

                      const scriptUrl62 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url62 = `${scriptUrl62}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant3Truss4[0].plantNumber}&trussNumber=${G1FilterPlant3Truss4[0].trussNumber}&setFruits=${G1FilterPlant3Truss4[0].setFruits}&setFlowers=${G1FilterPlant3Truss4[0].setFlowers}&pruningNumber=${G1FilterPlant3Truss4[0].pruningNumber}&fruitLoad=${G1FilterPlant3Truss4[0].fruitLoad}&fruitDiameter=${G1FilterPlant3Truss4[0].fruitDiameter}&pruningFlower=${G1FilterPlant3Truss4[0].pruneFlowering}&floweringTruss=${G1FilterPlant3Truss4[0].floweringTrussss}&pruningSet=${G1FilterPlant3Truss4[0].prunSetting}&settingTruss=${G1FilterPlant3Truss4[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant3Truss4[0].pruningHar}&harvestTruss=${G1FilterPlant3Truss4[0].harvestTruss}`;

                      console.log("URL : " + url62);

                      fetch(url62, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1FilterPlant3Truss5.length) {

                            const scriptUrl63 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url63 = `${scriptUrl63}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant3Truss5[0].plantNumber}&trussNumber=${G1FilterPlant3Truss5[0].trussNumber}&setFruits=${G1FilterPlant3Truss5[0].setFruits}&setFlowers=${G1FilterPlant3Truss5[0].setFlowers}&pruningNumber=${G1FilterPlant3Truss5[0].pruningNumber}&fruitLoad=${G1FilterPlant3Truss5[0].fruitLoad}&fruitDiameter=${G1FilterPlant3Truss5[0].fruitDiameter}&pruningFlower=${G1FilterPlant3Truss5[0].pruneFlowering}&floweringTruss=${G1FilterPlant3Truss5[0].floweringTrussss}&pruningSet=${G1FilterPlant3Truss5[0].prunSetting}&settingTruss=${G1FilterPlant3Truss5[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant3Truss5[0].pruningHar}&harvestTruss=${G1FilterPlant3Truss5[0].harvestTruss}`;

                            console.log("URL : " + url63);

                            fetch(url63, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1FilterPlant3Truss6.length) {


                                  const scriptUrl64 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url64 = `${scriptUrl64}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant3Truss6[0].plantNumber}&trussNumber=${G1FilterPlant3Truss6[0].trussNumber}&setFruits=${G1FilterPlant3Truss6[0].setFruits}&setFlowers=${G1FilterPlant3Truss6[0].setFlowers}&pruningNumber=${G1FilterPlant3Truss6[0].pruningNumber}&fruitLoad=${G1FilterPlant3Truss6[0].fruitLoad}&fruitDiameter=${G1FilterPlant3Truss6[0].fruitDiameter}&pruningFlower=${G1FilterPlant3Truss6[0].pruneFlowering}&floweringTruss=${G1FilterPlant3Truss6[0].floweringTrussss}&pruningSet=${G1FilterPlant3Truss6[0].prunSetting}&settingTruss=${G1FilterPlant3Truss6[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant3Truss6[0].pruningHar}&harvestTruss=${G1FilterPlant3Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url64);

                                  fetch(url64, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1FilterPlant3Truss7.length) {


                                        const scriptUrl65 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url65 = `${scriptUrl65}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant3Truss7[0].plantNumber}&trussNumber=${G1FilterPlant3Truss7[0].trussNumber}&setFruits=${G1FilterPlant3Truss7[0].setFruits}&setFlowers=${G1FilterPlant3Truss7[0].setFlowers}&pruningNumber=${G1FilterPlant3Truss7[0].pruningNumber}&fruitLoad=${G1FilterPlant3Truss7[0].fruitLoad}&fruitDiameter=${G1FilterPlant3Truss7[0].fruitDiameter}&pruningFlower=${G1FilterPlant3Truss7[0].pruneFlowering}&floweringTruss=${G1FilterPlant3Truss7[0].floweringTrussss}&pruningSet=${G1FilterPlant3Truss7[0].prunSetting}&settingTruss=${G1FilterPlant3Truss7[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant3Truss7[0].pruningHar}&harvestTruss=${G1FilterPlant3Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url65);

                                        fetch(url65, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1FilterPlant3Truss8.length) {


                                              const scriptUrl66 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url66 = `${scriptUrl66}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant3Truss8[0].plantNumber}&trussNumber=${G1FilterPlant3Truss8[0].trussNumber}&setFruits=${G1FilterPlant3Truss8[0].setFruits}&setFlowers=${G1FilterPlant3Truss8[0].setFlowers}&pruningNumber=${G1FilterPlant3Truss8[0].pruningNumber}&fruitLoad=${G1FilterPlant3Truss8[0].fruitLoad}&fruitDiameter=${G1FilterPlant3Truss8[0].fruitDiameter}&pruningFlower=${G1FilterPlant3Truss8[0].pruneFlowering}&floweringTruss=${G1FilterPlant3Truss8[0].floweringTrussss}&pruningSet=${G1FilterPlant3Truss8[0].prunSetting}&settingTruss=${G1FilterPlant3Truss8[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant3Truss8[0].pruningHar}&harvestTruss=${G1FilterPlant3Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url66);

                                              fetch(url66, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1FilterPlant3Truss9.length) {

                                                    const scriptUrl67 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url67 = `${scriptUrl67}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant3Truss9[0].plantNumber}&trussNumber=${G1FilterPlant3Truss9[0].trussNumber}&setFruits=${G1FilterPlant3Truss9[0].setFruits}&setFlowers=${G1FilterPlant3Truss9[0].setFlowers}&pruningNumber=${G1FilterPlant3Truss9[0].pruningNumber}&fruitLoad=${G1FilterPlant3Truss9[0].fruitLoad}&fruitDiameter=${G1FilterPlant3Truss9[0].fruitDiameter}&pruningFlower=${G1FilterPlant3Truss9[0].pruneFlowering}&floweringTruss=${G1FilterPlant3Truss9[0].floweringTrussss}&pruningSet=${G1FilterPlant3Truss9[0].prunSetting}&settingTruss=${G1FilterPlant3Truss9[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant3Truss9[0].pruningHar}&harvestTruss=${G1FilterPlant3Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url67);

                                                    fetch(url67, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1FilterPlant3Truss0.length) {

                                                          const scriptUrl68 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url68 = `${scriptUrl68}?
                                                                                                                                                                        callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant3Truss0[0].plantNumber}&trussNumber=${G1FilterPlant3Truss0[0].trussNumber}&setFruits=${G1FilterPlant3Truss0[0].setFruits}&setFlowers=${G1FilterPlant3Truss0[0].setFlowers}&pruningNumber=${G1FilterPlant3Truss0[0].pruningNumber}&fruitLoad=${G1FilterPlant3Truss0[0].fruitLoad}&fruitDiameter=${G1FilterPlant3Truss0[0].fruitDiameter}&pruningFlower=${G1FilterPlant3Truss0[0].pruneFlowering}&floweringTruss=${G1FilterPlant3Truss0[0].floweringTrussss}&pruningSet=${G1FilterPlant3Truss0[0].prunSetting}&settingTruss=${G1FilterPlant3Truss0[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant3Truss0[0].pruningHar}&harvestTruss=${G1FilterPlant3Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url68);

                                                          fetch(url68, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendPlant4Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendPlant4Trusses()

                                                            }




                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendPlant4Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendPlant4Trusses()
                                                      }




                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendPlant4Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendPlant4Trusses()
                                                }




                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendPlant4Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendPlant4Trusses()
                                          }




                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendPlant4Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendPlant4Trusses()
                                    }




                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendPlant4Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendPlant4Trusses()
                              }




                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendPlant4Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendPlant4Trusses()
                        }




                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendPlant4Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendPlant4Trusses()
                  }




                });

              } else {
                this.setState({ isLoading: false })
                this.sendPlant4Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendPlant4Trusses()
            }




          });

        } else {
          this.setState({ isLoading: false })
          this.sendPlant4Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendPlant4Trusses()
      }




    });

  }

  sendPlant4Trusses = () => {


    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 45/46 PLANT 4 
    let G1FilterPlant4Truss1 = []
    let G1FilterPlant4Truss2 = []
    let G1FilterPlant4Truss3 = []
    let G1FilterPlant4Truss4 = []
    let G1FilterPlant4Truss5 = []
    let G1FilterPlant4Truss6 = []
    let G1FilterPlant4Truss7 = []
    let G1FilterPlant4Truss8 = []
    let G1FilterPlant4Truss9 = []
    let G1FilterPlant4Truss0 = []
    //END

    //GER 1 Merlice/ Plant 4/ Truss Number 1-10

    G1FilterPlant4Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1FilterPlant4Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1FilterPlant4Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1FilterPlant4Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1FilterPlant4Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1FilterPlant4Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1FilterPlant4Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1FilterPlant4Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1FilterPlant4Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1FilterPlant4Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl69 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url69 = `${scriptUrl69}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant4Truss1[0].plantNumber}&trussNumber=${G1FilterPlant4Truss1[0].trussNumber}&setFruits=${G1FilterPlant4Truss1[0].setFruits}&setFlowers=${G1FilterPlant4Truss1[0].setFlowers}&pruningNumber=${G1FilterPlant4Truss1[0].pruningNumber}&fruitLoad=${G1FilterPlant4Truss1[0].fruitLoad}&fruitDiameter=${G1FilterPlant4Truss1[0].fruitDiameter}&pruningFlower=${G1FilterPlant4Truss1[0].pruneFlowering}&floweringTruss=${G1FilterPlant4Truss1[0].floweringTrussss}&pruningSet=${G1FilterPlant4Truss1[0].prunSetting}&settingTruss=${G1FilterPlant4Truss1[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant4Truss1[0].pruningHar}&harvestTruss=${G1FilterPlant4Truss2[0].harvestTruss}`;

    console.log("URL : " + url69);

    fetch(url69, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1FilterPlant4Truss2.length) {


          const scriptUrl70 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url70 = `${scriptUrl70}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant4Truss2[0].plantNumber}&trussNumber=${G1FilterPlant4Truss2[0].trussNumber}&setFruits=${G1FilterPlant4Truss2[0].setFruits}&setFlowers=${G1FilterPlant4Truss2[0].setFlowers}&pruningNumber=${G1FilterPlant4Truss2[0].pruningNumber}&fruitLoad=${G1FilterPlant4Truss2[0].fruitLoad}&fruitDiameter=${G1FilterPlant4Truss2[0].fruitDiameter}&pruningFlower=${G1FilterPlant4Truss2[0].pruneFlowering}&floweringTruss=${G1FilterPlant4Truss2[0].floweringTrussss}&pruningSet=${G1FilterPlant4Truss2[0].prunSetting}&settingTruss=${G1FilterPlant4Truss2[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant4Truss2[0].pruningHar}&harvestTruss=${G1FilterPlant4Truss2[0].harvestTruss}`;

          console.log("URL : " + url70);

          fetch(url70, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1FilterPlant4Truss3.length) {

                const scriptUrl71 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url71 = `${scriptUrl71}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant4Truss3[0].plantNumber}&trussNumber=${G1FilterPlant4Truss3[0].trussNumber}&setFruits=${G1FilterPlant4Truss3[0].setFruits}&setFlowers=${G1FilterPlant4Truss3[0].setFlowers}&pruningNumber=${G1FilterPlant4Truss3[0].pruningNumber}&fruitLoad=${G1FilterPlant4Truss3[0].fruitLoad}&fruitDiameter=${G1FilterPlant4Truss3[0].fruitDiameter}&pruningFlower=${G1FilterPlant4Truss3[0].pruneFlowering}&floweringTruss=${G1FilterPlant4Truss3[0].floweringTrussss}&pruningSet=${G1FilterPlant4Truss3[0].prunSetting}&settingTruss=${G1FilterPlant4Truss3[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant4Truss3[0].pruningHar}&harvestTruss=${G1FilterPlant4Truss3[0].harvestTruss}`;

                console.log("URL : " + url71);

                fetch(url71, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1FilterPlant4Truss4.length) {


                      const scriptUrl72 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url72 = `${scriptUrl72}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant4Truss4[0].plantNumber}&trussNumber=${G1FilterPlant4Truss4[0].trussNumber}&setFruits=${G1FilterPlant4Truss4[0].setFruits}&setFlowers=${G1FilterPlant4Truss4[0].setFlowers}&pruningNumber=${G1FilterPlant4Truss4[0].pruningNumber}&fruitLoad=${G1FilterPlant4Truss4[0].fruitLoad}&fruitDiameter=${G1FilterPlant4Truss4[0].fruitDiameter}&pruningFlower=${G1FilterPlant4Truss4[0].pruneFlowering}&floweringTruss=${G1FilterPlant4Truss4[0].floweringTrussss}&pruningSet=${G1FilterPlant4Truss4[0].prunSetting}&settingTruss=${G1FilterPlant4Truss4[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant4Truss4[0].pruningHar}&harvestTruss=${G1FilterPlant4Truss4[0].harvestTruss}`;

                      console.log("URL : " + url72);

                      fetch(url72, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1FilterPlant4Truss5.length) {

                            const scriptUrl73 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url73 = `${scriptUrl73}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant4Truss5[0].plantNumber}&trussNumber=${G1FilterPlant4Truss5[0].trussNumber}&setFruits=${G1FilterPlant4Truss5[0].setFruits}&setFlowers=${G1FilterPlant4Truss5[0].setFlowers}&pruningNumber=${G1FilterPlant4Truss5[0].pruningNumber}&fruitLoad=${G1FilterPlant4Truss5[0].fruitLoad}&fruitDiameter=${G1FilterPlant4Truss5[0].fruitDiameter}&pruningFlower=${G1FilterPlant4Truss5[0].pruneFlowering}&floweringTruss=${G1FilterPlant4Truss5[0].floweringTrussss}&pruningSet=${G1FilterPlant4Truss5[0].prunSetting}&settingTruss=${G1FilterPlant4Truss5[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant4Truss5[0].pruningHar}&harvestTruss=${G1FilterPlant4Truss5[0].harvestTruss}`;

                            console.log("URL : " + url73);

                            fetch(url73, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1FilterPlant4Truss6.length) {

                                  const scriptUrl74 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url74 = `${scriptUrl74}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant4Truss6[0].plantNumber}&trussNumber=${G1FilterPlant4Truss6[0].trussNumber}&setFruits=${G1FilterPlant4Truss6[0].setFruits}&setFlowers=${G1FilterPlant4Truss6[0].setFlowers}&pruningNumber=${G1FilterPlant4Truss6[0].pruningNumber}&fruitLoad=${G1FilterPlant4Truss6[0].fruitLoad}&fruitDiameter=${G1FilterPlant4Truss6[0].fruitDiameter}&pruningFlower=${G1FilterPlant4Truss6[0].pruneFlowering}&floweringTruss=${G1FilterPlant4Truss6[0].floweringTrussss}&pruningSet=${G1FilterPlant4Truss6[0].prunSetting}&settingTruss=${G1FilterPlant4Truss6[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant4Truss6[0].pruningHar}&harvestTruss=${G1FilterPlant4Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url74);

                                  fetch(url74, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1FilterPlant4Truss7.length) {

                                        const scriptUrl75 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url75 = `${scriptUrl75}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant4Truss7[0].plantNumber}&trussNumber=${G1FilterPlant4Truss7[0].trussNumber}&setFruits=${G1FilterPlant4Truss7[0].setFruits}&setFlowers=${G1FilterPlant4Truss7[0].setFlowers}&pruningNumber=${G1FilterPlant4Truss7[0].pruningNumber}&fruitLoad=${G1FilterPlant4Truss7[0].fruitLoad}&fruitDiameter=${G1FilterPlant4Truss7[0].fruitDiameter}&pruningFlower=${G1FilterPlant4Truss7[0].pruneFlowering}&floweringTruss=${G1FilterPlant4Truss7[0].floweringTrussss}&pruningSet=${G1FilterPlant4Truss7[0].prunSetting}&settingTruss=${G1FilterPlant4Truss7[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant4Truss7[0].pruningHar}&harvestTruss=${G1FilterPlant4Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url75);

                                        fetch(url75, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1FilterPlant4Truss8.length) {


                                              const scriptUrl76 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url76 = `${scriptUrl76}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant4Truss8[0].plantNumber}&trussNumber=${G1FilterPlant4Truss8[0].trussNumber}&setFruits=${G1FilterPlant4Truss8[0].setFruits}&setFlowers=${G1FilterPlant4Truss8[0].setFlowers}&pruningNumber=${G1FilterPlant4Truss8[0].pruningNumber}&fruitLoad=${G1FilterPlant4Truss8[0].fruitLoad}&fruitDiameter=${G1FilterPlant4Truss8[0].fruitDiameter}&pruningFlower=${G1FilterPlant4Truss8[0].pruneFlowering}&floweringTruss=${G1FilterPlant4Truss8[0].floweringTrussss}&pruningSet=${G1FilterPlant4Truss8[0].prunSetting}&settingTruss=${G1FilterPlant4Truss8[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant4Truss8[0].pruningHar}&harvestTruss=${G1FilterPlant4Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url76);

                                              fetch(url76, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1FilterPlant4Truss9.length) {

                                                    const scriptUrl77 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url77 = `${scriptUrl77}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant4Truss9[0].plantNumber}&trussNumber=${G1FilterPlant4Truss9[0].trussNumber}&setFruits=${G1FilterPlant4Truss9[0].setFruits}&setFlowers=${G1FilterPlant4Truss9[0].setFlowers}&pruningNumber=${G1FilterPlant4Truss9[0].pruningNumber}&fruitLoad=${G1FilterPlant4Truss9[0].fruitLoad}&fruitDiameter=${G1FilterPlant4Truss9[0].fruitDiameter}&pruningFlower=${G1FilterPlant4Truss9[0].pruneFlowering}&floweringTruss=${G1FilterPlant4Truss9[0].floweringTrussss}&pruningSet=${G1FilterPlant4Truss9[0].prunSetting}&settingTruss=${G1FilterPlant4Truss9[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant4Truss9[0].pruningHar}&harvestTruss=${G1FilterPlant4Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url77);

                                                    fetch(url77, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1FilterPlant4Truss0.length) {

                                                          const scriptUrl78 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url78 = `${scriptUrl78}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant4Truss0[0].plantNumber}&trussNumber=${G1FilterPlant4Truss0[0].trussNumber}&setFruits=${G1FilterPlant4Truss0[0].setFruits}&setFlowers=${G1FilterPlant4Truss0[0].setFlowers}&pruningNumber=${G1FilterPlant4Truss0[0].pruningNumber}&fruitLoad=${G1FilterPlant4Truss0[0].fruitLoad}&fruitDiameter=${G1FilterPlant4Truss0[0].fruitDiameter}&pruningFlower=${G1FilterPlant4Truss0[0].pruneFlowering}&floweringTruss=${G1FilterPlant4Truss0[0].floweringTrussss}&pruningSet=${G1FilterPlant4Truss0[0].prunSetting}&settingTruss=${G1FilterPlant4Truss0[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant4Truss0[0].pruningHar}&harvestTruss=${G1FilterPlant4Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url78);

                                                          fetch(url78, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendPlant5Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendPlant5Trusses()

                                                            }




                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendPlant5Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendPlant5Trusses()
                                                      }




                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendPlant5Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendPlant5Trusses()
                                                }




                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendPlant5Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendPlant5Trusses()
                                          }




                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendPlant5Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendPlant5Trusses()
                                    }




                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendPlant5Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendPlant5Trusses()
                              }




                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendPlant5Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendPlant5Trusses()
                        }




                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendPlant5Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendPlant5Trusses()
                  }




                });

              } else {
                this.setState({ isLoading: false })
                this.sendPlant5Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendPlant5Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendPlant5Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendPlant5Trusses()
      }




    });


  }

  sendPlant5Trusses = () => {

    this.setState({ isLoading: true })


    //INITIALIZATION G1 MERLICE ROW 45/46 PLANT 5 
    let G1FilterPlant5Truss1 = []
    let G1FilterPlant5Truss2 = []
    let G1FilterPlant5Truss3 = []
    let G1FilterPlant5Truss4 = []
    let G1FilterPlant5Truss5 = []
    let G1FilterPlant5Truss6 = []
    let G1FilterPlant5Truss7 = []
    let G1FilterPlant5Truss8 = []
    let G1FilterPlant5Truss9 = []
    let G1FilterPlant5Truss0 = []
    //END

    //GER 1 Merlice/ Plant 5/ Truss Number 1-10

    G1FilterPlant5Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1FilterPlant5Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1FilterPlant5Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1FilterPlant5Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1FilterPlant5Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1FilterPlant5Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1FilterPlant5Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1FilterPlant5Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1FilterPlant5Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1FilterPlant5Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl79 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url79 = `${scriptUrl79}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant5Truss1[0].plantNumber}&trussNumber=${G1FilterPlant5Truss1[0].trussNumber}&setFruits=${G1FilterPlant5Truss1[0].setFruits}&setFlowers=${G1FilterPlant5Truss1[0].setFlowers}&pruningNumber=${G1FilterPlant5Truss1[0].pruningNumber}&fruitLoad=${G1FilterPlant5Truss1[0].fruitLoad}&fruitDiameter=${G1FilterPlant5Truss1[0].fruitDiameter}&pruningFlower=${G1FilterPlant5Truss1[0].pruneFlowering}&floweringTruss=${G1FilterPlant5Truss1[0].floweringTrussss}&pruningSet=${G1FilterPlant5Truss1[0].prunSetting}&settingTruss=${G1FilterPlant5Truss1[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant5Truss1[0].pruningHar}&harvestTruss=${G1FilterPlant5Truss1[0].harvestTruss}`;

    console.log("URL : " + url79);

    fetch(url79, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1FilterPlant5Truss2.length) {

          const scriptUrl80 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url80 = `${scriptUrl80}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant5Truss2[0].plantNumber}&trussNumber=${G1FilterPlant5Truss2[0].trussNumber}&setFruits=${G1FilterPlant5Truss2[0].setFruits}&setFlowers=${G1FilterPlant5Truss2[0].setFlowers}&pruningNumber=${G1FilterPlant5Truss2[0].pruningNumber}&fruitLoad=${G1FilterPlant5Truss2[0].fruitLoad}&fruitDiameter=${G1FilterPlant5Truss2[0].fruitDiameter}&pruningFlower=${G1FilterPlant5Truss2[0].pruneFlowering}&floweringTruss=${G1FilterPlant5Truss2[0].floweringTrussss}&pruningSet=${G1FilterPlant5Truss2[0].prunSetting}&settingTruss=${G1FilterPlant5Truss2[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant5Truss2[0].pruningHar}&harvestTruss=${G1FilterPlant5Truss2[0].harvestTruss}`;

          console.log("URL : " + url80);

          fetch(url80, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1FilterPlant5Truss3.length) {


                const scriptUrl81 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url81 = `${scriptUrl81}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant5Truss3[0].plantNumber}&trussNumber=${G1FilterPlant5Truss3[0].trussNumber}&setFruits=${G1FilterPlant5Truss3[0].setFruits}&setFlowers=${G1FilterPlant5Truss3[0].setFlowers}&pruningNumber=${G1FilterPlant5Truss3[0].pruningNumber}&fruitLoad=${G1FilterPlant5Truss3[0].fruitLoad}&fruitDiameter=${G1FilterPlant5Truss3[0].fruitDiameter}&pruningFlower=${G1FilterPlant5Truss3[0].pruneFlowering}&floweringTruss=${G1FilterPlant5Truss3[0].floweringTrussss}&pruningSet=${G1FilterPlant5Truss3[0].prunSetting}&settingTruss=${G1FilterPlant5Truss3[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant5Truss3[0].pruningHar}&harvestTruss=${G1FilterPlant5Truss3[0].harvestTruss}`;

                console.log("URL : " + url81);

                fetch(url81, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1FilterPlant5Truss4.length) {

                      const scriptUrl82 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url82 = `${scriptUrl82}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant5Truss4[0].plantNumber}&trussNumber=${G1FilterPlant5Truss4[0].trussNumber}&setFruits=${G1FilterPlant5Truss4[0].setFruits}&setFlowers=${G1FilterPlant5Truss4[0].setFlowers}&pruningNumber=${G1FilterPlant5Truss4[0].pruningNumber}&fruitLoad=${G1FilterPlant5Truss4[0].fruitLoad}&fruitDiameter=${G1FilterPlant5Truss4[0].fruitDiameter}&pruningFlower=${G1FilterPlant5Truss4[0].pruneFlowering}&floweringTruss=${G1FilterPlant5Truss4[0].floweringTrussss}&pruningSet=${G1FilterPlant5Truss4[0].prunSetting}&settingTruss=${G1FilterPlant5Truss4[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant5Truss4[0].pruningHar}&harvestTruss=${G1FilterPlant5Truss4[0].harvestTruss}`;

                      console.log("URL : " + url82);

                      fetch(url82, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1FilterPlant5Truss5.length) {

                            const scriptUrl83 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url83 = `${scriptUrl83}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant5Truss5[0].plantNumber}&trussNumber=${G1FilterPlant5Truss5[0].trussNumber}&setFruits=${G1FilterPlant5Truss5[0].setFruits}&setFlowers=${G1FilterPlant5Truss5[0].setFlowers}&pruningNumber=${G1FilterPlant5Truss5[0].pruningNumber}&fruitLoad=${G1FilterPlant5Truss5[0].fruitLoad}&fruitDiameter=${G1FilterPlant5Truss5[0].fruitDiameter}&pruningFlower=${G1FilterPlant5Truss5[0].pruneFlowering}&floweringTruss=${G1FilterPlant5Truss5[0].floweringTrussss}&pruningSet=${G1FilterPlant5Truss5[0].prunSetting}&settingTruss=${G1FilterPlant5Truss5[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant5Truss5[0].pruningHar}&harvestTruss=${G1FilterPlant5Truss5[0].harvestTruss}`;

                            console.log("URL : " + url83);

                            fetch(url83, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1FilterPlant5Truss6.length) {


                                  const scriptUrl84 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url84 = `${scriptUrl84}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant5Truss6[0].plantNumber}&trussNumber=${G1FilterPlant5Truss6[0].trussNumber}&setFruits=${G1FilterPlant5Truss6[0].setFruits}&setFlowers=${G1FilterPlant5Truss6[0].setFlowers}&pruningNumber=${G1FilterPlant5Truss6[0].pruningNumber}&fruitLoad=${G1FilterPlant5Truss6[0].fruitLoad}&fruitDiameter=${G1FilterPlant5Truss6[0].fruitDiameter}&pruningFlower=${G1FilterPlant5Truss6[0].pruneFlowering}&floweringTruss=${G1FilterPlant5Truss6[0].floweringTrussss}&pruningSet=${G1FilterPlant5Truss6[0].prunSetting}&settingTruss=${G1FilterPlant5Truss6[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant5Truss6[0].pruningHar}&harvestTruss=${G1FilterPlant5Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url84);

                                  fetch(url84, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1FilterPlant5Truss7.length) {

                                        const scriptUrl85 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url85 = `${scriptUrl85}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant5Truss7[0].plantNumber}&trussNumber=${G1FilterPlant5Truss7[0].trussNumber}&setFruits=${G1FilterPlant5Truss7[0].setFruits}&setFlowers=${G1FilterPlant5Truss7[0].setFlowers}&pruningNumber=${G1FilterPlant5Truss7[0].pruningNumber}&fruitLoad=${G1FilterPlant5Truss7[0].fruitLoad}&fruitDiameter=${G1FilterPlant5Truss7[0].fruitDiameter}&pruningFlower=${G1FilterPlant5Truss7[0].pruneFlowering}&floweringTruss=${G1FilterPlant5Truss7[0].floweringTrussss}&pruningSet=${G1FilterPlant5Truss7[0].prunSetting}&settingTruss=${G1FilterPlant5Truss7[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant5Truss7[0].pruningHar}&harvestTruss=${G1FilterPlant5Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url85);

                                        fetch(url85, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1FilterPlant5Truss8.length) {

                                              const scriptUrl86 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url86 = `${scriptUrl86}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant5Truss8[0].plantNumber}&trussNumber=${G1FilterPlant5Truss8[0].trussNumber}&setFruits=${G1FilterPlant5Truss8[0].setFruits}&setFlowers=${G1FilterPlant5Truss8[0].setFlowers}&pruningNumber=${G1FilterPlant5Truss8[0].pruningNumber}&fruitLoad=${G1FilterPlant5Truss8[0].fruitLoad}&fruitDiameter=${G1FilterPlant5Truss8[0].fruitDiameter}&pruningFlower=${G1FilterPlant5Truss8[0].pruneFlowering}&floweringTruss=${G1FilterPlant5Truss8[0].floweringTrussss}&pruningSet=${G1FilterPlant5Truss8[0].prunSetting}&settingTruss=${G1FilterPlant5Truss8[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant5Truss8[0].pruningHar}&harvestTruss=${G1FilterPlant5Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url86);

                                              fetch(url86, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1FilterPlant5Truss9.length) {


                                                    const scriptUrl87 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url87 = `${scriptUrl87}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant5Truss9[0].plantNumber}&trussNumber=${G1FilterPlant5Truss9[0].trussNumber}&setFruits=${G1FilterPlant5Truss9[0].setFruits}&setFlowers=${G1FilterPlant5Truss9[0].setFlowers}&pruningNumber=${G1FilterPlant5Truss9[0].pruningNumber}&fruitLoad=${G1FilterPlant5Truss9[0].fruitLoad}&fruitDiameter=${G1FilterPlant5Truss9[0].fruitDiameter}&pruningFlower=${G1FilterPlant5Truss9[0].pruneFlowering}&floweringTruss=${G1FilterPlant5Truss9[0].floweringTrussss}&pruningSet=${G1FilterPlant5Truss9[0].prunSetting}&settingTruss=${G1FilterPlant5Truss9[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant5Truss9[0].pruningHar}&harvestTruss=${G1FilterPlant5Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url87);

                                                    fetch(url87, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1FilterPlant5Truss0.length) {


                                                          const scriptUrl88 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url88 = `${scriptUrl88}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant5Truss0[0].plantNumber}&trussNumber=${G1FilterPlant5Truss0[0].trussNumber}&setFruits=${G1FilterPlant5Truss0[0].setFruits}&setFlowers=${G1FilterPlant5Truss0[0].setFlowers}&pruningNumber=${G1FilterPlant5Truss0[0].pruningNumber}&fruitLoad=${G1FilterPlant5Truss0[0].fruitLoad}&fruitDiameter=${G1FilterPlant5Truss0[0].fruitDiameter}&pruningFlower=${G1FilterPlant5Truss0[0].pruneFlowering}&floweringTruss=${G1FilterPlant5Truss0[0].floweringTrussss}&pruningSet=${G1FilterPlant5Truss0[0].prunSetting}&settingTruss=${G1FilterPlant5Truss0[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant5Truss0[0].pruningHar}&harvestTruss=${G1FilterPlant5Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url88);

                                                          fetch(url88, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {


                                                              this.sendPlant6Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendPlant6Trusses()

                                                            }




                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendPlant6Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendPlant6Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendPlant6Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendPlant6Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendPlant6Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendPlant6Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendPlant6Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendPlant6Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendPlant6Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendPlant6Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendPlant6Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendPlant6Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendPlant6Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendPlant6Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendPlant6Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendPlant6Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendPlant6Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendPlant6Trusses()
      }




    });


  }

  sendPlant6Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 45/46 PLANT 6 
    let G1FilterPlant6Truss1 = []
    let G1FilterPlant6Truss2 = []
    let G1FilterPlant6Truss3 = []
    let G1FilterPlant6Truss4 = []
    let G1FilterPlant6Truss5 = []
    let G1FilterPlant6Truss6 = []
    let G1FilterPlant6Truss7 = []
    let G1FilterPlant6Truss8 = []
    let G1FilterPlant6Truss9 = []
    let G1FilterPlant6Truss0 = []
    //END

    //GER 1 Merlice/ Plant 6/ Truss Number 1-10

    G1FilterPlant6Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1FilterPlant6Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1FilterPlant6Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1FilterPlant6Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1FilterPlant6Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1FilterPlant6Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1FilterPlant6Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1FilterPlant6Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1FilterPlant6Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1FilterPlant6Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl89 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url89 = `${scriptUrl89}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant6Truss1[0].plantNumber}&trussNumber=${G1FilterPlant6Truss1[0].trussNumber}&setFruits=${G1FilterPlant6Truss1[0].setFruits}&setFlowers=${G1FilterPlant6Truss1[0].setFlowers}&pruningNumber=${G1FilterPlant6Truss1[0].pruningNumber}&fruitLoad=${G1FilterPlant6Truss1[0].fruitLoad}&fruitDiameter=${G1FilterPlant6Truss1[0].fruitDiameter}&pruningFlower=${G1FilterPlant6Truss1[0].pruneFlowering}&floweringTruss=${G1FilterPlant6Truss1[0].floweringTrussss}&pruningSet=${G1FilterPlant6Truss1[0].prunSetting}&settingTruss=${G1FilterPlant6Truss1[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant6Truss1[0].pruningHar}&harvestTruss=${G1FilterPlant6Truss1[0].harvestTruss}`;

    console.log("URL : " + url89);

    fetch(url89, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1FilterPlant6Truss2.length) {

          const scriptUrl90 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url90 = `${scriptUrl90}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant6Truss2[0].plantNumber}&trussNumber=${G1FilterPlant6Truss2[0].trussNumber}&setFruits=${G1FilterPlant6Truss2[0].setFruits}&setFlowers=${G1FilterPlant6Truss2[0].setFlowers}&pruningNumber=${G1FilterPlant6Truss2[0].pruningNumber}&fruitLoad=${G1FilterPlant6Truss2[0].fruitLoad}&fruitDiameter=${G1FilterPlant6Truss2[0].fruitDiameter}&pruningFlower=${G1FilterPlant6Truss2[0].pruneFlowering}&floweringTruss=${G1FilterPlant6Truss2[0].floweringTrussss}&pruningSet=${G1FilterPlant6Truss2[0].prunSetting}&settingTruss=${G1FilterPlant6Truss2[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant6Truss2[0].pruningHar}&harvestTruss=${G1FilterPlant6Truss2[0].harvestTruss}`;

          console.log("URL : " + url90);

          fetch(url90, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1FilterPlant6Truss3.length) {

                const scriptUrl91 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url91 = `${scriptUrl91}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant6Truss3[0].plantNumber}&trussNumber=${G1FilterPlant6Truss3[0].trussNumber}&setFruits=${G1FilterPlant6Truss3[0].setFruits}&setFlowers=${G1FilterPlant6Truss3[0].setFlowers}&pruningNumber=${G1FilterPlant6Truss3[0].pruningNumber}&fruitLoad=${G1FilterPlant6Truss3[0].fruitLoad}&fruitDiameter=${G1FilterPlant6Truss3[0].fruitDiameter}&pruningFlower=${G1FilterPlant6Truss3[0].pruneFlowering}&floweringTruss=${G1FilterPlant6Truss3[0].floweringTrussss}&pruningSet=${G1FilterPlant6Truss3[0].prunSetting}&settingTruss=${G1FilterPlant6Truss3[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant6Truss3[0].pruningHar}&harvestTruss=${G1FilterPlant6Truss3[0].harvestTruss}`;

                console.log("URL : " + url91);

                fetch(url91, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1FilterPlant6Truss4.length) {

                      const scriptUrl92 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url92 = `${scriptUrl92}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant6Truss4[0].plantNumber}&trussNumber=${G1FilterPlant6Truss4[0].trussNumber}&setFruits=${G1FilterPlant6Truss4[0].setFruits}&setFlowers=${G1FilterPlant6Truss4[0].setFlowers}&pruningNumber=${G1FilterPlant6Truss4[0].pruningNumber}&fruitLoad=${G1FilterPlant6Truss4[0].fruitLoad}&fruitDiameter=${G1FilterPlant6Truss4[0].fruitDiameter}&pruningFlower=${G1FilterPlant6Truss4[0].pruneFlowering}&floweringTruss=${G1FilterPlant6Truss4[0].floweringTrussss}&pruningSet=${G1FilterPlant6Truss4[0].prunSetting}&settingTruss=${G1FilterPlant6Truss4[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant6Truss4[0].pruningHar}&harvestTruss=${G1FilterPlant6Truss4[0].harvestTruss}`;

                      console.log("URL : " + url92);

                      fetch(url92, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1FilterPlant6Truss5.length) {

                            const scriptUrl93 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url93 = `${scriptUrl93}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant6Truss5[0].plantNumber}&trussNumber=${G1FilterPlant6Truss5[0].trussNumber}&setFruits=${G1FilterPlant6Truss5[0].setFruits}&setFlowers=${G1FilterPlant6Truss5[0].setFlowers}&pruningNumber=${G1FilterPlant6Truss5[0].pruningNumber}&fruitLoad=${G1FilterPlant6Truss5[0].fruitLoad}&fruitDiameter=${G1FilterPlant6Truss5[0].fruitDiameter}&pruningFlower=${G1FilterPlant6Truss5[0].pruneFlowering}&floweringTruss=${G1FilterPlant6Truss5[0].floweringTrussss}&pruningSet=${G1FilterPlant6Truss5[0].prunSetting}&settingTruss=${G1FilterPlant6Truss5[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant6Truss5[0].pruningHar}&harvestTruss=${G1FilterPlant6Truss5[0].harvestTruss}`;

                            console.log("URL : " + url93);

                            fetch(url93, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1FilterPlant6Truss6.length) {

                                  const scriptUrl94 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url94 = `${scriptUrl94}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant6Truss6[0].plantNumber}&trussNumber=${G1FilterPlant6Truss6[0].trussNumber}&setFruits=${G1FilterPlant6Truss6[0].setFruits}&setFlowers=${G1FilterPlant6Truss6[0].setFlowers}&pruningNumber=${G1FilterPlant6Truss6[0].pruningNumber}&fruitLoad=${G1FilterPlant6Truss6[0].fruitLoad}&fruitDiameter=${G1FilterPlant6Truss6[0].fruitDiameter}&pruningFlower=${G1FilterPlant6Truss6[0].pruneFlowering}&floweringTruss=${G1FilterPlant6Truss6[0].floweringTrussss}&pruningSet=${G1FilterPlant6Truss6[0].prunSetting}&settingTruss=${G1FilterPlant6Truss6[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant6Truss6[0].pruningHar}&harvestTruss=${G1FilterPlant6Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url94);

                                  fetch(url94, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1FilterPlant6Truss7.length) {

                                        const scriptUrl95 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url95 = `${scriptUrl95}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant6Truss7[0].plantNumber}&trussNumber=${G1FilterPlant6Truss7[0].trussNumber}&setFruits=${G1FilterPlant6Truss7[0].setFruits}&setFlowers=${G1FilterPlant6Truss7[0].setFlowers}&pruningNumber=${G1FilterPlant6Truss7[0].pruningNumber}&fruitLoad=${G1FilterPlant6Truss7[0].fruitLoad}&fruitDiameter=${G1FilterPlant6Truss7[0].fruitDiameter}&pruningFlower=${G1FilterPlant6Truss7[0].pruneFlowering}&floweringTruss=${G1FilterPlant6Truss7[0].floweringTrussss}&pruningSet=${G1FilterPlant6Truss7[0].prunSetting}&settingTruss=${G1FilterPlant6Truss7[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant6Truss7[0].pruningHar}&harvestTruss=${G1FilterPlant6Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url95);

                                        fetch(url95, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1FilterPlant6Truss8.length) {

                                              const scriptUrl96 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url96 = `${scriptUrl96}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant6Truss8[0].plantNumber}&trussNumber=${G1FilterPlant6Truss8[0].trussNumber}&setFruits=${G1FilterPlant6Truss8[0].setFruits}&setFlowers=${G1FilterPlant6Truss8[0].setFlowers}&pruningNumber=${G1FilterPlant6Truss8[0].pruningNumber}&fruitLoad=${G1FilterPlant6Truss8[0].fruitLoad}&fruitDiameter=${G1FilterPlant6Truss8[0].fruitDiameter}&pruningFlower=${G1FilterPlant6Truss8[0].pruneFlowering}&floweringTruss=${G1FilterPlant6Truss8[0].floweringTrussss}&pruningSet=${G1FilterPlant6Truss8[0].prunSetting}&settingTruss=${G1FilterPlant6Truss8[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant6Truss8[0].pruningHar}&harvestTruss=${G1FilterPlant6Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url96);

                                              fetch(url96, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1FilterPlant6Truss9.length) {

                                                    const scriptUrl97 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url97 = `${scriptUrl97}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant6Truss9[0].plantNumber}&trussNumber=${G1FilterPlant6Truss9[0].trussNumber}&setFruits=${G1FilterPlant6Truss9[0].setFruits}&setFlowers=${G1FilterPlant6Truss9[0].setFlowers}&pruningNumber=${G1FilterPlant6Truss9[0].pruningNumber}&fruitLoad=${G1FilterPlant6Truss9[0].fruitLoad}&fruitDiameter=${G1FilterPlant6Truss9[0].fruitDiameter}&pruningFlower=${G1FilterPlant6Truss9[0].pruneFlowering}&floweringTruss=${G1FilterPlant6Truss9[0].floweringTrussss}&pruningSet=${G1FilterPlant6Truss9[0].prunSetting}&settingTruss=${G1FilterPlant6Truss9[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant6Truss9[0].pruningHar}&harvestTruss=${G1FilterPlant6Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url97);

                                                    fetch(url97, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1FilterPlant6Truss0.length) {

                                                          const scriptUrl98 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url98 = `${scriptUrl98}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant6Truss0[0].plantNumber}&trussNumber=${G1FilterPlant6Truss0[0].trussNumber}&setFruits=${G1FilterPlant6Truss0[0].setFruits}&setFlowers=${G1FilterPlant6Truss0[0].setFlowers}&pruningNumber=${G1FilterPlant6Truss0[0].pruningNumber}&fruitLoad=${G1FilterPlant6Truss0[0].fruitLoad}&fruitDiameter=${G1FilterPlant6Truss0[0].fruitDiameter}&pruningFlower=${G1FilterPlant6Truss0[0].pruneFlowering}&floweringTruss=${G1FilterPlant6Truss0[0].floweringTrussss}&pruningSet=${G1FilterPlant6Truss0[0].prunSetting}&settingTruss=${G1FilterPlant6Truss0[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant6Truss0[0].pruningHar}&harvestTruss=${G1FilterPlant6Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url98);

                                                          fetch(url98, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendPlant7Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendPlant7Trusses()

                                                            }




                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendPlant7Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendPlant7Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendPlant7Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendPlant7Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendPlant7Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendPlant7Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendPlant7Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendPlant7Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendPlant7Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendPlant7Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendPlant7Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendPlant7Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendPlant7Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendPlant7Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendPlant7Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendPlant7Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendPlant7Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendPlant7Trusses()
      }




    });

  }

  sendPlant7Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 45/46 PLANT 7 
    let G1FilterPlant7Truss1 = []
    let G1FilterPlant7Truss2 = []
    let G1FilterPlant7Truss3 = []
    let G1FilterPlant7Truss4 = []
    let G1FilterPlant7Truss5 = []
    let G1FilterPlant7Truss6 = []
    let G1FilterPlant7Truss7 = []
    let G1FilterPlant7Truss8 = []
    let G1FilterPlant7Truss9 = []
    let G1FilterPlant7Truss0 = []
    //END

    //GER 1 Merlice/ Plant 7/ Truss Number 1-10

    G1FilterPlant7Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1FilterPlant7Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1FilterPlant7Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1FilterPlant7Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1FilterPlant7Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1FilterPlant7Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1FilterPlant7Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1FilterPlant7Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1FilterPlant7Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1FilterPlant7Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 0

      )
    });

    //END

    const scriptUrl99 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url99 = `${scriptUrl99}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant7Truss1[0].plantNumber}&trussNumber=${G1FilterPlant7Truss1[0].trussNumber}&setFruits=${G1FilterPlant7Truss1[0].setFruits}&setFlowers=${G1FilterPlant7Truss1[0].setFlowers}&pruningNumber=${G1FilterPlant7Truss1[0].pruningNumber}&fruitLoad=${G1FilterPlant7Truss1[0].fruitLoad}&fruitDiameter=${G1FilterPlant7Truss1[0].fruitDiameter}&pruningFlower=${G1FilterPlant7Truss1[0].pruneFlowering}&floweringTruss=${G1FilterPlant7Truss1[0].floweringTrussss}&pruningSet=${G1FilterPlant7Truss1[0].prunSetting}&settingTruss=${G1FilterPlant7Truss1[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant7Truss1[0].pruningHar}&harvestTruss=${G1FilterPlant7Truss1[0].harvestTruss}`;

    console.log("URL : " + url99);

    fetch(url99, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1FilterPlant7Truss2.length) {

          const scriptUrl100 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url100 = `${scriptUrl100}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant7Truss2[0].plantNumber}&trussNumber=${G1FilterPlant7Truss2[0].trussNumber}&setFruits=${G1FilterPlant7Truss2[0].setFruits}&setFlowers=${G1FilterPlant7Truss2[0].setFlowers}&pruningNumber=${G1FilterPlant7Truss2[0].pruningNumber}&fruitLoad=${G1FilterPlant7Truss2[0].fruitLoad}&fruitDiameter=${G1FilterPlant7Truss2[0].fruitDiameter}&pruningFlower=${G1FilterPlant7Truss2[0].pruneFlowering}&floweringTruss=${G1FilterPlant7Truss2[0].floweringTrussss}&pruningSet=${G1FilterPlant7Truss2[0].prunSetting}&settingTruss=${G1FilterPlant7Truss2[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant7Truss2[0].pruningHar}&harvestTruss=${G1FilterPlant7Truss2[0].harvestTruss}`;

          console.log("URL : " + url100);

          fetch(url100, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1FilterPlant7Truss3.length) {

                const scriptUrl101 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url101 = `${scriptUrl101}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant7Truss3[0].plantNumber}&trussNumber=${G1FilterPlant7Truss3[0].trussNumber}&setFruits=${G1FilterPlant7Truss3[0].setFruits}&setFlowers=${G1FilterPlant7Truss3[0].setFlowers}&pruningNumber=${G1FilterPlant7Truss3[0].pruningNumber}&fruitLoad=${G1FilterPlant7Truss3[0].fruitLoad}&fruitDiameter=${G1FilterPlant7Truss3[0].fruitDiameter}&pruningFlower=${G1FilterPlant7Truss3[0].pruneFlowering}&floweringTruss=${G1FilterPlant7Truss3[0].floweringTrussss}&pruningSet=${G1FilterPlant7Truss3[0].prunSetting}&settingTruss=${G1FilterPlant7Truss3[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant7Truss3[0].pruningHar}&harvestTruss=${G1FilterPlant7Truss3[0].harvestTruss}`;

                console.log("URL : " + url101);

                fetch(url101, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1FilterPlant7Truss4.length) {

                      const scriptUrl102 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url102 = `${scriptUrl102}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant7Truss4[0].plantNumber}&trussNumber=${G1FilterPlant7Truss4[0].trussNumber}&setFruits=${G1FilterPlant7Truss4[0].setFruits}&setFlowers=${G1FilterPlant7Truss4[0].setFlowers}&pruningNumber=${G1FilterPlant7Truss4[0].pruningNumber}&fruitLoad=${G1FilterPlant7Truss4[0].fruitLoad}&fruitDiameter=${G1FilterPlant7Truss4[0].fruitDiameter}&pruningFlower=${G1FilterPlant7Truss4[0].pruneFlowering}&floweringTruss=${G1FilterPlant7Truss4[0].floweringTrussss}&pruningSet=${G1FilterPlant7Truss4[0].prunSetting}&settingTruss=${G1FilterPlant7Truss4[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant7Truss4[0].pruningHar}&harvestTruss=${G1FilterPlant7Truss4[0].harvestTruss}`;

                      console.log("URL : " + url102);

                      fetch(url102, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1FilterPlant7Truss5.length) {

                            const scriptUrl103 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url103 = `${scriptUrl103}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant7Truss5[0].plantNumber}&trussNumber=${G1FilterPlant7Truss5[0].trussNumber}&setFruits=${G1FilterPlant7Truss5[0].setFruits}&setFlowers=${G1FilterPlant7Truss5[0].setFlowers}&pruningNumber=${G1FilterPlant7Truss5[0].pruningNumber}&fruitLoad=${G1FilterPlant7Truss5[0].fruitLoad}&fruitDiameter=${G1FilterPlant7Truss5[0].fruitDiameter}&pruningFlower=${G1FilterPlant7Truss5[0].pruneFlowering}&floweringTruss=${G1FilterPlant7Truss5[0].floweringTrussss}&pruningSet=${G1FilterPlant7Truss5[0].prunSetting}&settingTruss=${G1FilterPlant7Truss5[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant7Truss5[0].pruningHar}&harvestTruss=${G1FilterPlant7Truss5[0].harvestTruss}`;

                            console.log("URL : " + url103);

                            fetch(url103, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1FilterPlant7Truss6.length) {

                                  const scriptUrl104 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url104 = `${scriptUrl104}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant7Truss6[0].plantNumber}&trussNumber=${G1FilterPlant7Truss6[0].trussNumber}&setFruits=${G1FilterPlant7Truss6[0].setFruits}&setFlowers=${G1FilterPlant7Truss6[0].setFlowers}&pruningNumber=${G1FilterPlant7Truss6[0].pruningNumber}&fruitLoad=${G1FilterPlant7Truss6[0].fruitLoad}&fruitDiameter=${G1FilterPlant7Truss6[0].fruitDiameter}&pruningFlower=${G1FilterPlant7Truss6[0].pruneFlowering}&floweringTruss=${G1FilterPlant7Truss6[0].floweringTrussss}&pruningSet=${G1FilterPlant7Truss6[0].prunSetting}&settingTruss=${G1FilterPlant7Truss6[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant7Truss6[0].pruningHar}&harvestTruss=${G1FilterPlant7Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url104);

                                  fetch(url104, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1FilterPlant7Truss7.length) {

                                        const scriptUrl105 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url105 = `${scriptUrl105}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant7Truss7[0].plantNumber}&trussNumber=${G1FilterPlant7Truss7[0].trussNumber}&setFruits=${G1FilterPlant7Truss7[0].setFruits}&setFlowers=${G1FilterPlant7Truss7[0].setFlowers}&pruningNumber=${G1FilterPlant7Truss7[0].pruningNumber}&fruitLoad=${G1FilterPlant7Truss7[0].fruitLoad}&fruitDiameter=${G1FilterPlant7Truss7[0].fruitDiameter}&pruningFlower=${G1FilterPlant7Truss7[0].pruneFlowering}&floweringTruss=${G1FilterPlant7Truss7[0].floweringTrussss}&pruningSet=${G1FilterPlant7Truss7[0].prunSetting}&settingTruss=${G1FilterPlant7Truss7[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant7Truss7[0].pruningHar}&harvestTruss=${G1FilterPlant7Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url105);

                                        fetch(url105, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1FilterPlant7Truss8.length) {

                                              const scriptUrl106 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url106 = `${scriptUrl106}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant7Truss8[0].plantNumber}&trussNumber=${G1FilterPlant7Truss8[0].trussNumber}&setFruits=${G1FilterPlant7Truss8[0].setFruits}&setFlowers=${G1FilterPlant7Truss8[0].setFlowers}&pruningNumber=${G1FilterPlant7Truss8[0].pruningNumber}&fruitLoad=${G1FilterPlant7Truss8[0].fruitLoad}&fruitDiameter=${G1FilterPlant7Truss8[0].fruitDiameter}&pruningFlower=${G1FilterPlant7Truss8[0].pruneFlowering}&floweringTruss=${G1FilterPlant7Truss8[0].floweringTrussss}&pruningSet=${G1FilterPlant7Truss8[0].prunSetting}&settingTruss=${G1FilterPlant7Truss8[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant7Truss8[0].pruningHar}&harvestTruss=${G1FilterPlant7Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url106);

                                              fetch(url106, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1FilterPlant7Truss9.length) {

                                                    const scriptUrl107 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url107 = `${scriptUrl107}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant7Truss9[0].plantNumber}&trussNumber=${G1FilterPlant7Truss9[0].trussNumber}&setFruits=${G1FilterPlant7Truss9[0].setFruits}&setFlowers=${G1FilterPlant7Truss9[0].setFlowers}&pruningNumber=${G1FilterPlant7Truss9[0].pruningNumber}&fruitLoad=${G1FilterPlant7Truss9[0].fruitLoad}&fruitDiameter=${G1FilterPlant7Truss9[0].fruitDiameter}&pruningFlower=${G1FilterPlant7Truss9[0].pruneFlowering}&floweringTruss=${G1FilterPlant7Truss9[0].floweringTrussss}&pruningSet=${G1FilterPlant7Truss9[0].prunSetting}&settingTruss=${G1FilterPlant7Truss9[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant7Truss9[0].pruningHar}&harvestTruss=${G1FilterPlant7Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url107);

                                                    fetch(url107, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1FilterPlant7Truss0.length) {

                                                          const scriptUrl108 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url108 = `${scriptUrl108}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant7Truss0[0].plantNumber}&trussNumber=${G1FilterPlant7Truss0[0].trussNumber}&setFruits=${G1FilterPlant7Truss0[0].setFruits}&setFlowers=${G1FilterPlant7Truss0[0].setFlowers}&pruningNumber=${G1FilterPlant7Truss0[0].pruningNumber}&fruitLoad=${G1FilterPlant7Truss0[0].fruitLoad}&fruitDiameter=${G1FilterPlant7Truss0[0].fruitDiameter}&pruningFlower=${G1FilterPlant7Truss0[0].pruneFlowering}&floweringTruss=${G1FilterPlant7Truss0[0].floweringTrussss}&pruningSet=${G1FilterPlant7Truss0[0].prunSetting}&settingTruss=${G1FilterPlant7Truss0[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant7Truss0[0].pruningHar}&harvestTruss=${G1FilterPlant7Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url108);

                                                          fetch(url108, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendPlant8Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendPlant8Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendPlant8Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendPlant8Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendPlant8Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendPlant8Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendPlant8Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendPlant8Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendPlant8Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendPlant8Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendPlant8Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendPlant8Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendPlant8Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendPlant8Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendPlant8Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendPlant8Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendPlant8Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendPlant8Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendPlant8Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendPlant8Trusses()
      }




    });





  }

  sendPlant8Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 45/46 PLANT 8 
    let G1FilterPlant8Truss1 = []
    let G1FilterPlant8Truss2 = []
    let G1FilterPlant8Truss3 = []
    let G1FilterPlant8Truss4 = []
    let G1FilterPlant8Truss5 = []
    let G1FilterPlant8Truss6 = []
    let G1FilterPlant8Truss7 = []
    let G1FilterPlant8Truss8 = []
    let G1FilterPlant8Truss9 = []
    let G1FilterPlant8Truss0 = []
    //END

    //GER 1 Merlice/ Plant 8/ Truss Number 1-10

    G1FilterPlant8Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1FilterPlant8Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1FilterPlant8Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1FilterPlant8Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1FilterPlant8Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1FilterPlant8Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1FilterPlant8Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1FilterPlant8Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1FilterPlant8Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1FilterPlant8Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 0

      )
    });

    //END

    const scriptUrl109 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url109 = `${scriptUrl109}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant8Truss1[0].plantNumber}&trussNumber=${G1FilterPlant8Truss1[0].trussNumber}&setFruits=${G1FilterPlant8Truss1[0].setFruits}&setFlowers=${G1FilterPlant8Truss1[0].setFlowers}&pruningNumber=${G1FilterPlant8Truss1[0].pruningNumber}&fruitLoad=${G1FilterPlant8Truss1[0].fruitLoad}&fruitDiameter=${G1FilterPlant8Truss1[0].fruitDiameter}&pruningFlower=${G1FilterPlant8Truss1[0].pruneFlowering}&floweringTruss=${G1FilterPlant8Truss1[0].floweringTrussss}&pruningSet=${G1FilterPlant8Truss1[0].prunSetting}&settingTruss=${G1FilterPlant8Truss1[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant8Truss1[0].pruningHar}&harvestTruss=${G1FilterPlant8Truss1[0].harvestTruss}`;

    console.log("URL : " + url109);

    fetch(url109, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1FilterPlant8Truss2.length) {

          const scriptUrl110 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url110 = `${scriptUrl110}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant8Truss2[0].plantNumber}&trussNumber=${G1FilterPlant8Truss2[0].trussNumber}&setFruits=${G1FilterPlant8Truss2[0].setFruits}&setFlowers=${G1FilterPlant8Truss2[0].setFlowers}&pruningNumber=${G1FilterPlant8Truss2[0].pruningNumber}&fruitLoad=${G1FilterPlant8Truss2[0].fruitLoad}&fruitDiameter=${G1FilterPlant8Truss2[0].fruitDiameter}&pruningFlower=${G1FilterPlant8Truss2[0].pruneFlowering}&floweringTruss=${G1FilterPlant8Truss2[0].floweringTrussss}&pruningSet=${G1FilterPlant8Truss2[0].prunSetting}&settingTruss=${G1FilterPlant8Truss2[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant8Truss2[0].pruningHar}&harvestTruss=${G1FilterPlant8Truss2[0].harvestTruss}`;

          console.log("URL : " + url110);

          fetch(url110, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1FilterPlant8Truss3.length) {

                const scriptUrl111 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url111 = `${scriptUrl111}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant8Truss3[0].plantNumber}&trussNumber=${G1FilterPlant8Truss3[0].trussNumber}&setFruits=${G1FilterPlant8Truss3[0].setFruits}&setFlowers=${G1FilterPlant8Truss3[0].setFlowers}&pruningNumber=${G1FilterPlant8Truss3[0].pruningNumber}&fruitLoad=${G1FilterPlant8Truss3[0].fruitLoad}&fruitDiameter=${G1FilterPlant8Truss3[0].fruitDiameter}&pruningFlower=${G1FilterPlant8Truss3[0].pruneFlowering}&floweringTruss=${G1FilterPlant8Truss3[0].floweringTrussss}&pruningSet=${G1FilterPlant8Truss3[0].prunSetting}&settingTruss=${G1FilterPlant8Truss3[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant8Truss3[0].pruningHar}&harvestTruss=${G1FilterPlant8Truss3[0].harvestTruss}`;

                console.log("URL : " + url111);

                fetch(url111, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1FilterPlant8Truss4.length) {

                      const scriptUrl112 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url112 = `${scriptUrl112}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant8Truss4[0].plantNumber}&trussNumber=${G1FilterPlant8Truss4[0].trussNumber}&setFruits=${G1FilterPlant8Truss4[0].setFruits}&setFlowers=${G1FilterPlant8Truss4[0].setFlowers}&pruningNumber=${G1FilterPlant8Truss4[0].pruningNumber}&fruitLoad=${G1FilterPlant8Truss4[0].fruitLoad}&fruitDiameter=${G1FilterPlant8Truss4[0].fruitDiameter}&pruningFlower=${G1FilterPlant8Truss4[0].pruneFlowering}&floweringTruss=${G1FilterPlant8Truss4[0].floweringTrussss}&pruningSet=${G1FilterPlant8Truss4[0].prunSetting}&settingTruss=${G1FilterPlant8Truss4[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant8Truss4[0].pruningHar}&harvestTruss=${G1FilterPlant8Truss4[0].harvestTruss}`;

                      console.log("URL : " + url112);

                      fetch(url112, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1FilterPlant8Truss5.length) {

                            const scriptUrl113 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url113 = `${scriptUrl113}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant8Truss5[0].plantNumber}&trussNumber=${G1FilterPlant8Truss5[0].trussNumber}&setFruits=${G1FilterPlant8Truss5[0].setFruits}&setFlowers=${G1FilterPlant8Truss5[0].setFlowers}&pruningNumber=${G1FilterPlant8Truss5[0].pruningNumber}&fruitLoad=${G1FilterPlant8Truss5[0].fruitLoad}&fruitDiameter=${G1FilterPlant8Truss5[0].fruitDiameter}&pruningFlower=${G1FilterPlant8Truss5[0].pruneFlowering}&floweringTruss=${G1FilterPlant8Truss5[0].floweringTrussss}&pruningSet=${G1FilterPlant8Truss5[0].prunSetting}&settingTruss=${G1FilterPlant8Truss5[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant8Truss5[0].pruningHar}&harvestTruss=${G1FilterPlant8Truss5[0].harvestTruss}`;

                            console.log("URL : " + url113);

                            fetch(url113, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1FilterPlant8Truss6.length) {

                                  const scriptUrl114 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url114 = `${scriptUrl114}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant8Truss6[0].plantNumber}&trussNumber=${G1FilterPlant8Truss6[0].trussNumber}&setFruits=${G1FilterPlant8Truss6[0].setFruits}&setFlowers=${G1FilterPlant8Truss6[0].setFlowers}&pruningNumber=${G1FilterPlant8Truss6[0].pruningNumber}&fruitLoad=${G1FilterPlant8Truss6[0].fruitLoad}&fruitDiameter=${G1FilterPlant8Truss6[0].fruitDiameter}&pruningFlower=${G1FilterPlant8Truss6[0].pruneFlowering}&floweringTruss=${G1FilterPlant8Truss6[0].floweringTrussss}&pruningSet=${G1FilterPlant8Truss6[0].prunSetting}&settingTruss=${G1FilterPlant8Truss6[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant8Truss6[0].pruningHar}&harvestTruss=${G1FilterPlant8Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url114);

                                  fetch(url114, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1FilterPlant8Truss7.length) {

                                        const scriptUrl115 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url115 = `${scriptUrl115}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant8Truss7[0].plantNumber}&trussNumber=${G1FilterPlant8Truss7[0].trussNumber}&setFruits=${G1FilterPlant8Truss7[0].setFruits}&setFlowers=${G1FilterPlant8Truss7[0].setFlowers}&pruningNumber=${G1FilterPlant8Truss7[0].pruningNumber}&fruitLoad=${G1FilterPlant8Truss7[0].fruitLoad}&fruitDiameter=${G1FilterPlant8Truss7[0].fruitDiameter}&pruningFlower=${G1FilterPlant8Truss7[0].pruneFlowering}&floweringTruss=${G1FilterPlant8Truss7[0].floweringTrussss}&pruningSet=${G1FilterPlant8Truss7[0].prunSetting}&settingTruss=${G1FilterPlant8Truss7[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant8Truss7[0].pruningHar}&harvestTruss=${G1FilterPlant8Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url115);

                                        fetch(url115, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1FilterPlant8Truss8.length) {

                                              const scriptUrl116 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url116 = `${scriptUrl116}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant8Truss8[0].plantNumber}&trussNumber=${G1FilterPlant8Truss8[0].trussNumber}&setFruits=${G1FilterPlant8Truss8[0].setFruits}&setFlowers=${G1FilterPlant8Truss8[0].setFlowers}&pruningNumber=${G1FilterPlant8Truss8[0].pruningNumber}&fruitLoad=${G1FilterPlant8Truss8[0].fruitLoad}&fruitDiameter=${G1FilterPlant8Truss8[0].fruitDiameter}&pruningFlower=${G1FilterPlant8Truss8[0].pruneFlowering}&floweringTruss=${G1FilterPlant8Truss8[0].floweringTrussss}&pruningSet=${G1FilterPlant8Truss8[0].prunSetting}&settingTruss=${G1FilterPlant8Truss8[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant8Truss8[0].pruningHar}&harvestTruss=${G1FilterPlant8Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url116);

                                              fetch(url116, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1FilterPlant8Truss9.length) {

                                                    const scriptUrl117 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url117 = `${scriptUrl117}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant8Truss9[0].plantNumber}&trussNumber=${G1FilterPlant8Truss9[0].trussNumber}&setFruits=${G1FilterPlant8Truss9[0].setFruits}&setFlowers=${G1FilterPlant8Truss9[0].setFlowers}&pruningNumber=${G1FilterPlant8Truss9[0].pruningNumber}&fruitLoad=${G1FilterPlant8Truss9[0].fruitLoad}&fruitDiameter=${G1FilterPlant8Truss9[0].fruitDiameter}&pruningFlower=${G1FilterPlant8Truss9[0].pruneFlowering}&floweringTruss=${G1FilterPlant8Truss9[0].floweringTrussss}&pruningSet=${G1FilterPlant8Truss9[0].prunSetting}&settingTruss=${G1FilterPlant8Truss9[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant8Truss9[0].pruningHar}&harvestTruss=${G1FilterPlant8Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url117);

                                                    fetch(url117, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1FilterPlant8Truss0.length) {

                                                          const scriptUrl118 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url118 = `${scriptUrl118}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant8Truss0[0].plantNumber}&trussNumber=${G1FilterPlant8Truss0[0].trussNumber}&setFruits=${G1FilterPlant8Truss0[0].setFruits}&setFlowers=${G1FilterPlant8Truss0[0].setFlowers}&pruningNumber=${G1FilterPlant8Truss0[0].pruningNumber}&fruitLoad=${G1FilterPlant8Truss0[0].fruitLoad}&fruitDiameter=${G1FilterPlant8Truss0[0].fruitDiameter}&pruningFlower=${G1FilterPlant8Truss0[0].pruneFlowering}&floweringTruss=${G1FilterPlant8Truss0[0].floweringTrussss}&pruningSet=${G1FilterPlant8Truss0[0].prunSetting}&settingTruss=${G1FilterPlant8Truss0[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant8Truss0[0].pruningHar}&harvestTruss=${G1FilterPlant8Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url118);

                                                          fetch(url118, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendPlant9Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendPlant9Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendPlant9Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendPlant9Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendPlant9Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendPlant9Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendPlant9Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendPlant9Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendPlant9Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendPlant9Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendPlant9Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendPlant9Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendPlant9Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendPlant9Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendPlant9Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendPlant9Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendPlant9Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendPlant9Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendPlant9Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendPlant9Trusses()
      }




    });

  }


  sendPlant9Trusses = () => {


    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 45/46 PLANT 9 
    let G1FilterPlant9Truss1 = []
    let G1FilterPlant9Truss2 = []
    let G1FilterPlant9Truss3 = []
    let G1FilterPlant9Truss4 = []
    let G1FilterPlant9Truss5 = []
    let G1FilterPlant9Truss6 = []
    let G1FilterPlant9Truss7 = []
    let G1FilterPlant9Truss8 = []
    let G1FilterPlant9Truss9 = []
    let G1FilterPlant9Truss0 = []
    //END

    //GER 1 Merlice/ Plant 9/ Truss Number 1-10

    G1FilterPlant9Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1FilterPlant9Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1FilterPlant9Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1FilterPlant9Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1FilterPlant9Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1FilterPlant9Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1FilterPlant9Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1FilterPlant9Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1FilterPlant9Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1FilterPlant9Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl119 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url119 = `${scriptUrl119}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant9Truss1[0].plantNumber}&trussNumber=${G1FilterPlant9Truss1[0].trussNumber}&setFruits=${G1FilterPlant9Truss1[0].setFruits}&setFlowers=${G1FilterPlant9Truss1[0].setFlowers}&pruningNumber=${G1FilterPlant9Truss1[0].pruningNumber}&fruitLoad=${G1FilterPlant9Truss1[0].fruitLoad}&fruitDiameter=${G1FilterPlant9Truss1[0].fruitDiameter}&pruningFlower=${G1FilterPlant9Truss1[0].pruneFlowering}&floweringTruss=${G1FilterPlant9Truss1[0].floweringTrussss}&pruningSet=${G1FilterPlant9Truss1[0].prunSetting}&settingTruss=${G1FilterPlant9Truss1[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant9Truss1[0].pruningHar}&harvestTruss=${G1FilterPlant9Truss1[0].harvestTruss}`;

    console.log("URL : " + url119);

    fetch(url119, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1FilterPlant9Truss2.length) {

          const scriptUrl120 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url120 = `${scriptUrl120}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant9Truss2[0].plantNumber}&trussNumber=${G1FilterPlant9Truss2[0].trussNumber}&setFruits=${G1FilterPlant9Truss2[0].setFruits}&setFlowers=${G1FilterPlant9Truss2[0].setFlowers}&pruningNumber=${G1FilterPlant9Truss2[0].pruningNumber}&fruitLoad=${G1FilterPlant9Truss2[0].fruitLoad}&fruitDiameter=${G1FilterPlant9Truss2[0].fruitDiameter}&pruningFlower=${G1FilterPlant9Truss2[0].pruneFlowering}&floweringTruss=${G1FilterPlant9Truss2[0].floweringTrussss}&pruningSet=${G1FilterPlant9Truss2[0].prunSetting}&settingTruss=${G1FilterPlant9Truss2[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant9Truss2[0].pruningHar}&harvestTruss=${G1FilterPlant9Truss2[0].harvestTruss}`;

          console.log("URL : " + url120);

          fetch(url120, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1FilterPlant9Truss3.length) {

                const scriptUrl121 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url121 = `${scriptUrl121}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant9Truss3[0].plantNumber}&trussNumber=${G1FilterPlant9Truss3[0].trussNumber}&setFruits=${G1FilterPlant9Truss3[0].setFruits}&setFlowers=${G1FilterPlant9Truss3[0].setFlowers}&pruningNumber=${G1FilterPlant9Truss3[0].pruningNumber}&fruitLoad=${G1FilterPlant9Truss3[0].fruitLoad}&fruitDiameter=${G1FilterPlant9Truss3[0].fruitDiameter}&pruningFlower=${G1FilterPlant9Truss3[0].pruneFlowering}&floweringTruss=${G1FilterPlant9Truss3[0].floweringTrussss}&pruningSet=${G1FilterPlant9Truss3[0].prunSetting}&settingTruss=${G1FilterPlant9Truss3[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant9Truss3[0].pruningHar}&harvestTruss=${G1FilterPlant9Truss3[0].harvestTruss}`;

                console.log("URL : " + url121);

                fetch(url121, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1FilterPlant9Truss4.length) {

                      const scriptUrl122 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url122 = `${scriptUrl122}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant9Truss4[0].plantNumber}&trussNumber=${G1FilterPlant9Truss4[0].trussNumber}&setFruits=${G1FilterPlant9Truss4[0].setFruits}&setFlowers=${G1FilterPlant9Truss4[0].setFlowers}&pruningNumber=${G1FilterPlant9Truss4[0].pruningNumber}&fruitLoad=${G1FilterPlant9Truss4[0].fruitLoad}&fruitDiameter=${G1FilterPlant9Truss4[0].fruitDiameter}&pruningFlower=${G1FilterPlant9Truss4[0].pruneFlowering}&floweringTruss=${G1FilterPlant9Truss4[0].floweringTrussss}&pruningSet=${G1FilterPlant9Truss4[0].prunSetting}&settingTruss=${G1FilterPlant9Truss4[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant9Truss4[0].pruningHar}&harvestTruss=${G1FilterPlant9Truss4[0].harvestTruss}`;

                      console.log("URL : " + url122);

                      fetch(url122, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1FilterPlant9Truss5.length) {

                            const scriptUrl123 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url123 = `${scriptUrl123}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant9Truss5[0].plantNumber}&trussNumber=${G1FilterPlant9Truss5[0].trussNumber}&setFruits=${G1FilterPlant9Truss5[0].setFruits}&setFlowers=${G1FilterPlant9Truss5[0].setFlowers}&pruningNumber=${G1FilterPlant9Truss5[0].pruningNumber}&fruitLoad=${G1FilterPlant9Truss5[0].fruitLoad}&fruitDiameter=${G1FilterPlant9Truss5[0].fruitDiameter}&pruningFlower=${G1FilterPlant9Truss5[0].pruneFlowering}&floweringTruss=${G1FilterPlant9Truss5[0].floweringTrussss}&pruningSet=${G1FilterPlant9Truss5[0].prunSetting}&settingTruss=${G1FilterPlant9Truss5[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant9Truss5[0].pruningHar}&harvestTruss=${G1FilterPlant9Truss5[0].harvestTruss}`;

                            console.log("URL : " + url123);

                            fetch(url123, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1FilterPlant9Truss6.length) {

                                  const scriptUrl124 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url124 = `${scriptUrl124}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant9Truss6[0].plantNumber}&trussNumber=${G1FilterPlant9Truss6[0].trussNumber}&setFruits=${G1FilterPlant9Truss6[0].setFruits}&setFlowers=${G1FilterPlant9Truss6[0].setFlowers}&pruningNumber=${G1FilterPlant9Truss6[0].pruningNumber}&fruitLoad=${G1FilterPlant9Truss6[0].fruitLoad}&fruitDiameter=${G1FilterPlant9Truss6[0].fruitDiameter}&pruningFlower=${G1FilterPlant9Truss6[0].pruneFlowering}&floweringTruss=${G1FilterPlant9Truss6[0].floweringTrussss}&pruningSet=${G1FilterPlant9Truss6[0].prunSetting}&settingTruss=${G1FilterPlant9Truss6[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant9Truss6[0].pruningHar}&harvestTruss=${G1FilterPlant9Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url124);

                                  fetch(url124, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1FilterPlant9Truss7.length) {

                                        const scriptUrl125 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url125 = `${scriptUrl125}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant9Truss7[0].plantNumber}&trussNumber=${G1FilterPlant9Truss7[0].trussNumber}&setFruits=${G1FilterPlant9Truss7[0].setFruits}&setFlowers=${G1FilterPlant9Truss7[0].setFlowers}&pruningNumber=${G1FilterPlant9Truss7[0].pruningNumber}&fruitLoad=${G1FilterPlant9Truss7[0].fruitLoad}&fruitDiameter=${G1FilterPlant9Truss7[0].fruitDiameter}&pruningFlower=${G1FilterPlant9Truss7[0].pruneFlowering}&floweringTruss=${G1FilterPlant9Truss7[0].floweringTrussss}&pruningSet=${G1FilterPlant9Truss7[0].prunSetting}&settingTruss=${G1FilterPlant9Truss7[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant9Truss7[0].pruningHar}&harvestTruss=${G1FilterPlant9Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url125);

                                        fetch(url125, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1FilterPlant9Truss8.length) {

                                              const scriptUrl126 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url126 = `${scriptUrl126}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant9Truss8[0].plantNumber}&trussNumber=${G1FilterPlant9Truss8[0].trussNumber}&setFruits=${G1FilterPlant9Truss8[0].setFruits}&setFlowers=${G1FilterPlant9Truss8[0].setFlowers}&pruningNumber=${G1FilterPlant9Truss8[0].pruningNumber}&fruitLoad=${G1FilterPlant9Truss8[0].fruitLoad}&fruitDiameter=${G1FilterPlant9Truss8[0].fruitDiameter}&pruningFlower=${G1FilterPlant9Truss8[0].pruneFlowering}&floweringTruss=${G1FilterPlant9Truss8[0].floweringTrussss}&pruningSet=${G1FilterPlant9Truss8[0].prunSetting}&settingTruss=${G1FilterPlant9Truss8[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant9Truss8[0].pruningHar}&harvestTruss=${G1FilterPlant9Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url126);

                                              fetch(url126, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1FilterPlant9Truss9.length) {

                                                    const scriptUrl127 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url127 = `${scriptUrl127}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant9Truss9[0].plantNumber}&trussNumber=${G1FilterPlant9Truss9[0].trussNumber}&setFruits=${G1FilterPlant9Truss9[0].setFruits}&setFlowers=${G1FilterPlant9Truss9[0].setFlowers}&pruningNumber=${G1FilterPlant9Truss9[0].pruningNumber}&fruitLoad=${G1FilterPlant9Truss9[0].fruitLoad}&fruitDiameter=${G1FilterPlant9Truss9[0].fruitDiameter}&pruningFlower=${G1FilterPlant9Truss9[0].pruneFlowering}&floweringTruss=${G1FilterPlant9Truss9[0].floweringTrussss}&pruningSet=${G1FilterPlant9Truss9[0].prunSetting}&settingTruss=${G1FilterPlant9Truss9[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant9Truss9[0].pruningHar}&harvestTruss=${G1FilterPlant9Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url127);

                                                    fetch(url127, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1FilterPlant9Truss0.length) {

                                                          const scriptUrl128 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url128 = `${scriptUrl128}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant9Truss0[0].plantNumber}&trussNumber=${G1FilterPlant9Truss0[0].trussNumber}&setFruits=${G1FilterPlant9Truss0[0].setFruits}&setFlowers=${G1FilterPlant9Truss0[0].setFlowers}&pruningNumber=${G1FilterPlant9Truss0[0].pruningNumber}&fruitLoad=${G1FilterPlant9Truss0[0].fruitLoad}&fruitDiameter=${G1FilterPlant9Truss0[0].fruitDiameter}&pruningFlower=${G1FilterPlant9Truss0[0].pruneFlowering}&floweringTruss=${G1FilterPlant9Truss0[0].floweringTrussss}&pruningSet=${G1FilterPlant9Truss0[0].prunSetting}&settingTruss=${G1FilterPlant9Truss0[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant9Truss0[0].pruningHar}&harvestTruss=${G1FilterPlant9Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url128);

                                                          fetch(url128, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendPlant10Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendPlant10Trusses()

                                                            }




                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendPlant10Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendPlant10Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendPlant10Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendPlant10Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendPlant10Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendPlant10Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendPlant10Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendPlant10Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendPlant10Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendPlant10Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendPlant10Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendPlant10Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendPlant10Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendPlant10Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendPlant10Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendPlant10Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendPlant10Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendPlant10Trusses()
      }




    });


  }



  sendPlant10Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 45/46 PLANT 10 
    let G1FilterPlant10Truss1 = []
    let G1FilterPlant10Truss2 = []
    let G1FilterPlant10Truss3 = []
    let G1FilterPlant10Truss4 = []
    let G1FilterPlant10Truss5 = []
    let G1FilterPlant10Truss6 = []
    let G1FilterPlant10Truss7 = []
    let G1FilterPlant10Truss8 = []
    let G1FilterPlant10Truss9 = []
    let G1FilterPlant10Truss0 = []
    //END

    //GER 1 Merlice/ Plant 10/ Truss Number 1-10

    G1FilterPlant10Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1FilterPlant10Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1FilterPlant10Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1FilterPlant10Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1FilterPlant10Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1FilterPlant10Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1FilterPlant10Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1FilterPlant10Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1FilterPlant10Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1FilterPlant10Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '45/46' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl129 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url129 = `${scriptUrl129}?
                                                                            callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant10Truss1[0].plantNumber}&trussNumber=${G1FilterPlant10Truss1[0].trussNumber}&setFruits=${G1FilterPlant10Truss1[0].setFruits}&setFlowers=${G1FilterPlant10Truss1[0].setFlowers}&pruningNumber=${G1FilterPlant10Truss1[0].pruningNumber}&fruitLoad=${G1FilterPlant10Truss1[0].fruitLoad}&fruitDiameter=${G1FilterPlant10Truss1[0].fruitDiameter}&pruningFlower=${G1FilterPlant10Truss1[0].pruneFlowering}&floweringTruss=${G1FilterPlant10Truss1[0].floweringTrussss}&pruningSet=${G1FilterPlant10Truss1[0].prunSetting}&settingTruss=${G1FilterPlant10Truss1[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant10Truss1[0].pruningHar}&harvestTruss=${G1FilterPlant10Truss1[0].harvestTruss}`;

    console.log("URL : " + url129);

    fetch(url129, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1FilterPlant10Truss2.length) {

          const scriptUrl130 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url130 = `${scriptUrl130}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant10Truss2[0].plantNumber}&trussNumber=${G1FilterPlant10Truss2[0].trussNumber}&setFruits=${G1FilterPlant10Truss2[0].setFruits}&setFlowers=${G1FilterPlant10Truss2[0].setFlowers}&pruningNumber=${G1FilterPlant10Truss2[0].pruningNumber}&fruitLoad=${G1FilterPlant10Truss2[0].fruitLoad}&fruitDiameter=${G1FilterPlant10Truss2[0].fruitDiameter}&pruningFlower=${G1FilterPlant10Truss2[0].pruneFlowering}&floweringTruss=${G1FilterPlant10Truss2[0].floweringTrussss}&pruningSet=${G1FilterPlant10Truss2[0].prunSetting}&settingTruss=${G1FilterPlant10Truss2[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant10Truss2[0].pruningHar}&harvestTruss=${G1FilterPlant10Truss2[0].harvestTruss}`;

          console.log("URL : " + url130);

          fetch(url130, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1FilterPlant10Truss3.length) {

                const scriptUrl131 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url131 = `${scriptUrl131}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant10Truss3[0].plantNumber}&trussNumber=${G1FilterPlant10Truss3[0].trussNumber}&setFruits=${G1FilterPlant10Truss3[0].setFruits}&setFlowers=${G1FilterPlant10Truss3[0].setFlowers}&pruningNumber=${G1FilterPlant10Truss3[0].pruningNumber}&fruitLoad=${G1FilterPlant10Truss3[0].fruitLoad}&fruitDiameter=${G1FilterPlant10Truss3[0].fruitDiameter}&pruningFlower=${G1FilterPlant10Truss3[0].pruneFlowering}&floweringTruss=${G1FilterPlant10Truss3[0].floweringTrussss}&pruningSet=${G1FilterPlant10Truss3[0].prunSetting}&settingTruss=${G1FilterPlant10Truss3[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant10Truss3[0].pruningHar}&harvestTruss=${G1FilterPlant10Truss3[0].harvestTruss}`;

                console.log("URL : " + url131);

                fetch(url131, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1FilterPlant10Truss4.length) {

                      const scriptUrl132 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url132 = `${scriptUrl132}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant10Truss4[0].plantNumber}&trussNumber=${G1FilterPlant10Truss4[0].trussNumber}&setFruits=${G1FilterPlant10Truss4[0].setFruits}&setFlowers=${G1FilterPlant10Truss4[0].setFlowers}&pruningNumber=${G1FilterPlant10Truss4[0].pruningNumber}&fruitLoad=${G1FilterPlant10Truss4[0].fruitLoad}&fruitDiameter=${G1FilterPlant10Truss4[0].fruitDiameter}&pruningFlower=${G1FilterPlant10Truss4[0].pruneFlowering}&floweringTruss=${G1FilterPlant10Truss4[0].floweringTrussss}&pruningSet=${G1FilterPlant10Truss4[0].prunSetting}&settingTruss=${G1FilterPlant10Truss4[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant10Truss4[0].pruningHar}&harvestTruss=${G1FilterPlant10Truss4[0].harvestTruss}`;

                      console.log("URL : " + url132);

                      fetch(url132, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1FilterPlant10Truss5.length) {

                            const scriptUrl133 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url133 = `${scriptUrl133}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant10Truss5[0].plantNumber}&trussNumber=${G1FilterPlant10Truss5[0].trussNumber}&setFruits=${G1FilterPlant10Truss5[0].setFruits}&setFlowers=${G1FilterPlant10Truss5[0].setFlowers}&pruningNumber=${G1FilterPlant10Truss5[0].pruningNumber}&fruitLoad=${G1FilterPlant10Truss5[0].fruitLoad}&fruitDiameter=${G1FilterPlant10Truss5[0].fruitDiameter}&pruningFlower=${G1FilterPlant10Truss5[0].pruneFlowering}&floweringTruss=${G1FilterPlant10Truss5[0].floweringTrussss}&pruningSet=${G1FilterPlant10Truss5[0].prunSetting}&settingTruss=${G1FilterPlant10Truss5[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant10Truss5[0].pruningHar}&harvestTruss=${G1FilterPlant10Truss5[0].harvestTruss}`;

                            console.log("URL : " + url133);

                            fetch(url133, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1FilterPlant10Truss6.length) {

                                  const scriptUrl134 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url134 = `${scriptUrl134}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant10Truss6[0].plantNumber}&trussNumber=${G1FilterPlant10Truss6[0].trussNumber}&setFruits=${G1FilterPlant10Truss6[0].setFruits}&setFlowers=${G1FilterPlant10Truss6[0].setFlowers}&pruningNumber=${G1FilterPlant10Truss6[0].pruningNumber}&fruitLoad=${G1FilterPlant10Truss6[0].fruitLoad}&fruitDiameter=${G1FilterPlant10Truss6[0].fruitDiameter}&pruningFlower=${G1FilterPlant10Truss6[0].pruneFlowering}&floweringTruss=${G1FilterPlant10Truss6[0].floweringTrussss}&pruningSet=${G1FilterPlant10Truss6[0].prunSetting}&settingTruss=${G1FilterPlant10Truss6[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant10Truss6[0].pruningHar}&harvestTruss=${G1FilterPlant10Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url134);

                                  fetch(url134, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1FilterPlant10Truss7.length) {

                                        const scriptUrl135 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url135 = `${scriptUrl135}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant10Truss7[0].plantNumber}&trussNumber=${G1FilterPlant10Truss7[0].trussNumber}&setFruits=${G1FilterPlant10Truss7[0].setFruits}&setFlowers=${G1FilterPlant10Truss7[0].setFlowers}&pruningNumber=${G1FilterPlant10Truss7[0].pruningNumber}&fruitLoad=${G1FilterPlant10Truss7[0].fruitLoad}&fruitDiameter=${G1FilterPlant10Truss7[0].fruitDiameter}&pruningFlower=${G1FilterPlant10Truss7[0].pruneFlowering}&floweringTruss=${G1FilterPlant10Truss7[0].floweringTrussss}&pruningSet=${G1FilterPlant10Truss7[0].prunSetting}&settingTruss=${G1FilterPlant10Truss7[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant10Truss7[0].pruningHar}&harvestTruss=${G1FilterPlant10Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url135);

                                        fetch(url135, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1FilterPlant10Truss8.length) {

                                              const scriptUrl136 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url136 = `${scriptUrl136}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant10Truss8[0].plantNumber}&trussNumber=${G1FilterPlant10Truss8[0].trussNumber}&setFruits=${G1FilterPlant10Truss8[0].setFruits}&setFlowers=${G1FilterPlant10Truss8[0].setFlowers}&pruningNumber=${G1FilterPlant10Truss8[0].pruningNumber}&fruitLoad=${G1FilterPlant10Truss8[0].fruitLoad}&fruitDiameter=${G1FilterPlant10Truss8[0].fruitDiameter}&pruningFlower=${G1FilterPlant10Truss8[0].pruneFlowering}&floweringTruss=${G1FilterPlant10Truss8[0].floweringTrussss}&pruningSet=${G1FilterPlant10Truss8[0].prunSetting}&settingTruss=${G1FilterPlant10Truss8[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant10Truss8[0].pruningHar}&harvestTruss=${G1FilterPlant10Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url136);

                                              fetch(url136, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1FilterPlant10Truss9.length) {

                                                    const scriptUrl137 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url137 = `${scriptUrl137}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant10Truss9[0].plantNumber}&trussNumber=${G1FilterPlant10Truss9[0].trussNumber}&setFruits=${G1FilterPlant10Truss9[0].setFruits}&setFlowers=${G1FilterPlant10Truss9[0].setFlowers}&pruningNumber=${G1FilterPlant10Truss9[0].pruningNumber}&fruitLoad=${G1FilterPlant10Truss9[0].fruitLoad}&fruitDiameter=${G1FilterPlant10Truss9[0].fruitDiameter}&pruningFlower=${G1FilterPlant10Truss9[0].pruneFlowering}&floweringTruss=${G1FilterPlant10Truss9[0].floweringTrussss}&pruningSet=${G1FilterPlant10Truss9[0].prunSetting}&settingTruss=${G1FilterPlant10Truss9[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant10Truss9[0].pruningHar}&harvestTruss=${G1FilterPlant10Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url137);

                                                    fetch(url137, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1FilterPlant10Truss0.length) {

                                                          const scriptUrl138 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url138 = `${scriptUrl138}?
                                                                          callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1FilterPlant10Truss0[0].plantNumber}&trussNumber=${G1FilterPlant10Truss0[0].trussNumber}&setFruits=${G1FilterPlant10Truss0[0].setFruits}&setFlowers=${G1FilterPlant10Truss0[0].setFlowers}&pruningNumber=${G1FilterPlant10Truss0[0].pruningNumber}&fruitLoad=${G1FilterPlant10Truss0[0].fruitLoad}&fruitDiameter=${G1FilterPlant10Truss0[0].fruitDiameter}&pruningFlower=${G1FilterPlant10Truss0[0].pruneFlowering}&floweringTruss=${G1FilterPlant10Truss0[0].floweringTrussss}&pruningSet=${G1FilterPlant10Truss0[0].prunSetting}&settingTruss=${G1FilterPlant10Truss0[0].settingTrussNumber}&pruningHarvest=${G1FilterPlant10Truss0[0].pruningHar}&harvestTruss=${G1FilterPlant10Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url138);

                                                          fetch(url138, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow2Plant1Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow2Plant1Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow2Plant1Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow2Plant1Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow2Plant1Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow2Plant1Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow2Plant1Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow2Plant1Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow2Plant1Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow2Plant1Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow2Plant1Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow2Plant1Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow2Plant1Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow2Plant1Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow2Plant1Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow2Plant1Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow2Plant1Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow2Plant1Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow2Plant1Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow2Plant1Trusses()
      }




    });





  }

  sendRow2Plant1Trusses = () => {

    this.setState({ isLoading: true })


    //INITIALIZATION G1 MERLICE ROW 85/86 PLANT 1
    let G1Filter1Plant1Truss1 = []
    let G1Filter1Plant1Truss2 = []
    let G1Filter1Plant1Truss3 = []
    let G1Filter1Plant1Truss4 = []
    let G1Filter1Plant1Truss5 = []
    let G1Filter1Plant1Truss6 = []
    let G1Filter1Plant1Truss7 = []
    let G1Filter1Plant1Truss8 = []
    let G1Filter1Plant1Truss9 = []
    let G1Filter1Plant1Truss0 = []
    //END

    //GER 1 Merlice/ Plant 1/ 85/86/ Truss Number 1-10

    G1Filter1Plant1Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1Filter1Plant1Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1Filter1Plant1Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1Filter1Plant1Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1Filter1Plant1Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1Filter1Plant1Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1Filter1Plant1Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1Filter1Plant1Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1Filter1Plant1Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1Filter1Plant1Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl139 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url139 = `${scriptUrl139}?
      callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant1Truss1[0].plantNumber}&trussNumber=${G1Filter1Plant1Truss1[0].trussNumber}&setFruits=${G1Filter1Plant1Truss1[0].setFruits}&setFlowers=${G1Filter1Plant1Truss1[0].setFlowers}&pruningNumber=${G1Filter1Plant1Truss1[0].pruningNumber}&fruitLoad=${G1Filter1Plant1Truss1[0].fruitLoad}&fruitDiameter=${G1Filter1Plant1Truss1[0].fruitDiameter}&pruningFlower=${G1Filter1Plant1Truss1[0].pruneFlowering}&floweringTruss=${G1Filter1Plant1Truss1[0].floweringTrussss}&pruningSet=${G1Filter1Plant1Truss1[0].prunSetting}&settingTruss=${G1Filter1Plant1Truss1[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant1Truss1[0].pruningHar}&harvestTruss=${G1Filter1Plant1Truss1[0].harvestTruss}`;

    console.log("URL : " + url139);

    fetch(url139, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1Filter1Plant1Truss2.length) {

          const scriptUrl140 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url140 = `${scriptUrl140}?
      callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant1Truss2[0].plantNumber}&trussNumber=${G1Filter1Plant1Truss2[0].trussNumber}&setFruits=${G1Filter1Plant1Truss2[0].setFruits}&setFlowers=${G1Filter1Plant1Truss2[0].setFlowers}&pruningNumber=${G1Filter1Plant1Truss2[0].pruningNumber}&fruitLoad=${G1Filter1Plant1Truss2[0].fruitLoad}&fruitDiameter=${G1Filter1Plant1Truss2[0].fruitDiameter}&pruningFlower=${G1Filter1Plant1Truss2[0].pruneFlowering}&floweringTruss=${G1Filter1Plant1Truss2[0].floweringTrussss}&pruningSet=${G1Filter1Plant1Truss2[0].prunSetting}&settingTruss=${G1Filter1Plant1Truss2[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant1Truss2[0].pruningHar}&harvestTruss=${G1Filter1Plant1Truss2[0].harvestTruss}`;

          console.log("URL : " + url140);

          fetch(url140, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1Filter1Plant1Truss3.length) {

                const scriptUrl141 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url141 = `${scriptUrl141}?
      callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant1Truss3[0].plantNumber}&trussNumber=${G1Filter1Plant1Truss3[0].trussNumber}&setFruits=${G1Filter1Plant1Truss3[0].setFruits}&setFlowers=${G1Filter1Plant1Truss3[0].setFlowers}&pruningNumber=${G1Filter1Plant1Truss3[0].pruningNumber}&fruitLoad=${G1Filter1Plant1Truss3[0].fruitLoad}&fruitDiameter=${G1Filter1Plant1Truss3[0].fruitDiameter}&pruningFlower=${G1Filter1Plant1Truss3[0].pruneFlowering}&floweringTruss=${G1Filter1Plant1Truss3[0].floweringTrussss}&pruningSet=${G1Filter1Plant1Truss3[0].prunSetting}&settingTruss=${G1Filter1Plant1Truss3[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant1Truss3[0].pruningHar}&harvestTruss=${G1Filter1Plant1Truss3[0].harvestTruss}`;

                console.log("URL : " + url141);

                fetch(url141, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1Filter1Plant1Truss4.length) {

                      const scriptUrl142 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url142 = `${scriptUrl142}?
      callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant1Truss4[0].plantNumber}&trussNumber=${G1Filter1Plant1Truss4[0].trussNumber}&setFruits=${G1Filter1Plant1Truss4[0].setFruits}&setFlowers=${G1Filter1Plant1Truss4[0].setFlowers}&pruningNumber=${G1Filter1Plant1Truss4[0].pruningNumber}&fruitLoad=${G1Filter1Plant1Truss4[0].fruitLoad}&fruitDiameter=${G1Filter1Plant1Truss4[0].fruitDiameter}&pruningFlower=${G1Filter1Plant1Truss4[0].pruneFlowering}&floweringTruss=${G1Filter1Plant1Truss4[0].floweringTrussss}&pruningSet=${G1Filter1Plant1Truss4[0].prunSetting}&settingTruss=${G1Filter1Plant1Truss4[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant1Truss4[0].pruningHar}&harvestTruss=${G1Filter1Plant1Truss4[0].harvestTruss}`;

                      console.log("URL : " + url142);

                      fetch(url142, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1Filter1Plant1Truss5.length) {

                            const scriptUrl143 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url143 = `${scriptUrl143}?
      callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant1Truss5[0].plantNumber}&trussNumber=${G1Filter1Plant1Truss5[0].trussNumber}&setFruits=${G1Filter1Plant1Truss5[0].setFruits}&setFlowers=${G1Filter1Plant1Truss5[0].setFlowers}&pruningNumber=${G1Filter1Plant1Truss5[0].pruningNumber}&fruitLoad=${G1Filter1Plant1Truss5[0].fruitLoad}&fruitDiameter=${G1Filter1Plant1Truss5[0].fruitDiameter}&pruningFlower=${G1Filter1Plant1Truss5[0].pruneFlowering}&floweringTruss=${G1Filter1Plant1Truss5[0].floweringTrussss}&pruningSet=${G1Filter1Plant1Truss5[0].prunSetting}&settingTruss=${G1Filter1Plant1Truss5[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant1Truss5[0].pruningHar}&harvestTruss=${G1Filter1Plant1Truss5[0].harvestTruss}`;

                            console.log("URL : " + url143);

                            fetch(url143, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1Filter1Plant1Truss6.length) {

                                  const scriptUrl144 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url144 = `${scriptUrl144}?
      callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant1Truss6[0].plantNumber}&trussNumber=${G1Filter1Plant1Truss6[0].trussNumber}&setFruits=${G1Filter1Plant1Truss6[0].setFruits}&setFlowers=${G1Filter1Plant1Truss6[0].setFlowers}&pruningNumber=${G1Filter1Plant1Truss6[0].pruningNumber}&fruitLoad=${G1Filter1Plant1Truss6[0].fruitLoad}&fruitDiameter=${G1Filter1Plant1Truss6[0].fruitDiameter}&pruningFlower=${G1Filter1Plant1Truss6[0].pruneFlowering}&floweringTruss=${G1Filter1Plant1Truss6[0].floweringTrussss}&pruningSet=${G1Filter1Plant1Truss6[0].prunSetting}&settingTruss=${G1Filter1Plant1Truss6[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant1Truss6[0].pruningHar}&harvestTruss=${G1Filter1Plant1Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url144);

                                  fetch(url144, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1Filter1Plant1Truss7.length) {

                                        const scriptUrl145 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url145 = `${scriptUrl145}?
      callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant1Truss7[0].plantNumber}&trussNumber=${G1Filter1Plant1Truss7[0].trussNumber}&setFruits=${G1Filter1Plant1Truss7[0].setFruits}&setFlowers=${G1Filter1Plant1Truss7[0].setFlowers}&pruningNumber=${G1Filter1Plant1Truss7[0].pruningNumber}&fruitLoad=${G1Filter1Plant1Truss7[0].fruitLoad}&fruitDiameter=${G1Filter1Plant1Truss7[0].fruitDiameter}&pruningFlower=${G1Filter1Plant1Truss7[0].pruneFlowering}&floweringTruss=${G1Filter1Plant1Truss7[0].floweringTrussss}&pruningSet=${G1Filter1Plant1Truss7[0].prunSetting}&settingTruss=${G1Filter1Plant1Truss7[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant1Truss7[0].pruningHar}&harvestTruss=${G1Filter1Plant1Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url145);

                                        fetch(url145, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1Filter1Plant1Truss8.length) {

                                              const scriptUrl146 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url146 = `${scriptUrl146}?
      callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant1Truss8[0].plantNumber}&trussNumber=${G1Filter1Plant1Truss8[0].trussNumber}&setFruits=${G1Filter1Plant1Truss8[0].setFruits}&setFlowers=${G1Filter1Plant1Truss8[0].setFlowers}&pruningNumber=${G1Filter1Plant1Truss8[0].pruningNumber}&fruitLoad=${G1Filter1Plant1Truss8[0].fruitLoad}&fruitDiameter=${G1Filter1Plant1Truss8[0].fruitDiameter}&pruningFlower=${G1Filter1Plant1Truss8[0].pruneFlowering}&floweringTruss=${G1Filter1Plant1Truss8[0].floweringTrussss}&pruningSet=${G1Filter1Plant1Truss8[0].prunSetting}&settingTruss=${G1Filter1Plant1Truss8[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant1Truss8[0].pruningHar}&harvestTruss=${G1Filter1Plant1Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url146);

                                              fetch(url146, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1Filter1Plant1Truss9.length) {

                                                    const scriptUrl147 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url147 = `${scriptUrl147}?
      callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant1Truss9[0].plantNumber}&trussNumber=${G1Filter1Plant1Truss9[0].trussNumber}&setFruits=${G1Filter1Plant1Truss9[0].setFruits}&setFlowers=${G1Filter1Plant1Truss9[0].setFlowers}&pruningNumber=${G1Filter1Plant1Truss9[0].pruningNumber}&fruitLoad=${G1Filter1Plant1Truss9[0].fruitLoad}&fruitDiameter=${G1Filter1Plant1Truss9[0].fruitDiameter}&pruningFlower=${G1Filter1Plant1Truss9[0].pruneFlowering}&floweringTruss=${G1Filter1Plant1Truss9[0].floweringTrussss}&pruningSet=${G1Filter1Plant1Truss9[0].prunSetting}&settingTruss=${G1Filter1Plant1Truss9[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant1Truss9[0].pruningHar}&harvestTruss=${G1Filter1Plant1Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url147);

                                                    fetch(url147, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1Filter1Plant1Truss0.length) {

                                                          const scriptUrl148 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url148 = `${scriptUrl148}?
      callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant1Truss0[0].plantNumber}&trussNumber=${G1Filter1Plant1Truss0[0].trussNumber}&setFruits=${G1Filter1Plant1Truss0[0].setFruits}&setFlowers=${G1Filter1Plant1Truss0[0].setFlowers}&pruningNumber=${G1Filter1Plant1Truss0[0].pruningNumber}&fruitLoad=${G1Filter1Plant1Truss0[0].fruitLoad}&fruitDiameter=${G1Filter1Plant1Truss0[0].fruitDiameter}&pruningFlower=${G1Filter1Plant1Truss0[0].pruneFlowering}&floweringTruss=${G1Filter1Plant1Truss0[0].floweringTrussss}&pruningSet=${G1Filter1Plant1Truss0[0].prunSetting}&settingTruss=${G1Filter1Plant1Truss0[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant1Truss0[0].pruningHar}&harvestTruss=${G1Filter1Plant1Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url148);

                                                          fetch(url148, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow2Plant2Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow2Plant2Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow2Plant2Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow2Plant2Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow2Plant2Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow2Plant2Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow2Plant2Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow2Plant2Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow2Plant2Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow2Plant2Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow2Plant2Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow2Plant2Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow2Plant2Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow2Plant2Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow2Plant2Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow2Plant2Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow2Plant2Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow2Plant2Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow2Plant2Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow2Plant2Trusses()
      }




    });





  }

  sendRow2Plant2Trusses = () => {

    this.setState({ isLoading: true })


    //INITIALIZATION G1 MERLICE ROW 85/86 PLANT 2
    let G1Filter1Plant2Truss1 = []
    let G1Filter1Plant2Truss2 = []
    let G1Filter1Plant2Truss3 = []
    let G1Filter1Plant2Truss4 = []
    let G1Filter1Plant2Truss5 = []
    let G1Filter1Plant2Truss6 = []
    let G1Filter1Plant2Truss7 = []
    let G1Filter1Plant2Truss8 = []
    let G1Filter1Plant2Truss9 = []
    let G1Filter1Plant2Truss0 = []
    //END

    //GER 1 Merlice/ Plant 2/ 85-86/ Truss Number 1-10

    G1Filter1Plant2Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1Filter1Plant2Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1Filter1Plant2Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1Filter1Plant2Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1Filter1Plant2Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1Filter1Plant2Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1Filter1Plant2Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1Filter1Plant2Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1Filter1Plant2Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1Filter1Plant2Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 10

      )
    });
    //END

    const scriptUrl149 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url149 = `${scriptUrl149}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant2Truss1[0].plantNumber}&trussNumber=${G1Filter1Plant2Truss1[0].trussNumber}&setFruits=${G1Filter1Plant2Truss1[0].setFruits}&setFlowers=${G1Filter1Plant2Truss1[0].setFlowers}&pruningNumber=${G1Filter1Plant2Truss1[0].pruningNumber}&fruitLoad=${G1Filter1Plant2Truss1[0].fruitLoad}&fruitDiameter=${G1Filter1Plant2Truss1[0].fruitDiameter}&pruningFlower=${G1Filter1Plant2Truss1[0].pruneFlowering}&floweringTruss=${G1Filter1Plant2Truss1[0].floweringTrussss}&pruningSet=${G1Filter1Plant2Truss1[0].prunSetting}&settingTruss=${G1Filter1Plant2Truss1[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant2Truss1[0].pruningHar}&harvestTruss=${G1Filter1Plant2Truss1[0].harvestTruss}`;

    console.log("URL : " + url149);

    fetch(url149, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1Filter1Plant2Truss2.length) {

          const scriptUrl150 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url150 = `${scriptUrl150}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant2Truss2[0].plantNumber}&trussNumber=${G1Filter1Plant2Truss2[0].trussNumber}&setFruits=${G1Filter1Plant2Truss2[0].setFruits}&setFlowers=${G1Filter1Plant2Truss2[0].setFlowers}&pruningNumber=${G1Filter1Plant2Truss2[0].pruningNumber}&fruitLoad=${G1Filter1Plant2Truss2[0].fruitLoad}&fruitDiameter=${G1Filter1Plant2Truss2[0].fruitDiameter}&pruningFlower=${G1Filter1Plant2Truss2[0].pruneFlowering}&floweringTruss=${G1Filter1Plant2Truss2[0].floweringTrussss}&pruningSet=${G1Filter1Plant2Truss2[0].prunSetting}&settingTruss=${G1Filter1Plant2Truss2[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant2Truss2[0].pruningHar}&harvestTruss=${G1Filter1Plant2Truss2[0].harvestTruss}`;

          console.log("URL : " + url150);

          fetch(url150, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1Filter1Plant2Truss3.length) {

                const scriptUrl151 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url151 = `${scriptUrl151}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant2Truss3[0].plantNumber}&trussNumber=${G1Filter1Plant2Truss3[0].trussNumber}&setFruits=${G1Filter1Plant2Truss3[0].setFruits}&setFlowers=${G1Filter1Plant2Truss3[0].setFlowers}&pruningNumber=${G1Filter1Plant2Truss3[0].pruningNumber}&fruitLoad=${G1Filter1Plant2Truss3[0].fruitLoad}&fruitDiameter=${G1Filter1Plant2Truss3[0].fruitDiameter}&pruningFlower=${G1Filter1Plant2Truss3[0].pruneFlowering}&floweringTruss=${G1Filter1Plant2Truss3[0].floweringTrussss}&pruningSet=${G1Filter1Plant2Truss3[0].prunSetting}&settingTruss=${G1Filter1Plant2Truss3[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant2Truss3[0].pruningHar}&harvestTruss=${G1Filter1Plant2Truss3[0].harvestTruss}`;

                console.log("URL : " + url151);

                fetch(url151, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1Filter1Plant2Truss4.length) {

                      const scriptUrl152 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url152 = `${scriptUrl152}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant2Truss4[0].plantNumber}&trussNumber=${G1Filter1Plant2Truss4[0].trussNumber}&setFruits=${G1Filter1Plant2Truss4[0].setFruits}&setFlowers=${G1Filter1Plant2Truss4[0].setFlowers}&pruningNumber=${G1Filter1Plant2Truss4[0].pruningNumber}&fruitLoad=${G1Filter1Plant2Truss4[0].fruitLoad}&fruitDiameter=${G1Filter1Plant2Truss4[0].fruitDiameter}&pruningFlower=${G1Filter1Plant2Truss4[0].pruneFlowering}&floweringTruss=${G1Filter1Plant2Truss4[0].floweringTrussss}&pruningSet=${G1Filter1Plant2Truss4[0].prunSetting}&settingTruss=${G1Filter1Plant2Truss4[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant2Truss4[0].pruningHar}&harvestTruss=${G1Filter1Plant2Truss4[0].harvestTruss}`;

                      console.log("URL : " + url152);

                      fetch(url152, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1Filter1Plant2Truss5.length) {

                            const scriptUrl153 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url153 = `${scriptUrl153}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant2Truss5[0].plantNumber}&trussNumber=${G1Filter1Plant2Truss5[0].trussNumber}&setFruits=${G1Filter1Plant2Truss5[0].setFruits}&setFlowers=${G1Filter1Plant2Truss5[0].setFlowers}&pruningNumber=${G1Filter1Plant2Truss5[0].pruningNumber}&fruitLoad=${G1Filter1Plant2Truss5[0].fruitLoad}&fruitDiameter=${G1Filter1Plant2Truss5[0].fruitDiameter}&pruningFlower=${G1Filter1Plant2Truss5[0].pruneFlowering}&floweringTruss=${G1Filter1Plant2Truss5[0].floweringTrussss}&pruningSet=${G1Filter1Plant2Truss5[0].prunSetting}&settingTruss=${G1Filter1Plant2Truss5[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant2Truss5[0].pruningHar}&harvestTruss=${G1Filter1Plant2Truss5[0].harvestTruss}`;

                            console.log("URL : " + url153);

                            fetch(url153, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1Filter1Plant2Truss6.length) {

                                  const scriptUrl154 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url154 = `${scriptUrl154}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant2Truss6[0].plantNumber}&trussNumber=${G1Filter1Plant2Truss6[0].trussNumber}&setFruits=${G1Filter1Plant2Truss6[0].setFruits}&setFlowers=${G1Filter1Plant2Truss6[0].setFlowers}&pruningNumber=${G1Filter1Plant2Truss6[0].pruningNumber}&fruitLoad=${G1Filter1Plant2Truss6[0].fruitLoad}&fruitDiameter=${G1Filter1Plant2Truss6[0].fruitDiameter}&pruningFlower=${G1Filter1Plant2Truss6[0].pruneFlowering}&floweringTruss=${G1Filter1Plant2Truss6[0].floweringTrussss}&pruningSet=${G1Filter1Plant2Truss6[0].prunSetting}&settingTruss=${G1Filter1Plant2Truss6[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant2Truss6[0].pruningHar}&harvestTruss=${G1Filter1Plant2Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url154);

                                  fetch(url154, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1Filter1Plant2Truss7.length) {

                                        const scriptUrl155 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url155 = `${scriptUrl155}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant2Truss7[0].plantNumber}&trussNumber=${G1Filter1Plant2Truss7[0].trussNumber}&setFruits=${G1Filter1Plant2Truss7[0].setFruits}&setFlowers=${G1Filter1Plant2Truss7[0].setFlowers}&pruningNumber=${G1Filter1Plant2Truss7[0].pruningNumber}&fruitLoad=${G1Filter1Plant2Truss7[0].fruitLoad}&fruitDiameter=${G1Filter1Plant2Truss7[0].fruitDiameter}&pruningFlower=${G1Filter1Plant2Truss7[0].pruneFlowering}&floweringTruss=${G1Filter1Plant2Truss7[0].floweringTrussss}&pruningSet=${G1Filter1Plant2Truss7[0].prunSetting}&settingTruss=${G1Filter1Plant2Truss7[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant2Truss7[0].pruningHar}&harvestTruss=${G1Filter1Plant2Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url155);

                                        fetch(url155, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1Filter1Plant2Truss8.length) {

                                              const scriptUrl156 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url156 = `${scriptUrl156}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant2Truss8[0].plantNumber}&trussNumber=${G1Filter1Plant2Truss8[0].trussNumber}&setFruits=${G1Filter1Plant2Truss8[0].setFruits}&setFlowers=${G1Filter1Plant2Truss8[0].setFlowers}&pruningNumber=${G1Filter1Plant2Truss8[0].pruningNumber}&fruitLoad=${G1Filter1Plant2Truss8[0].fruitLoad}&fruitDiameter=${G1Filter1Plant2Truss8[0].fruitDiameter}&pruningFlower=${G1Filter1Plant2Truss8[0].pruneFlowering}&floweringTruss=${G1Filter1Plant2Truss8[0].floweringTrussss}&pruningSet=${G1Filter1Plant2Truss8[0].prunSetting}&settingTruss=${G1Filter1Plant2Truss8[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant2Truss8[0].pruningHar}&harvestTruss=${G1Filter1Plant2Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url156);

                                              fetch(url156, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1Filter1Plant2Truss9.length) {

                                                    const scriptUrl157 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url157 = `${scriptUrl157}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant2Truss9[0].plantNumber}&trussNumber=${G1Filter1Plant2Truss9[0].trussNumber}&setFruits=${G1Filter1Plant2Truss9[0].setFruits}&setFlowers=${G1Filter1Plant2Truss9[0].setFlowers}&pruningNumber=${G1Filter1Plant2Truss9[0].pruningNumber}&fruitLoad=${G1Filter1Plant2Truss9[0].fruitLoad}&fruitDiameter=${G1Filter1Plant2Truss9[0].fruitDiameter}&pruningFlower=${G1Filter1Plant2Truss9[0].pruneFlowering}&floweringTruss=${G1Filter1Plant2Truss9[0].floweringTrussss}&pruningSet=${G1Filter1Plant2Truss9[0].prunSetting}&settingTruss=${G1Filter1Plant2Truss9[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant2Truss9[0].pruningHar}&harvestTruss=${G1Filter1Plant2Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url157);

                                                    fetch(url157, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1Filter1Plant2Truss0.length) {

                                                          const scriptUrl158 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url158 = `${scriptUrl158}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant2Truss0[0].plantNumber}&trussNumber=${G1Filter1Plant2Truss0[0].trussNumber}&setFruits=${G1Filter1Plant2Truss0[0].setFruits}&setFlowers=${G1Filter1Plant2Truss0[0].setFlowers}&pruningNumber=${G1Filter1Plant2Truss0[0].pruningNumber}&fruitLoad=${G1Filter1Plant2Truss0[0].fruitLoad}&fruitDiameter=${G1Filter1Plant2Truss0[0].fruitDiameter}&pruningFlower=${G1Filter1Plant2Truss0[0].pruneFlowering}&floweringTruss=${G1Filter1Plant2Truss0[0].floweringTrussss}&pruningSet=${G1Filter1Plant2Truss0[0].prunSetting}&settingTruss=${G1Filter1Plant2Truss0[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant2Truss0[0].pruningHar}&harvestTruss=${G1Filter1Plant2Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url158);

                                                          fetch(url158, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow2Plant3Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow2Plant3Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow2Plant3Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow2Plant3Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow2Plant3Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow2Plant3Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow2Plant3Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow2Plant3Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow2Plant3Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow2Plant3Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow2Plant3Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow2Plant3Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow2Plant3Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow2Plant3Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow2Plant3Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow2Plant3Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow2Plant3Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow2Plant3Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow2Plant3Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow2Plant3Trusses()
      }




    });


  }

  sendRow2Plant3Trusses = () => {

    this.setState({ isLoading: true })


    //INITIALIZATION G1 MERLICE ROW 85/86 PLANT 3
    let G1Filter1Plant3Truss1 = []
    let G1Filter1Plant3Truss2 = []
    let G1Filter1Plant3Truss3 = []
    let G1Filter1Plant3Truss4 = []
    let G1Filter1Plant3Truss5 = []
    let G1Filter1Plant3Truss6 = []
    let G1Filter1Plant3Truss7 = []
    let G1Filter1Plant3Truss8 = []
    let G1Filter1Plant3Truss9 = []
    let G1Filter1Plant3Truss0 = []
    //END

    //GER 1 Merlice/ Plant 3/ 85-86/ Truss Number 1-10

    G1Filter1Plant3Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1Filter1Plant3Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1Filter1Plant3Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1Filter1Plant3Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1Filter1Plant3Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1Filter1Plant3Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1Filter1Plant3Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1Filter1Plant3Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1Filter1Plant3Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1Filter1Plant3Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl159 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url159 = `${scriptUrl159}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant3Truss1[0].plantNumber}&trussNumber=${G1Filter1Plant3Truss1[0].trussNumber}&setFruits=${G1Filter1Plant3Truss1[0].setFruits}&setFlowers=${G1Filter1Plant3Truss1[0].setFlowers}&pruningNumber=${G1Filter1Plant3Truss1[0].pruningNumber}&fruitLoad=${G1Filter1Plant3Truss1[0].fruitLoad}&fruitDiameter=${G1Filter1Plant3Truss1[0].fruitDiameter}&pruningFlower=${G1Filter1Plant3Truss1[0].pruneFlowering}&floweringTruss=${G1Filter1Plant3Truss1[0].floweringTrussss}&pruningSet=${G1Filter1Plant3Truss1[0].prunSetting}&settingTruss=${G1Filter1Plant3Truss1[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant3Truss1[0].pruningHar}&harvestTruss=${G1Filter1Plant3Truss1[0].harvestTruss}`;

    console.log("URL : " + url159);

    fetch(url159, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1Filter1Plant3Truss2.length) {

          const scriptUrl160 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url160 = `${scriptUrl160}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant3Truss2[0].plantNumber}&trussNumber=${G1Filter1Plant3Truss2[0].trussNumber}&setFruits=${G1Filter1Plant3Truss2[0].setFruits}&setFlowers=${G1Filter1Plant3Truss2[0].setFlowers}&pruningNumber=${G1Filter1Plant3Truss2[0].pruningNumber}&fruitLoad=${G1Filter1Plant3Truss2[0].fruitLoad}&fruitDiameter=${G1Filter1Plant3Truss2[0].fruitDiameter}&pruningFlower=${G1Filter1Plant3Truss2[0].pruneFlowering}&floweringTruss=${G1Filter1Plant3Truss2[0].floweringTrussss}&pruningSet=${G1Filter1Plant3Truss2[0].prunSetting}&settingTruss=${G1Filter1Plant3Truss2[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant3Truss2[0].pruningHar}&harvestTruss=${G1Filter1Plant3Truss2[0].harvestTruss}`;

          console.log("URL : " + url160);

          fetch(url160, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1Filter1Plant3Truss3.length) {

                const scriptUrl161 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url161 = `${scriptUrl161}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant3Truss3[0].plantNumber}&trussNumber=${G1Filter1Plant3Truss3[0].trussNumber}&setFruits=${G1Filter1Plant3Truss3[0].setFruits}&setFlowers=${G1Filter1Plant3Truss3[0].setFlowers}&pruningNumber=${G1Filter1Plant3Truss3[0].pruningNumber}&fruitLoad=${G1Filter1Plant3Truss3[0].fruitLoad}&fruitDiameter=${G1Filter1Plant3Truss3[0].fruitDiameter}&pruningFlower=${G1Filter1Plant3Truss3[0].pruneFlowering}&floweringTruss=${G1Filter1Plant3Truss3[0].floweringTrussss}&pruningSet=${G1Filter1Plant3Truss3[0].prunSetting}&settingTruss=${G1Filter1Plant3Truss3[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant3Truss3[0].pruningHar}&harvestTruss=${G1Filter1Plant3Truss3[0].harvestTruss}`;

                console.log("URL : " + url161);

                fetch(url161, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1Filter1Plant3Truss4.length) {

                      const scriptUrl162 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url162 = `${scriptUrl162}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant3Truss4[0].plantNumber}&trussNumber=${G1Filter1Plant3Truss4[0].trussNumber}&setFruits=${G1Filter1Plant3Truss4[0].setFruits}&setFlowers=${G1Filter1Plant3Truss4[0].setFlowers}&pruningNumber=${G1Filter1Plant3Truss4[0].pruningNumber}&fruitLoad=${G1Filter1Plant3Truss4[0].fruitLoad}&fruitDiameter=${G1Filter1Plant3Truss4[0].fruitDiameter}&pruningFlower=${G1Filter1Plant3Truss4[0].pruneFlowering}&floweringTruss=${G1Filter1Plant3Truss4[0].floweringTrussss}&pruningSet=${G1Filter1Plant3Truss4[0].prunSetting}&settingTruss=${G1Filter1Plant3Truss4[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant3Truss4[0].pruningHar}&harvestTruss=${G1Filter1Plant3Truss4[0].harvestTruss}`;

                      console.log("URL : " + url162);

                      fetch(url162, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1Filter1Plant3Truss5.length) {

                            const scriptUrl163 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url163 = `${scriptUrl163}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant3Truss5[0].plantNumber}&trussNumber=${G1Filter1Plant3Truss5[0].trussNumber}&setFruits=${G1Filter1Plant3Truss5[0].setFruits}&setFlowers=${G1Filter1Plant3Truss5[0].setFlowers}&pruningNumber=${G1Filter1Plant3Truss5[0].pruningNumber}&fruitLoad=${G1Filter1Plant3Truss5[0].fruitLoad}&fruitDiameter=${G1Filter1Plant3Truss5[0].fruitDiameter}&pruningFlower=${G1Filter1Plant3Truss5[0].pruneFlowering}&floweringTruss=${G1Filter1Plant3Truss5[0].floweringTrussss}&pruningSet=${G1Filter1Plant3Truss5[0].prunSetting}&settingTruss=${G1Filter1Plant3Truss5[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant3Truss5[0].pruningHar}&harvestTruss=${G1Filter1Plant3Truss5[0].harvestTruss}`;

                            console.log("URL : " + url163);

                            fetch(url163, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1Filter1Plant3Truss6.length) {

                                  const scriptUrl164 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url164 = `${scriptUrl164}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant3Truss6[0].plantNumber}&trussNumber=${G1Filter1Plant3Truss6[0].trussNumber}&setFruits=${G1Filter1Plant3Truss6[0].setFruits}&setFlowers=${G1Filter1Plant3Truss6[0].setFlowers}&pruningNumber=${G1Filter1Plant3Truss6[0].pruningNumber}&fruitLoad=${G1Filter1Plant3Truss6[0].fruitLoad}&fruitDiameter=${G1Filter1Plant3Truss6[0].fruitDiameter}&pruningFlower=${G1Filter1Plant3Truss6[0].pruneFlowering}&floweringTruss=${G1Filter1Plant3Truss6[0].floweringTrussss}&pruningSet=${G1Filter1Plant3Truss6[0].prunSetting}&settingTruss=${G1Filter1Plant3Truss6[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant3Truss6[0].pruningHar}&harvestTruss=${G1Filter1Plant3Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url164);

                                  fetch(url164, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1Filter1Plant3Truss7.length) {

                                        const scriptUrl165 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url165 = `${scriptUrl165}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant3Truss7[0].plantNumber}&trussNumber=${G1Filter1Plant3Truss7[0].trussNumber}&setFruits=${G1Filter1Plant3Truss7[0].setFruits}&setFlowers=${G1Filter1Plant3Truss7[0].setFlowers}&pruningNumber=${G1Filter1Plant3Truss7[0].pruningNumber}&fruitLoad=${G1Filter1Plant3Truss7[0].fruitLoad}&fruitDiameter=${G1Filter1Plant3Truss7[0].fruitDiameter}&pruningFlower=${G1Filter1Plant3Truss7[0].pruneFlowering}&floweringTruss=${G1Filter1Plant3Truss7[0].floweringTrussss}&pruningSet=${G1Filter1Plant3Truss7[0].prunSetting}&settingTruss=${G1Filter1Plant3Truss7[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant3Truss7[0].pruningHar}&harvestTruss=${G1Filter1Plant3Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url165);

                                        fetch(url165, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1Filter1Plant3Truss8.length) {

                                              const scriptUrl166 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url166 = `${scriptUrl166}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant3Truss8[0].plantNumber}&trussNumber=${G1Filter1Plant3Truss8[0].trussNumber}&setFruits=${G1Filter1Plant3Truss8[0].setFruits}&setFlowers=${G1Filter1Plant3Truss8[0].setFlowers}&pruningNumber=${G1Filter1Plant3Truss8[0].pruningNumber}&fruitLoad=${G1Filter1Plant3Truss8[0].fruitLoad}&fruitDiameter=${G1Filter1Plant3Truss8[0].fruitDiameter}&pruningFlower=${G1Filter1Plant3Truss8[0].pruneFlowering}&floweringTruss=${G1Filter1Plant3Truss8[0].floweringTrussss}&pruningSet=${G1Filter1Plant3Truss8[0].prunSetting}&settingTruss=${G1Filter1Plant3Truss8[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant3Truss8[0].pruningHar}&harvestTruss=${G1Filter1Plant3Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url166);

                                              fetch(url166, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1Filter1Plant3Truss9.length) {

                                                    const scriptUrl167 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url167 = `${scriptUrl167}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant3Truss9[0].plantNumber}&trussNumber=${G1Filter1Plant3Truss9[0].trussNumber}&setFruits=${G1Filter1Plant3Truss9[0].setFruits}&setFlowers=${G1Filter1Plant3Truss9[0].setFlowers}&pruningNumber=${G1Filter1Plant3Truss9[0].pruningNumber}&fruitLoad=${G1Filter1Plant3Truss9[0].fruitLoad}&fruitDiameter=${G1Filter1Plant3Truss9[0].fruitDiameter}&pruningFlower=${G1Filter1Plant3Truss9[0].pruneFlowering}&floweringTruss=${G1Filter1Plant3Truss9[0].floweringTrussss}&pruningSet=${G1Filter1Plant3Truss9[0].prunSetting}&settingTruss=${G1Filter1Plant3Truss9[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant3Truss9[0].pruningHar}&harvestTruss=${G1Filter1Plant3Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url167);

                                                    fetch(url167, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1Filter1Plant3Truss0.length) {

                                                          const scriptUrl168 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url168 = `${scriptUrl168}?
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant3Truss0[0].plantNumber}&trussNumber=${G1Filter1Plant3Truss0[0].trussNumber}&setFruits=${G1Filter1Plant3Truss0[0].setFruits}&setFlowers=${G1Filter1Plant3Truss0[0].setFlowers}&pruningNumber=${G1Filter1Plant3Truss0[0].pruningNumber}&fruitLoad=${G1Filter1Plant3Truss0[0].fruitLoad}&fruitDiameter=${G1Filter1Plant3Truss0[0].fruitDiameter}&pruningFlower=${G1Filter1Plant3Truss0[0].pruneFlowering}&floweringTruss=${G1Filter1Plant3Truss0[0].floweringTrussss}&pruningSet=${G1Filter1Plant3Truss0[0].prunSetting}&settingTruss=${G1Filter1Plant3Truss0[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant3Truss0[0].pruningHar}&harvestTruss=${G1Filter1Plant3Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url168);

                                                          fetch(url168, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow2Plant4Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow2Plant4Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow2Plant4Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow2Plant4Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow2Plant4Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow2Plant4Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow2Plant4Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow2Plant4Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow2Plant4Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow2Plant4Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow2Plant4Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow2Plant4Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow2Plant4Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow2Plant4Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow2Plant4Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow2Plant4Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow2Plant4Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow2Plant4Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow2Plant4Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow2Plant4Trusses()
      }




    });


  }

  sendRow2Plant4Trusses = () => {

    this.setState({ isLoading: true })


    //INITIALIZATION G1 MERLICE ROW 85/86 PLANT 4
    let G1Filter1Plant4Truss1 = []
    let G1Filter1Plant4Truss2 = []
    let G1Filter1Plant4Truss3 = []
    let G1Filter1Plant4Truss4 = []
    let G1Filter1Plant4Truss5 = []
    let G1Filter1Plant4Truss6 = []
    let G1Filter1Plant4Truss7 = []
    let G1Filter1Plant4Truss8 = []
    let G1Filter1Plant4Truss9 = []
    let G1Filter1Plant4Truss0 = []
    //END

    //GER 1 Merlice/ Plant 4/ 85-86/ Truss Number 1-10

    G1Filter1Plant4Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1Filter1Plant4Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1Filter1Plant4Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1Filter1Plant4Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1Filter1Plant4Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1Filter1Plant4Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1Filter1Plant4Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1Filter1Plant4Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1Filter1Plant4Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1Filter1Plant4Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '4' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl169 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url169 = `${scriptUrl169}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant4Truss1[0].plantNumber}&trussNumber=${G1Filter1Plant4Truss1[0].trussNumber}&setFruits=${G1Filter1Plant4Truss1[0].setFruits}&setFlowers=${G1Filter1Plant4Truss1[0].setFlowers}&pruningNumber=${G1Filter1Plant4Truss1[0].pruningNumber}&fruitLoad=${G1Filter1Plant4Truss1[0].fruitLoad}&fruitDiameter=${G1Filter1Plant4Truss1[0].fruitDiameter}&pruningFlower=${G1Filter1Plant4Truss1[0].pruneFlowering}&floweringTruss=${G1Filter1Plant4Truss1[0].floweringTrussss}&pruningSet=${G1Filter1Plant4Truss1[0].prunSetting}&settingTruss=${G1Filter1Plant4Truss1[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant4Truss1[0].pruningHar}&harvestTruss=${G1Filter1Plant4Truss1[0].harvestTruss}`;

    console.log("URL : " + url169);

    fetch(url169, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1Filter1Plant4Truss2.length) {

          const scriptUrl170 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url170 = `${scriptUrl170}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant4Truss2[0].plantNumber}&trussNumber=${G1Filter1Plant4Truss2[0].trussNumber}&setFruits=${G1Filter1Plant4Truss2[0].setFruits}&setFlowers=${G1Filter1Plant4Truss2[0].setFlowers}&pruningNumber=${G1Filter1Plant4Truss2[0].pruningNumber}&fruitLoad=${G1Filter1Plant4Truss2[0].fruitLoad}&fruitDiameter=${G1Filter1Plant4Truss2[0].fruitDiameter}&pruningFlower=${G1Filter1Plant4Truss2[0].pruneFlowering}&floweringTruss=${G1Filter1Plant4Truss2[0].floweringTrussss}&pruningSet=${G1Filter1Plant4Truss2[0].prunSetting}&settingTruss=${G1Filter1Plant4Truss2[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant4Truss2[0].pruningHar}&harvestTruss=${G1Filter1Plant4Truss2[0].harvestTruss}`;

          console.log("URL : " + url170);

          fetch(url170, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1Filter1Plant4Truss3.length) {

                const scriptUrl171 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url171 = `${scriptUrl171}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant4Truss3[0].plantNumber}&trussNumber=${G1Filter1Plant4Truss3[0].trussNumber}&setFruits=${G1Filter1Plant4Truss3[0].setFruits}&setFlowers=${G1Filter1Plant4Truss3[0].setFlowers}&pruningNumber=${G1Filter1Plant4Truss3[0].pruningNumber}&fruitLoad=${G1Filter1Plant4Truss3[0].fruitLoad}&fruitDiameter=${G1Filter1Plant4Truss3[0].fruitDiameter}&pruningFlower=${G1Filter1Plant4Truss3[0].pruneFlowering}&floweringTruss=${G1Filter1Plant4Truss3[0].floweringTrussss}&pruningSet=${G1Filter1Plant4Truss3[0].prunSetting}&settingTruss=${G1Filter1Plant4Truss3[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant4Truss3[0].pruningHar}&harvestTruss=${G1Filter1Plant4Truss3[0].harvestTruss}`;

                console.log("URL : " + url171);

                fetch(url171, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1Filter1Plant4Truss4.length) {

                      const scriptUrl172 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url172 = `${scriptUrl172}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant4Truss4[0].plantNumber}&trussNumber=${G1Filter1Plant4Truss4[0].trussNumber}&setFruits=${G1Filter1Plant4Truss4[0].setFruits}&setFlowers=${G1Filter1Plant4Truss4[0].setFlowers}&pruningNumber=${G1Filter1Plant4Truss4[0].pruningNumber}&fruitLoad=${G1Filter1Plant4Truss4[0].fruitLoad}&fruitDiameter=${G1Filter1Plant4Truss4[0].fruitDiameter}&pruningFlower=${G1Filter1Plant4Truss4[0].pruneFlowering}&floweringTruss=${G1Filter1Plant4Truss4[0].floweringTrussss}&pruningSet=${G1Filter1Plant4Truss4[0].prunSetting}&settingTruss=${G1Filter1Plant4Truss4[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant4Truss4[0].pruningHar}&harvestTruss=${G1Filter1Plant4Truss4[0].harvestTruss}`;

                      console.log("URL : " + url172);

                      fetch(url172, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1Filter1Plant4Truss5.length) {

                            const scriptUrl173 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url173 = `${scriptUrl173}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant4Truss5[0].plantNumber}&trussNumber=${G1Filter1Plant4Truss5[0].trussNumber}&setFruits=${G1Filter1Plant4Truss5[0].setFruits}&setFlowers=${G1Filter1Plant4Truss5[0].setFlowers}&pruningNumber=${G1Filter1Plant4Truss5[0].pruningNumber}&fruitLoad=${G1Filter1Plant4Truss5[0].fruitLoad}&fruitDiameter=${G1Filter1Plant4Truss5[0].fruitDiameter}&pruningFlower=${G1Filter1Plant4Truss5[0].pruneFlowering}&floweringTruss=${G1Filter1Plant4Truss5[0].floweringTrussss}&pruningSet=${G1Filter1Plant4Truss5[0].prunSetting}&settingTruss=${G1Filter1Plant4Truss5[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant4Truss5[0].pruningHar}&harvestTruss=${G1Filter1Plant4Truss5[0].harvestTruss}`;

                            console.log("URL : " + url173);

                            fetch(url173, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1Filter1Plant4Truss6.length) {


                                  const scriptUrl174 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url174 = `${scriptUrl174}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant4Truss6[0].plantNumber}&trussNumber=${G1Filter1Plant4Truss6[0].trussNumber}&setFruits=${G1Filter1Plant4Truss6[0].setFruits}&setFlowers=${G1Filter1Plant4Truss6[0].setFlowers}&pruningNumber=${G1Filter1Plant4Truss6[0].pruningNumber}&fruitLoad=${G1Filter1Plant4Truss6[0].fruitLoad}&fruitDiameter=${G1Filter1Plant4Truss6[0].fruitDiameter}&pruningFlower=${G1Filter1Plant4Truss6[0].pruneFlowering}&floweringTruss=${G1Filter1Plant4Truss6[0].floweringTrussss}&pruningSet=${G1Filter1Plant4Truss6[0].prunSetting}&settingTruss=${G1Filter1Plant4Truss6[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant4Truss6[0].pruningHar}&harvestTruss=${G1Filter1Plant4Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url174);

                                  fetch(url174, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1Filter1Plant4Truss7.length) {

                                        const scriptUrl175 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url175 = `${scriptUrl175}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant4Truss7[0].plantNumber}&trussNumber=${G1Filter1Plant4Truss7[0].trussNumber}&setFruits=${G1Filter1Plant4Truss7[0].setFruits}&setFlowers=${G1Filter1Plant4Truss7[0].setFlowers}&pruningNumber=${G1Filter1Plant4Truss7[0].pruningNumber}&fruitLoad=${G1Filter1Plant4Truss7[0].fruitLoad}&fruitDiameter=${G1Filter1Plant4Truss7[0].fruitDiameter}&pruningFlower=${G1Filter1Plant4Truss7[0].pruneFlowering}&floweringTruss=${G1Filter1Plant4Truss7[0].floweringTrussss}&pruningSet=${G1Filter1Plant4Truss7[0].prunSetting}&settingTruss=${G1Filter1Plant4Truss7[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant4Truss7[0].pruningHar}&harvestTruss=${G1Filter1Plant4Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url175);

                                        fetch(url175, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1Filter1Plant4Truss8.length) {

                                              const scriptUrl176 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url176 = `${scriptUrl176}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant4Truss8[0].plantNumber}&trussNumber=${G1Filter1Plant4Truss8[0].trussNumber}&setFruits=${G1Filter1Plant4Truss8[0].setFruits}&setFlowers=${G1Filter1Plant4Truss8[0].setFlowers}&pruningNumber=${G1Filter1Plant4Truss8[0].pruningNumber}&fruitLoad=${G1Filter1Plant4Truss8[0].fruitLoad}&fruitDiameter=${G1Filter1Plant4Truss8[0].fruitDiameter}&pruningFlower=${G1Filter1Plant4Truss8[0].pruneFlowering}&floweringTruss=${G1Filter1Plant4Truss8[0].floweringTrussss}&pruningSet=${G1Filter1Plant4Truss8[0].prunSetting}&settingTruss=${G1Filter1Plant4Truss8[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant4Truss8[0].pruningHar}&harvestTruss=${G1Filter1Plant4Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url176);

                                              fetch(url176, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1Filter1Plant4Truss9.length) {

                                                    const scriptUrl177 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url177 = `${scriptUrl177}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant4Truss9[0].plantNumber}&trussNumber=${G1Filter1Plant4Truss9[0].trussNumber}&setFruits=${G1Filter1Plant4Truss9[0].setFruits}&setFlowers=${G1Filter1Plant4Truss9[0].setFlowers}&pruningNumber=${G1Filter1Plant4Truss9[0].pruningNumber}&fruitLoad=${G1Filter1Plant4Truss9[0].fruitLoad}&fruitDiameter=${G1Filter1Plant4Truss9[0].fruitDiameter}&pruningFlower=${G1Filter1Plant4Truss9[0].pruneFlowering}&floweringTruss=${G1Filter1Plant4Truss9[0].floweringTrussss}&pruningSet=${G1Filter1Plant4Truss9[0].prunSetting}&settingTruss=${G1Filter1Plant4Truss9[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant4Truss9[0].pruningHar}&harvestTruss=${G1Filter1Plant4Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url177);

                                                    fetch(url177, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1Filter1Plant4Truss0.length) {

                                                          const scriptUrl178 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url178 = `${scriptUrl178}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant4Truss0[0].plantNumber}&trussNumber=${G1Filter1Plant4Truss0[0].trussNumber}&setFruits=${G1Filter1Plant4Truss0[0].setFruits}&setFlowers=${G1Filter1Plant4Truss0[0].setFlowers}&pruningNumber=${G1Filter1Plant4Truss0[0].pruningNumber}&fruitLoad=${G1Filter1Plant4Truss0[0].fruitLoad}&fruitDiameter=${G1Filter1Plant4Truss0[0].fruitDiameter}&pruningFlower=${G1Filter1Plant4Truss0[0].pruneFlowering}&floweringTruss=${G1Filter1Plant4Truss0[0].floweringTrussss}&pruningSet=${G1Filter1Plant4Truss0[0].prunSetting}&settingTruss=${G1Filter1Plant4Truss0[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant4Truss0[0].pruningHar}&harvestTruss=${G1Filter1Plant4Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url178);

                                                          fetch(url178, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow2Plant5Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow2Plant5Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow2Plant5Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow2Plant5Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow2Plant5Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow2Plant5Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow2Plant5Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow2Plant5Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow2Plant5Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow2Plant5Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow2Plant5Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow2Plant5Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow2Plant5Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow2Plant5Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow2Plant5Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow2Plant5Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow2Plant5Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow2Plant5Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow2Plant5Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow2Plant5Trusses()
      }




    });

  }

  sendRow2Plant5Trusses = () => {

    this.setState({ isLoading: true })


    //INITIALIZATION G1 MERLICE ROW 85/86 PLANT 5
    let G1Filter1Plant5Truss1 = []
    let G1Filter1Plant5Truss2 = []
    let G1Filter1Plant5Truss3 = []
    let G1Filter1Plant5Truss4 = []
    let G1Filter1Plant5Truss5 = []
    let G1Filter1Plant5Truss6 = []
    let G1Filter1Plant5Truss7 = []
    let G1Filter1Plant5Truss8 = []
    let G1Filter1Plant5Truss9 = []
    let G1Filter1Plant5Truss0 = []
    //END

    //GER 1 Merlice/ Plant 5/ 85-86/ Truss Number 1-10

    G1Filter1Plant5Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1Filter1Plant5Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1Filter1Plant5Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1Filter1Plant5Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1Filter1Plant5Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1Filter1Plant5Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1Filter1Plant5Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1Filter1Plant5Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1Filter1Plant5Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1Filter1Plant5Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl179 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url179 = `${scriptUrl179}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant5Truss1[0].plantNumber}&trussNumber=${G1Filter1Plant5Truss1[0].trussNumber}&setFruits=${G1Filter1Plant5Truss1[0].setFruits}&setFlowers=${G1Filter1Plant5Truss1[0].setFlowers}&pruningNumber=${G1Filter1Plant5Truss1[0].pruningNumber}&fruitLoad=${G1Filter1Plant5Truss1[0].fruitLoad}&fruitDiameter=${G1Filter1Plant5Truss1[0].fruitDiameter}&pruningFlower=${G1Filter1Plant5Truss1[0].pruneFlowering}&floweringTruss=${G1Filter1Plant5Truss1[0].floweringTrussss}&pruningSet=${G1Filter1Plant5Truss1[0].prunSetting}&settingTruss=${G1Filter1Plant5Truss1[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant5Truss1[0].pruningHar}&harvestTruss=${G1Filter1Plant5Truss1[0].harvestTruss}`;

    console.log("URL : " + url179);

    fetch(url179, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1Filter1Plant5Truss2.length) {

          const scriptUrl180 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url180 = `${scriptUrl180}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant5Truss2[0].plantNumber}&trussNumber=${G1Filter1Plant5Truss2[0].trussNumber}&setFruits=${G1Filter1Plant5Truss2[0].setFruits}&setFlowers=${G1Filter1Plant5Truss2[0].setFlowers}&pruningNumber=${G1Filter1Plant5Truss2[0].pruningNumber}&fruitLoad=${G1Filter1Plant5Truss2[0].fruitLoad}&fruitDiameter=${G1Filter1Plant5Truss2[0].fruitDiameter}&pruningFlower=${G1Filter1Plant5Truss2[0].pruneFlowering}&floweringTruss=${G1Filter1Plant5Truss2[0].floweringTrussss}&pruningSet=${G1Filter1Plant5Truss2[0].prunSetting}&settingTruss=${G1Filter1Plant5Truss2[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant5Truss2[0].pruningHar}&harvestTruss=${G1Filter1Plant5Truss2[0].harvestTruss}`;

          console.log("URL : " + url180);

          fetch(url180, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1Filter1Plant5Truss3.length) {

                const scriptUrl181 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url181 = `${scriptUrl181}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant5Truss3[0].plantNumber}&trussNumber=${G1Filter1Plant5Truss3[0].trussNumber}&setFruits=${G1Filter1Plant5Truss3[0].setFruits}&setFlowers=${G1Filter1Plant5Truss3[0].setFlowers}&pruningNumber=${G1Filter1Plant5Truss3[0].pruningNumber}&fruitLoad=${G1Filter1Plant5Truss3[0].fruitLoad}&fruitDiameter=${G1Filter1Plant5Truss3[0].fruitDiameter}&pruningFlower=${G1Filter1Plant5Truss3[0].pruneFlowering}&floweringTruss=${G1Filter1Plant5Truss3[0].floweringTrussss}&pruningSet=${G1Filter1Plant5Truss3[0].prunSetting}&settingTruss=${G1Filter1Plant5Truss3[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant5Truss3[0].pruningHar}&harvestTruss=${G1Filter1Plant5Truss3[0].harvestTruss}`;

                console.log("URL : " + url181);

                fetch(url181, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1Filter1Plant5Truss4.length) {

                      const scriptUrl182 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url182 = `${scriptUrl182}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant5Truss4[0].plantNumber}&trussNumber=${G1Filter1Plant5Truss4[0].trussNumber}&setFruits=${G1Filter1Plant5Truss4[0].setFruits}&setFlowers=${G1Filter1Plant5Truss4[0].setFlowers}&pruningNumber=${G1Filter1Plant5Truss4[0].pruningNumber}&fruitLoad=${G1Filter1Plant5Truss4[0].fruitLoad}&fruitDiameter=${G1Filter1Plant5Truss4[0].fruitDiameter}&pruningFlower=${G1Filter1Plant5Truss4[0].pruneFlowering}&floweringTruss=${G1Filter1Plant5Truss4[0].floweringTrussss}&pruningSet=${G1Filter1Plant5Truss4[0].prunSetting}&settingTruss=${G1Filter1Plant5Truss4[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant5Truss4[0].pruningHar}&harvestTruss=${G1Filter1Plant5Truss4[0].harvestTruss}`;

                      console.log("URL : " + url182);

                      fetch(url182, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1Filter1Plant5Truss5.length) {

                            const scriptUrl183 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url183 = `${scriptUrl183}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant5Truss5[0].plantNumber}&trussNumber=${G1Filter1Plant5Truss5[0].trussNumber}&setFruits=${G1Filter1Plant5Truss5[0].setFruits}&setFlowers=${G1Filter1Plant5Truss5[0].setFlowers}&pruningNumber=${G1Filter1Plant5Truss5[0].pruningNumber}&fruitLoad=${G1Filter1Plant5Truss5[0].fruitLoad}&fruitDiameter=${G1Filter1Plant5Truss5[0].fruitDiameter}&pruningFlower=${G1Filter1Plant5Truss5[0].pruneFlowering}&floweringTruss=${G1Filter1Plant5Truss5[0].floweringTrussss}&pruningSet=${G1Filter1Plant5Truss5[0].prunSetting}&settingTruss=${G1Filter1Plant5Truss5[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant5Truss5[0].pruningHar}&harvestTruss=${G1Filter1Plant5Truss5[0].harvestTruss}`;

                            console.log("URL : " + url183);

                            fetch(url183, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1Filter1Plant5Truss6.length) {

                                  const scriptUrl184 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url184 = `${scriptUrl184}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant5Truss6[0].plantNumber}&trussNumber=${G1Filter1Plant5Truss6[0].trussNumber}&setFruits=${G1Filter1Plant5Truss6[0].setFruits}&setFlowers=${G1Filter1Plant5Truss6[0].setFlowers}&pruningNumber=${G1Filter1Plant5Truss6[0].pruningNumber}&fruitLoad=${G1Filter1Plant5Truss6[0].fruitLoad}&fruitDiameter=${G1Filter1Plant5Truss6[0].fruitDiameter}&pruningFlower=${G1Filter1Plant5Truss6[0].pruneFlowering}&floweringTruss=${G1Filter1Plant5Truss6[0].floweringTrussss}&pruningSet=${G1Filter1Plant5Truss6[0].prunSetting}&settingTruss=${G1Filter1Plant5Truss6[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant5Truss6[0].pruningHar}&harvestTruss=${G1Filter1Plant5Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url184);

                                  fetch(url184, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1Filter1Plant5Truss7.length) {

                                        const scriptUrl185 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url185 = `${scriptUrl185}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant5Truss7[0].plantNumber}&trussNumber=${G1Filter1Plant5Truss7[0].trussNumber}&setFruits=${G1Filter1Plant5Truss7[0].setFruits}&setFlowers=${G1Filter1Plant5Truss7[0].setFlowers}&pruningNumber=${G1Filter1Plant5Truss7[0].pruningNumber}&fruitLoad=${G1Filter1Plant5Truss7[0].fruitLoad}&fruitDiameter=${G1Filter1Plant5Truss7[0].fruitDiameter}&pruningFlower=${G1Filter1Plant5Truss7[0].pruneFlowering}&floweringTruss=${G1Filter1Plant5Truss7[0].floweringTrussss}&pruningSet=${G1Filter1Plant5Truss7[0].prunSetting}&settingTruss=${G1Filter1Plant5Truss7[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant5Truss7[0].pruningHar}&harvestTruss=${G1Filter1Plant5Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url185);

                                        fetch(url185, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1Filter1Plant5Truss8.length) {

                                              const scriptUrl186 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url186 = `${scriptUrl186}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant5Truss8[0].plantNumber}&trussNumber=${G1Filter1Plant5Truss8[0].trussNumber}&setFruits=${G1Filter1Plant5Truss8[0].setFruits}&setFlowers=${G1Filter1Plant5Truss8[0].setFlowers}&pruningNumber=${G1Filter1Plant5Truss8[0].pruningNumber}&fruitLoad=${G1Filter1Plant5Truss8[0].fruitLoad}&fruitDiameter=${G1Filter1Plant5Truss8[0].fruitDiameter}&pruningFlower=${G1Filter1Plant5Truss8[0].pruneFlowering}&floweringTruss=${G1Filter1Plant5Truss8[0].floweringTrussss}&pruningSet=${G1Filter1Plant5Truss8[0].prunSetting}&settingTruss=${G1Filter1Plant5Truss8[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant5Truss8[0].pruningHar}&harvestTruss=${G1Filter1Plant5Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url186);

                                              fetch(url186, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1Filter1Plant5Truss9.length) {

                                                    const scriptUrl187 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url187 = `${scriptUrl187}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant5Truss9[0].plantNumber}&trussNumber=${G1Filter1Plant5Truss9[0].trussNumber}&setFruits=${G1Filter1Plant5Truss9[0].setFruits}&setFlowers=${G1Filter1Plant5Truss9[0].setFlowers}&pruningNumber=${G1Filter1Plant5Truss9[0].pruningNumber}&fruitLoad=${G1Filter1Plant5Truss9[0].fruitLoad}&fruitDiameter=${G1Filter1Plant5Truss9[0].fruitDiameter}&pruningFlower=${G1Filter1Plant5Truss9[0].pruneFlowering}&floweringTruss=${G1Filter1Plant5Truss9[0].floweringTrussss}&pruningSet=${G1Filter1Plant5Truss9[0].prunSetting}&settingTruss=${G1Filter1Plant5Truss9[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant5Truss9[0].pruningHar}&harvestTruss=${G1Filter1Plant5Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url187);

                                                    fetch(url187, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1Filter1Plant5Truss0.length) {

                                                          const scriptUrl188 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url188 = `${scriptUrl188}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant5Truss0[0].plantNumber}&trussNumber=${G1Filter1Plant5Truss0[0].trussNumber}&setFruits=${G1Filter1Plant5Truss0[0].setFruits}&setFlowers=${G1Filter1Plant5Truss0[0].setFlowers}&pruningNumber=${G1Filter1Plant5Truss0[0].pruningNumber}&fruitLoad=${G1Filter1Plant5Truss0[0].fruitLoad}&fruitDiameter=${G1Filter1Plant5Truss0[0].fruitDiameter}&pruningFlower=${G1Filter1Plant5Truss0[0].pruneFlowering}&floweringTruss=${G1Filter1Plant5Truss0[0].floweringTrussss}&pruningSet=${G1Filter1Plant5Truss0[0].prunSetting}&settingTruss=${G1Filter1Plant5Truss0[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant5Truss0[0].pruningHar}&harvestTruss=${G1Filter1Plant5Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url188);

                                                          fetch(url188, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow2Plant6Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow2Plant6Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow2Plant6Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow2Plant6Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow2Plant6Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow2Plant6Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow2Plant6Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow2Plant6Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow2Plant6Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow2Plant6Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow2Plant6Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow2Plant6Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow2Plant6Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow2Plant6Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow2Plant6Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow2Plant6Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow2Plant6Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow2Plant6Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow2Plant6Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow2Plant6Trusses()
      }




    });


  }

  sendRow2Plant6Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 85/86 PLANT 6
    let G1Filter1Plant6Truss1 = []
    let G1Filter1Plant6Truss2 = []
    let G1Filter1Plant6Truss3 = []
    let G1Filter1Plant6Truss4 = []
    let G1Filter1Plant6Truss5 = []
    let G1Filter1Plant6Truss6 = []
    let G1Filter1Plant6Truss7 = []
    let G1Filter1Plant6Truss8 = []
    let G1Filter1Plant6Truss9 = []
    let G1Filter1Plant6Truss0 = []
    //END

    //GER 1 Merlice/ Plant 6/ 85-86/ Truss Number 1-10

    G1Filter1Plant6Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1Filter1Plant6Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1Filter1Plant6Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1Filter1Plant6Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1Filter1Plant6Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1Filter1Plant6Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1Filter1Plant6Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1Filter1Plant6Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1Filter1Plant6Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1Filter1Plant6Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl189 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url189 = `${scriptUrl189}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant6Truss1[0].plantNumber}&trussNumber=${G1Filter1Plant6Truss1[0].trussNumber}&setFruits=${G1Filter1Plant6Truss1[0].setFruits}&setFlowers=${G1Filter1Plant6Truss1[0].setFlowers}&pruningNumber=${G1Filter1Plant6Truss1[0].pruningNumber}&fruitLoad=${G1Filter1Plant6Truss1[0].fruitLoad}&fruitDiameter=${G1Filter1Plant6Truss1[0].fruitDiameter}&pruningFlower=${G1Filter1Plant6Truss1[0].pruneFlowering}&floweringTruss=${G1Filter1Plant6Truss1[0].floweringTrussss}&pruningSet=${G1Filter1Plant6Truss1[0].prunSetting}&settingTruss=${G1Filter1Plant6Truss1[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant6Truss1[0].pruningHar}&harvestTruss=${G1Filter1Plant6Truss1[0].harvestTruss}`;

    console.log("URL : " + url189);

    fetch(url189, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1Filter1Plant6Truss2.length) {


          const scriptUrl190 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url190 = `${scriptUrl190}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant6Truss2[0].plantNumber}&trussNumber=${G1Filter1Plant6Truss2[0].trussNumber}&setFruits=${G1Filter1Plant6Truss2[0].setFruits}&setFlowers=${G1Filter1Plant6Truss2[0].setFlowers}&pruningNumber=${G1Filter1Plant6Truss2[0].pruningNumber}&fruitLoad=${G1Filter1Plant6Truss2[0].fruitLoad}&fruitDiameter=${G1Filter1Plant6Truss2[0].fruitDiameter}&pruningFlower=${G1Filter1Plant6Truss2[0].pruneFlowering}&floweringTruss=${G1Filter1Plant6Truss2[0].floweringTrussss}&pruningSet=${G1Filter1Plant6Truss2[0].prunSetting}&settingTruss=${G1Filter1Plant6Truss2[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant6Truss2[0].pruningHar}&harvestTruss=${G1Filter1Plant6Truss2[0].harvestTruss}`;

          console.log("URL : " + url190);

          fetch(url190, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1Filter1Plant6Truss3.length) {

                const scriptUrl191 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url191 = `${scriptUrl191}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant6Truss3[0].plantNumber}&trussNumber=${G1Filter1Plant6Truss3[0].trussNumber}&setFruits=${G1Filter1Plant6Truss3[0].setFruits}&setFlowers=${G1Filter1Plant6Truss3[0].setFlowers}&pruningNumber=${G1Filter1Plant6Truss3[0].pruningNumber}&fruitLoad=${G1Filter1Plant6Truss3[0].fruitLoad}&fruitDiameter=${G1Filter1Plant6Truss3[0].fruitDiameter}&pruningFlower=${G1Filter1Plant6Truss3[0].pruneFlowering}&floweringTruss=${G1Filter1Plant6Truss3[0].floweringTrussss}&pruningSet=${G1Filter1Plant6Truss3[0].prunSetting}&settingTruss=${G1Filter1Plant6Truss3[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant6Truss3[0].pruningHar}&harvestTruss=${G1Filter1Plant6Truss3[0].harvestTruss}`;

                console.log("URL : " + url191);

                fetch(url191, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1Filter1Plant6Truss4.length) {

                      const scriptUrl192 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url192 = `${scriptUrl192}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant6Truss4[0].plantNumber}&trussNumber=${G1Filter1Plant6Truss4[0].trussNumber}&setFruits=${G1Filter1Plant6Truss4[0].setFruits}&setFlowers=${G1Filter1Plant6Truss4[0].setFlowers}&pruningNumber=${G1Filter1Plant6Truss4[0].pruningNumber}&fruitLoad=${G1Filter1Plant6Truss4[0].fruitLoad}&fruitDiameter=${G1Filter1Plant6Truss4[0].fruitDiameter}&pruningFlower=${G1Filter1Plant6Truss4[0].pruneFlowering}&floweringTruss=${G1Filter1Plant6Truss4[0].floweringTrussss}&pruningSet=${G1Filter1Plant6Truss4[0].prunSetting}&settingTruss=${G1Filter1Plant6Truss4[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant6Truss4[0].pruningHar}&harvestTruss=${G1Filter1Plant6Truss4[0].harvestTruss}`;

                      console.log("URL : " + url192);

                      fetch(url192, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1Filter1Plant6Truss5.length) {

                            const scriptUrl193 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url193 = `${scriptUrl193}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant6Truss5[0].plantNumber}&trussNumber=${G1Filter1Plant6Truss5[0].trussNumber}&setFruits=${G1Filter1Plant6Truss5[0].setFruits}&setFlowers=${G1Filter1Plant6Truss5[0].setFlowers}&pruningNumber=${G1Filter1Plant6Truss5[0].pruningNumber}&fruitLoad=${G1Filter1Plant6Truss5[0].fruitLoad}&fruitDiameter=${G1Filter1Plant6Truss5[0].fruitDiameter}&pruningFlower=${G1Filter1Plant6Truss5[0].pruneFlowering}&floweringTruss=${G1Filter1Plant6Truss5[0].floweringTrussss}&pruningSet=${G1Filter1Plant6Truss5[0].prunSetting}&settingTruss=${G1Filter1Plant6Truss5[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant6Truss5[0].pruningHar}&harvestTruss=${G1Filter1Plant6Truss5[0].harvestTruss}`;

                            console.log("URL : " + url193);

                            fetch(url193, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1Filter1Plant6Truss6.length) {

                                  const scriptUrl194 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url194 = `${scriptUrl194}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant6Truss6[0].plantNumber}&trussNumber=${G1Filter1Plant6Truss6[0].trussNumber}&setFruits=${G1Filter1Plant6Truss6[0].setFruits}&setFlowers=${G1Filter1Plant6Truss6[0].setFlowers}&pruningNumber=${G1Filter1Plant6Truss6[0].pruningNumber}&fruitLoad=${G1Filter1Plant6Truss6[0].fruitLoad}&fruitDiameter=${G1Filter1Plant6Truss6[0].fruitDiameter}&pruningFlower=${G1Filter1Plant6Truss6[0].pruneFlowering}&floweringTruss=${G1Filter1Plant6Truss6[0].floweringTrussss}&pruningSet=${G1Filter1Plant6Truss6[0].prunSetting}&settingTruss=${G1Filter1Plant6Truss6[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant6Truss6[0].pruningHar}&harvestTruss=${G1Filter1Plant6Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url194);

                                  fetch(url194, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1Filter1Plant6Truss7.length) {

                                        const scriptUrl195 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url195 = `${scriptUrl195}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant6Truss7[0].plantNumber}&trussNumber=${G1Filter1Plant6Truss7[0].trussNumber}&setFruits=${G1Filter1Plant6Truss7[0].setFruits}&setFlowers=${G1Filter1Plant6Truss7[0].setFlowers}&pruningNumber=${G1Filter1Plant6Truss7[0].pruningNumber}&fruitLoad=${G1Filter1Plant6Truss7[0].fruitLoad}&fruitDiameter=${G1Filter1Plant6Truss7[0].fruitDiameter}&pruningFlower=${G1Filter1Plant6Truss7[0].pruneFlowering}&floweringTruss=${G1Filter1Plant6Truss7[0].floweringTrussss}&pruningSet=${G1Filter1Plant6Truss7[0].prunSetting}&settingTruss=${G1Filter1Plant6Truss7[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant6Truss7[0].pruningHar}&harvestTruss=${G1Filter1Plant6Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url195);

                                        fetch(url195, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1Filter1Plant6Truss8.length) {

                                              const scriptUrl196 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url196 = `${scriptUrl196}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant6Truss8[0].plantNumber}&trussNumber=${G1Filter1Plant6Truss8[0].trussNumber}&setFruits=${G1Filter1Plant6Truss8[0].setFruits}&setFlowers=${G1Filter1Plant6Truss8[0].setFlowers}&pruningNumber=${G1Filter1Plant6Truss8[0].pruningNumber}&fruitLoad=${G1Filter1Plant6Truss8[0].fruitLoad}&fruitDiameter=${G1Filter1Plant6Truss8[0].fruitDiameter}&pruningFlower=${G1Filter1Plant6Truss8[0].pruneFlowering}&floweringTruss=${G1Filter1Plant6Truss8[0].floweringTrussss}&pruningSet=${G1Filter1Plant6Truss8[0].prunSetting}&settingTruss=${G1Filter1Plant6Truss8[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant6Truss8[0].pruningHar}&harvestTruss=${G1Filter1Plant6Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url196);

                                              fetch(url196, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1Filter1Plant6Truss9.length) {

                                                    const scriptUrl197 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url197 = `${scriptUrl197}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant6Truss9[0].plantNumber}&trussNumber=${G1Filter1Plant6Truss9[0].trussNumber}&setFruits=${G1Filter1Plant6Truss9[0].setFruits}&setFlowers=${G1Filter1Plant6Truss9[0].setFlowers}&pruningNumber=${G1Filter1Plant6Truss9[0].pruningNumber}&fruitLoad=${G1Filter1Plant6Truss9[0].fruitLoad}&fruitDiameter=${G1Filter1Plant6Truss9[0].fruitDiameter}&pruningFlower=${G1Filter1Plant6Truss9[0].pruneFlowering}&floweringTruss=${G1Filter1Plant6Truss9[0].floweringTrussss}&pruningSet=${G1Filter1Plant6Truss9[0].prunSetting}&settingTruss=${G1Filter1Plant6Truss9[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant6Truss9[0].pruningHar}&harvestTruss=${G1Filter1Plant6Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url197);

                                                    fetch(url197, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1Filter1Plant6Truss0.length) {

                                                          const scriptUrl198 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url198 = `${scriptUrl198}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant6Truss0[0].plantNumber}&trussNumber=${G1Filter1Plant6Truss0[0].trussNumber}&setFruits=${G1Filter1Plant6Truss0[0].setFruits}&setFlowers=${G1Filter1Plant6Truss0[0].setFlowers}&pruningNumber=${G1Filter1Plant6Truss0[0].pruningNumber}&fruitLoad=${G1Filter1Plant6Truss0[0].fruitLoad}&fruitDiameter=${G1Filter1Plant6Truss0[0].fruitDiameter}&pruningFlower=${G1Filter1Plant6Truss0[0].pruneFlowering}&floweringTruss=${G1Filter1Plant6Truss0[0].floweringTrussss}&pruningSet=${G1Filter1Plant6Truss0[0].prunSetting}&settingTruss=${G1Filter1Plant6Truss0[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant6Truss0[0].pruningHar}&harvestTruss=${G1Filter1Plant6Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url198);

                                                          fetch(url198, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow2Plant7Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow2Plant7Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow2Plant7Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow2Plant7Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow2Plant7Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow2Plant7Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow2Plant7Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow2Plant7Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow2Plant7Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow2Plant7Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow2Plant7Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow2Plant7Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow2Plant7Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow2Plant7Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow2Plant7Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow2Plant7Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow2Plant7Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow2Plant7Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow2Plant7Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow2Plant7Trusses()
      }




    });


  }

  sendRow2Plant7Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 85/86 PLANT 7
    let G1Filter1Plant7Truss1 = []
    let G1Filter1Plant7Truss2 = []
    let G1Filter1Plant7Truss3 = []
    let G1Filter1Plant7Truss4 = []
    let G1Filter1Plant7Truss5 = []
    let G1Filter1Plant7Truss6 = []
    let G1Filter1Plant7Truss7 = []
    let G1Filter1Plant7Truss8 = []
    let G1Filter1Plant7Truss9 = []
    let G1Filter1Plant7Truss0 = []
    //END

    //GER 1 Merlice/ Plant 7/ 85-86/ Truss Number 1-10

    G1Filter1Plant7Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1Filter1Plant7Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1Filter1Plant7Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1Filter1Plant7Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1Filter1Plant7Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1Filter1Plant7Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1Filter1Plant7Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1Filter1Plant7Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1Filter1Plant7Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1Filter1Plant7Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl199 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url199 = `${scriptUrl199}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant7Truss1[0].plantNumber}&trussNumber=${G1Filter1Plant7Truss1[0].trussNumber}&setFruits=${G1Filter1Plant7Truss1[0].setFruits}&setFlowers=${G1Filter1Plant7Truss1[0].setFlowers}&pruningNumber=${G1Filter1Plant7Truss1[0].pruningNumber}&fruitLoad=${G1Filter1Plant7Truss1[0].fruitLoad}&fruitDiameter=${G1Filter1Plant7Truss1[0].fruitDiameter}&pruningFlower=${G1Filter1Plant7Truss1[0].pruneFlowering}&floweringTruss=${G1Filter1Plant7Truss1[0].floweringTrussss}&pruningSet=${G1Filter1Plant7Truss1[0].prunSetting}&settingTruss=${G1Filter1Plant7Truss1[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant7Truss1[0].pruningHar}&harvestTruss=${G1Filter1Plant7Truss1[0].harvestTruss}`;

    console.log("URL : " + url199);

    fetch(url199, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1Filter1Plant7Truss2.length) {

          const scriptUrl200 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url200 = `${scriptUrl200}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant7Truss2[0].plantNumber}&trussNumber=${G1Filter1Plant7Truss2[0].trussNumber}&setFruits=${G1Filter1Plant7Truss2[0].setFruits}&setFlowers=${G1Filter1Plant7Truss2[0].setFlowers}&pruningNumber=${G1Filter1Plant7Truss2[0].pruningNumber}&fruitLoad=${G1Filter1Plant7Truss2[0].fruitLoad}&fruitDiameter=${G1Filter1Plant7Truss2[0].fruitDiameter}&pruningFlower=${G1Filter1Plant7Truss2[0].pruneFlowering}&floweringTruss=${G1Filter1Plant7Truss2[0].floweringTrussss}&pruningSet=${G1Filter1Plant7Truss2[0].prunSetting}&settingTruss=${G1Filter1Plant7Truss2[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant7Truss2[0].pruningHar}&harvestTruss=${G1Filter1Plant7Truss2[0].harvestTruss}`;

          console.log("URL : " + url200);

          fetch(url200, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1Filter1Plant7Truss3.length) {

                const scriptUrl201 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url201 = `${scriptUrl201}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant7Truss3[0].plantNumber}&trussNumber=${G1Filter1Plant7Truss3[0].trussNumber}&setFruits=${G1Filter1Plant7Truss3[0].setFruits}&setFlowers=${G1Filter1Plant7Truss3[0].setFlowers}&pruningNumber=${G1Filter1Plant7Truss3[0].pruningNumber}&fruitLoad=${G1Filter1Plant7Truss3[0].fruitLoad}&fruitDiameter=${G1Filter1Plant7Truss3[0].fruitDiameter}&pruningFlower=${G1Filter1Plant7Truss3[0].pruneFlowering}&floweringTruss=${G1Filter1Plant7Truss3[0].floweringTrussss}&pruningSet=${G1Filter1Plant7Truss3[0].prunSetting}&settingTruss=${G1Filter1Plant7Truss3[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant7Truss3[0].pruningHar}&harvestTruss=${G1Filter1Plant7Truss3[0].harvestTruss}`;

                console.log("URL : " + url201);

                fetch(url201, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1Filter1Plant7Truss4.length) {

                      const scriptUrl202 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url202 = `${scriptUrl202}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant7Truss4[0].plantNumber}&trussNumber=${G1Filter1Plant7Truss4[0].trussNumber}&setFruits=${G1Filter1Plant7Truss4[0].setFruits}&setFlowers=${G1Filter1Plant7Truss4[0].setFlowers}&pruningNumber=${G1Filter1Plant7Truss4[0].pruningNumber}&fruitLoad=${G1Filter1Plant7Truss4[0].fruitLoad}&fruitDiameter=${G1Filter1Plant7Truss4[0].fruitDiameter}&pruningFlower=${G1Filter1Plant7Truss4[0].pruneFlowering}&floweringTruss=${G1Filter1Plant7Truss4[0].floweringTrussss}&pruningSet=${G1Filter1Plant7Truss4[0].prunSetting}&settingTruss=${G1Filter1Plant7Truss4[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant7Truss4[0].pruningHar}&harvestTruss=${G1Filter1Plant7Truss4[0].harvestTruss}`;

                      console.log("URL : " + url202);

                      fetch(url202, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1Filter1Plant7Truss5.length) {

                            const scriptUrl203 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url203 = `${scriptUrl203}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant7Truss5[0].plantNumber}&trussNumber=${G1Filter1Plant7Truss5[0].trussNumber}&setFruits=${G1Filter1Plant7Truss5[0].setFruits}&setFlowers=${G1Filter1Plant7Truss5[0].setFlowers}&pruningNumber=${G1Filter1Plant7Truss5[0].pruningNumber}&fruitLoad=${G1Filter1Plant7Truss5[0].fruitLoad}&fruitDiameter=${G1Filter1Plant7Truss5[0].fruitDiameter}&pruningFlower=${G1Filter1Plant7Truss5[0].pruneFlowering}&floweringTruss=${G1Filter1Plant7Truss5[0].floweringTrussss}&pruningSet=${G1Filter1Plant7Truss5[0].prunSetting}&settingTruss=${G1Filter1Plant7Truss5[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant7Truss5[0].pruningHar}&harvestTruss=${G1Filter1Plant7Truss5[0].harvestTruss}`;

                            console.log("URL : " + url203);

                            fetch(url203, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1Filter1Plant7Truss6.length) {

                                  const scriptUrl204 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url204 = `${scriptUrl204}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant7Truss6[0].plantNumber}&trussNumber=${G1Filter1Plant7Truss6[0].trussNumber}&setFruits=${G1Filter1Plant7Truss6[0].setFruits}&setFlowers=${G1Filter1Plant7Truss6[0].setFlowers}&pruningNumber=${G1Filter1Plant7Truss6[0].pruningNumber}&fruitLoad=${G1Filter1Plant7Truss6[0].fruitLoad}&fruitDiameter=${G1Filter1Plant7Truss6[0].fruitDiameter}&pruningFlower=${G1Filter1Plant7Truss6[0].pruneFlowering}&floweringTruss=${G1Filter1Plant7Truss6[0].floweringTrussss}&pruningSet=${G1Filter1Plant7Truss6[0].prunSetting}&settingTruss=${G1Filter1Plant7Truss6[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant7Truss6[0].pruningHar}&harvestTruss=${G1Filter1Plant7Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url204);

                                  fetch(url204, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1Filter1Plant7Truss7.length) {

                                        const scriptUrl205 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url205 = `${scriptUrl205}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant7Truss7[0].plantNumber}&trussNumber=${G1Filter1Plant7Truss7[0].trussNumber}&setFruits=${G1Filter1Plant7Truss7[0].setFruits}&setFlowers=${G1Filter1Plant7Truss7[0].setFlowers}&pruningNumber=${G1Filter1Plant7Truss7[0].pruningNumber}&fruitLoad=${G1Filter1Plant7Truss7[0].fruitLoad}&fruitDiameter=${G1Filter1Plant7Truss7[0].fruitDiameter}&pruningFlower=${G1Filter1Plant7Truss7[0].pruneFlowering}&floweringTruss=${G1Filter1Plant7Truss7[0].floweringTrussss}&pruningSet=${G1Filter1Plant7Truss7[0].prunSetting}&settingTruss=${G1Filter1Plant7Truss7[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant7Truss7[0].pruningHar}&harvestTruss=${G1Filter1Plant7Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url205);

                                        fetch(url205, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1Filter1Plant7Truss8.length) {

                                              const scriptUrl206 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url206 = `${scriptUrl206}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant7Truss8[0].plantNumber}&trussNumber=${G1Filter1Plant7Truss8[0].trussNumber}&setFruits=${G1Filter1Plant7Truss8[0].setFruits}&setFlowers=${G1Filter1Plant7Truss8[0].setFlowers}&pruningNumber=${G1Filter1Plant7Truss8[0].pruningNumber}&fruitLoad=${G1Filter1Plant7Truss8[0].fruitLoad}&fruitDiameter=${G1Filter1Plant7Truss8[0].fruitDiameter}&pruningFlower=${G1Filter1Plant7Truss8[0].pruneFlowering}&floweringTruss=${G1Filter1Plant7Truss8[0].floweringTrussss}&pruningSet=${G1Filter1Plant7Truss8[0].prunSetting}&settingTruss=${G1Filter1Plant7Truss8[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant7Truss8[0].pruningHar}&harvestTruss=${G1Filter1Plant7Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url206);

                                              fetch(url206, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1Filter1Plant7Truss9.length) {

                                                    const scriptUrl207 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url207 = `${scriptUrl207}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant7Truss9[0].plantNumber}&trussNumber=${G1Filter1Plant7Truss9[0].trussNumber}&setFruits=${G1Filter1Plant7Truss9[0].setFruits}&setFlowers=${G1Filter1Plant7Truss9[0].setFlowers}&pruningNumber=${G1Filter1Plant7Truss9[0].pruningNumber}&fruitLoad=${G1Filter1Plant7Truss9[0].fruitLoad}&fruitDiameter=${G1Filter1Plant7Truss9[0].fruitDiameter}&pruningFlower=${G1Filter1Plant7Truss9[0].pruneFlowering}&floweringTruss=${G1Filter1Plant7Truss9[0].floweringTrussss}&pruningSet=${G1Filter1Plant7Truss9[0].prunSetting}&settingTruss=${G1Filter1Plant7Truss9[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant7Truss9[0].pruningHar}&harvestTruss=${G1Filter1Plant7Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url207);

                                                    fetch(url207, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1Filter1Plant7Truss0.length) {


                                                          const scriptUrl208 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url208 = `${scriptUrl208}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant7Truss0[0].plantNumber}&trussNumber=${G1Filter1Plant7Truss0[0].trussNumber}&setFruits=${G1Filter1Plant7Truss0[0].setFruits}&setFlowers=${G1Filter1Plant7Truss0[0].setFlowers}&pruningNumber=${G1Filter1Plant7Truss0[0].pruningNumber}&fruitLoad=${G1Filter1Plant7Truss0[0].fruitLoad}&fruitDiameter=${G1Filter1Plant7Truss0[0].fruitDiameter}&pruningFlower=${G1Filter1Plant7Truss0[0].pruneFlowering}&floweringTruss=${G1Filter1Plant7Truss0[0].floweringTrussss}&pruningSet=${G1Filter1Plant7Truss0[0].prunSetting}&settingTruss=${G1Filter1Plant7Truss0[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant7Truss0[0].pruningHar}&harvestTruss=${G1Filter1Plant7Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url208);

                                                          fetch(url208, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow2Plant8Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow2Plant8Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow2Plant8Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow2Plant8Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow2Plant8Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow2Plant8Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow2Plant8Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow2Plant8Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow2Plant8Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow2Plant8Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow2Plant8Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow2Plant8Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow2Plant8Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow2Plant8Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow2Plant8Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow2Plant8Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow2Plant8Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow2Plant8Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow2Plant8Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow2Plant8Trusses()
      }




    });


  }

  sendRow2Plant8Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 85/86 PLANT 8
    let G1Filter1Plant8Truss1 = []
    let G1Filter1Plant8Truss2 = []
    let G1Filter1Plant8Truss3 = []
    let G1Filter1Plant8Truss4 = []
    let G1Filter1Plant8Truss5 = []
    let G1Filter1Plant8Truss6 = []
    let G1Filter1Plant8Truss7 = []
    let G1Filter1Plant8Truss8 = []
    let G1Filter1Plant8Truss9 = []
    let G1Filter1Plant8Truss0 = []
    //END

    //GER 1 Merlice/ Plant 8/ 85-86/ Truss Number 1-10

    G1Filter1Plant8Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1Filter1Plant8Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1Filter1Plant8Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1Filter1Plant8Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1Filter1Plant8Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1Filter1Plant8Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1Filter1Plant8Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1Filter1Plant8Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1Filter1Plant8Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1Filter1Plant8Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 10

      )
    });
    //END

    const scriptUrl209 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url209 = `${scriptUrl209}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant8Truss1[0].plantNumber}&trussNumber=${G1Filter1Plant8Truss1[0].trussNumber}&setFruits=${G1Filter1Plant8Truss1[0].setFruits}&setFlowers=${G1Filter1Plant8Truss1[0].setFlowers}&pruningNumber=${G1Filter1Plant8Truss1[0].pruningNumber}&fruitLoad=${G1Filter1Plant8Truss1[0].fruitLoad}&fruitDiameter=${G1Filter1Plant8Truss1[0].fruitDiameter}&pruningFlower=${G1Filter1Plant8Truss1[0].pruneFlowering}&floweringTruss=${G1Filter1Plant8Truss1[0].floweringTrussss}&pruningSet=${G1Filter1Plant8Truss1[0].prunSetting}&settingTruss=${G1Filter1Plant8Truss1[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant8Truss1[0].pruningHar}&harvestTruss=${G1Filter1Plant8Truss1[0].harvestTruss}`;

    console.log("URL : " + url209);

    fetch(url209, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1Filter1Plant8Truss2.length) {

          const scriptUrl210 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url210 = `${scriptUrl210}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant8Truss2[0].plantNumber}&trussNumber=${G1Filter1Plant8Truss2[0].trussNumber}&setFruits=${G1Filter1Plant8Truss2[0].setFruits}&setFlowers=${G1Filter1Plant8Truss2[0].setFlowers}&pruningNumber=${G1Filter1Plant8Truss2[0].pruningNumber}&fruitLoad=${G1Filter1Plant8Truss2[0].fruitLoad}&fruitDiameter=${G1Filter1Plant8Truss2[0].fruitDiameter}&pruningFlower=${G1Filter1Plant8Truss2[0].pruneFlowering}&floweringTruss=${G1Filter1Plant8Truss2[0].floweringTrussss}&pruningSet=${G1Filter1Plant8Truss2[0].prunSetting}&settingTruss=${G1Filter1Plant8Truss2[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant8Truss2[0].pruningHar}&harvestTruss=${G1Filter1Plant8Truss2[0].harvestTruss}`;

          console.log("URL : " + url210);

          fetch(url210, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1Filter1Plant8Truss3.length) {

                const scriptUrl211 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url211 = `${scriptUrl211}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant8Truss3[0].plantNumber}&trussNumber=${G1Filter1Plant8Truss3[0].trussNumber}&setFruits=${G1Filter1Plant8Truss3[0].setFruits}&setFlowers=${G1Filter1Plant8Truss3[0].setFlowers}&pruningNumber=${G1Filter1Plant8Truss3[0].pruningNumber}&fruitLoad=${G1Filter1Plant8Truss3[0].fruitLoad}&fruitDiameter=${G1Filter1Plant8Truss3[0].fruitDiameter}&pruningFlower=${G1Filter1Plant8Truss3[0].pruneFlowering}&floweringTruss=${G1Filter1Plant8Truss3[0].floweringTrussss}&pruningSet=${G1Filter1Plant8Truss3[0].prunSetting}&settingTruss=${G1Filter1Plant8Truss3[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant8Truss3[0].pruningHar}&harvestTruss=${G1Filter1Plant8Truss3[0].harvestTruss}`;

                console.log("URL : " + url211);

                fetch(url211, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1Filter1Plant8Truss4.length) {

                      const scriptUrl212 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url212 = `${scriptUrl212}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant8Truss4[0].plantNumber}&trussNumber=${G1Filter1Plant8Truss4[0].trussNumber}&setFruits=${G1Filter1Plant8Truss4[0].setFruits}&setFlowers=${G1Filter1Plant8Truss4[0].setFlowers}&pruningNumber=${G1Filter1Plant8Truss4[0].pruningNumber}&fruitLoad=${G1Filter1Plant8Truss4[0].fruitLoad}&fruitDiameter=${G1Filter1Plant8Truss4[0].fruitDiameter}&pruningFlower=${G1Filter1Plant8Truss4[0].pruneFlowering}&floweringTruss=${G1Filter1Plant8Truss4[0].floweringTrussss}&pruningSet=${G1Filter1Plant8Truss4[0].prunSetting}&settingTruss=${G1Filter1Plant8Truss4[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant8Truss4[0].pruningHar}&harvestTruss=${G1Filter1Plant8Truss4[0].harvestTruss}`;

                      console.log("URL : " + url212);

                      fetch(url212, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1Filter1Plant8Truss5.length) {

                            const scriptUrl213 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url213 = `${scriptUrl213}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant8Truss5[0].plantNumber}&trussNumber=${G1Filter1Plant8Truss5[0].trussNumber}&setFruits=${G1Filter1Plant8Truss5[0].setFruits}&setFlowers=${G1Filter1Plant8Truss5[0].setFlowers}&pruningNumber=${G1Filter1Plant8Truss5[0].pruningNumber}&fruitLoad=${G1Filter1Plant8Truss5[0].fruitLoad}&fruitDiameter=${G1Filter1Plant8Truss5[0].fruitDiameter}&pruningFlower=${G1Filter1Plant8Truss5[0].pruneFlowering}&floweringTruss=${G1Filter1Plant8Truss5[0].floweringTrussss}&pruningSet=${G1Filter1Plant8Truss5[0].prunSetting}&settingTruss=${G1Filter1Plant8Truss5[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant8Truss5[0].pruningHar}&harvestTruss=${G1Filter1Plant8Truss5[0].harvestTruss}`;

                            console.log("URL : " + url213);

                            fetch(url213, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1Filter1Plant8Truss6.length) {

                                  const scriptUrl214 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url214 = `${scriptUrl214}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant8Truss6[0].plantNumber}&trussNumber=${G1Filter1Plant8Truss6[0].trussNumber}&setFruits=${G1Filter1Plant8Truss6[0].setFruits}&setFlowers=${G1Filter1Plant8Truss6[0].setFlowers}&pruningNumber=${G1Filter1Plant8Truss6[0].pruningNumber}&fruitLoad=${G1Filter1Plant8Truss6[0].fruitLoad}&fruitDiameter=${G1Filter1Plant8Truss6[0].fruitDiameter}&pruningFlower=${G1Filter1Plant8Truss6[0].pruneFlowering}&floweringTruss=${G1Filter1Plant8Truss6[0].floweringTrussss}&pruningSet=${G1Filter1Plant8Truss6[0].prunSetting}&settingTruss=${G1Filter1Plant8Truss6[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant8Truss6[0].pruningHar}&harvestTruss=${G1Filter1Plant8Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url214);

                                  fetch(url214, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1Filter1Plant8Truss7.length) {

                                        const scriptUrl215 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url215 = `${scriptUrl215}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant8Truss7[0].plantNumber}&trussNumber=${G1Filter1Plant8Truss7[0].trussNumber}&setFruits=${G1Filter1Plant8Truss7[0].setFruits}&setFlowers=${G1Filter1Plant8Truss7[0].setFlowers}&pruningNumber=${G1Filter1Plant8Truss7[0].pruningNumber}&fruitLoad=${G1Filter1Plant8Truss7[0].fruitLoad}&fruitDiameter=${G1Filter1Plant8Truss7[0].fruitDiameter}&pruningFlower=${G1Filter1Plant8Truss7[0].pruneFlowering}&floweringTruss=${G1Filter1Plant8Truss7[0].floweringTrussss}&pruningSet=${G1Filter1Plant8Truss7[0].prunSetting}&settingTruss=${G1Filter1Plant8Truss7[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant8Truss7[0].pruningHar}&harvestTruss=${G1Filter1Plant8Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url215);

                                        fetch(url215, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1Filter1Plant8Truss8.length) {

                                              const scriptUrl216 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url216 = `${scriptUrl216}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant8Truss8[0].plantNumber}&trussNumber=${G1Filter1Plant8Truss8[0].trussNumber}&setFruits=${G1Filter1Plant8Truss8[0].setFruits}&setFlowers=${G1Filter1Plant8Truss8[0].setFlowers}&pruningNumber=${G1Filter1Plant8Truss8[0].pruningNumber}&fruitLoad=${G1Filter1Plant8Truss8[0].fruitLoad}&fruitDiameter=${G1Filter1Plant8Truss8[0].fruitDiameter}&pruningFlower=${G1Filter1Plant8Truss8[0].pruneFlowering}&floweringTruss=${G1Filter1Plant8Truss8[0].floweringTrussss}&pruningSet=${G1Filter1Plant8Truss8[0].prunSetting}&settingTruss=${G1Filter1Plant8Truss8[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant8Truss8[0].pruningHar}&harvestTruss=${G1Filter1Plant8Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url216);

                                              fetch(url216, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1Filter1Plant8Truss9.length) {

                                                    const scriptUrl217 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url217 = `${scriptUrl217}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant8Truss9[0].plantNumber}&trussNumber=${G1Filter1Plant8Truss9[0].trussNumber}&setFruits=${G1Filter1Plant8Truss9[0].setFruits}&setFlowers=${G1Filter1Plant8Truss9[0].setFlowers}&pruningNumber=${G1Filter1Plant8Truss9[0].pruningNumber}&fruitLoad=${G1Filter1Plant8Truss9[0].fruitLoad}&fruitDiameter=${G1Filter1Plant8Truss9[0].fruitDiameter}&pruningFlower=${G1Filter1Plant8Truss9[0].pruneFlowering}&floweringTruss=${G1Filter1Plant8Truss9[0].floweringTrussss}&pruningSet=${G1Filter1Plant8Truss9[0].prunSetting}&settingTruss=${G1Filter1Plant8Truss9[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant8Truss9[0].pruningHar}&harvestTruss=${G1Filter1Plant8Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url217);

                                                    fetch(url217, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1Filter1Plant8Truss0.length) {

                                                          const scriptUrl218 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url218 = `${scriptUrl218}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant8Truss0[0].plantNumber}&trussNumber=${G1Filter1Plant8Truss0[0].trussNumber}&setFruits=${G1Filter1Plant8Truss0[0].setFruits}&setFlowers=${G1Filter1Plant8Truss0[0].setFlowers}&pruningNumber=${G1Filter1Plant8Truss0[0].pruningNumber}&fruitLoad=${G1Filter1Plant8Truss0[0].fruitLoad}&fruitDiameter=${G1Filter1Plant8Truss0[0].fruitDiameter}&pruningFlower=${G1Filter1Plant8Truss0[0].pruneFlowering}&floweringTruss=${G1Filter1Plant8Truss0[0].floweringTrussss}&pruningSet=${G1Filter1Plant8Truss0[0].prunSetting}&settingTruss=${G1Filter1Plant8Truss0[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant8Truss0[0].pruningHar}&harvestTruss=${G1Filter1Plant8Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url218);

                                                          fetch(url218, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow2Plant9Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow2Plant9Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow2Plant9Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow2Plant9Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow2Plant9Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow2Plant9Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow2Plant9Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow2Plant9Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow2Plant9Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow2Plant9Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow2Plant9Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow2Plant9Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow2Plant9Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow2Plant9Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow2Plant9Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow2Plant9Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow2Plant9Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow2Plant9Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow2Plant9Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow2Plant9Trusses()
      }
    });


  }

  sendRow2Plant9Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 85/86 PLANT 9
    let G1Filter1Plant9Truss1 = []
    let G1Filter1Plant9Truss2 = []
    let G1Filter1Plant9Truss3 = []
    let G1Filter1Plant9Truss4 = []
    let G1Filter1Plant9Truss5 = []
    let G1Filter1Plant9Truss6 = []
    let G1Filter1Plant9Truss7 = []
    let G1Filter1Plant9Truss8 = []
    let G1Filter1Plant9Truss9 = []
    let G1Filter1Plant9Truss0 = []
    //END

    //GER 1 Merlice/ Plant 9/ 85-86/ Truss Number 1-10

    G1Filter1Plant9Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1Filter1Plant9Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1Filter1Plant9Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1Filter1Plant9Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1Filter1Plant9Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1Filter1Plant9Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1Filter1Plant9Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1Filter1Plant9Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1Filter1Plant9Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1Filter1Plant9Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl219 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url219 = `${scriptUrl219}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant9Truss1[0].plantNumber}&trussNumber=${G1Filter1Plant9Truss1[0].trussNumber}&setFruits=${G1Filter1Plant9Truss1[0].setFruits}&setFlowers=${G1Filter1Plant9Truss1[0].setFlowers}&pruningNumber=${G1Filter1Plant9Truss1[0].pruningNumber}&fruitLoad=${G1Filter1Plant9Truss1[0].fruitLoad}&fruitDiameter=${G1Filter1Plant9Truss1[0].fruitDiameter}&pruningFlower=${G1Filter1Plant9Truss1[0].pruneFlowering}&floweringTruss=${G1Filter1Plant9Truss1[0].floweringTrussss}&pruningSet=${G1Filter1Plant9Truss1[0].prunSetting}&settingTruss=${G1Filter1Plant9Truss1[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant9Truss1[0].pruningHar}&harvestTruss=${G1Filter1Plant9Truss1[0].harvestTruss}`;

    console.log("URL : " + url219);

    fetch(url219, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1Filter1Plant9Truss2.length) {

          const scriptUrl220 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url220 = `${scriptUrl220}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant9Truss2[0].plantNumber}&trussNumber=${G1Filter1Plant9Truss2[0].trussNumber}&setFruits=${G1Filter1Plant9Truss2[0].setFruits}&setFlowers=${G1Filter1Plant9Truss2[0].setFlowers}&pruningNumber=${G1Filter1Plant9Truss2[0].pruningNumber}&fruitLoad=${G1Filter1Plant9Truss2[0].fruitLoad}&fruitDiameter=${G1Filter1Plant9Truss2[0].fruitDiameter}&pruningFlower=${G1Filter1Plant9Truss2[0].pruneFlowering}&floweringTruss=${G1Filter1Plant9Truss2[0].floweringTrussss}&pruningSet=${G1Filter1Plant9Truss2[0].prunSetting}&settingTruss=${G1Filter1Plant9Truss2[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant9Truss2[0].pruningHar}&harvestTruss=${G1Filter1Plant9Truss2[0].harvestTruss}`;

          console.log("URL : " + url220);

          fetch(url220, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1Filter1Plant9Truss3.length) {

                const scriptUrl221 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url221 = `${scriptUrl221}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant9Truss3[0].plantNumber}&trussNumber=${G1Filter1Plant9Truss3[0].trussNumber}&setFruits=${G1Filter1Plant9Truss3[0].setFruits}&setFlowers=${G1Filter1Plant9Truss3[0].setFlowers}&pruningNumber=${G1Filter1Plant9Truss3[0].pruningNumber}&fruitLoad=${G1Filter1Plant9Truss3[0].fruitLoad}&fruitDiameter=${G1Filter1Plant9Truss3[0].fruitDiameter}&pruningFlower=${G1Filter1Plant9Truss3[0].pruneFlowering}&floweringTruss=${G1Filter1Plant9Truss3[0].floweringTrussss}&pruningSet=${G1Filter1Plant9Truss3[0].prunSetting}&settingTruss=${G1Filter1Plant9Truss3[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant9Truss3[0].pruningHar}&harvestTruss=${G1Filter1Plant9Truss3[0].harvestTruss}`;

                console.log("URL : " + url221);

                fetch(url221, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1Filter1Plant9Truss4.length) {

                      const scriptUrl222 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url222 = `${scriptUrl222}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant9Truss4[0].plantNumber}&trussNumber=${G1Filter1Plant9Truss4[0].trussNumber}&setFruits=${G1Filter1Plant9Truss4[0].setFruits}&setFlowers=${G1Filter1Plant9Truss4[0].setFlowers}&pruningNumber=${G1Filter1Plant9Truss4[0].pruningNumber}&fruitLoad=${G1Filter1Plant9Truss4[0].fruitLoad}&fruitDiameter=${G1Filter1Plant9Truss4[0].fruitDiameter}&pruningFlower=${G1Filter1Plant9Truss4[0].pruneFlowering}&floweringTruss=${G1Filter1Plant9Truss4[0].floweringTrussss}&pruningSet=${G1Filter1Plant9Truss4[0].prunSetting}&settingTruss=${G1Filter1Plant9Truss4[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant9Truss4[0].pruningHar}&harvestTruss=${G1Filter1Plant9Truss4[0].harvestTruss}`;

                      console.log("URL : " + url222);

                      fetch(url222, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1Filter1Plant9Truss5.length) {

                            const scriptUrl223 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url223 = `${scriptUrl223}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant9Truss5[0].plantNumber}&trussNumber=${G1Filter1Plant9Truss5[0].trussNumber}&setFruits=${G1Filter1Plant9Truss5[0].setFruits}&setFlowers=${G1Filter1Plant9Truss5[0].setFlowers}&pruningNumber=${G1Filter1Plant9Truss5[0].pruningNumber}&fruitLoad=${G1Filter1Plant9Truss5[0].fruitLoad}&fruitDiameter=${G1Filter1Plant9Truss5[0].fruitDiameter}&pruningFlower=${G1Filter1Plant9Truss5[0].pruneFlowering}&floweringTruss=${G1Filter1Plant9Truss5[0].floweringTrussss}&pruningSet=${G1Filter1Plant9Truss5[0].prunSetting}&settingTruss=${G1Filter1Plant9Truss5[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant9Truss5[0].pruningHar}&harvestTruss=${G1Filter1Plant9Truss5[0].harvestTruss}`;

                            console.log("URL : " + url223);

                            fetch(url223, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1Filter1Plant9Truss6.length) {

                                  const scriptUrl224 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url224 = `${scriptUrl224}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant9Truss6[0].plantNumber}&trussNumber=${G1Filter1Plant9Truss6[0].trussNumber}&setFruits=${G1Filter1Plant9Truss6[0].setFruits}&setFlowers=${G1Filter1Plant9Truss6[0].setFlowers}&pruningNumber=${G1Filter1Plant9Truss6[0].pruningNumber}&fruitLoad=${G1Filter1Plant9Truss6[0].fruitLoad}&fruitDiameter=${G1Filter1Plant9Truss6[0].fruitDiameter}&pruningFlower=${G1Filter1Plant9Truss6[0].pruneFlowering}&floweringTruss=${G1Filter1Plant9Truss6[0].floweringTrussss}&pruningSet=${G1Filter1Plant9Truss6[0].prunSetting}&settingTruss=${G1Filter1Plant9Truss6[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant9Truss6[0].pruningHar}&harvestTruss=${G1Filter1Plant9Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url224);

                                  fetch(url224, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1Filter1Plant9Truss7.length) {


                                        const scriptUrl225 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url225 = `${scriptUrl225}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant9Truss7[0].plantNumber}&trussNumber=${G1Filter1Plant9Truss7[0].trussNumber}&setFruits=${G1Filter1Plant9Truss7[0].setFruits}&setFlowers=${G1Filter1Plant9Truss7[0].setFlowers}&pruningNumber=${G1Filter1Plant9Truss7[0].pruningNumber}&fruitLoad=${G1Filter1Plant9Truss7[0].fruitLoad}&fruitDiameter=${G1Filter1Plant9Truss7[0].fruitDiameter}&pruningFlower=${G1Filter1Plant9Truss7[0].pruneFlowering}&floweringTruss=${G1Filter1Plant9Truss7[0].floweringTrussss}&pruningSet=${G1Filter1Plant9Truss7[0].prunSetting}&settingTruss=${G1Filter1Plant9Truss7[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant9Truss7[0].pruningHar}&harvestTruss=${G1Filter1Plant9Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url225);

                                        fetch(url225, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1Filter1Plant9Truss8.length) {

                                              const scriptUrl226 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url226 = `${scriptUrl226}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant9Truss8[0].plantNumber}&trussNumber=${G1Filter1Plant9Truss8[0].trussNumber}&setFruits=${G1Filter1Plant9Truss8[0].setFruits}&setFlowers=${G1Filter1Plant9Truss8[0].setFlowers}&pruningNumber=${G1Filter1Plant9Truss8[0].pruningNumber}&fruitLoad=${G1Filter1Plant9Truss8[0].fruitLoad}&fruitDiameter=${G1Filter1Plant9Truss8[0].fruitDiameter}&pruningFlower=${G1Filter1Plant9Truss8[0].pruneFlowering}&floweringTruss=${G1Filter1Plant9Truss8[0].floweringTrussss}&pruningSet=${G1Filter1Plant9Truss8[0].prunSetting}&settingTruss=${G1Filter1Plant9Truss8[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant9Truss8[0].pruningHar}&harvestTruss=${G1Filter1Plant9Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url226);

                                              fetch(url226, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1Filter1Plant9Truss9.length) {

                                                    const scriptUrl227 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url227 = `${scriptUrl227}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant9Truss9[0].plantNumber}&trussNumber=${G1Filter1Plant9Truss9[0].trussNumber}&setFruits=${G1Filter1Plant9Truss9[0].setFruits}&setFlowers=${G1Filter1Plant9Truss9[0].setFlowers}&pruningNumber=${G1Filter1Plant9Truss9[0].pruningNumber}&fruitLoad=${G1Filter1Plant9Truss9[0].fruitLoad}&fruitDiameter=${G1Filter1Plant9Truss9[0].fruitDiameter}&pruningFlower=${G1Filter1Plant9Truss9[0].pruneFlowering}&floweringTruss=${G1Filter1Plant9Truss9[0].floweringTrussss}&pruningSet=${G1Filter1Plant9Truss9[0].prunSetting}&settingTruss=${G1Filter1Plant9Truss9[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant9Truss9[0].pruningHar}&harvestTruss=${G1Filter1Plant9Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url227);

                                                    fetch(url227, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1Filter1Plant9Truss0.length) {

                                                          const scriptUrl228 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url228 = `${scriptUrl228}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant9Truss0[0].plantNumber}&trussNumber=${G1Filter1Plant9Truss0[0].trussNumber}&setFruits=${G1Filter1Plant9Truss0[0].setFruits}&setFlowers=${G1Filter1Plant9Truss0[0].setFlowers}&pruningNumber=${G1Filter1Plant9Truss0[0].pruningNumber}&fruitLoad=${G1Filter1Plant9Truss0[0].fruitLoad}&fruitDiameter=${G1Filter1Plant9Truss0[0].fruitDiameter}&pruningFlower=${G1Filter1Plant9Truss0[0].pruneFlowering}&floweringTruss=${G1Filter1Plant9Truss0[0].floweringTrussss}&pruningSet=${G1Filter1Plant9Truss0[0].prunSetting}&settingTruss=${G1Filter1Plant9Truss0[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant9Truss0[0].pruningHar}&harvestTruss=${G1Filter1Plant9Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url228);

                                                          fetch(url228, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow2Plant10Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow2Plant10Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow2Plant10Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow2Plant10Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow2Plant10Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow2Plant10Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow2Plant10Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow2Plant10Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow2Plant10Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow2Plant10Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow2Plant10Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow2Plant10Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow2Plant10Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow2Plant10Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow2Plant10Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow2Plant10Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow2Plant10Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow2Plant10Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow2Plant10Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow2Plant10Trusses()
      }
    });


  }

  sendRow2Plant10Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 85/86 PLANT 10
    let G1Filter1Plant10Truss1 = []
    let G1Filter1Plant10Truss2 = []
    let G1Filter1Plant10Truss3 = []
    let G1Filter1Plant10Truss4 = []
    let G1Filter1Plant10Truss5 = []
    let G1Filter1Plant10Truss6 = []
    let G1Filter1Plant10Truss7 = []
    let G1Filter1Plant10Truss8 = []
    let G1Filter1Plant10Truss9 = []
    let G1Filter1Plant10Truss0 = []
    //END

    //GER 1 Merlice/ Plant 10/ 85-86/ Truss Number 1-10

    G1Filter1Plant10Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G1Filter1Plant10Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G1Filter1Plant10Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G1Filter1Plant10Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G1Filter1Plant10Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G1Filter1Plant10Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G1Filter1Plant10Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G1Filter1Plant10Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G1Filter1Plant10Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G1Filter1Plant10Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 1 - Merlice' &&
        sampleItemTruss.plantRow === '85/86' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl229 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url229 = `${scriptUrl229}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant10Truss1[0].plantNumber}&trussNumber=${G1Filter1Plant10Truss1[0].trussNumber}&setFruits=${G1Filter1Plant10Truss1[0].setFruits}&setFlowers=${G1Filter1Plant10Truss1[0].setFlowers}&pruningNumber=${G1Filter1Plant10Truss1[0].pruningNumber}&fruitLoad=${G1Filter1Plant10Truss1[0].fruitLoad}&fruitDiameter=${G1Filter1Plant10Truss1[0].fruitDiameter}&pruningFlower=${G1Filter1Plant10Truss1[0].pruneFlowering}&floweringTruss=${G1Filter1Plant10Truss1[0].floweringTrussss}&pruningSet=${G1Filter1Plant10Truss1[0].prunSetting}&settingTruss=${G1Filter1Plant10Truss1[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant10Truss1[0].pruningHar}&harvestTruss=${G1Filter1Plant10Truss1[0].harvestTruss}`;

    console.log("URL : " + url229);

    fetch(url229, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G1Filter1Plant10Truss2.length) {

          const scriptUrl230 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url230 = `${scriptUrl230}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant10Truss2[0].plantNumber}&trussNumber=${G1Filter1Plant10Truss2[0].trussNumber}&setFruits=${G1Filter1Plant10Truss2[0].setFruits}&setFlowers=${G1Filter1Plant10Truss2[0].setFlowers}&pruningNumber=${G1Filter1Plant10Truss2[0].pruningNumber}&fruitLoad=${G1Filter1Plant10Truss2[0].fruitLoad}&fruitDiameter=${G1Filter1Plant10Truss2[0].fruitDiameter}&pruningFlower=${G1Filter1Plant10Truss2[0].pruneFlowering}&floweringTruss=${G1Filter1Plant10Truss2[0].floweringTrussss}&pruningSet=${G1Filter1Plant10Truss2[0].prunSetting}&settingTruss=${G1Filter1Plant10Truss2[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant10Truss2[0].pruningHar}&harvestTruss=${G1Filter1Plant10Truss2[0].harvestTruss}`;

          console.log("URL : " + url230);

          fetch(url230, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G1Filter1Plant10Truss3.length) {

                const scriptUrl231 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url231 = `${scriptUrl231}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant10Truss3[0].plantNumber}&trussNumber=${G1Filter1Plant10Truss3[0].trussNumber}&setFruits=${G1Filter1Plant10Truss3[0].setFruits}&setFlowers=${G1Filter1Plant10Truss3[0].setFlowers}&pruningNumber=${G1Filter1Plant10Truss3[0].pruningNumber}&fruitLoad=${G1Filter1Plant10Truss3[0].fruitLoad}&fruitDiameter=${G1Filter1Plant10Truss3[0].fruitDiameter}&pruningFlower=${G1Filter1Plant10Truss3[0].pruneFlowering}&floweringTruss=${G1Filter1Plant10Truss3[0].floweringTrussss}&pruningSet=${G1Filter1Plant10Truss3[0].prunSetting}&settingTruss=${G1Filter1Plant10Truss3[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant10Truss3[0].pruningHar}&harvestTruss=${G1Filter1Plant10Truss3[0].harvestTruss}`;

                console.log("URL : " + url231);

                fetch(url231, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G1Filter1Plant10Truss4.length) {

                      const scriptUrl232 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url232 = `${scriptUrl232}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant10Truss4[0].plantNumber}&trussNumber=${G1Filter1Plant10Truss4[0].trussNumber}&setFruits=${G1Filter1Plant10Truss4[0].setFruits}&setFlowers=${G1Filter1Plant10Truss4[0].setFlowers}&pruningNumber=${G1Filter1Plant10Truss4[0].pruningNumber}&fruitLoad=${G1Filter1Plant10Truss4[0].fruitLoad}&fruitDiameter=${G1Filter1Plant10Truss4[0].fruitDiameter}&pruningFlower=${G1Filter1Plant10Truss4[0].pruneFlowering}&floweringTruss=${G1Filter1Plant10Truss4[0].floweringTrussss}&pruningSet=${G1Filter1Plant10Truss4[0].prunSetting}&settingTruss=${G1Filter1Plant10Truss4[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant10Truss4[0].pruningHar}&harvestTruss=${G1Filter1Plant10Truss4[0].harvestTruss}`;

                      console.log("URL : " + url232);

                      fetch(url232, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G1Filter1Plant10Truss5.length) {

                            const scriptUrl233 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url233 = `${scriptUrl233}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant10Truss5[0].plantNumber}&trussNumber=${G1Filter1Plant10Truss5[0].trussNumber}&setFruits=${G1Filter1Plant10Truss5[0].setFruits}&setFlowers=${G1Filter1Plant10Truss5[0].setFlowers}&pruningNumber=${G1Filter1Plant10Truss5[0].pruningNumber}&fruitLoad=${G1Filter1Plant10Truss5[0].fruitLoad}&fruitDiameter=${G1Filter1Plant10Truss5[0].fruitDiameter}&pruningFlower=${G1Filter1Plant10Truss5[0].pruneFlowering}&floweringTruss=${G1Filter1Plant10Truss5[0].floweringTrussss}&pruningSet=${G1Filter1Plant10Truss5[0].prunSetting}&settingTruss=${G1Filter1Plant10Truss5[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant10Truss5[0].pruningHar}&harvestTruss=${G1Filter1Plant10Truss5[0].harvestTruss}`;

                            console.log("URL : " + url233);

                            fetch(url233, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G1Filter1Plant10Truss6.length) {


                                  const scriptUrl234 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url234 = `${scriptUrl234}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant10Truss6[0].plantNumber}&trussNumber=${G1Filter1Plant10Truss6[0].trussNumber}&setFruits=${G1Filter1Plant10Truss6[0].setFruits}&setFlowers=${G1Filter1Plant10Truss6[0].setFlowers}&pruningNumber=${G1Filter1Plant10Truss6[0].pruningNumber}&fruitLoad=${G1Filter1Plant10Truss6[0].fruitLoad}&fruitDiameter=${G1Filter1Plant10Truss6[0].fruitDiameter}&pruningFlower=${G1Filter1Plant10Truss6[0].pruneFlowering}&floweringTruss=${G1Filter1Plant10Truss6[0].floweringTrussss}&pruningSet=${G1Filter1Plant10Truss6[0].prunSetting}&settingTruss=${G1Filter1Plant10Truss6[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant10Truss6[0].pruningHar}&harvestTruss=${G1Filter1Plant10Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url234);

                                  fetch(url234, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G1Filter1Plant10Truss7.length) {

                                        const scriptUrl235 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url235 = `${scriptUrl235}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant10Truss7[0].plantNumber}&trussNumber=${G1Filter1Plant10Truss7[0].trussNumber}&setFruits=${G1Filter1Plant10Truss7[0].setFruits}&setFlowers=${G1Filter1Plant10Truss7[0].setFlowers}&pruningNumber=${G1Filter1Plant10Truss7[0].pruningNumber}&fruitLoad=${G1Filter1Plant10Truss7[0].fruitLoad}&fruitDiameter=${G1Filter1Plant10Truss7[0].fruitDiameter}&pruningFlower=${G1Filter1Plant10Truss7[0].pruneFlowering}&floweringTruss=${G1Filter1Plant10Truss7[0].floweringTrussss}&pruningSet=${G1Filter1Plant10Truss7[0].prunSetting}&settingTruss=${G1Filter1Plant10Truss7[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant10Truss7[0].pruningHar}&harvestTruss=${G1Filter1Plant10Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url235);

                                        fetch(url235, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G1Filter1Plant10Truss8.length) {

                                              const scriptUrl236 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url236 = `${scriptUrl236}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant10Truss8[0].plantNumber}&trussNumber=${G1Filter1Plant10Truss8[0].trussNumber}&setFruits=${G1Filter1Plant10Truss8[0].setFruits}&setFlowers=${G1Filter1Plant10Truss8[0].setFlowers}&pruningNumber=${G1Filter1Plant10Truss8[0].pruningNumber}&fruitLoad=${G1Filter1Plant10Truss8[0].fruitLoad}&fruitDiameter=${G1Filter1Plant10Truss8[0].fruitDiameter}&pruningFlower=${G1Filter1Plant10Truss8[0].pruneFlowering}&floweringTruss=${G1Filter1Plant10Truss8[0].floweringTrussss}&pruningSet=${G1Filter1Plant10Truss8[0].prunSetting}&settingTruss=${G1Filter1Plant10Truss8[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant10Truss8[0].pruningHar}&harvestTruss=${G1Filter1Plant10Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url236);

                                              fetch(url236, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G1Filter1Plant10Truss9.length) {

                                                    const scriptUrl237 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url237 = `${scriptUrl237}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant10Truss9[0].plantNumber}&trussNumber=${G1Filter1Plant10Truss9[0].trussNumber}&setFruits=${G1Filter1Plant10Truss9[0].setFruits}&setFlowers=${G1Filter1Plant10Truss9[0].setFlowers}&pruningNumber=${G1Filter1Plant10Truss9[0].pruningNumber}&fruitLoad=${G1Filter1Plant10Truss9[0].fruitLoad}&fruitDiameter=${G1Filter1Plant10Truss9[0].fruitDiameter}&pruningFlower=${G1Filter1Plant10Truss9[0].pruneFlowering}&floweringTruss=${G1Filter1Plant10Truss9[0].floweringTrussss}&pruningSet=${G1Filter1Plant10Truss9[0].prunSetting}&settingTruss=${G1Filter1Plant10Truss9[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant10Truss9[0].pruningHar}&harvestTruss=${G1Filter1Plant10Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url237);

                                                    fetch(url237, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G1Filter1Plant10Truss0.length) {

                                                          const scriptUrl238 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url238 = `${scriptUrl238}?
  callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1Filter1Plant10Truss0[0].plantNumber}&trussNumber=${G1Filter1Plant10Truss0[0].trussNumber}&setFruits=${G1Filter1Plant10Truss0[0].setFruits}&setFlowers=${G1Filter1Plant10Truss0[0].setFlowers}&pruningNumber=${G1Filter1Plant10Truss0[0].pruningNumber}&fruitLoad=${G1Filter1Plant10Truss0[0].fruitLoad}&fruitDiameter=${G1Filter1Plant10Truss0[0].fruitDiameter}&pruningFlower=${G1Filter1Plant10Truss0[0].pruneFlowering}&floweringTruss=${G1Filter1Plant10Truss0[0].floweringTrussss}&pruningSet=${G1Filter1Plant10Truss0[0].prunSetting}&settingTruss=${G1Filter1Plant10Truss0[0].settingTrussNumber}&pruningHarvest=${G1Filter1Plant10Truss0[0].pruningHar}&harvestTruss=${G1Filter1Plant10Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url238);

                                                          fetch(url238, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow3Plant1Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow3Plant1Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow3Plant1Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow3Plant1Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow3Plant1Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow3Plant1Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow3Plant1Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow3Plant1Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow3Plant1Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow3Plant1Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow3Plant1Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow3Plant1Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow3Plant1Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow3Plant1Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow3Plant1Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow3Plant1Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow3Plant1Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow3Plant1Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow3Plant1Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow3Plant1Trusses()
      }
    });


  }

  sendRow3Plant1Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G1 MERLICE ROW 85/86 PLANT 10
    let G2Filter1Plant1Truss1 = []
    let G2Filter1Plant1Truss2 = []
    let G2Filter1Plant1Truss3 = []
    let G2Filter1Plant1Truss4 = []
    let G2Filter1Plant1Truss5 = []
    let G2Filter1Plant1Truss6 = []
    let G2Filter1Plant1Truss7 = []
    let G2Filter1Plant1Truss8 = []
    let G2Filter1Plant1Truss9 = []
    let G2Filter1Plant1Truss0 = []
    //END

    //GER 3 Merlice/ Plant 1/ 70-71/ Truss Number 1-10

    G2Filter1Plant1Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G2Filter1Plant1Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G2Filter1Plant1Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G2Filter1Plant1Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G2Filter1Plant1Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G2Filter1Plant1Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G2Filter1Plant1Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G2Filter1Plant1Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G2Filter1Plant1Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G2Filter1Plant1Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 0

      )
    });

    //END

    const scriptUrl239 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url239 = `${scriptUrl239}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant1Truss1[0].plantNumber}&trussNumber=${G2Filter1Plant1Truss1[0].trussNumber}&setFruits=${G2Filter1Plant1Truss1[0].setFruits}&setFlowers=${G2Filter1Plant1Truss1[0].setFlowers}&pruningNumber=${G2Filter1Plant1Truss1[0].pruningNumber}&fruitLoad=${G2Filter1Plant1Truss1[0].fruitLoad}&fruitDiameter=${G2Filter1Plant1Truss1[0].fruitDiameter}&pruningFlower=${G2Filter1Plant1Truss1[0].pruneFlowering}&floweringTruss=${G2Filter1Plant1Truss1[0].floweringTrussss}&pruningSet=${G2Filter1Plant1Truss1[0].prunSetting}&settingTruss=${G2Filter1Plant1Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant1Truss1[0].pruningHar}&harvestTruss=${G2Filter1Plant1Truss1[0].harvestTruss}`;

    console.log("URL : " + url239);

    fetch(url239, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G2Filter1Plant1Truss2.length) {

          const scriptUrl240 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url240 = `${scriptUrl240}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant1Truss2[0].plantNumber}&trussNumber=${G2Filter1Plant1Truss2[0].trussNumber}&setFruits=${G2Filter1Plant1Truss2[0].setFruits}&setFlowers=${G2Filter1Plant1Truss2[0].setFlowers}&pruningNumber=${G2Filter1Plant1Truss2[0].pruningNumber}&fruitLoad=${G2Filter1Plant1Truss2[0].fruitLoad}&fruitDiameter=${G2Filter1Plant1Truss2[0].fruitDiameter}&pruningFlower=${G2Filter1Plant1Truss2[0].pruneFlowering}&floweringTruss=${G2Filter1Plant1Truss2[0].floweringTrussss}&pruningSet=${G2Filter1Plant1Truss2[0].prunSetting}&settingTruss=${G2Filter1Plant1Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant1Truss2[0].pruningHar}&harvestTruss=${G2Filter1Plant1Truss2[0].harvestTruss}`;

          console.log("URL : " + url240);

          fetch(url240, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G2Filter1Plant1Truss3.length) {

                const scriptUrl241 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url241 = `${scriptUrl241}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant1Truss3[0].plantNumber}&trussNumber=${G2Filter1Plant1Truss3[0].trussNumber}&setFruits=${G2Filter1Plant1Truss3[0].setFruits}&setFlowers=${G2Filter1Plant1Truss3[0].setFlowers}&pruningNumber=${G2Filter1Plant1Truss3[0].pruningNumber}&fruitLoad=${G2Filter1Plant1Truss3[0].fruitLoad}&fruitDiameter=${G2Filter1Plant1Truss3[0].fruitDiameter}&pruningFlower=${G2Filter1Plant1Truss3[0].pruneFlowering}&floweringTruss=${G2Filter1Plant1Truss3[0].floweringTrussss}&pruningSet=${G2Filter1Plant1Truss3[0].prunSetting}&settingTruss=${G2Filter1Plant1Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant1Truss3[0].pruningHar}&harvestTruss=${G2Filter1Plant1Truss3[0].harvestTruss}`;

                console.log("URL : " + url241);

                fetch(url241, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G2Filter1Plant1Truss4.length) {

                      const scriptUrl242 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url242 = `${scriptUrl242}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant1Truss4[0].plantNumber}&trussNumber=${G2Filter1Plant1Truss4[0].trussNumber}&setFruits=${G2Filter1Plant1Truss4[0].setFruits}&setFlowers=${G2Filter1Plant1Truss4[0].setFlowers}&pruningNumber=${G2Filter1Plant1Truss4[0].pruningNumber}&fruitLoad=${G2Filter1Plant1Truss4[0].fruitLoad}&fruitDiameter=${G2Filter1Plant1Truss4[0].fruitDiameter}&pruningFlower=${G2Filter1Plant1Truss4[0].pruneFlowering}&floweringTruss=${G2Filter1Plant1Truss4[0].floweringTrussss}&pruningSet=${G2Filter1Plant1Truss4[0].prunSetting}&settingTruss=${G2Filter1Plant1Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant1Truss4[0].pruningHar}&harvestTruss=${G2Filter1Plant1Truss4[0].harvestTruss}`;

                      console.log("URL : " + url242);

                      fetch(url242, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G2Filter1Plant1Truss5.length) {

                            const scriptUrl243 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url243 = `${scriptUrl243}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant1Truss5[0].plantNumber}&trussNumber=${G2Filter1Plant1Truss5[0].trussNumber}&setFruits=${G2Filter1Plant1Truss5[0].setFruits}&setFlowers=${G2Filter1Plant1Truss5[0].setFlowers}&pruningNumber=${G2Filter1Plant1Truss5[0].pruningNumber}&fruitLoad=${G2Filter1Plant1Truss5[0].fruitLoad}&fruitDiameter=${G2Filter1Plant1Truss5[0].fruitDiameter}&pruningFlower=${G2Filter1Plant1Truss5[0].pruneFlowering}&floweringTruss=${G2Filter1Plant1Truss5[0].floweringTrussss}&pruningSet=${G2Filter1Plant1Truss5[0].prunSetting}&settingTruss=${G2Filter1Plant1Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant1Truss5[0].pruningHar}&harvestTruss=${G2Filter1Plant1Truss5[0].harvestTruss}`;

                            console.log("URL : " + url243);

                            fetch(url243, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G2Filter1Plant1Truss6.length) {

                                  const scriptUrl244 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url244 = `${scriptUrl244}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant1Truss6[0].plantNumber}&trussNumber=${G2Filter1Plant1Truss6[0].trussNumber}&setFruits=${G2Filter1Plant1Truss6[0].setFruits}&setFlowers=${G2Filter1Plant1Truss6[0].setFlowers}&pruningNumber=${G2Filter1Plant1Truss6[0].pruningNumber}&fruitLoad=${G2Filter1Plant1Truss6[0].fruitLoad}&fruitDiameter=${G2Filter1Plant1Truss6[0].fruitDiameter}&pruningFlower=${G2Filter1Plant1Truss6[0].pruneFlowering}&floweringTruss=${G2Filter1Plant1Truss6[0].floweringTrussss}&pruningSet=${G2Filter1Plant1Truss6[0].prunSetting}&settingTruss=${G2Filter1Plant1Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant1Truss6[0].pruningHar}&harvestTruss=${G2Filter1Plant1Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url244);

                                  fetch(url244, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G2Filter1Plant1Truss7.length) {

                                        const scriptUrl245 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url245 = `${scriptUrl245}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant1Truss7[0].plantNumber}&trussNumber=${G2Filter1Plant1Truss7[0].trussNumber}&setFruits=${G2Filter1Plant1Truss7[0].setFruits}&setFlowers=${G2Filter1Plant1Truss7[0].setFlowers}&pruningNumber=${G2Filter1Plant1Truss7[0].pruningNumber}&fruitLoad=${G2Filter1Plant1Truss7[0].fruitLoad}&fruitDiameter=${G2Filter1Plant1Truss7[0].fruitDiameter}&pruningFlower=${G2Filter1Plant1Truss7[0].pruneFlowering}&floweringTruss=${G2Filter1Plant1Truss7[0].floweringTrussss}&pruningSet=${G2Filter1Plant1Truss7[0].prunSetting}&settingTruss=${G2Filter1Plant1Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant1Truss7[0].pruningHar}&harvestTruss=${G2Filter1Plant1Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url245);

                                        fetch(url245, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G2Filter1Plant1Truss8.length) {

                                              const scriptUrl246 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url246 = `${scriptUrl246}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant1Truss8[0].plantNumber}&trussNumber=${G2Filter1Plant1Truss8[0].trussNumber}&setFruits=${G2Filter1Plant1Truss8[0].setFruits}&setFlowers=${G2Filter1Plant1Truss8[0].setFlowers}&pruningNumber=${G2Filter1Plant1Truss8[0].pruningNumber}&fruitLoad=${G2Filter1Plant1Truss8[0].fruitLoad}&fruitDiameter=${G2Filter1Plant1Truss8[0].fruitDiameter}&pruningFlower=${G2Filter1Plant1Truss8[0].pruneFlowering}&floweringTruss=${G2Filter1Plant1Truss8[0].floweringTrussss}&pruningSet=${G2Filter1Plant1Truss8[0].prunSetting}&settingTruss=${G2Filter1Plant1Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant1Truss8[0].pruningHar}&harvestTruss=${G2Filter1Plant1Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url246);

                                              fetch(url246, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G2Filter1Plant1Truss9.length) {

                                                    const scriptUrl247 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url247 = `${scriptUrl247}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant1Truss9[0].plantNumber}&trussNumber=${G2Filter1Plant1Truss9[0].trussNumber}&setFruits=${G2Filter1Plant1Truss9[0].setFruits}&setFlowers=${G2Filter1Plant1Truss9[0].setFlowers}&pruningNumber=${G2Filter1Plant1Truss9[0].pruningNumber}&fruitLoad=${G2Filter1Plant1Truss9[0].fruitLoad}&fruitDiameter=${G2Filter1Plant1Truss9[0].fruitDiameter}&pruningFlower=${G2Filter1Plant1Truss9[0].pruneFlowering}&floweringTruss=${G2Filter1Plant1Truss9[0].floweringTrussss}&pruningSet=${G2Filter1Plant1Truss9[0].prunSetting}&settingTruss=${G2Filter1Plant1Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant1Truss9[0].pruningHar}&harvestTruss=${G2Filter1Plant1Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url247);

                                                    fetch(url247, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G2Filter1Plant1Truss0.length) {

                                                          const scriptUrl248 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url248 = `${scriptUrl248}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant1Truss0[0].plantNumber}&trussNumber=${G2Filter1Plant1Truss0[0].trussNumber}&setFruits=${G2Filter1Plant1Truss0[0].setFruits}&setFlowers=${G2Filter1Plant1Truss0[0].setFlowers}&pruningNumber=${G2Filter1Plant1Truss0[0].pruningNumber}&fruitLoad=${G2Filter1Plant1Truss0[0].fruitLoad}&fruitDiameter=${G2Filter1Plant1Truss0[0].fruitDiameter}&pruningFlower=${G2Filter1Plant1Truss0[0].pruneFlowering}&floweringTruss=${G2Filter1Plant1Truss0[0].floweringTrussss}&pruningSet=${G2Filter1Plant1Truss0[0].prunSetting}&settingTruss=${G2Filter1Plant1Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant1Truss0[0].pruningHar}&harvestTruss=${G2Filter1Plant1Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url248);

                                                          fetch(url248, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow3Plant2Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow3Plant2Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow3Plant2Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow3Plant2Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow3Plant2Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow3Plant2Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow3Plant2Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow3Plant2Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow3Plant2Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow3Plant2Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow3Plant2Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow3Plant2Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow3Plant2Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow3Plant2Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow3Plant2Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow3Plant2Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow3Plant2Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow3Plant2Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow3Plant2Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow3Plant2Trusses()
      }
    });

  }

  sendRow3Plant2Trusses = () => {

    this.setState({ isLoading: true })


    //INITIALIZATION G1 MERLICE ROW 85/86 PLANT 10
    let G2Filter1Plant2Truss1 = []
    let G2Filter1Plant2Truss2 = []
    let G2Filter1Plant2Truss3 = []
    let G2Filter1Plant2Truss4 = []
    let G2Filter1Plant2Truss5 = []
    let G2Filter1Plant2Truss6 = []
    let G2Filter1Plant2Truss7 = []
    let G2Filter1Plant2Truss8 = []
    let G2Filter1Plant2Truss9 = []
    let G2Filter1Plant2Truss0 = []
    //END

    //GER 3 Merlice/ Plant 1/ 70-71/ Truss Number 1-10

    G2Filter1Plant2Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G2Filter1Plant2Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G2Filter1Plant2Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G2Filter1Plant2Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G2Filter1Plant2Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G2Filter1Plant2Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G2Filter1Plant2Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G2Filter1Plant2Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G2Filter1Plant2Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G2Filter1Plant2Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 0

      )
    });

    //END

    const scriptUrl249 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url249 = `${scriptUrl249}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant2Truss1[0].plantNumber}&trussNumber=${G2Filter1Plant2Truss1[0].trussNumber}&setFruits=${G2Filter1Plant2Truss1[0].setFruits}&setFlowers=${G2Filter1Plant2Truss1[0].setFlowers}&pruningNumber=${G2Filter1Plant2Truss1[0].pruningNumber}&fruitLoad=${G2Filter1Plant2Truss1[0].fruitLoad}&fruitDiameter=${G2Filter1Plant2Truss1[0].fruitDiameter}&pruningFlower=${G2Filter1Plant2Truss1[0].pruneFlowering}&floweringTruss=${G2Filter1Plant2Truss1[0].floweringTrussss}&pruningSet=${G2Filter1Plant2Truss1[0].prunSetting}&settingTruss=${G2Filter1Plant2Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant2Truss1[0].pruningHar}&harvestTruss=${G2Filter1Plant2Truss1[0].harvestTruss}`;

    console.log("URL : " + url249);

    fetch(url249, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G2Filter1Plant2Truss2.length) {

          const scriptUrl250 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url250 = `${scriptUrl250}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant2Truss2[0].plantNumber}&trussNumber=${G2Filter1Plant2Truss2[0].trussNumber}&setFruits=${G2Filter1Plant2Truss2[0].setFruits}&setFlowers=${G2Filter1Plant2Truss2[0].setFlowers}&pruningNumber=${G2Filter1Plant2Truss2[0].pruningNumber}&fruitLoad=${G2Filter1Plant2Truss2[0].fruitLoad}&fruitDiameter=${G2Filter1Plant2Truss2[0].fruitDiameter}&pruningFlower=${G2Filter1Plant2Truss2[0].pruneFlowering}&floweringTruss=${G2Filter1Plant2Truss2[0].floweringTrussss}&pruningSet=${G2Filter1Plant2Truss2[0].prunSetting}&settingTruss=${G2Filter1Plant2Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant2Truss2[0].pruningHar}&harvestTruss=${G2Filter1Plant2Truss2[0].harvestTruss}`;

          console.log("URL : " + url250);

          fetch(url250, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G2Filter1Plant2Truss3.length) {

                const scriptUrl251 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url251 = `${scriptUrl251}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant2Truss3[0].plantNumber}&trussNumber=${G2Filter1Plant2Truss3[0].trussNumber}&setFruits=${G2Filter1Plant2Truss3[0].setFruits}&setFlowers=${G2Filter1Plant2Truss3[0].setFlowers}&pruningNumber=${G2Filter1Plant2Truss3[0].pruningNumber}&fruitLoad=${G2Filter1Plant2Truss3[0].fruitLoad}&fruitDiameter=${G2Filter1Plant2Truss3[0].fruitDiameter}&pruningFlower=${G2Filter1Plant2Truss3[0].pruneFlowering}&floweringTruss=${G2Filter1Plant2Truss3[0].floweringTrussss}&pruningSet=${G2Filter1Plant2Truss3[0].prunSetting}&settingTruss=${G2Filter1Plant2Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant2Truss3[0].pruningHar}&harvestTruss=${G2Filter1Plant2Truss3[0].harvestTruss}`;

                console.log("URL : " + url251);

                fetch(url251, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G2Filter1Plant2Truss4.length) {

                      const scriptUrl252 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url252 = `${scriptUrl252}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant2Truss4[0].plantNumber}&trussNumber=${G2Filter1Plant2Truss4[0].trussNumber}&setFruits=${G2Filter1Plant2Truss4[0].setFruits}&setFlowers=${G2Filter1Plant2Truss4[0].setFlowers}&pruningNumber=${G2Filter1Plant2Truss4[0].pruningNumber}&fruitLoad=${G2Filter1Plant2Truss4[0].fruitLoad}&fruitDiameter=${G2Filter1Plant2Truss4[0].fruitDiameter}&pruningFlower=${G2Filter1Plant2Truss4[0].pruneFlowering}&floweringTruss=${G2Filter1Plant2Truss4[0].floweringTrussss}&pruningSet=${G2Filter1Plant2Truss4[0].prunSetting}&settingTruss=${G2Filter1Plant2Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant2Truss4[0].pruningHar}&harvestTruss=${G2Filter1Plant2Truss4[0].harvestTruss}`;

                      console.log("URL : " + url252);

                      fetch(url252, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G2Filter1Plant2Truss5.length) {

                            const scriptUrl253 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url253 = `${scriptUrl253}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant2Truss5[0].plantNumber}&trussNumber=${G2Filter1Plant2Truss5[0].trussNumber}&setFruits=${G2Filter1Plant2Truss5[0].setFruits}&setFlowers=${G2Filter1Plant2Truss5[0].setFlowers}&pruningNumber=${G2Filter1Plant2Truss5[0].pruningNumber}&fruitLoad=${G2Filter1Plant2Truss5[0].fruitLoad}&fruitDiameter=${G2Filter1Plant2Truss5[0].fruitDiameter}&pruningFlower=${G2Filter1Plant2Truss5[0].pruneFlowering}&floweringTruss=${G2Filter1Plant2Truss5[0].floweringTrussss}&pruningSet=${G2Filter1Plant2Truss5[0].prunSetting}&settingTruss=${G2Filter1Plant2Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant2Truss5[0].pruningHar}&harvestTruss=${G2Filter1Plant2Truss5[0].harvestTruss}`;

                            console.log("URL : " + url253);

                            fetch(url253, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G2Filter1Plant2Truss6.length) {

                                  const scriptUrl254 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url254 = `${scriptUrl254}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant2Truss6[0].plantNumber}&trussNumber=${G2Filter1Plant2Truss6[0].trussNumber}&setFruits=${G2Filter1Plant2Truss6[0].setFruits}&setFlowers=${G2Filter1Plant2Truss6[0].setFlowers}&pruningNumber=${G2Filter1Plant2Truss6[0].pruningNumber}&fruitLoad=${G2Filter1Plant2Truss6[0].fruitLoad}&fruitDiameter=${G2Filter1Plant2Truss6[0].fruitDiameter}&pruningFlower=${G2Filter1Plant2Truss6[0].pruneFlowering}&floweringTruss=${G2Filter1Plant2Truss6[0].floweringTrussss}&pruningSet=${G2Filter1Plant2Truss6[0].prunSetting}&settingTruss=${G2Filter1Plant2Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant2Truss6[0].pruningHar}&harvestTruss=${G2Filter1Plant2Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url254);

                                  fetch(url254, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G2Filter1Plant2Truss7.length) {

                                        const scriptUrl255 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url255 = `${scriptUrl255}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant2Truss7[0].plantNumber}&trussNumber=${G2Filter1Plant2Truss7[0].trussNumber}&setFruits=${G2Filter1Plant2Truss7[0].setFruits}&setFlowers=${G2Filter1Plant2Truss7[0].setFlowers}&pruningNumber=${G2Filter1Plant2Truss7[0].pruningNumber}&fruitLoad=${G2Filter1Plant2Truss7[0].fruitLoad}&fruitDiameter=${G2Filter1Plant2Truss7[0].fruitDiameter}&pruningFlower=${G2Filter1Plant2Truss7[0].pruneFlowering}&floweringTruss=${G2Filter1Plant2Truss7[0].floweringTrussss}&pruningSet=${G2Filter1Plant2Truss7[0].prunSetting}&settingTruss=${G2Filter1Plant2Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant2Truss7[0].pruningHar}&harvestTruss=${G2Filter1Plant2Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url255);

                                        fetch(url255, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G2Filter1Plant2Truss8.length) {

                                              const scriptUrl256 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url256 = `${scriptUrl256}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant2Truss8[0].plantNumber}&trussNumber=${G2Filter1Plant2Truss8[0].trussNumber}&setFruits=${G2Filter1Plant2Truss8[0].setFruits}&setFlowers=${G2Filter1Plant2Truss8[0].setFlowers}&pruningNumber=${G2Filter1Plant2Truss8[0].pruningNumber}&fruitLoad=${G2Filter1Plant2Truss8[0].fruitLoad}&fruitDiameter=${G2Filter1Plant2Truss8[0].fruitDiameter}&pruningFlower=${G2Filter1Plant2Truss8[0].pruneFlowering}&floweringTruss=${G2Filter1Plant2Truss8[0].floweringTrussss}&pruningSet=${G2Filter1Plant2Truss8[0].prunSetting}&settingTruss=${G2Filter1Plant2Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant2Truss8[0].pruningHar}&harvestTruss=${G2Filter1Plant2Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url256);

                                              fetch(url256, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G2Filter1Plant2Truss9.length) {

                                                    const scriptUrl257 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url257 = `${scriptUrl257}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant2Truss9[0].plantNumber}&trussNumber=${G2Filter1Plant2Truss9[0].trussNumber}&setFruits=${G2Filter1Plant2Truss9[0].setFruits}&setFlowers=${G2Filter1Plant2Truss9[0].setFlowers}&pruningNumber=${G2Filter1Plant2Truss9[0].pruningNumber}&fruitLoad=${G2Filter1Plant2Truss9[0].fruitLoad}&fruitDiameter=${G2Filter1Plant2Truss9[0].fruitDiameter}&pruningFlower=${G2Filter1Plant2Truss9[0].pruneFlowering}&floweringTruss=${G2Filter1Plant2Truss9[0].floweringTrussss}&pruningSet=${G2Filter1Plant2Truss9[0].prunSetting}&settingTruss=${G2Filter1Plant2Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant2Truss9[0].pruningHar}&harvestTruss=${G2Filter1Plant2Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url257);

                                                    fetch(url257, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G2Filter1Plant2Truss0.length) {

                                                          const scriptUrl258 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url258 = `${scriptUrl258}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant2Truss0[0].plantNumber}&trussNumber=${G2Filter1Plant2Truss0[0].trussNumber}&setFruits=${G2Filter1Plant2Truss0[0].setFruits}&setFlowers=${G2Filter1Plant2Truss0[0].setFlowers}&pruningNumber=${G2Filter1Plant2Truss0[0].pruningNumber}&fruitLoad=${G2Filter1Plant2Truss0[0].fruitLoad}&fruitDiameter=${G2Filter1Plant2Truss0[0].fruitDiameter}&pruningFlower=${G2Filter1Plant2Truss0[0].pruneFlowering}&floweringTruss=${G2Filter1Plant2Truss0[0].floweringTrussss}&pruningSet=${G2Filter1Plant2Truss0[0].prunSetting}&settingTruss=${G2Filter1Plant2Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant2Truss0[0].pruningHar}&harvestTruss=${G2Filter1Plant2Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url258);

                                                          fetch(url258, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow3Plant3Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow3Plant3Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow3Plant3Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow3Plant3Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow3Plant3Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow3Plant3Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow3Plant3Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow3Plant3Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow3Plant3Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow3Plant3Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow3Plant3Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow3Plant3Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow3Plant3Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow3Plant3Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow3Plant3Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow3Plant3Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow3Plant3Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow3Plant3Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow3Plant3Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow3Plant3Trusses()
      }
    });


  }

  sendRow3Plant3Trusses = () => {

    this.setState({ isLoading: true })

     //INITIALIZATION G1 MERLICE ROW 85/86 PLANT 10
     let G2Filter1Plant3Truss1 = []
     let G2Filter1Plant3Truss2 = []
     let G2Filter1Plant3Truss3 = []
     let G2Filter1Plant3Truss4 = []
     let G2Filter1Plant3Truss5 = []
     let G2Filter1Plant3Truss6 = []
     let G2Filter1Plant3Truss7 = []
     let G2Filter1Plant3Truss8 = []
     let G2Filter1Plant3Truss9 = []
     let G2Filter1Plant3Truss0 = []
     //END
 
     //GER 2 Merlice/ Plant 3/ 70-71/ Truss Number 1-10
 
     G2Filter1Plant3Truss1 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '3' &&
         sampleItemTruss.trussNumber === 1
 
       )
     });
 
     G2Filter1Plant3Truss2 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '3' &&
         sampleItemTruss.trussNumber === 2
 
       )
     });
 
     G2Filter1Plant3Truss3 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '3' &&
         sampleItemTruss.trussNumber === 3
 
       )
     });
 
     G2Filter1Plant3Truss4 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '3' &&
         sampleItemTruss.trussNumber === 4
 
       )
     });
 
     G2Filter1Plant3Truss5 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '3' &&
         sampleItemTruss.trussNumber === 5
 
       )
     });
 
     G2Filter1Plant3Truss6 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '3' &&
         sampleItemTruss.trussNumber === 6
 
       )
     });
 
     G2Filter1Plant3Truss7 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '3' &&
         sampleItemTruss.trussNumber === 7
 
       )
     });
 
     G2Filter1Plant3Truss8 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '3' &&
         sampleItemTruss.trussNumber === 8
 
       )
     });
 
     G2Filter1Plant3Truss9 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '3' &&
         sampleItemTruss.trussNumber === 9
 
       )
     });
 
     G2Filter1Plant3Truss0 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '3' &&
         sampleItemTruss.trussNumber === 0
 
       )
     });
 
     //END
 
     const scriptUrl259 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
     const url259 = `${scriptUrl259}?
   callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant3Truss1[0].plantNumber}&trussNumber=${G2Filter1Plant3Truss1[0].trussNumber}&setFruits=${G2Filter1Plant3Truss1[0].setFruits}&setFlowers=${G2Filter1Plant3Truss1[0].setFlowers}&pruningNumber=${G2Filter1Plant3Truss1[0].pruningNumber}&fruitLoad=${G2Filter1Plant3Truss1[0].fruitLoad}&fruitDiameter=${G2Filter1Plant3Truss1[0].fruitDiameter}&pruningFlower=${G2Filter1Plant3Truss1[0].pruneFlowering}&floweringTruss=${G2Filter1Plant3Truss1[0].floweringTrussss}&pruningSet=${G2Filter1Plant3Truss1[0].prunSetting}&settingTruss=${G2Filter1Plant3Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant3Truss1[0].pruningHar}&harvestTruss=${G2Filter1Plant3Truss1[0].harvestTruss}`;
 
     console.log("URL : " + url259);
 
     fetch(url259, { mode: 'no-cors' }).then((response) => {
 
       if (response.status === 200) {
 
         if (G2Filter1Plant3Truss2.length) {
 
           const scriptUrl260 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
           const url260 = `${scriptUrl260}?
   callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant3Truss2[0].plantNumber}&trussNumber=${G2Filter1Plant3Truss2[0].trussNumber}&setFruits=${G2Filter1Plant3Truss2[0].setFruits}&setFlowers=${G2Filter1Plant3Truss2[0].setFlowers}&pruningNumber=${G2Filter1Plant3Truss2[0].pruningNumber}&fruitLoad=${G2Filter1Plant3Truss2[0].fruitLoad}&fruitDiameter=${G2Filter1Plant3Truss2[0].fruitDiameter}&pruningFlower=${G2Filter1Plant3Truss2[0].pruneFlowering}&floweringTruss=${G2Filter1Plant3Truss2[0].floweringTrussss}&pruningSet=${G2Filter1Plant3Truss2[0].prunSetting}&settingTruss=${G2Filter1Plant3Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant3Truss2[0].pruningHar}&harvestTruss=${G2Filter1Plant3Truss2[0].harvestTruss}`;
 
           console.log("URL : " + url260);
 
           fetch(url260, { mode: 'no-cors' }).then((response) => {
 
             if (response.status === 200) {
 
               if (G2Filter1Plant3Truss3.length) {
 
                 const scriptUrl261 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                 const url261 = `${scriptUrl261}?
         callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant3Truss3[0].plantNumber}&trussNumber=${G2Filter1Plant3Truss3[0].trussNumber}&setFruits=${G2Filter1Plant3Truss3[0].setFruits}&setFlowers=${G2Filter1Plant3Truss3[0].setFlowers}&pruningNumber=${G2Filter1Plant3Truss3[0].pruningNumber}&fruitLoad=${G2Filter1Plant3Truss3[0].fruitLoad}&fruitDiameter=${G2Filter1Plant3Truss3[0].fruitDiameter}&pruningFlower=${G2Filter1Plant3Truss3[0].pruneFlowering}&floweringTruss=${G2Filter1Plant3Truss3[0].floweringTrussss}&pruningSet=${G2Filter1Plant3Truss3[0].prunSetting}&settingTruss=${G2Filter1Plant3Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant3Truss3[0].pruningHar}&harvestTruss=${G2Filter1Plant3Truss3[0].harvestTruss}`;
 
                 console.log("URL : " + url261);
 
                 fetch(url261, { mode: 'no-cors' }).then((response) => {
 
                   if (response.status === 200) {
 
                     if (G2Filter1Plant3Truss4.length) {
 
                       const scriptUrl262 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                       const url262 = `${scriptUrl262}?
         callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant3Truss4[0].plantNumber}&trussNumber=${G2Filter1Plant3Truss4[0].trussNumber}&setFruits=${G2Filter1Plant3Truss4[0].setFruits}&setFlowers=${G2Filter1Plant3Truss4[0].setFlowers}&pruningNumber=${G2Filter1Plant3Truss4[0].pruningNumber}&fruitLoad=${G2Filter1Plant3Truss4[0].fruitLoad}&fruitDiameter=${G2Filter1Plant3Truss4[0].fruitDiameter}&pruningFlower=${G2Filter1Plant3Truss4[0].pruneFlowering}&floweringTruss=${G2Filter1Plant3Truss4[0].floweringTrussss}&pruningSet=${G2Filter1Plant3Truss4[0].prunSetting}&settingTruss=${G2Filter1Plant3Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant3Truss4[0].pruningHar}&harvestTruss=${G2Filter1Plant3Truss4[0].harvestTruss}`;
 
                       console.log("URL : " + url262);
 
                       fetch(url262, { mode: 'no-cors' }).then((response) => {
 
                         if (response.status === 200) {
 
                           if (G2Filter1Plant3Truss5.length) {
 
                             const scriptUrl263 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                             const url263 = `${scriptUrl263}?
         callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant3Truss5[0].plantNumber}&trussNumber=${G2Filter1Plant3Truss5[0].trussNumber}&setFruits=${G2Filter1Plant3Truss5[0].setFruits}&setFlowers=${G2Filter1Plant3Truss5[0].setFlowers}&pruningNumber=${G2Filter1Plant3Truss5[0].pruningNumber}&fruitLoad=${G2Filter1Plant3Truss5[0].fruitLoad}&fruitDiameter=${G2Filter1Plant3Truss5[0].fruitDiameter}&pruningFlower=${G2Filter1Plant3Truss5[0].pruneFlowering}&floweringTruss=${G2Filter1Plant3Truss5[0].floweringTrussss}&pruningSet=${G2Filter1Plant3Truss5[0].prunSetting}&settingTruss=${G2Filter1Plant3Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant3Truss5[0].pruningHar}&harvestTruss=${G2Filter1Plant3Truss5[0].harvestTruss}`;
 
                             console.log("URL : " + url263);
 
                             fetch(url263, { mode: 'no-cors' }).then((response) => {
 
                               if (response.status === 200) {
 
                                 if (G2Filter1Plant3Truss6.length) {
 
                                   const scriptUrl264 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                   const url264 = `${scriptUrl264}?
               callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant3Truss6[0].plantNumber}&trussNumber=${G2Filter1Plant3Truss6[0].trussNumber}&setFruits=${G2Filter1Plant3Truss6[0].setFruits}&setFlowers=${G2Filter1Plant3Truss6[0].setFlowers}&pruningNumber=${G2Filter1Plant3Truss6[0].pruningNumber}&fruitLoad=${G2Filter1Plant3Truss6[0].fruitLoad}&fruitDiameter=${G2Filter1Plant3Truss6[0].fruitDiameter}&pruningFlower=${G2Filter1Plant3Truss6[0].pruneFlowering}&floweringTruss=${G2Filter1Plant3Truss6[0].floweringTrussss}&pruningSet=${G2Filter1Plant3Truss6[0].prunSetting}&settingTruss=${G2Filter1Plant3Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant3Truss6[0].pruningHar}&harvestTruss=${G2Filter1Plant3Truss6[0].harvestTruss}`;
 
                                   console.log("URL : " + url264);
 
                                   fetch(url264, { mode: 'no-cors' }).then((response) => {
 
                                     if (response.status === 200) {
 
                                       if (G2Filter1Plant3Truss7.length) {
 
                                         const scriptUrl265 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                         const url265 = `${scriptUrl265}?
               callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant3Truss7[0].plantNumber}&trussNumber=${G2Filter1Plant3Truss7[0].trussNumber}&setFruits=${G2Filter1Plant3Truss7[0].setFruits}&setFlowers=${G2Filter1Plant3Truss7[0].setFlowers}&pruningNumber=${G2Filter1Plant3Truss7[0].pruningNumber}&fruitLoad=${G2Filter1Plant3Truss7[0].fruitLoad}&fruitDiameter=${G2Filter1Plant3Truss7[0].fruitDiameter}&pruningFlower=${G2Filter1Plant3Truss7[0].pruneFlowering}&floweringTruss=${G2Filter1Plant3Truss7[0].floweringTrussss}&pruningSet=${G2Filter1Plant3Truss7[0].prunSetting}&settingTruss=${G2Filter1Plant3Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant3Truss7[0].pruningHar}&harvestTruss=${G2Filter1Plant3Truss7[0].harvestTruss}`;
 
                                         console.log("URL : " + url265);
 
                                         fetch(url265, { mode: 'no-cors' }).then((response) => {
 
                                           if (response.status === 200) {
 
                                             if (G2Filter1Plant3Truss8.length) {
 
                                               const scriptUrl266 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                               const url266 = `${scriptUrl266}?
                     callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant3Truss8[0].plantNumber}&trussNumber=${G2Filter1Plant3Truss8[0].trussNumber}&setFruits=${G2Filter1Plant3Truss8[0].setFruits}&setFlowers=${G2Filter1Plant3Truss8[0].setFlowers}&pruningNumber=${G2Filter1Plant3Truss8[0].pruningNumber}&fruitLoad=${G2Filter1Plant3Truss8[0].fruitLoad}&fruitDiameter=${G2Filter1Plant3Truss8[0].fruitDiameter}&pruningFlower=${G2Filter1Plant3Truss8[0].pruneFlowering}&floweringTruss=${G2Filter1Plant3Truss8[0].floweringTrussss}&pruningSet=${G2Filter1Plant3Truss8[0].prunSetting}&settingTruss=${G2Filter1Plant3Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant3Truss8[0].pruningHar}&harvestTruss=${G2Filter1Plant3Truss8[0].harvestTruss}`;
 
                                               console.log("URL : " + url266);
 
                                               fetch(url266, { mode: 'no-cors' }).then((response) => {
 
                                                 if (response.status === 200) {
 
                                                   if (G2Filter1Plant3Truss9.length) {
 
                                                     const scriptUrl267 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                     const url267 = `${scriptUrl267}?
                     callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant3Truss9[0].plantNumber}&trussNumber=${G2Filter1Plant3Truss9[0].trussNumber}&setFruits=${G2Filter1Plant3Truss9[0].setFruits}&setFlowers=${G2Filter1Plant3Truss9[0].setFlowers}&pruningNumber=${G2Filter1Plant3Truss9[0].pruningNumber}&fruitLoad=${G2Filter1Plant3Truss9[0].fruitLoad}&fruitDiameter=${G2Filter1Plant3Truss9[0].fruitDiameter}&pruningFlower=${G2Filter1Plant3Truss9[0].pruneFlowering}&floweringTruss=${G2Filter1Plant3Truss9[0].floweringTrussss}&pruningSet=${G2Filter1Plant3Truss9[0].prunSetting}&settingTruss=${G2Filter1Plant3Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant3Truss9[0].pruningHar}&harvestTruss=${G2Filter1Plant3Truss9[0].harvestTruss}`;
 
                                                     console.log("URL : " + url267);
 
                                                     fetch(url267, { mode: 'no-cors' }).then((response) => {
 
                                                       if (response.status === 200) {
 
                                                         if (G2Filter1Plant3Truss0.length) {
 
                                                           const scriptUrl268 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                           const url268 = `${scriptUrl268}?
                     callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant3Truss0[0].plantNumber}&trussNumber=${G2Filter1Plant3Truss0[0].trussNumber}&setFruits=${G2Filter1Plant3Truss0[0].setFruits}&setFlowers=${G2Filter1Plant3Truss0[0].setFlowers}&pruningNumber=${G2Filter1Plant3Truss0[0].pruningNumber}&fruitLoad=${G2Filter1Plant3Truss0[0].fruitLoad}&fruitDiameter=${G2Filter1Plant3Truss0[0].fruitDiameter}&pruningFlower=${G2Filter1Plant3Truss0[0].pruneFlowering}&floweringTruss=${G2Filter1Plant3Truss0[0].floweringTrussss}&pruningSet=${G2Filter1Plant3Truss0[0].prunSetting}&settingTruss=${G2Filter1Plant3Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant3Truss0[0].pruningHar}&harvestTruss=${G2Filter1Plant3Truss0[0].harvestTruss}`;
 
                                                           console.log("URL : " + url268);
 
                                                           fetch(url268, { mode: 'no-cors' }).then((response) => {
 
                                                             if (response.status === 200) {
 
                                                               this.sendRow3Plant4Trusses();
 
 
                                                             } else {
 
                                                               this.setState({ isLoading: false })
                                                               this.sendRow3Plant4Trusses()
 
                                                             }
 
                                                           });
 
                                                         } else {
                                                           this.setState({ isLoading: false })
                                                           this.sendRow3Plant4Trusses()
 
                                                         }
 
                                                       } else {
 
                                                         this.setState({ isLoading: false })
                                                         this.sendRow3Plant4Trusses()
                                                       }
 
                                                     });
 
                                                   } else {
                                                     this.setState({ isLoading: false })
                                                     this.sendRow3Plant4Trusses()
 
                                                   }
 
                                                 } else {
 
                                                   this.setState({ isLoading: false })
                                                   this.sendRow3Plant4Trusses()
                                                 }
                                               });
 
                                             } else {
                                               this.setState({ isLoading: false })
                                               this.sendRow3Plant4Trusses()
 
                                             }
 
                                           } else {
 
                                             this.setState({ isLoading: false })
                                             this.sendRow3Plant4Trusses()
                                           }
 
                                         });
 
                                       } else {
                                         this.setState({ isLoading: false })
                                         this.sendRow3Plant4Trusses()
 
                                       }
 
                                     } else {
 
                                       this.setState({ isLoading: false })
                                       this.sendRow3Plant4Trusses()
                                     }
 
                                   });
 
                                 } else {
                                   this.setState({ isLoading: false })
                                   this.sendRow3Plant4Trusses()
 
                                 }
 
                               } else {
 
                                 this.setState({ isLoading: false })
                                 this.sendRow3Plant4Trusses()
                               }
 
                             });
 
                           } else {
                             this.setState({ isLoading: false })
                             this.sendRow3Plant4Trusses()
 
                           }
 
                         } else {
 
                           this.setState({ isLoading: false })
                           this.sendRow3Plant4Trusses()
                         }
 
 
                       });
 
                     } else {
                       this.setState({ isLoading: false })
                       this.sendRow3Plant4Trusses()
 
                     }
 
                   } else {
 
                     this.setState({ isLoading: false })
                     this.sendRow3Plant4Trusses()
                   }
 
                 });
 
               } else {
                 this.setState({ isLoading: false })
                 this.sendRow3Plant4Trusses()
 
               }
 
             } else {
 
               this.setState({ isLoading: false })
               this.sendRow3Plant4Trusses()
             }
 
           });
 
         } else {
           this.setState({ isLoading: false })
           this.sendRow3Plant4Trusses()
 
         }
 
       } else {
 
         this.setState({ isLoading: false })
         this.sendRow3Plant4Trusses()
       }
     });

  }

  sendRow3Plant4Trusses = () => {

    this.setState({ isLoading: true })

     //INITIALIZATION G2 MERLICE ROW 70/71 PLANT 10
     let G2Filter1Plant4Truss1 = []
     let G2Filter1Plant4Truss2 = []
     let G2Filter1Plant4Truss3 = []
     let G2Filter1Plant4Truss4 = []
     let G2Filter1Plant4Truss5 = []
     let G2Filter1Plant4Truss6 = []
     let G2Filter1Plant4Truss7 = []
     let G2Filter1Plant4Truss8 = []
     let G2Filter1Plant4Truss9 = []
     let G2Filter1Plant4Truss0 = []
     //END
 
     //GER 2 Merlice/ Plant 4/ 70-71/ Truss Number 1-10
 
     G2Filter1Plant4Truss1 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 1
 
       )
     });
 
     G2Filter1Plant4Truss2 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 2
 
       )
     });
 
     G2Filter1Plant4Truss3 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 3
 
       )
     });
 
     G2Filter1Plant4Truss4 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 4
 
       )
     });
 
     G2Filter1Plant4Truss5 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 5
 
       )
     });
 
     G2Filter1Plant4Truss6 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 6
 
       )
     });
 
     G2Filter1Plant4Truss7 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 7
 
       )
     });
 
     G2Filter1Plant4Truss8 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 8
 
       )
     });
 
     G2Filter1Plant4Truss9 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 9
 
       )
     });
 
     G2Filter1Plant4Truss0 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '70/71' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 0
 
       )
     });
 
     //END
 
     const scriptUrl269 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
     const url269 = `${scriptUrl269}?
   callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant4Truss1[0].plantNumber}&trussNumber=${G2Filter1Plant4Truss1[0].trussNumber}&setFruits=${G2Filter1Plant4Truss1[0].setFruits}&setFlowers=${G2Filter1Plant4Truss1[0].setFlowers}&pruningNumber=${G2Filter1Plant4Truss1[0].pruningNumber}&fruitLoad=${G2Filter1Plant4Truss1[0].fruitLoad}&fruitDiameter=${G2Filter1Plant4Truss1[0].fruitDiameter}&pruningFlower=${G2Filter1Plant4Truss1[0].pruneFlowering}&floweringTruss=${G2Filter1Plant4Truss1[0].floweringTrussss}&pruningSet=${G2Filter1Plant4Truss1[0].prunSetting}&settingTruss=${G2Filter1Plant4Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant4Truss1[0].pruningHar}&harvestTruss=${G2Filter1Plant4Truss1[0].harvestTruss}`;
 
     console.log("URL : " + url269);
 
     fetch(url269, { mode: 'no-cors' }).then((response) => {
 
       if (response.status === 200) {
 
         if (G2Filter1Plant4Truss2.length) {
 
           const scriptUrl270 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
           const url270 = `${scriptUrl270}?
   callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant4Truss2[0].plantNumber}&trussNumber=${G2Filter1Plant4Truss2[0].trussNumber}&setFruits=${G2Filter1Plant4Truss2[0].setFruits}&setFlowers=${G2Filter1Plant4Truss2[0].setFlowers}&pruningNumber=${G2Filter1Plant4Truss2[0].pruningNumber}&fruitLoad=${G2Filter1Plant4Truss2[0].fruitLoad}&fruitDiameter=${G2Filter1Plant4Truss2[0].fruitDiameter}&pruningFlower=${G2Filter1Plant4Truss2[0].pruneFlowering}&floweringTruss=${G2Filter1Plant4Truss2[0].floweringTrussss}&pruningSet=${G2Filter1Plant4Truss2[0].prunSetting}&settingTruss=${G2Filter1Plant4Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant4Truss2[0].pruningHar}&harvestTruss=${G2Filter1Plant4Truss2[0].harvestTruss}`;
 
           console.log("URL : " + url270);
 
           fetch(url270, { mode: 'no-cors' }).then((response) => {
 
             if (response.status === 200) {
 
               if (G2Filter1Plant4Truss3.length) {
 
                 const scriptUrl271 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                 const url271 = `${scriptUrl271}?
         callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant4Truss3[0].plantNumber}&trussNumber=${G2Filter1Plant4Truss3[0].trussNumber}&setFruits=${G2Filter1Plant4Truss3[0].setFruits}&setFlowers=${G2Filter1Plant4Truss3[0].setFlowers}&pruningNumber=${G2Filter1Plant4Truss3[0].pruningNumber}&fruitLoad=${G2Filter1Plant4Truss3[0].fruitLoad}&fruitDiameter=${G2Filter1Plant4Truss3[0].fruitDiameter}&pruningFlower=${G2Filter1Plant4Truss3[0].pruneFlowering}&floweringTruss=${G2Filter1Plant4Truss3[0].floweringTrussss}&pruningSet=${G2Filter1Plant4Truss3[0].prunSetting}&settingTruss=${G2Filter1Plant4Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant4Truss3[0].pruningHar}&harvestTruss=${G2Filter1Plant4Truss3[0].harvestTruss}`;
 
                 console.log("URL : " + url271);
 
                 fetch(url271, { mode: 'no-cors' }).then((response) => {
 
                   if (response.status === 200) {
 
                     if (G2Filter1Plant4Truss4.length) {
 
                       const scriptUrl272 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                       const url272 = `${scriptUrl272}?
         callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant4Truss4[0].plantNumber}&trussNumber=${G2Filter1Plant4Truss4[0].trussNumber}&setFruits=${G2Filter1Plant4Truss4[0].setFruits}&setFlowers=${G2Filter1Plant4Truss4[0].setFlowers}&pruningNumber=${G2Filter1Plant4Truss4[0].pruningNumber}&fruitLoad=${G2Filter1Plant4Truss4[0].fruitLoad}&fruitDiameter=${G2Filter1Plant4Truss4[0].fruitDiameter}&pruningFlower=${G2Filter1Plant4Truss4[0].pruneFlowering}&floweringTruss=${G2Filter1Plant4Truss4[0].floweringTrussss}&pruningSet=${G2Filter1Plant4Truss4[0].prunSetting}&settingTruss=${G2Filter1Plant4Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant4Truss4[0].pruningHar}&harvestTruss=${G2Filter1Plant4Truss4[0].harvestTruss}`;
 
                       console.log("URL : " + url272);
 
                       fetch(url272, { mode: 'no-cors' }).then((response) => {
 
                         if (response.status === 200) {
 
                           if (G2Filter1Plant4Truss5.length) {
 
                             const scriptUrl273 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                             const url273 = `${scriptUrl273}?
         callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant4Truss5[0].plantNumber}&trussNumber=${G2Filter1Plant4Truss5[0].trussNumber}&setFruits=${G2Filter1Plant4Truss5[0].setFruits}&setFlowers=${G2Filter1Plant4Truss5[0].setFlowers}&pruningNumber=${G2Filter1Plant4Truss5[0].pruningNumber}&fruitLoad=${G2Filter1Plant4Truss5[0].fruitLoad}&fruitDiameter=${G2Filter1Plant4Truss5[0].fruitDiameter}&pruningFlower=${G2Filter1Plant4Truss5[0].pruneFlowering}&floweringTruss=${G2Filter1Plant4Truss5[0].floweringTrussss}&pruningSet=${G2Filter1Plant4Truss5[0].prunSetting}&settingTruss=${G2Filter1Plant4Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant4Truss5[0].pruningHar}&harvestTruss=${G2Filter1Plant4Truss5[0].harvestTruss}`;
 
                             console.log("URL : " + url273);
 
                             fetch(url273, { mode: 'no-cors' }).then((response) => {
 
                               if (response.status === 200) {
 
                                 if (G2Filter1Plant4Truss6.length) {
 
                                   const scriptUrl274 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                   const url274 = `${scriptUrl274}?
               callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant4Truss6[0].plantNumber}&trussNumber=${G2Filter1Plant4Truss6[0].trussNumber}&setFruits=${G2Filter1Plant4Truss6[0].setFruits}&setFlowers=${G2Filter1Plant4Truss6[0].setFlowers}&pruningNumber=${G2Filter1Plant4Truss6[0].pruningNumber}&fruitLoad=${G2Filter1Plant4Truss6[0].fruitLoad}&fruitDiameter=${G2Filter1Plant4Truss6[0].fruitDiameter}&pruningFlower=${G2Filter1Plant4Truss6[0].pruneFlowering}&floweringTruss=${G2Filter1Plant4Truss6[0].floweringTrussss}&pruningSet=${G2Filter1Plant4Truss6[0].prunSetting}&settingTruss=${G2Filter1Plant4Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant4Truss6[0].pruningHar}&harvestTruss=${G2Filter1Plant4Truss6[0].harvestTruss}`;
 
                                   console.log("URL : " + url274);
 
                                   fetch(url274, { mode: 'no-cors' }).then((response) => {
 
                                     if (response.status === 200) {
 
                                       if (G2Filter1Plant4Truss7.length) {
 
                                         const scriptUrl275 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                         const url275 = `${scriptUrl275}?
               callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant4Truss7[0].plantNumber}&trussNumber=${G2Filter1Plant4Truss7[0].trussNumber}&setFruits=${G2Filter1Plant4Truss7[0].setFruits}&setFlowers=${G2Filter1Plant4Truss7[0].setFlowers}&pruningNumber=${G2Filter1Plant4Truss7[0].pruningNumber}&fruitLoad=${G2Filter1Plant4Truss7[0].fruitLoad}&fruitDiameter=${G2Filter1Plant4Truss7[0].fruitDiameter}&pruningFlower=${G2Filter1Plant4Truss7[0].pruneFlowering}&floweringTruss=${G2Filter1Plant4Truss7[0].floweringTrussss}&pruningSet=${G2Filter1Plant4Truss7[0].prunSetting}&settingTruss=${G2Filter1Plant4Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant4Truss7[0].pruningHar}&harvestTruss=${G2Filter1Plant4Truss7[0].harvestTruss}`;
 
                                         console.log("URL : " + url275);
 
                                         fetch(url275, { mode: 'no-cors' }).then((response) => {
 
                                           if (response.status === 200) {
 
                                             if (G2Filter1Plant4Truss8.length) {
 
                                               const scriptUrl276 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                               const url276 = `${scriptUrl276}?
                     callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant4Truss8[0].plantNumber}&trussNumber=${G2Filter1Plant4Truss8[0].trussNumber}&setFruits=${G2Filter1Plant4Truss8[0].setFruits}&setFlowers=${G2Filter1Plant4Truss8[0].setFlowers}&pruningNumber=${G2Filter1Plant4Truss8[0].pruningNumber}&fruitLoad=${G2Filter1Plant4Truss8[0].fruitLoad}&fruitDiameter=${G2Filter1Plant4Truss8[0].fruitDiameter}&pruningFlower=${G2Filter1Plant4Truss8[0].pruneFlowering}&floweringTruss=${G2Filter1Plant4Truss8[0].floweringTrussss}&pruningSet=${G2Filter1Plant4Truss8[0].prunSetting}&settingTruss=${G2Filter1Plant4Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant4Truss8[0].pruningHar}&harvestTruss=${G2Filter1Plant4Truss8[0].harvestTruss}`;
 
                                               console.log("URL : " + url276);
 
                                               fetch(url276, { mode: 'no-cors' }).then((response) => {
 
                                                 if (response.status === 200) {
 
                                                   if (G2Filter1Plant4Truss9.length) {
 
                                                     const scriptUrl277 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                     const url277 = `${scriptUrl277}?
                     callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant4Truss9[0].plantNumber}&trussNumber=${G2Filter1Plant4Truss9[0].trussNumber}&setFruits=${G2Filter1Plant4Truss9[0].setFruits}&setFlowers=${G2Filter1Plant4Truss9[0].setFlowers}&pruningNumber=${G2Filter1Plant4Truss9[0].pruningNumber}&fruitLoad=${G2Filter1Plant4Truss9[0].fruitLoad}&fruitDiameter=${G2Filter1Plant4Truss9[0].fruitDiameter}&pruningFlower=${G2Filter1Plant4Truss9[0].pruneFlowering}&floweringTruss=${G2Filter1Plant4Truss9[0].floweringTrussss}&pruningSet=${G2Filter1Plant4Truss9[0].prunSetting}&settingTruss=${G2Filter1Plant4Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant4Truss9[0].pruningHar}&harvestTruss=${G2Filter1Plant4Truss9[0].harvestTruss}`;
 
                                                     console.log("URL : " + url277);
 
                                                     fetch(url277, { mode: 'no-cors' }).then((response) => {
 
                                                       if (response.status === 200) {
 
                                                         if (G2Filter1Plant4Truss0.length) {
 
                                                           const scriptUrl278 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                           const url278 = `${scriptUrl278}?
                     callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant4Truss0[0].plantNumber}&trussNumber=${G2Filter1Plant4Truss0[0].trussNumber}&setFruits=${G2Filter1Plant4Truss0[0].setFruits}&setFlowers=${G2Filter1Plant4Truss0[0].setFlowers}&pruningNumber=${G2Filter1Plant4Truss0[0].pruningNumber}&fruitLoad=${G2Filter1Plant4Truss0[0].fruitLoad}&fruitDiameter=${G2Filter1Plant4Truss0[0].fruitDiameter}&pruningFlower=${G2Filter1Plant4Truss0[0].pruneFlowering}&floweringTruss=${G2Filter1Plant4Truss0[0].floweringTrussss}&pruningSet=${G2Filter1Plant4Truss0[0].prunSetting}&settingTruss=${G2Filter1Plant4Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant4Truss0[0].pruningHar}&harvestTruss=${G2Filter1Plant4Truss0[0].harvestTruss}`;
 
                                                           console.log("URL : " + url278);
 
                                                           fetch(url278, { mode: 'no-cors' }).then((response) => {
 
                                                             if (response.status === 200) {
 
                                                               this.sendRow3Plant5Trusses();
 
 
                                                             } else {
 
                                                               this.setState({ isLoading: false })
                                                               this.sendRow3Plant5Trusses()
 
                                                             }
 
                                                           });
 
                                                         } else {
                                                           this.setState({ isLoading: false })
                                                           this.sendRow3Plant5Trusses()
 
                                                         }
 
                                                       } else {
 
                                                         this.setState({ isLoading: false })
                                                         this.sendRow3Plant5Trusses()
                                                       }
 
                                                     });
 
                                                   } else {
                                                     this.setState({ isLoading: false })
                                                     this.sendRow3Plant5Trusses()
 
                                                   }
 
                                                 } else {
 
                                                   this.setState({ isLoading: false })
                                                   this.sendRow3Plant5Trusses()
                                                 }
                                               });
 
                                             } else {
                                               this.setState({ isLoading: false })
                                               this.sendRow3Plant5Trusses()
 
                                             }
 
                                           } else {
 
                                             this.setState({ isLoading: false })
                                             this.sendRow3Plant5Trusses()
                                           }
 
                                         });
 
                                       } else {
                                         this.setState({ isLoading: false })
                                         this.sendRow3Plant5Trusses()
 
                                       }
 
                                     } else {
 
                                       this.setState({ isLoading: false })
                                       this.sendRow3Plant5Trusses()
                                     }
 
                                   });
 
                                 } else {
                                   this.setState({ isLoading: false })
                                   this.sendRow3Plant5Trusses()
 
                                 }
 
                               } else {
 
                                 this.setState({ isLoading: false })
                                 this.sendRow3Plant5Trusses()
                               }
 
                             });
 
                           } else {
                             this.setState({ isLoading: false })
                             this.sendRow3Plant5Trusses()
 
                           }
 
                         } else {
 
                           this.setState({ isLoading: false })
                           this.sendRow3Plant5Trusses()
                         }
 
 
                       });
 
                     } else {
                       this.setState({ isLoading: false })
                       this.sendRow3Plant5Trusses()
 
                     }
 
                   } else {
 
                     this.setState({ isLoading: false })
                     this.sendRow3Plant5Trusses()
                   }
 
                 });
 
               } else {
                 this.setState({ isLoading: false })
                 this.sendRow3Plant5Trusses()
 
               }
 
             } else {
 
               this.setState({ isLoading: false })
               this.sendRow3Plant5Trusses()
             }
 
           });
 
         } else {
           this.setState({ isLoading: false })
           this.sendRow3Plant5Trusses()
 
         }
 
       } else {
 
         this.setState({ isLoading: false })
         this.sendRow3Plant5Trusses()
       }
     });


  }

  sendRow3Plant5Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G2 MERLICE ROW 70/71 PLANT 10
    let G2Filter1Plant5Truss1 = []
    let G2Filter1Plant5Truss2 = []
    let G2Filter1Plant5Truss3 = []
    let G2Filter1Plant5Truss4 = []
    let G2Filter1Plant5Truss5 = []
    let G2Filter1Plant5Truss6 = []
    let G2Filter1Plant5Truss7 = []
    let G2Filter1Plant5Truss8 = []
    let G2Filter1Plant5Truss9 = []
    let G2Filter1Plant5Truss0 = []
    //END

    //GER 2 Merlice/ Plant 5/ 70-71/ Truss Number 1-10

    G2Filter1Plant5Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G2Filter1Plant5Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G2Filter1Plant5Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G2Filter1Plant5Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G2Filter1Plant5Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G2Filter1Plant5Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G2Filter1Plant5Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G2Filter1Plant5Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G2Filter1Plant5Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G2Filter1Plant5Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '5' &&
        sampleItemTruss.trussNumber === 0

      )
    });

    //END

    const scriptUrl279 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url279 = `${scriptUrl279}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant5Truss1[0].plantNumber}&trussNumber=${G2Filter1Plant5Truss1[0].trussNumber}&setFruits=${G2Filter1Plant5Truss1[0].setFruits}&setFlowers=${G2Filter1Plant5Truss1[0].setFlowers}&pruningNumber=${G2Filter1Plant5Truss1[0].pruningNumber}&fruitLoad=${G2Filter1Plant5Truss1[0].fruitLoad}&fruitDiameter=${G2Filter1Plant5Truss1[0].fruitDiameter}&pruningFlower=${G2Filter1Plant5Truss1[0].pruneFlowering}&floweringTruss=${G2Filter1Plant5Truss1[0].floweringTrussss}&pruningSet=${G2Filter1Plant5Truss1[0].prunSetting}&settingTruss=${G2Filter1Plant5Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant5Truss1[0].pruningHar}&harvestTruss=${G2Filter1Plant5Truss1[0].harvestTruss}`;

    console.log("URL : " + url279);

    fetch(url279, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G2Filter1Plant5Truss2.length) {

          const scriptUrl280 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url280 = `${scriptUrl280}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant5Truss2[0].plantNumber}&trussNumber=${G2Filter1Plant5Truss2[0].trussNumber}&setFruits=${G2Filter1Plant5Truss2[0].setFruits}&setFlowers=${G2Filter1Plant5Truss2[0].setFlowers}&pruningNumber=${G2Filter1Plant5Truss2[0].pruningNumber}&fruitLoad=${G2Filter1Plant5Truss2[0].fruitLoad}&fruitDiameter=${G2Filter1Plant5Truss2[0].fruitDiameter}&pruningFlower=${G2Filter1Plant5Truss2[0].pruneFlowering}&floweringTruss=${G2Filter1Plant5Truss2[0].floweringTrussss}&pruningSet=${G2Filter1Plant5Truss2[0].prunSetting}&settingTruss=${G2Filter1Plant5Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant5Truss2[0].pruningHar}&harvestTruss=${G2Filter1Plant5Truss2[0].harvestTruss}`;

          console.log("URL : " + url280);

          fetch(url280, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G2Filter1Plant5Truss3.length) {

                const scriptUrl281 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url281 = `${scriptUrl281}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant5Truss3[0].plantNumber}&trussNumber=${G2Filter1Plant5Truss3[0].trussNumber}&setFruits=${G2Filter1Plant5Truss3[0].setFruits}&setFlowers=${G2Filter1Plant5Truss3[0].setFlowers}&pruningNumber=${G2Filter1Plant5Truss3[0].pruningNumber}&fruitLoad=${G2Filter1Plant5Truss3[0].fruitLoad}&fruitDiameter=${G2Filter1Plant5Truss3[0].fruitDiameter}&pruningFlower=${G2Filter1Plant5Truss3[0].pruneFlowering}&floweringTruss=${G2Filter1Plant5Truss3[0].floweringTrussss}&pruningSet=${G2Filter1Plant5Truss3[0].prunSetting}&settingTruss=${G2Filter1Plant5Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant5Truss3[0].pruningHar}&harvestTruss=${G2Filter1Plant5Truss3[0].harvestTruss}`;

                console.log("URL : " + url281);

                fetch(url281, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G2Filter1Plant5Truss4.length) {

                      const scriptUrl282 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url282 = `${scriptUrl282}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant5Truss4[0].plantNumber}&trussNumber=${G2Filter1Plant5Truss4[0].trussNumber}&setFruits=${G2Filter1Plant5Truss4[0].setFruits}&setFlowers=${G2Filter1Plant5Truss4[0].setFlowers}&pruningNumber=${G2Filter1Plant5Truss4[0].pruningNumber}&fruitLoad=${G2Filter1Plant5Truss4[0].fruitLoad}&fruitDiameter=${G2Filter1Plant5Truss4[0].fruitDiameter}&pruningFlower=${G2Filter1Plant5Truss4[0].pruneFlowering}&floweringTruss=${G2Filter1Plant5Truss4[0].floweringTrussss}&pruningSet=${G2Filter1Plant5Truss4[0].prunSetting}&settingTruss=${G2Filter1Plant5Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant5Truss4[0].pruningHar}&harvestTruss=${G2Filter1Plant5Truss4[0].harvestTruss}`;

                      console.log("URL : " + url282);

                      fetch(url282, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G2Filter1Plant5Truss5.length) {

                            const scriptUrl283 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url283 = `${scriptUrl283}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant5Truss5[0].plantNumber}&trussNumber=${G2Filter1Plant5Truss5[0].trussNumber}&setFruits=${G2Filter1Plant5Truss5[0].setFruits}&setFlowers=${G2Filter1Plant5Truss5[0].setFlowers}&pruningNumber=${G2Filter1Plant5Truss5[0].pruningNumber}&fruitLoad=${G2Filter1Plant5Truss5[0].fruitLoad}&fruitDiameter=${G2Filter1Plant5Truss5[0].fruitDiameter}&pruningFlower=${G2Filter1Plant5Truss5[0].pruneFlowering}&floweringTruss=${G2Filter1Plant5Truss5[0].floweringTrussss}&pruningSet=${G2Filter1Plant5Truss5[0].prunSetting}&settingTruss=${G2Filter1Plant5Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant5Truss5[0].pruningHar}&harvestTruss=${G2Filter1Plant5Truss5[0].harvestTruss}`;

                            console.log("URL : " + url283);

                            fetch(url283, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G2Filter1Plant5Truss6.length) {

                                  const scriptUrl284 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url284 = `${scriptUrl284}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant5Truss6[0].plantNumber}&trussNumber=${G2Filter1Plant5Truss6[0].trussNumber}&setFruits=${G2Filter1Plant5Truss6[0].setFruits}&setFlowers=${G2Filter1Plant5Truss6[0].setFlowers}&pruningNumber=${G2Filter1Plant5Truss6[0].pruningNumber}&fruitLoad=${G2Filter1Plant5Truss6[0].fruitLoad}&fruitDiameter=${G2Filter1Plant5Truss6[0].fruitDiameter}&pruningFlower=${G2Filter1Plant5Truss6[0].pruneFlowering}&floweringTruss=${G2Filter1Plant5Truss6[0].floweringTrussss}&pruningSet=${G2Filter1Plant5Truss6[0].prunSetting}&settingTruss=${G2Filter1Plant5Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant5Truss6[0].pruningHar}&harvestTruss=${G2Filter1Plant5Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url284);

                                  fetch(url284, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G2Filter1Plant5Truss7.length) {

                                        const scriptUrl285 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url285 = `${scriptUrl285}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant5Truss7[0].plantNumber}&trussNumber=${G2Filter1Plant5Truss7[0].trussNumber}&setFruits=${G2Filter1Plant5Truss7[0].setFruits}&setFlowers=${G2Filter1Plant5Truss7[0].setFlowers}&pruningNumber=${G2Filter1Plant5Truss7[0].pruningNumber}&fruitLoad=${G2Filter1Plant5Truss7[0].fruitLoad}&fruitDiameter=${G2Filter1Plant5Truss7[0].fruitDiameter}&pruningFlower=${G2Filter1Plant5Truss7[0].pruneFlowering}&floweringTruss=${G2Filter1Plant5Truss7[0].floweringTrussss}&pruningSet=${G2Filter1Plant5Truss7[0].prunSetting}&settingTruss=${G2Filter1Plant5Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant5Truss7[0].pruningHar}&harvestTruss=${G2Filter1Plant5Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url285);

                                        fetch(url285, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G2Filter1Plant5Truss8.length) {

                                              const scriptUrl286 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url286 = `${scriptUrl286}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant5Truss8[0].plantNumber}&trussNumber=${G2Filter1Plant5Truss8[0].trussNumber}&setFruits=${G2Filter1Plant5Truss8[0].setFruits}&setFlowers=${G2Filter1Plant5Truss8[0].setFlowers}&pruningNumber=${G2Filter1Plant5Truss8[0].pruningNumber}&fruitLoad=${G2Filter1Plant5Truss8[0].fruitLoad}&fruitDiameter=${G2Filter1Plant5Truss8[0].fruitDiameter}&pruningFlower=${G2Filter1Plant5Truss8[0].pruneFlowering}&floweringTruss=${G2Filter1Plant5Truss8[0].floweringTrussss}&pruningSet=${G2Filter1Plant5Truss8[0].prunSetting}&settingTruss=${G2Filter1Plant5Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant5Truss8[0].pruningHar}&harvestTruss=${G2Filter1Plant5Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url286);

                                              fetch(url286, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G2Filter1Plant5Truss9.length) {

                                                    const scriptUrl287 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url287 = `${scriptUrl287}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant5Truss9[0].plantNumber}&trussNumber=${G2Filter1Plant5Truss9[0].trussNumber}&setFruits=${G2Filter1Plant5Truss9[0].setFruits}&setFlowers=${G2Filter1Plant5Truss9[0].setFlowers}&pruningNumber=${G2Filter1Plant5Truss9[0].pruningNumber}&fruitLoad=${G2Filter1Plant5Truss9[0].fruitLoad}&fruitDiameter=${G2Filter1Plant5Truss9[0].fruitDiameter}&pruningFlower=${G2Filter1Plant5Truss9[0].pruneFlowering}&floweringTruss=${G2Filter1Plant5Truss9[0].floweringTrussss}&pruningSet=${G2Filter1Plant5Truss9[0].prunSetting}&settingTruss=${G2Filter1Plant5Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant5Truss9[0].pruningHar}&harvestTruss=${G2Filter1Plant5Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url287);

                                                    fetch(url287, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G2Filter1Plant5Truss0.length) {

                                                          const scriptUrl288 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url288 = `${scriptUrl288}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant5Truss0[0].plantNumber}&trussNumber=${G2Filter1Plant5Truss0[0].trussNumber}&setFruits=${G2Filter1Plant5Truss0[0].setFruits}&setFlowers=${G2Filter1Plant5Truss0[0].setFlowers}&pruningNumber=${G2Filter1Plant5Truss0[0].pruningNumber}&fruitLoad=${G2Filter1Plant5Truss0[0].fruitLoad}&fruitDiameter=${G2Filter1Plant5Truss0[0].fruitDiameter}&pruningFlower=${G2Filter1Plant5Truss0[0].pruneFlowering}&floweringTruss=${G2Filter1Plant5Truss0[0].floweringTrussss}&pruningSet=${G2Filter1Plant5Truss0[0].prunSetting}&settingTruss=${G2Filter1Plant5Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant5Truss0[0].pruningHar}&harvestTruss=${G2Filter1Plant5Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url288);

                                                          fetch(url288, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow3Plant6Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow3Plant6Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow3Plant6Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow3Plant6Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow3Plant6Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow3Plant6Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow3Plant6Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow3Plant6Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow3Plant6Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow3Plant6Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow3Plant6Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow3Plant6Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow3Plant6Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow3Plant6Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow3Plant6Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow3Plant6Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow3Plant6Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow3Plant6Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow3Plant6Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow3Plant6Trusses()
      }
    });

  }

  sendRow3Plant6Trusses= () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G2 MERLICE ROW 70/71 PLANT 10
    let G2Filter1Plant6Truss1 = []
    let G2Filter1Plant6Truss2 = []
    let G2Filter1Plant6Truss3 = []
    let G2Filter1Plant6Truss4 = []
    let G2Filter1Plant6Truss5 = []
    let G2Filter1Plant6Truss6 = []
    let G2Filter1Plant6Truss7 = []
    let G2Filter1Plant6Truss8 = []
    let G2Filter1Plant6Truss9 = []
    let G2Filter1Plant6Truss0 = []
    //END

    //GER 2 Merlice/ Plant 6/ 70-71/ Truss Number 1-10

    G2Filter1Plant6Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G2Filter1Plant6Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G2Filter1Plant6Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G2Filter1Plant6Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G2Filter1Plant6Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G2Filter1Plant6Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G2Filter1Plant6Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G2Filter1Plant6Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G2Filter1Plant6Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G2Filter1Plant6Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '6' &&
        sampleItemTruss.trussNumber === 0

      )
    });

    //END

    const scriptUrl289 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url289 = `${scriptUrl289}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant6Truss1[0].plantNumber}&trussNumber=${G2Filter1Plant6Truss1[0].trussNumber}&setFruits=${G2Filter1Plant6Truss1[0].setFruits}&setFlowers=${G2Filter1Plant6Truss1[0].setFlowers}&pruningNumber=${G2Filter1Plant6Truss1[0].pruningNumber}&fruitLoad=${G2Filter1Plant6Truss1[0].fruitLoad}&fruitDiameter=${G2Filter1Plant6Truss1[0].fruitDiameter}&pruningFlower=${G2Filter1Plant6Truss1[0].pruneFlowering}&floweringTruss=${G2Filter1Plant6Truss1[0].floweringTrussss}&pruningSet=${G2Filter1Plant6Truss1[0].prunSetting}&settingTruss=${G2Filter1Plant6Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant6Truss1[0].pruningHar}&harvestTruss=${G2Filter1Plant6Truss1[0].harvestTruss}`;

    console.log("URL : " + url289);

    fetch(url289, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G2Filter1Plant6Truss2.length) {

          const scriptUrl290 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url290 = `${scriptUrl290}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant6Truss2[0].plantNumber}&trussNumber=${G2Filter1Plant6Truss2[0].trussNumber}&setFruits=${G2Filter1Plant6Truss2[0].setFruits}&setFlowers=${G2Filter1Plant6Truss2[0].setFlowers}&pruningNumber=${G2Filter1Plant6Truss2[0].pruningNumber}&fruitLoad=${G2Filter1Plant6Truss2[0].fruitLoad}&fruitDiameter=${G2Filter1Plant6Truss2[0].fruitDiameter}&pruningFlower=${G2Filter1Plant6Truss2[0].pruneFlowering}&floweringTruss=${G2Filter1Plant6Truss2[0].floweringTrussss}&pruningSet=${G2Filter1Plant6Truss2[0].prunSetting}&settingTruss=${G2Filter1Plant6Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant6Truss2[0].pruningHar}&harvestTruss=${G2Filter1Plant6Truss2[0].harvestTruss}`;

          console.log("URL : " + url290);

          fetch(url290, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G2Filter1Plant6Truss3.length) {

                const scriptUrl291 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url291 = `${scriptUrl291}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant6Truss3[0].plantNumber}&trussNumber=${G2Filter1Plant6Truss3[0].trussNumber}&setFruits=${G2Filter1Plant6Truss3[0].setFruits}&setFlowers=${G2Filter1Plant6Truss3[0].setFlowers}&pruningNumber=${G2Filter1Plant6Truss3[0].pruningNumber}&fruitLoad=${G2Filter1Plant6Truss3[0].fruitLoad}&fruitDiameter=${G2Filter1Plant6Truss3[0].fruitDiameter}&pruningFlower=${G2Filter1Plant6Truss3[0].pruneFlowering}&floweringTruss=${G2Filter1Plant6Truss3[0].floweringTrussss}&pruningSet=${G2Filter1Plant6Truss3[0].prunSetting}&settingTruss=${G2Filter1Plant6Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant6Truss3[0].pruningHar}&harvestTruss=${G2Filter1Plant6Truss3[0].harvestTruss}`;

                console.log("URL : " + url291);

                fetch(url291, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G2Filter1Plant6Truss4.length) {

                      const scriptUrl292 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url292 = `${scriptUrl292}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant6Truss4[0].plantNumber}&trussNumber=${G2Filter1Plant6Truss4[0].trussNumber}&setFruits=${G2Filter1Plant6Truss4[0].setFruits}&setFlowers=${G2Filter1Plant6Truss4[0].setFlowers}&pruningNumber=${G2Filter1Plant6Truss4[0].pruningNumber}&fruitLoad=${G2Filter1Plant6Truss4[0].fruitLoad}&fruitDiameter=${G2Filter1Plant6Truss4[0].fruitDiameter}&pruningFlower=${G2Filter1Plant6Truss4[0].pruneFlowering}&floweringTruss=${G2Filter1Plant6Truss4[0].floweringTrussss}&pruningSet=${G2Filter1Plant6Truss4[0].prunSetting}&settingTruss=${G2Filter1Plant6Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant6Truss4[0].pruningHar}&harvestTruss=${G2Filter1Plant6Truss4[0].harvestTruss}`;

                      console.log("URL : " + url292);

                      fetch(url292, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G2Filter1Plant6Truss5.length) {

                            const scriptUrl293 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url293 = `${scriptUrl293}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant6Truss5[0].plantNumber}&trussNumber=${G2Filter1Plant6Truss5[0].trussNumber}&setFruits=${G2Filter1Plant6Truss5[0].setFruits}&setFlowers=${G2Filter1Plant6Truss5[0].setFlowers}&pruningNumber=${G2Filter1Plant6Truss5[0].pruningNumber}&fruitLoad=${G2Filter1Plant6Truss5[0].fruitLoad}&fruitDiameter=${G2Filter1Plant6Truss5[0].fruitDiameter}&pruningFlower=${G2Filter1Plant6Truss5[0].pruneFlowering}&floweringTruss=${G2Filter1Plant6Truss5[0].floweringTrussss}&pruningSet=${G2Filter1Plant6Truss5[0].prunSetting}&settingTruss=${G2Filter1Plant6Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant6Truss5[0].pruningHar}&harvestTruss=${G2Filter1Plant6Truss5[0].harvestTruss}`;

                            console.log("URL : " + url293);

                            fetch(url293, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G2Filter1Plant6Truss6.length) {

                                  const scriptUrl294 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url294 = `${scriptUrl294}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant6Truss6[0].plantNumber}&trussNumber=${G2Filter1Plant6Truss6[0].trussNumber}&setFruits=${G2Filter1Plant6Truss6[0].setFruits}&setFlowers=${G2Filter1Plant6Truss6[0].setFlowers}&pruningNumber=${G2Filter1Plant6Truss6[0].pruningNumber}&fruitLoad=${G2Filter1Plant6Truss6[0].fruitLoad}&fruitDiameter=${G2Filter1Plant6Truss6[0].fruitDiameter}&pruningFlower=${G2Filter1Plant6Truss6[0].pruneFlowering}&floweringTruss=${G2Filter1Plant6Truss6[0].floweringTrussss}&pruningSet=${G2Filter1Plant6Truss6[0].prunSetting}&settingTruss=${G2Filter1Plant6Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant6Truss6[0].pruningHar}&harvestTruss=${G2Filter1Plant6Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url294);

                                  fetch(url294, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G2Filter1Plant6Truss7.length) {

                                        const scriptUrl295 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url295 = `${scriptUrl295}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant6Truss7[0].plantNumber}&trussNumber=${G2Filter1Plant6Truss7[0].trussNumber}&setFruits=${G2Filter1Plant6Truss7[0].setFruits}&setFlowers=${G2Filter1Plant6Truss7[0].setFlowers}&pruningNumber=${G2Filter1Plant6Truss7[0].pruningNumber}&fruitLoad=${G2Filter1Plant6Truss7[0].fruitLoad}&fruitDiameter=${G2Filter1Plant6Truss7[0].fruitDiameter}&pruningFlower=${G2Filter1Plant6Truss7[0].pruneFlowering}&floweringTruss=${G2Filter1Plant6Truss7[0].floweringTrussss}&pruningSet=${G2Filter1Plant6Truss7[0].prunSetting}&settingTruss=${G2Filter1Plant6Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant6Truss7[0].pruningHar}&harvestTruss=${G2Filter1Plant6Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url295);

                                        fetch(url295, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G2Filter1Plant6Truss8.length) {

                                              const scriptUrl296 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url296 = `${scriptUrl296}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant6Truss8[0].plantNumber}&trussNumber=${G2Filter1Plant6Truss8[0].trussNumber}&setFruits=${G2Filter1Plant6Truss8[0].setFruits}&setFlowers=${G2Filter1Plant6Truss8[0].setFlowers}&pruningNumber=${G2Filter1Plant6Truss8[0].pruningNumber}&fruitLoad=${G2Filter1Plant6Truss8[0].fruitLoad}&fruitDiameter=${G2Filter1Plant6Truss8[0].fruitDiameter}&pruningFlower=${G2Filter1Plant6Truss8[0].pruneFlowering}&floweringTruss=${G2Filter1Plant6Truss8[0].floweringTrussss}&pruningSet=${G2Filter1Plant6Truss8[0].prunSetting}&settingTruss=${G2Filter1Plant6Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant6Truss8[0].pruningHar}&harvestTruss=${G2Filter1Plant6Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url296);

                                              fetch(url296, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G2Filter1Plant6Truss9.length) {

                                                    const scriptUrl297 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url297 = `${scriptUrl297}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant6Truss9[0].plantNumber}&trussNumber=${G2Filter1Plant6Truss9[0].trussNumber}&setFruits=${G2Filter1Plant6Truss9[0].setFruits}&setFlowers=${G2Filter1Plant6Truss9[0].setFlowers}&pruningNumber=${G2Filter1Plant6Truss9[0].pruningNumber}&fruitLoad=${G2Filter1Plant6Truss9[0].fruitLoad}&fruitDiameter=${G2Filter1Plant6Truss9[0].fruitDiameter}&pruningFlower=${G2Filter1Plant6Truss9[0].pruneFlowering}&floweringTruss=${G2Filter1Plant6Truss9[0].floweringTrussss}&pruningSet=${G2Filter1Plant6Truss9[0].prunSetting}&settingTruss=${G2Filter1Plant6Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant6Truss9[0].pruningHar}&harvestTruss=${G2Filter1Plant6Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url297);

                                                    fetch(url297, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G2Filter1Plant6Truss0.length) {

                                                          const scriptUrl298 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url298 = `${scriptUrl298}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant6Truss0[0].plantNumber}&trussNumber=${G2Filter1Plant6Truss0[0].trussNumber}&setFruits=${G2Filter1Plant6Truss0[0].setFruits}&setFlowers=${G2Filter1Plant6Truss0[0].setFlowers}&pruningNumber=${G2Filter1Plant6Truss0[0].pruningNumber}&fruitLoad=${G2Filter1Plant6Truss0[0].fruitLoad}&fruitDiameter=${G2Filter1Plant6Truss0[0].fruitDiameter}&pruningFlower=${G2Filter1Plant6Truss0[0].pruneFlowering}&floweringTruss=${G2Filter1Plant6Truss0[0].floweringTrussss}&pruningSet=${G2Filter1Plant6Truss0[0].prunSetting}&settingTruss=${G2Filter1Plant6Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant6Truss0[0].pruningHar}&harvestTruss=${G2Filter1Plant6Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url298);

                                                          fetch(url298, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow3Plant7Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow3Plant7Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow3Plant7Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow3Plant7Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow3Plant7Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow3Plant7Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow3Plant7Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow3Plant7Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow3Plant7Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow3Plant7Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow3Plant7Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow3Plant7Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow3Plant7Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow3Plant7Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow3Plant7Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow3Plant7Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow3Plant7Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow3Plant7Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow3Plant7Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow3Plant7Trusses()
      }
    });

  }

  sendRow3Plant7Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G2 MERLICE ROW 70/71 PLANT 10
    let G2Filter1Plant7Truss1 = []
    let G2Filter1Plant7Truss2 = []
    let G2Filter1Plant7Truss3 = []
    let G2Filter1Plant7Truss4 = []
    let G2Filter1Plant7Truss5 = []
    let G2Filter1Plant7Truss6 = []
    let G2Filter1Plant7Truss7 = []
    let G2Filter1Plant7Truss8 = []
    let G2Filter1Plant7Truss9 = []
    let G2Filter1Plant7Truss0 = []
    //END

    //GER 2 Merlice/ Plant 7/ 70-71/ Truss Number 1-10

    G2Filter1Plant7Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G2Filter1Plant7Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G2Filter1Plant7Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G2Filter1Plant7Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G2Filter1Plant7Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G2Filter1Plant7Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G2Filter1Plant7Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G2Filter1Plant7Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G2Filter1Plant7Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G2Filter1Plant7Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '7' &&
        sampleItemTruss.trussNumber === 0

      )
    });

    //END

    const scriptUrl299 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url299 = `${scriptUrl299}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant7Truss1[0].plantNumber}&trussNumber=${G2Filter1Plant7Truss1[0].trussNumber}&setFruits=${G2Filter1Plant7Truss1[0].setFruits}&setFlowers=${G2Filter1Plant7Truss1[0].setFlowers}&pruningNumber=${G2Filter1Plant7Truss1[0].pruningNumber}&fruitLoad=${G2Filter1Plant7Truss1[0].fruitLoad}&fruitDiameter=${G2Filter1Plant7Truss1[0].fruitDiameter}&pruningFlower=${G2Filter1Plant7Truss1[0].pruneFlowering}&floweringTruss=${G2Filter1Plant7Truss1[0].floweringTrussss}&pruningSet=${G2Filter1Plant7Truss1[0].prunSetting}&settingTruss=${G2Filter1Plant7Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant7Truss1[0].pruningHar}&harvestTruss=${G2Filter1Plant7Truss1[0].harvestTruss}`;

    console.log("URL : " + url299);

    fetch(url299, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G2Filter1Plant7Truss2.length) {

          const scriptUrl300 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url300 = `${scriptUrl300}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant7Truss2[0].plantNumber}&trussNumber=${G2Filter1Plant7Truss2[0].trussNumber}&setFruits=${G2Filter1Plant7Truss2[0].setFruits}&setFlowers=${G2Filter1Plant7Truss2[0].setFlowers}&pruningNumber=${G2Filter1Plant7Truss2[0].pruningNumber}&fruitLoad=${G2Filter1Plant7Truss2[0].fruitLoad}&fruitDiameter=${G2Filter1Plant7Truss2[0].fruitDiameter}&pruningFlower=${G2Filter1Plant7Truss2[0].pruneFlowering}&floweringTruss=${G2Filter1Plant7Truss2[0].floweringTrussss}&pruningSet=${G2Filter1Plant7Truss2[0].prunSetting}&settingTruss=${G2Filter1Plant7Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant7Truss2[0].pruningHar}&harvestTruss=${G2Filter1Plant7Truss2[0].harvestTruss}`;

          console.log("URL : " + url300);

          fetch(url300, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G2Filter1Plant7Truss3.length) {

                const scriptUrl301 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url301 = `${scriptUrl301}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant7Truss3[0].plantNumber}&trussNumber=${G2Filter1Plant7Truss3[0].trussNumber}&setFruits=${G2Filter1Plant7Truss3[0].setFruits}&setFlowers=${G2Filter1Plant7Truss3[0].setFlowers}&pruningNumber=${G2Filter1Plant7Truss3[0].pruningNumber}&fruitLoad=${G2Filter1Plant7Truss3[0].fruitLoad}&fruitDiameter=${G2Filter1Plant7Truss3[0].fruitDiameter}&pruningFlower=${G2Filter1Plant7Truss3[0].pruneFlowering}&floweringTruss=${G2Filter1Plant7Truss3[0].floweringTrussss}&pruningSet=${G2Filter1Plant7Truss3[0].prunSetting}&settingTruss=${G2Filter1Plant7Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant7Truss3[0].pruningHar}&harvestTruss=${G2Filter1Plant7Truss3[0].harvestTruss}`;

                console.log("URL : " + url301);

                fetch(url301, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G2Filter1Plant7Truss4.length) {

                      const scriptUrl302 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url302 = `${scriptUrl302}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant7Truss4[0].plantNumber}&trussNumber=${G2Filter1Plant7Truss4[0].trussNumber}&setFruits=${G2Filter1Plant7Truss4[0].setFruits}&setFlowers=${G2Filter1Plant7Truss4[0].setFlowers}&pruningNumber=${G2Filter1Plant7Truss4[0].pruningNumber}&fruitLoad=${G2Filter1Plant7Truss4[0].fruitLoad}&fruitDiameter=${G2Filter1Plant7Truss4[0].fruitDiameter}&pruningFlower=${G2Filter1Plant7Truss4[0].pruneFlowering}&floweringTruss=${G2Filter1Plant7Truss4[0].floweringTrussss}&pruningSet=${G2Filter1Plant7Truss4[0].prunSetting}&settingTruss=${G2Filter1Plant7Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant7Truss4[0].pruningHar}&harvestTruss=${G2Filter1Plant7Truss4[0].harvestTruss}`;

                      console.log("URL : " + url302);

                      fetch(url302, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G2Filter1Plant7Truss5.length) {

                            const scriptUrl303 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url303 = `${scriptUrl303}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant7Truss5[0].plantNumber}&trussNumber=${G2Filter1Plant7Truss5[0].trussNumber}&setFruits=${G2Filter1Plant7Truss5[0].setFruits}&setFlowers=${G2Filter1Plant7Truss5[0].setFlowers}&pruningNumber=${G2Filter1Plant7Truss5[0].pruningNumber}&fruitLoad=${G2Filter1Plant7Truss5[0].fruitLoad}&fruitDiameter=${G2Filter1Plant7Truss5[0].fruitDiameter}&pruningFlower=${G2Filter1Plant7Truss5[0].pruneFlowering}&floweringTruss=${G2Filter1Plant7Truss5[0].floweringTrussss}&pruningSet=${G2Filter1Plant7Truss5[0].prunSetting}&settingTruss=${G2Filter1Plant7Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant7Truss5[0].pruningHar}&harvestTruss=${G2Filter1Plant7Truss5[0].harvestTruss}`;

                            console.log("URL : " + url303);

                            fetch(url303, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G2Filter1Plant7Truss6.length) {

                                  const scriptUrl304 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url304 = `${scriptUrl304}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant7Truss6[0].plantNumber}&trussNumber=${G2Filter1Plant7Truss6[0].trussNumber}&setFruits=${G2Filter1Plant7Truss6[0].setFruits}&setFlowers=${G2Filter1Plant7Truss6[0].setFlowers}&pruningNumber=${G2Filter1Plant7Truss6[0].pruningNumber}&fruitLoad=${G2Filter1Plant7Truss6[0].fruitLoad}&fruitDiameter=${G2Filter1Plant7Truss6[0].fruitDiameter}&pruningFlower=${G2Filter1Plant7Truss6[0].pruneFlowering}&floweringTruss=${G2Filter1Plant7Truss6[0].floweringTrussss}&pruningSet=${G2Filter1Plant7Truss6[0].prunSetting}&settingTruss=${G2Filter1Plant7Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant7Truss6[0].pruningHar}&harvestTruss=${G2Filter1Plant7Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url304);

                                  fetch(url304, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G2Filter1Plant7Truss7.length) {

                                        const scriptUrl305 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url305 = `${scriptUrl305}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant7Truss7[0].plantNumber}&trussNumber=${G2Filter1Plant7Truss7[0].trussNumber}&setFruits=${G2Filter1Plant7Truss7[0].setFruits}&setFlowers=${G2Filter1Plant7Truss7[0].setFlowers}&pruningNumber=${G2Filter1Plant7Truss7[0].pruningNumber}&fruitLoad=${G2Filter1Plant7Truss7[0].fruitLoad}&fruitDiameter=${G2Filter1Plant7Truss7[0].fruitDiameter}&pruningFlower=${G2Filter1Plant7Truss7[0].pruneFlowering}&floweringTruss=${G2Filter1Plant7Truss7[0].floweringTrussss}&pruningSet=${G2Filter1Plant7Truss7[0].prunSetting}&settingTruss=${G2Filter1Plant7Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant7Truss7[0].pruningHar}&harvestTruss=${G2Filter1Plant7Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url305);

                                        fetch(url305, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G2Filter1Plant7Truss8.length) {

                                              const scriptUrl306 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url306 = `${scriptUrl306}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant7Truss8[0].plantNumber}&trussNumber=${G2Filter1Plant7Truss8[0].trussNumber}&setFruits=${G2Filter1Plant7Truss8[0].setFruits}&setFlowers=${G2Filter1Plant7Truss8[0].setFlowers}&pruningNumber=${G2Filter1Plant7Truss8[0].pruningNumber}&fruitLoad=${G2Filter1Plant7Truss8[0].fruitLoad}&fruitDiameter=${G2Filter1Plant7Truss8[0].fruitDiameter}&pruningFlower=${G2Filter1Plant7Truss8[0].pruneFlowering}&floweringTruss=${G2Filter1Plant7Truss8[0].floweringTrussss}&pruningSet=${G2Filter1Plant7Truss8[0].prunSetting}&settingTruss=${G2Filter1Plant7Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant7Truss8[0].pruningHar}&harvestTruss=${G2Filter1Plant7Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url306);

                                              fetch(url306, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G2Filter1Plant7Truss9.length) {

                                                    const scriptUrl307 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url307 = `${scriptUrl307}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant7Truss9[0].plantNumber}&trussNumber=${G2Filter1Plant7Truss9[0].trussNumber}&setFruits=${G2Filter1Plant7Truss9[0].setFruits}&setFlowers=${G2Filter1Plant7Truss9[0].setFlowers}&pruningNumber=${G2Filter1Plant7Truss9[0].pruningNumber}&fruitLoad=${G2Filter1Plant7Truss9[0].fruitLoad}&fruitDiameter=${G2Filter1Plant7Truss9[0].fruitDiameter}&pruningFlower=${G2Filter1Plant7Truss9[0].pruneFlowering}&floweringTruss=${G2Filter1Plant7Truss9[0].floweringTrussss}&pruningSet=${G2Filter1Plant7Truss9[0].prunSetting}&settingTruss=${G2Filter1Plant7Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant7Truss9[0].pruningHar}&harvestTruss=${G2Filter1Plant7Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url307);

                                                    fetch(url307, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G2Filter1Plant7Truss0.length) {

                                                          const scriptUrl308 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url308 = `${scriptUrl308}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant7Truss0[0].plantNumber}&trussNumber=${G2Filter1Plant7Truss0[0].trussNumber}&setFruits=${G2Filter1Plant7Truss0[0].setFruits}&setFlowers=${G2Filter1Plant7Truss0[0].setFlowers}&pruningNumber=${G2Filter1Plant7Truss0[0].pruningNumber}&fruitLoad=${G2Filter1Plant7Truss0[0].fruitLoad}&fruitDiameter=${G2Filter1Plant7Truss0[0].fruitDiameter}&pruningFlower=${G2Filter1Plant7Truss0[0].pruneFlowering}&floweringTruss=${G2Filter1Plant7Truss0[0].floweringTrussss}&pruningSet=${G2Filter1Plant7Truss0[0].prunSetting}&settingTruss=${G2Filter1Plant7Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant7Truss0[0].pruningHar}&harvestTruss=${G2Filter1Plant7Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url308);

                                                          fetch(url308, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow3Plant8Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow3Plant8Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow3Plant8Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow3Plant8Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow3Plant8Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow3Plant8Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow3Plant8Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow3Plant8Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow3Plant8Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow3Plant8Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow3Plant8Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow3Plant8Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow3Plant8Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow3Plant8Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow3Plant8Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow3Plant8Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow3Plant8Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow3Plant8Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow3Plant8Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow3Plant8Trusses()
      }
    });

  }

  sendRow3Plant8Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G2 MERLICE ROW 70/71 PLANT 10
    let G2Filter1Plant8Truss1 = []
    let G2Filter1Plant8Truss2 = []
    let G2Filter1Plant8Truss3 = []
    let G2Filter1Plant8Truss4 = []
    let G2Filter1Plant8Truss5 = []
    let G2Filter1Plant8Truss6 = []
    let G2Filter1Plant8Truss7 = []
    let G2Filter1Plant8Truss8 = []
    let G2Filter1Plant8Truss9 = []
    let G2Filter1Plant8Truss0 = []
    //END

    //GER 2 Merlice/ Plant 7/ 70-71/ Truss Number 1-10

    G2Filter1Plant8Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G2Filter1Plant8Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G2Filter1Plant8Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G2Filter1Plant8Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G2Filter1Plant8Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G2Filter1Plant8Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G2Filter1Plant8Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G2Filter1Plant8Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G2Filter1Plant8Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G2Filter1Plant8Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '8' &&
        sampleItemTruss.trussNumber === 0

      )
    });

    //END

    const scriptUrl309 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url309 = `${scriptUrl309}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant8Truss1[0].plantNumber}&trussNumber=${G2Filter1Plant8Truss1[0].trussNumber}&setFruits=${G2Filter1Plant8Truss1[0].setFruits}&setFlowers=${G2Filter1Plant8Truss1[0].setFlowers}&pruningNumber=${G2Filter1Plant8Truss1[0].pruningNumber}&fruitLoad=${G2Filter1Plant8Truss1[0].fruitLoad}&fruitDiameter=${G2Filter1Plant8Truss1[0].fruitDiameter}&pruningFlower=${G2Filter1Plant8Truss1[0].pruneFlowering}&floweringTruss=${G2Filter1Plant8Truss1[0].floweringTrussss}&pruningSet=${G2Filter1Plant8Truss1[0].prunSetting}&settingTruss=${G2Filter1Plant8Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant8Truss1[0].pruningHar}&harvestTruss=${G2Filter1Plant8Truss1[0].harvestTruss}`;

    console.log("URL : " + url309);

    fetch(url309, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G2Filter1Plant8Truss2.length) {

          const scriptUrl310 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url310 = `${scriptUrl310}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant8Truss2[0].plantNumber}&trussNumber=${G2Filter1Plant8Truss2[0].trussNumber}&setFruits=${G2Filter1Plant8Truss2[0].setFruits}&setFlowers=${G2Filter1Plant8Truss2[0].setFlowers}&pruningNumber=${G2Filter1Plant8Truss2[0].pruningNumber}&fruitLoad=${G2Filter1Plant8Truss2[0].fruitLoad}&fruitDiameter=${G2Filter1Plant8Truss2[0].fruitDiameter}&pruningFlower=${G2Filter1Plant8Truss2[0].pruneFlowering}&floweringTruss=${G2Filter1Plant8Truss2[0].floweringTrussss}&pruningSet=${G2Filter1Plant8Truss2[0].prunSetting}&settingTruss=${G2Filter1Plant8Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant8Truss2[0].pruningHar}&harvestTruss=${G2Filter1Plant8Truss2[0].harvestTruss}`;

          console.log("URL : " + url310);

          fetch(url310, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G2Filter1Plant8Truss3.length) {

                const scriptUrl311 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url311 = `${scriptUrl311}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant8Truss3[0].plantNumber}&trussNumber=${G2Filter1Plant8Truss3[0].trussNumber}&setFruits=${G2Filter1Plant8Truss3[0].setFruits}&setFlowers=${G2Filter1Plant8Truss3[0].setFlowers}&pruningNumber=${G2Filter1Plant8Truss3[0].pruningNumber}&fruitLoad=${G2Filter1Plant8Truss3[0].fruitLoad}&fruitDiameter=${G2Filter1Plant8Truss3[0].fruitDiameter}&pruningFlower=${G2Filter1Plant8Truss3[0].pruneFlowering}&floweringTruss=${G2Filter1Plant8Truss3[0].floweringTrussss}&pruningSet=${G2Filter1Plant8Truss3[0].prunSetting}&settingTruss=${G2Filter1Plant8Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant8Truss3[0].pruningHar}&harvestTruss=${G2Filter1Plant8Truss3[0].harvestTruss}`;

                console.log("URL : " + url311);

                fetch(url311, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G2Filter1Plant8Truss4.length) {

                      const scriptUrl312 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url312 = `${scriptUrl312}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant8Truss4[0].plantNumber}&trussNumber=${G2Filter1Plant8Truss4[0].trussNumber}&setFruits=${G2Filter1Plant8Truss4[0].setFruits}&setFlowers=${G2Filter1Plant8Truss4[0].setFlowers}&pruningNumber=${G2Filter1Plant8Truss4[0].pruningNumber}&fruitLoad=${G2Filter1Plant8Truss4[0].fruitLoad}&fruitDiameter=${G2Filter1Plant8Truss4[0].fruitDiameter}&pruningFlower=${G2Filter1Plant8Truss4[0].pruneFlowering}&floweringTruss=${G2Filter1Plant8Truss4[0].floweringTrussss}&pruningSet=${G2Filter1Plant8Truss4[0].prunSetting}&settingTruss=${G2Filter1Plant8Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant8Truss4[0].pruningHar}&harvestTruss=${G2Filter1Plant8Truss4[0].harvestTruss}`;

                      console.log("URL : " + url312);

                      fetch(url312, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G2Filter1Plant8Truss5.length) {

                            const scriptUrl313 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url313 = `${scriptUrl313}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant8Truss5[0].plantNumber}&trussNumber=${G2Filter1Plant8Truss5[0].trussNumber}&setFruits=${G2Filter1Plant8Truss5[0].setFruits}&setFlowers=${G2Filter1Plant8Truss5[0].setFlowers}&pruningNumber=${G2Filter1Plant8Truss5[0].pruningNumber}&fruitLoad=${G2Filter1Plant8Truss5[0].fruitLoad}&fruitDiameter=${G2Filter1Plant8Truss5[0].fruitDiameter}&pruningFlower=${G2Filter1Plant8Truss5[0].pruneFlowering}&floweringTruss=${G2Filter1Plant8Truss5[0].floweringTrussss}&pruningSet=${G2Filter1Plant8Truss5[0].prunSetting}&settingTruss=${G2Filter1Plant8Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant8Truss5[0].pruningHar}&harvestTruss=${G2Filter1Plant8Truss5[0].harvestTruss}`;

                            console.log("URL : " + url313);

                            fetch(url313, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G2Filter1Plant8Truss6.length) {

                                  const scriptUrl314 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url314 = `${scriptUrl314}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant8Truss6[0].plantNumber}&trussNumber=${G2Filter1Plant8Truss6[0].trussNumber}&setFruits=${G2Filter1Plant8Truss6[0].setFruits}&setFlowers=${G2Filter1Plant8Truss6[0].setFlowers}&pruningNumber=${G2Filter1Plant8Truss6[0].pruningNumber}&fruitLoad=${G2Filter1Plant8Truss6[0].fruitLoad}&fruitDiameter=${G2Filter1Plant8Truss6[0].fruitDiameter}&pruningFlower=${G2Filter1Plant8Truss6[0].pruneFlowering}&floweringTruss=${G2Filter1Plant8Truss6[0].floweringTrussss}&pruningSet=${G2Filter1Plant8Truss6[0].prunSetting}&settingTruss=${G2Filter1Plant8Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant8Truss6[0].pruningHar}&harvestTruss=${G2Filter1Plant8Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url314);

                                  fetch(url314, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G2Filter1Plant8Truss7.length) {

                                        const scriptUrl315 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url315 = `${scriptUrl315}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant8Truss7[0].plantNumber}&trussNumber=${G2Filter1Plant8Truss7[0].trussNumber}&setFruits=${G2Filter1Plant8Truss7[0].setFruits}&setFlowers=${G2Filter1Plant8Truss7[0].setFlowers}&pruningNumber=${G2Filter1Plant8Truss7[0].pruningNumber}&fruitLoad=${G2Filter1Plant8Truss7[0].fruitLoad}&fruitDiameter=${G2Filter1Plant8Truss7[0].fruitDiameter}&pruningFlower=${G2Filter1Plant8Truss7[0].pruneFlowering}&floweringTruss=${G2Filter1Plant8Truss7[0].floweringTrussss}&pruningSet=${G2Filter1Plant8Truss7[0].prunSetting}&settingTruss=${G2Filter1Plant8Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant8Truss7[0].pruningHar}&harvestTruss=${G2Filter1Plant8Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url315);

                                        fetch(url315, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G2Filter1Plant8Truss8.length) {

                                              const scriptUrl316 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url316 = `${scriptUrl316}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant8Truss8[0].plantNumber}&trussNumber=${G2Filter1Plant8Truss8[0].trussNumber}&setFruits=${G2Filter1Plant8Truss8[0].setFruits}&setFlowers=${G2Filter1Plant8Truss8[0].setFlowers}&pruningNumber=${G2Filter1Plant8Truss8[0].pruningNumber}&fruitLoad=${G2Filter1Plant8Truss8[0].fruitLoad}&fruitDiameter=${G2Filter1Plant8Truss8[0].fruitDiameter}&pruningFlower=${G2Filter1Plant8Truss8[0].pruneFlowering}&floweringTruss=${G2Filter1Plant8Truss8[0].floweringTrussss}&pruningSet=${G2Filter1Plant8Truss8[0].prunSetting}&settingTruss=${G2Filter1Plant8Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant8Truss8[0].pruningHar}&harvestTruss=${G2Filter1Plant8Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url316);

                                              fetch(url316, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G2Filter1Plant8Truss9.length) {

                                                    const scriptUrl317 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url317 = `${scriptUrl317}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant8Truss9[0].plantNumber}&trussNumber=${G2Filter1Plant8Truss9[0].trussNumber}&setFruits=${G2Filter1Plant8Truss9[0].setFruits}&setFlowers=${G2Filter1Plant8Truss9[0].setFlowers}&pruningNumber=${G2Filter1Plant8Truss9[0].pruningNumber}&fruitLoad=${G2Filter1Plant8Truss9[0].fruitLoad}&fruitDiameter=${G2Filter1Plant8Truss9[0].fruitDiameter}&pruningFlower=${G2Filter1Plant8Truss9[0].pruneFlowering}&floweringTruss=${G2Filter1Plant8Truss9[0].floweringTrussss}&pruningSet=${G2Filter1Plant8Truss9[0].prunSetting}&settingTruss=${G2Filter1Plant8Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant8Truss9[0].pruningHar}&harvestTruss=${G2Filter1Plant8Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url317);

                                                    fetch(url317, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G2Filter1Plant8Truss0.length) {

                                                          const scriptUrl318 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url318 = `${scriptUrl318}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant8Truss0[0].plantNumber}&trussNumber=${G2Filter1Plant8Truss0[0].trussNumber}&setFruits=${G2Filter1Plant8Truss0[0].setFruits}&setFlowers=${G2Filter1Plant8Truss0[0].setFlowers}&pruningNumber=${G2Filter1Plant8Truss0[0].pruningNumber}&fruitLoad=${G2Filter1Plant8Truss0[0].fruitLoad}&fruitDiameter=${G2Filter1Plant8Truss0[0].fruitDiameter}&pruningFlower=${G2Filter1Plant8Truss0[0].pruneFlowering}&floweringTruss=${G2Filter1Plant8Truss0[0].floweringTrussss}&pruningSet=${G2Filter1Plant8Truss0[0].prunSetting}&settingTruss=${G2Filter1Plant8Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant8Truss0[0].pruningHar}&harvestTruss=${G2Filter1Plant8Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url318);

                                                          fetch(url318, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow3Plant9Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow3Plant9Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow3Plant9Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow3Plant9Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow3Plant9Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow3Plant9Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow3Plant9Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow3Plant9Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow3Plant9Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow3Plant9Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow3Plant9Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow3Plant9Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow3Plant9Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow3Plant9Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow3Plant9Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow3Plant9Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow3Plant9Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow3Plant9Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow3Plant9Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow3Plant9Trusses()
      }
    });

  }

  sendRow3Plant9Trusses= () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G2 MERLICE ROW 70/71 PLANT 10
    let G2Filter1Plant9Truss1 = []
    let G2Filter1Plant9Truss2 = []
    let G2Filter1Plant9Truss3 = []
    let G2Filter1Plant9Truss4 = []
    let G2Filter1Plant9Truss5 = []
    let G2Filter1Plant9Truss6 = []
    let G2Filter1Plant9Truss7 = []
    let G2Filter1Plant9Truss8 = []
    let G2Filter1Plant9Truss9 = []
    let G2Filter1Plant9Truss0 = []
    //END

    //GER 2 Merlice/ Plant 9/ 70-71/ Truss Number 1-10

    G2Filter1Plant9Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G2Filter1Plant9Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G2Filter1Plant9Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G2Filter1Plant9Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G2Filter1Plant9Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G2Filter1Plant9Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G2Filter1Plant9Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G2Filter1Plant9Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G2Filter1Plant9Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G2Filter1Plant9Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 0

      )
    });

    //END

    const scriptUrl319 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url319 = `${scriptUrl319}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant9Truss1[0].plantNumber}&trussNumber=${G2Filter1Plant9Truss1[0].trussNumber}&setFruits=${G2Filter1Plant9Truss1[0].setFruits}&setFlowers=${G2Filter1Plant9Truss1[0].setFlowers}&pruningNumber=${G2Filter1Plant9Truss1[0].pruningNumber}&fruitLoad=${G2Filter1Plant9Truss1[0].fruitLoad}&fruitDiameter=${G2Filter1Plant9Truss1[0].fruitDiameter}&pruningFlower=${G2Filter1Plant9Truss1[0].pruneFlowering}&floweringTruss=${G2Filter1Plant9Truss1[0].floweringTrussss}&pruningSet=${G2Filter1Plant9Truss1[0].prunSetting}&settingTruss=${G2Filter1Plant9Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant9Truss1[0].pruningHar}&harvestTruss=${G2Filter1Plant9Truss1[0].harvestTruss}`;

    console.log("URL : " + url319);

    fetch(url319, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G2Filter1Plant9Truss2.length) {

          const scriptUrl320 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url320 = `${scriptUrl320}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant9Truss2[0].plantNumber}&trussNumber=${G2Filter1Plant9Truss2[0].trussNumber}&setFruits=${G2Filter1Plant9Truss2[0].setFruits}&setFlowers=${G2Filter1Plant9Truss2[0].setFlowers}&pruningNumber=${G2Filter1Plant9Truss2[0].pruningNumber}&fruitLoad=${G2Filter1Plant9Truss2[0].fruitLoad}&fruitDiameter=${G2Filter1Plant9Truss2[0].fruitDiameter}&pruningFlower=${G2Filter1Plant9Truss2[0].pruneFlowering}&floweringTruss=${G2Filter1Plant9Truss2[0].floweringTrussss}&pruningSet=${G2Filter1Plant9Truss2[0].prunSetting}&settingTruss=${G2Filter1Plant9Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant9Truss2[0].pruningHar}&harvestTruss=${G2Filter1Plant9Truss2[0].harvestTruss}`;

          console.log("URL : " + url320);

          fetch(url320, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G2Filter1Plant9Truss3.length) {

                const scriptUrl321 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url321 = `${scriptUrl321}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant9Truss3[0].plantNumber}&trussNumber=${G2Filter1Plant9Truss3[0].trussNumber}&setFruits=${G2Filter1Plant9Truss3[0].setFruits}&setFlowers=${G2Filter1Plant9Truss3[0].setFlowers}&pruningNumber=${G2Filter1Plant9Truss3[0].pruningNumber}&fruitLoad=${G2Filter1Plant9Truss3[0].fruitLoad}&fruitDiameter=${G2Filter1Plant9Truss3[0].fruitDiameter}&pruningFlower=${G2Filter1Plant9Truss3[0].pruneFlowering}&floweringTruss=${G2Filter1Plant9Truss3[0].floweringTrussss}&pruningSet=${G2Filter1Plant9Truss3[0].prunSetting}&settingTruss=${G2Filter1Plant9Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant9Truss3[0].pruningHar}&harvestTruss=${G2Filter1Plant9Truss3[0].harvestTruss}`;

                console.log("URL : " + url321);

                fetch(url321, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G2Filter1Plant9Truss4.length) {

                      const scriptUrl322 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url322 = `${scriptUrl322}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant9Truss4[0].plantNumber}&trussNumber=${G2Filter1Plant9Truss4[0].trussNumber}&setFruits=${G2Filter1Plant9Truss4[0].setFruits}&setFlowers=${G2Filter1Plant9Truss4[0].setFlowers}&pruningNumber=${G2Filter1Plant9Truss4[0].pruningNumber}&fruitLoad=${G2Filter1Plant9Truss4[0].fruitLoad}&fruitDiameter=${G2Filter1Plant9Truss4[0].fruitDiameter}&pruningFlower=${G2Filter1Plant9Truss4[0].pruneFlowering}&floweringTruss=${G2Filter1Plant9Truss4[0].floweringTrussss}&pruningSet=${G2Filter1Plant9Truss4[0].prunSetting}&settingTruss=${G2Filter1Plant9Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant9Truss4[0].pruningHar}&harvestTruss=${G2Filter1Plant9Truss4[0].harvestTruss}`;

                      console.log("URL : " + url322);

                      fetch(url322, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G2Filter1Plant9Truss5.length) {

                            const scriptUrl323 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url323 = `${scriptUrl323}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant9Truss5[0].plantNumber}&trussNumber=${G2Filter1Plant9Truss5[0].trussNumber}&setFruits=${G2Filter1Plant9Truss5[0].setFruits}&setFlowers=${G2Filter1Plant9Truss5[0].setFlowers}&pruningNumber=${G2Filter1Plant9Truss5[0].pruningNumber}&fruitLoad=${G2Filter1Plant9Truss5[0].fruitLoad}&fruitDiameter=${G2Filter1Plant9Truss5[0].fruitDiameter}&pruningFlower=${G2Filter1Plant9Truss5[0].pruneFlowering}&floweringTruss=${G2Filter1Plant9Truss5[0].floweringTrussss}&pruningSet=${G2Filter1Plant9Truss5[0].prunSetting}&settingTruss=${G2Filter1Plant9Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant9Truss5[0].pruningHar}&harvestTruss=${G2Filter1Plant9Truss5[0].harvestTruss}`;

                            console.log("URL : " + url323);

                            fetch(url323, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G2Filter1Plant9Truss6.length) {

                                  const scriptUrl324 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url324 = `${scriptUrl324}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant9Truss6[0].plantNumber}&trussNumber=${G2Filter1Plant9Truss6[0].trussNumber}&setFruits=${G2Filter1Plant9Truss6[0].setFruits}&setFlowers=${G2Filter1Plant9Truss6[0].setFlowers}&pruningNumber=${G2Filter1Plant9Truss6[0].pruningNumber}&fruitLoad=${G2Filter1Plant9Truss6[0].fruitLoad}&fruitDiameter=${G2Filter1Plant9Truss6[0].fruitDiameter}&pruningFlower=${G2Filter1Plant9Truss6[0].pruneFlowering}&floweringTruss=${G2Filter1Plant9Truss6[0].floweringTrussss}&pruningSet=${G2Filter1Plant9Truss6[0].prunSetting}&settingTruss=${G2Filter1Plant9Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant9Truss6[0].pruningHar}&harvestTruss=${G2Filter1Plant9Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url324);

                                  fetch(url324, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G2Filter1Plant9Truss7.length) {

                                        const scriptUrl325 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url325 = `${scriptUrl325}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant9Truss7[0].plantNumber}&trussNumber=${G2Filter1Plant9Truss7[0].trussNumber}&setFruits=${G2Filter1Plant9Truss7[0].setFruits}&setFlowers=${G2Filter1Plant9Truss7[0].setFlowers}&pruningNumber=${G2Filter1Plant9Truss7[0].pruningNumber}&fruitLoad=${G2Filter1Plant9Truss7[0].fruitLoad}&fruitDiameter=${G2Filter1Plant9Truss7[0].fruitDiameter}&pruningFlower=${G2Filter1Plant9Truss7[0].pruneFlowering}&floweringTruss=${G2Filter1Plant9Truss7[0].floweringTrussss}&pruningSet=${G2Filter1Plant9Truss7[0].prunSetting}&settingTruss=${G2Filter1Plant9Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant9Truss7[0].pruningHar}&harvestTruss=${G2Filter1Plant9Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url325);

                                        fetch(url325, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G2Filter1Plant9Truss8.length) {

                                              const scriptUrl326 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url326 = `${scriptUrl326}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant9Truss8[0].plantNumber}&trussNumber=${G2Filter1Plant9Truss8[0].trussNumber}&setFruits=${G2Filter1Plant9Truss8[0].setFruits}&setFlowers=${G2Filter1Plant9Truss8[0].setFlowers}&pruningNumber=${G2Filter1Plant9Truss8[0].pruningNumber}&fruitLoad=${G2Filter1Plant9Truss8[0].fruitLoad}&fruitDiameter=${G2Filter1Plant9Truss8[0].fruitDiameter}&pruningFlower=${G2Filter1Plant9Truss8[0].pruneFlowering}&floweringTruss=${G2Filter1Plant9Truss8[0].floweringTrussss}&pruningSet=${G2Filter1Plant9Truss8[0].prunSetting}&settingTruss=${G2Filter1Plant9Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant9Truss8[0].pruningHar}&harvestTruss=${G2Filter1Plant9Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url326);

                                              fetch(url326, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G2Filter1Plant9Truss9.length) {

                                                    const scriptUrl327 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url327 = `${scriptUrl327}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant9Truss9[0].plantNumber}&trussNumber=${G2Filter1Plant9Truss9[0].trussNumber}&setFruits=${G2Filter1Plant9Truss9[0].setFruits}&setFlowers=${G2Filter1Plant9Truss9[0].setFlowers}&pruningNumber=${G2Filter1Plant9Truss9[0].pruningNumber}&fruitLoad=${G2Filter1Plant9Truss9[0].fruitLoad}&fruitDiameter=${G2Filter1Plant9Truss9[0].fruitDiameter}&pruningFlower=${G2Filter1Plant9Truss9[0].pruneFlowering}&floweringTruss=${G2Filter1Plant9Truss9[0].floweringTrussss}&pruningSet=${G2Filter1Plant9Truss9[0].prunSetting}&settingTruss=${G2Filter1Plant9Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant9Truss9[0].pruningHar}&harvestTruss=${G2Filter1Plant9Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url327);

                                                    fetch(url327, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G2Filter1Plant9Truss0.length) {

                                                          const scriptUrl328 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url328 = `${scriptUrl328}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant9Truss0[0].plantNumber}&trussNumber=${G2Filter1Plant9Truss0[0].trussNumber}&setFruits=${G2Filter1Plant9Truss0[0].setFruits}&setFlowers=${G2Filter1Plant9Truss0[0].setFlowers}&pruningNumber=${G2Filter1Plant9Truss0[0].pruningNumber}&fruitLoad=${G2Filter1Plant9Truss0[0].fruitLoad}&fruitDiameter=${G2Filter1Plant9Truss0[0].fruitDiameter}&pruningFlower=${G2Filter1Plant9Truss0[0].pruneFlowering}&floweringTruss=${G2Filter1Plant9Truss0[0].floweringTrussss}&pruningSet=${G2Filter1Plant9Truss0[0].prunSetting}&settingTruss=${G2Filter1Plant9Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant9Truss0[0].pruningHar}&harvestTruss=${G2Filter1Plant9Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url328);

                                                          fetch(url328, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow3Plant10Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow3Plant10Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow3Plant10Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow3Plant10Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow3Plant10Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow3Plant10Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow3Plant10Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow3Plant10Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow3Plant10Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow3Plant10Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow3Plant10Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow3Plant10Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow3Plant10Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow3Plant10Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow3Plant10Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow3Plant10Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow3Plant10Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow3Plant10Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow3Plant10Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow3Plant10Trusses()
      }
    });

  }

  sendRow3Plant10Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G2 MERLICE ROW 70/71 PLANT 10
    let G2Filter1Plant10Truss1 = []
    let G2Filter1Plant10Truss2 = []
    let G2Filter1Plant10Truss3 = []
    let G2Filter1Plant10Truss4 = []
    let G2Filter1Plant10Truss5 = []
    let G2Filter1Plant10Truss6 = []
    let G2Filter1Plant10Truss7 = []
    let G2Filter1Plant10Truss8 = []
    let G2Filter1Plant10Truss9 = []
    let G2Filter1Plant10Truss0 = []
    //END

    //GER 2 Merlice/ Plant 10/ 70-71/ Truss Number 1-10

    G2Filter1Plant10Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G2Filter1Plant10Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G2Filter1Plant10Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G2Filter1Plant10Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G2Filter1Plant10Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G2Filter1Plant10Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G2Filter1Plant10Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G2Filter1Plant10Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G2Filter1Plant10Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G2Filter1Plant10Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '70/71' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 0

      )
    });

    //END

    const scriptUrl329 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url329 = `${scriptUrl329}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant10Truss1[0].plantNumber}&trussNumber=${G2Filter1Plant10Truss1[0].trussNumber}&setFruits=${G2Filter1Plant10Truss1[0].setFruits}&setFlowers=${G2Filter1Plant10Truss1[0].setFlowers}&pruningNumber=${G2Filter1Plant10Truss1[0].pruningNumber}&fruitLoad=${G2Filter1Plant10Truss1[0].fruitLoad}&fruitDiameter=${G2Filter1Plant10Truss1[0].fruitDiameter}&pruningFlower=${G2Filter1Plant10Truss1[0].pruneFlowering}&floweringTruss=${G2Filter1Plant10Truss1[0].floweringTrussss}&pruningSet=${G2Filter1Plant10Truss1[0].prunSetting}&settingTruss=${G2Filter1Plant10Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant10Truss1[0].pruningHar}&harvestTruss=${G2Filter1Plant10Truss1[0].harvestTruss}`;

    console.log("URL : " + url329);

    fetch(url329, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G2Filter1Plant10Truss2.length) {

          const scriptUrl330 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url330 = `${scriptUrl330}?
  callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant10Truss2[0].plantNumber}&trussNumber=${G2Filter1Plant10Truss2[0].trussNumber}&setFruits=${G2Filter1Plant10Truss2[0].setFruits}&setFlowers=${G2Filter1Plant10Truss2[0].setFlowers}&pruningNumber=${G2Filter1Plant10Truss2[0].pruningNumber}&fruitLoad=${G2Filter1Plant10Truss2[0].fruitLoad}&fruitDiameter=${G2Filter1Plant10Truss2[0].fruitDiameter}&pruningFlower=${G2Filter1Plant10Truss2[0].pruneFlowering}&floweringTruss=${G2Filter1Plant10Truss2[0].floweringTrussss}&pruningSet=${G2Filter1Plant10Truss2[0].prunSetting}&settingTruss=${G2Filter1Plant10Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant10Truss2[0].pruningHar}&harvestTruss=${G2Filter1Plant10Truss2[0].harvestTruss}`;

          console.log("URL : " + url330);

          fetch(url330, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G2Filter1Plant10Truss3.length) {

                const scriptUrl331 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url331 = `${scriptUrl331}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant10Truss3[0].plantNumber}&trussNumber=${G2Filter1Plant10Truss3[0].trussNumber}&setFruits=${G2Filter1Plant10Truss3[0].setFruits}&setFlowers=${G2Filter1Plant10Truss3[0].setFlowers}&pruningNumber=${G2Filter1Plant10Truss3[0].pruningNumber}&fruitLoad=${G2Filter1Plant10Truss3[0].fruitLoad}&fruitDiameter=${G2Filter1Plant10Truss3[0].fruitDiameter}&pruningFlower=${G2Filter1Plant10Truss3[0].pruneFlowering}&floweringTruss=${G2Filter1Plant10Truss3[0].floweringTrussss}&pruningSet=${G2Filter1Plant10Truss3[0].prunSetting}&settingTruss=${G2Filter1Plant10Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant10Truss3[0].pruningHar}&harvestTruss=${G2Filter1Plant10Truss3[0].harvestTruss}`;

                console.log("URL : " + url331);

                fetch(url331, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G2Filter1Plant10Truss4.length) {

                      const scriptUrl332 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url332 = `${scriptUrl332}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant10Truss4[0].plantNumber}&trussNumber=${G2Filter1Plant10Truss4[0].trussNumber}&setFruits=${G2Filter1Plant10Truss4[0].setFruits}&setFlowers=${G2Filter1Plant10Truss4[0].setFlowers}&pruningNumber=${G2Filter1Plant10Truss4[0].pruningNumber}&fruitLoad=${G2Filter1Plant10Truss4[0].fruitLoad}&fruitDiameter=${G2Filter1Plant10Truss4[0].fruitDiameter}&pruningFlower=${G2Filter1Plant10Truss4[0].pruneFlowering}&floweringTruss=${G2Filter1Plant10Truss4[0].floweringTrussss}&pruningSet=${G2Filter1Plant10Truss4[0].prunSetting}&settingTruss=${G2Filter1Plant10Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant10Truss4[0].pruningHar}&harvestTruss=${G2Filter1Plant10Truss4[0].harvestTruss}`;

                      console.log("URL : " + url332);

                      fetch(url332, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G2Filter1Plant10Truss5.length) {

                            const scriptUrl333 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url333 = `${scriptUrl333}?
        callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant10Truss5[0].plantNumber}&trussNumber=${G2Filter1Plant10Truss5[0].trussNumber}&setFruits=${G2Filter1Plant10Truss5[0].setFruits}&setFlowers=${G2Filter1Plant10Truss5[0].setFlowers}&pruningNumber=${G2Filter1Plant10Truss5[0].pruningNumber}&fruitLoad=${G2Filter1Plant10Truss5[0].fruitLoad}&fruitDiameter=${G2Filter1Plant10Truss5[0].fruitDiameter}&pruningFlower=${G2Filter1Plant10Truss5[0].pruneFlowering}&floweringTruss=${G2Filter1Plant10Truss5[0].floweringTrussss}&pruningSet=${G2Filter1Plant10Truss5[0].prunSetting}&settingTruss=${G2Filter1Plant10Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant10Truss5[0].pruningHar}&harvestTruss=${G2Filter1Plant10Truss5[0].harvestTruss}`;

                            console.log("URL : " + url333);

                            fetch(url333, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G2Filter1Plant10Truss6.length) {

                                  const scriptUrl334 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url334 = `${scriptUrl334}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant10Truss6[0].plantNumber}&trussNumber=${G2Filter1Plant10Truss6[0].trussNumber}&setFruits=${G2Filter1Plant10Truss6[0].setFruits}&setFlowers=${G2Filter1Plant10Truss6[0].setFlowers}&pruningNumber=${G2Filter1Plant10Truss6[0].pruningNumber}&fruitLoad=${G2Filter1Plant10Truss6[0].fruitLoad}&fruitDiameter=${G2Filter1Plant10Truss6[0].fruitDiameter}&pruningFlower=${G2Filter1Plant10Truss6[0].pruneFlowering}&floweringTruss=${G2Filter1Plant10Truss6[0].floweringTrussss}&pruningSet=${G2Filter1Plant10Truss6[0].prunSetting}&settingTruss=${G2Filter1Plant10Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant10Truss6[0].pruningHar}&harvestTruss=${G2Filter1Plant10Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url334);

                                  fetch(url334, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G2Filter1Plant10Truss7.length) {

                                        const scriptUrl335 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url335 = `${scriptUrl335}?
              callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant10Truss7[0].plantNumber}&trussNumber=${G2Filter1Plant10Truss7[0].trussNumber}&setFruits=${G2Filter1Plant10Truss7[0].setFruits}&setFlowers=${G2Filter1Plant10Truss7[0].setFlowers}&pruningNumber=${G2Filter1Plant10Truss7[0].pruningNumber}&fruitLoad=${G2Filter1Plant10Truss7[0].fruitLoad}&fruitDiameter=${G2Filter1Plant10Truss7[0].fruitDiameter}&pruningFlower=${G2Filter1Plant10Truss7[0].pruneFlowering}&floweringTruss=${G2Filter1Plant10Truss7[0].floweringTrussss}&pruningSet=${G2Filter1Plant10Truss7[0].prunSetting}&settingTruss=${G2Filter1Plant10Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant10Truss7[0].pruningHar}&harvestTruss=${G2Filter1Plant10Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url335);

                                        fetch(url335, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G2Filter1Plant10Truss8.length) {

                                              const scriptUrl336 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url336 = `${scriptUrl336}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant10Truss8[0].plantNumber}&trussNumber=${G2Filter1Plant10Truss8[0].trussNumber}&setFruits=${G2Filter1Plant10Truss8[0].setFruits}&setFlowers=${G2Filter1Plant10Truss8[0].setFlowers}&pruningNumber=${G2Filter1Plant10Truss8[0].pruningNumber}&fruitLoad=${G2Filter1Plant10Truss8[0].fruitLoad}&fruitDiameter=${G2Filter1Plant10Truss8[0].fruitDiameter}&pruningFlower=${G2Filter1Plant10Truss8[0].pruneFlowering}&floweringTruss=${G2Filter1Plant10Truss8[0].floweringTrussss}&pruningSet=${G2Filter1Plant10Truss8[0].prunSetting}&settingTruss=${G2Filter1Plant10Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant10Truss8[0].pruningHar}&harvestTruss=${G2Filter1Plant10Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url336);

                                              fetch(url336, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G2Filter1Plant10Truss9.length) {

                                                    const scriptUrl337 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url337 = `${scriptUrl337}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant10Truss9[0].plantNumber}&trussNumber=${G2Filter1Plant10Truss9[0].trussNumber}&setFruits=${G2Filter1Plant10Truss9[0].setFruits}&setFlowers=${G2Filter1Plant10Truss9[0].setFlowers}&pruningNumber=${G2Filter1Plant10Truss9[0].pruningNumber}&fruitLoad=${G2Filter1Plant10Truss9[0].fruitLoad}&fruitDiameter=${G2Filter1Plant10Truss9[0].fruitDiameter}&pruningFlower=${G2Filter1Plant10Truss9[0].pruneFlowering}&floweringTruss=${G2Filter1Plant10Truss9[0].floweringTrussss}&pruningSet=${G2Filter1Plant10Truss9[0].prunSetting}&settingTruss=${G2Filter1Plant10Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant10Truss9[0].pruningHar}&harvestTruss=${G2Filter1Plant10Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url337);

                                                    fetch(url337, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G2Filter1Plant10Truss0.length) {

                                                          const scriptUrl338 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url338 = `${scriptUrl338}?
                    callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter1Plant10Truss0[0].plantNumber}&trussNumber=${G2Filter1Plant10Truss0[0].trussNumber}&setFruits=${G2Filter1Plant10Truss0[0].setFruits}&setFlowers=${G2Filter1Plant10Truss0[0].setFlowers}&pruningNumber=${G2Filter1Plant10Truss0[0].pruningNumber}&fruitLoad=${G2Filter1Plant10Truss0[0].fruitLoad}&fruitDiameter=${G2Filter1Plant10Truss0[0].fruitDiameter}&pruningFlower=${G2Filter1Plant10Truss0[0].pruneFlowering}&floweringTruss=${G2Filter1Plant10Truss0[0].floweringTrussss}&pruningSet=${G2Filter1Plant10Truss0[0].prunSetting}&settingTruss=${G2Filter1Plant10Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter1Plant10Truss0[0].pruningHar}&harvestTruss=${G2Filter1Plant10Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url338);

                                                          fetch(url338, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow4Plant1Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow4Plant1Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow4Plant1Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow4Plant1Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow4Plant1Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow4Plant1Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow4Plant1Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow4Plant1Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow4Plant1Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow4Plant1Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow4Plant1Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow4Plant1Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow4Plant1Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow4Plant1Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow4Plant1Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow4Plant1Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow4Plant1Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow4Plant1Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow4Plant1Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow4Plant1Trusses()
      }
    });

  }

  sendRow4Plant1Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G2 MERLICE ROW 114/115 PLANT 10
    let G2Filter2Plant1Truss1 = []
    let G2Filter2Plant1Truss2 = []
    let G2Filter2Plant1Truss3 = []
    let G2Filter2Plant1Truss4 = []
    let G2Filter2Plant1Truss5 = []
    let G2Filter2Plant1Truss6 = []
    let G2Filter2Plant1Truss7 = []
    let G2Filter2Plant1Truss8 = []
    let G2Filter2Plant1Truss9 = []
    let G2Filter2Plant1Truss0 = []
    //END

    //GER 2 Merlice/ Plant 1/ 114-115/ Truss Number 1-10

    G2Filter2Plant1Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G2Filter2Plant1Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G2Filter2Plant1Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G2Filter2Plant1Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G2Filter2Plant1Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G2Filter2Plant1Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G2Filter2Plant1Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G2Filter2Plant1Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G2Filter2Plant1Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G2Filter2Plant1Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '1' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl339 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url339 = `${scriptUrl339}?
  callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant1Truss1[0].plantNumber}&trussNumber=${G2Filter2Plant1Truss1[0].trussNumber}&setFruits=${G2Filter2Plant1Truss1[0].setFruits}&setFlowers=${G2Filter2Plant1Truss1[0].setFlowers}&pruningNumber=${G2Filter2Plant1Truss1[0].pruningNumber}&fruitLoad=${G2Filter2Plant1Truss1[0].fruitLoad}&fruitDiameter=${G2Filter2Plant1Truss1[0].fruitDiameter}&pruningFlower=${G2Filter2Plant1Truss1[0].pruneFlowering}&floweringTruss=${G2Filter2Plant1Truss1[0].floweringTrussss}&pruningSet=${G2Filter2Plant1Truss1[0].prunSetting}&settingTruss=${G2Filter2Plant1Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant1Truss1[0].pruningHar}&harvestTruss=${G2Filter2Plant1Truss1[0].harvestTruss}`;

    console.log("URL : " + url339);

    fetch(url339, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G2Filter2Plant1Truss2.length) {

          const scriptUrl340 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url340 = `${scriptUrl340}?
  callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant1Truss2[0].plantNumber}&trussNumber=${G2Filter2Plant1Truss2[0].trussNumber}&setFruits=${G2Filter2Plant1Truss2[0].setFruits}&setFlowers=${G2Filter2Plant1Truss2[0].setFlowers}&pruningNumber=${G2Filter2Plant1Truss2[0].pruningNumber}&fruitLoad=${G2Filter2Plant1Truss2[0].fruitLoad}&fruitDiameter=${G2Filter2Plant1Truss2[0].fruitDiameter}&pruningFlower=${G2Filter2Plant1Truss2[0].pruneFlowering}&floweringTruss=${G2Filter2Plant1Truss2[0].floweringTrussss}&pruningSet=${G2Filter2Plant1Truss2[0].prunSetting}&settingTruss=${G2Filter2Plant1Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant1Truss2[0].pruningHar}&harvestTruss=${G2Filter2Plant1Truss2[0].harvestTruss}`;

          console.log("URL : " + url340);

          fetch(url340, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G2Filter2Plant1Truss3.length) {

                const scriptUrl341 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url341 = `${scriptUrl341}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant1Truss3[0].plantNumber}&trussNumber=${G2Filter2Plant1Truss3[0].trussNumber}&setFruits=${G2Filter2Plant1Truss3[0].setFruits}&setFlowers=${G2Filter2Plant1Truss3[0].setFlowers}&pruningNumber=${G2Filter2Plant1Truss3[0].pruningNumber}&fruitLoad=${G2Filter2Plant1Truss3[0].fruitLoad}&fruitDiameter=${G2Filter2Plant1Truss3[0].fruitDiameter}&pruningFlower=${G2Filter2Plant1Truss3[0].pruneFlowering}&floweringTruss=${G2Filter2Plant1Truss3[0].floweringTrussss}&pruningSet=${G2Filter2Plant1Truss3[0].prunSetting}&settingTruss=${G2Filter2Plant1Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant1Truss3[0].pruningHar}&harvestTruss=${G2Filter2Plant1Truss3[0].harvestTruss}`;

                console.log("URL : " + url341);

                fetch(url341, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G2Filter2Plant1Truss4.length) {

                      const scriptUrl342 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url342 = `${scriptUrl342}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant1Truss4[0].plantNumber}&trussNumber=${G2Filter2Plant1Truss4[0].trussNumber}&setFruits=${G2Filter2Plant1Truss4[0].setFruits}&setFlowers=${G2Filter2Plant1Truss4[0].setFlowers}&pruningNumber=${G2Filter2Plant1Truss4[0].pruningNumber}&fruitLoad=${G2Filter2Plant1Truss4[0].fruitLoad}&fruitDiameter=${G2Filter2Plant1Truss4[0].fruitDiameter}&pruningFlower=${G2Filter2Plant1Truss4[0].pruneFlowering}&floweringTruss=${G2Filter2Plant1Truss4[0].floweringTrussss}&pruningSet=${G2Filter2Plant1Truss4[0].prunSetting}&settingTruss=${G2Filter2Plant1Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant1Truss4[0].pruningHar}&harvestTruss=${G2Filter2Plant1Truss4[0].harvestTruss}`;

                      console.log("URL : " + url342);

                      fetch(url342, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G2Filter2Plant1Truss5.length) {

                            const scriptUrl343 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url343 = `${scriptUrl343}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant1Truss5[0].plantNumber}&trussNumber=${G2Filter2Plant1Truss5[0].trussNumber}&setFruits=${G2Filter2Plant1Truss5[0].setFruits}&setFlowers=${G2Filter2Plant1Truss5[0].setFlowers}&pruningNumber=${G2Filter2Plant1Truss5[0].pruningNumber}&fruitLoad=${G2Filter2Plant1Truss5[0].fruitLoad}&fruitDiameter=${G2Filter2Plant1Truss5[0].fruitDiameter}&pruningFlower=${G2Filter2Plant1Truss5[0].pruneFlowering}&floweringTruss=${G2Filter2Plant1Truss5[0].floweringTrussss}&pruningSet=${G2Filter2Plant1Truss5[0].prunSetting}&settingTruss=${G2Filter2Plant1Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant1Truss5[0].pruningHar}&harvestTruss=${G2Filter2Plant1Truss5[0].harvestTruss}`;

                            console.log("URL : " + url343);

                            fetch(url343, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G2Filter2Plant1Truss6.length) {

                                  const scriptUrl344 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url344 = `${scriptUrl344}?
              callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant1Truss6[0].plantNumber}&trussNumber=${G2Filter2Plant1Truss6[0].trussNumber}&setFruits=${G2Filter2Plant1Truss6[0].setFruits}&setFlowers=${G2Filter2Plant1Truss6[0].setFlowers}&pruningNumber=${G2Filter2Plant1Truss6[0].pruningNumber}&fruitLoad=${G2Filter2Plant1Truss6[0].fruitLoad}&fruitDiameter=${G2Filter2Plant1Truss6[0].fruitDiameter}&pruningFlower=${G2Filter2Plant1Truss6[0].pruneFlowering}&floweringTruss=${G2Filter2Plant1Truss6[0].floweringTrussss}&pruningSet=${G2Filter2Plant1Truss6[0].prunSetting}&settingTruss=${G2Filter2Plant1Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant1Truss6[0].pruningHar}&harvestTruss=${G2Filter2Plant1Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url344);

                                  fetch(url344, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G2Filter2Plant1Truss7.length) {

                                        const scriptUrl345 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url345 = `${scriptUrl345}?
              callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant1Truss7[0].plantNumber}&trussNumber=${G2Filter2Plant1Truss7[0].trussNumber}&setFruits=${G2Filter2Plant1Truss7[0].setFruits}&setFlowers=${G2Filter2Plant1Truss7[0].setFlowers}&pruningNumber=${G2Filter2Plant1Truss7[0].pruningNumber}&fruitLoad=${G2Filter2Plant1Truss7[0].fruitLoad}&fruitDiameter=${G2Filter2Plant1Truss7[0].fruitDiameter}&pruningFlower=${G2Filter2Plant1Truss7[0].pruneFlowering}&floweringTruss=${G2Filter2Plant1Truss7[0].floweringTrussss}&pruningSet=${G2Filter2Plant1Truss7[0].prunSetting}&settingTruss=${G2Filter2Plant1Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant1Truss7[0].pruningHar}&harvestTruss=${G2Filter2Plant1Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url345);

                                        fetch(url345, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G2Filter2Plant1Truss8.length) {

                                              const scriptUrl346 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url346 = `${scriptUrl346}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant1Truss8[0].plantNumber}&trussNumber=${G2Filter2Plant1Truss8[0].trussNumber}&setFruits=${G2Filter2Plant1Truss8[0].setFruits}&setFlowers=${G2Filter2Plant1Truss8[0].setFlowers}&pruningNumber=${G2Filter2Plant1Truss8[0].pruningNumber}&fruitLoad=${G2Filter2Plant1Truss8[0].fruitLoad}&fruitDiameter=${G2Filter2Plant1Truss8[0].fruitDiameter}&pruningFlower=${G2Filter2Plant1Truss8[0].pruneFlowering}&floweringTruss=${G2Filter2Plant1Truss8[0].floweringTrussss}&pruningSet=${G2Filter2Plant1Truss8[0].prunSetting}&settingTruss=${G2Filter2Plant1Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant1Truss8[0].pruningHar}&harvestTruss=${G2Filter2Plant1Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url346);

                                              fetch(url346, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G2Filter2Plant1Truss9.length) {

                                                    const scriptUrl347 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url347 = `${scriptUrl347}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant1Truss9[0].plantNumber}&trussNumber=${G2Filter2Plant1Truss9[0].trussNumber}&setFruits=${G2Filter2Plant1Truss9[0].setFruits}&setFlowers=${G2Filter2Plant1Truss9[0].setFlowers}&pruningNumber=${G2Filter2Plant1Truss9[0].pruningNumber}&fruitLoad=${G2Filter2Plant1Truss9[0].fruitLoad}&fruitDiameter=${G2Filter2Plant1Truss9[0].fruitDiameter}&pruningFlower=${G2Filter2Plant1Truss9[0].pruneFlowering}&floweringTruss=${G2Filter2Plant1Truss9[0].floweringTrussss}&pruningSet=${G2Filter2Plant1Truss9[0].prunSetting}&settingTruss=${G2Filter2Plant1Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant1Truss9[0].pruningHar}&harvestTruss=${G2Filter2Plant1Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url347);

                                                    fetch(url347, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G2Filter2Plant1Truss0.length) {

                                                          const scriptUrl348 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url348 = `${scriptUrl348}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant1Truss0[0].plantNumber}&trussNumber=${G2Filter2Plant1Truss0[0].trussNumber}&setFruits=${G2Filter2Plant1Truss0[0].setFruits}&setFlowers=${G2Filter2Plant1Truss0[0].setFlowers}&pruningNumber=${G2Filter2Plant1Truss0[0].pruningNumber}&fruitLoad=${G2Filter2Plant1Truss0[0].fruitLoad}&fruitDiameter=${G2Filter2Plant1Truss0[0].fruitDiameter}&pruningFlower=${G2Filter2Plant1Truss0[0].pruneFlowering}&floweringTruss=${G2Filter2Plant1Truss0[0].floweringTrussss}&pruningSet=${G2Filter2Plant1Truss0[0].prunSetting}&settingTruss=${G2Filter2Plant1Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant1Truss0[0].pruningHar}&harvestTruss=${G2Filter2Plant1Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url348);

                                                          fetch(url348, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow4Plant2Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow4Plant2Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow4Plant2Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow4Plant2Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow4Plant2Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow4Plant2Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow4Plant2Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow4Plant2Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow4Plant2Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow4Plant2Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow4Plant2Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow4Plant2Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow4Plant2Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow4Plant2Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow4Plant2Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow4Plant2Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow4Plant2Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow4Plant2Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow4Plant2Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow4Plant2Trusses()
      }
    });

  }

  sendRow4Plant2Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G2 MERLICE ROW 114/115 PLANT 10
    let G2Filter2Plant2Truss1 = []
    let G2Filter2Plant2Truss2 = []
    let G2Filter2Plant2Truss3 = []
    let G2Filter2Plant2Truss4 = []
    let G2Filter2Plant2Truss5 = []
    let G2Filter2Plant2Truss6 = []
    let G2Filter2Plant2Truss7 = []
    let G2Filter2Plant2Truss8 = []
    let G2Filter2Plant2Truss9 = []
    let G2Filter2Plant2Truss0 = []
    //END

    //GER 2 Merlice/ Plant 2/ 114-115/ Truss Number 1-10

    G2Filter2Plant2Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G2Filter2Plant2Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G2Filter2Plant2Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G2Filter2Plant2Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G2Filter2Plant2Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G2Filter2Plant2Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G2Filter2Plant2Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G2Filter2Plant2Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G2Filter2Plant2Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G2Filter2Plant2Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '2' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl349 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url349 = `${scriptUrl349}?
  callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant2Truss1[0].plantNumber}&trussNumber=${G2Filter2Plant2Truss1[0].trussNumber}&setFruits=${G2Filter2Plant2Truss1[0].setFruits}&setFlowers=${G2Filter2Plant2Truss1[0].setFlowers}&pruningNumber=${G2Filter2Plant2Truss1[0].pruningNumber}&fruitLoad=${G2Filter2Plant2Truss1[0].fruitLoad}&fruitDiameter=${G2Filter2Plant2Truss1[0].fruitDiameter}&pruningFlower=${G2Filter2Plant2Truss1[0].pruneFlowering}&floweringTruss=${G2Filter2Plant2Truss1[0].floweringTrussss}&pruningSet=${G2Filter2Plant2Truss1[0].prunSetting}&settingTruss=${G2Filter2Plant2Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant2Truss1[0].pruningHar}&harvestTruss=${G2Filter2Plant2Truss1[0].harvestTruss}`;

    console.log("URL : " + url349);

    fetch(url349, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G2Filter2Plant2Truss2.length) {

          const scriptUrl350 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url350 = `${scriptUrl350}?
  callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant2Truss2[0].plantNumber}&trussNumber=${G2Filter2Plant2Truss2[0].trussNumber}&setFruits=${G2Filter2Plant2Truss2[0].setFruits}&setFlowers=${G2Filter2Plant2Truss2[0].setFlowers}&pruningNumber=${G2Filter2Plant2Truss2[0].pruningNumber}&fruitLoad=${G2Filter2Plant2Truss2[0].fruitLoad}&fruitDiameter=${G2Filter2Plant2Truss2[0].fruitDiameter}&pruningFlower=${G2Filter2Plant2Truss2[0].pruneFlowering}&floweringTruss=${G2Filter2Plant2Truss2[0].floweringTrussss}&pruningSet=${G2Filter2Plant2Truss2[0].prunSetting}&settingTruss=${G2Filter2Plant2Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant2Truss2[0].pruningHar}&harvestTruss=${G2Filter2Plant2Truss2[0].harvestTruss}`;

          console.log("URL : " + url350);

          fetch(url350, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G2Filter2Plant2Truss3.length) {

                const scriptUrl351 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url351 = `${scriptUrl351}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant2Truss3[0].plantNumber}&trussNumber=${G2Filter2Plant2Truss3[0].trussNumber}&setFruits=${G2Filter2Plant2Truss3[0].setFruits}&setFlowers=${G2Filter2Plant2Truss3[0].setFlowers}&pruningNumber=${G2Filter2Plant2Truss3[0].pruningNumber}&fruitLoad=${G2Filter2Plant2Truss3[0].fruitLoad}&fruitDiameter=${G2Filter2Plant2Truss3[0].fruitDiameter}&pruningFlower=${G2Filter2Plant2Truss3[0].pruneFlowering}&floweringTruss=${G2Filter2Plant2Truss3[0].floweringTrussss}&pruningSet=${G2Filter2Plant2Truss3[0].prunSetting}&settingTruss=${G2Filter2Plant2Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant2Truss3[0].pruningHar}&harvestTruss=${G2Filter2Plant2Truss3[0].harvestTruss}`;

                console.log("URL : " + url351);

                fetch(url351, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G2Filter2Plant2Truss4.length) {

                      const scriptUrl352 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url352 = `${scriptUrl352}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant2Truss4[0].plantNumber}&trussNumber=${G2Filter2Plant2Truss4[0].trussNumber}&setFruits=${G2Filter2Plant2Truss4[0].setFruits}&setFlowers=${G2Filter2Plant2Truss4[0].setFlowers}&pruningNumber=${G2Filter2Plant2Truss4[0].pruningNumber}&fruitLoad=${G2Filter2Plant2Truss4[0].fruitLoad}&fruitDiameter=${G2Filter2Plant2Truss4[0].fruitDiameter}&pruningFlower=${G2Filter2Plant2Truss4[0].pruneFlowering}&floweringTruss=${G2Filter2Plant2Truss4[0].floweringTrussss}&pruningSet=${G2Filter2Plant2Truss4[0].prunSetting}&settingTruss=${G2Filter2Plant2Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant2Truss4[0].pruningHar}&harvestTruss=${G2Filter2Plant2Truss4[0].harvestTruss}`;

                      console.log("URL : " + url352);

                      fetch(url352, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G2Filter2Plant2Truss5.length) {

                            const scriptUrl353 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url353 = `${scriptUrl353}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant2Truss5[0].plantNumber}&trussNumber=${G2Filter2Plant2Truss5[0].trussNumber}&setFruits=${G2Filter2Plant2Truss5[0].setFruits}&setFlowers=${G2Filter2Plant2Truss5[0].setFlowers}&pruningNumber=${G2Filter2Plant2Truss5[0].pruningNumber}&fruitLoad=${G2Filter2Plant2Truss5[0].fruitLoad}&fruitDiameter=${G2Filter2Plant2Truss5[0].fruitDiameter}&pruningFlower=${G2Filter2Plant2Truss5[0].pruneFlowering}&floweringTruss=${G2Filter2Plant2Truss5[0].floweringTrussss}&pruningSet=${G2Filter2Plant2Truss5[0].prunSetting}&settingTruss=${G2Filter2Plant2Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant2Truss5[0].pruningHar}&harvestTruss=${G2Filter2Plant2Truss5[0].harvestTruss}`;

                            console.log("URL : " + url353);

                            fetch(url353, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G2Filter2Plant2Truss6.length) {

                                  const scriptUrl354 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url354 = `${scriptUrl354}?
              callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant2Truss6[0].plantNumber}&trussNumber=${G2Filter2Plant2Truss6[0].trussNumber}&setFruits=${G2Filter2Plant2Truss6[0].setFruits}&setFlowers=${G2Filter2Plant2Truss6[0].setFlowers}&pruningNumber=${G2Filter2Plant2Truss6[0].pruningNumber}&fruitLoad=${G2Filter2Plant2Truss6[0].fruitLoad}&fruitDiameter=${G2Filter2Plant2Truss6[0].fruitDiameter}&pruningFlower=${G2Filter2Plant2Truss6[0].pruneFlowering}&floweringTruss=${G2Filter2Plant2Truss6[0].floweringTrussss}&pruningSet=${G2Filter2Plant2Truss6[0].prunSetting}&settingTruss=${G2Filter2Plant2Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant2Truss6[0].pruningHar}&harvestTruss=${G2Filter2Plant2Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url354);

                                  fetch(url354, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G2Filter2Plant2Truss7.length) {

                                        const scriptUrl355 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url355 = `${scriptUrl355}?
              callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant2Truss7[0].plantNumber}&trussNumber=${G2Filter2Plant2Truss7[0].trussNumber}&setFruits=${G2Filter2Plant2Truss7[0].setFruits}&setFlowers=${G2Filter2Plant2Truss7[0].setFlowers}&pruningNumber=${G2Filter2Plant2Truss7[0].pruningNumber}&fruitLoad=${G2Filter2Plant2Truss7[0].fruitLoad}&fruitDiameter=${G2Filter2Plant2Truss7[0].fruitDiameter}&pruningFlower=${G2Filter2Plant2Truss7[0].pruneFlowering}&floweringTruss=${G2Filter2Plant2Truss7[0].floweringTrussss}&pruningSet=${G2Filter2Plant2Truss7[0].prunSetting}&settingTruss=${G2Filter2Plant2Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant2Truss7[0].pruningHar}&harvestTruss=${G2Filter2Plant2Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url355);

                                        fetch(url355, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G2Filter2Plant2Truss8.length) {

                                              const scriptUrl356 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url356 = `${scriptUrl356}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant2Truss8[0].plantNumber}&trussNumber=${G2Filter2Plant2Truss8[0].trussNumber}&setFruits=${G2Filter2Plant2Truss8[0].setFruits}&setFlowers=${G2Filter2Plant2Truss8[0].setFlowers}&pruningNumber=${G2Filter2Plant2Truss8[0].pruningNumber}&fruitLoad=${G2Filter2Plant2Truss8[0].fruitLoad}&fruitDiameter=${G2Filter2Plant2Truss8[0].fruitDiameter}&pruningFlower=${G2Filter2Plant2Truss8[0].pruneFlowering}&floweringTruss=${G2Filter2Plant2Truss8[0].floweringTrussss}&pruningSet=${G2Filter2Plant2Truss8[0].prunSetting}&settingTruss=${G2Filter2Plant2Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant2Truss8[0].pruningHar}&harvestTruss=${G2Filter2Plant2Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url356);

                                              fetch(url356, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G2Filter2Plant2Truss9.length) {

                                                    const scriptUrl357 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url357 = `${scriptUrl357}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant2Truss9[0].plantNumber}&trussNumber=${G2Filter2Plant2Truss9[0].trussNumber}&setFruits=${G2Filter2Plant2Truss9[0].setFruits}&setFlowers=${G2Filter2Plant2Truss9[0].setFlowers}&pruningNumber=${G2Filter2Plant2Truss9[0].pruningNumber}&fruitLoad=${G2Filter2Plant2Truss9[0].fruitLoad}&fruitDiameter=${G2Filter2Plant2Truss9[0].fruitDiameter}&pruningFlower=${G2Filter2Plant2Truss9[0].pruneFlowering}&floweringTruss=${G2Filter2Plant2Truss9[0].floweringTrussss}&pruningSet=${G2Filter2Plant2Truss9[0].prunSetting}&settingTruss=${G2Filter2Plant2Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant2Truss9[0].pruningHar}&harvestTruss=${G2Filter2Plant2Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url357);

                                                    fetch(url357, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G2Filter2Plant2Truss0.length) {

                                                          const scriptUrl358 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url358 = `${scriptUrl358}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant2Truss0[0].plantNumber}&trussNumber=${G2Filter2Plant2Truss0[0].trussNumber}&setFruits=${G2Filter2Plant2Truss0[0].setFruits}&setFlowers=${G2Filter2Plant2Truss0[0].setFlowers}&pruningNumber=${G2Filter2Plant2Truss0[0].pruningNumber}&fruitLoad=${G2Filter2Plant2Truss0[0].fruitLoad}&fruitDiameter=${G2Filter2Plant2Truss0[0].fruitDiameter}&pruningFlower=${G2Filter2Plant2Truss0[0].pruneFlowering}&floweringTruss=${G2Filter2Plant2Truss0[0].floweringTrussss}&pruningSet=${G2Filter2Plant2Truss0[0].prunSetting}&settingTruss=${G2Filter2Plant2Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant2Truss0[0].pruningHar}&harvestTruss=${G2Filter2Plant2Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url358);

                                                          fetch(url358, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow4Plant3Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow4Plant3Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow4Plant3Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow4Plant3Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow4Plant3Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow4Plant3Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow4Plant3Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow4Plant3Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow4Plant3Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow4Plant3Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow4Plant3Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow4Plant3Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow4Plant3Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow4Plant3Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow4Plant3Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow4Plant3Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow4Plant3Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow4Plant3Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow4Plant3Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow4Plant3Trusses()
      }
    });


  }

  sendRow4Plant3Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G2 MERLICE ROW 114/115 PLANT 10
    let G2Filter2Plant3Truss1 = []
    let G2Filter2Plant3Truss2 = []
    let G2Filter2Plant3Truss3 = []
    let G2Filter2Plant3Truss4 = []
    let G2Filter2Plant3Truss5 = []
    let G2Filter2Plant3Truss6 = []
    let G2Filter2Plant3Truss7 = []
    let G2Filter2Plant3Truss8 = []
    let G2Filter2Plant3Truss9 = []
    let G2Filter2Plant3Truss0 = []
    //END

    //GER 2 Merlice/ Plant 3/ 114-115/ Truss Number 1-10

    G2Filter2Plant3Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G2Filter2Plant3Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G2Filter2Plant3Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G2Filter2Plant3Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G2Filter2Plant3Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G2Filter2Plant3Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G2Filter2Plant3Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G2Filter2Plant3Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G2Filter2Plant3Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G2Filter2Plant3Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '3' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl359 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url359 = `${scriptUrl359}?
  callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant3Truss1[0].plantNumber}&trussNumber=${G2Filter2Plant3Truss1[0].trussNumber}&setFruits=${G2Filter2Plant3Truss1[0].setFruits}&setFlowers=${G2Filter2Plant3Truss1[0].setFlowers}&pruningNumber=${G2Filter2Plant3Truss1[0].pruningNumber}&fruitLoad=${G2Filter2Plant3Truss1[0].fruitLoad}&fruitDiameter=${G2Filter2Plant3Truss1[0].fruitDiameter}&pruningFlower=${G2Filter2Plant3Truss1[0].pruneFlowering}&floweringTruss=${G2Filter2Plant3Truss1[0].floweringTrussss}&pruningSet=${G2Filter2Plant3Truss1[0].prunSetting}&settingTruss=${G2Filter2Plant3Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant3Truss1[0].pruningHar}&harvestTruss=${G2Filter2Plant3Truss1[0].harvestTruss}`;

    console.log("URL : " + url359);

    fetch(url359, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G2Filter2Plant3Truss2.length) {

          const scriptUrl360 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url360 = `${scriptUrl360}?
  callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant3Truss2[0].plantNumber}&trussNumber=${G2Filter2Plant3Truss2[0].trussNumber}&setFruits=${G2Filter2Plant3Truss2[0].setFruits}&setFlowers=${G2Filter2Plant3Truss2[0].setFlowers}&pruningNumber=${G2Filter2Plant3Truss2[0].pruningNumber}&fruitLoad=${G2Filter2Plant3Truss2[0].fruitLoad}&fruitDiameter=${G2Filter2Plant3Truss2[0].fruitDiameter}&pruningFlower=${G2Filter2Plant3Truss2[0].pruneFlowering}&floweringTruss=${G2Filter2Plant3Truss2[0].floweringTrussss}&pruningSet=${G2Filter2Plant3Truss2[0].prunSetting}&settingTruss=${G2Filter2Plant3Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant3Truss2[0].pruningHar}&harvestTruss=${G2Filter2Plant3Truss2[0].harvestTruss}`;

          console.log("URL : " + url360);

          fetch(url360, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G2Filter2Plant3Truss3.length) {

                const scriptUrl361 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url361 = `${scriptUrl361}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant3Truss3[0].plantNumber}&trussNumber=${G2Filter2Plant3Truss3[0].trussNumber}&setFruits=${G2Filter2Plant3Truss3[0].setFruits}&setFlowers=${G2Filter2Plant3Truss3[0].setFlowers}&pruningNumber=${G2Filter2Plant3Truss3[0].pruningNumber}&fruitLoad=${G2Filter2Plant3Truss3[0].fruitLoad}&fruitDiameter=${G2Filter2Plant3Truss3[0].fruitDiameter}&pruningFlower=${G2Filter2Plant3Truss3[0].pruneFlowering}&floweringTruss=${G2Filter2Plant3Truss3[0].floweringTrussss}&pruningSet=${G2Filter2Plant3Truss3[0].prunSetting}&settingTruss=${G2Filter2Plant3Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant3Truss3[0].pruningHar}&harvestTruss=${G2Filter2Plant3Truss3[0].harvestTruss}`;

                console.log("URL : " + url361);

                fetch(url361, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G2Filter2Plant3Truss4.length) {

                      const scriptUrl362 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url362 = `${scriptUrl362}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant3Truss4[0].plantNumber}&trussNumber=${G2Filter2Plant3Truss4[0].trussNumber}&setFruits=${G2Filter2Plant3Truss4[0].setFruits}&setFlowers=${G2Filter2Plant3Truss4[0].setFlowers}&pruningNumber=${G2Filter2Plant3Truss4[0].pruningNumber}&fruitLoad=${G2Filter2Plant3Truss4[0].fruitLoad}&fruitDiameter=${G2Filter2Plant3Truss4[0].fruitDiameter}&pruningFlower=${G2Filter2Plant3Truss4[0].pruneFlowering}&floweringTruss=${G2Filter2Plant3Truss4[0].floweringTrussss}&pruningSet=${G2Filter2Plant3Truss4[0].prunSetting}&settingTruss=${G2Filter2Plant3Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant3Truss4[0].pruningHar}&harvestTruss=${G2Filter2Plant3Truss4[0].harvestTruss}`;

                      console.log("URL : " + url362);

                      fetch(url362, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G2Filter2Plant3Truss5.length) {

                            const scriptUrl363 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url363 = `${scriptUrl363}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant3Truss5[0].plantNumber}&trussNumber=${G2Filter2Plant3Truss5[0].trussNumber}&setFruits=${G2Filter2Plant3Truss5[0].setFruits}&setFlowers=${G2Filter2Plant3Truss5[0].setFlowers}&pruningNumber=${G2Filter2Plant3Truss5[0].pruningNumber}&fruitLoad=${G2Filter2Plant3Truss5[0].fruitLoad}&fruitDiameter=${G2Filter2Plant3Truss5[0].fruitDiameter}&pruningFlower=${G2Filter2Plant3Truss5[0].pruneFlowering}&floweringTruss=${G2Filter2Plant3Truss5[0].floweringTrussss}&pruningSet=${G2Filter2Plant3Truss5[0].prunSetting}&settingTruss=${G2Filter2Plant3Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant3Truss5[0].pruningHar}&harvestTruss=${G2Filter2Plant3Truss5[0].harvestTruss}`;

                            console.log("URL : " + url363);

                            fetch(url363, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G2Filter2Plant3Truss6.length) {

                                  const scriptUrl364 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url364 = `${scriptUrl364}?
              callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant3Truss6[0].plantNumber}&trussNumber=${G2Filter2Plant3Truss6[0].trussNumber}&setFruits=${G2Filter2Plant3Truss6[0].setFruits}&setFlowers=${G2Filter2Plant3Truss6[0].setFlowers}&pruningNumber=${G2Filter2Plant3Truss6[0].pruningNumber}&fruitLoad=${G2Filter2Plant3Truss6[0].fruitLoad}&fruitDiameter=${G2Filter2Plant3Truss6[0].fruitDiameter}&pruningFlower=${G2Filter2Plant3Truss6[0].pruneFlowering}&floweringTruss=${G2Filter2Plant3Truss6[0].floweringTrussss}&pruningSet=${G2Filter2Plant3Truss6[0].prunSetting}&settingTruss=${G2Filter2Plant3Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant3Truss6[0].pruningHar}&harvestTruss=${G2Filter2Plant3Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url364);

                                  fetch(url364, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G2Filter2Plant3Truss7.length) {

                                        const scriptUrl365 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url365 = `${scriptUrl365}?
              callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant3Truss7[0].plantNumber}&trussNumber=${G2Filter2Plant3Truss7[0].trussNumber}&setFruits=${G2Filter2Plant3Truss7[0].setFruits}&setFlowers=${G2Filter2Plant3Truss7[0].setFlowers}&pruningNumber=${G2Filter2Plant3Truss7[0].pruningNumber}&fruitLoad=${G2Filter2Plant3Truss7[0].fruitLoad}&fruitDiameter=${G2Filter2Plant3Truss7[0].fruitDiameter}&pruningFlower=${G2Filter2Plant3Truss7[0].pruneFlowering}&floweringTruss=${G2Filter2Plant3Truss7[0].floweringTrussss}&pruningSet=${G2Filter2Plant3Truss7[0].prunSetting}&settingTruss=${G2Filter2Plant3Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant3Truss7[0].pruningHar}&harvestTruss=${G2Filter2Plant3Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url365);

                                        fetch(url365, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G2Filter2Plant3Truss8.length) {

                                              const scriptUrl366 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url366 = `${scriptUrl366}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant3Truss8[0].plantNumber}&trussNumber=${G2Filter2Plant3Truss8[0].trussNumber}&setFruits=${G2Filter2Plant3Truss8[0].setFruits}&setFlowers=${G2Filter2Plant3Truss8[0].setFlowers}&pruningNumber=${G2Filter2Plant3Truss8[0].pruningNumber}&fruitLoad=${G2Filter2Plant3Truss8[0].fruitLoad}&fruitDiameter=${G2Filter2Plant3Truss8[0].fruitDiameter}&pruningFlower=${G2Filter2Plant3Truss8[0].pruneFlowering}&floweringTruss=${G2Filter2Plant3Truss8[0].floweringTrussss}&pruningSet=${G2Filter2Plant3Truss8[0].prunSetting}&settingTruss=${G2Filter2Plant3Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant3Truss8[0].pruningHar}&harvestTruss=${G2Filter2Plant3Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url366);

                                              fetch(url366, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G2Filter2Plant3Truss9.length) {

                                                    const scriptUrl367 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url367 = `${scriptUrl367}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant3Truss9[0].plantNumber}&trussNumber=${G2Filter2Plant3Truss9[0].trussNumber}&setFruits=${G2Filter2Plant3Truss9[0].setFruits}&setFlowers=${G2Filter2Plant3Truss9[0].setFlowers}&pruningNumber=${G2Filter2Plant3Truss9[0].pruningNumber}&fruitLoad=${G2Filter2Plant3Truss9[0].fruitLoad}&fruitDiameter=${G2Filter2Plant3Truss9[0].fruitDiameter}&pruningFlower=${G2Filter2Plant3Truss9[0].pruneFlowering}&floweringTruss=${G2Filter2Plant3Truss9[0].floweringTrussss}&pruningSet=${G2Filter2Plant3Truss9[0].prunSetting}&settingTruss=${G2Filter2Plant3Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant3Truss9[0].pruningHar}&harvestTruss=${G2Filter2Plant3Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url367);

                                                    fetch(url367, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G2Filter2Plant3Truss0.length) {

                                                          const scriptUrl368 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url368 = `${scriptUrl368}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant3Truss0[0].plantNumber}&trussNumber=${G2Filter2Plant3Truss0[0].trussNumber}&setFruits=${G2Filter2Plant3Truss0[0].setFruits}&setFlowers=${G2Filter2Plant3Truss0[0].setFlowers}&pruningNumber=${G2Filter2Plant3Truss0[0].pruningNumber}&fruitLoad=${G2Filter2Plant3Truss0[0].fruitLoad}&fruitDiameter=${G2Filter2Plant3Truss0[0].fruitDiameter}&pruningFlower=${G2Filter2Plant3Truss0[0].pruneFlowering}&floweringTruss=${G2Filter2Plant3Truss0[0].floweringTrussss}&pruningSet=${G2Filter2Plant3Truss0[0].prunSetting}&settingTruss=${G2Filter2Plant3Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant3Truss0[0].pruningHar}&harvestTruss=${G2Filter2Plant3Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url368);

                                                          fetch(url368, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow4Plant4Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow4Plant4Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow4Plant4Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow4Plant4Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow4Plant4Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow4Plant4Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow4Plant4Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow4Plant4Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow4Plant4Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow4Plant4Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow4Plant4Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow4Plant4Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow4Plant4Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow4Plant4Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow4Plant4Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow4Plant4Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow4Plant4Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow4Plant4Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow4Plant4Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow4Plant4Trusses()
      }
    });

  }

  sendRow4Plant4Trusses = () => {

    this.setState({ isLoading: true })


     //INITIALIZATION G2 MERLICE ROW 114/115 PLANT 10
     let G2Filter2Plant4Truss1 = []
     let G2Filter2Plant4Truss2 = []
     let G2Filter2Plant4Truss3 = []
     let G2Filter2Plant4Truss4 = []
     let G2Filter2Plant4Truss5 = []
     let G2Filter2Plant4Truss6 = []
     let G2Filter2Plant4Truss7 = []
     let G2Filter2Plant4Truss8 = []
     let G2Filter2Plant4Truss9 = []
     let G2Filter2Plant4Truss0 = []
     //END
 
     //GER 2 Merlice/ Plant 3/ 114-115/ Truss Number 1-10
 
     G2Filter2Plant4Truss1 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 1
 
       )
     });
 
     G2Filter2Plant4Truss2 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 2
 
       )
     });
 
     G2Filter2Plant4Truss3 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 3
 
       )
     });
 
     G2Filter2Plant4Truss4 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 4
 
       )
     });
 
     G2Filter2Plant4Truss5 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 5
 
       )
     });
 
     G2Filter2Plant4Truss6 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 6
 
       )
     });
 
     G2Filter2Plant4Truss7 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 7
 
       )
     });
 
     G2Filter2Plant4Truss8 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 8
 
       )
     });
 
     G2Filter2Plant4Truss9 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 9
 
       )
     });
 
     G2Filter2Plant4Truss0 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '4' &&
         sampleItemTruss.trussNumber === 10
 
       )
     });
 
     //END
 
     const scriptUrl369 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
     const url369 = `${scriptUrl369}?
   callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant4Truss1[0].plantNumber}&trussNumber=${G2Filter2Plant4Truss1[0].trussNumber}&setFruits=${G2Filter2Plant4Truss1[0].setFruits}&setFlowers=${G2Filter2Plant4Truss1[0].setFlowers}&pruningNumber=${G2Filter2Plant4Truss1[0].pruningNumber}&fruitLoad=${G2Filter2Plant4Truss1[0].fruitLoad}&fruitDiameter=${G2Filter2Plant4Truss1[0].fruitDiameter}&pruningFlower=${G2Filter2Plant4Truss1[0].pruneFlowering}&floweringTruss=${G2Filter2Plant4Truss1[0].floweringTrussss}&pruningSet=${G2Filter2Plant4Truss1[0].prunSetting}&settingTruss=${G2Filter2Plant4Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant4Truss1[0].pruningHar}&harvestTruss=${G2Filter2Plant4Truss1[0].harvestTruss}`;
 
     console.log("URL : " + url369);
 
     fetch(url369, { mode: 'no-cors' }).then((response) => {
 
       if (response.status === 200) {
 
         if (G2Filter2Plant4Truss2.length) {
 
           const scriptUrl370 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
           const url370 = `${scriptUrl370}?
   callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant4Truss2[0].plantNumber}&trussNumber=${G2Filter2Plant4Truss2[0].trussNumber}&setFruits=${G2Filter2Plant4Truss2[0].setFruits}&setFlowers=${G2Filter2Plant4Truss2[0].setFlowers}&pruningNumber=${G2Filter2Plant4Truss2[0].pruningNumber}&fruitLoad=${G2Filter2Plant4Truss2[0].fruitLoad}&fruitDiameter=${G2Filter2Plant4Truss2[0].fruitDiameter}&pruningFlower=${G2Filter2Plant4Truss2[0].pruneFlowering}&floweringTruss=${G2Filter2Plant4Truss2[0].floweringTrussss}&pruningSet=${G2Filter2Plant4Truss2[0].prunSetting}&settingTruss=${G2Filter2Plant4Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant4Truss2[0].pruningHar}&harvestTruss=${G2Filter2Plant4Truss2[0].harvestTruss}`;
 
           console.log("URL : " + url370);
 
           fetch(url370, { mode: 'no-cors' }).then((response) => {
 
             if (response.status === 200) {
 
               if (G2Filter2Plant4Truss3.length) {
 
                 const scriptUrl371 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                 const url371 = `${scriptUrl371}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant4Truss3[0].plantNumber}&trussNumber=${G2Filter2Plant4Truss3[0].trussNumber}&setFruits=${G2Filter2Plant4Truss3[0].setFruits}&setFlowers=${G2Filter2Plant4Truss3[0].setFlowers}&pruningNumber=${G2Filter2Plant4Truss3[0].pruningNumber}&fruitLoad=${G2Filter2Plant4Truss3[0].fruitLoad}&fruitDiameter=${G2Filter2Plant4Truss3[0].fruitDiameter}&pruningFlower=${G2Filter2Plant4Truss3[0].pruneFlowering}&floweringTruss=${G2Filter2Plant4Truss3[0].floweringTrussss}&pruningSet=${G2Filter2Plant4Truss3[0].prunSetting}&settingTruss=${G2Filter2Plant4Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant4Truss3[0].pruningHar}&harvestTruss=${G2Filter2Plant4Truss3[0].harvestTruss}`;
 
                 console.log("URL : " + url371);
 
                 fetch(url371, { mode: 'no-cors' }).then((response) => {
 
                   if (response.status === 200) {
 
                     if (G2Filter2Plant4Truss4.length) {
 
                       const scriptUrl372 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                       const url372 = `${scriptUrl372}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant4Truss4[0].plantNumber}&trussNumber=${G2Filter2Plant4Truss4[0].trussNumber}&setFruits=${G2Filter2Plant4Truss4[0].setFruits}&setFlowers=${G2Filter2Plant4Truss4[0].setFlowers}&pruningNumber=${G2Filter2Plant4Truss4[0].pruningNumber}&fruitLoad=${G2Filter2Plant4Truss4[0].fruitLoad}&fruitDiameter=${G2Filter2Plant4Truss4[0].fruitDiameter}&pruningFlower=${G2Filter2Plant4Truss4[0].pruneFlowering}&floweringTruss=${G2Filter2Plant4Truss4[0].floweringTrussss}&pruningSet=${G2Filter2Plant4Truss4[0].prunSetting}&settingTruss=${G2Filter2Plant4Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant4Truss4[0].pruningHar}&harvestTruss=${G2Filter2Plant4Truss4[0].harvestTruss}`;
 
                       console.log("URL : " + url372);
 
                       fetch(url372, { mode: 'no-cors' }).then((response) => {
 
                         if (response.status === 200) {
 
                           if (G2Filter2Plant4Truss5.length) {
 
                             const scriptUrl373 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                             const url373 = `${scriptUrl373}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant4Truss5[0].plantNumber}&trussNumber=${G2Filter2Plant4Truss5[0].trussNumber}&setFruits=${G2Filter2Plant4Truss5[0].setFruits}&setFlowers=${G2Filter2Plant4Truss5[0].setFlowers}&pruningNumber=${G2Filter2Plant4Truss5[0].pruningNumber}&fruitLoad=${G2Filter2Plant4Truss5[0].fruitLoad}&fruitDiameter=${G2Filter2Plant4Truss5[0].fruitDiameter}&pruningFlower=${G2Filter2Plant4Truss5[0].pruneFlowering}&floweringTruss=${G2Filter2Plant4Truss5[0].floweringTrussss}&pruningSet=${G2Filter2Plant4Truss5[0].prunSetting}&settingTruss=${G2Filter2Plant4Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant4Truss5[0].pruningHar}&harvestTruss=${G2Filter2Plant4Truss5[0].harvestTruss}`;
 
                             console.log("URL : " + url373);
 
                             fetch(url373, { mode: 'no-cors' }).then((response) => {
 
                               if (response.status === 200) {
 
                                 if (G2Filter2Plant4Truss6.length) {
 
                                   const scriptUrl374 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                   const url374 = `${scriptUrl374}?
               callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant4Truss6[0].plantNumber}&trussNumber=${G2Filter2Plant4Truss6[0].trussNumber}&setFruits=${G2Filter2Plant4Truss6[0].setFruits}&setFlowers=${G2Filter2Plant4Truss6[0].setFlowers}&pruningNumber=${G2Filter2Plant4Truss6[0].pruningNumber}&fruitLoad=${G2Filter2Plant4Truss6[0].fruitLoad}&fruitDiameter=${G2Filter2Plant4Truss6[0].fruitDiameter}&pruningFlower=${G2Filter2Plant4Truss6[0].pruneFlowering}&floweringTruss=${G2Filter2Plant4Truss6[0].floweringTrussss}&pruningSet=${G2Filter2Plant4Truss6[0].prunSetting}&settingTruss=${G2Filter2Plant4Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant4Truss6[0].pruningHar}&harvestTruss=${G2Filter2Plant4Truss6[0].harvestTruss}`;
 
                                   console.log("URL : " + url374);
 
                                   fetch(url374, { mode: 'no-cors' }).then((response) => {
 
                                     if (response.status === 200) {
 
                                       if (G2Filter2Plant4Truss7.length) {
 
                                         const scriptUrl375 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                         const url375 = `${scriptUrl375}?
               callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant4Truss7[0].plantNumber}&trussNumber=${G2Filter2Plant4Truss7[0].trussNumber}&setFruits=${G2Filter2Plant4Truss7[0].setFruits}&setFlowers=${G2Filter2Plant4Truss7[0].setFlowers}&pruningNumber=${G2Filter2Plant4Truss7[0].pruningNumber}&fruitLoad=${G2Filter2Plant4Truss7[0].fruitLoad}&fruitDiameter=${G2Filter2Plant4Truss7[0].fruitDiameter}&pruningFlower=${G2Filter2Plant4Truss7[0].pruneFlowering}&floweringTruss=${G2Filter2Plant4Truss7[0].floweringTrussss}&pruningSet=${G2Filter2Plant4Truss7[0].prunSetting}&settingTruss=${G2Filter2Plant4Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant4Truss7[0].pruningHar}&harvestTruss=${G2Filter2Plant4Truss7[0].harvestTruss}`;
 
                                         console.log("URL : " + url375);
 
                                         fetch(url375, { mode: 'no-cors' }).then((response) => {
 
                                           if (response.status === 200) {
 
                                             if (G2Filter2Plant4Truss8.length) {
 
                                               const scriptUrl376 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                               const url376 = `${scriptUrl376}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant4Truss8[0].plantNumber}&trussNumber=${G2Filter2Plant4Truss8[0].trussNumber}&setFruits=${G2Filter2Plant4Truss8[0].setFruits}&setFlowers=${G2Filter2Plant4Truss8[0].setFlowers}&pruningNumber=${G2Filter2Plant4Truss8[0].pruningNumber}&fruitLoad=${G2Filter2Plant4Truss8[0].fruitLoad}&fruitDiameter=${G2Filter2Plant4Truss8[0].fruitDiameter}&pruningFlower=${G2Filter2Plant4Truss8[0].pruneFlowering}&floweringTruss=${G2Filter2Plant4Truss8[0].floweringTrussss}&pruningSet=${G2Filter2Plant4Truss8[0].prunSetting}&settingTruss=${G2Filter2Plant4Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant4Truss8[0].pruningHar}&harvestTruss=${G2Filter2Plant4Truss8[0].harvestTruss}`;
 
                                               console.log("URL : " + url376);
 
                                               fetch(url376, { mode: 'no-cors' }).then((response) => {
 
                                                 if (response.status === 200) {
 
                                                   if (G2Filter2Plant4Truss9.length) {
 
                                                     const scriptUrl377 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                     const url377 = `${scriptUrl377}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant4Truss9[0].plantNumber}&trussNumber=${G2Filter2Plant4Truss9[0].trussNumber}&setFruits=${G2Filter2Plant4Truss9[0].setFruits}&setFlowers=${G2Filter2Plant4Truss9[0].setFlowers}&pruningNumber=${G2Filter2Plant4Truss9[0].pruningNumber}&fruitLoad=${G2Filter2Plant4Truss9[0].fruitLoad}&fruitDiameter=${G2Filter2Plant4Truss9[0].fruitDiameter}&pruningFlower=${G2Filter2Plant4Truss9[0].pruneFlowering}&floweringTruss=${G2Filter2Plant4Truss9[0].floweringTrussss}&pruningSet=${G2Filter2Plant4Truss9[0].prunSetting}&settingTruss=${G2Filter2Plant4Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant4Truss9[0].pruningHar}&harvestTruss=${G2Filter2Plant4Truss9[0].harvestTruss}`;
 
                                                     console.log("URL : " + url377);
 
                                                     fetch(url377, { mode: 'no-cors' }).then((response) => {
 
                                                       if (response.status === 200) {
 
                                                         if (G2Filter2Plant4Truss0.length) {
 
                                                           const scriptUrl378 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                           const url378 = `${scriptUrl378}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant4Truss0[0].plantNumber}&trussNumber=${G2Filter2Plant4Truss0[0].trussNumber}&setFruits=${G2Filter2Plant4Truss0[0].setFruits}&setFlowers=${G2Filter2Plant4Truss0[0].setFlowers}&pruningNumber=${G2Filter2Plant4Truss0[0].pruningNumber}&fruitLoad=${G2Filter2Plant4Truss0[0].fruitLoad}&fruitDiameter=${G2Filter2Plant4Truss0[0].fruitDiameter}&pruningFlower=${G2Filter2Plant4Truss0[0].pruneFlowering}&floweringTruss=${G2Filter2Plant4Truss0[0].floweringTrussss}&pruningSet=${G2Filter2Plant4Truss0[0].prunSetting}&settingTruss=${G2Filter2Plant4Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant4Truss0[0].pruningHar}&harvestTruss=${G2Filter2Plant4Truss0[0].harvestTruss}`;
 
                                                           console.log("URL : " + url378);
 
                                                           fetch(url378, { mode: 'no-cors' }).then((response) => {
 
                                                             if (response.status === 200) {
 
                                                               this.sendRow4Plant5Trusses();
 
 
                                                             } else {
 
                                                               this.setState({ isLoading: false })
                                                               this.sendRow4Plant5Trusses()
 
                                                             }
 
                                                           });
 
                                                         } else {
                                                           this.setState({ isLoading: false })
                                                           this.sendRow4Plant5Trusses()
 
                                                         }
 
                                                       } else {
 
                                                         this.setState({ isLoading: false })
                                                         this.sendRow4Plant5Trusses()
                                                       }
 
                                                     });
 
                                                   } else {
                                                     this.setState({ isLoading: false })
                                                     this.sendRow4Plant5Trusses()
 
                                                   }
 
                                                 } else {
 
                                                   this.setState({ isLoading: false })
                                                   this.sendRow4Plant5Trusses()
                                                 }
                                               });
 
                                             } else {
                                               this.setState({ isLoading: false })
                                               this.sendRow4Plant5Trusses()
 
                                             }
 
                                           } else {
 
                                             this.setState({ isLoading: false })
                                             this.sendRow4Plant5Trusses()
                                           }
 
                                         });
 
                                       } else {
                                         this.setState({ isLoading: false })
                                         this.sendRow4Plant5Trusses()
 
                                       }
 
                                     } else {
 
                                       this.setState({ isLoading: false })
                                       this.sendRow4Plant5Trusses()
                                     }
 
                                   });
 
                                 } else {
                                   this.setState({ isLoading: false })
                                   this.sendRow4Plant5Trusses()
 
                                 }
 
                               } else {
 
                                 this.setState({ isLoading: false })
                                 this.sendRow4Plant5Trusses()
                               }
 
                             });
 
                           } else {
                             this.setState({ isLoading: false })
                             this.sendRow4Plant5Trusses()
 
                           }
 
                         } else {
 
                           this.setState({ isLoading: false })
                           this.sendRow4Plant5Trusses()
                         }
 
 
                       });
 
                     } else {
                       this.setState({ isLoading: false })
                       this.sendRow4Plant5Trusses()
 
                     }
 
                   } else {
 
                     this.setState({ isLoading: false })
                     this.sendRow4Plant5Trusses()
                   }
 
                 });
 
               } else {
                 this.setState({ isLoading: false })
                 this.sendRow4Plant5Trusses()
 
               }
 
             } else {
 
               this.setState({ isLoading: false })
               this.sendRow4Plant5Trusses()
             }
 
           });
 
         } else {
           this.setState({ isLoading: false })
           this.sendRow4Plant5Trusses()
 
         }
 
       } else {
 
         this.setState({ isLoading: false })
         this.sendRow4Plant5Trusses()
       }
     });

  }

  sendRow4Plant5Trusses = () => {

    this.setState({ isLoading: true })

     //INITIALIZATION G2 MERLICE ROW 114/115 PLANT 10
     let G2Filter2Plant5Truss1 = []
     let G2Filter2Plant5Truss2 = []
     let G2Filter2Plant5Truss3 = []
     let G2Filter2Plant5Truss4 = []
     let G2Filter2Plant5Truss5 = []
     let G2Filter2Plant5Truss6 = []
     let G2Filter2Plant5Truss7 = []
     let G2Filter2Plant5Truss8 = []
     let G2Filter2Plant5Truss9 = []
     let G2Filter2Plant5Truss0 = []
     //END
 
     //GER 2 Merlice/ Plant 3/ 114-115/ Truss Number 1-10
 
     G2Filter2Plant5Truss1 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '5' &&
         sampleItemTruss.trussNumber === 1
 
       )
     });
 
     G2Filter2Plant5Truss2 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '5' &&
         sampleItemTruss.trussNumber === 2
 
       )
     });
 
     G2Filter2Plant5Truss3 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '5' &&
         sampleItemTruss.trussNumber === 3
 
       )
     });
 
     G2Filter2Plant5Truss4 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '5' &&
         sampleItemTruss.trussNumber === 4
 
       )
     });
 
     G2Filter2Plant5Truss5 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '5' &&
         sampleItemTruss.trussNumber === 5
 
       )
     });
 
     G2Filter2Plant5Truss6 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '5' &&
         sampleItemTruss.trussNumber === 6
 
       )
     });
 
     G2Filter2Plant5Truss7 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '5' &&
         sampleItemTruss.trussNumber === 7
 
       )
     });
 
     G2Filter2Plant5Truss8 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '5' &&
         sampleItemTruss.trussNumber === 8
 
       )
     });
 
     G2Filter2Plant5Truss9 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '5' &&
         sampleItemTruss.trussNumber === 9
 
       )
     });
 
     G2Filter2Plant5Truss0 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '5' &&
         sampleItemTruss.trussNumber === 10
 
       )
     });
 
     //END
 
     const scriptUrl379 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
     const url379 = `${scriptUrl379}?
   callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant5Truss1[0].plantNumber}&trussNumber=${G2Filter2Plant5Truss1[0].trussNumber}&setFruits=${G2Filter2Plant5Truss1[0].setFruits}&setFlowers=${G2Filter2Plant5Truss1[0].setFlowers}&pruningNumber=${G2Filter2Plant5Truss1[0].pruningNumber}&fruitLoad=${G2Filter2Plant5Truss1[0].fruitLoad}&fruitDiameter=${G2Filter2Plant5Truss1[0].fruitDiameter}&pruningFlower=${G2Filter2Plant5Truss1[0].pruneFlowering}&floweringTruss=${G2Filter2Plant5Truss1[0].floweringTrussss}&pruningSet=${G2Filter2Plant5Truss1[0].prunSetting}&settingTruss=${G2Filter2Plant5Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant5Truss1[0].pruningHar}&harvestTruss=${G2Filter2Plant5Truss1[0].harvestTruss}`;
 
     console.log("URL : " + url379);
 
     fetch(url379, { mode: 'no-cors' }).then((response) => {
 
       if (response.status === 200) {
 
         if (G2Filter2Plant5Truss2.length) {
 
           const scriptUrl380 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
           const url380 = `${scriptUrl380}?
   callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant5Truss2[0].plantNumber}&trussNumber=${G2Filter2Plant5Truss2[0].trussNumber}&setFruits=${G2Filter2Plant5Truss2[0].setFruits}&setFlowers=${G2Filter2Plant5Truss2[0].setFlowers}&pruningNumber=${G2Filter2Plant5Truss2[0].pruningNumber}&fruitLoad=${G2Filter2Plant5Truss2[0].fruitLoad}&fruitDiameter=${G2Filter2Plant5Truss2[0].fruitDiameter}&pruningFlower=${G2Filter2Plant5Truss2[0].pruneFlowering}&floweringTruss=${G2Filter2Plant5Truss2[0].floweringTrussss}&pruningSet=${G2Filter2Plant5Truss2[0].prunSetting}&settingTruss=${G2Filter2Plant5Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant5Truss2[0].pruningHar}&harvestTruss=${G2Filter2Plant5Truss2[0].harvestTruss}`;
 
           console.log("URL : " + url380);
 
           fetch(url380, { mode: 'no-cors' }).then((response) => {
 
             if (response.status === 200) {
 
               if (G2Filter2Plant5Truss3.length) {
 
                 const scriptUrl381 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                 const url381 = `${scriptUrl381}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant5Truss3[0].plantNumber}&trussNumber=${G2Filter2Plant5Truss3[0].trussNumber}&setFruits=${G2Filter2Plant5Truss3[0].setFruits}&setFlowers=${G2Filter2Plant5Truss3[0].setFlowers}&pruningNumber=${G2Filter2Plant5Truss3[0].pruningNumber}&fruitLoad=${G2Filter2Plant5Truss3[0].fruitLoad}&fruitDiameter=${G2Filter2Plant5Truss3[0].fruitDiameter}&pruningFlower=${G2Filter2Plant5Truss3[0].pruneFlowering}&floweringTruss=${G2Filter2Plant5Truss3[0].floweringTrussss}&pruningSet=${G2Filter2Plant5Truss3[0].prunSetting}&settingTruss=${G2Filter2Plant5Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant5Truss3[0].pruningHar}&harvestTruss=${G2Filter2Plant5Truss3[0].harvestTruss}`;
 
                 console.log("URL : " + url381);
 
                 fetch(url381, { mode: 'no-cors' }).then((response) => {
 
                   if (response.status === 200) {
 
                     if (G2Filter2Plant5Truss4.length) {
 
                       const scriptUrl382 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                       const url382 = `${scriptUrl382}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant5Truss4[0].plantNumber}&trussNumber=${G2Filter2Plant5Truss4[0].trussNumber}&setFruits=${G2Filter2Plant5Truss4[0].setFruits}&setFlowers=${G2Filter2Plant5Truss4[0].setFlowers}&pruningNumber=${G2Filter2Plant5Truss4[0].pruningNumber}&fruitLoad=${G2Filter2Plant5Truss4[0].fruitLoad}&fruitDiameter=${G2Filter2Plant5Truss4[0].fruitDiameter}&pruningFlower=${G2Filter2Plant5Truss4[0].pruneFlowering}&floweringTruss=${G2Filter2Plant5Truss4[0].floweringTrussss}&pruningSet=${G2Filter2Plant5Truss4[0].prunSetting}&settingTruss=${G2Filter2Plant5Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant5Truss4[0].pruningHar}&harvestTruss=${G2Filter2Plant5Truss4[0].harvestTruss}`;
 
                       console.log("URL : " + url382);
 
                       fetch(url382, { mode: 'no-cors' }).then((response) => {
 
                         if (response.status === 200) {
 
                           if (G2Filter2Plant5Truss5.length) {
 
                             const scriptUrl383 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                             const url383 = `${scriptUrl383}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant5Truss5[0].plantNumber}&trussNumber=${G2Filter2Plant5Truss5[0].trussNumber}&setFruits=${G2Filter2Plant5Truss5[0].setFruits}&setFlowers=${G2Filter2Plant5Truss5[0].setFlowers}&pruningNumber=${G2Filter2Plant5Truss5[0].pruningNumber}&fruitLoad=${G2Filter2Plant5Truss5[0].fruitLoad}&fruitDiameter=${G2Filter2Plant5Truss5[0].fruitDiameter}&pruningFlower=${G2Filter2Plant5Truss5[0].pruneFlowering}&floweringTruss=${G2Filter2Plant5Truss5[0].floweringTrussss}&pruningSet=${G2Filter2Plant5Truss5[0].prunSetting}&settingTruss=${G2Filter2Plant5Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant5Truss5[0].pruningHar}&harvestTruss=${G2Filter2Plant5Truss5[0].harvestTruss}`;
 
                             console.log("URL : " + url383);
 
                             fetch(url383, { mode: 'no-cors' }).then((response) => {
 
                               if (response.status === 200) {
 
                                 if (G2Filter2Plant5Truss6.length) {
 
                                   const scriptUrl384 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                   const url384 = `${scriptUrl384}?
               callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant5Truss6[0].plantNumber}&trussNumber=${G2Filter2Plant5Truss6[0].trussNumber}&setFruits=${G2Filter2Plant5Truss6[0].setFruits}&setFlowers=${G2Filter2Plant5Truss6[0].setFlowers}&pruningNumber=${G2Filter2Plant5Truss6[0].pruningNumber}&fruitLoad=${G2Filter2Plant5Truss6[0].fruitLoad}&fruitDiameter=${G2Filter2Plant5Truss6[0].fruitDiameter}&pruningFlower=${G2Filter2Plant5Truss6[0].pruneFlowering}&floweringTruss=${G2Filter2Plant5Truss6[0].floweringTrussss}&pruningSet=${G2Filter2Plant5Truss6[0].prunSetting}&settingTruss=${G2Filter2Plant5Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant5Truss6[0].pruningHar}&harvestTruss=${G2Filter2Plant5Truss6[0].harvestTruss}`;
 
                                   console.log("URL : " + url384);
 
                                   fetch(url384, { mode: 'no-cors' }).then((response) => {
 
                                     if (response.status === 200) {
 
                                       if (G2Filter2Plant5Truss7.length) {
 
                                         const scriptUrl385 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                         const url385 = `${scriptUrl385}?
               callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant5Truss7[0].plantNumber}&trussNumber=${G2Filter2Plant5Truss7[0].trussNumber}&setFruits=${G2Filter2Plant5Truss7[0].setFruits}&setFlowers=${G2Filter2Plant5Truss7[0].setFlowers}&pruningNumber=${G2Filter2Plant5Truss7[0].pruningNumber}&fruitLoad=${G2Filter2Plant5Truss7[0].fruitLoad}&fruitDiameter=${G2Filter2Plant5Truss7[0].fruitDiameter}&pruningFlower=${G2Filter2Plant5Truss7[0].pruneFlowering}&floweringTruss=${G2Filter2Plant5Truss7[0].floweringTrussss}&pruningSet=${G2Filter2Plant5Truss7[0].prunSetting}&settingTruss=${G2Filter2Plant5Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant5Truss7[0].pruningHar}&harvestTruss=${G2Filter2Plant5Truss7[0].harvestTruss}`;
 
                                         console.log("URL : " + url385);
 
                                         fetch(url385, { mode: 'no-cors' }).then((response) => {
 
                                           if (response.status === 200) {
 
                                             if (G2Filter2Plant5Truss8.length) {
 
                                               const scriptUrl386 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                               const url386 = `${scriptUrl386}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant5Truss8[0].plantNumber}&trussNumber=${G2Filter2Plant5Truss8[0].trussNumber}&setFruits=${G2Filter2Plant5Truss8[0].setFruits}&setFlowers=${G2Filter2Plant5Truss8[0].setFlowers}&pruningNumber=${G2Filter2Plant5Truss8[0].pruningNumber}&fruitLoad=${G2Filter2Plant5Truss8[0].fruitLoad}&fruitDiameter=${G2Filter2Plant5Truss8[0].fruitDiameter}&pruningFlower=${G2Filter2Plant5Truss8[0].pruneFlowering}&floweringTruss=${G2Filter2Plant5Truss8[0].floweringTrussss}&pruningSet=${G2Filter2Plant5Truss8[0].prunSetting}&settingTruss=${G2Filter2Plant5Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant5Truss8[0].pruningHar}&harvestTruss=${G2Filter2Plant5Truss8[0].harvestTruss}`;
 
                                               console.log("URL : " + url386);
 
                                               fetch(url386, { mode: 'no-cors' }).then((response) => {
 
                                                 if (response.status === 200) {
 
                                                   if (G2Filter2Plant5Truss9.length) {
 
                                                     const scriptUrl387 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                     const url387 = `${scriptUrl387}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant5Truss9[0].plantNumber}&trussNumber=${G2Filter2Plant5Truss9[0].trussNumber}&setFruits=${G2Filter2Plant5Truss9[0].setFruits}&setFlowers=${G2Filter2Plant5Truss9[0].setFlowers}&pruningNumber=${G2Filter2Plant5Truss9[0].pruningNumber}&fruitLoad=${G2Filter2Plant5Truss9[0].fruitLoad}&fruitDiameter=${G2Filter2Plant5Truss9[0].fruitDiameter}&pruningFlower=${G2Filter2Plant5Truss9[0].pruneFlowering}&floweringTruss=${G2Filter2Plant5Truss9[0].floweringTrussss}&pruningSet=${G2Filter2Plant5Truss9[0].prunSetting}&settingTruss=${G2Filter2Plant5Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant5Truss9[0].pruningHar}&harvestTruss=${G2Filter2Plant5Truss9[0].harvestTruss}`;
 
                                                     console.log("URL : " + url387);
 
                                                     fetch(url387, { mode: 'no-cors' }).then((response) => {
 
                                                       if (response.status === 200) {
 
                                                         if (G2Filter2Plant5Truss0.length) {
 
                                                           const scriptUrl388 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                           const url388 = `${scriptUrl388}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant5Truss0[0].plantNumber}&trussNumber=${G2Filter2Plant5Truss0[0].trussNumber}&setFruits=${G2Filter2Plant5Truss0[0].setFruits}&setFlowers=${G2Filter2Plant5Truss0[0].setFlowers}&pruningNumber=${G2Filter2Plant5Truss0[0].pruningNumber}&fruitLoad=${G2Filter2Plant5Truss0[0].fruitLoad}&fruitDiameter=${G2Filter2Plant5Truss0[0].fruitDiameter}&pruningFlower=${G2Filter2Plant5Truss0[0].pruneFlowering}&floweringTruss=${G2Filter2Plant5Truss0[0].floweringTrussss}&pruningSet=${G2Filter2Plant5Truss0[0].prunSetting}&settingTruss=${G2Filter2Plant5Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant5Truss0[0].pruningHar}&harvestTruss=${G2Filter2Plant5Truss0[0].harvestTruss}`;
 
                                                           console.log("URL : " + url388);
 
                                                           fetch(url388, { mode: 'no-cors' }).then((response) => {
 
                                                             if (response.status === 200) {
 
                                                               this.sendRow4Plant6Trusses();
 
 
                                                             } else {
 
                                                               this.setState({ isLoading: false })
                                                               this.sendRow4Plant6Trusses()
 
                                                             }
 
                                                           });
 
                                                         } else {
                                                           this.setState({ isLoading: false })
                                                           this.sendRow4Plant6Trusses()
 
                                                         }
 
                                                       } else {
 
                                                         this.setState({ isLoading: false })
                                                         this.sendRow4Plant6Trusses()
                                                       }
 
                                                     });
 
                                                   } else {
                                                     this.setState({ isLoading: false })
                                                     this.sendRow4Plant6Trusses()
 
                                                   }
 
                                                 } else {
 
                                                   this.setState({ isLoading: false })
                                                   this.sendRow4Plant6Trusses()
                                                 }
                                               });
 
                                             } else {
                                               this.setState({ isLoading: false })
                                               this.sendRow4Plant6Trusses()
 
                                             }
 
                                           } else {
 
                                             this.setState({ isLoading: false })
                                             this.sendRow4Plant6Trusses()
                                           }
 
                                         });
 
                                       } else {
                                         this.setState({ isLoading: false })
                                         this.sendRow4Plant6Trusses()
 
                                       }
 
                                     } else {
 
                                       this.setState({ isLoading: false })
                                       this.sendRow4Plant6Trusses()
                                     }
 
                                   });
 
                                 } else {
                                   this.setState({ isLoading: false })
                                   this.sendRow4Plant6Trusses()
 
                                 }
 
                               } else {
 
                                 this.setState({ isLoading: false })
                                 this.sendRow4Plant6Trusses()
                               }
 
                             });
 
                           } else {
                             this.setState({ isLoading: false })
                             this.sendRow4Plant6Trusses()
 
                           }
 
                         } else {
 
                           this.setState({ isLoading: false })
                           this.sendRow4Plant6Trusses()
                         }
 
 
                       });
 
                     } else {
                       this.setState({ isLoading: false })
                       this.sendRow4Plant6Trusses()
 
                     }
 
                   } else {
 
                     this.setState({ isLoading: false })
                     this.sendRow4Plant6Trusses()
                   }
 
                 });
 
               } else {
                 this.setState({ isLoading: false })
                 this.sendRow4Plant6Trusses()
 
               }
 
             } else {
 
               this.setState({ isLoading: false })
               this.sendRow4Plant6Trusses()
             }
 
           });
 
         } else {
           this.setState({ isLoading: false })
           this.sendRow4Plant6Trusses()
 
         }
 
       } else {
 
         this.setState({ isLoading: false })
         this.sendRow4Plant6Trusses()
       }
     });

  }

  sendRow4Plant6Trusses =()=> {

    this.setState({ isLoading: true })

     //INITIALIZATION G2 MERLICE ROW 114/115 PLANT 10
     let G2Filter2Plant6Truss1 = []
     let G2Filter2Plant6Truss2 = []
     let G2Filter2Plant6Truss3 = []
     let G2Filter2Plant6Truss4 = []
     let G2Filter2Plant6Truss5 = []
     let G2Filter2Plant6Truss6 = []
     let G2Filter2Plant6Truss7 = []
     let G2Filter2Plant6Truss8 = []
     let G2Filter2Plant6Truss9 = []
     let G2Filter2Plant6Truss0 = []
     //END
 
     //GER 2 Merlice/ Plant 6/ 114-115/ Truss Number 1-10
 
     G2Filter2Plant6Truss1 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '6' &&
         sampleItemTruss.trussNumber === 1
 
       )
     });
 
     G2Filter2Plant6Truss2 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '6' &&
         sampleItemTruss.trussNumber === 2
 
       )
     });
 
     G2Filter2Plant6Truss3 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '6' &&
         sampleItemTruss.trussNumber === 3
 
       )
     });
 
     G2Filter2Plant6Truss4 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '6' &&
         sampleItemTruss.trussNumber === 4
 
       )
     });
 
     G2Filter2Plant6Truss5 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '6' &&
         sampleItemTruss.trussNumber === 5
 
       )
     });
 
     G2Filter2Plant6Truss6 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '6' &&
         sampleItemTruss.trussNumber === 6
 
       )
     });
 
     G2Filter2Plant6Truss7 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '6' &&
         sampleItemTruss.trussNumber === 7
 
       )
     });
 
     G2Filter2Plant6Truss8 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '6' &&
         sampleItemTruss.trussNumber === 8
 
       )
     });
 
     G2Filter2Plant6Truss9 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '6' &&
         sampleItemTruss.trussNumber === 9
 
       )
     });
 
     G2Filter2Plant6Truss0 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '6' &&
         sampleItemTruss.trussNumber === 10
 
       )
     });
 
     //END
 
     const scriptUrl389 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
     const url389 = `${scriptUrl389}?
   callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant6Truss1[0].plantNumber}&trussNumber=${G2Filter2Plant6Truss1[0].trussNumber}&setFruits=${G2Filter2Plant6Truss1[0].setFruits}&setFlowers=${G2Filter2Plant6Truss1[0].setFlowers}&pruningNumber=${G2Filter2Plant6Truss1[0].pruningNumber}&fruitLoad=${G2Filter2Plant6Truss1[0].fruitLoad}&fruitDiameter=${G2Filter2Plant6Truss1[0].fruitDiameter}&pruningFlower=${G2Filter2Plant6Truss1[0].pruneFlowering}&floweringTruss=${G2Filter2Plant6Truss1[0].floweringTrussss}&pruningSet=${G2Filter2Plant6Truss1[0].prunSetting}&settingTruss=${G2Filter2Plant6Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant6Truss1[0].pruningHar}&harvestTruss=${G2Filter2Plant6Truss1[0].harvestTruss}`;
 
     console.log("URL : " + url389);
 
     fetch(url389, { mode: 'no-cors' }).then((response) => {
 
       if (response.status === 200) {
 
         if (G2Filter2Plant6Truss2.length) {
 
           const scriptUrl390 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
           const url390 = `${scriptUrl390}?
   callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant6Truss2[0].plantNumber}&trussNumber=${G2Filter2Plant6Truss2[0].trussNumber}&setFruits=${G2Filter2Plant6Truss2[0].setFruits}&setFlowers=${G2Filter2Plant6Truss2[0].setFlowers}&pruningNumber=${G2Filter2Plant6Truss2[0].pruningNumber}&fruitLoad=${G2Filter2Plant6Truss2[0].fruitLoad}&fruitDiameter=${G2Filter2Plant6Truss2[0].fruitDiameter}&pruningFlower=${G2Filter2Plant6Truss2[0].pruneFlowering}&floweringTruss=${G2Filter2Plant6Truss2[0].floweringTrussss}&pruningSet=${G2Filter2Plant6Truss2[0].prunSetting}&settingTruss=${G2Filter2Plant6Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant6Truss2[0].pruningHar}&harvestTruss=${G2Filter2Plant6Truss2[0].harvestTruss}`;
 
           console.log("URL : " + url390);
 
           fetch(url390, { mode: 'no-cors' }).then((response) => {
 
             if (response.status === 200) {
 
               if (G2Filter2Plant6Truss3.length) {
 
                 const scriptUrl391 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                 const url391 = `${scriptUrl391}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant6Truss3[0].plantNumber}&trussNumber=${G2Filter2Plant6Truss3[0].trussNumber}&setFruits=${G2Filter2Plant6Truss3[0].setFruits}&setFlowers=${G2Filter2Plant6Truss3[0].setFlowers}&pruningNumber=${G2Filter2Plant6Truss3[0].pruningNumber}&fruitLoad=${G2Filter2Plant6Truss3[0].fruitLoad}&fruitDiameter=${G2Filter2Plant6Truss3[0].fruitDiameter}&pruningFlower=${G2Filter2Plant6Truss3[0].pruneFlowering}&floweringTruss=${G2Filter2Plant6Truss3[0].floweringTrussss}&pruningSet=${G2Filter2Plant6Truss3[0].prunSetting}&settingTruss=${G2Filter2Plant6Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant6Truss3[0].pruningHar}&harvestTruss=${G2Filter2Plant6Truss3[0].harvestTruss}`;
 
                 console.log("URL : " + url391);
 
                 fetch(url391, { mode: 'no-cors' }).then((response) => {
 
                   if (response.status === 200) {
 
                     if (G2Filter2Plant6Truss4.length) {
 
                       const scriptUrl392 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                       const url392 = `${scriptUrl392}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant6Truss4[0].plantNumber}&trussNumber=${G2Filter2Plant6Truss4[0].trussNumber}&setFruits=${G2Filter2Plant6Truss4[0].setFruits}&setFlowers=${G2Filter2Plant6Truss4[0].setFlowers}&pruningNumber=${G2Filter2Plant6Truss4[0].pruningNumber}&fruitLoad=${G2Filter2Plant6Truss4[0].fruitLoad}&fruitDiameter=${G2Filter2Plant6Truss4[0].fruitDiameter}&pruningFlower=${G2Filter2Plant6Truss4[0].pruneFlowering}&floweringTruss=${G2Filter2Plant6Truss4[0].floweringTrussss}&pruningSet=${G2Filter2Plant6Truss4[0].prunSetting}&settingTruss=${G2Filter2Plant6Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant6Truss4[0].pruningHar}&harvestTruss=${G2Filter2Plant6Truss4[0].harvestTruss}`;
 
                       console.log("URL : " + url392);
 
                       fetch(url392, { mode: 'no-cors' }).then((response) => {
 
                         if (response.status === 200) {
 
                           if (G2Filter2Plant6Truss5.length) {
 
                             const scriptUrl393 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                             const url393 = `${scriptUrl393}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant6Truss5[0].plantNumber}&trussNumber=${G2Filter2Plant6Truss5[0].trussNumber}&setFruits=${G2Filter2Plant6Truss5[0].setFruits}&setFlowers=${G2Filter2Plant6Truss5[0].setFlowers}&pruningNumber=${G2Filter2Plant6Truss5[0].pruningNumber}&fruitLoad=${G2Filter2Plant6Truss5[0].fruitLoad}&fruitDiameter=${G2Filter2Plant6Truss5[0].fruitDiameter}&pruningFlower=${G2Filter2Plant6Truss5[0].pruneFlowering}&floweringTruss=${G2Filter2Plant6Truss5[0].floweringTrussss}&pruningSet=${G2Filter2Plant6Truss5[0].prunSetting}&settingTruss=${G2Filter2Plant6Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant6Truss5[0].pruningHar}&harvestTruss=${G2Filter2Plant6Truss5[0].harvestTruss}`;
 
                             console.log("URL : " + url393);
 
                             fetch(url393, { mode: 'no-cors' }).then((response) => {
 
                               if (response.status === 200) {
 
                                 if (G2Filter2Plant6Truss6.length) {
 
                                   const scriptUrl394 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                   const url394 = `${scriptUrl394}?
               callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant6Truss6[0].plantNumber}&trussNumber=${G2Filter2Plant6Truss6[0].trussNumber}&setFruits=${G2Filter2Plant6Truss6[0].setFruits}&setFlowers=${G2Filter2Plant6Truss6[0].setFlowers}&pruningNumber=${G2Filter2Plant6Truss6[0].pruningNumber}&fruitLoad=${G2Filter2Plant6Truss6[0].fruitLoad}&fruitDiameter=${G2Filter2Plant6Truss6[0].fruitDiameter}&pruningFlower=${G2Filter2Plant6Truss6[0].pruneFlowering}&floweringTruss=${G2Filter2Plant6Truss6[0].floweringTrussss}&pruningSet=${G2Filter2Plant6Truss6[0].prunSetting}&settingTruss=${G2Filter2Plant6Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant6Truss6[0].pruningHar}&harvestTruss=${G2Filter2Plant6Truss6[0].harvestTruss}`;
 
                                   console.log("URL : " + url394);
 
                                   fetch(url394, { mode: 'no-cors' }).then((response) => {
 
                                     if (response.status === 200) {
 
                                       if (G2Filter2Plant6Truss7.length) {
 
                                         const scriptUrl395 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                         const url395 = `${scriptUrl395}?
               callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant6Truss7[0].plantNumber}&trussNumber=${G2Filter2Plant6Truss7[0].trussNumber}&setFruits=${G2Filter2Plant6Truss7[0].setFruits}&setFlowers=${G2Filter2Plant6Truss7[0].setFlowers}&pruningNumber=${G2Filter2Plant6Truss7[0].pruningNumber}&fruitLoad=${G2Filter2Plant6Truss7[0].fruitLoad}&fruitDiameter=${G2Filter2Plant6Truss7[0].fruitDiameter}&pruningFlower=${G2Filter2Plant6Truss7[0].pruneFlowering}&floweringTruss=${G2Filter2Plant6Truss7[0].floweringTrussss}&pruningSet=${G2Filter2Plant6Truss7[0].prunSetting}&settingTruss=${G2Filter2Plant6Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant6Truss7[0].pruningHar}&harvestTruss=${G2Filter2Plant6Truss7[0].harvestTruss}`;
 
                                         console.log("URL : " + url395);
 
                                         fetch(url395, { mode: 'no-cors' }).then((response) => {
 
                                           if (response.status === 200) {
 
                                             if (G2Filter2Plant6Truss8.length) {
 
                                               const scriptUrl396 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                               const url396 = `${scriptUrl396}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant6Truss8[0].plantNumber}&trussNumber=${G2Filter2Plant6Truss8[0].trussNumber}&setFruits=${G2Filter2Plant6Truss8[0].setFruits}&setFlowers=${G2Filter2Plant6Truss8[0].setFlowers}&pruningNumber=${G2Filter2Plant6Truss8[0].pruningNumber}&fruitLoad=${G2Filter2Plant6Truss8[0].fruitLoad}&fruitDiameter=${G2Filter2Plant6Truss8[0].fruitDiameter}&pruningFlower=${G2Filter2Plant6Truss8[0].pruneFlowering}&floweringTruss=${G2Filter2Plant6Truss8[0].floweringTrussss}&pruningSet=${G2Filter2Plant6Truss8[0].prunSetting}&settingTruss=${G2Filter2Plant6Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant6Truss8[0].pruningHar}&harvestTruss=${G2Filter2Plant6Truss8[0].harvestTruss}`;
 
                                               console.log("URL : " + url396);
 
                                               fetch(url396, { mode: 'no-cors' }).then((response) => {
 
                                                 if (response.status === 200) {
 
                                                   if (G2Filter2Plant6Truss9.length) {
 
                                                     const scriptUrl397 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                     const url397 = `${scriptUrl397}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant6Truss9[0].plantNumber}&trussNumber=${G2Filter2Plant6Truss9[0].trussNumber}&setFruits=${G2Filter2Plant6Truss9[0].setFruits}&setFlowers=${G2Filter2Plant6Truss9[0].setFlowers}&pruningNumber=${G2Filter2Plant6Truss9[0].pruningNumber}&fruitLoad=${G2Filter2Plant6Truss9[0].fruitLoad}&fruitDiameter=${G2Filter2Plant6Truss9[0].fruitDiameter}&pruningFlower=${G2Filter2Plant6Truss9[0].pruneFlowering}&floweringTruss=${G2Filter2Plant6Truss9[0].floweringTrussss}&pruningSet=${G2Filter2Plant6Truss9[0].prunSetting}&settingTruss=${G2Filter2Plant6Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant6Truss9[0].pruningHar}&harvestTruss=${G2Filter2Plant6Truss9[0].harvestTruss}`;
 
                                                     console.log("URL : " + url397);
 
                                                     fetch(url397, { mode: 'no-cors' }).then((response) => {
 
                                                       if (response.status === 200) {
 
                                                         if (G2Filter2Plant6Truss0.length) {
 
                                                           const scriptUrl398 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                           const url398 = `${scriptUrl398}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant6Truss0[0].plantNumber}&trussNumber=${G2Filter2Plant6Truss0[0].trussNumber}&setFruits=${G2Filter2Plant6Truss0[0].setFruits}&setFlowers=${G2Filter2Plant6Truss0[0].setFlowers}&pruningNumber=${G2Filter2Plant6Truss0[0].pruningNumber}&fruitLoad=${G2Filter2Plant6Truss0[0].fruitLoad}&fruitDiameter=${G2Filter2Plant6Truss0[0].fruitDiameter}&pruningFlower=${G2Filter2Plant6Truss0[0].pruneFlowering}&floweringTruss=${G2Filter2Plant6Truss0[0].floweringTrussss}&pruningSet=${G2Filter2Plant6Truss0[0].prunSetting}&settingTruss=${G2Filter2Plant6Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant6Truss0[0].pruningHar}&harvestTruss=${G2Filter2Plant6Truss0[0].harvestTruss}`;
 
                                                           console.log("URL : " + url398);
 
                                                           fetch(url398, { mode: 'no-cors' }).then((response) => {
 
                                                             if (response.status === 200) {
 
                                                               this.sendRow4Plant7Trusses();
 
 
                                                             } else {
 
                                                               this.setState({ isLoading: false })
                                                               this.sendRow4Plant7Trusses()
 
                                                             }
 
                                                           });
 
                                                         } else {
                                                           this.setState({ isLoading: false })
                                                           this.sendRow4Plant7Trusses()
 
                                                         }
 
                                                       } else {
 
                                                         this.setState({ isLoading: false })
                                                         this.sendRow4Plant7Trusses()
                                                       }
 
                                                     });
 
                                                   } else {
                                                     this.setState({ isLoading: false })
                                                     this.sendRow4Plant7Trusses()
 
                                                   }
 
                                                 } else {
 
                                                   this.setState({ isLoading: false })
                                                   this.sendRow4Plant7Trusses()
                                                 }
                                               });
 
                                             } else {
                                               this.setState({ isLoading: false })
                                               this.sendRow4Plant7Trusses()
 
                                             }
 
                                           } else {
 
                                             this.setState({ isLoading: false })
                                             this.sendRow4Plant7Trusses()
                                           }
 
                                         });
 
                                       } else {
                                         this.setState({ isLoading: false })
                                         this.sendRow4Plant7Trusses()
 
                                       }
 
                                     } else {
 
                                       this.setState({ isLoading: false })
                                       this.sendRow4Plant7Trusses()
                                     }
 
                                   });
 
                                 } else {
                                   this.setState({ isLoading: false })
                                   this.sendRow4Plant7Trusses()
 
                                 }
 
                               } else {
 
                                 this.setState({ isLoading: false })
                                 this.sendRow4Plant7Trusses()
                               }
 
                             });
 
                           } else {
                             this.setState({ isLoading: false })
                             this.sendRow4Plant7Trusses()
 
                           }
 
                         } else {
 
                           this.setState({ isLoading: false })
                           this.sendRow4Plant7Trusses()
                         }
 
 
                       });
 
                     } else {
                       this.setState({ isLoading: false })
                       this.sendRow4Plant7Trusses()
 
                     }
 
                   } else {
 
                     this.setState({ isLoading: false })
                     this.sendRow4Plant7Trusses()
                   }
 
                 });
 
               } else {
                 this.setState({ isLoading: false })
                 this.sendRow4Plant7Trusses()
 
               }
 
             } else {
 
               this.setState({ isLoading: false })
               this.sendRow4Plant7Trusses()
             }
 
           });
 
         } else {
           this.setState({ isLoading: false })
           this.sendRow4Plant7Trusses()
 
         }
 
       } else {
 
         this.setState({ isLoading: false })
         this.sendRow4Plant7Trusses()
       }
     });
  }

  sendRow4Plant7Trusses = () => {

    this.setState({ isLoading: true })

     //INITIALIZATION G2 MERLICE ROW 114/115 PLANT 10
     let G2Filter2Plant7Truss1 = []
     let G2Filter2Plant7Truss2 = []
     let G2Filter2Plant7Truss3 = []
     let G2Filter2Plant7Truss4 = []
     let G2Filter2Plant7Truss5 = []
     let G2Filter2Plant7Truss6 = []
     let G2Filter2Plant7Truss7 = []
     let G2Filter2Plant7Truss8 = []
     let G2Filter2Plant7Truss9 = []
     let G2Filter2Plant7Truss0 = []
     //END
 
     //GER 2 Merlice/ Plant 7/ 114-115/ Truss Number 1-10
 
     G2Filter2Plant7Truss1 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '7' &&
         sampleItemTruss.trussNumber === 1
 
       )
     });
 
     G2Filter2Plant7Truss2 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '7' &&
         sampleItemTruss.trussNumber === 2
 
       )
     });
 
     G2Filter2Plant7Truss3 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '7' &&
         sampleItemTruss.trussNumber === 3
 
       )
     });
 
     G2Filter2Plant7Truss4 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '7' &&
         sampleItemTruss.trussNumber === 4
 
       )
     });
 
     G2Filter2Plant7Truss5 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '7' &&
         sampleItemTruss.trussNumber === 5
 
       )
     });
 
     G2Filter2Plant7Truss6 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '7' &&
         sampleItemTruss.trussNumber === 6
 
       )
     });
 
     G2Filter2Plant7Truss7 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '7' &&
         sampleItemTruss.trussNumber === 7
 
       )
     });
 
     G2Filter2Plant7Truss8 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '7' &&
         sampleItemTruss.trussNumber === 8
 
       )
     });
 
     G2Filter2Plant7Truss9 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '7' &&
         sampleItemTruss.trussNumber === 9
 
       )
     });
 
     G2Filter2Plant7Truss0 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '7' &&
         sampleItemTruss.trussNumber === 10
 
       )
     });
 
     //END
 
     const scriptUrl399 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
     const url399 = `${scriptUrl399}?
   callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant7Truss1[0].plantNumber}&trussNumber=${G2Filter2Plant7Truss1[0].trussNumber}&setFruits=${G2Filter2Plant7Truss1[0].setFruits}&setFlowers=${G2Filter2Plant7Truss1[0].setFlowers}&pruningNumber=${G2Filter2Plant7Truss1[0].pruningNumber}&fruitLoad=${G2Filter2Plant7Truss1[0].fruitLoad}&fruitDiameter=${G2Filter2Plant7Truss1[0].fruitDiameter}&pruningFlower=${G2Filter2Plant7Truss1[0].pruneFlowering}&floweringTruss=${G2Filter2Plant7Truss1[0].floweringTrussss}&pruningSet=${G2Filter2Plant7Truss1[0].prunSetting}&settingTruss=${G2Filter2Plant7Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant7Truss1[0].pruningHar}&harvestTruss=${G2Filter2Plant7Truss1[0].harvestTruss}`;
 
     console.log("URL : " + url399);
 
     fetch(url399, { mode: 'no-cors' }).then((response) => {
 
       if (response.status === 200) {
 
         if (G2Filter2Plant7Truss2.length) {
 
           const scriptUrl400 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
           const url400 = `${scriptUrl400}?
   callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant7Truss2[0].plantNumber}&trussNumber=${G2Filter2Plant7Truss2[0].trussNumber}&setFruits=${G2Filter2Plant7Truss2[0].setFruits}&setFlowers=${G2Filter2Plant7Truss2[0].setFlowers}&pruningNumber=${G2Filter2Plant7Truss2[0].pruningNumber}&fruitLoad=${G2Filter2Plant7Truss2[0].fruitLoad}&fruitDiameter=${G2Filter2Plant7Truss2[0].fruitDiameter}&pruningFlower=${G2Filter2Plant7Truss2[0].pruneFlowering}&floweringTruss=${G2Filter2Plant7Truss2[0].floweringTrussss}&pruningSet=${G2Filter2Plant7Truss2[0].prunSetting}&settingTruss=${G2Filter2Plant7Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant7Truss2[0].pruningHar}&harvestTruss=${G2Filter2Plant7Truss2[0].harvestTruss}`;
 
           console.log("URL : " + url400);
 
           fetch(url400, { mode: 'no-cors' }).then((response) => {
 
             if (response.status === 200) {
 
               if (G2Filter2Plant7Truss3.length) {
 
                 const scriptUrl401 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                 const url401 = `${scriptUrl401}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant7Truss3[0].plantNumber}&trussNumber=${G2Filter2Plant7Truss3[0].trussNumber}&setFruits=${G2Filter2Plant7Truss3[0].setFruits}&setFlowers=${G2Filter2Plant7Truss3[0].setFlowers}&pruningNumber=${G2Filter2Plant7Truss3[0].pruningNumber}&fruitLoad=${G2Filter2Plant7Truss3[0].fruitLoad}&fruitDiameter=${G2Filter2Plant7Truss3[0].fruitDiameter}&pruningFlower=${G2Filter2Plant7Truss3[0].pruneFlowering}&floweringTruss=${G2Filter2Plant7Truss3[0].floweringTrussss}&pruningSet=${G2Filter2Plant7Truss3[0].prunSetting}&settingTruss=${G2Filter2Plant7Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant7Truss3[0].pruningHar}&harvestTruss=${G2Filter2Plant7Truss3[0].harvestTruss}`;
 
                 console.log("URL : " + url401);
 
                 fetch(url401, { mode: 'no-cors' }).then((response) => {
 
                   if (response.status === 200) {
 
                     if (G2Filter2Plant7Truss4.length) {
 
                       const scriptUrl402 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                       const url402 = `${scriptUrl402}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant7Truss4[0].plantNumber}&trussNumber=${G2Filter2Plant7Truss4[0].trussNumber}&setFruits=${G2Filter2Plant7Truss4[0].setFruits}&setFlowers=${G2Filter2Plant7Truss4[0].setFlowers}&pruningNumber=${G2Filter2Plant7Truss4[0].pruningNumber}&fruitLoad=${G2Filter2Plant7Truss4[0].fruitLoad}&fruitDiameter=${G2Filter2Plant7Truss4[0].fruitDiameter}&pruningFlower=${G2Filter2Plant7Truss4[0].pruneFlowering}&floweringTruss=${G2Filter2Plant7Truss4[0].floweringTrussss}&pruningSet=${G2Filter2Plant7Truss4[0].prunSetting}&settingTruss=${G2Filter2Plant7Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant7Truss4[0].pruningHar}&harvestTruss=${G2Filter2Plant7Truss4[0].harvestTruss}`;
 
                       console.log("URL : " + url402);
 
                       fetch(url402, { mode: 'no-cors' }).then((response) => {
 
                         if (response.status === 200) {
 
                           if (G2Filter2Plant7Truss5.length) {
 
                             const scriptUrl403 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                             const url403 = `${scriptUrl403}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant7Truss5[0].plantNumber}&trussNumber=${G2Filter2Plant7Truss5[0].trussNumber}&setFruits=${G2Filter2Plant7Truss5[0].setFruits}&setFlowers=${G2Filter2Plant7Truss5[0].setFlowers}&pruningNumber=${G2Filter2Plant7Truss5[0].pruningNumber}&fruitLoad=${G2Filter2Plant7Truss5[0].fruitLoad}&fruitDiameter=${G2Filter2Plant7Truss5[0].fruitDiameter}&pruningFlower=${G2Filter2Plant7Truss5[0].pruneFlowering}&floweringTruss=${G2Filter2Plant7Truss5[0].floweringTrussss}&pruningSet=${G2Filter2Plant7Truss5[0].prunSetting}&settingTruss=${G2Filter2Plant7Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant7Truss5[0].pruningHar}&harvestTruss=${G2Filter2Plant7Truss5[0].harvestTruss}`;
 
                             console.log("URL : " + url403);
 
                             fetch(url403, { mode: 'no-cors' }).then((response) => {
 
                               if (response.status === 200) {
 
                                 if (G2Filter2Plant7Truss6.length) {
 
                                   const scriptUrl404 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                   const url404 = `${scriptUrl404}?
               callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant7Truss6[0].plantNumber}&trussNumber=${G2Filter2Plant7Truss6[0].trussNumber}&setFruits=${G2Filter2Plant7Truss6[0].setFruits}&setFlowers=${G2Filter2Plant7Truss6[0].setFlowers}&pruningNumber=${G2Filter2Plant7Truss6[0].pruningNumber}&fruitLoad=${G2Filter2Plant7Truss6[0].fruitLoad}&fruitDiameter=${G2Filter2Plant7Truss6[0].fruitDiameter}&pruningFlower=${G2Filter2Plant7Truss6[0].pruneFlowering}&floweringTruss=${G2Filter2Plant7Truss6[0].floweringTrussss}&pruningSet=${G2Filter2Plant7Truss6[0].prunSetting}&settingTruss=${G2Filter2Plant7Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant7Truss6[0].pruningHar}&harvestTruss=${G2Filter2Plant7Truss6[0].harvestTruss}`;
 
                                   console.log("URL : " + url404);
 
                                   fetch(url404, { mode: 'no-cors' }).then((response) => {
 
                                     if (response.status === 200) {
 
                                       if (G2Filter2Plant7Truss7.length) {
 
                                         const scriptUrl405 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                         const url405 = `${scriptUrl405}?
               callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant7Truss7[0].plantNumber}&trussNumber=${G2Filter2Plant7Truss7[0].trussNumber}&setFruits=${G2Filter2Plant7Truss7[0].setFruits}&setFlowers=${G2Filter2Plant7Truss7[0].setFlowers}&pruningNumber=${G2Filter2Plant7Truss7[0].pruningNumber}&fruitLoad=${G2Filter2Plant7Truss7[0].fruitLoad}&fruitDiameter=${G2Filter2Plant7Truss7[0].fruitDiameter}&pruningFlower=${G2Filter2Plant7Truss7[0].pruneFlowering}&floweringTruss=${G2Filter2Plant7Truss7[0].floweringTrussss}&pruningSet=${G2Filter2Plant7Truss7[0].prunSetting}&settingTruss=${G2Filter2Plant7Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant7Truss7[0].pruningHar}&harvestTruss=${G2Filter2Plant7Truss7[0].harvestTruss}`;
 
                                         console.log("URL : " + url405);
 
                                         fetch(url405, { mode: 'no-cors' }).then((response) => {
 
                                           if (response.status === 200) {
 
                                             if (G2Filter2Plant7Truss8.length) {
 
                                               const scriptUrl406 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                               const url406 = `${scriptUrl406}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant7Truss8[0].plantNumber}&trussNumber=${G2Filter2Plant7Truss8[0].trussNumber}&setFruits=${G2Filter2Plant7Truss8[0].setFruits}&setFlowers=${G2Filter2Plant7Truss8[0].setFlowers}&pruningNumber=${G2Filter2Plant7Truss8[0].pruningNumber}&fruitLoad=${G2Filter2Plant7Truss8[0].fruitLoad}&fruitDiameter=${G2Filter2Plant7Truss8[0].fruitDiameter}&pruningFlower=${G2Filter2Plant7Truss8[0].pruneFlowering}&floweringTruss=${G2Filter2Plant7Truss8[0].floweringTrussss}&pruningSet=${G2Filter2Plant7Truss8[0].prunSetting}&settingTruss=${G2Filter2Plant7Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant7Truss8[0].pruningHar}&harvestTruss=${G2Filter2Plant7Truss8[0].harvestTruss}`;
 
                                               console.log("URL : " + url406);
 
                                               fetch(url406, { mode: 'no-cors' }).then((response) => {
 
                                                 if (response.status === 200) {
 
                                                   if (G2Filter2Plant7Truss9.length) {
 
                                                     const scriptUrl407 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                     const url407 = `${scriptUrl407}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant7Truss9[0].plantNumber}&trussNumber=${G2Filter2Plant7Truss9[0].trussNumber}&setFruits=${G2Filter2Plant7Truss9[0].setFruits}&setFlowers=${G2Filter2Plant7Truss9[0].setFlowers}&pruningNumber=${G2Filter2Plant7Truss9[0].pruningNumber}&fruitLoad=${G2Filter2Plant7Truss9[0].fruitLoad}&fruitDiameter=${G2Filter2Plant7Truss9[0].fruitDiameter}&pruningFlower=${G2Filter2Plant7Truss9[0].pruneFlowering}&floweringTruss=${G2Filter2Plant7Truss9[0].floweringTrussss}&pruningSet=${G2Filter2Plant7Truss9[0].prunSetting}&settingTruss=${G2Filter2Plant7Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant7Truss9[0].pruningHar}&harvestTruss=${G2Filter2Plant7Truss9[0].harvestTruss}`;
 
                                                     console.log("URL : " + url407);
 
                                                     fetch(url407, { mode: 'no-cors' }).then((response) => {
 
                                                       if (response.status === 200) {
 
                                                         if (G2Filter2Plant7Truss0.length) {
 
                                                           const scriptUrl408 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                           const url408 = `${scriptUrl408}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant7Truss0[0].plantNumber}&trussNumber=${G2Filter2Plant7Truss0[0].trussNumber}&setFruits=${G2Filter2Plant7Truss0[0].setFruits}&setFlowers=${G2Filter2Plant7Truss0[0].setFlowers}&pruningNumber=${G2Filter2Plant7Truss0[0].pruningNumber}&fruitLoad=${G2Filter2Plant7Truss0[0].fruitLoad}&fruitDiameter=${G2Filter2Plant7Truss0[0].fruitDiameter}&pruningFlower=${G2Filter2Plant7Truss0[0].pruneFlowering}&floweringTruss=${G2Filter2Plant7Truss0[0].floweringTrussss}&pruningSet=${G2Filter2Plant7Truss0[0].prunSetting}&settingTruss=${G2Filter2Plant7Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant7Truss0[0].pruningHar}&harvestTruss=${G2Filter2Plant7Truss0[0].harvestTruss}`;
 
                                                           console.log("URL : " + url408);
 
                                                           fetch(url408, { mode: 'no-cors' }).then((response) => {
 
                                                             if (response.status === 200) {
 
                                                               this.sendRow4Plant8Trusses();
 
 
                                                             } else {
 
                                                               this.setState({ isLoading: false })
                                                               this.sendRow4Plant8Trusses()
 
                                                             }
 
                                                           });
 
                                                         } else {
                                                           this.setState({ isLoading: false })
                                                           this.sendRow4Plant8Trusses()
 
                                                         }
 
                                                       } else {
 
                                                         this.setState({ isLoading: false })
                                                         this.sendRow4Plant8Trusses()
                                                       }
 
                                                     });
 
                                                   } else {
                                                     this.setState({ isLoading: false })
                                                     this.sendRow4Plant8Trusses()
 
                                                   }
 
                                                 } else {
 
                                                   this.setState({ isLoading: false })
                                                   this.sendRow4Plant8Trusses()
                                                 }
                                               });
 
                                             } else {
                                               this.setState({ isLoading: false })
                                               this.sendRow4Plant8Trusses()
 
                                             }
 
                                           } else {
 
                                             this.setState({ isLoading: false })
                                             this.sendRow4Plant8Trusses()
                                           }
 
                                         });
 
                                       } else {
                                         this.setState({ isLoading: false })
                                         this.sendRow4Plant8Trusses()
 
                                       }
 
                                     } else {
 
                                       this.setState({ isLoading: false })
                                       this.sendRow4Plant8Trusses()
                                     }
 
                                   });
 
                                 } else {
                                   this.setState({ isLoading: false })
                                   this.sendRow4Plant8Trusses()
 
                                 }
 
                               } else {
 
                                 this.setState({ isLoading: false })
                                 this.sendRow4Plant8Trusses()
                               }
 
                             });
 
                           } else {
                             this.setState({ isLoading: false })
                             this.sendRow4Plant8Trusses()
 
                           }
 
                         } else {
 
                           this.setState({ isLoading: false })
                           this.sendRow4Plant8Trusses()
                         }
 
 
                       });
 
                     } else {
                       this.setState({ isLoading: false })
                       this.sendRow4Plant8Trusses()
 
                     }
 
                   } else {
 
                     this.setState({ isLoading: false })
                     this.sendRow4Plant8Trusses()
                   }
 
                 });
 
               } else {
                 this.setState({ isLoading: false })
                 this.sendRow4Plant8Trusses()
 
               }
 
             } else {
 
               this.setState({ isLoading: false })
               this.sendRow4Plant8Trusses()
             }
 
           });
 
         } else {
           this.setState({ isLoading: false })
           this.sendRow4Plant8Trusses()
 
         }
 
       } else {
 
         this.setState({ isLoading: false })
         this.sendRow4Plant8Trusses()
       }
     });

  }

  sendRow4Plant8Trusses = () => {

    this.setState({ isLoading: true })

     //INITIALIZATION G2 MERLICE ROW 114/115 PLANT 10
     let G2Filter2Plant8Truss1 = []
     let G2Filter2Plant8Truss2 = []
     let G2Filter2Plant8Truss3 = []
     let G2Filter2Plant8Truss4 = []
     let G2Filter2Plant8Truss5 = []
     let G2Filter2Plant8Truss6 = []
     let G2Filter2Plant8Truss7 = []
     let G2Filter2Plant8Truss8 = []
     let G2Filter2Plant8Truss9 = []
     let G2Filter2Plant8Truss0 = []
     //END
 
     //GER 2 Merlice/ Plant 8/ 114-115/ Truss Number 1-10
 
     G2Filter2Plant8Truss1 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '8' &&
         sampleItemTruss.trussNumber === 1
 
       )
     });
 
     G2Filter2Plant8Truss2 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '8' &&
         sampleItemTruss.trussNumber === 2
 
       )
     });
 
     G2Filter2Plant8Truss3 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '8' &&
         sampleItemTruss.trussNumber === 3
 
       )
     });
 
     G2Filter2Plant8Truss4 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '8' &&
         sampleItemTruss.trussNumber === 4
 
       )
     });
 
     G2Filter2Plant8Truss5 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '8' &&
         sampleItemTruss.trussNumber === 5
 
       )
     });
 
     G2Filter2Plant8Truss6 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '8' &&
         sampleItemTruss.trussNumber === 6
 
       )
     });
 
     G2Filter2Plant8Truss7 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '8' &&
         sampleItemTruss.trussNumber === 7
 
       )
     });
 
     G2Filter2Plant8Truss8 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '8' &&
         sampleItemTruss.trussNumber === 8
 
       )
     });
 
     G2Filter2Plant8Truss9 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '8' &&
         sampleItemTruss.trussNumber === 9
 
       )
     });
 
     G2Filter2Plant8Truss0 = this.state.truss.filter(sampleItemTruss => {
 
       return (
 
         sampleItemTruss.plantName === 'GER 2 - Merlice' &&
         sampleItemTruss.plantRow === '114/115' &&
         sampleItemTruss.plantNumber === '8' &&
         sampleItemTruss.trussNumber === 10
 
       )
     });
 
     //END
 
     const scriptUrl409 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
     const url409 = `${scriptUrl409}?
   callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant8Truss1[0].plantNumber}&trussNumber=${G2Filter2Plant8Truss1[0].trussNumber}&setFruits=${G2Filter2Plant8Truss1[0].setFruits}&setFlowers=${G2Filter2Plant8Truss1[0].setFlowers}&pruningNumber=${G2Filter2Plant8Truss1[0].pruningNumber}&fruitLoad=${G2Filter2Plant8Truss1[0].fruitLoad}&fruitDiameter=${G2Filter2Plant8Truss1[0].fruitDiameter}&pruningFlower=${G2Filter2Plant8Truss1[0].pruneFlowering}&floweringTruss=${G2Filter2Plant8Truss1[0].floweringTrussss}&pruningSet=${G2Filter2Plant8Truss1[0].prunSetting}&settingTruss=${G2Filter2Plant8Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant8Truss1[0].pruningHar}&harvestTruss=${G2Filter2Plant8Truss1[0].harvestTruss}`;
 
     console.log("URL : " + url409);
 
     fetch(url409, { mode: 'no-cors' }).then((response) => {
 
       if (response.status === 200) {
 
         if (G2Filter2Plant8Truss2.length) {
 
           const scriptUrl410 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
           const url410 = `${scriptUrl410}?
   callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant8Truss2[0].plantNumber}&trussNumber=${G2Filter2Plant8Truss2[0].trussNumber}&setFruits=${G2Filter2Plant8Truss2[0].setFruits}&setFlowers=${G2Filter2Plant8Truss2[0].setFlowers}&pruningNumber=${G2Filter2Plant8Truss2[0].pruningNumber}&fruitLoad=${G2Filter2Plant8Truss2[0].fruitLoad}&fruitDiameter=${G2Filter2Plant8Truss2[0].fruitDiameter}&pruningFlower=${G2Filter2Plant8Truss2[0].pruneFlowering}&floweringTruss=${G2Filter2Plant8Truss2[0].floweringTrussss}&pruningSet=${G2Filter2Plant8Truss2[0].prunSetting}&settingTruss=${G2Filter2Plant8Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant8Truss2[0].pruningHar}&harvestTruss=${G2Filter2Plant8Truss2[0].harvestTruss}`;
 
           console.log("URL : " + url410);
 
           fetch(url410, { mode: 'no-cors' }).then((response) => {
 
             if (response.status === 200) {
 
               if (G2Filter2Plant8Truss3.length) {
 
                 const scriptUrl411 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                 const url411 = `${scriptUrl411}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant8Truss3[0].plantNumber}&trussNumber=${G2Filter2Plant8Truss3[0].trussNumber}&setFruits=${G2Filter2Plant8Truss3[0].setFruits}&setFlowers=${G2Filter2Plant8Truss3[0].setFlowers}&pruningNumber=${G2Filter2Plant8Truss3[0].pruningNumber}&fruitLoad=${G2Filter2Plant8Truss3[0].fruitLoad}&fruitDiameter=${G2Filter2Plant8Truss3[0].fruitDiameter}&pruningFlower=${G2Filter2Plant8Truss3[0].pruneFlowering}&floweringTruss=${G2Filter2Plant8Truss3[0].floweringTrussss}&pruningSet=${G2Filter2Plant8Truss3[0].prunSetting}&settingTruss=${G2Filter2Plant8Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant8Truss3[0].pruningHar}&harvestTruss=${G2Filter2Plant8Truss3[0].harvestTruss}`;
 
                 console.log("URL : " + url411);
 
                 fetch(url411, { mode: 'no-cors' }).then((response) => {
 
                   if (response.status === 200) {
 
                     if (G2Filter2Plant8Truss4.length) {
 
                       const scriptUrl412 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                       const url412 = `${scriptUrl412}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant8Truss4[0].plantNumber}&trussNumber=${G2Filter2Plant8Truss4[0].trussNumber}&setFruits=${G2Filter2Plant8Truss4[0].setFruits}&setFlowers=${G2Filter2Plant8Truss4[0].setFlowers}&pruningNumber=${G2Filter2Plant8Truss4[0].pruningNumber}&fruitLoad=${G2Filter2Plant8Truss4[0].fruitLoad}&fruitDiameter=${G2Filter2Plant8Truss4[0].fruitDiameter}&pruningFlower=${G2Filter2Plant8Truss4[0].pruneFlowering}&floweringTruss=${G2Filter2Plant8Truss4[0].floweringTrussss}&pruningSet=${G2Filter2Plant8Truss4[0].prunSetting}&settingTruss=${G2Filter2Plant8Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant8Truss4[0].pruningHar}&harvestTruss=${G2Filter2Plant8Truss4[0].harvestTruss}`;
 
                       console.log("URL : " + url412);
 
                       fetch(url412, { mode: 'no-cors' }).then((response) => {
 
                         if (response.status === 200) {
 
                           if (G2Filter2Plant8Truss5.length) {
 
                             const scriptUrl413 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                             const url413 = `${scriptUrl413}?
         callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant8Truss5[0].plantNumber}&trussNumber=${G2Filter2Plant8Truss5[0].trussNumber}&setFruits=${G2Filter2Plant8Truss5[0].setFruits}&setFlowers=${G2Filter2Plant8Truss5[0].setFlowers}&pruningNumber=${G2Filter2Plant8Truss5[0].pruningNumber}&fruitLoad=${G2Filter2Plant8Truss5[0].fruitLoad}&fruitDiameter=${G2Filter2Plant8Truss5[0].fruitDiameter}&pruningFlower=${G2Filter2Plant8Truss5[0].pruneFlowering}&floweringTruss=${G2Filter2Plant8Truss5[0].floweringTrussss}&pruningSet=${G2Filter2Plant8Truss5[0].prunSetting}&settingTruss=${G2Filter2Plant8Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant8Truss5[0].pruningHar}&harvestTruss=${G2Filter2Plant8Truss5[0].harvestTruss}`;
 
                             console.log("URL : " + url413);
 
                             fetch(url413, { mode: 'no-cors' }).then((response) => {
 
                               if (response.status === 200) {
 
                                 if (G2Filter2Plant8Truss6.length) {
 
                                   const scriptUrl414 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                   const url414 = `${scriptUrl414}?
               callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant8Truss6[0].plantNumber}&trussNumber=${G2Filter2Plant8Truss6[0].trussNumber}&setFruits=${G2Filter2Plant8Truss6[0].setFruits}&setFlowers=${G2Filter2Plant8Truss6[0].setFlowers}&pruningNumber=${G2Filter2Plant8Truss6[0].pruningNumber}&fruitLoad=${G2Filter2Plant8Truss6[0].fruitLoad}&fruitDiameter=${G2Filter2Plant8Truss6[0].fruitDiameter}&pruningFlower=${G2Filter2Plant8Truss6[0].pruneFlowering}&floweringTruss=${G2Filter2Plant8Truss6[0].floweringTrussss}&pruningSet=${G2Filter2Plant8Truss6[0].prunSetting}&settingTruss=${G2Filter2Plant8Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant8Truss6[0].pruningHar}&harvestTruss=${G2Filter2Plant8Truss6[0].harvestTruss}`;
 
                                   console.log("URL : " + url414);
 
                                   fetch(url414, { mode: 'no-cors' }).then((response) => {
 
                                     if (response.status === 200) {
 
                                       if (G2Filter2Plant8Truss7.length) {
 
                                         const scriptUrl415 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                         const url415 = `${scriptUrl415}?
               callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant8Truss7[0].plantNumber}&trussNumber=${G2Filter2Plant8Truss7[0].trussNumber}&setFruits=${G2Filter2Plant8Truss7[0].setFruits}&setFlowers=${G2Filter2Plant8Truss7[0].setFlowers}&pruningNumber=${G2Filter2Plant8Truss7[0].pruningNumber}&fruitLoad=${G2Filter2Plant8Truss7[0].fruitLoad}&fruitDiameter=${G2Filter2Plant8Truss7[0].fruitDiameter}&pruningFlower=${G2Filter2Plant8Truss7[0].pruneFlowering}&floweringTruss=${G2Filter2Plant8Truss7[0].floweringTrussss}&pruningSet=${G2Filter2Plant8Truss7[0].prunSetting}&settingTruss=${G2Filter2Plant8Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant8Truss7[0].pruningHar}&harvestTruss=${G2Filter2Plant8Truss7[0].harvestTruss}`;
 
                                         console.log("URL : " + url415);
 
                                         fetch(url415, { mode: 'no-cors' }).then((response) => {
 
                                           if (response.status === 200) {
 
                                             if (G2Filter2Plant8Truss8.length) {
 
                                               const scriptUrl416 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                               const url416 = `${scriptUrl416}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant8Truss8[0].plantNumber}&trussNumber=${G2Filter2Plant8Truss8[0].trussNumber}&setFruits=${G2Filter2Plant8Truss8[0].setFruits}&setFlowers=${G2Filter2Plant8Truss8[0].setFlowers}&pruningNumber=${G2Filter2Plant8Truss8[0].pruningNumber}&fruitLoad=${G2Filter2Plant8Truss8[0].fruitLoad}&fruitDiameter=${G2Filter2Plant8Truss8[0].fruitDiameter}&pruningFlower=${G2Filter2Plant8Truss8[0].pruneFlowering}&floweringTruss=${G2Filter2Plant8Truss8[0].floweringTrussss}&pruningSet=${G2Filter2Plant8Truss8[0].prunSetting}&settingTruss=${G2Filter2Plant8Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant8Truss8[0].pruningHar}&harvestTruss=${G2Filter2Plant8Truss8[0].harvestTruss}`;
 
                                               console.log("URL : " + url416);
 
                                               fetch(url416, { mode: 'no-cors' }).then((response) => {
 
                                                 if (response.status === 200) {
 
                                                   if (G2Filter2Plant8Truss9.length) {
 
                                                     const scriptUrl417 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                     const url417 = `${scriptUrl417}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant8Truss9[0].plantNumber}&trussNumber=${G2Filter2Plant8Truss9[0].trussNumber}&setFruits=${G2Filter2Plant8Truss9[0].setFruits}&setFlowers=${G2Filter2Plant8Truss9[0].setFlowers}&pruningNumber=${G2Filter2Plant8Truss9[0].pruningNumber}&fruitLoad=${G2Filter2Plant8Truss9[0].fruitLoad}&fruitDiameter=${G2Filter2Plant8Truss9[0].fruitDiameter}&pruningFlower=${G2Filter2Plant8Truss9[0].pruneFlowering}&floweringTruss=${G2Filter2Plant8Truss9[0].floweringTrussss}&pruningSet=${G2Filter2Plant8Truss9[0].prunSetting}&settingTruss=${G2Filter2Plant8Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant8Truss9[0].pruningHar}&harvestTruss=${G2Filter2Plant8Truss9[0].harvestTruss}`;
 
                                                     console.log("URL : " + url417);
 
                                                     fetch(url417, { mode: 'no-cors' }).then((response) => {
 
                                                       if (response.status === 200) {
 
                                                         if (G2Filter2Plant8Truss0.length) {
 
                                                           const scriptUrl418 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                           const url418 = `${scriptUrl418}?
                     callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant8Truss0[0].plantNumber}&trussNumber=${G2Filter2Plant8Truss0[0].trussNumber}&setFruits=${G2Filter2Plant8Truss0[0].setFruits}&setFlowers=${G2Filter2Plant8Truss0[0].setFlowers}&pruningNumber=${G2Filter2Plant8Truss0[0].pruningNumber}&fruitLoad=${G2Filter2Plant8Truss0[0].fruitLoad}&fruitDiameter=${G2Filter2Plant8Truss0[0].fruitDiameter}&pruningFlower=${G2Filter2Plant8Truss0[0].pruneFlowering}&floweringTruss=${G2Filter2Plant8Truss0[0].floweringTrussss}&pruningSet=${G2Filter2Plant8Truss0[0].prunSetting}&settingTruss=${G2Filter2Plant8Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant8Truss0[0].pruningHar}&harvestTruss=${G2Filter2Plant8Truss0[0].harvestTruss}`;
 
                                                           console.log("URL : " + url418);
 
                                                           fetch(url418, { mode: 'no-cors' }).then((response) => {
 
                                                             if (response.status === 200) {
 
                                                               this.sendRow4Plant9Trusses();
 
 
                                                             } else {
 
                                                               this.setState({ isLoading: false })
                                                               this.sendRow4Plant9Trusses()
 
                                                             }
 
                                                           });
 
                                                         } else {
                                                           this.setState({ isLoading: false })
                                                           this.sendRow4Plant9Trusses()
 
                                                         }
 
                                                       } else {
 
                                                         this.setState({ isLoading: false })
                                                         this.sendRow4Plant9Trusses()
                                                       }
 
                                                     });
 
                                                   } else {
                                                     this.setState({ isLoading: false })
                                                     this.sendRow4Plant9Trusses()
 
                                                   }
 
                                                 } else {
 
                                                   this.setState({ isLoading: false })
                                                   this.sendRow4Plant9Trusses()
                                                 }
                                               });
 
                                             } else {
                                               this.setState({ isLoading: false })
                                               this.sendRow4Plant9Trusses()
 
                                             }
 
                                           } else {
 
                                             this.setState({ isLoading: false })
                                             this.sendRow4Plant9Trusses()
                                           }
 
                                         });
 
                                       } else {
                                         this.setState({ isLoading: false })
                                         this.sendRow4Plant9Trusses()
 
                                       }
 
                                     } else {
 
                                       this.setState({ isLoading: false })
                                       this.sendRow4Plant9Trusses()
                                     }
 
                                   });
 
                                 } else {
                                   this.setState({ isLoading: false })
                                   this.sendRow4Plant9Trusses()
 
                                 }
 
                               } else {
 
                                 this.setState({ isLoading: false })
                                 this.sendRow4Plant9Trusses()
                               }
 
                             });
 
                           } else {
                             this.setState({ isLoading: false })
                             this.sendRow4Plant9Trusses()
 
                           }
 
                         } else {
 
                           this.setState({ isLoading: false })
                           this.sendRow4Plant9Trusses()
                         }
 
 
                       });
 
                     } else {
                       this.setState({ isLoading: false })
                       this.sendRow4Plant9Trusses()
 
                     }
 
                   } else {
 
                     this.setState({ isLoading: false })
                     this.sendRow4Plant9Trusses()
                   }
 
                 });
 
               } else {
                 this.setState({ isLoading: false })
                 this.sendRow4Plant9Trusses()
 
               }
 
             } else {
 
               this.setState({ isLoading: false })
               this.sendRow4Plant9Trusses()
             }
 
           });
 
         } else {
           this.setState({ isLoading: false })
           this.sendRow4Plant9Trusses()
 
         }
 
       } else {
 
         this.setState({ isLoading: false })
         this.sendRow4Plant9Trusses()
       }
     });

  }

  sendRow4Plant9Trusses = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G2 MERLICE ROW 114/115 PLANT 10
    let G2Filter2Plant9Truss1 = []
    let G2Filter2Plant9Truss2 = []
    let G2Filter2Plant9Truss3 = []
    let G2Filter2Plant9Truss4 = []
    let G2Filter2Plant9Truss5 = []
    let G2Filter2Plant9Truss6 = []
    let G2Filter2Plant9Truss7 = []
    let G2Filter2Plant9Truss8 = []
    let G2Filter2Plant9Truss9 = []
    let G2Filter2Plant9Truss0 = []
    //END

    //GER 2 Merlice/ Plant 9/ 114-115/ Truss Number 1-10

    G2Filter2Plant9Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G2Filter2Plant9Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G2Filter2Plant9Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G2Filter2Plant9Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G2Filter2Plant9Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G2Filter2Plant9Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G2Filter2Plant9Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G2Filter2Plant9Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G2Filter2Plant9Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G2Filter2Plant9Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '9' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl419 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url419 = `${scriptUrl419}?
  callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant9Truss1[0].plantNumber}&trussNumber=${G2Filter2Plant9Truss1[0].trussNumber}&setFruits=${G2Filter2Plant9Truss1[0].setFruits}&setFlowers=${G2Filter2Plant9Truss1[0].setFlowers}&pruningNumber=${G2Filter2Plant9Truss1[0].pruningNumber}&fruitLoad=${G2Filter2Plant9Truss1[0].fruitLoad}&fruitDiameter=${G2Filter2Plant9Truss1[0].fruitDiameter}&pruningFlower=${G2Filter2Plant9Truss1[0].pruneFlowering}&floweringTruss=${G2Filter2Plant9Truss1[0].floweringTrussss}&pruningSet=${G2Filter2Plant9Truss1[0].prunSetting}&settingTruss=${G2Filter2Plant9Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant9Truss1[0].pruningHar}&harvestTruss=${G2Filter2Plant9Truss1[0].harvestTruss}`;

    console.log("URL : " + url419);

    fetch(url419, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G2Filter2Plant9Truss2.length) {

          const scriptUrl420 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url420 = `${scriptUrl420}?
  callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant9Truss2[0].plantNumber}&trussNumber=${G2Filter2Plant9Truss2[0].trussNumber}&setFruits=${G2Filter2Plant9Truss2[0].setFruits}&setFlowers=${G2Filter2Plant9Truss2[0].setFlowers}&pruningNumber=${G2Filter2Plant9Truss2[0].pruningNumber}&fruitLoad=${G2Filter2Plant9Truss2[0].fruitLoad}&fruitDiameter=${G2Filter2Plant9Truss2[0].fruitDiameter}&pruningFlower=${G2Filter2Plant9Truss2[0].pruneFlowering}&floweringTruss=${G2Filter2Plant9Truss2[0].floweringTrussss}&pruningSet=${G2Filter2Plant9Truss2[0].prunSetting}&settingTruss=${G2Filter2Plant9Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant9Truss2[0].pruningHar}&harvestTruss=${G2Filter2Plant9Truss2[0].harvestTruss}`;

          console.log("URL : " + url420);

          fetch(url420, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G2Filter2Plant9Truss3.length) {

                const scriptUrl421 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url421 = `${scriptUrl421}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant9Truss3[0].plantNumber}&trussNumber=${G2Filter2Plant9Truss3[0].trussNumber}&setFruits=${G2Filter2Plant9Truss3[0].setFruits}&setFlowers=${G2Filter2Plant9Truss3[0].setFlowers}&pruningNumber=${G2Filter2Plant9Truss3[0].pruningNumber}&fruitLoad=${G2Filter2Plant9Truss3[0].fruitLoad}&fruitDiameter=${G2Filter2Plant9Truss3[0].fruitDiameter}&pruningFlower=${G2Filter2Plant9Truss3[0].pruneFlowering}&floweringTruss=${G2Filter2Plant9Truss3[0].floweringTrussss}&pruningSet=${G2Filter2Plant9Truss3[0].prunSetting}&settingTruss=${G2Filter2Plant9Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant9Truss3[0].pruningHar}&harvestTruss=${G2Filter2Plant9Truss3[0].harvestTruss}`;

                console.log("URL : " + url421);

                fetch(url421, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G2Filter2Plant9Truss4.length) {

                      const scriptUrl422 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url422 = `${scriptUrl422}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant9Truss4[0].plantNumber}&trussNumber=${G2Filter2Plant9Truss4[0].trussNumber}&setFruits=${G2Filter2Plant9Truss4[0].setFruits}&setFlowers=${G2Filter2Plant9Truss4[0].setFlowers}&pruningNumber=${G2Filter2Plant9Truss4[0].pruningNumber}&fruitLoad=${G2Filter2Plant9Truss4[0].fruitLoad}&fruitDiameter=${G2Filter2Plant9Truss4[0].fruitDiameter}&pruningFlower=${G2Filter2Plant9Truss4[0].pruneFlowering}&floweringTruss=${G2Filter2Plant9Truss4[0].floweringTrussss}&pruningSet=${G2Filter2Plant9Truss4[0].prunSetting}&settingTruss=${G2Filter2Plant9Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant9Truss4[0].pruningHar}&harvestTruss=${G2Filter2Plant9Truss4[0].harvestTruss}`;

                      console.log("URL : " + url422);

                      fetch(url422, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G2Filter2Plant9Truss5.length) {

                            const scriptUrl423 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url423 = `${scriptUrl423}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant9Truss5[0].plantNumber}&trussNumber=${G2Filter2Plant9Truss5[0].trussNumber}&setFruits=${G2Filter2Plant9Truss5[0].setFruits}&setFlowers=${G2Filter2Plant9Truss5[0].setFlowers}&pruningNumber=${G2Filter2Plant9Truss5[0].pruningNumber}&fruitLoad=${G2Filter2Plant9Truss5[0].fruitLoad}&fruitDiameter=${G2Filter2Plant9Truss5[0].fruitDiameter}&pruningFlower=${G2Filter2Plant9Truss5[0].pruneFlowering}&floweringTruss=${G2Filter2Plant9Truss5[0].floweringTrussss}&pruningSet=${G2Filter2Plant9Truss5[0].prunSetting}&settingTruss=${G2Filter2Plant9Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant9Truss5[0].pruningHar}&harvestTruss=${G2Filter2Plant9Truss5[0].harvestTruss}`;

                            console.log("URL : " + url423);

                            fetch(url423, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G2Filter2Plant9Truss6.length) {

                                  const scriptUrl424 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url424 = `${scriptUrl424}?
              callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant9Truss6[0].plantNumber}&trussNumber=${G2Filter2Plant9Truss6[0].trussNumber}&setFruits=${G2Filter2Plant9Truss6[0].setFruits}&setFlowers=${G2Filter2Plant9Truss6[0].setFlowers}&pruningNumber=${G2Filter2Plant9Truss6[0].pruningNumber}&fruitLoad=${G2Filter2Plant9Truss6[0].fruitLoad}&fruitDiameter=${G2Filter2Plant9Truss6[0].fruitDiameter}&pruningFlower=${G2Filter2Plant9Truss6[0].pruneFlowering}&floweringTruss=${G2Filter2Plant9Truss6[0].floweringTrussss}&pruningSet=${G2Filter2Plant9Truss6[0].prunSetting}&settingTruss=${G2Filter2Plant9Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant9Truss6[0].pruningHar}&harvestTruss=${G2Filter2Plant9Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url424);

                                  fetch(url424, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G2Filter2Plant9Truss7.length) {

                                        const scriptUrl425 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url425 = `${scriptUrl425}?
              callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant9Truss7[0].plantNumber}&trussNumber=${G2Filter2Plant9Truss7[0].trussNumber}&setFruits=${G2Filter2Plant9Truss7[0].setFruits}&setFlowers=${G2Filter2Plant9Truss7[0].setFlowers}&pruningNumber=${G2Filter2Plant9Truss7[0].pruningNumber}&fruitLoad=${G2Filter2Plant9Truss7[0].fruitLoad}&fruitDiameter=${G2Filter2Plant9Truss7[0].fruitDiameter}&pruningFlower=${G2Filter2Plant9Truss7[0].pruneFlowering}&floweringTruss=${G2Filter2Plant9Truss7[0].floweringTrussss}&pruningSet=${G2Filter2Plant9Truss7[0].prunSetting}&settingTruss=${G2Filter2Plant9Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant9Truss7[0].pruningHar}&harvestTruss=${G2Filter2Plant9Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url425);

                                        fetch(url425, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G2Filter2Plant9Truss8.length) {

                                              const scriptUrl426 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url426 = `${scriptUrl426}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant9Truss8[0].plantNumber}&trussNumber=${G2Filter2Plant9Truss8[0].trussNumber}&setFruits=${G2Filter2Plant9Truss8[0].setFruits}&setFlowers=${G2Filter2Plant9Truss8[0].setFlowers}&pruningNumber=${G2Filter2Plant9Truss8[0].pruningNumber}&fruitLoad=${G2Filter2Plant9Truss8[0].fruitLoad}&fruitDiameter=${G2Filter2Plant9Truss8[0].fruitDiameter}&pruningFlower=${G2Filter2Plant9Truss8[0].pruneFlowering}&floweringTruss=${G2Filter2Plant9Truss8[0].floweringTrussss}&pruningSet=${G2Filter2Plant9Truss8[0].prunSetting}&settingTruss=${G2Filter2Plant9Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant9Truss8[0].pruningHar}&harvestTruss=${G2Filter2Plant9Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url426);

                                              fetch(url426, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G2Filter2Plant9Truss9.length) {

                                                    const scriptUrl427 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url427 = `${scriptUrl427}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant9Truss9[0].plantNumber}&trussNumber=${G2Filter2Plant9Truss9[0].trussNumber}&setFruits=${G2Filter2Plant9Truss9[0].setFruits}&setFlowers=${G2Filter2Plant9Truss9[0].setFlowers}&pruningNumber=${G2Filter2Plant9Truss9[0].pruningNumber}&fruitLoad=${G2Filter2Plant9Truss9[0].fruitLoad}&fruitDiameter=${G2Filter2Plant9Truss9[0].fruitDiameter}&pruningFlower=${G2Filter2Plant9Truss9[0].pruneFlowering}&floweringTruss=${G2Filter2Plant9Truss9[0].floweringTrussss}&pruningSet=${G2Filter2Plant9Truss9[0].prunSetting}&settingTruss=${G2Filter2Plant9Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant9Truss9[0].pruningHar}&harvestTruss=${G2Filter2Plant9Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url427);

                                                    fetch(url427, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G2Filter2Plant9Truss0.length) {

                                                          const scriptUrl428 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url428 = `${scriptUrl428}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant9Truss0[0].plantNumber}&trussNumber=${G2Filter2Plant9Truss0[0].trussNumber}&setFruits=${G2Filter2Plant9Truss0[0].setFruits}&setFlowers=${G2Filter2Plant9Truss0[0].setFlowers}&pruningNumber=${G2Filter2Plant9Truss0[0].pruningNumber}&fruitLoad=${G2Filter2Plant9Truss0[0].fruitLoad}&fruitDiameter=${G2Filter2Plant9Truss0[0].fruitDiameter}&pruningFlower=${G2Filter2Plant9Truss0[0].pruneFlowering}&floweringTruss=${G2Filter2Plant9Truss0[0].floweringTrussss}&pruningSet=${G2Filter2Plant9Truss0[0].prunSetting}&settingTruss=${G2Filter2Plant9Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant9Truss0[0].pruningHar}&harvestTruss=${G2Filter2Plant9Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url428);

                                                          fetch(url428, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.sendRow4Plant10Trusses();


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow4Plant10Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow4Plant10Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow4Plant10Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow4Plant10Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow4Plant10Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow4Plant10Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow4Plant10Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow4Plant10Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow4Plant10Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow4Plant10Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow4Plant10Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow4Plant10Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow4Plant10Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow4Plant10Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow4Plant10Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow4Plant10Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow4Plant10Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow4Plant10Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow4Plant10Trusses()
      }
    });

  }

  sendRow4Plant10Trusses= () => {

    this.setState({ isLoading: true })

    //INITIALIZATION G2 MERLICE ROW 114/115 PLANT 10
    let G2Filter2Plant10Truss1 = []
    let G2Filter2Plant10Truss2 = []
    let G2Filter2Plant10Truss3 = []
    let G2Filter2Plant10Truss4 = []
    let G2Filter2Plant10Truss5 = []
    let G2Filter2Plant10Truss6 = []
    let G2Filter2Plant10Truss7 = []
    let G2Filter2Plant10Truss8 = []
    let G2Filter2Plant10Truss9 = []
    let G2Filter2Plant10Truss0 = []
    //END

    //GER 2 Merlice/ Plant 10/ 114-115/ Truss Number 1-10

    G2Filter2Plant10Truss1 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 1

      )
    });

    G2Filter2Plant10Truss2 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 2

      )
    });

    G2Filter2Plant10Truss3 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 3

      )
    });

    G2Filter2Plant10Truss4 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 4

      )
    });

    G2Filter2Plant10Truss5 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 5

      )
    });

    G2Filter2Plant10Truss6 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 6

      )
    });

    G2Filter2Plant10Truss7 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 7

      )
    });

    G2Filter2Plant10Truss8 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 8

      )
    });

    G2Filter2Plant10Truss9 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 9

      )
    });

    G2Filter2Plant10Truss0 = this.state.truss.filter(sampleItemTruss => {

      return (

        sampleItemTruss.plantName === 'GER 2 - Merlice' &&
        sampleItemTruss.plantRow === '114/115' &&
        sampleItemTruss.plantNumber === '10' &&
        sampleItemTruss.trussNumber === 10

      )
    });

    //END

    const scriptUrl429 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
    const url429 = `${scriptUrl429}?
  callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant10Truss1[0].plantNumber}&trussNumber=${G2Filter2Plant10Truss1[0].trussNumber}&setFruits=${G2Filter2Plant10Truss1[0].setFruits}&setFlowers=${G2Filter2Plant10Truss1[0].setFlowers}&pruningNumber=${G2Filter2Plant10Truss1[0].pruningNumber}&fruitLoad=${G2Filter2Plant10Truss1[0].fruitLoad}&fruitDiameter=${G2Filter2Plant10Truss1[0].fruitDiameter}&pruningFlower=${G2Filter2Plant10Truss1[0].pruneFlowering}&floweringTruss=${G2Filter2Plant10Truss1[0].floweringTrussss}&pruningSet=${G2Filter2Plant10Truss1[0].prunSetting}&settingTruss=${G2Filter2Plant10Truss1[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant10Truss1[0].pruningHar}&harvestTruss=${G2Filter2Plant10Truss1[0].harvestTruss}`;

    console.log("URL : " + url429);

    fetch(url429, { mode: 'no-cors' }).then((response) => {

      if (response.status === 200) {

        if (G2Filter2Plant10Truss2.length) {

          const scriptUrl430 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
          const url430 = `${scriptUrl430}?
  callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant10Truss2[0].plantNumber}&trussNumber=${G2Filter2Plant10Truss2[0].trussNumber}&setFruits=${G2Filter2Plant10Truss2[0].setFruits}&setFlowers=${G2Filter2Plant10Truss2[0].setFlowers}&pruningNumber=${G2Filter2Plant10Truss2[0].pruningNumber}&fruitLoad=${G2Filter2Plant10Truss2[0].fruitLoad}&fruitDiameter=${G2Filter2Plant10Truss2[0].fruitDiameter}&pruningFlower=${G2Filter2Plant10Truss2[0].pruneFlowering}&floweringTruss=${G2Filter2Plant10Truss2[0].floweringTrussss}&pruningSet=${G2Filter2Plant10Truss2[0].prunSetting}&settingTruss=${G2Filter2Plant10Truss2[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant10Truss2[0].pruningHar}&harvestTruss=${G2Filter2Plant10Truss2[0].harvestTruss}`;

          console.log("URL : " + url430);

          fetch(url430, { mode: 'no-cors' }).then((response) => {

            if (response.status === 200) {

              if (G2Filter2Plant10Truss3.length) {

                const scriptUrl431 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                const url431 = `${scriptUrl431}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant10Truss3[0].plantNumber}&trussNumber=${G2Filter2Plant10Truss3[0].trussNumber}&setFruits=${G2Filter2Plant10Truss3[0].setFruits}&setFlowers=${G2Filter2Plant10Truss3[0].setFlowers}&pruningNumber=${G2Filter2Plant10Truss3[0].pruningNumber}&fruitLoad=${G2Filter2Plant10Truss3[0].fruitLoad}&fruitDiameter=${G2Filter2Plant10Truss3[0].fruitDiameter}&pruningFlower=${G2Filter2Plant10Truss3[0].pruneFlowering}&floweringTruss=${G2Filter2Plant10Truss3[0].floweringTrussss}&pruningSet=${G2Filter2Plant10Truss3[0].prunSetting}&settingTruss=${G2Filter2Plant10Truss3[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant10Truss3[0].pruningHar}&harvestTruss=${G2Filter2Plant10Truss3[0].harvestTruss}`;

                console.log("URL : " + url431);

                fetch(url431, { mode: 'no-cors' }).then((response) => {

                  if (response.status === 200) {

                    if (G2Filter2Plant10Truss4.length) {

                      const scriptUrl432 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                      const url432 = `${scriptUrl432}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant10Truss4[0].plantNumber}&trussNumber=${G2Filter2Plant10Truss4[0].trussNumber}&setFruits=${G2Filter2Plant10Truss4[0].setFruits}&setFlowers=${G2Filter2Plant10Truss4[0].setFlowers}&pruningNumber=${G2Filter2Plant10Truss4[0].pruningNumber}&fruitLoad=${G2Filter2Plant10Truss4[0].fruitLoad}&fruitDiameter=${G2Filter2Plant10Truss4[0].fruitDiameter}&pruningFlower=${G2Filter2Plant10Truss4[0].pruneFlowering}&floweringTruss=${G2Filter2Plant10Truss4[0].floweringTrussss}&pruningSet=${G2Filter2Plant10Truss4[0].prunSetting}&settingTruss=${G2Filter2Plant10Truss4[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant10Truss4[0].pruningHar}&harvestTruss=${G2Filter2Plant10Truss4[0].harvestTruss}`;

                      console.log("URL : " + url432);

                      fetch(url432, { mode: 'no-cors' }).then((response) => {

                        if (response.status === 200) {

                          if (G2Filter2Plant10Truss5.length) {

                            const scriptUrl433 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                            const url433 = `${scriptUrl433}?
        callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant10Truss5[0].plantNumber}&trussNumber=${G2Filter2Plant10Truss5[0].trussNumber}&setFruits=${G2Filter2Plant10Truss5[0].setFruits}&setFlowers=${G2Filter2Plant10Truss5[0].setFlowers}&pruningNumber=${G2Filter2Plant10Truss5[0].pruningNumber}&fruitLoad=${G2Filter2Plant10Truss5[0].fruitLoad}&fruitDiameter=${G2Filter2Plant10Truss5[0].fruitDiameter}&pruningFlower=${G2Filter2Plant10Truss5[0].pruneFlowering}&floweringTruss=${G2Filter2Plant10Truss5[0].floweringTrussss}&pruningSet=${G2Filter2Plant10Truss5[0].prunSetting}&settingTruss=${G2Filter2Plant10Truss5[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant10Truss5[0].pruningHar}&harvestTruss=${G2Filter2Plant10Truss5[0].harvestTruss}`;

                            console.log("URL : " + url433);

                            fetch(url433, { mode: 'no-cors' }).then((response) => {

                              if (response.status === 200) {

                                if (G2Filter2Plant10Truss6.length) {

                                  const scriptUrl434 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                  const url434 = `${scriptUrl434}?
              callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant10Truss6[0].plantNumber}&trussNumber=${G2Filter2Plant10Truss6[0].trussNumber}&setFruits=${G2Filter2Plant10Truss6[0].setFruits}&setFlowers=${G2Filter2Plant10Truss6[0].setFlowers}&pruningNumber=${G2Filter2Plant10Truss6[0].pruningNumber}&fruitLoad=${G2Filter2Plant10Truss6[0].fruitLoad}&fruitDiameter=${G2Filter2Plant10Truss6[0].fruitDiameter}&pruningFlower=${G2Filter2Plant10Truss6[0].pruneFlowering}&floweringTruss=${G2Filter2Plant10Truss6[0].floweringTrussss}&pruningSet=${G2Filter2Plant10Truss6[0].prunSetting}&settingTruss=${G2Filter2Plant10Truss6[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant10Truss6[0].pruningHar}&harvestTruss=${G2Filter2Plant10Truss6[0].harvestTruss}`;

                                  console.log("URL : " + url434);

                                  fetch(url434, { mode: 'no-cors' }).then((response) => {

                                    if (response.status === 200) {

                                      if (G2Filter2Plant10Truss7.length) {

                                        const scriptUrl435 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                        const url435 = `${scriptUrl435}?
              callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant10Truss7[0].plantNumber}&trussNumber=${G2Filter2Plant10Truss7[0].trussNumber}&setFruits=${G2Filter2Plant10Truss7[0].setFruits}&setFlowers=${G2Filter2Plant10Truss7[0].setFlowers}&pruningNumber=${G2Filter2Plant10Truss7[0].pruningNumber}&fruitLoad=${G2Filter2Plant10Truss7[0].fruitLoad}&fruitDiameter=${G2Filter2Plant10Truss7[0].fruitDiameter}&pruningFlower=${G2Filter2Plant10Truss7[0].pruneFlowering}&floweringTruss=${G2Filter2Plant10Truss7[0].floweringTrussss}&pruningSet=${G2Filter2Plant10Truss7[0].prunSetting}&settingTruss=${G2Filter2Plant10Truss7[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant10Truss7[0].pruningHar}&harvestTruss=${G2Filter2Plant10Truss7[0].harvestTruss}`;

                                        console.log("URL : " + url435);

                                        fetch(url435, { mode: 'no-cors' }).then((response) => {

                                          if (response.status === 200) {

                                            if (G2Filter2Plant10Truss8.length) {

                                              const scriptUrl436 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                              const url436 = `${scriptUrl436}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant10Truss8[0].plantNumber}&trussNumber=${G2Filter2Plant10Truss8[0].trussNumber}&setFruits=${G2Filter2Plant10Truss8[0].setFruits}&setFlowers=${G2Filter2Plant10Truss8[0].setFlowers}&pruningNumber=${G2Filter2Plant10Truss8[0].pruningNumber}&fruitLoad=${G2Filter2Plant10Truss8[0].fruitLoad}&fruitDiameter=${G2Filter2Plant10Truss8[0].fruitDiameter}&pruningFlower=${G2Filter2Plant10Truss8[0].pruneFlowering}&floweringTruss=${G2Filter2Plant10Truss8[0].floweringTrussss}&pruningSet=${G2Filter2Plant10Truss8[0].prunSetting}&settingTruss=${G2Filter2Plant10Truss8[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant10Truss8[0].pruningHar}&harvestTruss=${G2Filter2Plant10Truss8[0].harvestTruss}`;

                                              console.log("URL : " + url436);

                                              fetch(url436, { mode: 'no-cors' }).then((response) => {

                                                if (response.status === 200) {

                                                  if (G2Filter2Plant10Truss9.length) {

                                                    const scriptUrl437 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                    const url437 = `${scriptUrl437}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant10Truss9[0].plantNumber}&trussNumber=${G2Filter2Plant10Truss9[0].trussNumber}&setFruits=${G2Filter2Plant10Truss9[0].setFruits}&setFlowers=${G2Filter2Plant10Truss9[0].setFlowers}&pruningNumber=${G2Filter2Plant10Truss9[0].pruningNumber}&fruitLoad=${G2Filter2Plant10Truss9[0].fruitLoad}&fruitDiameter=${G2Filter2Plant10Truss9[0].fruitDiameter}&pruningFlower=${G2Filter2Plant10Truss9[0].pruneFlowering}&floweringTruss=${G2Filter2Plant10Truss9[0].floweringTrussss}&pruningSet=${G2Filter2Plant10Truss9[0].prunSetting}&settingTruss=${G2Filter2Plant10Truss9[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant10Truss9[0].pruningHar}&harvestTruss=${G2Filter2Plant10Truss9[0].harvestTruss}`;

                                                    console.log("URL : " + url437);

                                                    fetch(url437, { mode: 'no-cors' }).then((response) => {

                                                      if (response.status === 200) {

                                                        if (G2Filter2Plant10Truss0.length) {

                                                          const scriptUrl438 = 'https://script.google.com/macros/s/AKfycbyrhjbdlQyOSiORQG6ATubxi7PM6vZL8oP27EJFewR5LFgTn6fD/exec';
                                                          const url438 = `${scriptUrl438}?
                    callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2Filter2Plant10Truss0[0].plantNumber}&trussNumber=${G2Filter2Plant10Truss0[0].trussNumber}&setFruits=${G2Filter2Plant10Truss0[0].setFruits}&setFlowers=${G2Filter2Plant10Truss0[0].setFlowers}&pruningNumber=${G2Filter2Plant10Truss0[0].pruningNumber}&fruitLoad=${G2Filter2Plant10Truss0[0].fruitLoad}&fruitDiameter=${G2Filter2Plant10Truss0[0].fruitDiameter}&pruningFlower=${G2Filter2Plant10Truss0[0].pruneFlowering}&floweringTruss=${G2Filter2Plant10Truss0[0].floweringTrussss}&pruningSet=${G2Filter2Plant10Truss0[0].prunSetting}&settingTruss=${G2Filter2Plant10Truss0[0].settingTrussNumber}&pruningHarvest=${G2Filter2Plant10Truss0[0].pruningHar}&harvestTruss=${G2Filter2Plant10Truss0[0].harvestTruss}`;

                                                          console.log("URL : " + url438);

                                                          fetch(url438, { mode: 'no-cors' }).then((response) => {

                                                            if (response.status === 200) {

                                                              this.setState({ isLoading: false })
                                                              //ADD FURTHER VARIETIES HERE
                                                          


                                                            } else {

                                                              this.setState({ isLoading: false })
                                                              this.sendRow4Plant10Trusses()

                                                            }

                                                          });

                                                        } else {
                                                          this.setState({ isLoading: false })
                                                          this.sendRow4Plant10Trusses()

                                                        }

                                                      } else {

                                                        this.setState({ isLoading: false })
                                                        this.sendRow4Plant10Trusses()
                                                      }

                                                    });

                                                  } else {
                                                    this.setState({ isLoading: false })
                                                    this.sendRow4Plant10Trusses()

                                                  }

                                                } else {

                                                  this.setState({ isLoading: false })
                                                  this.sendRow4Plant10Trusses()
                                                }
                                              });

                                            } else {
                                              this.setState({ isLoading: false })
                                              this.sendRow4Plant10Trusses()

                                            }

                                          } else {

                                            this.setState({ isLoading: false })
                                            this.sendRow4Plant10Trusses()
                                          }

                                        });

                                      } else {
                                        this.setState({ isLoading: false })
                                        this.sendRow4Plant10Trusses()

                                      }

                                    } else {

                                      this.setState({ isLoading: false })
                                      this.sendRow4Plant10Trusses()
                                    }

                                  });

                                } else {
                                  this.setState({ isLoading: false })
                                  this.sendRow4Plant10Trusses()

                                }

                              } else {

                                this.setState({ isLoading: false })
                                this.sendRow4Plant10Trusses()
                              }

                            });

                          } else {
                            this.setState({ isLoading: false })
                            this.sendRow4Plant10Trusses()

                          }

                        } else {

                          this.setState({ isLoading: false })
                          this.sendRow4Plant10Trusses()
                        }


                      });

                    } else {
                      this.setState({ isLoading: false })
                      this.sendRow4Plant10Trusses()

                    }

                  } else {

                    this.setState({ isLoading: false })
                    this.sendRow4Plant10Trusses()
                  }

                });

              } else {
                this.setState({ isLoading: false })
                this.sendRow4Plant10Trusses()

              }

            } else {

              this.setState({ isLoading: false })
              this.sendRow4Plant10Trusses()
            }

          });

        } else {
          this.setState({ isLoading: false })
          this.sendRow4Plant10Trusses()

        }

      } else {

        this.setState({ isLoading: false })
        this.sendRow4Plant10Trusses()
      }
    });
  }


  sendPlant1 = () => {

    this.setState({ isLoading: true })


    //INITIALIZATION FOR GER 1 - MERLICE ROW 45/46
    let G1filterPlant1 = []
    let G1filterPlant2 = []
    let G1filterPlant3 = []
    let G1filterPlant4 = []
    let G1filterPlant5 = []
    let G1filterPlant6 = []
    let G1filterPlant7 = []
    let G1filterPlant8 = []
    let G1filterPlant9 = []
    let G1filterPlant10 = []
    //ENDS

    if (this.state.plants && this.state.plants.length) {


      //FILTERING GER 1 MERLICE ROW 45/46
      G1filterPlant1 = this.state.plants.filter(sampleItem => {

        return (

          sampleItem.plantName === 'GER 1 - Merlice' &&
          sampleItem.plantRow === '45/46' &&
          sampleItem.plantNumber === 1
        )
      });

      G1filterPlant2 = this.state.plants.filter(sampleItem => {

        return (

          sampleItem.plantName === 'GER 1 - Merlice' &&
          sampleItem.plantRow === '45/46' &&
          sampleItem.plantNumber === 2
        )
      });

      G1filterPlant3 = this.state.plants.filter(sampleItem => {

        return (

          sampleItem.plantName === 'GER 1 - Merlice' &&
          sampleItem.plantRow === '45/46' &&
          sampleItem.plantNumber === 3
        )
      });

      G1filterPlant4 = this.state.plants.filter(sampleItem => {

        return (

          sampleItem.plantName === 'GER 1 - Merlice' &&
          sampleItem.plantRow === '45/46' &&
          sampleItem.plantNumber === 4
        )
      });

      G1filterPlant5 = this.state.plants.filter(sampleItem => {

        return (

          sampleItem.plantName === 'GER 1 - Merlice' &&
          sampleItem.plantRow === '45/46' &&
          sampleItem.plantNumber === 5
        )
      });

      G1filterPlant6 = this.state.plants.filter(sampleItem => {

        return (

          sampleItem.plantName === 'GER 1 - Merlice' &&
          sampleItem.plantRow === '45/46' &&
          sampleItem.plantNumber === 6
        )
      });

      G1filterPlant7 = this.state.plants.filter(sampleItem => {

        return (

          sampleItem.plantName === 'GER 1 - Merlice' &&
          sampleItem.plantRow === '45/46' &&
          sampleItem.plantNumber === 7
        )
      });

      G1filterPlant8 = this.state.plants.filter(sampleItem => {

        return (

          sampleItem.plantName === 'GER 1 - Merlice' &&
          sampleItem.plantRow === '45/46' &&
          sampleItem.plantNumber === 8
        )
      });

      G1filterPlant9 = this.state.plants.filter(sampleItem => {

        return (

          sampleItem.plantName === 'GER 1 - Merlice' &&
          sampleItem.plantRow === '45/46' &&
          sampleItem.plantNumber === 9
        )
      });

      G1filterPlant10 = this.state.plants.filter(sampleItem => {

        return (

          sampleItem.plantName === 'GER 1 - Merlice' &&
          sampleItem.plantRow === '45/46' &&
          sampleItem.plantNumber === 10
        )
      });

      //ENDS

      const scriptUrl1 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
      const url1 = `${scriptUrl1}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filterPlant1[0].plantNumber}&leaves=${G1filterPlant1[0].leavesPerPlant}&fullySetTruss=${G1filterPlant1[0].fullySetTruss}&setTrussLength=${G1filterPlant1[0].setTrussLength}&weeklyGrowth=${G1filterPlant1[0].weeklyGrowth}&flowerHeight=${G1filterPlant1[0].floweringTrussHeight}&leafLength=${G1filterPlant1[0].leafLength}&leafWidth=${G1filterPlant1[0].leafWidth}&stmDia=${G1filterPlant1[0].stmDiameter}&lastWkStmDia=${G1filterPlant1[0].lastWeekStmDiameter}`;

      console.log("URL : " + url1);
      fetch(url1, { mode: 'no-cors' }).then((response) => {

        this.setState({ isLoading: true })

        if (response.status === 200) {

          const scriptUrl2 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
          const url2 = `${scriptUrl2}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filterPlant2[0].plantNumber}&leaves=${G1filterPlant2[0].leavesPerPlant}&fullySetTruss=${G1filterPlant2[0].fullySetTruss}&setTrussLength=${G1filterPlant2[0].setTrussLength}&weeklyGrowth=${G1filterPlant2[0].weeklyGrowth}&flowerHeight=${G1filterPlant2[0].floweringTrussHeight}&leafLength=${G1filterPlant2[0].leafLength}&leafWidth=${G1filterPlant2[0].leafWidth}&stmDia=${G1filterPlant2[0].stmDiameter}&lastWkStmDia=${G1filterPlant2[0].lastWeekStmDiameter}`;

          console.log("URL : " + url2);
          fetch(url2, { mode: 'no-cors' }).then((response) => {

            this.setState({ isLoading: true })

            if (response.status === 200) {


              const scriptUrl3 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
              const url3 = `${scriptUrl3}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filterPlant3[0].plantNumber}&leaves=${G1filterPlant3[0].leavesPerPlant}&fullySetTruss=${G1filterPlant3[0].fullySetTruss}&setTrussLength=${G1filterPlant3[0].setTrussLength}&weeklyGrowth=${G1filterPlant3[0].weeklyGrowth}&flowerHeight=${G1filterPlant3[0].floweringTrussHeight}&leafLength=${G1filterPlant3[0].leafLength}&leafWidth=${G1filterPlant3[0].leafWidth}&stmDia=${G1filterPlant3[0].stmDiameter}&lastWkStmDia=${G1filterPlant3[0].lastWeekStmDiameter}`;

              console.log("URL : " + url3);
              fetch(url3, { mode: 'no-cors' }).then((response) => {

                this.setState({ isLoading: true })

                if (response.status === 200) {

                  const scriptUrl4 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                  const url4 = `${scriptUrl4}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filterPlant4[0].plantNumber}&leaves=${G1filterPlant4[0].leavesPerPlant}&fullySetTruss=${G1filterPlant4[0].fullySetTruss}&setTrussLength=${G1filterPlant4[0].setTrussLength}&weeklyGrowth=${G1filterPlant4[0].weeklyGrowth}&flowerHeight=${G1filterPlant4[0].floweringTrussHeight}&leafLength=${G1filterPlant4[0].leafLength}&leafWidth=${G1filterPlant4[0].leafWidth}&stmDia=${G1filterPlant4[0].stmDiameter}&lastWkStmDia=${G1filterPlant4[0].lastWeekStmDiameter}`;

                  console.log("URL : " + url4);
                  fetch(url4, { mode: 'no-cors' }).then((response) => {

                    this.setState({ isLoading: true })

                    if (response.status === 200) {


                      const scriptUrl5 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                      const url5 = `${scriptUrl5}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filterPlant5[0].plantNumber}&leaves=${G1filterPlant5[0].leavesPerPlant}&fullySetTruss=${G1filterPlant5[0].fullySetTruss}&setTrussLength=${G1filterPlant5[0].setTrussLength}&weeklyGrowth=${G1filterPlant5[0].weeklyGrowth}&flowerHeight=${G1filterPlant5[0].floweringTrussHeight}&leafLength=${G1filterPlant5[0].leafLength}&leafWidth=${G1filterPlant5[0].leafWidth}&stmDia=${G1filterPlant5[0].stmDiameter}&lastWkStmDia=${G1filterPlant5[0].lastWeekStmDiameter}`;

                      console.log("URL : " + url5);
                      fetch(url5, { mode: 'no-cors' }).then((response) => {

                        this.setState({ isLoading: true })

                        if (response.status === 200) {

                          const scriptUrl6 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                          const url6 = `${scriptUrl6}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filterPlant6[0].plantNumber}&leaves=${G1filterPlant6[0].leavesPerPlant}&fullySetTruss=${G1filterPlant6[0].fullySetTruss}&setTrussLength=${G1filterPlant6[0].setTrussLength}&weeklyGrowth=${G1filterPlant6[0].weeklyGrowth}&flowerHeight=${G1filterPlant6[0].floweringTrussHeight}&leafLength=${G1filterPlant6[0].leafLength}&leafWidth=${G1filterPlant6[0].leafWidth}&stmDia=${G1filterPlant6[0].stmDiameter}&lastWkStmDia=${G1filterPlant6[0].lastWeekStmDiameter}`;

                          console.log("URL : " + url6);
                          fetch(url6, { mode: 'no-cors' }).then((response) => {

                            this.setState({ isLoading: true })

                            if (response.status === 200) {


                              const scriptUrl7 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                              const url7 = `${scriptUrl7}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filterPlant7[0].plantNumber}&leaves=${G1filterPlant7[0].leavesPerPlant}&fullySetTruss=${G1filterPlant7[0].fullySetTruss}&setTrussLength=${G1filterPlant7[0].setTrussLength}&weeklyGrowth=${G1filterPlant7[0].weeklyGrowth}&flowerHeight=${G1filterPlant7[0].floweringTrussHeight}&leafLength=${G1filterPlant7[0].leafLength}&leafWidth=${G1filterPlant7[0].leafWidth}&stmDia=${G1filterPlant7[0].stmDiameter}&lastWkStmDia=${G1filterPlant7[0].lastWeekStmDiameter}`;

                              console.log("URL : " + url7);
                              fetch(url7, { mode: 'no-cors' }).then((response) => {

                                this.setState({ isLoading: true })

                                if (response.status === 200) {


                                  const scriptUrl8 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                                  const url8 = `${scriptUrl8}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filterPlant8[0].plantNumber}&leaves=${G1filterPlant8[0].leavesPerPlant}&fullySetTruss=${G1filterPlant8[0].fullySetTruss}&setTrussLength=${G1filterPlant8[0].setTrussLength}&weeklyGrowth=${G1filterPlant8[0].weeklyGrowth}&flowerHeight=${G1filterPlant8[0].floweringTrussHeight}&leafLength=${G1filterPlant8[0].leafLength}&leafWidth=${G1filterPlant8[0].leafWidth}&stmDia=${G1filterPlant8[0].stmDiameter}&lastWkStmDia=${G1filterPlant8[0].lastWeekStmDiameter}`;

                                  console.log("URL : " + url8);
                                  fetch(url8, { mode: 'no-cors' }).then((response) => {

                                    this.setState({ isLoading: true })

                                    if (response.status === 200) {


                                      const scriptUrl9 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                                      const url9 = `${scriptUrl9}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filterPlant9[0].plantNumber}&leaves=${G1filterPlant9[0].leavesPerPlant}&fullySetTruss=${G1filterPlant9[0].fullySetTruss}&setTrussLength=${G1filterPlant9[0].setTrussLength}&weeklyGrowth=${G1filterPlant9[0].weeklyGrowth}&flowerHeight=${G1filterPlant9[0].floweringTrussHeight}&leafLength=${G1filterPlant9[0].leafLength}&leafWidth=${G1filterPlant9[0].leafWidth}&stmDia=${G1filterPlant9[0].stmDiameter}&lastWkStmDia=${G1filterPlant9[0].lastWeekStmDiameter}`;

                                      console.log("URL : " + url9);
                                      fetch(url9, { mode: 'no-cors' }).then((response) => {

                                        this.setState({ isLoading: true })

                                        if (response.status === 200) {

                                          const scriptUrl0 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                                          const url0 = `${scriptUrl0}?
callback=ctrlq&plantRow=${'45/46'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filterPlant10[0].plantNumber}&leaves=${G1filterPlant10[0].leavesPerPlant}&fullySetTruss=${G1filterPlant10[0].fullySetTruss}&setTrussLength=${G1filterPlant10[0].setTrussLength}&weeklyGrowth=${G1filterPlant10[0].weeklyGrowth}&flowerHeight=${G1filterPlant10[0].floweringTrussHeight}&leafLength=${G1filterPlant10[0].leafLength}&leafWidth=${G1filterPlant10[0].leafWidth}&stmDia=${G1filterPlant10[0].stmDiameter}&lastWkStmDia=${G1filterPlant10[0].lastWeekStmDiameter}`;

                                          console.log("URL : " + url0);
                                          fetch(url0, { mode: 'no-cors' }).then((response) => {

                                            this.setState({ isLoading: true })

                                            if (response.status === 200) {

                                              this.setState({ isLoading: false })

                                              this.sendPlant2();
                                            }
                                          });

                                        }
                                      });

                                    }
                                  });

                                }
                              });

                            }
                          });

                        }
                      });

                    }
                  });

                }
              });

            }
          });

        }
      });






    }

  }


  sendPlant2 = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION FOR GER 1 - MERLICE ROW 85/86
    let G1filter2Plant1 = []
    let G1filter2Plant2 = []
    let G1filter2Plant3 = []
    let G1filter2Plant4 = []
    let G1filter2Plant5 = []
    let G1filter2Plant6 = []
    let G1filter2Plant7 = []
    let G1filter2Plant8 = []
    let G1filter2Plant9 = []
    let G1filter2Plant10 = []
    //ENDS

    //FILTERING GER 1 MERLICE ROW 85/86

    G1filter2Plant1 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 1 - Merlice' &&
        sampleItem.plantRow === '85/86' &&
        sampleItem.plantNumber === 1
      )
    });

    G1filter2Plant2 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 1 - Merlice' &&
        sampleItem.plantRow === '85/86' &&
        sampleItem.plantNumber === 2
      )
    });

    G1filter2Plant3 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 1 - Merlice' &&
        sampleItem.plantRow === '85/86' &&
        sampleItem.plantNumber === 3
      )
    });

    G1filter2Plant4 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 1 - Merlice' &&
        sampleItem.plantRow === '85/86' &&
        sampleItem.plantNumber === 4
      )
    });

    G1filter2Plant5 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 1 - Merlice' &&
        sampleItem.plantRow === '85/86' &&
        sampleItem.plantNumber === 5
      )
    });

    G1filter2Plant6 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 1 - Merlice' &&
        sampleItem.plantRow === '85/86' &&
        sampleItem.plantNumber === 6
      )
    });

    G1filter2Plant7 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 1 - Merlice' &&
        sampleItem.plantRow === '85/86' &&
        sampleItem.plantNumber === 7
      )
    });

    G1filter2Plant8 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 1 - Merlice' &&
        sampleItem.plantRow === '85/86' &&
        sampleItem.plantNumber === 8
      )
    });

    G1filter2Plant9 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 1 - Merlice' &&
        sampleItem.plantRow === '85/86' &&
        sampleItem.plantNumber === 9
      )
    });

    G1filter2Plant10 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 1 - Merlice' &&
        sampleItem.plantRow === '85/86' &&
        sampleItem.plantNumber === 10
      )
    });

    //ENDS

    const scriptUrl11 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
    const url11 = `${scriptUrl11}?
callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filter2Plant1[0].plantNumber}&leaves=${G1filter2Plant1[0].leavesPerPlant}&fullySetTruss=${G1filter2Plant1[0].fullySetTruss}&setTrussLength=${G1filter2Plant1[0].setTrussLength}&weeklyGrowth=${G1filter2Plant1[0].weeklyGrowth}&flowerHeight=${G1filter2Plant1[0].floweringTrussHeight}&leafLength=${G1filter2Plant1[0].leafLength}&leafWidth=${G1filter2Plant1[0].leafWidth}&stmDia=${G1filter2Plant1[0].stmDiameter}&lastWkStmDia=${G1filter2Plant1[0].lastWeekStmDiameter}`;

    console.log("URL : " + url11);
    fetch(url11, { mode: 'no-cors' }).then((response) => {

      this.setState({ isLoading: true })

      if (response.status === 200) {


        const scriptUrl12 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
        const url12 = `${scriptUrl12}?
callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filter2Plant2[0].plantNumber}&leaves=${G1filter2Plant2[0].leavesPerPlant}&fullySetTruss=${G1filter2Plant2[0].fullySetTruss}&setTrussLength=${G1filter2Plant2[0].setTrussLength}&weeklyGrowth=${G1filter2Plant2[0].weeklyGrowth}&flowerHeight=${G1filter2Plant2[0].floweringTrussHeight}&leafLength=${G1filter2Plant2[0].leafLength}&leafWidth=${G1filter2Plant2[0].leafWidth}&stmDia=${G1filter2Plant2[0].stmDiameter}&lastWkStmDia=${G1filter2Plant2[0].lastWeekStmDiameter}`;

        console.log("URL : " + url12);
        fetch(url12, { mode: 'no-cors' }).then((response) => {

          this.setState({ isLoading: true })

          if (response.status === 200) {

            const scriptUrl13 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
            const url13 = `${scriptUrl13}?
callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filter2Plant3[0].plantNumber}&leaves=${G1filter2Plant3[0].leavesPerPlant}&fullySetTruss=${G1filter2Plant3[0].fullySetTruss}&setTrussLength=${G1filter2Plant3[0].setTrussLength}&weeklyGrowth=${G1filter2Plant3[0].weeklyGrowth}&flowerHeight=${G1filter2Plant3[0].floweringTrussHeight}&leafLength=${G1filter2Plant3[0].leafLength}&leafWidth=${G1filter2Plant3[0].leafWidth}&stmDia=${G1filter2Plant3[0].stmDiameter}&lastWkStmDia=${G1filter2Plant3[0].lastWeekStmDiameter}`;

            console.log("URL : " + url13);
            fetch(url13, { mode: 'no-cors' }).then((response) => {

              this.setState({ isLoading: true })

              if (response.status === 200) {


                const scriptUrl14 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                const url14 = `${scriptUrl14}?
callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filter2Plant4[0].plantNumber}&leaves=${G1filter2Plant4[0].leavesPerPlant}&fullySetTruss=${G1filter2Plant4[0].fullySetTruss}&setTrussLength=${G1filter2Plant4[0].setTrussLength}&weeklyGrowth=${G1filter2Plant4[0].weeklyGrowth}&flowerHeight=${G1filter2Plant4[0].floweringTrussHeight}&leafLength=${G1filter2Plant4[0].leafLength}&leafWidth=${G1filter2Plant4[0].leafWidth}&stmDia=${G1filter2Plant4[0].stmDiameter}&lastWkStmDia=${G1filter2Plant4[0].lastWeekStmDiameter}`;

                console.log("URL : " + url14);
                fetch(url14, { mode: 'no-cors' }).then((response) => {

                  this.setState({ isLoading: true })

                  if (response.status === 200) {


                    const scriptUrl15 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                    const url15 = `${scriptUrl15}?
callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filter2Plant5[0].plantNumber}&leaves=${G1filter2Plant5[0].leavesPerPlant}&fullySetTruss=${G1filter2Plant5[0].fullySetTruss}&setTrussLength=${G1filter2Plant5[0].setTrussLength}&weeklyGrowth=${G1filter2Plant5[0].weeklyGrowth}&flowerHeight=${G1filter2Plant5[0].floweringTrussHeight}&leafLength=${G1filter2Plant5[0].leafLength}&leafWidth=${G1filter2Plant5[0].leafWidth}&stmDia=${G1filter2Plant5[0].stmDiameter}&lastWkStmDia=${G1filter2Plant5[0].lastWeekStmDiameter}`;

                    console.log("URL : " + url15);
                    fetch(url15, { mode: 'no-cors' }).then((response) => {

                      this.setState({ isLoading: true })

                      if (response.status === 200) {

                        const scriptUrl16 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                        const url16 = `${scriptUrl16}?
callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filter2Plant6[0].plantNumber}&leaves=${G1filter2Plant6[0].leavesPerPlant}&fullySetTruss=${G1filter2Plant6[0].fullySetTruss}&setTrussLength=${G1filter2Plant6[0].setTrussLength}&weeklyGrowth=${G1filter2Plant6[0].weeklyGrowth}&flowerHeight=${G1filter2Plant6[0].floweringTrussHeight}&leafLength=${G1filter2Plant6[0].leafLength}&leafWidth=${G1filter2Plant6[0].leafWidth}&stmDia=${G1filter2Plant6[0].stmDiameter}&lastWkStmDia=${G1filter2Plant6[0].lastWeekStmDiameter}`;

                        console.log("URL : " + url16);
                        fetch(url16, { mode: 'no-cors' }).then((response) => {

                          this.setState({ isLoading: true })

                          if (response.status === 200) {

                            const scriptUrl17 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                            const url17 = `${scriptUrl17}?
callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filter2Plant7[0].plantNumber}&leaves=${G1filter2Plant7[0].leavesPerPlant}&fullySetTruss=${G1filter2Plant7[0].fullySetTruss}&setTrussLength=${G1filter2Plant7[0].setTrussLength}&weeklyGrowth=${G1filter2Plant7[0].weeklyGrowth}&flowerHeight=${G1filter2Plant7[0].floweringTrussHeight}&leafLength=${G1filter2Plant7[0].leafLength}&leafWidth=${G1filter2Plant7[0].leafWidth}&stmDia=${G1filter2Plant7[0].stmDiameter}&lastWkStmDia=${G1filter2Plant7[0].lastWeekStmDiameter}`;

                            console.log("URL : " + url17);
                            fetch(url17, { mode: 'no-cors' }).then((response) => {

                              this.setState({ isLoading: true })

                              if (response.status === 200) {



                                const scriptUrl18 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                                const url18 = `${scriptUrl18}?
callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filter2Plant8[0].plantNumber}&leaves=${G1filter2Plant8[0].leavesPerPlant}&fullySetTruss=${G1filter2Plant8[0].fullySetTruss}&setTrussLength=${G1filter2Plant8[0].setTrussLength}&weeklyGrowth=${G1filter2Plant8[0].weeklyGrowth}&flowerHeight=${G1filter2Plant8[0].floweringTrussHeight}&leafLength=${G1filter2Plant8[0].leafLength}&leafWidth=${G1filter2Plant8[0].leafWidth}&stmDia=${G1filter2Plant8[0].stmDiameter}&lastWkStmDia=${G1filter2Plant8[0].lastWeekStmDiameter}`;

                                console.log("URL : " + url18);
                                fetch(url18, { mode: 'no-cors' }).then((response) => {

                                  this.setState({ isLoading: true })

                                  if (response.status === 200) {


                                    const scriptUrl19 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                                    const url19 = `${scriptUrl19}?
callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filter2Plant9[0].plantNumber}&leaves=${G1filter2Plant9[0].leavesPerPlant}&fullySetTruss=${G1filter2Plant9[0].fullySetTruss}&setTrussLength=${G1filter2Plant9[0].setTrussLength}&weeklyGrowth=${G1filter2Plant9[0].weeklyGrowth}&flowerHeight=${G1filter2Plant9[0].floweringTrussHeight}&leafLength=${G1filter2Plant9[0].leafLength}&leafWidth=${G1filter2Plant9[0].leafWidth}&stmDia=${G1filter2Plant9[0].stmDiameter}&lastWkStmDia=${G1filter2Plant9[0].lastWeekStmDiameter}`;

                                    console.log("URL : " + url19);
                                    fetch(url19, { mode: 'no-cors' }).then((response) => {

                                      this.setState({ isLoading: true })

                                      if (response.status === 200) {

                                        const scriptUrl19 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                                        const url19 = `${scriptUrl19}?
callback=ctrlq&plantRow=${'85/86'}&plantName=${'GER 1 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G1filter2Plant10[0].plantNumber}&leaves=${G1filter2Plant10[0].leavesPerPlant}&fullySetTruss=${G1filter2Plant10[0].fullySetTruss}&setTrussLength=${G1filter2Plant10[0].setTrussLength}&weeklyGrowth=${G1filter2Plant10[0].weeklyGrowth}&flowerHeight=${G1filter2Plant10[0].floweringTrussHeight}&leafLength=${G1filter2Plant10[0].leafLength}&leafWidth=${G1filter2Plant10[0].leafWidth}&stmDia=${G1filter2Plant10[0].stmDiameter}&lastWkStmDia=${G1filter2Plant10[0].lastWeekStmDiameter}`;

                                        console.log("URL : " + url19);
                                        fetch(url19, { mode: 'no-cors' }).then((response) => {

                                          this.setState({ isLoading: true })

                                          if (response.status === 200) {

                                            this.setState({ isLoading: false })

                                            this.sendPlant3();
                                          }
                                        });

                                      }
                                    });

                                  }
                                });

                              }
                            });

                          }
                        });

                      }
                    });

                  }
                });

              }
            });

          }
        });

      }
    });


  }

  sendPlant3 = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION FOR GER 2 - MERLICE ROW 70/71
    let G2filter3Plant1 = []
    let G2filter3Plant2 = []
    let G2filter3Plant3 = []
    let G2filter3Plant4 = []
    let G2filter3Plant5 = []
    let G2filter3Plant6 = []
    let G2filter3Plant7 = []
    let G2filter3Plant8 = []
    let G2filter3Plant9 = []
    let G2filter3Plant10 = []
    //ENDS

    //FILTERING GER 2 MERLICE ROW 70/71

    G2filter3Plant1 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '70/71' &&
        sampleItem.plantNumber === 1
      )
    });

    G2filter3Plant2 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '70/71' &&
        sampleItem.plantNumber === 2
      )
    });

    G2filter3Plant3 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '70/71' &&
        sampleItem.plantNumber === 3
      )
    });

    G2filter3Plant4 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '70/71' &&
        sampleItem.plantNumber === 4
      )
    });

    G2filter3Plant5 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '70/71' &&
        sampleItem.plantNumber === 5
      )
    });

    G2filter3Plant6 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '70/71' &&
        sampleItem.plantNumber === 6
      )
    });

    G2filter3Plant7 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '70/71' &&
        sampleItem.plantNumber === 7
      )
    });

    G2filter3Plant8 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '70/71' &&
        sampleItem.plantNumber === 8
      )
    });

    G2filter3Plant9 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '70/71' &&
        sampleItem.plantNumber === 9
      )
    });

    G2filter3Plant10 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '70/71' &&
        sampleItem.plantNumber === 10
      )
    });

    //ENDS

    const scriptUrl39 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
    const url39 = `${scriptUrl39}?
callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter3Plant1[0].plantNumber}&leaves=${G2filter3Plant1[0].leavesPerPlant}&fullySetTruss=${G2filter3Plant1[0].fullySetTruss}&setTrussLength=${G2filter3Plant1[0].setTrussLength}&weeklyGrowth=${G2filter3Plant1[0].weeklyGrowth}&flowerHeight=${G2filter3Plant1[0].floweringTrussHeight}&leafLength=${G2filter3Plant1[0].leafLength}&leafWidth=${G2filter3Plant1[0].leafWidth}&stmDia=${G2filter3Plant1[0].stmDiameter}&lastWkStmDia=${G2filter3Plant1[0].lastWeekStmDiameter}`;

    console.log("URL : " + url39);
    fetch(url39, { mode: 'no-cors' }).then((response) => {

      this.setState({ isLoading: true })

      if (response.status === 200) {

        const scriptUrl40 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
        const url40 = `${scriptUrl40}?
callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter3Plant2[0].plantNumber}&leaves=${G2filter3Plant2[0].leavesPerPlant}&fullySetTruss=${G2filter3Plant2[0].fullySetTruss}&setTrussLength=${G2filter3Plant2[0].setTrussLength}&weeklyGrowth=${G2filter3Plant2[0].weeklyGrowth}&flowerHeight=${G2filter3Plant2[0].floweringTrussHeight}&leafLength=${G2filter3Plant2[0].leafLength}&leafWidth=${G2filter3Plant2[0].leafWidth}&stmDia=${G2filter3Plant2[0].stmDiameter}&lastWkStmDia=${G2filter3Plant2[0].lastWeekStmDiameter}`;

        console.log("URL : " + url40);
        fetch(url40, { mode: 'no-cors' }).then((response) => {

          this.setState({ isLoading: true })

          if (response.status === 200) {

            const scriptUrl41 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
            const url41 = `${scriptUrl41}?
callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter3Plant3[0].plantNumber}&leaves=${G2filter3Plant3[0].leavesPerPlant}&fullySetTruss=${G2filter3Plant3[0].fullySetTruss}&setTrussLength=${G2filter3Plant3[0].setTrussLength}&weeklyGrowth=${G2filter3Plant3[0].weeklyGrowth}&flowerHeight=${G2filter3Plant3[0].floweringTrussHeight}&leafLength=${G2filter3Plant3[0].leafLength}&leafWidth=${G2filter3Plant3[0].leafWidth}&stmDia=${G2filter3Plant3[0].stmDiameter}&lastWkStmDia=${G2filter3Plant3[0].lastWeekStmDiameter}`;

            console.log("URL : " + url41);
            fetch(url41, { mode: 'no-cors' }).then((response) => {

              this.setState({ isLoading: true })

              if (response.status === 200) {

                const scriptUrl42 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                const url42 = `${scriptUrl42}?
callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter3Plant4[0].plantNumber}&leaves=${G2filter3Plant4[0].leavesPerPlant}&fullySetTruss=${G2filter3Plant4[0].fullySetTruss}&setTrussLength=${G2filter3Plant4[0].setTrussLength}&weeklyGrowth=${G2filter3Plant4[0].weeklyGrowth}&flowerHeight=${G2filter3Plant4[0].floweringTrussHeight}&leafLength=${G2filter3Plant4[0].leafLength}&leafWidth=${G2filter3Plant4[0].leafWidth}&stmDia=${G2filter3Plant4[0].stmDiameter}&lastWkStmDia=${G2filter3Plant4[0].lastWeekStmDiameter}`;

                console.log("URL : " + url42);
                fetch(url42, { mode: 'no-cors' }).then((response) => {

                  this.setState({ isLoading: true })

                  if (response.status === 200) {

                    const scriptUrl43 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                    const url43 = `${scriptUrl43}?
callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter3Plant5[0].plantNumber}&leaves=${G2filter3Plant5[0].leavesPerPlant}&fullySetTruss=${G2filter3Plant5[0].fullySetTruss}&setTrussLength=${G2filter3Plant5[0].setTrussLength}&weeklyGrowth=${G2filter3Plant5[0].weeklyGrowth}&flowerHeight=${G2filter3Plant5[0].floweringTrussHeight}&leafLength=${G2filter3Plant5[0].leafLength}&leafWidth=${G2filter3Plant5[0].leafWidth}&stmDia=${G2filter3Plant5[0].stmDiameter}&lastWkStmDia=${G2filter3Plant5[0].lastWeekStmDiameter}`;

                    console.log("URL : " + url43);
                    fetch(url43, { mode: 'no-cors' }).then((response) => {

                      this.setState({ isLoading: true })

                      if (response.status === 200) {

                        const scriptUrl44 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                        const url44 = `${scriptUrl44}?
callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter3Plant6[0].plantNumber}&leaves=${G2filter3Plant6[0].leavesPerPlant}&fullySetTruss=${G2filter3Plant6[0].fullySetTruss}&setTrussLength=${G2filter3Plant6[0].setTrussLength}&weeklyGrowth=${G2filter3Plant6[0].weeklyGrowth}&flowerHeight=${G2filter3Plant6[0].floweringTrussHeight}&leafLength=${G2filter3Plant6[0].leafLength}&leafWidth=${G2filter3Plant6[0].leafWidth}&stmDia=${G2filter3Plant6[0].stmDiameter}&lastWkStmDia=${G2filter3Plant6[0].lastWeekStmDiameter}`;

                        console.log("URL : " + url44);
                        fetch(url44, { mode: 'no-cors' }).then((response) => {

                          this.setState({ isLoading: true })

                          if (response.status === 200) {

                            const scriptUrl45 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                            const url45 = `${scriptUrl45}?
callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter3Plant7[0].plantNumber}&leaves=${G2filter3Plant7[0].leavesPerPlant}&fullySetTruss=${G2filter3Plant7[0].fullySetTruss}&setTrussLength=${G2filter3Plant7[0].setTrussLength}&weeklyGrowth=${G2filter3Plant7[0].weeklyGrowth}&flowerHeight=${G2filter3Plant7[0].floweringTrussHeight}&leafLength=${G2filter3Plant7[0].leafLength}&leafWidth=${G2filter3Plant7[0].leafWidth}&stmDia=${G2filter3Plant7[0].stmDiameter}&lastWkStmDia=${G2filter3Plant7[0].lastWeekStmDiameter}`;

                            console.log("URL : " + url45);
                            fetch(url45, { mode: 'no-cors' }).then((response) => {

                              this.setState({ isLoading: true })

                              if (response.status === 200) {

                                const scriptUrl46 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                                const url46 = `${scriptUrl46}?
callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter3Plant8[0].plantNumber}&leaves=${G2filter3Plant8[0].leavesPerPlant}&fullySetTruss=${G2filter3Plant8[0].fullySetTruss}&setTrussLength=${G2filter3Plant8[0].setTrussLength}&weeklyGrowth=${G2filter3Plant8[0].weeklyGrowth}&flowerHeight=${G2filter3Plant8[0].floweringTrussHeight}&leafLength=${G2filter3Plant8[0].leafLength}&leafWidth=${G2filter3Plant8[0].leafWidth}&stmDia=${G2filter3Plant8[0].stmDiameter}&lastWkStmDia=${G2filter3Plant8[0].lastWeekStmDiameter}`;

                                console.log("URL : " + url46);
                                fetch(url46, { mode: 'no-cors' }).then((response) => {

                                  this.setState({ isLoading: true })

                                  if (response.status === 200) {

                                    const scriptUrl47 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                                    const url47 = `${scriptUrl47}?
callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter3Plant9[0].plantNumber}&leaves=${G2filter3Plant9[0].leavesPerPlant}&fullySetTruss=${G2filter3Plant9[0].fullySetTruss}&setTrussLength=${G2filter3Plant9[0].setTrussLength}&weeklyGrowth=${G2filter3Plant9[0].weeklyGrowth}&flowerHeight=${G2filter3Plant9[0].floweringTrussHeight}&leafLength=${G2filter3Plant9[0].leafLength}&leafWidth=${G2filter3Plant9[0].leafWidth}&stmDia=${G2filter3Plant9[0].stmDiameter}&lastWkStmDia=${G2filter3Plant9[0].lastWeekStmDiameter}`;

                                    console.log("URL : " + url47);
                                    fetch(url47, { mode: 'no-cors' }).then((response) => {

                                      this.setState({ isLoading: true })

                                      if (response.status === 200) {

                                        const scriptUrl48 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                                        const url48 = `${scriptUrl48}?
callback=ctrlq&plantRow=${'70/71'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter3Plant10[0].plantNumber}&leaves=${G2filter3Plant10[0].leavesPerPlant}&fullySetTruss=${G2filter3Plant10[0].fullySetTruss}&setTrussLength=${G2filter3Plant10[0].setTrussLength}&weeklyGrowth=${G2filter3Plant10[0].weeklyGrowth}&flowerHeight=${G2filter3Plant10[0].floweringTrussHeight}&leafLength=${G2filter3Plant10[0].leafLength}&leafWidth=${G2filter3Plant10[0].leafWidth}&stmDia=${G2filter3Plant10[0].stmDiameter}&lastWkStmDia=${G2filter3Plant10[0].lastWeekStmDiameter}`;

                                        console.log("URL : " + url48);
                                        fetch(url48, { mode: 'no-cors' }).then((response) => {

                                          this.setState({ isLoading: true })

                                          if (response.status === 200) {

                                            this.setState({ isLoading: false })

                                            this.sendPlant4();
                                          }
                                        });

                                      }
                                    });

                                  }
                                });

                              }
                            });

                          }
                        });

                      }
                    });

                  }
                });

              }
            });

          }
        });

      }
    });





  }

  sendPlant4 = () => {

    this.setState({ isLoading: true })

    //INITIALIZATION FOR GER 2 - MERLICE ROW 114/115
    let G2filter4Plant1 = []
    let G2filter4Plant2 = []
    let G2filter4Plant3 = []
    let G2filter4Plant4 = []
    let G2filter4Plant5 = []
    let G2filter4Plant6 = []
    let G2filter4Plant7 = []
    let G2filter4Plant8 = []
    let G2filter4Plant9 = []
    let G2filter4Plant10 = []
    //ENDS

    //FILTERING GER 2 MERLICE ROW 114/115

    G2filter4Plant1 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '114/115' &&
        sampleItem.plantNumber === 1
      )
    });

    G2filter4Plant2 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '114/115' &&
        sampleItem.plantNumber === 2
      )
    });

    G2filter4Plant3 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '114/115' &&
        sampleItem.plantNumber === 3
      )
    });

    G2filter4Plant4 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '114/115' &&
        sampleItem.plantNumber === 4
      )
    });

    G2filter4Plant5 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '114/115' &&
        sampleItem.plantNumber === 5
      )
    });

    G2filter4Plant6 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '114/115' &&
        sampleItem.plantNumber === 6
      )
    });

    G2filter4Plant7 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '114/115' &&
        sampleItem.plantNumber === 7
      )
    });

    G2filter4Plant8 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '114/115' &&
        sampleItem.plantNumber === 8
      )
    });

    G2filter4Plant9 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '114/115' &&
        sampleItem.plantNumber === 9
      )
    });

    G2filter4Plant10 = this.state.plants.filter(sampleItem => {

      return (

        sampleItem.plantName === 'GER 2 - Merlice' &&
        sampleItem.plantRow === '114/115' &&
        sampleItem.plantNumber === 10
      )
    });

    //END

    const scriptUrl49 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
    const url49 = `${scriptUrl49}?
callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter4Plant1[0].plantNumber}&leaves=${G2filter4Plant1[0].leavesPerPlant}&fullySetTruss=${G2filter4Plant1[0].fullySetTruss}&setTrussLength=${G2filter4Plant1[0].setTrussLength}&weeklyGrowth=${G2filter4Plant1[0].weeklyGrowth}&flowerHeight=${G2filter4Plant1[0].floweringTrussHeight}&leafLength=${G2filter4Plant1[0].leafLength}&leafWidth=${G2filter4Plant1[0].leafWidth}&stmDia=${G2filter4Plant1[0].stmDiameter}&lastWkStmDia=${G2filter4Plant1[0].lastWeekStmDiameter}`;

    console.log("URL : " + url49);
    fetch(url49, { mode: 'no-cors' }).then((response) => {

      this.setState({ isLoading: true })

      if (response.status === 200) {

        const scriptUrl50 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
        const url50 = `${scriptUrl50}?
callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter4Plant2[0].plantNumber}&leaves=${G2filter4Plant2[0].leavesPerPlant}&fullySetTruss=${G2filter4Plant2[0].fullySetTruss}&setTrussLength=${G2filter4Plant2[0].setTrussLength}&weeklyGrowth=${G2filter4Plant2[0].weeklyGrowth}&flowerHeight=${G2filter4Plant2[0].floweringTrussHeight}&leafLength=${G2filter4Plant2[0].leafLength}&leafWidth=${G2filter4Plant2[0].leafWidth}&stmDia=${G2filter4Plant2[0].stmDiameter}&lastWkStmDia=${G2filter4Plant2[0].lastWeekStmDiameter}`;

        console.log("URL : " + url50);
        fetch(url50, { mode: 'no-cors' }).then((response) => {

          this.setState({ isLoading: true })

          if (response.status === 200) {

            const scriptUrl51 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
            const url51 = `${scriptUrl51}?
callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter4Plant3[0].plantNumber}&leaves=${G2filter4Plant3[0].leavesPerPlant}&fullySetTruss=${G2filter4Plant3[0].fullySetTruss}&setTrussLength=${G2filter4Plant3[0].setTrussLength}&weeklyGrowth=${G2filter4Plant3[0].weeklyGrowth}&flowerHeight=${G2filter4Plant3[0].floweringTrussHeight}&leafLength=${G2filter4Plant3[0].leafLength}&leafWidth=${G2filter4Plant3[0].leafWidth}&stmDia=${G2filter4Plant3[0].stmDiameter}&lastWkStmDia=${G2filter4Plant3[0].lastWeekStmDiameter}`;

            console.log("URL : " + url51);
            fetch(url51, { mode: 'no-cors' }).then((response) => {

              this.setState({ isLoading: true })

              if (response.status === 200) {

                const scriptUrl52 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                const url52 = `${scriptUrl52}?
callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter4Plant4[0].plantNumber}&leaves=${G2filter4Plant4[0].leavesPerPlant}&fullySetTruss=${G2filter4Plant4[0].fullySetTruss}&setTrussLength=${G2filter4Plant4[0].setTrussLength}&weeklyGrowth=${G2filter4Plant4[0].weeklyGrowth}&flowerHeight=${G2filter4Plant4[0].floweringTrussHeight}&leafLength=${G2filter4Plant4[0].leafLength}&leafWidth=${G2filter4Plant4[0].leafWidth}&stmDia=${G2filter4Plant4[0].stmDiameter}&lastWkStmDia=${G2filter4Plant4[0].lastWeekStmDiameter}`;

                console.log("URL : " + url52);
                fetch(url52, { mode: 'no-cors' }).then((response) => {

                  this.setState({ isLoading: true })

                  if (response.status === 200) {

                    const scriptUrl53 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                    const url53 = `${scriptUrl53}?
callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter4Plant5[0].plantNumber}&leaves=${G2filter4Plant5[0].leavesPerPlant}&fullySetTruss=${G2filter4Plant5[0].fullySetTruss}&setTrussLength=${G2filter4Plant5[0].setTrussLength}&weeklyGrowth=${G2filter4Plant5[0].weeklyGrowth}&flowerHeight=${G2filter4Plant5[0].floweringTrussHeight}&leafLength=${G2filter4Plant5[0].leafLength}&leafWidth=${G2filter4Plant5[0].leafWidth}&stmDia=${G2filter4Plant5[0].stmDiameter}&lastWkStmDia=${G2filter4Plant5[0].lastWeekStmDiameter}`;

                    console.log("URL : " + url53);
                    fetch(url53, { mode: 'no-cors' }).then((response) => {

                      this.setState({ isLoading: true })

                      if (response.status === 200) {

                        const scriptUrl54 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                        const url54 = `${scriptUrl54}?
callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter4Plant6[0].plantNumber}&leaves=${G2filter4Plant6[0].leavesPerPlant}&fullySetTruss=${G2filter4Plant6[0].fullySetTruss}&setTrussLength=${G2filter4Plant6[0].setTrussLength}&weeklyGrowth=${G2filter4Plant6[0].weeklyGrowth}&flowerHeight=${G2filter4Plant6[0].floweringTrussHeight}&leafLength=${G2filter4Plant6[0].leafLength}&leafWidth=${G2filter4Plant6[0].leafWidth}&stmDia=${G2filter4Plant6[0].stmDiameter}&lastWkStmDia=${G2filter4Plant6[0].lastWeekStmDiameter}`;

                        console.log("URL : " + url54);
                        fetch(url54, { mode: 'no-cors' }).then((response) => {

                          this.setState({ isLoading: true })

                          if (response.status === 200) {

                            const scriptUrl55 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                            const url55 = `${scriptUrl55}?
callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter4Plant7[0].plantNumber}&leaves=${G2filter4Plant7[0].leavesPerPlant}&fullySetTruss=${G2filter4Plant7[0].fullySetTruss}&setTrussLength=${G2filter4Plant7[0].setTrussLength}&weeklyGrowth=${G2filter4Plant7[0].weeklyGrowth}&flowerHeight=${G2filter4Plant7[0].floweringTrussHeight}&leafLength=${G2filter4Plant7[0].leafLength}&leafWidth=${G2filter4Plant7[0].leafWidth}&stmDia=${G2filter4Plant7[0].stmDiameter}&lastWkStmDia=${G2filter4Plant7[0].lastWeekStmDiameter}`;

                            console.log("URL : " + url55);
                            fetch(url55, { mode: 'no-cors' }).then((response) => {

                              this.setState({ isLoading: true })

                              if (response.status === 200) {

                                const scriptUrl56 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                                const url56 = `${scriptUrl56}?
callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter4Plant8[0].plantNumber}&leaves=${G2filter4Plant8[0].leavesPerPlant}&fullySetTruss=${G2filter4Plant8[0].fullySetTruss}&setTrussLength=${G2filter4Plant8[0].setTrussLength}&weeklyGrowth=${G2filter4Plant8[0].weeklyGrowth}&flowerHeight=${G2filter4Plant8[0].floweringTrussHeight}&leafLength=${G2filter4Plant8[0].leafLength}&leafWidth=${G2filter4Plant8[0].leafWidth}&stmDia=${G2filter4Plant8[0].stmDiameter}&lastWkStmDia=${G2filter4Plant8[0].lastWeekStmDiameter}`;

                                console.log("URL : " + url56);
                                fetch(url56, { mode: 'no-cors' }).then((response) => {

                                  this.setState({ isLoading: true })

                                  if (response.status === 200) {

                                    const scriptUrl57 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                                    const url57 = `${scriptUrl57}?
callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter4Plant9[0].plantNumber}&leaves=${G2filter4Plant9[0].leavesPerPlant}&fullySetTruss=${G2filter4Plant9[0].fullySetTruss}&setTrussLength=${G2filter4Plant9[0].setTrussLength}&weeklyGrowth=${G2filter4Plant9[0].weeklyGrowth}&flowerHeight=${G2filter4Plant9[0].floweringTrussHeight}&leafLength=${G2filter4Plant9[0].leafLength}&leafWidth=${G2filter4Plant9[0].leafWidth}&stmDia=${G2filter4Plant9[0].stmDiameter}&lastWkStmDia=${G2filter4Plant9[0].lastWeekStmDiameter}`;

                                    console.log("URL : " + url57);
                                    fetch(url57, { mode: 'no-cors' }).then((response) => {

                                      this.setState({ isLoading: true })

                                      if (response.status === 200) {

                                        const scriptUrl58 = 'https://script.google.com/macros/s/AKfycbzCC8_LN6cdRJnB_EqaNG_FeU1RjiKoM3r2Xw4VjZ3YO2o39ryM/exec';
                                        const url58 = `${scriptUrl58}?
callback=ctrlq&plantRow=${'114/115'}&plantName=${'GER 2 - Merlice'}&plantWeek=${numberWeek}&plantNumber=${G2filter4Plant10[0].plantNumber}&leaves=${G2filter4Plant10[0].leavesPerPlant}&fullySetTruss=${G2filter4Plant10[0].fullySetTruss}&setTrussLength=${G2filter4Plant10[0].setTrussLength}&weeklyGrowth=${G2filter4Plant10[0].weeklyGrowth}&flowerHeight=${G2filter4Plant10[0].floweringTrussHeight}&leafLength=${G2filter4Plant10[0].leafLength}&leafWidth=${G2filter4Plant10[0].leafWidth}&stmDia=${G2filter4Plant10[0].stmDiameter}&lastWkStmDia=${G2filter4Plant10[0].lastWeekStmDiameter}`;

                                        console.log("URL : " + url58);
                                        fetch(url58, { mode: 'no-cors' }).then((response) => {

                                          this.setState({ isLoading: true })

                                          if (response.status === 200) {

                                            this.setState({ isLoading: false })

                                          }
                                        });

                                      }
                                    });

                                  }
                                });

                              }
                            });

                          }
                        });

                      }
                    });

                  }
                });

              }
            });

          }
        });

      }
    });



  }


  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  clickHandler = () => {

    setTimeout(() => {

      this.getPlants();

    }, 1500);

    setTimeout(() => {

      this.getTruss();

    }, 2000);
  };

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    );
  }


  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#2C903D" />
        </View>
      )
    }
    return (
      <View style={styles.container}>

        <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>

          <ScrollView>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Ger1Row')}>
              <Text style={styles.buttonText}>GER 1 - Merlice</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Ger2Row')}>
              <Text style={styles.buttonText}>GER 2 - Merlice</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Ger3Row')}>
              <Text style={styles.buttonText}>GER 3 - Endeavour</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Ger4Row')}>
              <Text style={styles.buttonText}>GER 4 - Provine </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Ger5Row')}>
              <Text style={styles.buttonText}>GER 5 - Merlice </Text>
            </TouchableOpacity>




          </ScrollView>


          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.clickHandler}
            style={styles.touchableOpacityStyle}>
            <Image
              // FAB using TouchableOpacity with an image
              // For online image
              /*source={{
              uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
              }}*/
              // For local image
              source={require('../assets/circleUpload.png')}
              style={styles.floatingButtonStyle}
            />
          </TouchableOpacity>
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
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 75,
    height: 75,
    //backgroundColor:'black'
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

  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
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
