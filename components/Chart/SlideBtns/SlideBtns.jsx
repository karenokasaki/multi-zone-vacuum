import styles from "./SlideBtns.module.scss";

export default function SlideBtns({
  currSlide,
  setCurrSlide,
  name = "chart",
  className,
}) {
  return (
    <div className={styles["container"]} data-btns-for={name}>
      <div className={`${styles["wrapper"]} ${className}`}>
        <button
          className={styles["prev-btn"]}
          onClick={() => setCurrSlide((prev) => prev - 1)}
          disabled={currSlide === 0}
        >
          <p>Previous</p>
        </button>
        <div className={styles["indicator-wrapper"]}>
          {[0, 1, 2].map((num, i) => (
            <button
              className={styles["slide-indicator"]}
              data-slide={num}
              data-active={currSlide === num}
              onClick={() => setCurrSlide(num)}
              onTouchEnd={() => setCurrSlide(num)}
              key={i}
            >
              <p>{`Slide ${num + 1}`}</p>
            </button>
          ))}
        </div>
        <button
          className={styles["next-btn"]}
          onClick={() => setCurrSlide((prev) => prev + 1)}
          disabled={currSlide === 2}
        >
          <p>Next</p>
        </button>
      </div>
    </div>
  );
}
