import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from './pages/Index';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='index' screenOptions={{
        headerStyle: { backgroundColor: '#212529' },
        headerTitleStyle: {
          color: '#fff'
        }
      }}>
        <Stack.Screen name='index' component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App