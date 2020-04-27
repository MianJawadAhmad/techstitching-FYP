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
  }
})
