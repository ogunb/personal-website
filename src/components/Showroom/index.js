import { h, Component } from 'preact';
import style from './style.css';

import Post from './Post';
import postContent from './posts';

class Showroom extends Component {
  /* eslint-disable */
	state = {
		posts: []
	};
	/* eslint-enable */

  componentDidMount() {
    const posts = postContent;
    this.setState({
      // eslint-disable-next-line
			posts
    });
  }

  handleOpenAbout = () => {
    this.learnButton.style.color = 'var(--light)';
    this.learnButton.style.transform = 'rotate(-90deg) translateY(-10px)';
    this.props.openAbout(this.learnButton);
  };

  // eslint-disable-next-line
	render({}, { posts }) {
    return (
      <section className={style.showroom}>
        <div className={style.showroom__title}>
          <p>
            this is the showroom has / <em>(might have)</em> blog posts,
            projects etc.
          </p>
          <p>mostly things on my gitHub are here as well.</p>
        </div>
        <div className={style.showroom__posts}>
          {posts.map(post => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              subtitle={post.subtitle}
              body={post.body}
            />
          ))}
        </div>
        <button
          type="button"
          className={style.showroom__aboutPage}
          onClick={this.handleOpenAbout}
          ref={learnButton => (this.learnButton = learnButton)}
        >
          learn more about me
        </button>
      </section>
    );
  }
}

export default Showroom;
