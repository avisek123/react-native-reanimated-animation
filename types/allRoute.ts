import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParams = {
  Home?: undefined;
  Spring?: undefined;
  InterPolet?: undefined;
  Dragble?: undefined;
  InstGramAnimation: undefined;
  SearchAnimation: undefined;
  AnimatedButton: undefined;
  TabAnimation: undefined;
  NumberVibrateAnimation: undefined;
  Sekeleton: undefined;
  AnimatedToastScreen: undefined;
  Fab: undefined;
  CustomDrawerScreen: undefined;
  ChangeTheme: undefined;
};

export type MainNavigationProps = NativeStackNavigationProp<MainStackParams>;

export type PrivateRootRouteProps<RouteName extends keyof MainStackParams> =
  RouteProp<MainStackParams, RouteName>;
