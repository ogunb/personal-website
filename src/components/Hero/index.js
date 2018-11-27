import { h } from 'preact';
import style from './style';

import Social from '../Social';
import Occupation from './Occupation';

const Hero = () => {
	const heroName = 'ogün'.split('');
	const heroSurname = 'babacan'.split('');
	const heroActions = `{ type: 'FRONT_END', payload: 'react' }`;

	function renderLetters(letter) {
		return <span class={style.hero__name__letter}>{letter}</span>;
	}

	return (
		<div class={style.hero}>
			<div class={style.hero__top}>
				<h1 class={style.hero__name}>
					{heroName.map(renderLetters)}
					<br />
					{heroSurname.map(renderLetters)}
				</h1>
				<Occupation heroActions={heroActions} />
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
