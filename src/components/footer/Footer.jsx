import styles from "./footer.module.css";
import logoIcon from "../../assets/Icon.png";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <div className={styles.footer_image}>
        <h2>
          Follow me on
          <a
            href=""
            target="_blank">
            Linked In
          </a>
        </h2>
      </div>
      <div className={`${styles.footer_content} container `}>
        <div>
          <div className={styles.logo_holder}>
            <img src={logoIcon} alt="Logo Icon" />

            <h3>ActiveApex</h3>
          </div>
          <p>
          Empower Your Fitness Journey: Track. Analyze. Achieve.
          </p>
          <div className={styles.info}>
            <span>Call :</span>
            <p>+91 75395 14562</p>
            <span>Email :</span>
            <p>activeapex@gmail.com</p>
          </div>
        </div>
        <div>
          <ul>
            <li>Utility Pages</li>
            <li onClick={() => navigate("/calculator")}>BMI Calculator</li>
            <li onClick={() => navigate("/schedule")}>Schedule</li>
            <li onClick={() => navigate("/errorPage")}>404 Page</li>
            <li>Password Protected</li>
            <li>Licenses</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>
        <div>
          <h3>Newsletter</h3>
          <input type="text" placeholder="Enter Your Email" />
          <button>Subscribe</button>
          <div className={styles.footer_icons}>
            <a
              href=""
              target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
