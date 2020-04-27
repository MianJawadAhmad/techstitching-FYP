import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView,Image,TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text, View, Button,CheckBox ,Left,Right} from 'native-base';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PaymentScreenStyle'

class PaymentScreen extends Component {
  render () {
    return (
      <Container styles={styles.container}>
        <Header>
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
        <Content contentContainerStyle={styles.content}>
          <Card style={styles.card}>
            <CardItem styles={styles.container}>
              <Body>
                <Text>
                   Delivery Address
                </Text>
                <View style= {styles.addressView}>
                  <View style ={{flex:3,margin:10}}>
                    <Text>
                      Home Address
                    </Text>
                    <Text>
                    Mohala Gulbahar
                    </Text>
                  </View>
                  <View style ={{flex:1,justifyContent:'center',alignItems:'center',margin:10}}>
                    <Image style={{width:30,height:30}} source={require('../Images/check.png')}></Image>
                  </View>
                </View>
              </Body>
            </CardItem>

            <CardItem>
              <Body>
                <Text style={{}}>
                   Payment Method
                </Text>
                <View style= {styles.addressView}>
                <View style ={{flex:1,justifyContent:'center',alignItems:'center',margin:10}}>
                    <Image style={{width:30,height:30}} source={require('../Images/paypal.png')}></Image>
                  </View>
                  <View style ={{flex:3,margin:10}}>
                    <Text>
                    Mohala Gulbahar
                    </Text>
                  </View>
                  <View style ={{flex:1,justifyContent:'center',alignItems:'center',margin:10}}>
                    <Image style={{width:30,height:30}} source={require('../Images/check.png')}></Image>
                  </View>
                </View>
                <View style= {styles.addressView}>
                <View style ={{flex:1,justifyContent:'center',alignItems:'center',margin:10}}>
                    <Image style={{width:30,height:30}} source={require('../Images/visa.png')}></Image>
                  </View>
                  <View style ={{flex:3,margin:10}}>
                    <Text>
                    Mohala Gulbahar
                    </Text>
                  </View>
                  <View style ={{flex:1,justifyContent:'center',alignItems:'center',margin:10}}>
                    <Image style={{width:30,height:30}} source={require('../Images/check.png')}></Image>
                  </View>
                </View>
                <View style= {styles.addressView}>
                <View style ={{flex:1,justifyContent:'center',alignItems:'center',margin:10}}>
                    <Image style={{width:35,height:30}} source={require('../Images/master.png')}></Image>
                  </View>
                  <View style ={{flex:3,margin:10}}>
                    <Text>
                    Mohala Gulbahar
                    </Text>
                  </View>
                  <View style ={{flex:1,justifyContent:'center',alignItems:'center',margin:10}}>
                    <Image style={{width:30,height:30}} source={require('../Images/check.png')}></Image>
                  </View>
                </View>
                <Button style={styles.PayButton}>
                  <Text style={{alignSelf:'center',textAlign:'center'}}>Payment Proced</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen)
