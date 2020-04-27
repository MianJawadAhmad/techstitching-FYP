import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView,TouchableOpacity,Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/FilterScreenStyle'
import {Header,Left,Body,Right,Container,Content, Text,Button} from 'native-base'
class FilterScreen extends Component {
  render () {
    return (
      <Container>
        <Header style={{backgroundColor:'white'}}>
          <Left style={styles.headerItem}>
            <TouchableOpacity style={styles.leftIconHeader} onPress={()=>this.props.navigation.navigate('')}>
              <Image style={styles.leftIconHeaderImage} source={require('../Images/back.png')} />
            </TouchableOpacity>
          </Left>
          <Body style={styles.headerItem}>
            <Text style={{alignSelf:'center'}}>Filter </Text>
          </Body>
          <Right style={styles.headerItem}>
            <Button transparent >
            <Text style={styles.rightButtonText}>
              Done
            </Text>
          </Button>
            
          </Right>
        </Header>
        <Content>

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

export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen)
