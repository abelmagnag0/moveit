import styles from "../styles/components/Profile.module.css"

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/abelmagnag0.png" alt="Abel Magnago"/>
      <div>
        <strong>Abel Magnago</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}