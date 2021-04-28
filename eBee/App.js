import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import CardView from './components/CardView';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const AppNavigator = createStackNavigator({
    Home: {screen: Login},
    Signup: {screen: Signup},
    CardView: {screen: CardView}
});

export default createAppContainer(AppNavigator);