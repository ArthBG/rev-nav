import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#EEF',
            }
        
        }}
        >
        <Tab.Screen name="Home" component={Home} options={
            {
                tabBarIcon: ({focused}) => (
                    <Feather name="home" size={24} color={focused ? "black" : "gray"} />
                ),
                tabBarLabel: 'Home',
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
            }
        
        } />
        <Tab.Screen name="Profile" component={Profile} options={
            {
                tabBarIcon: ({focused}) => (
                    <Feather name="user" size={24} color={focused ? "black" : "gray"} />
                ),
                tabBarLabel: 'Profile',
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
            }
        
        
        }/>
        <Tab.Screen name="Category" component={Category} options={
            {
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name="format-list-bulleted" size={24} color={focused ? "black" : "gray"} />
                ),
                tabBarLabel: 'Category',
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
            }
        }/>
        </Tab.Navigator>
    );
    }

export default TabRoutes;