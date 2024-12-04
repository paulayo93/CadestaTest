import {Image, Text, View, StyleSheet} from 'react-native';
import {ms, s} from 'react-native-size-matters';
import {NotifyIcon} from '../assets/icons';
import {MediumText} from '../common/Text';
import {Gray} from '../common/Colors.ts';

const WelcomeHeader = () => (
  <View style={styles.container}>

    <View style={styles.wrapper}>
      <View>
        <Image
          style={styles.avatar}
          source={require('./../assets/image/AJ-image.png')}
        />
      </View>
      <View style={styles.textWrapper}>
        <MediumText
          text={'Welcome,'}
          style={{
            marginBottom: 4,
            fontSize: s(16),
            lineHeight: 20,
            color: 'Black',
          }}/>
        <MediumText
          text={'John Abayomi'}
          style={{
            fontSize: s(12),
            lineHeight: 16,
            color: Gray
          }}/>
      </View>
    </View>

    <View>
      <NotifyIcon />
    </View>
  </View>

);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
  },
  wrapper: {flexDirection: 'row', alignItems: 'center'},
  avatar: {
    borderWidth: 0,
    width: ms(41),
    height: ms(41),
    borderRadius: 26,
  },
  textWrapper: {paddingHorizontal: ms(10)}
})

export default WelcomeHeader
