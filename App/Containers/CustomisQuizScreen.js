import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView,TouchableOpacity,Image,FlatList,View,Slider } from 'react-native'
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text,ListItem,CheckBox } from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Creators from '../Redux/CustomRedux'
import { bindActionCreators } from 'redux';
// Styles
import styles from './Styles/CustomisQuizScreenStyle'

class CustomisQuizScreen extends Component {

  constructor(props){
    super(props);
    this.state = { 
      value: 0,
      slider: [
        {size:80,name:'Anatomy'},
        {size:90,name:'Histology'},
        {size:100,name:'Embryology'},
        {size:20,name:'Neuro anatomy'},
        {size:50,name:'Physiology'},
        {size:20,name:'pathology'},
        {size:50,name:'Pharmacology'},
        {size:20,name:'Biochemistry'},
        {size:50,name:'Gynaecology'},
      ],
    }
  } 
  getVal(element){
   
     this.setState({
        
     })


  }


//   defaultSizeValue = (element) =>{

//     if(element.name == 'XS'){
//         this.setState({
//           slider : this.state.sliderArrayXS

//         })
//     }else if(element.name == 'S'){
//       this.setState({
//         slider : this.state.sliderArrayS
//       })
//   }else if(element.name == 'M'){
//     this.setState({
//       slider : this.state.sliderArrayM
//     })
// }else if(element.name == 'L'){
//   this.setState({
//     slider : this.state.sliderArrayL
//   })
// }else if(element.name == 'XL'){
//   this.setState({
//     slider : this.state.sliderArrayXL
//   })
// }

//   }

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
        <ListItem>
        <Body>
        <Text style={styles.sliderText}>{element.name}</Text>
        </Body>
      </ListItem>
          
      
      );
    });
  };

  valueChange = (val) =>{
    this.props.customValue(val)
  }

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
          <Text style={{alignSelf:'center'}}>Create Quiz</Text>
        </Body>
        <Right style={styles.headerItem}>
        </Right>
      </Header>
      <Content scrollEnabled={false} style={{flex:1}}>
        <View style={styles.container}>
            <Text style={styles.mainText}>Select Numbers of MCQs</Text>
            <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center'}}>
              <Slider
                style={{ width: 300 }}
                step={1}
                minimumValue={18}
                maximumValue={71}
                value={this.state.value}
                onValueChange={(val) => this.valueChange(val)}
                onSlidingComplete={ val => this.getVal(val)}
              />
              <Text style={styles.welcome}>
                {this.props.value}
              </Text> 
            </View>  
            {this.slider()}
        </View>
        <Button style={{margin:10,alignItems:'center',justifyContent:'center'}}
        onPress={()=>this.props.navigation.navigate('QuizTempScreen',{item:'custom'})}>
          <Text >Next</Text>
        </Button>
      </Content>
    </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.custom.value
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      customValue: Creators.customValue,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomisQuizScreen)
