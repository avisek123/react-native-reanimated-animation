import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CuisineType} from '../src/screens/Chip/constant';

type CuisinesListProps = {
  title: string;
  cuisines: CuisineType[];
  onPressItem: (id: number) => void;
};
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
  Accordian: undefined;
  Fab_One: undefined;
  Chip: any;
  Fab_Two: undefined;
};

export type MainNavigationProps = NativeStackNavigationProp<MainStackParams>;

export type PrivateRootRouteProps<RouteName extends keyof MainStackParams> =
  RouteProp<MainStackParams, RouteName>;
