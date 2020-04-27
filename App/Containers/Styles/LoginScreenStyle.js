import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  firstView:{
    flex:1
  },
  logoView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'green'

  },
  loginView:{
    flex:2,
    alignItems:'center'

  },
  
})
