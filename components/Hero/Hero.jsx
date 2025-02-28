import styles from "./Hero.module.scss";
import CopyVector from "../CopyVector/CopyVector";
import CopyVectorTablet from "../CopyVector/tablet/CopyVectorTablet";
import useScreenWidth from "../../hooks/useScreenWidth";
import { useRef, useState, useEffect } from "react";
import ActionButton from "../ActionButton";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function Hero() {
  const clippedVideoRef = useRef();
  const modalRef = useRef(null);
  const screenWidth = useScreenWidth();
  const videoName = {
    desktop: "1600x740",
    tablet: "834x1060_TABLET",
    mobile: "MOBILE_375x600",
  };

  const [openModal, setOpenModal] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  useOnClickOutside(modalRef, () => setOpenModal(false));

  function handleVideoPlay(time) {
    if (clippedVideoRef.current) {
      clippedVideoRef.current.currentTime = time;
      clippedVideoRef.current.play();
    }
  }

  useEffect(() => {
    if (openModal) {
      setVideoSrc(
        "https://www.youtube.com/embed/-_8Qliuu-qg?si=35mtzGa2BhfHaTID"
      );

      /* make the page scroll a lit bit to the bottom */
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
    } else {
      setVideoSrc("");
    }
  }, [openModal]);

  return (
    <>
    <a href="/">VOLTAR PARA HOME</a>
      <div className={styles.modal} data-open={openModal}>
        <Modal
          setOpenModal={setOpenModal}
          refs={modalRef}
          videoSrc={videoSrc}
        />
      </div>
      <div className={styles["container"]}>
        <div className={styles["bg-video"]}>
          <video
            type="video/mp4"
            autoPlay
            muted
            playsInline
            loop
            src={`/us/discover-vacuums/assets/videos/A949KTMS_2023_Product_Video_Vacuum_Dual_Floor_Max_Powerful_Suction_${
              screenWidth <= 575
                ? videoName.mobile
                : screenWidth <= 991
                ? videoName.tablet
                : videoName.desktop
            }.mp4`}
            onPlay={(evt) => handleVideoPlay(evt.target.currentTime)}
          />
        </div>
        <div className={styles["content"]}>
          {screenWidth <= 991 ? null : (
            <video
              type="video/mp4"
              className={styles["clipped"]}
              muted
              playsInline
              ref={clippedVideoRef}
              loop
              src={`/us/discover-vacuums/assets/videos/A949KTMS_2023_Product_Video_Vacuum_Dual_Floor_Max_Powerful_Suction_${
                screenWidth <= 575
                  ? videoName.mobile
                  : screenWidth <= 991
                  ? videoName.tablet
                  : videoName.desktop
              }.mp4`}
            />
          )}
          <div className={styles["content--wrapper"]}>
            {screenWidth <= 991 ? <CopyVectorTablet /> : <CopyVector />}
            <div className={styles["copy"]}>
              <h2>No strings attached, just pure cleaning power</h2>
              <p>
                Meet our newest, most powerful vacuum: the LG CordZero™ A949
                All-in-One Vacuum with up to 200 minutes of runtime. Our Auto
                Empty tech helps keep collected dust and debris out of the air
                and off your hands. Plus, with the Dual Floor Max Nozzle and
                Power Mop Pro attachment, your carpets and hard floors will stay
                looking fresh.
              </p>
              <div className={styles.cta_container}>
                <ActionButton
                  href="https://www.lg.com/us/vacuum-cleaners/lg-a949ktms-stick-vacuum"
                  label="Learn More"
                  dataAction="No strings attached, just pure cleaning power - click"
                  dataLabel="Learn More"
                  className={styles.cta}
                />

                <p className={styles.watch} onClick={() => setOpenModal(true)}>
                  Watch Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Modal({ setOpenModal, refs, videoSrc }) {
  return (
    <div className={styles.modal_container} ref={refs}>
      <img
        src="/us/discover-vacuums/assets/images/close.png"
        alt="close"
        onClick={() => setOpenModal(false)}
      />

      <iframe
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
