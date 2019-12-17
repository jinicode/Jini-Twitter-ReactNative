import Blogs from './Blogs';
import Post from './Post';
import Edit from './Edit';
import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createTabNavigator,
} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
const NavStack = createStackNavigator({
  Blogs: {
    screen: Blogs,
    navigationOptions: () => {
      headerTitle: "Blogs";
    },
  },
  Edit: {
    screen: Edit,
    navigationOptions: () => {
        headerTitle: "Edit";
      },
  },
},{
    headerLayoutPreset:"center"
});

const BottomTab = createBottomTabNavigator({
  NavStack: {
    screen: NavStack,
  },
  Post: {
    screen: Post,
  },
});
const Route = createAppContainer(BottomTab);
export default Route;
