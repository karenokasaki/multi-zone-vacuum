import styles from "./Accessories.module.scss";
import useIsInViewport from "../../hooks/useIsInViewport";
import { useRef } from "react";

export default function Accessories() {
  const ref = useRef();
  const imgIsInViewport = useIsInViewport(ref);

  return (
    <div className={styles["container"]}>
      <div className={styles["container--inner"]}>
        <div className={styles["cards"]} ref={ref} data-view={imgIsInViewport}>
          <div className={styles["card"]}>
            <div className={styles["img"]}>
              <img
                src="/us/discover-vacuums/assets/images/accessories-1.jpg"
                alt="Washable mop pads on LG Power Mop Pro vacuum attachment"
              />
            </div>
            <div className={styles["content"]}>
              <h3>Washable Mop Pads</h3>
              <p>
                Just wash, swap and go for a fresh start every time. No messes
                left behind.
              </p>
            </div>
          </div>
          <div className={styles["card"]}>
            <div className={styles["img"]}>
              <img
                src="/us/discover-vacuums/assets/images/accessories-2.jpg"
                alt="Person pressing Spray Button on LG All-in-One Vacuum"
              />
            </div>
            <div className={styles["content"]}>
              <h3>Spray Button</h3>
              <p>
                Add a touch of shine to every clean with a convenient detergent
                spray button.
              </p>
            </div>
          </div>
          <div className={styles["card"]}>
            <div className={styles["img"]}>
              <img
                src="/us/discover-vacuums/assets/images/accessories-3.jpg"
                alt="Person filling LG All-in-One Vacuum with detergent"
              />
            </div>
            <div className={styles["content"]}>
              <h3>Refillable Detergent</h3>
              <p>
                Keep the freshness flowing and the grime going by refilling with
                floor-safe detergent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
