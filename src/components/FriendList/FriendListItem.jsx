import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
