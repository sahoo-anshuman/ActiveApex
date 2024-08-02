import styles from "./trainer.module.css";
import photo from "../../assets/tr1.png";

const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div data-aos="fade-up">
        <img src={photo} alt="" />
        <h2>Madison Froning</h2>
        <p>Grossfit Trainer</p>
        <p className={styles.info}>
          <span>Phone :</span> +91 75395 14562
        </p>
        <p className={styles.info}>
          <span>Email :</span> activeapex@gmail.com
        </p>
        <p className={styles.info}>
          <span>Location :</span> California
        </p>
        <a
          href=""
          target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div data-aos="fade-up">
        <h1>Personal Details</h1>
        <p>
        With over a decade of experience in the fitness industry, Madison Froning is a dedicated Certified Personal Trainer and Nutrition Specialist who transforms lives through holistic health and fitness programs. Holding a Bachelor's Degree in Exercise Science and certifications from the American College of Sports Medicine (ACSM) and Precision Nutrition, Froning brings both expertise and passion to his practice. His focus on combining strength training, functional movements, and personalized nutrition plans ensures that each client achieves their fitness goals sustainably and effectively.
        </p>
        <h2>The Healthy Life Style For All</h2>
        <p></p>
        <ul>
          <li>
          Eat a Variety of Foods:<br/> Incorporate a wide range of fruits, vegetables, whole grains, lean proteins, and healthy fats into your diet to ensure you get essential nutrients.
          </li>
          <li>Portion Control:<br/> Pay attention to portion sizes to avoid overeating and maintain a healthy weight.</li>
          <li>Mindful Eating:<br/> Practice mindful eating by paying attention to hunger and fullness cues and enjoying your food without distractions.</li>
          <li>Limit Processed Foods:<br/> Reduce intake of high-sugar, high-sodium, and high-fat processed foods. Opt for whole, unprocessed options whenever possible.</li>
        </ul>
        <h2>Make real time a health improvements</h2>
        <p>
        Trainers can integrate real-time health improvements by crafting personalized nutrition and exercise plans that cater to individual goals and needs, incorporating daily physical activity seamlessly into clients' routines, and promoting hydration and adequate sleep. They should educate clients on stress management techniques, such as mindfulness and relaxation exercises, while offering regular check-ins and support to track progress and make necessary adjustments. By providing practical tips, continuous encouragement, and empowering clients with knowledge, trainers help foster sustainable lifestyle changes and enhance overall well-being.
        </p>
        <ul>
          <li>
          Customized Guidance:
          </li>
          <li>
          Motivation and Accountability
          </li>
          <li>
          Expertise and Safety
          </li>
        </ul>
        <p>
        Working out with mates can significantly enhance the fitness experience by providing increased motivation, accountability, and enjoyment. Exercising together boosts motivation through shared goals and mutual encouragement, making it easier to push through challenging workouts. The presence of workout buddies creates a sense of responsibility, helping individuals stay consistent and committed to their routines. Additionally, group workouts are more enjoyable and engaging, turning exercise into a fun social activity. Friends often introduce variety to workouts, preventing boredom and improving overall fitness by incorporating different exercises. Furthermore, mates offer valuable support and guidance, from sharing workout tips to providing positive feedback, which enhances performance and learning.
        </p>
      </div>
    </div>
  );
};

export default Second;
