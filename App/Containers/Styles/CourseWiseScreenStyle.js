import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    backgroundColor:'#e6ecf4',
    
  },
  mainView:{
    flex:1,
    
  },
  button:{
    flex: 1, 
    flexDirection: 'column',
    height: hp('20%'),
    width: wp('90%') , 
    margin:5, 
    justifyContent:'center', 
    backgroundColor:'white',
    borderRadius:10,
    alignItems:'center'
  },
  image:{
    flex: 1, 
    height:hp('3%'),
    width:wp('20%'),
    marginTop:20
  },
  buttonText:{
    fontSize:hp('2.2%'), 
    color:'black',
    flex:1,
    fontWeight:'500',
    marginTop:20
  }
})


