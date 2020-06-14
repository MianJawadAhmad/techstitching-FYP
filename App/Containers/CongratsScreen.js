import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,Image } from 'react-native'
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content } from 'native-base';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Styles
import styles from './Styles/CongratsScreenStyle'

class CongratsScreen extends Component {
  render () {
    return (
      <Container style={styles.container}>
          <View style={styles.mainView}>
            <View style={styles.congView}>
              <Image style={styles.congImage} resizeMode='contain' source={require('../Images/congIcon.png')}/>
              <Text style={styles.congText}>Congrats!</Text>
              <Text style={styles.scoreText}>90% Score</Text>
              <Text style={styles.sucText}>Quiz completed successfully.</Text>
              <View style={styles.atmView}>
                <Text style={styles.atmText}>You attempt {this.props.navigation.state.params.item} questions and from that 55 answers is correct.</Text>
              </View>
              <View style={styles.shareView}>
                <View style={styles.shareTextView}>
                  <Text style={styles.shareText}>Share with others:</Text>
                </View>
                <View style={styles.iconView}>
                <Image  resizeMode='cover' style={{height:hp('5%'),width:wp('10%')}} source={require('../Images/Icons/facebook.png')}/>
                <Image  resizeMode='cover' style={{height:hp('5%'),width:wp('10%')}} source={require('../Images/Icons/twitter.png')}/>
                {/* <Image resizeMode='cover' style={{height:hp('5%'),width:wp('10%')}} source={require('../Images/Icons/whatsapp.png')}/> */}
                </View>
              </View>
            </View>
          </View>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.quiz.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CongratsScreen)
