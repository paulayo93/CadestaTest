import {View, StyleSheet} from 'react-native';
import {boxShadow} from '../../utils';
import {HeaderText, MediumText, RegularText} from '../../common/Text.tsx';
import {
  Black100,
  BlackMain,
  Gray100,
  Gray200,
  Green100,
  Orange,
} from '../../common/Colors.ts';
import {Calendar, Clock, Message, VerticalDots} from '../../assets/icons';
import React from 'react';
import ProgressBar from '../../components/ProgressBar.tsx';
import Tag from '../../components/Tag.tsx';
import ActivityElement from '../../components/ActivityElement.tsx';
import {s} from 'react-native-size-matters';

const ActiveProjects = () => {
  return (
    <View style={[styles.container]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <HeaderText
            text={'Modern Villa Project 1'}
            size={14}
            color={BlackMain}
          />
          <MediumText
            text={'Residential Building'}
            color={Black100}
            size={10}
            style={{lineHeight: 13.5}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Tag
            textValue={'In Design'}
            textColor={Orange}
            style={{height: 20, right: 15}}
          />
          <VerticalDots />
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 2,
          }}>
          <MediumText
            color={Gray200}
            text={'Overall Progress'}
            size={10}
            style={{lineHeight: 13.5}}
          />
          <RegularText text={'60%'} />
        </View>
        <ProgressBar
          height={8}
          progress={60}
          padded={true}
          outerBackgroundColor={Gray100}
          innerBackgroundColor={Green100}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <ActivityElement Icon={Calendar} />
        <ActivityElement
          title={'Timeline'}
          subTitle={'4 Months'}
          Icon={Clock}
        />
        <ActivityElement title={'Comments'} subTitle={'2 New'} Icon={Message} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: s(8),
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 15,
    minHeight: 132.9,
    minWidth: 300,
    marginRight: 20,
    ...boxShadow(10, 10, 10, 'rgba(0, 0, 0, 0.03)', 1, 20),
  },
});
export default ActiveProjects;
