import { View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import WelcomeHeader from '../components/WelcomeHeader.tsx';
import Container from '../common/Container.tsx';

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container padded={true} >
     <WelcomeHeader/>

    </Container>
  );
};

export default Home;
