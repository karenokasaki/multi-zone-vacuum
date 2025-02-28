import styles from "./DualBatteryVideo.module.scss";

export default function DualBatteryVideo() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["container__inner"]}>
          <h2 className={styles["title"]}>
            Double the batteries, double the clean
          </h2>
          <p className={styles["text"]}>
            With our innovative dual battery setup available on select vacuum
            models, you can charge one battery while the other powers your
            cleaning routine.
          </p>
        </div>

        <div className={styles["video"]}>
          <video autoPlay muted loop playsInline>
            <source
              type="video/mp4"
              src="/us/discover-vacuums/assets/videos/Dual_Battery.mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
