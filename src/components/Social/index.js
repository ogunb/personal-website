import { h } from 'preact';
import style from './style';
import Icons from '../../assets/icons';

const Social = () => (
  <div className={style.social}>{Icons.map(icon => icon())}</div>
);

export default Social;
