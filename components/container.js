import styles from "./container.module.css";

export default function Container({ children, background }) {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={`h-screen ${styles.backgroundContainer} container mx-auto px-10`}
    >
      {children}
    </div>
  );
}
