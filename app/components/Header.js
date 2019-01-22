import React from 'react';
import styles from '../styles/Header.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={styles.container}>
				{/* <div className={styles.ima}></div> */}
				<h1>Icon</h1>
      </div>
		);
	}
}