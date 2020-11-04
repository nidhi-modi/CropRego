import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ImageBackground, ActivityIndicator } from 'react-native'
import { ScrollView, LongPressGestureHandler } from 'react-native-gesture-handler';
import Database from './Database'
import AsyncStorage from '@react-native-community/async-storage';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';





const db = new Database();
let numberWeek, numberWeek1, numberWeek2, numberWeek3;
var currentWeekNumber = require('current-week-number');
let lvsPerPlnt1, lvsPerPlnt2, lvsPerPlnt3, lvsPerPlnt4, lvsPerPlnt5;
var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0, sum8 = 0, sum9 = 0;
var sum1Week2 = 0, sum2Week2 = 0, sum3Week2 = 0, sum4Week2 = 0, sum5Week2 = 0, sum6Week2 = 0, sum7Week2 = 0, sum8Week2 = 0, sum9Week2 = 0;
var sum1Week3 = 0, sum2Week3 = 0, sum3Week3 = 0, sum4Week3 = 0, sum5Week3 = 0, sum6Week3 = 0, sum7Week3 = 0, sum8Week3 = 0, sum9Week3 = 0;
var avgLeavesPlant, avgFullyTruss, avgFullyTrussLength, avgWeeklyGrowth, avgFlweTrussHt, avgLeafLength, avgLeafWdt, avgStmDm, avgLastWkStmDm;
var avgLeavesPlant2, avgFullyTruss2, avgFullyTrussLength2, avgWeeklyGrowth2, avgFlweTrussHt2, avgLeafLength2, avgLeafWdt2, avgStmDm2, avgLastWkStmDm2;
var avgLeavesPlant3, avgFullyTruss3, avgFullyTrussLength3, avgWeeklyGrowth3, avgFlweTrussHt3, avgLeafLength3, avgLeafWdt3, avgStmDm3, avgLastWkStmDm3;
var number, data;

export default class Har2AngelleDataChecker1 extends React.Component {



  constructor(props) {
    super(props)


    this.state = {

      plant: [],
      plantNo1: {},
      plantNo2: {},
      plantNo3: {},

      plantNo4: {},

      truss1: {},
      truss2: {},
      truss3: {},
      truss4: {},

      weekNo: '',
      weekNo1: '',
      weekNo2: '',
      weekNo3: '',
      isCalled: false,
      isLoading: false,



      leavesPerPlantWeek1: '',
      fullySetTrussWeek1: '',
      fullySetTrussLengthWeek1: '',
      weeklyGrowthWeek1: '',
      FlowerTrussHeightWeek1: '',
      leafLengthWeek1: '',
      leafWidthWeek1: '',
      stmDiameterWeek1: '',
      lastWeekStmDmWeek1: '',

      leavesPerPlantWeek2: '',
      fullySetTrussWeek2: '',
      fullySetTrussLengthWeek2: '',
      weeklyGrowthWeek2: '',
      FlowerTrussHeightWeek2: '',
      leafLengthWeek2: '',
      leafWidthWeek2: '',
      stmDiameterWeek2: '',
      lastWeekStmDmWeek2: '',

      leavesPerPlantWeek3: '',
      fullySetTrussWeek3: '',
      fullySetTrussLengthWeek3: '',
      weeklyGrowthWeek3: '',
      FlowerTrussHeightWeek3: '',
      leafLengthWeek3: '',
      leafWidthWeek3: '',
      stmDiameterWeek3: '',
      lastWeekStmDmWeek3: '',

      leavesPerPlant: '',
      fullySetTruss: '',
      setTrussLength: '',
      weeklyGrowth: '',
      floweringTrussHeight: '',
      leafLength: '',
      leafWidth: '',
      stmDiameter: '',
      lastWeekStmDiameter: '',

      demo: '',


    }


  }

  async setItem(myKey, value) {
    try {
      this.setState({
        isDataSend: false,

      });
      abc = '0';

      return await AsyncStorage.setItem(myKey, JSON.stringify(value));
    } catch (error) {
      // console.error('AsyncStorage#setItem error: ' + error.message);
    }
  }

  componentDidMount() {

    numberWeek = 2000 + currentWeekNumber(new Date()) - 1;
    numberWeek1 = 2000 + currentWeekNumber(new Date()) - 2;
    numberWeek2 = 2000 + currentWeekNumber(new Date()) - 3;
    numberWeek3 = 2000 + currentWeekNumber(new Date()) - 4;

    this.focusListener = this.props.navigation.addListener('focus', () => {


    });

    this.setState({
      weekNo: numberWeek,
      weekNo1: numberWeek1,
      weekNo2: numberWeek2,
      weekNo3: numberWeek3,

    })

    if (this.props.route.params.plantNo !== undefined) {
      number = this.props.route.params.plantNo;
      console.log("Plant No " + number);

    } else {


    }

    this.setState({
      isLoading: true,

    });

    setTimeout(() => {

      db.trussByWeekNumberRowAndName2(number, numberWeek, 'HAR 2 - Angelle', '227').then((data) => {
        console.log(data);
        console.log("Calling database")
        truss1 = data;
        this.setState({
          truss1,
          isLoading: true

        });
      }).catch((err) => {
        console.log(err);

      })


    }, 5000);


    setTimeout(() => {

      db.trussByWeekNumberRowAndName2(number, numberWeek1, 'HAR 2 - Angelle', '227').then((data) => {
        console.log(data);
        console.log("Calling database")
        truss2 = data;
        this.setState({
          truss2,
          isLoading: true


        });
      }).catch((err) => {
        console.log(err);

      })


    }, 6000);


    setTimeout(() => {

      db.trussByWeekNumberRowAndName2(number, numberWeek2, 'HAR 2 - Angelle', '227').then((data) => {
        console.log(data);
        console.log("Calling database")
        truss3 = data;
        this.setState({
          truss3,
          isLoading: true

        });
      }).catch((err) => {
        console.log(err);

      })


    }, 7000);


    setTimeout(() => {

      this.setState({
        isLoading: false,

      });

      db.trussByWeekNumberRowAndName2(number, numberWeek3, 'HAR 2 - Angelle', '227').then((data) => {
        console.log(data);
        console.log("Calling database")
        truss4 = data;
        this.setState({
          truss4,


        });
      }).catch((err) => {
        console.log(err);

      })


    }, 8000);



    //Week1
    setTimeout(() => {

      this.setState({
        isLoading: true

      });
      db.trussByWeekNumberRowAndName2(number, numberWeek1, 'HAR 2 - Angelle', '227').then((data) => {
        console.log(data);
        console.log("Calling database")
        plantNo1 = data;
        this.setState({
          plantNo1,
          //isLoading: true

        });
      }).catch((err) => {
        console.log(err);

      })

    }, 1000);

    setTimeout(() => {

      db.trussByWeekNumberRowAndName2(number, numberWeek2, 'HAR 2 - Angelle', '227').then((data) => {
        console.log(data);
        console.log("Calling database")
        plantNo2 = data;
        this.setState({
          plantNo2,
          isLoading: true


        });
      }).catch((err) => {
        console.log(err);

      })


    }, 2000);

    setTimeout(() => {

      db.trussByWeekNumberRowAndName2(number, numberWeek3, 'HAR 2 - Angelle', '227').then((data) => {
        console.log(data);
        console.log("Calling database")
        plantNo3 = data;
        this.setState({
          plantNo3,
          isLoading: true


        });
      }).catch((err) => {
        console.log(err);

      })


    }, 3000);

    setTimeout(() => {

      db.trussByWeekNumberRowAndName2(number, numberWeek, 'HAR 2 - Angelle', '227').then((data) => {
        console.log(data);
        console.log("Calling database")
        plantNo4 = data;
        this.setState({
          plantNo4,
          isLoading: true


        });
      }).catch((err) => {
        console.log(err);

      })


    }, 4000);



    this.setState({
      isLoading: false,

    });

    try {
      AsyncStorage.getItem('leavesPerPlant').then((text1Value) => {
        this.setState({ leavesPerPlant: JSON.parse(text1Value) });
        console.log(this.state.leavesPerPlant)

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fullySetTruss').then((text2Value) => {
        this.setState({ fullySetTruss: JSON.parse(text2Value) });
        console.log(this.state.fullySetTruss)

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setTrussLength').then((text3Value) => {
        this.setState({ setTrussLength: JSON.parse(text3Value) });
        console.log(this.state.setTrussLength)

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('weeklyGrowth').then((text4Value) => {
        this.setState({ weeklyGrowth: JSON.parse(text4Value) });
        console.log(this.state.weeklyGrowth)



      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('floweringTrussHeight').then((text5Value) => {
        this.setState({ floweringTrussHeight: JSON.parse(text5Value) });
        console.log(this.state.floweringTrussHeight)



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('leafLength').then((text6Value) => {
        this.setState({ leafLength: JSON.parse(text6Value) });
        console.log(this.state.leafLength)



      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('leafWidth').then((text7Value) => {
        this.setState({ leafWidth: JSON.parse(text7Value) });
        console.log(this.state.leafWidth)



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('stmDiameter').then((text8Value) => {
        this.setState({ stmDiameter: JSON.parse(text8Value) });
        console.log(this.state.stmDiameter)


      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('lastWeekStmDiameter').then((text9Value) => {
        this.setState({ lastWeekStmDiameter: JSON.parse(text9Value) });
        console.log(this.state.lastWeekStmDiameter)



      }).done();
    } catch (error) {
    }




    /*db.plantByWeekInList('HAR 1 - Yelo', numberWeek1).then((data) => {
      console.log(data);
      console.log("Calling database")

      const leavesPlant = data.map((item) => item.leavesPerPlant);
      const fllySetTr = data.map((item) => item.fullySetTruss);
      const fllySetTrLngth = data.map((item) => item.setTrussLength);
      const weeklyGwt = data.map((item) => item.weeklyGrowth);
      const FlwTrsHt = data.map((item) => item.floweringTrussHeight);
      const LeafLngt = data.map((item) => item.leafLength);
      const LeafWdt = data.map((item) => item.leafWidth);
      const stmDm = data.map((item) => item.stmDiameter);
      const lastWkStmDm = data.map((item) => item.stmDiameter);

      for (var i = 0; i < leavesPlant.length; i++) {
        sum1 += parseInt(leavesPlant[i], 10);
      }

      const avg = sum1 / leavesPlant.length;
      avgLeavesPlant = parseFloat(avg.toFixed(2));
      sum1 = 0;

      for (var i = 0; i < fllySetTr.length; i++) {
        sum2 += parseInt(fllySetTr[i], 10);
      }

      const avg1 = sum2 / fllySetTr.length;
      avgFullyTruss = parseFloat(avg1.toFixed(2))
      sum2 = 0;

      console.log("Average Fully: " + avgFullyTruss);

      for (var i = 0; i < fllySetTrLngth.length; i++) {
        sum3 += parseInt(fllySetTrLngth[i], 10);
      }

      const avg2 = sum3 / fllySetTrLngth.length;
      avgFullyTrussLength = parseFloat(avg2.toFixed(2))
      sum3 = 0;

      for (var i = 0; i < weeklyGwt.length; i++) {
        sum4 += parseInt(weeklyGwt[i], 10);
      }

      const avg3 = sum4 / weeklyGwt.length;
      avgWeeklyGrowth = parseFloat(avg3.toFixed(2))
      sum4 = 0;

      for (var i = 0; i < FlwTrsHt.length; i++) {
        sum5 += parseInt(FlwTrsHt[i], 10);
      }

      const avg4 = sum5 / FlwTrsHt.length;
      avgFlweTrussHt = parseFloat(avg4.toFixed(2))
      sum5 = 0;

      for (var i = 0; i < LeafLngt.length; i++) {
        sum6 += parseInt(LeafLngt[i], 10);
      }

      const avg5 = sum6 / LeafLngt.length;
      avgLeafLength = parseFloat(avg5.toFixed(2))
      sum6 = 0;

      console.log(avgLeafLength);


      for (var i = 0; i < LeafWdt.length; i++) {
        sum7 += parseInt(LeafWdt[i], 10);
      }

      const avg6 = sum7 / LeafWdt.length;
      avgLeafWdt = parseFloat(avg6.toFixed(2))
      sum7 = 0;

      for (var i = 0; i < stmDm.length; i++) {
        sum8 += parseInt(stmDm[i], 10);
      }

      const avg7 = sum8 / stmDm.length;
      avgStmDm = parseFloat(avg7.toFixed(2))
      sum8 = 0;

      for (var i = 0; i < lastWkStmDm.length; i++) {
        sum9 += parseInt(lastWkStmDm[i], 10);
      }

      const avg8 = sum9 / lastWkStmDm.length;
      avgLastWkStmDm = parseFloat(avg8.toFixed(2))
      sum9 = 0;


      this.setState({
        plant: data,
        leavesPerPlantWeek1: avgLeavesPlant,
        fullySetTrussWeek1: avgFullyTruss,
        fullySetTrussLengthWeek1: avgFullyTrussLength,
        weeklyGrowthWeek1: avgWeeklyGrowth,
        FlowerTrussHeightWeek1: avgFlweTrussHt,
        leafLengthWeek1: avgLeafLength,
        leafWidthWeek1: avgLeafWdt,
        stmDiameterWeek1: avgStmDm,
        lastWeekStmDmWeek1: avgLastWkStmDm,
      });

    }).catch((err) => {
      console.log(err);


    })



    setTimeout(() => {

      db.plantByWeekInList('HAR 1 - Yelo', numberWeek2).then((data1) => {
        console.log(data1);
        console.log("Calling database")

        const leavesPlant2 = data1.map((item) => item.leavesPerPlant);
        const fllySetTr2 = data1.map((item) => item.fullySetTruss);
        const fllySetTrLngth2 = data1.map((item) => item.setTrussLength);
        const weeklyGwt2 = data1.map((item) => item.weeklyGrowth);
        const FlwTrsHt2 = data1.map((item) => item.floweringTrussHeight);
        const LeafLngt2 = data1.map((item) => item.leafLength);
        const LeafWdt2 = data1.map((item) => item.leafWidth);
        const stmDm2 = data1.map((item) => item.stmDiameter);
        const lastWkStmDm2 = data1.map((item) => item.stmDiameter);

        console.log("Leaves : " + leavesPlant2);


        for (var i = 0; i < leavesPlant2.length; i++) {
          sum1Week2 += parseInt(leavesPlant2[i], 10);
        }

        const avg1Week2 = sum1Week2 / leavesPlant2.length;
        avgLeavesPlant2 = parseFloat(avg1Week2.toFixed(2));
        sum1Week2 = 0;

        console.log("Average : " + avg1Week2);


        for (var i = 0; i < fllySetTr2.length; i++) {
          sum2Week2 += parseInt(fllySetTr2[i], 10);
        }

        const avg2Week2 = sum2Week2 / fllySetTr2.length;
        avgFullyTruss2 = parseFloat(avg2Week2.toFixed(2))
        sum2Week2 = 0;

        for (var i = 0; i < fllySetTrLngth2.length; i++) {
          sum3Week2 += parseInt(fllySetTrLngth2[i], 10);
        }

        const avg3Week2 = sum3Week2 / fllySetTrLngth2.length;
        avgFullyTrussLength2 = parseFloat(avg3Week2.toFixed(2))
        sum3Week2 = 0;

        for (var i = 0; i < weeklyGwt2.length; i++) {
          sum4Week2 += parseInt(weeklyGwt2[i], 10);
        }

        const avg4Week2 = sum4Week2 / weeklyGwt2.length;
        avgWeeklyGrowth2 = parseFloat(avg4Week2.toFixed(2))
        sum4Week2 = 0;

        for (var i = 0; i < FlwTrsHt2.length; i++) {
          sum5Week2 += parseInt(FlwTrsHt2[i], 10);
        }

        const avg5Week2 = sum5Week2 / FlwTrsHt2.length;
        avgFlweTrussHt2 = parseFloat(avg5Week2.toFixed(2))
        sum5Week2 = 0;

        for (var i = 0; i < LeafLngt2.length; i++) {
          sum6Week2 += parseInt(LeafLngt2[i], 10);
        }

        const avg6Week2 = sum6Week2 / LeafLngt2.length;
        avgLeafLength2 = parseFloat(avg6Week2.toFixed(2))
        sum6Week2 = 0;

        for (var i = 0; i < LeafWdt2.length; i++) {
          sum7Week2 += parseInt(LeafWdt2[i], 10);
        }

        const avg7Week2 = sum7Week2 / LeafWdt2.length;
        avgLeafWdt2 = parseFloat(avg7Week2.toFixed(2))
        sum7Week2 = 0;

        for (var i = 0; i < stmDm2.length; i++) {
          sum8Week2 += parseInt(stmDm2[i], 10);
        }

        const avg8Week2 = sum8Week2 / stmDm2.length;
        avgStmDm2 = parseFloat(avg8Week2.toFixed(2))
        sum8Week2 = 0;

        for (var i = 0; i < lastWkStmDm2.length; i++) {
          sum9Week2 += parseInt(lastWkStmDm2[i], 10);
        }

        const avg9Week2 = sum9Week2 / lastWkStmDm2.length;
        avgLastWkStmDm2 = parseFloat(avg9Week2.toFixed(2))
        sum9Week2 = 0;


        this.setState({
          plant,
          leavesPerPlantWeek2: avgLeavesPlant2,
          fullySetTrussWeek2: avgFullyTruss2,
          fullySetTrussLengthWeek2: avgFullyTrussLength2,
          weeklyGrowthWeek2: avgWeeklyGrowth2,
          FlowerTrussHeightWeek2: avgFlweTrussHt2,
          leafLengthWeek2: avgLeafLength2,
          leafWidthWeek2: avgLeafWdt2,
          stmDiameterWeek2: avgStmDm2,
          lastWeekStmDmWeek2: avgLastWkStmDm2,

        });
      }).catch((err) => {
        console.log(err);


      })

    }, 1000);


    setTimeout(() => {
      db.plantByWeekInList('HAR 1 - Yelo', numberWeek3).then((data1) => {
        console.log(data1);
        console.log("Calling database")
        const leavesPlant3 = data1.map((item) => item.leavesPerPlant);
        const fllySetTr3 = data1.map((item) => item.fullySetTruss);
        const fllySetTrLngth3 = data1.map((item) => item.setTrussLength);
        const weeklyGwt3 = data1.map((item) => item.weeklyGrowth);
        const FlwTrsHt3 = data1.map((item) => item.floweringTrussHeight);
        const LeafLngt3 = data1.map((item) => item.leafLength);
        const LeafWdt3 = data1.map((item) => item.leafWidth);
        const stmDm3 = data1.map((item) => item.stmDiameter);
        const lastWkStmDm3 = data1.map((item) => item.stmDiameter);

        console.log("Flower : " + FlwTrsHt3);


        for (var i = 0; i < leavesPlant3.length; i++) {
          sum1Week3 += parseInt(leavesPlant3[i], 10);
        }

        const avg1Week3 = sum1Week3 / leavesPlant3.length;
        avgLeavesPlant3 = parseFloat(avg1Week3.toFixed(2));
        sum1Week3 = 0;


        for (var i = 0; i < fllySetTr3.length; i++) {
          sum2Week3 += parseInt(fllySetTr3[i], 10);
        }

        const avg2Week3 = sum2Week3 / fllySetTr3.length;
        avgFullyTruss3 = parseFloat(avg2Week3.toFixed(2))
        sum2Week3 = 0;

        for (var i = 0; i < fllySetTrLngth3.length; i++) {
          sum3Week3 += parseInt(fllySetTrLngth3[i], 10);
        }

        const avg3Week3 = sum3Week3 / fllySetTrLngth3.length;
        avgFullyTrussLength3 = parseFloat(avg3Week3.toFixed(2))
        sum3Week3 = 0;

        for (var i = 0; i < weeklyGwt3.length; i++) {
          sum4Week3 += parseInt(weeklyGwt3[i], 10);
        }

        const avg4Week3 = sum4Week3 / weeklyGwt3.length;
        avgWeeklyGrowth3 = parseFloat(avg4Week3.toFixed(2))
        sum4Week3 = 0;

        for (var i = 0; i < FlwTrsHt3.length; i++) {
          sum5Week3 += parseInt(FlwTrsHt3[i], 10);
        }
        console.log("Sum : " + sum5Week3);
        const avg5Week3 = sum5Week3 / FlwTrsHt3.length;
        avgFlweTrussHt3 = parseFloat(avg5Week3.toFixed(2))
        sum5Week3 = 0;

        console.log("Average : " + avg5Week3);


        for (var i = 0; i < LeafLngt3.length; i++) {
          sum6Week3 += parseInt(LeafLngt3[i], 10);
        }

        const avg6Week3 = sum6Week3 / LeafLngt3.length;
        avgLeafLength3 = parseFloat(avg6Week3.toFixed(2))
        sum6Week3 = 0;

        for (var i = 0; i < LeafWdt3.length; i++) {
          sum7Week3 += parseInt(LeafWdt3[i], 10);
        }

        const avg7Week3 = sum7Week3 / LeafWdt3.length;
        avgLeafWdt3 = parseFloat(avg7Week3.toFixed(2))
        sum7Week3 = 0;

        for (var i = 0; i < stmDm3.length; i++) {
          sum8Week3 += parseInt(stmDm3[i], 10);
        }

        const avg8Week3 = sum8Week3 / stmDm3.length;
        avgStmDm3 = parseFloat(avg8Week3.toFixed(2))
        sum8Week3 = 0;

        for (var i = 0; i < lastWkStmDm3.length; i++) {
          sum9Week3 += parseInt(lastWkStmDm3[i], 10);
        }

        const avg9Week3 = sum9Week3 / lastWkStmDm3.length;
        avgLastWkStmDm3 = parseFloat(avg9Week3.toFixed(2))
        sum9Week3 = 0;
        this.setState({
          plant,
          leavesPerPlantWeek3: avgLeavesPlant3,
          fullySetTrussWeek3: avgFullyTruss3,
          fullySetTrussLengthWeek3: avgFullyTrussLength3,
          weeklyGrowthWeek3: avgWeeklyGrowth3,
          FlowerTrussHeightWeek3: avgFlweTrussHt3,
          leafLengthWeek3: avgLeafLength3,
          leafWidthWeek3: avgLeafWdt3,
          stmDiameterWeek3: avgStmDm3,
          lastWeekStmDmWeek3: avgLastWkStmDm3,

        });
      }).catch((err) => {
        console.log(err);


      })

    }, 2000);*/






  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }


    return (

      <SafeAreaView style={styles.safeContainer}>

        <View style={styles.container}>

          <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>

            <ScrollView style={styles.formContainer}
              keyboardShouldPersistTaps='handled'>

              <Text style={styles.headingText}>Plant {number} Data Checker</Text>



              <View
                style={{
                  marginTop: 14
                }}
              />

              <View style={styles.borderEdit}>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text222}>Measures</Text>
                  <Text style={styles.text222}>{this.state.weekNo3}</Text>
                  <Text style={styles.text222}>{this.state.weekNo2}</Text>
                  <Text style={styles.text222}>{this.state.weekNo1}</Text>
                  <Text style={styles.text222}>{this.state.weekNo}</Text>

                </View>

                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1.5,
                  }}
                />


                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Leaves Per Plant <Text style={styles.textColorRed}>{"\n"} Min:8 Max:16</Text></Text>
                  {this.state.plantNo2.leavesPerPlant ? (<Text style={styles.text242}>{this.state.plantNo2.leavesPerPlant}</Text>) : <Text style={styles.text242}>---</Text>}
                  {this.state.plantNo2.leavesPerPlant ? (<Text style={styles.text24}>{this.state.plantNo2.leavesPerPlant}</Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.plantNo1.leavesPerPlant ? (<Text style={styles.text24}>{this.state.plantNo1.leavesPerPlant}</Text>) : <Text style={styles.text24}>---</Text>}
                  <View style={[(this.state.plantNo4.leavesPerPlant <= 8 || this.state.plantNo4.leavesPerPlant >= 16 || this.state.leavesPerPlant <= 8 || this.state.leavesPerPlant >= 16) ? styles.textRed24 : styles.text24]}>
                    {this.state.leavesPerPlant ? (<Text>{this.state.leavesPerPlant}</Text>) : <Text>{this.state.plantNo4.leavesPerPlant}</Text>}
                  </View>
                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Fully Set Truss     <Text style={styles.textColorRed}>{"\n"} Min:1 Max:45</Text></Text>
                  {this.state.plantNo2.fullySetTruss ? (<Text style={styles.text242}>{this.state.plantNo2.fullySetTruss}</Text>) : <Text style={styles.text242}>---</Text>}
                  {this.state.plantNo2.fullySetTruss ? (<Text style={styles.text24}>{this.state.plantNo2.fullySetTruss}</Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.plantNo1.fullySetTruss ? (<Text style={styles.text24}>{this.state.plantNo1.fullySetTruss}</Text>) : <Text style={styles.text24}>---</Text>}
                  <View style={[(this.state.plantNo4.fullySetTruss <= 1 || this.state.plantNo4.fullySetTruss >= 45 || this.state.fullySetTruss <= 1 || this.state.fullySetTruss >= 45) ? styles.textRed24 : styles.text24]}>
                    {this.state.fullySetTruss ? (<Text>{this.state.fullySetTruss}</Text>) : <Text>{this.state.plantNo4.fullySetTruss}</Text>}
                  </View>
                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Fully Set Trs Lgth<Text style={styles.textColorRed}>{"\n"} Min:2 Max:6</Text></Text>
                  {this.state.plantNo2.setTrussLength ? (<Text style={styles.text242}>{this.state.plantNo2.setTrussLength}</Text>) : <Text style={styles.text242}>---</Text>}
                  {this.state.plantNo2.setTrussLength ? (<Text style={styles.text24}>{this.state.plantNo2.setTrussLength}</Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.plantNo1.setTrussLength ? (<Text style={styles.text24}>{this.state.plantNo1.setTrussLength}</Text>) : <Text style={styles.text24}>---</Text>}
                  <View style={[(this.state.plantNo4.setTrussLength <= 2 || this.state.plantNo4.setTrussLength >= 6 || this.state.setTrussLength <= 2 || this.state.setTrussLength >= 6) ? styles.textRed24 : styles.text24]}>
                    {this.state.setTrussLength ? (<Text>{this.state.setTrussLength}</Text>) : <Text>{this.state.plantNo4.setTrussLength}</Text>}
                  </View>
                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Weekly Growth    <Text style={styles.textColorRed}>{"\n"} Min:16 Max:32</Text></Text>
                  {this.state.plantNo2.weeklyGrowth ? (<Text style={styles.text242}>{this.state.plantNo2.weeklyGrowth}</Text>) : <Text style={styles.text242}>---</Text>}
                  {this.state.plantNo2.weeklyGrowth ? (<Text style={styles.text24}>{this.state.plantNo2.weeklyGrowth}</Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.plantNo1.weeklyGrowth ? (<Text style={styles.text24}>{this.state.plantNo1.weeklyGrowth}</Text>) : <Text style={styles.text24}>---</Text>}
                  <View style={[(this.state.plantNo4.weeklyGrowth <= 2 || this.state.plantNo4.weeklyGrowth >= 6 || this.state.weeklyGrowth <= 2 || this.state.weeklyGrowth >= 6) ? styles.textRed24 : styles.text24]}>
                    {this.state.weeklyGrowth ? (<Text>{this.state.weeklyGrowth}</Text>) : <Text>{this.state.plantNo4.weeklyGrowth}</Text>}
                  </View>
                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Flwer Trus Hht    <Text style={styles.textColorRed}>{"\n"} Min:10 Max:25</Text></Text>
                  {this.state.plantNo2.floweringTrussHeight ? (<Text style={styles.text242}>{this.state.plantNo2.floweringTrussHeight}</Text>) : <Text style={styles.text242}>---</Text>}
                  {this.state.plantNo2.floweringTrussHeight ? (<Text style={styles.text24}>{this.state.plantNo2.floweringTrussHeight}</Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.plantNo1.floweringTrussHeight ? (<Text style={styles.text24}>{this.state.plantNo1.floweringTrussHeight}</Text>) : <Text style={styles.text24}>---</Text>}
                  <View style={[(this.state.plantNo4.floweringTrussHeight <= 10 || this.state.plantNo4.floweringTrussHeight >= 25 || this.state.floweringTrussHeight <= 10 || this.state.floweringTrussHeight >= 25) ? styles.textRed24 : styles.text24]}>
                    {this.state.floweringTrussHeight ? (<Text>{this.state.floweringTrussHeight}</Text>) : <Text>{this.state.plantNo4.floweringTrussHeight}</Text>}
                  </View>

                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Leaf Length        <Text style={styles.textColorRed}>{"\n"} Min:35 Max:45</Text></Text>
                  {this.state.plantNo2.leafLength ? (<Text style={styles.text242}>{this.state.plantNo2.leafLength}</Text>) : <Text style={styles.text242}>---</Text>}
                  {this.state.plantNo2.leafLength ? (<Text style={styles.text24}>{this.state.plantNo2.leafLength}</Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.plantNo1.leafLength ? (<Text style={styles.text24}>{this.state.plantNo1.leafLength}</Text>) : <Text style={styles.text24}>---</Text>}
                  <View style={[(this.state.plantNo4.leafLength <= 35 || this.state.plantNo4.leafLength >= 45 || this.state.leafLength <= 35 || this.state.leafLength >= 45) ? styles.textRed24 : styles.text24]}>
                    {this.state.leafLength ? (<Text>{this.state.leafLength}</Text>) : <Text>{this.state.plantNo4.leafLength}</Text>}

                  </View>
                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Leaf Width          <Text style={styles.textColorRed}>{"\n"} Min:35 Max:45</Text></Text>
                  {this.state.plantNo2.leafWidth ? (<Text style={styles.text242}>{this.state.plantNo2.leafWidth}</Text>) : <Text style={styles.text242}>---</Text>}
                  {this.state.plantNo2.leafWidth ? (<Text style={styles.text24}>{this.state.plantNo2.leafWidth}</Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.plantNo1.leafWidth ? (<Text style={styles.text24}>{this.state.plantNo1.leafWidth}</Text>) : <Text style={styles.text24}>---</Text>}
                  <View style={[(this.state.plantNo4.leafWidth <= 35 || this.state.plantNo4.leafWidth >= 45 || this.state.leafWidth <= 35 || this.state.leafWidth >= 45) ? styles.textRed24 : styles.text24]}>
                    {this.state.leafWidth ? (<Text>{this.state.leafWidth}</Text>) : <Text>{this.state.plantNo4.leafWidth}</Text>}
                  </View>
                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Stem Diameter    <Text style={styles.textColorRed}>{"\n"} Min:9 Max:12</Text></Text>
                  {this.state.plantNo2.stmDiameter ? (<Text style={styles.text242}>{this.state.plantNo2.stmDiameter}</Text>) : <Text style={styles.text242}>---</Text>}
                  {this.state.plantNo2.stmDiameter ? (<Text style={styles.text24}>{this.state.plantNo2.stmDiameter}</Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.plantNo1.stmDiameter ? (<Text style={styles.text24}>{this.state.plantNo1.stmDiameter}</Text>) : <Text style={styles.text24}>---</Text>}
                  <View style={[(this.state.plantNo4.stmDiameter <= 9 || this.state.plantNo4.stmDiameter >= 12 || this.state.stmDiameter <= 9 || this.state.stmDiameter >= 12) ? styles.textRed24 : styles.text24]}>
                    {this.state.stmDiameter ? (<Text>{this.state.stmDiameter}</Text>) : <Text>{this.state.plantNo4.stmDiameter}</Text>}
                  </View>
                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Lt Wk Stm Diamt<Text style={styles.textColorRed}>{"\n"} Min:10 Max:13</Text></Text>
                  {this.state.plantNo2.lastWeekStmDiameter ? (<Text style={styles.text242}>{this.state.plantNo2.lastWeekStmDiameter}</Text>) : <Text style={styles.text242}>---</Text>}
                  {this.state.plantNo2.lastWeekStmDiameter ? (<Text style={styles.text24}>{this.state.plantNo2.lastWeekStmDiameter}</Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.plantNo1.lastWeekStmDiameter ? (<Text style={styles.text24}>{this.state.plantNo1.lastWeekStmDiameter}</Text>) : <Text style={styles.text24}>---</Text>}
                  <View style={[(this.state.plantNo4.lastWeekStmDiameter <= 10 || this.state.plantNo4.lastWeekStmDiameter >= 13 || this.state.lastWeekStmDiameter <= 10 || this.state.lastWeekStmDiameter >= 13) ? styles.textRed24 : styles.text24]}>
                    {this.state.lastWeekStmDiameter ? (<Text>{this.state.lastWeekStmDiameter}</Text>) : <Text>{this.state.plantNo4.lastWeekStmDiameter}</Text>}
                  </View>
                </View>

              </View>

              <View
                style={{
                  marginTop: 15
                }}
              />

              <View style={styles.borderEdit}>


                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Fruit Load           </Text>
                  {this.state.truss4.fruitLoad ? (<Text style={styles.text24}>{this.state.truss4.fruitLoad} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss3.fruitLoad ? (<Text style={styles.text24}>{this.state.truss3.fruitLoad} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss2.fruitLoad ? (<Text style={styles.text24}>{this.state.truss2.fruitLoad} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss1.fruitLoad ? (<Text style={styles.text24}>{this.state.truss1.fruitLoad} </Text>) : <Text style={styles.text24}>---</Text>}

                </View>

                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1.5,
                  }}
                />



                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Pruning Flower  </Text>
                  {this.state.truss4.pruningFlower ? (<Text style={styles.text24}>{this.state.truss4.pruningFlower} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss3.pruningFlower ? (<Text style={styles.text24}>{this.state.truss3.pruningFlower} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss2.pruningFlower ? (<Text style={styles.text24}>{this.state.truss2.pruningFlower} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss1.pruningFlower ? (<Text style={styles.text24}>{this.state.truss1.pruningFlower} </Text>) : <Text style={styles.text24}>---</Text>}

                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Flowering Truss </Text>
                  {this.state.truss4.floweringTruss ? (<Text style={styles.text24}>{this.state.truss4.floweringTruss} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss3.floweringTruss ? (<Text style={styles.text24}>{this.state.truss3.floweringTruss} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss2.floweringTruss ? (<Text style={styles.text24}>{this.state.truss2.floweringTruss} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss1.floweringTruss ? (<Text style={styles.text24}>{this.state.truss1.floweringTruss} </Text>) : <Text style={styles.text24}>---</Text>}

                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Flowering Speed</Text>
                  <Text style={styles.text24}>---</Text>
                  <Text style={styles.text24}>---</Text>
                  <Text style={styles.text24}>---</Text>
                  <Text style={styles.text24}>---</Text>

                </View>

                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1.5,
                  }}
                />

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Pruning Set        </Text>
                  {this.state.truss4.pruningSet ? (<Text style={styles.text24}>{this.state.truss4.pruningSet} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss3.pruningSet ? (<Text style={styles.text24}>{this.state.truss3.pruningSet} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss2.pruningSet ? (<Text style={styles.text24}>{this.state.truss2.pruningSet} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss1.pruningSet ? (<Text style={styles.text24}>{this.state.truss1.pruningSet} </Text>) : <Text style={styles.text24}>---</Text>}

                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Setting Truss      </Text>
                  {this.state.truss4.settingTruss ? (<Text style={styles.text24}>{this.state.truss4.settingTruss} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss3.settingTruss ? (<Text style={styles.text24}>{this.state.truss3.settingTruss} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss2.settingTruss ? (<Text style={styles.text24}>{this.state.truss2.settingTruss} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss1.settingTruss ? (<Text style={styles.text24}>{this.state.truss1.settingTruss} </Text>) : <Text style={styles.text24}>---</Text>}

                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Setting Speed     </Text>
                  <Text style={styles.text24}>---</Text>
                  <Text style={styles.text24}>---</Text>
                  <Text style={styles.text24}>---</Text>
                  <Text style={styles.text24}>---</Text>

                </View>

                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1.5,
                  }}
                />


                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Pruning Harvest </Text>
                  {this.state.truss4.pruningHarvest ? (<Text style={styles.text24}>{this.state.truss4.pruningHarvest} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss3.pruningHarvest ? (<Text style={styles.text24}>{this.state.truss3.pruningHarvest} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss2.pruningHarvest ? (<Text style={styles.text24}>{this.state.truss2.pruningHarvest} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss1.pruningHarvest ? (<Text style={styles.text24}>{this.state.truss1.pruningHarvest} </Text>) : <Text style={styles.text24}>---</Text>}

                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Harvest Truss     </Text>
                  {this.state.truss4.harvestTruss ? (<Text style={styles.text24}>{this.state.truss4.harvestTruss} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss3.harvestTruss ? (<Text style={styles.text24}>{this.state.truss3.harvestTruss} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss2.harvestTruss ? (<Text style={styles.text24}>{this.state.truss2.harvestTruss} </Text>) : <Text style={styles.text24}>---</Text>}
                  {this.state.truss1.harvestTruss ? (<Text style={styles.text24}>{this.state.truss1.harvestTruss} </Text>) : <Text style={styles.text24}>---</Text>}

                </View>

                <View style={styles.rowContainer222}>

                  <Text style={styles.text242}> Harvest Speed    </Text>
                  <Text style={styles.text24}>---</Text>
                  <Text style={styles.text24}>---</Text>
                  <Text style={styles.text24}>---</Text>
                  <Text style={styles.text24}>---</Text>

                </View>

              </View>

            </ScrollView>
          </ImageBackground>
        </View>

      </SafeAreaView >
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

  container22: { flex: 1, padding: 16, paddingTop: 30 },
  head: {
    height: 50,
    alignContent: "center",
    backgroundColor: 'red'
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  btn: { width: 58, height: 18, borderRadius: 2 },
  btnText: { textAlign: 'center', color: 'black' },

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
  container222: {
    padding: 8,
    alignItems: "stretch"
  },
  rowContainer222: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  text222: {
    margin: 10,
    color: '#2C903D',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'

  },

  text24: {
    margin: 10,
    color: 'black',
    fontSize: 12,

  },

  textRed24: {
    margin: 10,
    backgroundColor: 'rgba(255,0,0,0.3)',
    fontSize: 12,

  },

  text242: {

    color: 'black',
    fontSize: 12,
  },

  text242: {
    color: 'black',
    fontSize: 12,
  },

  textInputStyle: {
    fontSize: 20

  },
  textOutputStyle: {
    fontSize: 20
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

    //backgroundColor: 'rgba(192,192,192,0.55)',
    borderRadius: 5,
    padding: 10,
    height: '100%',
    width: '100%'


  },
  buttonContainer1: {
    backgroundColor: 'rgba(0,0,0,0.65)',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'

  },

  buttonContainer: {
    backgroundColor: 'rgba(0,128,0,0.65)',
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
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    marginBottom: 10,
    height: 50,
    fontSize: 18,
    borderColor: '#000000',
    borderWidth: 2,
    marginTop: 10
  },
  text2: {
    color: '#110A6A',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  row: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textinputheight: {

    height: 70,
    borderBottomWidth: 1.2,
    borderBottomColor: 'black',
    marginBottom: 5

  },

  bottonColor: {
    borderBottomWidth: 1.2,
    borderBottomColor: 'black',
    marginBottom: 5
  },
  borderEdit: {
    marginTop: 8,
    borderColor: '#000000',
    borderWidth: 1.5,
  },

  singleLine: {
    borderColor: '#000000',
    borderWidth: 1.5,
  },
  headingText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold'

  },
  textColorRed: {
    color: '#2C903D',
    fontSize: 12,

  },
})

