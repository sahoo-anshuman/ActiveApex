import styles from "./trainer.module.css";

const Third = () => {
  return (
    <div className={`${styles.third} sections-padding`} data-aos="flip-down">
      <div className={`${styles.third_content} container`}>
        <div>
          <h2>
            Contact us And
            <br />
            Join The Team
          </h2>
          <p>
          Joining a gym offers the chance to transform your health, boost confidence, and achieve personal fitness goals. With expert guidance, diverse equipment, and a motivating environment, you can build strength, enhance well-being, and enjoy a supportive community. Commit to a healthier lifestyle and unlock your full potential today!
          </p>
        </div>
        <div>
          <form>
            <div>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Massage"></textarea>
            <button>Start Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Third;
