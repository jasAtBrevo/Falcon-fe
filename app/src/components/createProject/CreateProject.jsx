import styles from "./CreateProject.module.css";
import { Button, Input } from "antd";

function CreateProject() {
  return (
    <div className={styles.formContainer}>
      <h2>Add your project</h2>

      <div>
        <div className={styles.inputBox}> Project Name</div>
        <Input
          placeholder="Project Name"
          onChange={(e) => console.log("##", e.target.value)}
        />
      </div>

      <div>
        <div className={styles.inputBox}>Team Name</div>
        <Input
          placeholder="Team Name"
          onChange={(e) => console.log("##", e.target.value)}
        />
      </div>
      <div>
        <div className={styles.inputBox}>Link</div>
        <Input
          placeholder="Link"
          onChange={(e) => console.log("##", e.target.value)}
        />
      </div>

      <Button type="primary" block onClick={() => {}}>
        Primary
      </Button>
    </div>
  );
}

export default CreateProject;
