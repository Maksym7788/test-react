import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.friendListItem}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
