import styles from "./Suction.module.scss";
import CtaBtn from "../CtaBtn/CtaBtn";
import ActionButton from "../ActionButton";

export default function Suction() {
  return (
    <div className={styles["container"]}>
      <div className={styles["hero"]}>
        <picture>
          <source
            srcSet="/us/discover-vacuums/assets/images/suction-hero-mobile.png"
            media="(max-width: 767px)"
          />
          <img
            src="/us/discover-vacuums/assets/images/suction-hero.jpg"
            alt="LG Vacuum with Power Mop Pro attachment cleaning spill off hard floor"
          />
        </picture>
        <div className={styles["content"]}>
          <h3>From suction to sparkle</h3>
          <p>
            Say goodbye to flimsy, ineffective stick mops taking up space in
            your closet. Meet the Power Mop Pro, the high-powered attachment for
            our newest CordZero™ A949 All-in-One Vacuum that gets even the
            toughest messes off of hard floors with a simple cleaning solution.
          </p>
          <div className={styles["cta-btn"]}>
            <ActionButton
              href="/us/vacuum-cleaners/lg-a949ktms-stick-vacuum"
              label="Shop Now"
              dataLabel="Shop Now"
              dataAction="From suction to sparkle - click"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
