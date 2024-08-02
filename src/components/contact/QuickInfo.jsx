import { useState } from "react";
import styles from "./contact.module.css";

const QuickInfo = () => {
  const [active, setActive] = useState(Array(4).fill(false));
  const [activeIndex, setActiveIndex] = useState(-1);

  const paragraphHandler = (index) => {
    setActive((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className={`${styles["quick-info"]} sections-padding`}>
      <div>
        <div>
          <h4>What is the Fitness-Fit schedule?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 0 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(0)}></i>
        </div>
        <p className={active[0] ? styles.active : ""}>
        Monthly podcasts with many known faces on their exercise and gymming habits and their takeaways. Join with us at 10:00 PM on 21st of every month for a very indulging and beneficial session.
        </p>
      </div>
      <div>
        <div>
          <h4>What is the Fitnessfit schedule?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 1 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(1)}></i>
        </div>
        <p className={active[1] ? styles.active : ""}>
          Monthly podcasts with many known faces on their exercise and gymming habits and their takeaways. Join with us at 10:00 PM on 21st of every month for a very indulging and beneficial session.
        </p>
      </div>
    </div>
  );
};

export default QuickInfo;
