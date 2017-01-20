import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount() {
		fetch('http://rallycoding.herokuapp.com/api/music_albums')
			.then((response) => response.json())
			.then((responseData) => this.setState({ albums: responseData }))
			.catch((err) => console.log(err));
	}

	renderAlbums() {
		return this.state.albums.map((album) =>
			<Text key={album.title}>{album.title}</Text>
		);
	}

	render() {
		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

export default AlbumList;
