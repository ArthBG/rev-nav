import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";

const stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Profile" component={Profile} />
      <stack.Screen name="Category" component={Category} />
    </stack.Navigator>
  );
}

export default StackRoutes;