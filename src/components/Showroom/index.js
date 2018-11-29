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
  // eslint-disable-next-line
	render({}, { posts }) {
    return (
      <div className={style.showroom}>
        <div className={style.showroom__title}>
          <p>
            this is the showroom: <em>(might have)</em> / has blog posts,
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
        <h3 className={style.showroom__aboutPage}>learn more about me</h3>
      </div>
    );
  }
}

export default Showroom;
