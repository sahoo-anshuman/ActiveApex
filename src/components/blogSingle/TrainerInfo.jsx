import styles from "./blogSingle.module.css";
import photo from "../../assets/blog9.png";

const TrainerInfo = () => {
  return (
    <div className={`${styles["trainer-info"]} sections-padding`}>
      <img src={photo} alt="" />
      <h4>Benjamin Gray</h4>
      <p>Professional Trainer</p>
      <p>
      The gym is a gateway to a healthier lifestyle. It's not just about temporary fitness goals but about making lasting changes that improve your overall well-being. By integrating exercise into your daily routine, you're investing in your health and setting the stage for a more vibrant, energetic life.
      </p>
      <a href="" target="_blank">
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default TrainerInfo;
