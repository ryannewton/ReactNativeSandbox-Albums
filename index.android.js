import React from 'react';
import { Text, AppRegistry } from 'react-native';

const App = () => (
	<Text>Some Text</Text>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
