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
  view1:{
    flex:1,

    justifyContent:'center',
    alignItems:'center'
  },
  view2:{
    flex:2,
  },
  button:{
    flex: 1, 
    flexDirection: 'column',
    height: hp('23%'),
    width: wp('90%') , 
    margin:10, 
    justifyContent:'flex-start', 
    backgroundColor:'white',
    borderRadius:10,
    alignItems:'flex-start',
  },
  image:{
    flex: 1.5, 
    height:hp('3%'),
    width:wp('20%'),
    marginTop:5
  },
  buttonText:{
    fontSize:hp('2%'), 
    color:'black',
    flex:1,
    fontWeight:'700',
    marginTop:10
  },
  buttonTextDec:{
    fontSize:hp('1.5%'), 
    color:'black',
    flex:0.8,

  }
})
