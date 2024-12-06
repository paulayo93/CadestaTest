import {Blue, Green, Orange, Teal} from '../common/Colors.ts';
import {BriefCase} from '../assets/icons';

type BriefCaseStatusType = 'active' | 'in-construction' | 'in-design' | 'completed'

// @ts-ignore
const BriefCaseStatusColor = ({status}: BriefCaseStatusType) => {
  console.log(status, 'status color');
  status = status.toLowerCase();
  let filColor =
    status === 'in-construction'
      ? Teal
      : status === 'in-design'
        ? Blue
        : status === 'completed'
          ? Orange
          : Green;

  return <BriefCase color={filColor} />;
};

export default BriefCaseStatusColor;
