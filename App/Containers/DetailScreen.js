import React, { Component } from 'react'
import {Image,TouchableOpacity } from 'react-native'
import {Header,Content,Left,Body,Right,Text, View, Button,Card} from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Styles
import styles from './Styles/DetailScreenStyle'

class DetailScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  render () {
    return (
      <View style={{flex:1}}>
        <Header style={{backgroundColor:'white'}}>
          <Left style={{flex:1}}>
          <TouchableOpacity style={{width:wp('10%'),height:hp('4%')}} onPress={()=>this.props.navigation.navigate('TabsSScreen')}>
            <Image style={{width:hp('2%'),height: hp('3%')}} source={require('../Images/back.png')} />
          </TouchableOpacity>
          </Left>
          <Body style={{flex:1}}>
            <Text style={{alignSelf:'center'}}>Detail </Text>
          </Body>
          <Right style={{flex:1}}>
            <TouchableOpacity style={{width:wp('10%'),height:hp('5%'),alignItems:'center',justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('TabsSScreen')}>
              <Image style={{width:hp('4%'),height: hp('4%')}} source={require('../Images/cart.png')} />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content scrollEnabled={false} style={{flex:1}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingTop:1}}>

          <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}}>
          <Image source={this.props.navigation.state.params.item.img} style={{width:wp('80%'),height:hp('30%')}} resizeMode={'cover'}/>
          </View>

          <View style={{flex:1,flexDirection:'row',width:'97%',margin:5}}>
          <View style={{flex:1}}>
          <Text style={{fontSize:hp('3%'), fontWeight:'bold'}}>Grace</Text>
          </View>
          <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
          <Text style={{fontSize:hp('2.5%'), fontWeight:'bold'}}>RS 2000.0</Text>
          </View>
          </View>
         
          

          <View style={{flex:1,alignItems:'center',flexWrap:'wrap'}}>
            <Card style={{flex:1,width:'97%',borderRadius:5}}>
              <Text style={{fontSize:hp('2.5%'), margin:hp('1%')}}>Avalibility: In Stock</Text>
              <Text style={{fontSize:hp('2.5%'), marginLeft:hp('1%'), marginRight:hp('1%'),marginTop:hp('1%')}}>Detail</Text>
              <Text style={{ fontSize:hp('2%'),marginLeft:hp('1%'), marginRight:hp('1%'),marginTop:hp('0.5%')}}>
                Grace is synonymous with the exclusive suiting
                fabric produced with high-quality yarn 
                & has renowned it the reputation for excellent quality 
                across the world.
              </Text>
            </Card>
          </View>
          
          
          <View style={{flex:1,flexDirection:'row', justifyContent:'center', marginTop:hp('4%'), width:wp('40%'),alignSelf:'center'}}>
            <Button   style={{ backgroundColor:'black'}}
                      onPress={()=> this.setState({count: this.state.count-1})}>
              <Text style={{color:'white',fontSize:hp('2.5%')}}>-</Text>
            </Button>
            <Text style={{alignSelf:'center',  fontSize:hp('3.5%'),width:wp('15%'),textAlign:'center'}}> {this.state.count} </Text>
            <Button   style={{ backgroundColor:'black'}}
                      onPress={()=> this.setState({count: this.state.count+1})}>
            <Text style={{color:'white',fontSize:hp('2.5%')}}>+</Text>
            </Button>
          </View>

          <View style={{flex:1}}>
          <Button style={{justifyContent:'center',  marginTop:hp('4%'), backgroundColor:'black',width:wp('80%'),height:hp('7%')}}
          onPress={()=>this.props.navigation.navigate('MeasurementScreen')}>
            <Text style={{fontSize:hp('2.1%'), fontWeight:'bold'}}>
              Add for Measurement
            </Text>
          </Button>
          </View>


          </View>
        </Content>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
