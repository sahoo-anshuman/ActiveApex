import styles from "./home.module.css";
import photo1 from "../../assets/home4.png";
import photo2 from "../../assets/home3.png";
import photo3 from "../../assets/home2.png";
import { Link } from "react-router-dom";

const SecondSection = () => {
  return (
    <div className={`${styles.second_section} container sections-padding`}>
      <div className={styles.first}>
        <div>
          <p className="paragraph">Our Fitness Training</p>
          <h2>Upcoming Classes</h2>
        </div>
        <div>
          <button>More Class</button>
        </div>
      </div>
      <div className={styles.second}>
        <div>
          <img src={photo1} alt="women in gym" />
          <h3>Pilates Training</h3>
          <p>Pilates is a form of exercise that focuses on strengthening the core, improving flexibility, and enhancing overall body alignment and posture. </p>
          <Link to={"/yogaClass"}>Read More</Link>
        </div>

        <div>
          <img src={photo2} alt="women in gym" />
          <h3>Aerobic Training</h3>
          <p>Also known as cardiovascular or endurance training, focuses on improving the efficiency of the cardiovascular system and increasing stamina. </p>
          <a href="#">Read More</a>
        </div>

        <div>
          <img src={photo3} alt="man in gym" />
          <h3>CrossFit Workout</h3>
          <p>CrossFit is a high-intensity fitness training program that combines elements from various exercise disciplines including weightlifting, gymnastics, and cardiovascular training. </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
