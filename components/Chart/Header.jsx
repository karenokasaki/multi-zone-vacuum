import styles from "./Chart.module.scss";
export default function Header({ currSlide }) {
  return (
    <div className={styles["header-caroussel"]}>
      <div
        className={styles["header-caroussel__cell"]}
        data-curr-slide={currSlide}
      >
        {currSlide === 0 ? (
          <h3>LG CordZero™ Cordless Stick Vacuums</h3>
        ) : (
          <h3>
            LG CordZero™ All-in-One Cordless Stick Vacuums with Auto Empty
          </h3>
        )}
      </div>
    </div>
  );
}
