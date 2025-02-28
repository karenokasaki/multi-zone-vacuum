/* eslint-disable react/prop-types */

import { useCallback, useEffect, useRef, useState } from "react";

const MAX_INT = Number.MAX_SAFE_INTEGER;

/**
 *
 * @component
 * @param {Object} props
 * @param {{src: string, min?: number, type: string}[]} props.assets
 * @returns {JSX.Element}
 * @example
    <DynamicVideo 
        assets={[  
          { src: "desktop.mp4", min: 1200, type: "video/mp4" }, 
          { src: "tablet.mp4", min: 767, type: "video/mp4" }, 
          { src: "mobile.mp4", type: "video/mp4" }, 
        ]}
     />
 */
export default function DynamicVideo(props) {
  /* ======================== STATE ======================== */

  const videoRef = useRef();
  const previousScreenWidth = useRef(Infinity);
  const [screenWidth, setScreenWidth] = useState();

  /* ======================== HELPERS ====================== */

  const crossesBoundaries = useCallback((assets, prevWidth, currWidth) => {
    /*
        Function recognizes if there's been a leftward
        or rightward crossing of a boundary given the
        previous and current width.
    */
    return assets.some(({ min }) => {
      return (
        min &&
        ((prevWidth >= min && currWidth < min) ||
          (prevWidth < min && currWidth >= min))
      );
    });
  }, []);

  const requestNewSource = useCallback((assets, currWidth) => {
    /*
        Function determines what is the correct source
        for the given width.
     */
    if (!currWidth) currWidth = window.innerWidth;
    let found = assets.find((v) => v.preset === "desktop");
    if (currWidth >= 1200) {
      found = assets.find((v) => v.preset === "desktop");
    } else if (currWidth < 1200 && currWidth >= 767) {
      found = assets.find((v) => v.preset === "tablet");
    } else {
      found = assets.find((v) => v.preset === "mobile");
    }
    return found.src;
  }, []);

  /* ======================== EVENTS ======================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = requestNewSource(props.assets, screenWidth);
    }
  }, [videoRef]);

  useEffect(() => {
    /*
       Use effect sets up the observer to
       change the screen width state.
     */
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) setScreenWidth(entry.contentRect.width);
    });
    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    /*
        Use effect runs on each screen resize
        event, boolean logic determines if
        video requires new source.
     */
    if (videoRef.current) {
      /* prettier-ignore */
      if (crossesBoundaries( props.assets, previousScreenWidth.current, screenWidth )) {
        videoRef.current.src = requestNewSource(props.assets, screenWidth);
      }
    }

    previousScreenWidth.current = screenWidth;
  }, [screenWidth, crossesBoundaries, requestNewSource]);

  /* ======================== JSX ========================== */

  return (
    <video autoPlay playsInline muted ref={videoRef}>
      {props.assets.map((asset, idx) => {
        return (
          <source
            key={"K_" + asset.src + idx}
            srcSet={asset.src}
            media={asset.min && `(min-width: ${asset.min}px)`}
          />
        );
      })}
    </video>
  );
}
