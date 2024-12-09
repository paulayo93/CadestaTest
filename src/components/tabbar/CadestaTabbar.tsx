import {Canvas, Fill} from '@shopify/react-native-skia';
import {Blue, White} from '../../common/Colors.ts';
import {View, StyleSheet, Platform, Pressable} from 'react-native';
import useApplicationDimensions from '../../utils/useApplicationDimensions.tsx';
import ArcComponent from './ArcComponent.tsx';
import {
  HomeIcon,
  MerchantIcon,
  MessageIcon,
  ProjectIcon,
  TabElement,
} from './icons';
import CircleButton from './icons/CircleButton.tsx';

const CadestaTabbar = () => {
  const TabbarHeight = Platform.OS === 'ios' ? 107 : 130;
  const {width, height} = useApplicationDimensions();
  const circleRadius = (100 * 0.51) / 2;
  const buttonCenterX = 375 / 2 - circleRadius;
  return (
    <View
      style={{
        height: TabbarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - TabbarHeight,
        backgroundColor: White,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          top: TabbarHeight / 6,
          paddingHorizontal: 20,
        }}>
        <TabElement Icon={HomeIcon} active={true} />

        <Pressable style={{left: -8, zIndex: 99}}>
          <TabElement text={'Project'} Icon={ProjectIcon} active={false} />
        </Pressable>

        <Pressable
          style={{
            ...StyleSheet.absoluteFillObject,
            left: buttonCenterX,
            top: -40,
            width: circleRadius * 2,
            height: circleRadius * 2,
            zIndex: 99,
          }}>
          {({pressed}) => (
            <CircleButton radius={circleRadius} pressed={pressed} />
          )}
        </Pressable>
        <Pressable style={{left: 20, zIndex: 99}}>
          <TabElement text={'Messages'} Icon={MessageIcon} active={false} />
        </Pressable>
        <TabElement text={'Merchants'} Icon={MerchantIcon} active={false} />
      </View>
      <ArcComponent height={height} width={width} />
    </View>
  );
};

export default CadestaTabbar;
