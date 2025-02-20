import { useState } from "react";
import styles from "./calculator.module.css";

const Second = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const [formError, setFormError] = useState("");

  const [underweight, setUnderweight] = useState("");
  const [healthy, setHealthy] = useState("");
  const [overweight, setOverweight] = useState("");
  const [obese, setObese] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    if (!height || !weight || !age || !gender) {
      setFormError("Fill All Fields");
    } else {
      setFormError("");
      setHeight("");
      setWeight("");
      setAge("");
      setGender("");
      setEmail("");

      // Generate random numbers
      setUnderweight("< 18.5");
      setHealthy("18.5 - 24.9");
      setOverweight("25.0 - 29.9");
      setObese("> 30.0");
    }
  };
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div>
        <p className="paragraph">Fill Details And Receive Email</p>
        <h2>Your BMI</h2>
        <p>
          Enter your details in the below specified space and get your BMI checked.
        </p>
        <form>
          <div>
            <input
              type="number"
              placeholder="Height  (in cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <input
              type="number"
              placeholder="Weight  (in kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" onClick={(e) => formHandler(e)}>
            Submit
          </button>
          <p className={styles.error}>{formError}</p>
        </form>
      </div>
      <div>
        <h2>BMI Chart</h2>
        <div className={styles.results}>
          <div>
            <div>BMI</div>
            <div>Weight status</div>
          </div>

          <div>
            <div>{underweight}</div>
            <div className={styles.underweight}>Underweight</div>
          </div>

          <div>
            <div>{healthy}</div>
            <div className={styles.healthy}>Healthy</div>
          </div>
          <div>
            <div>{overweight}</div>
            <div className={styles.overweight}>Overweight</div>
          </div>
          <div>
            <div>{obese}</div>
            <div className={styles.obese}>Obese</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
