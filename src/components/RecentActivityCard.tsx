import {View, StyleSheet} from 'react-native';
import {ClockChecked} from '../assets/icons';
import {MediumText, RegularText} from '../common/Text.tsx';
import {BlackMain, White} from '../common/Colors.ts';
import React from 'react';
import {boxShadow} from '../utils';

const RecentActivityCard = () => {

  return (
    <View
      style={styles.container}>
      <View style={{flexDirection: 'row',}}>
        <View style={{alignSelf: 'center', marginRight: 9}}>
          <ClockChecked />
        </View>
      <View>
      <View
        style={styles.title}>
        <MediumText text={'Design Approved'}  color={BlackMain} size={12} />
        <MediumText text={' - '} />
        <RegularText text={'Modern Villa Project'}  color={BlackMain} />
      </View>
        <View style={{alignSelf: 'flex-start'}}>
          <RegularText
            color={BlackMain}
            size={10}
            style={styles.lineHeight}
            text={'2 hours ago'}
          />
        </View>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

    backgroundColor: White,
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderColor: White,
    borderWidth: 0.588899,
    // alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
    ...boxShadow(10, 10, 10, 'rgba(0, 0, 0, 0.03)', 1, 12),

  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineHeight: {lineHeight: 13.5}
});

export default RecentActivityCard;
