import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Container, Text,Header, Tab, Tabs, TabHeading} from 'native-base'
import HomeScreen from './HomeScreen'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TabsScreenStyle'

class TabsScreen extends Component {
  constructor(props){
    super(props);

  }
  render () {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Male</Text></TabHeading>}>
            <HomeScreen navigation={this.props.navigation} tabLabel="Agenda"/>
          </Tab>
          <Tab heading={ <TabHeading><Text>Female</Text></TabHeading>}>
            <HomeScreen />
          </Tab>
        </Tabs>
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

export default connect(mapStateToProps, mapDispatchToProps)(TabsScreen)
