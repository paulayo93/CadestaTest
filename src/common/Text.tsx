/* eslint-disable */
import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import {Black} from './Colors';
import {ms} from 'react-native-size-matters';

interface TextProps extends TextStyle {
  text: string;
  size?: number;
  style?: object;
  color?: string;
}

export const HeaderText = ({text, size, color, style}: TextProps) => (
  <Text
    style={
      [
        styles.headerText,
        size && {fontSize: size},
        color && {color: color},
        style,
      ] as TextStyle
    }>
    {text}
  </Text>
);

export const RegularText = ({text, size, color, style}: TextProps) => (
  <Text
    style={
      [
        styles.regularText,
        size && {fontSize: size},
        color && {color: color},
        style,
      ] as TextStyle
    }>
    {text}
  </Text>
);

export const SmallText = ({text, size, color, style}: TextProps) => (
  <Text
    style={
      [
        styles.smallText,
        color && {color: color},
        size && {fontSize: size},
        style,
      ] as TextStyle
    }>
    {text}
  </Text>
);

export const MediumText = ({text, size, color, style}: TextProps) => (
  <Text
    style={
      [
        styles.mediumText,
        color && {color: color},
        size && {fontSize: size},
        style,
      ] as TextStyle
    }>
    {text}
  </Text>
);

export const SemiBoldText = ({text, style}: TextProps) => (
  <Text style={[styles.semiboldText, style]}>{text}</Text>
);

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Satoshi-Bold',
    fontSize: ms(16),
    lineHeight: ms(20),
    color: Black,
  },
  regularText: {
    fontFamily: 'Satoshi-Regular',
    fontSize: ms(12),
    lineHeight: ms(14),
    color: Black,
  },
  smallText: {
    fontFamily: 'Satoshi-Regular',
    fontSize: ms(12),
    lineHeight: ms(20),
    color: Black,
  },
  semiboldText: {
    fontFamily: 'Satoshi-SemiBold',
    fontSize: ms(14),
    color: Black,
  },
  mediumText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: ms(16),
    color: Black,
  },
});
