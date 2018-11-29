import { h, Component } from 'preact';
import Markdown from 'preact-markdown';

import style from './style.css';
import markdownStyle from './markdown.css';

class Post extends Component {
  /* eslint-disable */
	state = {
		post: null,
		isOpen: false,
		loading: true
	};

	/* eslint-enable */
  getPostBody = async () => {
    this.setState({ isOpen: true });
    const { id } = this.props;
    const post = await import(`./postContent/${id}`).then(body => body.default);
    this.setState({
      post,
      loading: false,
    });
  };

  closePostBody = () => {
    this.setState({ isOpen: false, loading: true });
  };

  renderButton() {
    const { isOpen } = this.state;
    let button;
    if (!isOpen) {
      button = (
        <button
          type="button"
          onClick={this.getPostBody}
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
    const { isOpen, post, loading } = this.state;
    if (isOpen && loading) {
      return <p>Loading...</p>;
    }
    if (isOpen && !loading) {
      return (
        <div className={markdownStyle.showroom__post__body}>
          <Markdown markdown={post} />
        </div>
      );
    }
  }
  /* eslint-disable-next-line */
	render({ title, subtitle, id }, { isOpen, loading, post }) {
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
