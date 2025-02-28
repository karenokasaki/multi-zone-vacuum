import styles from "./AutoEmpty.module.scss";

export default function AutoEmpty() {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <h2>We'll do the dirty work</h2>
        <p>
          Our All-in-One LG vacuums automatically empty the dustbin when docked
          for one less step in your cleaning routine. Once dust is captured, the
          additional 3-step filtration system traps it where it belongs, instead
          of in the air and on your hands.
        </p>
      </div>
      <div className={styles["video-wrapper"]}>
        <video
          src="/us/discover-vacuums/assets/videos/A949KTMS_2023_Product_Video_Vacuum_Auto_Empty.mp4"
          type="video/mp4"
          muted
          autoPlay
          playsInline
          loop
        />
      </div>
    </div>
  );
}
