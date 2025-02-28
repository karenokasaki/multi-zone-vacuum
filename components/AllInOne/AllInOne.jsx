import s from "./AllInOne.module.scss";
import DynamicVideo from "../DynamicAssets/DynamicVideo";

export default function AllInOne() {
  return (
    <div className={s["wrapper"]}>
      <div className={s["container"]}>
        <div className={s["header"]}>
          <h2>Your vacuum’s one-stop shop</h2>
          <p>
            Streamline your cleaning with a sleek home base for all your tools
            and accessories.* Simply dock your All-in-One vacuum for hassle-free
            charging and convenient storage.
          </p>
        </div>
        <div className={s["video"]}>
          {/* prettier-ignore */}
          <DynamicVideo
          assets={[
            { src: "/us/discover-vacuums/assets/videos/all-in-one-desktop.mp4", min: 1200, preset: "desktop", type: "video/mp4" },
            { src: "/us/discover-vacuums/assets/videos/all-in-one-tablet.mp4", min: 767, preset: "tablet", type: "video/mp4" },
            { src: "/us/discover-vacuums/assets/videos/all-in-one-mobile.mp4", preset: "mobile", type: "video/mp4" },
          ]}
          />
        </div>
      </div>
      <div className={s["disclaimer"]}>
        <p>*Accessories and features vary by model.</p>
      </div>
    </div>
  );
}
