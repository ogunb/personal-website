import { h } from 'preact';
import style from './style.css';

const Occupation = ({ heroActions }) => (
  <div className={style.hero__occupation}>
    <h2>javascript</h2>
    <h2>developer</h2>
    <p>{heroActions}</p>
  </div>
);

export default Occupation;
