import { h } from 'preact';
import style from './style';

import Social from '../Social';

const Hero = () => {
	const heroActions = `{ type: 'FRONT_END', payload: 'react' }`;
	return (
		<div class={style.hero}>
			<div class={style.hero__top}>
				<h1 class={style.hero__name}>
					ogün <br /> babacan
				</h1>
				<div class={style.hero__occupation}>
					<h2>javascript</h2>
					<h2>developer</h2>
					<p>{heroActions}</p>
				</div>
			</div>
			<div class={style.hero__bottom}>
				<p>i'm ogün. a frontend js developer with a design background.</p>
				<Social />
				<u>
					<a href="mailto:babacanogun@gmail.com">babacanogun@gmail.com</a>
				</u>
			</div>
		</div>
	);
};

export default Hero;
