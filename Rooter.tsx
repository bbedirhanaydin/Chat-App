import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/pages/aut/Login';
import Sign from './src/pages/aut/Sign';
import FlashMessage from 'react-native-flash-message';
import Messages from './src/pages/Messages';
import auth from '@react-native-firebase/auth';
import AddButton from './src/components/AddButton';

const Stack = createNativeStackNavigator();

const Rooter = () => {
  const [userSession, setUserSession] = useState<any>();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AutStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
            name="AutStack"
            component={AutStack}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Messages"
            component={Messages}
            options={{
              title: 'Time Line',
              headerTitleStyle: {
                color: '#594545',
                fontFamily: 'Pacifico-Regular',
                fontSize: 25,
              },
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#fff',
              },
              headerRight: () => (
                <AddButton
                  icon="enter-outline"
                  size={30}
                  color="#594545"
                  onPress={() => auth().signOut()}
                />
              ),
            }}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Rooter;
