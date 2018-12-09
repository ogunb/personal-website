import { h } from 'preact';
import style from './style.css';

const About = ({ closeAbout }) => (
	<section className={style.about}>
		<button type="button" onClick={closeAbout} className={style.about__close}>
			X
		</button>
		<h3 className={style.about__title}>i'm ogün,</h3>
		<div className={style.about__paragraph}>
			<p>
				A 24 years old Front-end Developer from Eskişehir, Turkey. I love
				learning and I have a dilemma that bothered me for some time.
			</p>
			<p>
				I've studied Communication Design and Management in Eskişehir Anadolu
				University. Consistent with the department I studied, I focused on UX/UI
				design and I also taught my self Front-end Development. This has caused
				me a dilemma for a long time. Am I a designer who develops or am I a
				developer who designs?
			</p>
			<p>
				I didn't know what to call myself, but learning JavaScript has made me
				realize that, while I was good at designing, I only “liked” it. On the
				other hand, I ”loved“ coding. There was so much to learn. So many
				material challenges and problems to solve.
			</p>
			<p>
				<em>
					the satisfaction you get from solving a problem with programming is
					mind blowing.
				</em>
			</p>
		</div>
		<div className={style.about__contact}>
			<p>So yeah, see you around I guess?:</p>
			<a
				href="https://www.dropbox.com/s/yc1bjafbax0i0qj/og%C3%BCn-babacan-cv-en.pdf?dl=0"
				target="_blank"
				rel="noopener noreferrer"
			>
				Resume(EN)
			</a>{' '}
			<a
				href="https://www.dropbox.com/s/4f5bo3qvqhoht9z/og%C3%BCn-babacan-cv-tr.pdf?dl=0"
				target="_blank"
				rel="noopener noreferrer"
			>
				Resume(TR)
			</a>
			<br />
			<a href="mailto:babacanogun@gmail.com">babacanogun@gmail.com</a>
		</div>
	</section>
);
export default About;
