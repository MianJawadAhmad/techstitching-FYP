import React, { Component } from 'react'
import {
  View,
  FlatList,
  Image,
  TouchableOpacity } from 'react-native'
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Header,Left,Body,Right,Container,Content, Text,Button} from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ClothsScreenStyle'


const summer = [  
  {
      id: 1,
      title: 'Gul Ahmad',
      img: require('../Images/menn1.png'),
      price: 350
  },
  {
    id: 1,
    title: 'Alkaram',
    img: require('../Images/menn2.png'),
    price: 350
},
{
  id: 1,
  title: 'Grace',
  img: require('../Images/menn7.png'),
  price: 350
},
{
id: 1,
title: 'Local',
img: require('../Images/menn4.png'),
price: 350
},
{
  id: 1,
  title: 'Grace',
  img: require('../Images/menn5.png'),
  price: 350
},
{
id: 1,
title: 'Gul Ahmad',
img: require('../Images/menn6.png'),
price: 350
},  {
  id: 1,
  title: 'Alkaram',
  img: require('../Images/menn7.png'),
  price: 350
},
{
id: 1,
title: 'Grace',
img: require('../Images/menn2.png'),
price: 350
}
]


const winter = [ 
  {
      id: 1,
      title: 'UnStitched Cloths',
      img: require('../Images/winter1.png'),
      price: 350
  },
  {
    id: 1,
    title: 'Stitched Cloths',
    img: require('../Images/men2.png'),
    price: 350
},
{
  id: 1,
  title: 'UnStitched Cloths',
  img: require('../Images/winter1.png'),
  price: 350
},
{
id: 1,
title: 'Stitched Cloths',
img: require('../Images/men2.png'),
price: 350
},
{
  id: 1,
  title: 'UnStitched Cloths',
  img: require('../Images/winter1.png'),
  price: 350
},
{
id: 1,
title: 'Stitched Cloths',
img: require('../Images/men2.png'),
price: 350
}
]


class ClothsScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      buttonColorm:'black',
      textColorm:'white',
      buttonColorw:'white',
      textColorw:'black',
      DISHES: summer,

    }
  }


  render () {


    return (
      <Container style={{flex:1}}>
      {/* <Header>
        <Left style={{flex:1}}> 
          <TouchableOpacity style={{width:wp('10%'),height:hp('4%')}} onPress={()=>this.props.navigation.navigate('TabsScreen')}>
            <Image style={{width:hp('2%'),height: hp('3%')}} source={require('../Images/back.psd')} />
          </TouchableOpacity>        
          
        </Left>
        <Body style={{flex:2}}>
          <Text style={{fontSize:20}}>
            Men UnStitched Cloths
          </Text>
        </Body>
        <Right style={{flex:1}}>
          <Button transparent>
            <Text>
              Filter
            </Text>
          </Button>
        </Right>
      </Header> */}
      
        {/* <View style={{flexDirection:'row',backgroundColor:'#F5F5F5',margin:10}}>
        <Button full style={{flex:1,borderWidth:2,backgroundColor:this.state.buttonColorm, borderColor:'black',justifyContent:'center',borderRadius:10,marginRight:2}}
          onPress={this.summer}>
            <Text style={{color:this.state.textColorm}}>Summer</Text>
          </Button>
          <Button full style={{flex:1,backgroundColor:this.state.buttonColorw, borderWidth:2, borderColor:'black',justifyContent:'center',borderRadius:10,marginLeft:2}}
          onPress={this.winter}>
            <Text style={{color:this.state.textColorw}}>Winter</Text>
          </Button>

        </View> */}
         <View style={styles.MainContainer}>
        <FlatList
          data={this.state.DISHES}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailScreen',{item})} style={{ flex: 1, flexDirection: 'column', margin: 5, justifyContent:'center',borderRadius: 10, alignItems:'center',backgroundColor:'white' }}>  

              <Image style={styles.imageThumbnail} source={item.img} />
              <Text style={{  alignContent:'center', fontSize:25}}>{item.title}</Text>
              <Text style={{  alignContent:'center', fontSize:15}}>Rs {item.price}</Text>
            
            </TouchableOpacity> 
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      
    </Container>
    )
  }

  winter = () =>{
    if(this.state.buttonColorw === 'white'){
      this.setState({buttonColorm:'white', textColorm:'black',buttonColorw:'black', textColorw:'white', DISHES:winter})
     }//else{
    //   this.setState({buttonColorm:'black', textColorm:'white',buttonColorw:'white', textColorw:'black'})
    // }
  }

  summer = () =>{
    if(this.state.buttonColorm === 'white'){
      this.setState({buttonColorm:'black', textColorm:'white',buttonColorw:'white', textColorw:'black',DISHES :summer})
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

export default connect(mapStateToProps, mapDispatchToProps)(ClothsScreen)
