import { h, Component } from 'preact';
import Markdown from 'preact-markdown';

import style from './style.css';
import markdownStyle from './markdown.css';

class Post extends Component {
	state = {
		post: null,
		isOpen: false,
		img: null
	};

	async componentDidMount() {
		const { id } = this.props;
		if (id === 2) return;
		const img = await import(`../../../assets/postAssets/${id}.jpg`).then(
			data => data
		);
		this.setState({
			...this.state,
			img
		});
	}

	async getPostBody(id) {
		const post = await import(`./postContent/${id}`).then(body => body.default);
		this.setState({
			post,
			isOpen: true
		});
	}

	closePostBody = () => {
		this.setState({ isOpen: false });
	};

	renderButton() {
		const { isOpen } = this.state;
		//! HOVER EFFECT
		//! HOVER EFFECT
		//! HOVER EFFECT
		let button;
		if (!isOpen) {
			button = (
				<button
					type="button"
					onClick={() => this.getPostBody(this.props.id)}
					className={style.showroom__post__button}
				>
					\/
				</button>
			);
		} else {
			button = (
				<button
					type="button"
					onClick={this.closePostBody}
					className={`${style.showroom__post__button} ${
						style.showroom__post__button_open
					}`}
				>
					\/
				</button>
			);
		}

		return button;
	}

	renderBody() {
		const { isOpen, post, img } = this.state;
		if (isOpen) {
			return (
				<div
					className={`${markdownStyle.showroom__post__body} ${
						style.showroom__post__body
					}`}
				>
					{img !== null ? <img src={img} /> : ''}
					<Markdown markdown={post} />
				</div>
			);
		}
		return (
			<div
				className={`${markdownStyle.showroom__post__body} ${
					style.showroom__post__body
				}`}
			/>
		);
	}
	/* eslint-disable-next-line */
	render({ title, subtitle, id }, { isOpen, post }) {
		return (
			<div
				className={`${style.showroom__post} ${
					isOpen ? style.post_body_open : ''
				}`}
			>
				<p className={style.showroom__post__title}>{title}</p>
				<p>{subtitle}</p>
				{this.renderButton()}
				{this.renderBody()}
			</div>
		);
	}
}

export default Post;
