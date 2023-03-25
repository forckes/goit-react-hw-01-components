import PropTypes from 'prop-types';
import FriendCard from 'Components/FriendCard/FriendCard';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <section>
      <h2 className={css.title}>Jacques Gluke Friends</h2>
      <ul type="none" className={css.friendList}>
        {friends.map(friend => (
          <FriendCard
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact).isRequired,
};
