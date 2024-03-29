import PropTypes from 'prop-types';
import { FriendsAll } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsAll>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </FriendsAll>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

// ========================== варіант css-модулі ==================

// import PropTypes from 'prop-types';
// import css from './FriendList.module.css';
// import {FriendListItem} from '../FriendListItem/FriendListItem';

// export const FriendList = ({friends}) => {
//   return (
//     <ul className={css.friendList}>
//       {friends.map(({ id, isOnline, avatar, name }) => (
//         <FriendListItem
//           key={id}
//           isOnline={isOnline}
//           avatar={avatar}
//           name={name}
//         />
//         ))}
//     </ul>
//   );
// }

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.number.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired
//     })
//   ),
// };
