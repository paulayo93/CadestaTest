import {View, StyleSheet, Platform} from 'react-native';
import {RegularText} from '../../common/Text.tsx';
import {Canvas, Skia, Path} from '@shopify/react-native-skia';
import {Blue, Orange, White} from '../../common/Colors.ts';

{
}
const ArcComponent = ({height, width}) => {
  // let arcPath = Skia.Path.MakeFromSVGString("M4 7Q6 7 6 6C6 5 7 5 7 5 7 5 8 5 8 6Q8 7 10 7Z")!;
  // let newPath = Skia.Path.MakeFromSVGString(
  //   'M215.776 54.5479C218.553 60.1499 223.582 65.0371 229.835 65.0371H369.743C372.646 65.0371 375 67.3908 375 70.2941V121.627C375 134.208 364.801 144.407 352.22 144.407H22.7804C10.1991 144.407 0 134.208 0 121.627V70.2941C0 67.3908 2.35364 65.0371 5.25701 65.0371H145.165C151.418 65.0371 156.447 60.1499 159.224 54.5479C164.381 44.1487 175.106 37 187.5 37C199.894 37 210.619 44.1487 215.776 54.5479Z',
  // )!;
  // let circle = Skia.Path.MakeFromSVGString('M4 7Q6 7 6 6C6 5 7 5 7 5 7 5 8 5 8 6Q8 7 10 7Z')!

  return (
    <Canvas
      style={{
        ...StyleSheet.absoluteFillObject,
        height: 107,
        width: width,
        top: -width / 6,
      }}>
      <Path
        path={
          'M 215.776 54.5479C218.553 60.1499 223.582 65.0371 229.835 65.0371H369.743C372.646 65.0371 375 67.3908 375 70.2941V121.627C375 134.208 364.801 144.407 352.22 144.407H22.7804C10.1991 144.407 0 134.208 0 121.627V70.2941C0 67.3908 2.35364 65.0371 5.25701 65.0371H145.165C151.418 65.0371 156.447 60.1499 159.224 54.5479C164.381 44.1487 175.106 37 187.5 37 C 199.894 37 210.619 44.1487 215.776 54.5479Z'
        }
        style={'fill'}
        color={White}
      />
    </Canvas>
  );
};

export default ArcComponent;
