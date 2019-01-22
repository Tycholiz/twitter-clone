import React from 'react';
import styles from '../styles/Tweet.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { test: 'foo' };
	}
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.media}>
					<img src="../../public/images/avatar.png" />
					<h4>Profile Icon</h4>
				</div>
				<div className={styles.tweetText}>
					This is the best tweet of the day!
				</div>
				<div>
					<img src="../../public/images/heart.png" />
				</div>
      </div>
		);
	}
}