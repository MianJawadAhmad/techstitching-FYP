import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: hp('2%'),
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('10%'),
    width:wp('30%'),
    margin:5,
    borderRadius: 10
  },
})
