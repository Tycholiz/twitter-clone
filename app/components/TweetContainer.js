import React from 'react';
import styles from '../styles/Header.css';

import Tweet from './Tweet'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { test: 'foo' };
	}
	render() {
		return (
			<div className={styles.container}>
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
      </div>
		);
	}
}