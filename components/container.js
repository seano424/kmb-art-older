import styles from "./container.module.css";

export default function Container({ children, background }) {
  console.log(background);
  return (
    // background-image: url("paper.gif");
    <div
      style={{
        backgroundImage: background ? `url("images/background.webp")` : "",
      }}
      className={`h-screen ${styles.backgroundContainer} container mx-auto px-10  lg:w-4/5 lg:right-0`}
    >
      {children}
    </div>
  );
}
