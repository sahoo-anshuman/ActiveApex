import styles from "./trainers.module.css";

const Routines = () => {
  return (
    <div className={`${styles.routines} container `}>
      <p className="paragraph">Welcome</p>
      <h2>Take a look at my routines</h2>
      <p>
      Success in the gym doesn't come from simply lifting weights or running miles, it comes from the relentless pursuit of self-improvement. It's about embracing the struggle, finding strength in discomfort, and pushing through the moments when quitting feels like the easier option. Each rep and every set is a testament to your commitment to growth and resilience. In those moments of challenge, remember that you're not just building muscle; you're forging a stronger, more determined version of yourself.
      </p>
    </div>
  );
};

export default Routines;
