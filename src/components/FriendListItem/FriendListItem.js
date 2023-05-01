import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import getRandomColor from '../utils/getRandomColor'

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li key={id} className={css.item}>
      <span className={css.status}  style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }>{isOnline}</span>
      <img className={css.avatar} style={{borderColor: getRandomColor()}} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
      })
    ),
  };