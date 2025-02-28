import styles from "./Battery.module.scss";

export default function Battery() {
  return (
    <div className={styles["container"]}>
      <div className={styles["container--inner"]}>
        <div className={styles["image"]}>
          <picture>
            <source
              srcSet="/us/discover-vacuums/assets/images/battery-mobile.png"
              media="(max-width: 575px)"
            />
            <source
              srcSet="/us/discover-vacuums/assets/images/battery-tablet.jpg"
              media="(max-width: 991px)"
            />
            <img
              src="/us/discover-vacuums/assets/images/battery.jpg"
              alt="Person changing battery on LG CordZero Vacuum"
            />
          </picture>
        </div>
        <div className={styles["content"]}>
          <div className={styles["content--inner"]}>
            <h3 className={styles["header"]}>Take charge of your cleaning</h3>
            <p className={styles["text"]}>
              Unlock uninterrupted performance with a replaceable quick-release
              battery, designed to take repeated charges and jump right back
              into cleaning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
