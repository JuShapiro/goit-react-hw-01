import css from "./Profile.module.css";
console.log(css);

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css["user-card"]}>
      <div className={css["user-profile"]}>
        <img className={css["user-photo"]} src={image} alt="User avatar" />
        <p className={css["user-name"]}>{name}</p>
        <p className={css["user-info"]}>@{tag}</p>
        <p className={css["user-info"]}>{location}</p>
      </div>

      <ul className={css["user-card-list"]}>
        <li className={css["user-card-list-item"]}>
          <span className={css["user-rating"]}>Followers</span>
          <span className={css["user-stats"]}>{stats.followers}</span>
        </li>
        <li className={css["user-card-list-item"]}>
          <span className={css["user-rating"]}>Views</span>
          <span className={css["user-stats"]}>{stats.views}</span>
        </li>
        <li className={css["user-card-list-item"]}>
          <span className={css["user-rating"]}>Likes</span>
          <span className={css["user-stats"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
