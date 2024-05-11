import css from "./Profile.module.css";
console.log(css);

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.userCard}>
      <div className={css["userProfile"]}>
        <img className={css["userPhoto"]} src={image} alt="User avatar" />
        <p className={css["userName"]}>{name}</p>
        <p className={css["userInfo"]}>@{tag}</p>
        <p className={css["userInfo"]}>{location}</p>
      </div>

      <ul className={css["userCardList"]}>
        <li className={css["userCardListItem"]}>
          <span className={css["userRating"]}>Followers</span>
          <span className={css["userStats"]}>{stats.followers}</span>
        </li>
        <li className={css["userCardListItem"]}>
          <span className={css["userRating"]}>Views</span>
          <span className={css["userStats"]}>{stats.views}</span>
        </li>
        <li className={css["userCardListItem"]}>
          <span className={css["userRating"]}>Likes</span>
          <span className={css["userStats"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
