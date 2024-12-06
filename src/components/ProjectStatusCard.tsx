import {StyleSheet, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import {MediumText, RegularText} from '../common/Text.tsx';
import {Black300, Gray500} from '../common/Colors.ts';
import {boxShadow} from '../utils';
import BriefCaseStatusColor from './BriefCaseStatusColor.tsx';


const ProjectStatusCard = () => {

  return (
    <View
      style={styles.container}>
      <View style={{alignItems: 'flex-start'}}>
        <MediumText color={Gray500} text={'Active Projects'} />
        <RegularText
          text={'12'}
          size={24}
          style={{lineHeight: 32, fontFamily: 'Satoshi-Bold', marginTop: 10}}
          color={Black300}
        />
      </View>
      <View>
        <BriefCaseStatusColor status={'completed'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: ms(8),
    borderColor: 'rgba(0, 0, 0, 0.03)',
    width: 200,
    height: 90,
    borderWidth: 0.5,
    ...boxShadow(5, 8, 100, '#FFF', 0.45, 8),
  },
})

export default ProjectStatusCard;
