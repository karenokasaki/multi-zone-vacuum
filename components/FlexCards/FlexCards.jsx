import { useState, useMemo, useRef, useEffect } from "react";
import styles from "./FlexCards.module.scss";

export default function FlexCards() {
  const cardsRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  const content = useMemo(() => [
    {
      assetId: "fur-free-zone",
      title: "Fur-free zones",
      copy: "Fluffy’s furballs don’t stand a chance. High-suction performance keeps your home pet-approved.",
      img: "/us/discover-vacuums/assets/images/FlexCardsFurFreeZone.jpg",
      alt: "Woman placing LG Cordless Vacuum in standalone docking station next to dog",
    },
    {
      assetId: "crumbs-confetti",
      title: "From crumbs to confetti",
      copy: "Don’t let messy moments rain on the parade. Get to spills quickly and easily with our lightweight, grab-and-go design.",
      img: "/us/discover-vacuums/assets/images/FlexCardsCrumbsConfetti.jpg",
      alt: "Child vacuuming carpet with LG Cordless Stick Vacuum while friends relax",
    },
    {
      assetId: "another-level",
      title: "Clean on another level",
      copy: "Effectively combat dust up high and dander down low to help keep sneezes and allergies at bay.",
      img: "/us/discover-vacuums/assets/images/FlexCardsAnotherLevel.jpg",
      alt: "Man using LG Vacuum with telescopic handle to clean dust on curtains",
    },
    {
      assetId: "cleaner-commutes",
      title: "Cleaner commutes",
      copy: "Enter handheld mode with our CordZero™ vacuum to clear out dirt from any nook, cranny or surface.*",
      img: "/us/discover-vacuums/assets/images/FlexCardsCleanerCommutes.jpg",
      alt: "Man using LG CordZero vacuum to clean pet hair from car seats",
    },
  ]);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <h2>More than just floors—designed for life's moments</h2>
          <p>
            Life happens. That's why LG vacuums come armed to tackle messes
            where they happen, so you can embrace the chaos.
          </p>
        </div>
        <div
          className={`${styles["cards"]}`}
          ref={cardsRef}
          data-hover={activeCard !== null}
          onMouseLeave={() => setActiveCard(null)}
          onBlur={() => setActiveCard(null)}
        >
          {content.map(({ assetId, title, copy, img, alt }, index) => (
            <div
              className={`${styles["card"]}`}
              data-assets-id={assetId}
              data-active-card={activeCard === index}
              onMouseEnter={() => setActiveCard(index)}
              onTouchStart={() => setActiveCard(index)}
              data-card
              key={assetId}
            >
              <img
                className={styles["card-image"]}
                src={img}
                alt={alt}
              />
              <div className={styles["icon"]}>
                <img
                  src={`/us/discover-vacuums/assets/images/${assetId}-overlay.png`}
                  alt=""
                />
              </div>
              <div className={styles["overlay"]}>
                <img
                  src={`/us/discover-vacuums/assets/svg/${assetId}.svg`}
                  alt=""
                />
                <div className={styles["overlay-text"]}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles["footer"]}>
          <p>*Accessories sold separately.</p>
        </div>
      </div>
    </div>
  );
}
