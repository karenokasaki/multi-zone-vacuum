import ActionButton from "../ActionButton";
import styles from "./SystemVideo.module.scss";

export default function SystemVideo() {
  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["video"]}>
          <video autoPlay playsInline loop muted>
            <source
              src="/us/discover-vacuums/assets/videos/2024_Product_Video_CordZero_Filter_Vacuum.mp4"
              type="video/mp4"
            />
            <p>Video is not supported</p>
          </video>
        </div>
        <div className={styles["copy"]}>
          <h2>Filtration that doesn’t mess around</h2>
          <p>
            Our cutting-edge 5-step system automatically separates dirt in the
            bin and then filters fine dust. Plus, with powerful suction from our
            Smart Inverter Motor, you'll easily capture debris particles so that
            every breath you take is cleaner and healthier.
          </p>

          {/* <div className={styles.cta}>
            <ActionButton
              label="Learn More About AAFA"
              dataAction="Filtration that doesn’t mess around - click"
              dataLabel="Learn More About AAFA"
              href="https://www.lg.com/us/aafa"
              target="_blank"
            />
          </div> */}

          <div className={styles["logos"]}>
           {/*  <img
              src="/us/discover-vacuums/assets/images/aafa-logo.png"
              alt=""
            /> */}
            <img
              src="/us/discover-vacuums/assets/images/smart-inverter-motor.png"
              alt=""
            />
            <img
              src="/us/discover-vacuums/assets/images/us-certified-ergonomics.png"
              alt=""
            />
          </div>
          {/* <p className={`${styles["show-desktop"]} ${styles["disclaimer"]}`}>
            Following vacuum model is AAFA certified: A913BM
          </p> */}
        </div>
      </div>
    </div>
  );
}
