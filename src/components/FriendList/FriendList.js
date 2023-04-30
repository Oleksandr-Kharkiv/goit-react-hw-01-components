import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = (friends) => {
  return (
    <ul className={css.friendList}>
    </ul>
  );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  };


  // video (1) 1:48