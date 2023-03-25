import css from './FriendCard.module.css';
import PropTypes from 'prop-types';

export default function FriendCard({ isOnline, avatar, name }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendCard.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
