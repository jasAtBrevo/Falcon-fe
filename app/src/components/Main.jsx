import { useState } from "react";
import NavBar from "./navBar/NavBar";
import styles from "./Main.module.css";
import CreateProject from "./createProject/CreateProject";

function Main() {
  const [currentPg, setCurrentPg] = useState("home");

  return (
    <div className={styles.mainContainer}>
      <NavBar setCurrentPg={setCurrentPg} />

      <div style={{ width: "100%" }} className={styles.contentBox}>
        {currentPg === "addProject" && <CreateProject />}
      </div>
    </div>
  );
}

export default Main;
