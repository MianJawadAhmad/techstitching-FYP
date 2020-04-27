import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView,ImageBackground,View,Image } from 'react-native'
import { connect } from 'react-redux'
import {Left,Body,Right,Container,Content,Footer, Text,Button,Card,CardItem,Header, Tab, Tabs, TabHeading} from 'native-base'
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

        <Card style={{flex:1,width:wp('90%'),  borderRadius:25,backgroundColor:'red',justifyContent:'center', alignContent:'center',alignSelf:'center'}}>
          <CardItem style={{flex:1,borderRadius:25,backgroundColor:'gray',alignContent:'center',justifyContent:'center'}} >
            {/* <Image style={{flex:1}}  source={value.img} imageStyle={{ borderRadius: 25 }} resizeMode='contain'/> */}
            <Button transparent style={{flex:1, height:'100%',alignContent:'center',justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('TabsSScreen')}>
            <Text style={{color:'black',fontSize:hp('4%'),fontWeight:'bold'}}>{value.title}</Text>
            </Button>
          </CardItem>
        </Card>
        
        
        // <TouchableOpacity style={{width:wp('85%'),height:hp('35%'), margin:30, borderRadius:25}}
        // onPress={()=>this.props.navigation.navigate('ClothsScreen')}>
         
        //   <ImageBackground style={{flex:1,width:wp('85%'),height:hp('38%'),justifyContent:'center', alignContent:'center'}}  source={value.img} imageStyle={{ borderRadius: 25 }}>
        //    <Text style={{color:'black',fontSize:30,marginLeft:50,marginRight:50, fontWeight:'bold'}}>{value.title}</Text>
        //   </ImageBackground>
          
        // </TouchableOpacity>
        
      )
    })

    return (
      <Container style={{flex:1,backgroundColor:'#F5F5F5'}}>

          <View style={{flex:1,backgroundColor:'#F5F5F5'}}>
              {rows}  
          </View>

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
