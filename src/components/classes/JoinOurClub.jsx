import { useNavigate } from "react-router";
import styles from "./classes.module.css";

const JoinOurClub = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["join-our-club"]} data-aos="zoom-in">
      <div>
        <h2>Join Our Club</h2>
        <p>
        Discipline is choosing between what you want now and what you want most.
        </p>
        <button onClick={() => navigate("/schedule")}>Start Now</button>
      </div>
    </div>
  );
};

export default JoinOurClub;
