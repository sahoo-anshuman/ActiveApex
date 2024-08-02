import styles from "./yogaClass.module.css";
import photo1 from "../../assets/yoga2.png";

const Second = () => {
  return (
    <div className={`${styles.second}  container sections-padding`}>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <img src={photo1} alt="" />
        <span>March 22, 2022</span>
        <span>Fat Loss</span>
        <h2>The Healthy Life Style For All</h2>
        <p>
        A healthy lifestyle offers numerous advantages, including improved physical fitness, enhanced mental well-being, and a reduced risk of chronic diseases. Regular exercise boosts cardiovascular health, strengthens muscles, and supports weight management, while balanced nutrition provides essential nutrients that fuel energy and optimize bodily functions. Additionally, a healthy lifestyle fosters better sleep, reduces stress, and enhances overall mood, leading to increased productivity and a more fulfilling life. Embracing these habits not only promotes longevity but also improves quality of life, helping individuals feel more vibrant, focused, and resilient in their daily activities.
        </p>
        <ul>
          <li>A natural way of your health.</li>
          <li>Train Yourself to Exercise.</li>
          <li>Enhancing the personal healing.</li>
        </ul>
        <h3>Make real time a health improvements</h3>
        <p>
        Transform your health with our dynamic fitness program designed for real-time results! At Strenghty, we offer tailored workouts and expert guidance to help you achieve your fitness goals faster. Our state-of-the-art facilities and personalized approach ensure you see and feel the difference with every session. Whether you're looking to build strength, boost endurance, or improve overall well-being, our dedicated team is here to support you every step of the way. Join us today and embark on a journey to a healthier, more vibrant you!
        </p>
        <ul>
          <li>
          State-of-the-Art Cardio Machines and Comprehensive Strength Training Equipment
          </li>
          <li>
          Dedicated Group Class Studios
          </li>
          <li>
          Expert Trainers
          </li>
        </ul>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <h3>Class Details</h3>
        <p>Maximize your calorie burn with short, intense bursts of exercise followed by brief recovery periods. Ideal for building strength and endurance.</p>

        <p className={styles.info}>
          Duration : <span>45 Minutes </span>
        </p>

        <p className={styles.info}>
          Intensity :<span>High </span>
        </p>
        <p className={styles.info}>
          Fitness Level :<span>Advanced </span>
        </p>
        <p className={styles.info}>
          Schedule :<span>Monday, Saturday </span>
        </p>
        <button>Book a Class</button>
      </div>
    </div>
  );
};

export default Second;
