import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex:1,
    backgroundColor:'#0370D7',
  },
  mainView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  congView:{
    height:hp('70%'),
    width:wp('90%'),
    backgroundColor:'#e6ecf4',
    borderRadius:30,
    alignItems:'center'
  },
  congImage:{
    height:hp('30%'),
    width:wp('60%'),
  },
  congText:{
    fontSize:hp('5%'),
    fontWeight:'700',
  },
  scoreText:{
    fontSize:hp('6%'),
    fontWeight:'700',
    marginTop:hp('3%'),
    color:'green'
  },
  sucText:{
    fontSize:hp('2%'),
    fontWeight:'700',
    marginTop:hp('3%'),
  },
  atmView:{
    marginTop:hp('3%'),
    justifyContent:'center',
    alignItems:'center',
    width:wp('70%')
  },
  atmText:{
    fontSize:hp('2%'),
    fontWeight:'500',

  },
  shareView:{
    marginTop:hp('3%'),
    flexDirection:'row'
  },
  shareText:{
    fontSize:hp('2.5%'),
    marginTop:hp('1%')

  },
  iconView:{
    flexDirection:'row',
  },
  shareTextView:{
  }
})
