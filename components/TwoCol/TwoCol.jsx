import styles from "./TwoCol.module.scss";

export default function TwoCol() {
  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["img-wrapper"]}>
          <picture>
            <source
              srcSet="/us/discover-vacuums/assets/images/two-col-mobile.png"
              media="(max-width: 575px)"
            />
            <img
              src="/us/discover-vacuums/assets/images/two-col-desktop.png"
              alt="LG Vacuum with Dual Floor Max Nozzle and built-in LEDs cleaning leaves off floor"
            />
          </picture>
          <p className={styles["disclaimer"]}>
            * Dual Floor Max nozzle is available on A925KSM, A931KWM, A937KGMS,
            and A949KTMS models.
          </p>
        </div>
        <div className={styles["copy-wrapper"]}>
          <h2>Multi-surface mastery</h2>
          <p>
            With LG's state-of-the-art Dual Floor Max Nozzle,* there's no need
            to change attachments. Take on rugs, hard floors and everything in
            between with a soft roller and carpet agitator all in one. Plus,
            light even the darkest corners of your space with built-in LEDs.
          </p>
        </div>
      </div>
    </div>
  );
}
