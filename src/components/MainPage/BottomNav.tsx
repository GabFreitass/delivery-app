import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import { Entypo, AntDesign } from '@expo/vector-icons';
import OrderScreen from '../../screens/Main/OrderScreen';
import ProductsScreen from '../../screens/Main/ProductsScreen';
import UserScreen from '../../screens/Main/UserScreen';

type BottomTabParamList = {
  Produtos: undefined;
  Carrinho: undefined;
  Perfil: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName="Produtos"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Produtos"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon as={Entypo} name="shop" color={color} size={size} />
          ),
        }}
        component={ProductsScreen}
      />
      <Tab.Screen
        name="Carrinho"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              as={AntDesign}
              name="shoppingcart"
              color={color}
              size={size}
            />
          ),
        }}
        component={OrderScreen}
      />
      <Tab.Screen
        name="Perfil"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon as={AntDesign} name="user" color={color} size={size} />
          ),
        }}
        component={UserScreen}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;
