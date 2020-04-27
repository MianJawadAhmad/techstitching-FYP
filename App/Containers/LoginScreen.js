import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,Image,Switch } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Container, Header, Content, Form, Item, Input, Label, View, Button } from 'native-base';
// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  constructor(){
    super();
    this.state={
      switchValue: false,

    }
  }

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue: value});
    //state changes according to switch
    //which will result in re-render the text
  };
  render () {
    return (
      <Container style={{flex:1}}>
          <View style={styles.firstView}>
            <View style={styles.logoView}>
            <Image style={{width:'45%',height:'62%'}} source={require('../Images/logo.png')}></Image>
            </View>
            <View style={styles.loginView}>
              <View style={{width:'90%'}}>
                <Item stackedLabel regular style={{margin:10}}>
                <Label>Username</Label>
                  <Input placeholder='enter your username' />
                </Item>
                <Item stackedLabel regular style={{margin:10}}>
                  <Label>Password</Label>
                  <Input placeholder='enter your Password' />
                </Item>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={this.state.switchValue ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.toggleSwitch}
                  value={this.state.switchValue}
                />
              </View>
            </View>
          </View>

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
