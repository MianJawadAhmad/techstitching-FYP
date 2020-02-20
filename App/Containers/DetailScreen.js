import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView,Image,TouchableOpacity } from 'react-native'
import {Container,Header,Content,Left,Body,Right,Icon, Text, View, Button} from 'native-base'
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
      <Container style={{flex:1}}>
        <Header>
          <Left>
          <TouchableOpacity style={{width:wp('10%'),height:hp('4%')}} onPress={()=>this.props.navigation.navigate('HomeScreen')}>
            <Image style={{width:hp('2%'),height: hp('3%')}} source={require('../Images/back.psd')} />
          </TouchableOpacity>
          </Left>
          <Body>
            <Text>Detail </Text>
          </Body>
          <Right/>
        </Header>
        <View style={{margin:hp('2%'),flex:1}}>
          <Image source={this.props.navigation.state.params.item.img} style={{width:wp('80%'),height:hp('30%')}} resizeMode={'cover'}/>
          <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:hp('3%'), fontWeight:'bold'}}>Grace</Text>
          <Text style={{fontSize:hp('2.5%'), fontWeight:'bold',marginLeft:hp('20%')}}>RS 2000.0</Text>
          </View>
          <View>
          <Text style={{fontSize:hp('1.8%'),width:wp('100%')}}>______________________________________________________</Text>
          <Text style={{fontSize:hp('2.1%'), marginTop:hp('2%')}}>Avalibility: In Stock</Text>
          <Text style={{fontSize:hp('2.1%'), marginTop:hp('2%')}}>Detail</Text>
          <Text style={{fontSize:hp('2.1%'), marginTop:hp('2%')}}>Grace is synonymous with the exclusive suiting fabric produced with high-quality yarn & has renowned it the reputation for excellent quality across the world.</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'center', marginTop:hp('5%'), width:wp('40%'),alignSelf:'center'}}>
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
          <Button style={{justifyContent:'center',  marginTop:hp('5%'), backgroundColor:'black'}}
          onPress={()=>this.props.navigation.navigate('ChoseMeasurementScreen')}>
            <Text style={{fontSize:hp('2.1%'), fontWeight:'bold'}}>
              Add for Measurement
            </Text>
          </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
