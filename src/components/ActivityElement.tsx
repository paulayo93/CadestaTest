import {View} from 'react-native';
import {HeaderText, MediumText} from '../common/Text.tsx';
import {Black100, BlackMain} from '../common/Colors.ts';
import React from 'react';


const ActivityElement = ({title, subTitle, Icon}) => (
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <View style={{marginRight: 7}}>
      <Icon />
    </View>
    <View>
      <MediumText
        text={title || 'Start Date'}
        size={10}
        style={{lineHeight: 13.5, marginBottom: 3}}
        color={Black100}
      />
      <HeaderText
        text={subTitle || 'Jan 15, 2024'}
        size={10}
        style={{lineHeight: 13.5}}
        color={BlackMain}
      />
    </View>
  </View>
);

export default ActivityElement;
