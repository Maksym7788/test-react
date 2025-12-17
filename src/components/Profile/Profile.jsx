import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, status }) => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
        <ul className={css.statusList}>
          <li className={css.li}>
            <span>followers</span>
            <span className={css.span}>{status.followers}</span>
          </li>
          <li className={css.li}>
            <span>views</span>
            <span className={css.span}>{status.views}</span>
          </li>
          <li className={css.li}>
            <span>likes</span>
            <span className={css.span}>{status.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
