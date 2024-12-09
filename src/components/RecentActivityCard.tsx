import {View, StyleSheet} from 'react-native';
import {ClockChecked} from '../assets/icons';
import {MediumText, RegularText} from '../common/Text.tsx';
import {BlackMain, White} from '../common/Colors.ts';
import React from 'react';
import {s} from 'react-native-size-matters';

const RecentActivityCard = () => {

  return (
    <View
      style={styles.container}>
      <View>
        <ClockChecked />
      </View>
      <View
        style={styles.title}>
        <MediumText text={'Design Approved'}  color={BlackMain} size={12} />
        <MediumText text={' - '} />
        <RegularText text={'Modern Villa Project'}  color={BlackMain} />
      </View>
      <View>
        <RegularText
          color={BlackMain}
          size={10}
          style={styles.lineHeight}
          text={'2 hours ago'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: White,
    borderWidth: 0.5,
    alignItems: 'center',
    borderRadius: 8,

  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineHeight: {lineHeight: 13.5}
});

export default RecentActivityCard;
