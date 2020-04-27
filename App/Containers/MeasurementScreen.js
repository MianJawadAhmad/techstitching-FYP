import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView,TouchableOpacity,Image,FlatList,View,Slider } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {Header,Left,Body,Right,Container,Content, Text,Button} from 'native-base'
// Styles
import styles from './Styles/MeasurementScreenStyle'
import { from } from 'seamless-immutable'
import { ThemeColors } from 'react-navigation'
import { T } from 'ramda'

class MeasurementScreen extends Component {



  constructor(props){
    super(props);
    this.state = { 
      age: 18,
      sliderArrayXS:[
        {size:10,name:'Neck'},
        {size:20,name:'Chest'},
        {size:30,name:'hips'},
        {size:40,name:'Shoulder'},
        {size:50,name:'Neck'},
      ],
      sliderArrayS:[
        {size:15,name:'Neck'},
        {size:25,name:'Chest'},
        {size:35,name:'hips'},
        {size:45,name:'Shoulder'},
        {size:55,name:'Neck'},
      ],
      sliderArrayM:[
        {size:20,name:'Neck'},
        {size:30,name:'Chest'},
        {size:40,name:'hips'},
        {size:50,name:'Shoulder'},
        {size:60,name:'Neck'},
      ],
      sliderArrayL:[
        {size:30,name:'Neck'},
        {size:40,name:'Chest'},
        {size:50,name:'hips'},
        {size:60,name:'Shoulder'},
        {size:70,name:'Neck'},
      ],
      sliderArrayXL:[
        {size:80,name:'Neck'},
        {size:90,name:'Chest'},
        {size:100,name:'hips'},
        {size:20,name:'Shoulder'},
        {size:50,name:'Neck'},
      ],
    
       button : [
        {name:'XS'},
        {name:'S'},
        {name:'M'},
        {name:'L'},
        {name:'XL'},
      ],
      array: [
        {name:'XS'},
        {name:'S'},
        {name:'M'},
        {name:'L'},
        {name:'XL'},
      ],
      slider: [
        {size:80,name:'Neck'},
        {size:90,name:'Chest'},
        {size:100,name:'hips'},
        {size:20,name:'Shoulder'},
        {size:50,name:'Neck'},
      ],
    }
  } 
  getVal(element){
   
     this.setState({
        
     })


  }


  defaultSizeValue = (element) =>{

    if(element.name == 'XS'){
        this.setState({
          slider : this.state.sliderArrayXS

        })
    }else if(element.name == 'S'){
      this.setState({
        slider : this.state.sliderArrayS
      })
  }else if(element.name == 'M'){
    this.setState({
      slider : this.state.sliderArrayM
    })
}else if(element.name == 'L'){
  this.setState({
    slider : this.state.sliderArrayL
  })
}else if(element.name == 'XL'){
  this.setState({
    slider : this.state.sliderArrayXL
  })
}

  }

  defaultSize = () => {
    return this.state.array.map(element => {
      return (
        <Button style={{borderRadius:120,width:60,height:60}} onPress={() => {this.defaultSizeValue(element)}}>
          <Text style={{flex:1,textAlign:'center'}}>{element.name}</Text>
          </Button>
      );
    });
  };

  slider = () => {
    return this.state.slider.map(element => {
      return (
        <View>
          <Text style={{fontSize:20,margin:15,fontWeight:'bold'}}>{element.name}</Text>
        <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center'}}>
        <Slider
          style={{ width: 300 }}
          step={1}
          minimumValue={18}
          maximumValue={71}
          value={element.size}
          onValueChange={(val) => {element.size = val}}
          onSlidingComplete={ val => this.getVal(element)}
        />
        <Text style={styles.welcome}>
          {element.size + ' in'}
        </Text> 
      </View>  
      </View>
      );
    });
  };


  render () {
    return (
      <Container style={{flex:1}}>
        <Header style={{backgroundColor:'white'}}>
          <Left style={styles.headerItem}>
            <TouchableOpacity style={styles.leftIconHeader} onPress={()=>this.props.navigation.navigate('')}>
              <Image style={styles.leftIconHeaderImage} source={require('../Images/back.png')} />
            </TouchableOpacity>
          </Left>
          <Body style={styles.headerItem}>
            <Text style={{alignSelf:'center'}}>Measurement</Text>
          </Body>
          <Right style={styles.headerItem}>
            {/* <Button transparent >
            <Text style={styles.rightButtonText}>
              Done
            </Text>
          </Button> */}
          </Right>
        </Header>
        <Content scrollEnabled={false} style={{flex:1}}>
          <Text style={{fontSize:20,margin:15,fontWeight:'bold'}}>Select a 
          pre-set size and then edit as per your requirment</Text>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          {this.defaultSize()}
          </View>
          <View style={styles.container}>
            

              <Text style={{fontSize:20,margin:15,fontWeight:'bold'}}>Save Measurement</Text>
              {this.slider()}
          </View>
          <Button style={{margin:10,alignItems:'center',justifyContent:'center'}}
          onPress={()=>this.props.navigation.navigate('PaymentScreen')}>
            <Text >Next</Text>
          </Button>
        </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(MeasurementScreen)
