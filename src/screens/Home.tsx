import React, {ElementType} from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
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
  Clock, ClockChecked,
  Message,
  VerticalDots,
} from '../assets/icons';
import {ms, s} from 'react-native-size-matters';
import ProjectStatusCard from '../components/ProjectStatusCard.tsx';

import {StyleSheet} from 'react-native';
import ActiveProjects from './partials/ActiveProjects.tsx';
import RecentActivityCard from '../components/RecentActivityCard.tsx';

const Home = () => {
  return (
    <Container padded={true}>
      <WelcomeHeader />
      <View style={{marginVertical: s(25)}} />

      <ProjectStatusCard />
      <View style={{marginVertical: s(20)}} />

      <ActiveProjects />

      <View style={{marginVertical: s(25)}} />

      <RecentActivityCard />

    </Container>
  );
};

export default Home;
