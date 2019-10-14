
import ActionSheet from './actionSheet';
import Area from './area';
import BottomNav from './bottomNav';
import BottomNavItem from './bottomNavItem';
import CountDown from './countDown';
import DateTimePicker from './dateTimePicker';
import Dialog from './dialog';
import Field from './field';
import Indicator from './indicator';
import InfiniteScroll from './infiniteScroll';
import Loading from './loading';
import Picker from './picker';
import PopUp from './popUp';
import Stepper from './stepper';
import Switcher from './switcher';
import TabPane from './tabPane';
import Tabs from './tabs';
import Toast from './toast';

const components = [
  ActionSheet,
  Area,
  BottomNav,
  BottomNavItem,
  CountDown,
  DateTimePicker,
  Dialog,
  Field,
  Indicator,
  InfiniteScroll,
  Loading,
  Picker,
  PopUp,
  Stepper,
  Switcher,
  TabPane,
  Tabs,
  Toast
];
 
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};
 
export {
  ActionSheet,
  Area,
  BottomNav,
  BottomNavItem,
  CountDown,
  DateTimePicker,
  Dialog,
  Field,
  Indicator,
  InfiniteScroll,
  Loading,
  Picker,
  PopUp,
  Stepper,
  Switcher,
  TabPane,
  Tabs,
  Toast
}

export default {
  install
}