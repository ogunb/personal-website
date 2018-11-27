import { h } from 'preact';
import style from './style';

import Social from '../Social';

const Hero = () => {
	const heroName = 'ogün'.split('');
	const heroSurname = 'babacan'.split('');
	const heroActions = `{ type: 'FRONT_END', payload: 'react' }`;
	console.log(style);
	return (
		<div class={style.hero}>
			<div class={style.hero__top}>
				<h1 class={style.hero__name}>
					{heroName.map(letter => (
						<span class={style.hero__name__letter}>{letter}</span>
					))}
					<br />
					{heroSurname.map(letter => (
						<span class={style.hero__name__letter}>{letter}</span>
					))}
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
