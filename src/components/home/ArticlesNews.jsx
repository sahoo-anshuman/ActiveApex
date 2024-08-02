import { articlesNewsData } from "../../data/data";
import styles from "./home.module.css";

const ArticlesNews = () => {
  return (
    <div className={`${styles["articles-news"]} container sections-padding`}>
      <h2>Articles & News</h2>

      {articlesNewsData.map((ele) => {
        return (
          <div key={ele.id} data-aos="zoom-out-right">
            <span>March 23, 2022</span>
            <span>{ele.about}</span>
            <h3>The 5 best exercises to do in your park</h3>
            <p>
              <li>Squats</li>
              <li>Push-Ups</li>
              <li>Planks</li>
              <li>Pull-Ups</li>
              <li>Burpees</li>
            </p>
            <button>Read More</button>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesNews;
