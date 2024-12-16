import {View, StyleSheet} from 'react-native';
import {MediumText} from '../common/Text.tsx';
import { useNavigation } from '@react-navigation/native';

const CreateProject = () => {
  const navigate = useNavigation();
  return (
    <View style={{...StyleSheet.absoluteFillObject}}>
      <MediumText text={'Create Project'} />
    </View>
  );
};

export default CreateProject;
