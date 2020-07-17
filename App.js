import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import FlatListScreen from "./src/screens/FlatListScreen";
import Start from "./src/screens/Start";

const navigator = createStackNavigator(
  {
    St:Start,
    Home:HomeScreen,
    Flat:FlatListScreen,
  },
  {
    initialRouteName: "St",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
