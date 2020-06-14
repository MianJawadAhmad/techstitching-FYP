import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    backgroundColor:'#e6ecf4'
  },
  header:{
    backgroundColor:'#fff',
  },
  headerView:{
    borderBottomColor:'gray',
    borderBottomWidth:1
  },
  headerViewText:{
    fontSize:hp('2.5%'),
    fontWeight:'500',
    marginLeft:hp('1%'),
    marginBottom:hp('1%'),
    marginTop:hp('1%'),
  },
  mainView:{
    flex: 1,
    borderRadius: 10,
    margin:5 
  },
  questionNumView:{
    flex:1,
    marginLeft:hp('3%'),
  },
  questionView:{
    flex:1,
    marginTop:hp('1%'),
    marginLeft:hp('3%'),
    height:hp('14%'),
    marginRight:hp('1%')
  },
  choiceView:{
    flex:1,
    marginTop:hp('1%'),
    marginRight:hp('1.5%'),
  },
  choiceListItem:{
    borderRadius:25,
    backgroundColor:'#FFFFFF',
    marginTop:hp('1.5%'),
    height:hp('11.8%'),
  },
  choiceListItemm:{
    backgroundColor:'#00FF00',
  },
  color:{
    color:'white'
  },
  choiceListItemLeft:{
    marginLeft:hp('1%'),
    backgroundColor:'#0370D7',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    height:hp('10%'),
    width:wp('15%')
  },
  choiceListItemLeftText:{
    fontSize:hp('5%'),
    color:'#fff',
    fontWeight:'700'
  },
  choiceListItemBody:{

  },
  choiceListItemBodyText:{
    fontSize:hp('2.1%'),
    color:'black'
  },
  questionNumText:{
    fontSize:hp('2.3%'),
    color:'black',
    fontWeight:'700'
  },
  questionText:{
    fontSize:hp('2.3%'),
    color:'black'
  },
  nextButton:{
    backgroundColor:'#fff',
    width:wp('80%'),
    justifyContent:'center',
    alignItems:'center',
    height:hp('8%'),
    margin:hp('3%'),
    borderRadius:25
  },
  nextButtonText:{
    color:'black',
    fontSize:hp('4%'),
    fontWeight:'700'
  }
})