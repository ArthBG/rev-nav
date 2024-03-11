import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import TabRoutes from "./tab.routes";
import { StatusBar } from "expo-status-bar";

export default function Routes() {
    return (
        <NavigationContainer>
        {/* <StackRoutes /> */}
        <TabRoutes />
        <StatusBar style="auto" />
        </NavigationContainer>
    );
    }