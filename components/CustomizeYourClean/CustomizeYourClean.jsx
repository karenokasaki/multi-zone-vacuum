import styles from "./CustomizeYourClean.module.scss";
import CtaBtn from "../CtaBtn/CtaBtn";
import useScreenWidth from "../../hooks/useScreenWidth";
import { useEffect, useRef } from "react";
import ActionButton from "../ActionButton";

const MAX_SM = 767;

export default function CustomizeYourClean() {
  const screenWidth = useScreenWidth();
  const prevWidth = useRef();
  const videoRef = useRef();

  const horizontalSrc =
    "/us/discover-vacuums/assets/videos/accessories-video.mp4";
  const verticalSrc =
    "/us/discover-vacuums/assets/videos/accessories-video-mobile.mp4";

  useEffect(() => {
    if (videoRef.current) {
      if (prevWidth.current >= MAX_SM && screenWidth < MAX_SM) {
        videoRef.current.src = verticalSrc;
      } else if (prevWidth.current <= MAX_SM && screenWidth > MAX_SM) {
        videoRef.current.src = horizontalSrc;
      }
    }
    prevWidth.current = screenWidth;
  }, [screenWidth]);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["content-text"]}>
            <h3>MORE ACCESSORIES</h3>
            <h2>Customize your clean</h2>
            <p>
              Whether it's pet hair or tight corners, there’s a tool for every
              job. Discover a wide range of available accessories, from brushes
              to wands.
            </p>
          </div>
          <ActionButton
            label="Shop Accessories"
            href="https://www.lg.com/us/vacuum-accessories"
            dataAction="Customize your clean - click"
            dataLabel="Shop Accessories"
          />
        </div>
        <div className={styles["video-container"]}>
          <video
            className={styles["video"]}
            ref={videoRef}
            loop
            autoPlay
            playsInline
            muted
          >
            <source
              src="/us/discover-vacuums/assets/videos/accessories-video.mp4"
              type="video/mp4"
              media={`(min-width: ${MAX_SM}px)`}
            />
            <source
              src="/us/discover-vacuums/assets/videos/accessories-video-mobile.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
