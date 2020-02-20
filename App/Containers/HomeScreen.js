import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView,ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import {Header,Left,Body,Right,Container,Content,Footer, Text,Button} from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Styles
import styles from './Styles/HomeScreenStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';


const DISHESmen = [ 
    
  {
      id: 1,
      title: 'UnStitched ',
      img: require('../Images/men1.png')
  },
  {
    id: 1,
    title: 'Stitched Cloths',
    img: require('../Images/men2.png')
}
]


const DISHESwomen = [ 
    
  {
      id: 1,
      title: 'safaUnStitched Cloths',
      img: require('../Images/women1.png')
  },
  {
    id: 1,
    title: 'Stitched Cloths',
    img: require('../Images/women2.png')
}
]


class HomeScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      buttonColorm:'black',
      textColorm:'white',
      buttonColorw:'white',
      textColorw:'black',
      DISHES: DISHESmen

    }
  }

  render () {
    const rows = this.state.DISHES.map((value, index) => {
      return ( 
        <TouchableOpacity style={{width:wp('85%'),height:hp('35%'), margin:30, borderRadius:25}}
        onPress={()=>this.props.navigation.navigate('ClothsScreen')}>
          <ImageBackground style={{flex:1,width:wp('85%'),height:hp('38%'),justifyContent:'center', alignContent:'center'}}  source={value.img} imageStyle={{ borderRadius: 25 }}>
            <Text style={{color:'black',fontSize:30,marginLeft:50,marginRight:50, fontWeight:'bold'}}>{value.title}</Text>
          </ImageBackground>
        </TouchableOpacity>
      )
    })

    return (
      <Container style={{flex:1,backgroundColor:'#F5F5F5'}}>
        <Header>
          <Left style={{flex:1}}>
            <Button full style={{flex:1,borderWidth:2,backgroundColor:this.state.buttonColorm, borderColor:'black',justifyContent:'center',borderRadius:10,marginRight:2}}
            onPress={this.menButton}>
              <Text style={{color:this.state.textColorm}}>MEN</Text>
            </Button>
          </Left>
          <Right style={{flex:1}}>
            <Button full style={{flex:1,backgroundColor:this.state.buttonColorw, borderWidth:2, borderColor:'black',justifyContent:'center',borderRadius:10,marginLeft:2}}
            onPress={this.womenButton}>
              <Text style={{color:this.state.textColorw}}>WOMEN</Text>
            </Button>
          </Right>
        </Header>
        <Content style={{flex:1,backgroundColor:'#F5F5F5'}}>
        {rows}
        </Content>
      </Container>
    )
  }
  womenButton = () =>{
    if(this.state.buttonColorw === 'white'){
      this.setState({buttonColorm:'white', textColorm:'black',buttonColorw:'black', textColorw:'white', DISHES: DISHESwomen})
     }//else{
    //   this.setState({buttonColorm:'black', textColorm:'white',buttonColorw:'white', textColorw:'black'})
    // }
  }

  menButton = () =>{
    if(this.state.buttonColorm === 'white'){
      this.setState({buttonColorm:'black', textColorm:'white',buttonColorw:'white', textColorw:'black', DISHES: DISHESmen})
     }
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
