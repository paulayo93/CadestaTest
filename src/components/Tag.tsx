import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import React, {memo} from 'react';
import {Orange100, White} from '../common/Colors.ts';
import {MediumText} from '../common/Text.tsx';

interface ITag {
  textValue: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  textColor?: string;
}
const Tag = memo((props: ITag) => {
  const {textValue, style, textStyle, textColor = White} = props;
  return (
    <View style={[{...tagStyles.container, ...style}]}>
      <MediumText
        size={8.78}
        style={{lineHeight: 11.85, alignItems: 'center', ...textStyle}}
        text={textValue}
        color={textColor}
      />
    </View>
  );
});

const tagStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Orange100,
    backgroundColor: Orange100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingHorizontal: 8,
  },
  textStyle: {
    lineHeight: 21,
    alignItems: 'center',
  },
});
export default Tag;
