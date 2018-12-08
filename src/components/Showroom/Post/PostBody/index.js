import { h } from 'preact';
import Markdown from 'preact-markdown';
import markdownStyle from './markdown.css';
import style from '../style.css';

const PostBody = props => {
	const { isOpen, post, img } = props;
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
};

export default PostBody;
