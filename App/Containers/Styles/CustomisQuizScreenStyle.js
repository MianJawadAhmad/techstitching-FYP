import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerItem:{
    flex:1
  },
  leftIconHeader:{
    width:wp('10%'),
    height:hp('4%')
  },
  leftIconHeaderImage:{
    width:hp('2%'),
    height: hp('3%')
  },
  rightIconHeader:{
    width:wp('10%'),
    height:hp('5%'),
    alignItems:'center',
    justifyContent:'center'
  },
  rightButtonText:{
    fontSize:hp('2%'),
    color:'black'
  },
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
    marginLeft:20,
    borderBottomWidth:2,
    borderBottomColor:'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  mainText:{
    fontSize:hp('2.5%'),
    margin:hp('1%'),
    fontWeight:'bold'
  },
  sliderText:{
    fontSize:hp('2%'),
    margin:hp('1%'),
    fontWeight:'500'
  }
})
