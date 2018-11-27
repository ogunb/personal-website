import { h } from 'preact';
import style from './style.css';

const Occupation = props => (
	<div class={style.hero__occupation}>
		<h2>javascript</h2>
		<h2>developer</h2>
		<p>{props.heroActions}</p>
	</div>
);

export default Occupation;
