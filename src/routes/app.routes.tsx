import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../screens/Home"

const Stack = createNativeStackNavigator()

function AppRoutes() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
    )
}

export default AppRoutes