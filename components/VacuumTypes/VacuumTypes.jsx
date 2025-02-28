import styles from "./VacuumTypes.module.scss";
import ActionButton from "../ActionButton";

export default function VacuumTypes() {
  const categories = [
    {
      title: "All-in-One",
      copy: "Experience storage made simple with a convenient, standalone docking station that not only disposes of dust and debris hands-free, but also charges your vacuum and offers easy access to accessories.",
      img: "all-in-one.png",
      url: "https://www.lg.com/us/vacuum-cleaners",
      alt: "LG All-in-One Vacuum standalone docking station beside plant in home",
    },
    {
      title: "Stick",
      copy: "Opt for wall-mounted or free-standing docking for powerful suction, 5-step filtration and convenient charging, all within a familiar, easy-to-use stick vacuum that’s always ready for grab-and-go action.",
      img: "stick.png",
      url: "https://www.lg.com/us/vacuum-cleaners",
      alt: "LG Stick Vacuum in free-standing dock in home",
    },
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <h1>Find the vacuum that suits your style</h1>
        <p>
          From compact condos to multi-level homes, there's an LG vacuum that's
          bound to sweep you off your feet, no matter the size and shape of your
          space.
        </p>
        <div className={styles["cta-container"]}>
          <ActionButton
            href={"https://www.lg.com/us/vacuum-cleaners"}
            label="Shop Now"
            dataAction="Find the vacuum that suits your style - click"
            dataLabel="Shop Now"
          />
        </div>
      </div>
      <div className={styles["content"]}>
        {categories.map((category, i) => (
          <div className={styles["category"]} key={i}>
            <img
              src={`/us/discover-vacuums/assets/images/${category.img}`}
              alt={category.alt}
            />
            <h3>{category.title}</h3>
            <p>{category.copy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
