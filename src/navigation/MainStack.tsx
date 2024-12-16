import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './../screens/Home';
import CreateProject from '../screens/CreateProject.tsx';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="create-project" component={CreateProject} />
    </Stack.Navigator>
  );
};

export default MainStack;
