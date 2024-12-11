import {StyleSheet} from 'react-native';
import React from 'react';
import {
  Canvas,
  Circle,
  Line,
  LinearGradient,
  Shadow,
  vec,
} from '@shopify/react-native-skia';
import {White} from '../../../common/Colors.ts';

interface CircleButtonProps {
  radius: number;
  pressed: Boolean;
}
const CircleButton = ({radius, pressed}: CircleButtonProps) => {
  const diameter = radius * 2;
  return (
    <Canvas style={{width: diameter, height: diameter}}>
      <Circle cx={radius} cy={radius} r={radius}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(diameter, diameter)}
          colors={[
            pressed ? '#F0A500' : '#F0A500',
            pressed ? '#F0A500' : '#F0A500',
          ]}
        />
        <Shadow dx={1} dy={1} blur={0.5} color={'white'} inner />
      </Circle>

      <Line
        p1={vec(radius - radius / 3, radius)}
        p2={vec(radius + radius / 3, radius)}
        style={'stroke'}
        strokeCap={'round'}
        strokeWidth={2}
        color={White}
      />
      <Line
        p1={vec(radius, radius - radius / 3)}
        p2={vec(radius, radius + radius / 3)}
        style={'stroke'}
        strokeCap={'round'}
        strokeWidth={2}
        color={White}
      />
    </Canvas>
  );
};

export default CircleButton;

const styles = StyleSheet.create({});
