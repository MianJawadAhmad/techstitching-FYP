import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem } from 'native-base';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Creators from '../Redux/QuizRedux'
// Styles
import { shuffle } from "lodash";
import styles from './Styles/QuizTempScreenStyle'
import { bindActionCreators } from 'redux';
import data from '../Services/Qus.json'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
/*,
    ,
    {
        "id": 2,
        "question":"Sympathetic Nervous system fibers originate in the spinal cord level b/w",
        "a":"T7 - L1",
       " b":"T8 - L2",
        "c":"T9 - L3",
        "d":"T10 - L5",
        "answer":"B"
    },
    {
        "id": 3,
        "question":"TMotility of GI smooth muscles are primarily controlled by ",
        "a":"Myenteric plexus ",
       " b":"Meisenner plexus ",
        "c":"Parasympathetic Nervous system",
        "d":"Non of the above",
        "answer":"A"
    }

    */



class QuizTempScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 2,
      quisCounter:1,
      subject:data,
      data: data,
      qusNum: 0,
      qusNumber:1,
      toucheda: false,
      touchedb: false,
      touchedc: false,
      touchedd: false,
      incorrecta: false,
      incorrectb: false,
      incorrectc: false,
      incorrectd: false,
      backgroundColora:'',
      backgroundColorb:'',
      backgroundColorc:'',
      backgroundColord:'',
      disable:false,
      disables:true,

    }
  }

  componentDidMount = () =>{
    console.log(this.props.navigation.state.params.item)
    if (this.props.navigation.state.params.item === 1){
      this.setState(
        {
         subject: this.state.data
        }
      )
    }else if(this.props.navigation.state.params.item === 'custom'){
      this.setState(
        {
          qusNum : Math.floor(Math.random() * this.props.value) + 1,
        }
      )
    }
    console.log('data',this.state.data)
    
  }

  nextQuestion = () => {
    this.setState({
      qusNum: this.state.qusNum + 1,
      qusNumber: this.state.qusNumber + 1,
      toucheda: false,
      touchedb: false,
      touchedc: false,
      touchedd: false,
      incorrecta: false,
      incorrectb: false,
      incorrectc: false,
      incorrectd: false,
      backgroundColora:'',
      backgroundColorb:'',
      backgroundColorc:'',
      backgroundColord:'',
      disable:false,
      disables:true,
      quisCounter : this.state.quisCounter + 1
    })
    var count = Object.keys(this.state.data).length;
    if(this.state.quisCounter === this.props.value){
      this.props.navigation.navigate('CongratsScreen',{item:this.state.quisCounter})
    }
    if(this.props.navigation.state.params.item === 'custom' ){
      this.setState(
        {
          qusNum : Math.floor(Math.random() * this.props.value) + 1,
        }
      )
    }
  }

  checkAnswera = (item) => { 
    if (item.answer === 'A') {
      this.setState({
        toucheda : true,
        backgroundColora:'#00FF00',
        disable:true,
        disables:false
      })
      this.props.incCounter()
    }else{
      this.setState({
        incorrecta: true,
        backgroundColora:'red',
        disable:true,
        disables:false
      })  
    }
  }

  checkAnswerb = (item) => { 
    if (item.answer === 'B') {
      this.setState({
        touchedb : true,
        backgroundColorb:'#00FF00',
        disable:true,
        disables:false
      })
      this.props.incCounter()
    }else{
      this.setState({
        incorrectb: true,
        backgroundColorb:'red',
        disable:true,
        disables:false
      })  
    }
  }

  checkAnswerc = (item) => { 
    if (item.answer === 'C') {
      this.setState({
        touchedc : true,
        backgroundColorc:'#00FF00',
        disable:true,
        disables:false
      })
      this.props.incCounter()
    } else{
      this.setState({
        incorrectc: true,
        backgroundColorc:'red',
        disable:true,
        disables:false
      })  
    }
  }


  checkAnswerd = (item) => { 
    if (item.answer === 'D') {
      this.setState({
        touchedd : true,
        backgroundColord:'#00FF00',
        disable:true,
        disables:false
      })
      this.props.incCounter()
    }else{
      this.setState({
        incorrectd: true,
        backgroundColord:'red',
        disable:true,
        disables:false
      })  
    }
    
  }



  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left style={{flex:1}}></Left>
          <Body style={{flex:2}}>
          <Text style={styles.headerViewText}>Quiz Marks: {this.props.counter}</Text>
            </Body>
          <Right style={{flex:1}}></Right>
        </Header>
        <Content >
          <View style={styles.mainView}>
            <View style={styles.questionNumView}>
              <Text style={styles.questionNumText}>Question: {this.state.qusNumber}</Text>
              {/* <Text style={styles.questionNumText}>Question ID check: {this.state.data[this.state.qusNum].id}</Text> */}
            </View>
            <View style={styles.questionView}>
              <Text style={styles.questionText}>{this.state.data[this.state.qusNum].question}</Text>
            </View>
            <View style={styles.choiceView}>
              <List>
                <ListItem disabled={this.state.disable} noBorder thumbnail style={[styles.choiceListItem, this.state.toucheda === true || this.state.incorrecta === true? {backgroundColor:this.state.backgroundColora} : styles.choiceListItem]} onPress={() => this.checkAnswera(this.state.data[this.state.qusNum])}>
                  <Left style={styles.choiceListItemLeft}>
                    <Text style={styles.choiceListItemLeftText}>A</Text>
                  </Left>
                  <Body style={styles.choiceListItemBody}>
                    <Text style={styles.choiceListItemBodyText}> {this.state.data[this.state.qusNum].a}</Text>
                  </Body>
                </ListItem>
                <ListItem disabled={this.state.disable} noBorder thumbnail style={[styles.choiceListItem, this.state.touchedb === true || this.state.incorrectb === true ? {backgroundColor:this.state.backgroundColorb}  : styles.choiceListItem]} onPress={() => this.checkAnswerb(this.state.data[this.state.qusNum])}>
                  <Left style={styles.choiceListItemLeft}>
                    <Text style={styles.choiceListItemLeftText}>B</Text>
                  </Left>
                  <Body style={styles.choiceListItemBody}>
                    <Text style={styles.choiceListItemBodyText}> {this.state.data[this.state.qusNum].b}</Text>
                  </Body>
                </ListItem>
                <ListItem disabled={this.state.disable} noBorder thumbnail style={[styles.choiceListItem, this.state.touchedc === true || this.state.incorrectc === true? {backgroundColor:this.state.backgroundColorc}  : styles.choiceListItem]} onPress={() => this.checkAnswerc(this.state.data[this.state.qusNum])}>
                  <Left style={styles.choiceListItemLeft}>
                    <Text style={styles.choiceListItemLeftText}>C</Text>
                  </Left>
                  <Body style={styles.choiceListItemBody}>
                    <Text style={styles.choiceListItemBodyText}> {this.state.data[this.state.qusNum].c}</Text>
                  </Body>
                </ListItem>
                <ListItem disabled={this.state.disable} noBorder thumbnail style={[styles.choiceListItem, this.state.touchedd === true || this.state.incorrectd === true? {backgroundColor:this.state.backgroundColord}  : styles.choiceListItem]} onPress={() => this.checkAnswerd(this.state.data[this.state.qusNum])}>
                  <Left style={styles.choiceListItemLeft}>
                    <Text style={styles.choiceListItemLeftText}>D</Text>
                  </Left>
                  <Body style={styles.choiceListItemBody}>
                    <Text style={styles.choiceListItemBodyText}> {this.state.data[this.state.qusNum].d}</Text>
                  </Body>
                </ListItem>
              </List>
            </View>
            <View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Button disabled={this.state.disables} style={styles.nextButton} onPress={this.nextQuestion}>
                <Text style={styles.nextButtonText}>NEXT</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.quiz.counter,
    summer: state.quiz.summer,
    value: state.custom.value
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incCounter: () => dispatch({type: INC_COUNTER}),
//     decCounter: () => dispatch({type: DEC_COUNTER})
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    emptyCart: Creators.emptyCart,
    incCounter: Creators.incCounter,
    decCounter: Creators.decCounter
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizTempScreen)
