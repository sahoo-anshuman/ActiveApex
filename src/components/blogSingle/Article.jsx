import styles from "./blogSingle.module.css";

const Article = () => {
  return (
    <div className={styles.article}>
      <p>
      In our fast-paced world, carving out time for the gym can often seem like a daunting task. Yet, the gym is more than just a place to exercise; it is a sanctuary for growth, resilience, and self-discovery. Embracing a consistent gym routine can transform not just your body but your entire outlook on life. Here's why you should consider making the gym an integral part of your routine and how to get started on this empowering journey.
      </p>
      <h2>The 10 best exercises to do in your park</h2>
      <p>
      Exercise is a powerful tool for managing stress and improving mental health. When you engage in physical activity, your body releases endorphins, chemicals that act as natural mood lifters. This can help alleviate symptoms of anxiety and depression, providing a mental boost that carries over into other areas of your life. The gym can become a refuge where you clear your mind, focus on your goals, and experience a sense of accomplishment.
      </p>
      <ul>
        <li>
        Building Physical Strength and Endurance
        </li>
        <li>Mental Fortitude and Stress Relief</li>
        <li>
        Creating a Routine and Building Discipline
        </li>
      </ul>

      <div className={styles.spicial}>
        <p>
          I look at that guy as someone who's given me a platform to help me forget about that guy... In order to arrive to the next chapter in life, you have to forget the chapter that came before you and focus on the chapter ahead of you.
        </p>
      </div>
      <h3>The 3 steps for morning routines</h3>
      <p>
      Why It's Important? <br/>
      Preparation reduces the friction between waking up and starting your workout. By organizing your gear and setting your environment the night before, you make it easier to get moving in the morning.
      </p>
      <ul>
        <li>
        Wake Up and Hydrate
        </li>
        <li>
        Begin with a Warm-Up
        </li>
        <li>
        Putting It All Together
        </li>
      </ul>
    </div>
  );
};

export default Article;
