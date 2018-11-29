import { h, Component } from 'preact';
import style from './style.css';

class Post extends Component {
  /* eslint-disable */
	state = {
		isOpen: false,
		loading: true
	};
	/* eslint-enable */

  componentDidUpdate() {}

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
  /* eslint-disable-next-line */
	render({ title, subtitle, id }, { isOpen, loading }) {
    return (
      <div className={style.showroom__post}>
        <p className={style.showroom__post__title}>{title}</p>
        <p>{subtitle}</p>
        {this.renderButton()}
      </div>
    );
  }
}

export default Post;
