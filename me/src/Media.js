import React from 'react';
import './App.css';
import corgi from './img/corgi.gif';
import ralph from './img/ralph.jpg';
import golden from './img/golden.gif';

export default function Media() {
	return (

		<div className="media">
			<h3>Fun Pics!</h3>
			<p>Here are some images that I like:</p>
			<ul>
				<li><img src={corgi} alt="A corgi" /></li>
				<li><img src={ralph} alt="A Ralph" /></li>
				<li><img src={golden} alt="Turn that frown upside down" /></li>
			</ul>
		</div>

	);
}