import {StyleSheet, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import {MediumText, RegularText} from '../common/Text.tsx';
import {Black300, Gray500} from '../common/Colors.ts';
import {boxShadow} from '../utils';
import BriefCaseStatusColor from './BriefCaseStatusColor.tsx';

interface IProjectStatusCard {
  title?: string;
  status?: string;
  count: number;
}

const ProjectStatusCard = ({title, status, count}: IProjectStatusCard) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'flex-start'}}>
        <MediumText
          size={12}
          color={Gray500}
          text={title || 'Active Projects'}
        />
        <RegularText
          text={count?.toString()}
          size={24}
          style={{lineHeight: 32, fontFamily: 'Satoshi-Bold', marginTop: 10}}
          color={Black300}
        />
      </View>
      <View style={{paddingLeft: 31}}>
        <BriefCaseStatusColor status={status || 'active'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: ms(8),
    borderColor: 'rgba(0, 0, 0, 0.03)',
    height: 90,
    borderWidth: 0.5,
    ...boxShadow(10, 10, 10, 'rgba(0, 0, 0, 0.03)', 1, 20),
    minWidth: 157,
  },
});

export default ProjectStatusCard;
