/* eslint-disable react/prop-types */

/**
 *
 * @component
 * @param {Object} props
 * @param {{src: string, min?: number, max?: number}[]} props.assets
 * @returns {JSX.Element}
 * @example
    <DynamicImage 
        alt="dog eats fondue in the swiss alps"
        assets={[  
          { src: "desktop.png", min: 1200 },
          { src: "tablet.png", min: 767 },
          { src: "mobile.png" },
        ]}
     />
 */
export default function DynamicImage(props) {
  return (
    <picture>
      {props.assets.map((asset, idx) => {
        if (idx === props.assets.length - 1) {
          return (
            <img
              key={"K_" + asset.src}
              src={asset.src}
              alt={props.alt}
              style={{ width: "100%" }}
            />
          );
        }

        let mediaQuery;
        if (asset.min) {
          mediaQuery = `(min-width: ${asset.min}px)`;
        } else if (asset.max) {
          mediaQuery = `(max-width: ${asset.max}px)`;
        }

        return (
          <source
            key={"K_" + asset.src}
            srcSet={asset.src}
            media={mediaQuery}
          />
        );
      })}
    </picture>
  );
}
