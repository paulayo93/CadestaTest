import React, {ElementType} from 'react';
import {Animated, Platform, TextStyle, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import WelcomeHeader from '../components/WelcomeHeader.tsx';
import Container from '../common/Container.tsx';
import {HeaderText, MediumText, RegularText} from '../common/Text.tsx';
import {
  Black300,
  BlackMain,
  Blue,
  Gray100,
  Gray200,
  Black100,
  Gray500,
  Green,
  Green100,
  Orange,
  Orange100,
  Teal,
  White,
} from '../common/Colors.ts';
import {
  BriefCase,
  Calendar,
  Calendar2,
  Clock,
  ClockChecked,
  Message,
  VerticalDots,
} from '../assets/icons';
import {ms, s} from 'react-native-size-matters';
import ProjectStatusCard from '../components/ProjectStatusCard.tsx';

import {StyleSheet} from 'react-native';
import ActiveProjects from './partials/ActiveProjects.tsx';
import RecentActivityCard from '../components/RecentActivityCard.tsx';
import {Canvas} from '@shopify/react-native-skia';
import CadestaTabbar from '../components/tabbar/CadestaTabbar.tsx';
import ScrollView = Animated.ScrollView;


const Home = () => {
  return (
    <View style={{...StyleSheet.absoluteFillObject}}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? 56 : 30,
          paddingHorizontal: 16,
          paddingBottom: 30,
        }}>
        <WelcomeHeader />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginBottom: 23
        }}>
        <ProjectStatusCard />
        <ProjectStatusCard />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <ProjectStatusCard />
        <ProjectStatusCard />
      </View>
      <View  style={{marginTop: 30}}/>
      <ScrollView style={{paddingBottom: s(30)}} horizontal showsHorizontalScrollIndicator={false}>
        <ActiveProjects />
        <ActiveProjects />
        <ActiveProjects />
        <ActiveProjects />
      </ScrollView>
      <View style={{marginBottom: s(30)}} />
      <ScrollView style={{}}>
        <RecentActivityCard />
        <RecentActivityCard />
        <RecentActivityCard />
        <RecentActivityCard />
      </ScrollView>

      <CadestaTabbar />
    </View>
  );
};

export default Home;
