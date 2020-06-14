import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView, View,FlatList,Image } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Styles
import styles from './Styles/MainScreenStyle'

const Data = [  
  {
      id: 1,
      title: 'Course Wise MCQs',
      dec:'Select specific subject',
      icon: require('../Images/cquiz.png'),

  },
  {
    id: 2,
    title: 'All Subjects Quiz',
    dec: 'Quiz including all subjects MCQs',
    icon: require('../Images/allquiz.png'),
    },
    {
      id: 3,
      title: 'Customize Quiz',
      dec:'Create your own quiz',
      icon: require('../Images/quiz.png'),
    },
    {
    id: 4,
    title: 'Group chat Discussion',
    dec:'Discussion and asking questions',
    icon: require('../Images/chaticon.png'),
    }
    ]

class MainScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      Data : Data
    }
  }

  Select = (item) => {
    if (item.id === 1){
      this.props.navigation.navigate('CourseWiseScreen')
    }else if (item.id === 2){
      this.props.navigation.navigate('GalleryScreen')
    }else if (item.id === 3){
      this.props.navigation.navigate('TeamScreen')
    }else if (item.id === 4){
      this.props.navigation.navigate('QuizScreen')
    }else if (item.id === 5){
      this.props.navigation.navigate('PartnersScreen')
    }else if (item.id === 6){
      this.props.navigation.navigate('LocationScreen')
    }
  }
  
  render () {
    return (
      <Container style={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.view1}>
          <Image source={require('../Images/partlogo.png')} style={{flex: 1, height:hp('15%'),width:wp('80%'),marginTop:20}} resizeMode='cover'/>
          </View>
          <View style={styles.view2}>
              <FlatList
              scrollEnabled={false}
                contentContainerStyle={{marginLeft:20, marginRight:20 }}
                  data={this.state.Data}
                  renderItem={({ item }) => (
                    <Button light style={styles.button}
                    onPress={()=> this.Select(item)}>  
                    <Image source={item.icon} style={styles.image} resizeMode='cover'/>
                      <Text style={styles.buttonText}>{item.title}</Text>
                      <Text style={styles.buttonTextDec}>{item.dec}</Text>
                    </Button> 
                    )}
                    //Setting the number of column
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                  />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
