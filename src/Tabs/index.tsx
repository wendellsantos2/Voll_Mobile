import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Principal from './Principal';
import Consultas from './Consultas';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Explorar from './Explorar';
import Perfil from './Perfil';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#002851',
  },
  tabBarActiveTintColor: '#339cff',
  tabBarInactiveTintColor: '#FFF',
};

const tabs = [
  {
    nome: 'Principal',
    component: Principal,
    icon: 'home',
  },
  {
    nome: 'Consultas',
    component: Consultas,
    icon: 'search',
  },
  {
    nome: 'Explorar',
    component: Explorar,
    icon: 'calendar',
  },
  {
    nome: 'Perfil',
    component: Perfil,
    icon: 'person',
  },
];

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.nome}
          name={tab.nome}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
