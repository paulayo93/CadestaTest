import React, {useState} from 'react';
import {Animated, Platform, View} from 'react-native';
import WelcomeHeader from '../components/WelcomeHeader.tsx';
import {HeaderText, MediumText} from '../common/Text.tsx';
import {
  Black300,
  Green100,
  White,
} from '../common/Colors.ts';

import {s} from 'react-native-size-matters';
import ProjectStatusCard from '../components/ProjectStatusCard.tsx';

import {StyleSheet} from 'react-native';
import ActiveProjects from './partials/ActiveProjects.tsx';
import RecentActivityCard from '../components/RecentActivityCard.tsx';
import CadestaTabbar from '../components/tabbar/CadestaTabbar.tsx';
import ScrollView = Animated.ScrollView;

const Home = ({navigation}) => {
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = (event: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
  // console.log(layoutMeasurement, contentOffset, contentSize)

    const isEndReached =
 contentOffset.y >= contentSize.height - 20;
    setIsAtEnd(isEndReached);
  };

  const onCreateProject = () => {
    navigation.navigate('create-project');
  };
  return (
    <View style={{...StyleSheet.absoluteFillObject, backgroundColor: White}}>
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
          marginBottom: 23,
        }}>
        <ProjectStatusCard count={12} />
        <ProjectStatusCard title={'In Design'} status={'in-design'} count={7} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <ProjectStatusCard
          title={'In Construction'}
          status={'in-construction'}
          count={5}
        />
        <ProjectStatusCard title={'Completed'} status={'completed'} count={0} />
      </View>
      <View style={{marginTop: 25}} />
      <View
        style={{
          marginBottom: s(18),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <HeaderText text={'Active Project'} color={Black300} />
        <MediumText size={14} color={Green100} text={'See All'} />
      </View>
      <ScrollView
        style={{
          paddingBottom: 30,
          minHeight: 160,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <ActiveProjects />
        <ActiveProjects />
        <ActiveProjects />
        <ActiveProjects />
      </ScrollView>

      <View
        style={{
          marginBottom: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <HeaderText text={'Recent Activity'} color={Black300} />
        <MediumText size={14} color={Green100} text={'See All'} />
      </View>

      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{paddingHorizontal: 20, }}>
        <RecentActivityCard />
        <RecentActivityCard />
        <RecentActivityCard />
        <RecentActivityCard />
      </ScrollView>

      <CadestaTabbar onPress={onCreateProject}/>
    </View>
  );
};

const styles = StyleSheet.create({

})

export default Home;
