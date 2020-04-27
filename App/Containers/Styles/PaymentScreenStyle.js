import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  addressView:{
    borderWidth: 2,
    borderColor: 'green',
    width:'90%',
    flexDirection:'row',
    alignSelf:'center',
    margin:10,
    borderRadius:5
  },
  PayButton:{
    alignSelf:'center',
    width:'90%',
    marginTop:50,
    justifyContent:'center'
  },
  card:{
    width:'90%'
  },
  content:{
    flex:1,
    alignItems:'center',
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
  headerItem:{
    flex:1
  }
})
