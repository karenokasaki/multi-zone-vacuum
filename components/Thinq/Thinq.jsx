import styles from "./Thinq.module.scss";
import CtaBtn from "../CtaBtn/CtaBtn";
import ActionButton from "../ActionButton";

export default function Thinq() {
  return (
    <div className={styles["container"] + " hsadpack"}>
      <div className={styles["container--inner"]}>
        <div className={styles["content"]}>
          <h3>Get connected with ThinQ</h3>
          <p>
            Link your vacuum to the ThinQ app to check cleaning history and
            battery life so you jump right into cleaning when your vacuum is
            fully charged. Plus, with Smart Diagnostics, you can rest assured
            that your LG vacuum is up to the job.
          </p>

          <div className={styles["cta-btn"]}>
            <ActionButton
              label="Learn More"
              href="https://www.lg.com/us/lg-thinq#aircarevacuums"
              dataAction="Get connected with ThinQ - click"
              dataLabel="Learn More"
            />
          </div>
        </div>

        <div className={styles["image"]}>
          <img
            src="/us/discover-vacuums/assets/images/thinq.png"
            alt="Phone screen displaying LG ThinQ app for Vacuum"
          />
        </div>
      </div>
    </div>
  );
}
