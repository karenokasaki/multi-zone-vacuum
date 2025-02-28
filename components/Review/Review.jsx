import styles from "./Review.module.scss";
import { useState } from "react";
import useScreenWidth from "../../hooks/useScreenWidth";
import SlideBtns from "../Chart/SlideBtns/SlideBtns";
import ChatBanner from "../ChatBanner";

export default function Review() {
  const [currSlide, setCurrSlide] = useState(0);
  const screenWidth = useScreenWidth();

  const reviews = [
    {
      text: "Never in my life did I think I’d find myself enjoying vacuuming, but here we are! I truly enjoy grabbing this cordless vac to clean up the daily little messes that come along with parenting. It’s slightly heavier than I would prefer for longer vacuuming sessions, but that’s mostly my arthritis talking. Overall, I absolutely love this vacuum!",
      user: "Vanessa_G",
      date: "2 Months Ago",
      link: "https://www.lg.com/us/vacuum-cleaners/lg-a931kwm-stick-vacuum",
    },
    {
      text: "Wow, wow, wow…this LG CordZero Vacuum is incredible. It looks so sleek and modern, it holds and hides most of the attachments, it empties itself, and is an absolute workhorse. This is a great piece of equipment…LG has really outdone itself! I will say that removing it from the box can be a little intimidating. There are a lot of wrapped pieces, and a ton of instructions.",
      user: "Bbjniles",
      date: "2 Years Ago",
      link: "https://www.lg.com/us/vacuum-cleaners/lg-a931kwm-stick-vacuum",
    },
    {
      text: "I LOVE this product. It is lightweight and the head swivels really sleekly to get those corners and hard to reach areas. I really love that is cordless so no more fighting the cord being in the way and switching outlets to get the job done. Works well on hardwoods, tile, carpet and area rugs. I love how the attachments store in the stand so they won't get lost. Also the self emptying is so cool. My husband is looking forward to using it to vacuum out his truck since it can also be a hand vac. I cannot recommend this enough! It makes vacuuming fun and my kids actually WANT to vacuum. That alone makes it worth every penny!",
      user: "LalaT",
      date: "2 Years Ago",
      link: "https://www.lg.com/us/vacuum-cleaners/lg-a938kbgs-stick-vacuum",
    },
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["slider"]} data-curr-slide={currSlide}>
          {reviews.map((review, i) => (
            <div className={styles["copy-box"]} key={i}>
              <p>{review.text}</p>
              <p className={styles["user"]}>
                {review.user} | {review.date}
              </p>
              <p className={styles["star"]}>★★★★★</p>
              <div className={styles["link-container"]}>
                <a
                  href={review.link}
                  data-ms-event="lgEvent"
                  data-ms-action={`Review #${i + 1} - Click`}
                  data-ms-label="Read Full Review"
                >
                  Read Full Review
                </a>
              </div>
            </div>
          ))}
        </div>
        {screenWidth <= 767 ? (
          <SlideBtns
            currSlide={currSlide}
            setCurrSlide={setCurrSlide}
            name="review"
            className={styles["slide-btns"]}
          />
        ) : null}
      </div>

      <ChatBanner />

      <div className={styles["logo"]}>
        <img
          src="/us/discover-vacuums/assets/images/lg-lifes-good.png"
          alt="LG Life's Good logo"
        />
      </div>
    </div>
  );
}
