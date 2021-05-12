import styles from "./container.module.css";

export default function Container({ children, background }) {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={`h-screen ${styles.backgroundContainer} container mx-auto px-10 lg:w-4/5`}
    >
      {children}
    </div>
  );
}
