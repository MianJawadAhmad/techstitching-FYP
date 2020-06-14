import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView, View,FlatList,Image } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
import styles from './Styles/CourseWiseScreenStyle'

// pathology

// *General pathology
// *special pathology

// short..

// Pharmacology

// Biochemistry

// Gynaecology

const Data = [  
  {
      id: 1,
      title: 'Anatomy',
      icon: require('../Images/1.png'),

  },
  {
    id: 2,
    title: 'Histology',
    icon: require('../Images/2.png'),
    },
    {
      id: 3,
      title: 'Embryology',
      icon: require('../Images/3.png'),
    },
    {
    id: 4,
    title: 'Neuro anatomy',
    icon: require('../Images/4.png'),
    },
    {
      id: 5,
      title: 'Physiology',
      icon: require('../Images/5.png'),
    },
    {
    id: 6,
    title: 'pathology',
    icon: require('../Images/6.png'),
    },
    {
    id: 7,
    title: 'Pharmacology',
    icon: require('../Images/Pharmacology.png'),
    },
    {
      id: 8,
      title: 'Biochemistry',
      icon: require('../Images/Biochemistry.png'),
    },
    {
    id: 9,
    title: 'Gynaecology',
    icon: require('../Images/Gynaecology.png'),
    }
    ]


class CourseWiseScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      Data : Data
    }
  }

  Select = (item) => {
    if (item.id === 1){
      this.props.navigation.navigate('QuizTempScreen',{item: '1'})
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
        <Header>

        </Header>
        <Content>
              <FlatList
              scrollEnabled={false}
                contentContainerStyle={{marginLeft:20, marginRight:20 }}
                  data={this.state.Data}
                  renderItem={({ item }) => (
                    <Button light style={styles.button}
                    onPress={()=> this.Select(item)}>  
                    <Image source={item.icon} style={styles.image} resizeMode='cover'/>
                      <Text style={styles.buttonText}>{item.title}</Text>
                    </Button> 
                    )}
                    //Setting the number of column
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                  />
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseWiseScreen)
