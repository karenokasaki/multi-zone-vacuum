import styles from "./Chart.module.scss";
import chartData from "../../data/chart";
import CtaBtn from "../CtaBtn/CtaBtn";
import SlideBtns from "./SlideBtns/SlideBtns";
import { useState } from "react";
import useScreenWidth from "../../hooks/useScreenWidth";
import Header from "./Header";
import ActionButton from "../ActionButton";

export default function Chart() {
  const [open, setOpen] = useState(true);
  const [currSlide, setCurrSlide] = useState(0);
  const [tooltipActive, setTooltipActive] = useState(null);
  const screenWidth = useScreenWidth();

  const modelSchema = [
    { name: "Model", tooltip: false },
    {
      name: "Power Mop Pro",
      tooltip:
        "Makes floors shine and wipes out stains with floor-safe detergent.",
    },
    { name: "Power Mini Nozzle", tooltip: false },
    {
      name: "Auto Empty",
      tooltip: "Tower automatically empties dustbin when vacuum is docked.",
    },
    {
      name: "Kompressor®",
      tooltip: "Compresses dust and dirt so you can clean more and pause less.",
    },
    {
      name: "ThinQ App Connect",
      tooltip: "Sends diagnostic information right to your smartphone.",
    },
    {
      name: "Dual Brush Nozzle",
      tooltip: "Includes a nozzle to take on carpets, hard floors and more.",
    },
    { name: "Suction Power", tooltip: false },
    { name: "Quick Release Batteries", tooltip: false },
    { name: "Runtime", tooltip: false },
    { name: "Bin Capacity", tooltip: false },
    { name: "link", tooltip: false },
  ];

  const models = ["A913BM", "A925KSM", "A931KWM", "A937KGMS", "A949KTMS"];

  return (
    <div className={styles["container"]} data-open={open}>
      <div className={styles["tab"]}>
        <div className={styles["chart"]}>
          {/* Chart */}
          <div className={styles["chart-content"]}>
            <div className={styles["chart-content--wrapper"]}>
              <div className={styles["header"]}>
                <h2>From basic brilliance to premium picks</h2>
                <p>
                  Still not sure which LG vacuum best fits your lifestyle and
                  space? Compare them side by side below.
                </p>
              </div>
              <div className={styles["table"]}>
                <div className={styles["table--header"]}>
                  <div className={styles["table--header--cell"]}></div>
                  {screenWidth <= 767 ? (
                    <Header currSlide={currSlide} />
                  ) : (
                    <>
                      <div className={styles["table--header--cell"]}>
                        <h3>LG CordZero™ Cordless Stick Vacuums</h3>
                      </div>
                      <div className={styles["table--header--cell"]}>
                        <h3>
                          LG CordZero™ All-in-One Cordless Stick Vacuums with
                          Auto Empty
                        </h3>
                      </div>
                    </>
                  )}
                </div>

                <div className={styles["table--content"]}>
                  <div className={styles["table--key"]}>
                    {modelSchema.map((key, i) => (
                      <div
                        className={styles["table--key--cell"]}
                        key={i}
                        data-key={key.name}
                      >
                        {key.name === "link" ? "" : <p>{key.name}</p>}
                        {key.tooltip ? (
                          <button
                            className={styles["tooltip"]}
                            onMouseOver={() => setTooltipActive(i)}
                            onTouchStart={() => setTooltipActive(i)}
                            onMouseLeave={() => setTooltipActive(null)}
                            onBlur={() => setTooltipActive(null)}
                          >
                            <p>Tooltip</p>
                          </button>
                        ) : null}
                        {tooltipActive === i ? (
                          <div className={styles["tooltip-container"]}>
                            <p>{modelSchema[i]["tooltip"]}</p>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <div className={styles["table--values"]}>
                    <div
                      className={styles["table--values--wrapper"]}
                      data-curr-slide={currSlide}
                    >
                      {models.map((model, i) => (
                        <div className={styles["table--values--col"]} key={i}>
                          {modelSchema.map((key, i) => (
                            <div
                              className={styles["table--values--col--cell"]}
                              key={i}
                            >
                              {key.name === "link" ? (
                                <ActionButton
                                  href={chartData[model]["link"]}
                                  label="Shop Now"
                                  dataAction={`${model} - click`}
                                  dataLabel={model + " - click"}
                                  className={styles.cta}
                                />
                              ) : (
                                <>
                                  {key.name !== "Quick Release Batteries" && (
                                    <p>{chartData[model][key.name]}</p>
                                  )}
                                  {key.name === "Quick Release Batteries" ? (
                                    <p
                                      data-baterie={
                                        key.name === "Quick Release Batteries"
                                      }
                                    >
                                      {chartData[model][key.name] === "1" ? (
                                        <img src="/us/discover-vacuums/assets/images/1x.png" />
                                      ) : (
                                        <img src="/us/discover-vacuums/assets/images/2x.png" />
                                      )}
                                    </p>
                                  ) : null}
                                  {key.name === "Model" ? (
                                    <img
                                      src={`/us/discover-vacuums/assets/images/${model}.png`}
                                    />
                                  ) : null}
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {screenWidth <= 767 ? (
              <SlideBtns currSlide={currSlide} setCurrSlide={setCurrSlide} />
            ) : null}
            <div className={styles["table--disclaimer"]}>
              <p>
                All CordZero™ Cordless Stick Vacuums Come Equipped With:
                Handheld Conversion, Telescopic Wand, Combination & Crevice Tool,
                5-Step Filtration, Washable Filters, and 10-Year Motor Warranty.
              </p>
              <p>
                *In normal mode without Power Nozzles using either one or two
                batteries, depending on model. <br />
                **When compressed.
              </p>
            </div>
          </div>
        </div>

        <button
          className={styles["chart-btn"]}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>comparison chart</span>
          <img src="/us/discover-vacuums/assets/svg/chev.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
