import s from "./CrModule.module.scss";
import ResponsiveImage from "../ResponsiveImage";
import ActionButton from "../ActionButton";
import { formatParagraph } from "../../lib/formatText";

const data = {
  title: "Rated, Reliable, and Recommended",
  copy: "Mess happens. That’s why LG vacuums come equipped with extended run-times, mop attachments and auto-emptying dustbins. So you can embrace the chaos of life at home.\n\nWe’re proud that Consumer Reports has recommended the LG A949KTMS Vacuum Cleaner.*",
  disclaimer:
    "*LG vacuum model A949KTMS is recommended by Consumer Reports. Consumer Reports does not endorse products or services.",
  cta_text: "See Report",
  cta_url: "#",
  image: {
    m: "/us/discover-vacuums/assets/images/cr-module-m.jpg",
    t: "/us/discover-vacuums/assets/images/cr-module-t.jpg",
    d: "/us/discover-vacuums/assets/images/cr-module-d.jpg",
    alt: "",
  },
};

export default function CrModule() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.image}>
          <ResponsiveImage
            alt="CR Module"
            {...data.image}
            tabletBreakpoint={750}
          />
        </div>

        <div className={s.content}>
          <h2 className={s.title}>{data.title}</h2>
          <p className={s.copy}>{formatParagraph(data.copy)}</p>

          <div className={s.cta}>
            <ActionButton label={data.cta_text} variant="green" />
          </div>

          <p className={s.disclaimer}>{data.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}
