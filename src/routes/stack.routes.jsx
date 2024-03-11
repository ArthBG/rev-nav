import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

const stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Home} />
    </stack.Navigator>
  );
}

export default StackRoutes;