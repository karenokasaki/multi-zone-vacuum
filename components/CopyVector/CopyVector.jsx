import styles from "./CopyVector.module.scss";

export default function CopyVector() {
  return (
    <div className={styles["svg-wrapper"]}>
      <svg
        width={1600}
        height={746}
        viewBox="0 0 1600 746"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_0_3"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={1600}
          height={746}
        >
          <rect width={1600} height={746} fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_0_3)">
          <g filter="url(#filter0_b_0_3)">
            <path
              d="M649.041 526.962L107.164 526.962C78.3547 526.962 55 504.304 55 476.353L55 187.609C55 159.653 78.3547 137 107.164 137L649.093 137C677.902 137 701.257 159.703 701.257 187.609C701.257 240.461 679.627 251.434 679.627 331.953C679.627 412.471 701.257 423.161 701.257 476.391C701.257 499.528 677.902 527 649.093 527L649.041 526.95V526.962Z"
              fill="black"
              fillOpacity="0.6"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_b_0_3"
            x={-9}
            y={73}
            width="774.257"
            height={518}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation={32} />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_3"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <svg
        className={styles["clip-svg"]}
        width={1600}
        height={746}
        viewBox="0 0 1600 746"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_0_3"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={1600}
          height={746}
        >
          <rect width={1600} height={746} fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_0_3)">
          <g filter="url(#filter0_b_0_3)">
            <clipPath id="svgVideoPath">
              <path
                d="M649.041 526.962L107.164 526.962C78.3547 526.962 55 504.304 55 476.353L55 187.609C55 159.653 78.3547 137 107.164 137L649.093 137C677.902 137 701.257 159.703 701.257 187.609C701.257 240.461 679.627 251.434 679.627 331.953C679.627 412.471 701.257 423.161 701.257 476.391C701.257 499.528 677.902 527 649.093 527L649.041 526.95V526.962Z"
                fill="black"
                fillOpacity="0.6"
              />
            </clipPath>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_b_0_3"
            x={-9}
            y={73}
            width="774.257"
            height={518}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation={32} />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_0_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_3"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
