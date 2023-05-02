import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="150" height="150" />

        <UserName>{username}</UserName>
        <Tag>{"@"+tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

// ========================== варіант css-модулі ==================

// import PropTypes  from 'prop-types';
// import css from './Profile.module.css';

// export const Profile = ({username, tag, location, avatar, stats}) => {
//     return (
//         <div className={css.profile}>
//         <div className={css.description}>
//           <img
//             src={avatar}
//             alt="User avatar"
//             width="150"
//             height="150"
//             className={css.avatar}
//           />
//           <p className={css.name}>{username}</p>
//           <p className={css.tag}>{"@"+tag}</p>
//           <p className={css.location}>{location}</p>
//         </div>

//         <ul className={css.stats}>
//           <li>
//             <span className={css.label}>Followers</span>
//             <span className={css.quantity}>{stats.followers}</span>
//           </li>
//           <li>
//             <span className={css.label}>Views</span>
//             <span className={css.quantity}>{stats.views}</span>
//           </li>
//           <li>
//             <span className={css.label}>Likes</span>
//             <span className={css.quantity}>{stats.likes}</span>
//           </li>
//         </ul>
//       </div>
//     );
//   };

// Profile.propTypes = {
//   username: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   avatar: PropTypes.string,
//   stats: PropTypes.objectOf(PropTypes.number),
//   };
