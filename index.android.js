import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
	<View style={{ flex: 1 }}>
	{/*Gotcha Note: `style={{ flex:1 }}` is necessary to allow for proper scrolling behavior*/}
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
