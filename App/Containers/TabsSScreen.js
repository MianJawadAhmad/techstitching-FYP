import React, { Component } from 'react'
import {TouchableOpacity,Image} from 'react-native'
import {Container, Text,Header, Tab, Tabs, TabHeading,Left,Right,Body, Button} from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ClothsScreen from './ClothsScreen'
// Styles
import styles from './Styles/TabsSScreenStyle'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class TabsSScreen extends Component {
  render () {
    return (
      <Container>
        <Header hasTabs style={{backgroundColor:'white'}}>
        <Left style={{flex:1}}> 
          <TouchableOpacity style={{width:wp('10%'),height:hp('4%')}} onPress={()=>this.props.navigation.navigate('TabsScreen')}>
            <Image style={{width:hp('2%'),height: hp('3%'),tintColor:'black'}} source={require('../Images/back.png')} />
          </TouchableOpacity>        
          
        </Left>
        <Body style={{flex:2,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:hp('2.5%'),alignSelf:'center'}}>
            UnStitched Cloths
          </Text>
        </Body>
        <Right style={{flex:1}}>
          <Button transparent onPress={()=>this.props.navigation.navigate('FilterScreen')}>
            <Text style={{fontSize:hp('2%'),color:'black'}}>
              Filter
            </Text>
          </Button>
        </Right>
      </Header>
        <Tabs  style={{backgroundColor:'white'}}>
          <Tab  style={{backgroundColor:'white'}} heading={ <TabHeading  style={{backgroundColor:'white'}}><Text  style={{color:'black'}}>Summer</Text></TabHeading>}>
            <ClothsScreen navigation={this.props.navigation} tabLabel="Agenda"/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Text style={{color:'black'}}>Winter</Text></TabHeading>}>
            <ClothsScreen />
          </Tab>
        </Tabs>
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

export default connect(mapStateToProps, mapDispatchToProps)(TabsSScreen)
