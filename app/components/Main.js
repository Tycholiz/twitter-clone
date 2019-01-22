import React from 'react';
import styles from '../styles/Header.css';

import Aside from './Aside'
import TweetContainer from './TweetContainer'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { test: 'foo' };
	}
	render() {
		return (
			<div className={styles.container}>
				<Aside />
				<TweetContainer />
			</div>
		);
	}
}