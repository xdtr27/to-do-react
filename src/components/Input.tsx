import { useState } from "react";
import styles from "./Input.module.css";

type InputProps = {
  setTask: () => void;
};

export default function Input(props: InputProps) {
  const [inputStatus, setInputStatus] = useState(false);
  const { setTask } = props;

  function handlePlaceholder() {
    setInputStatus(inputStatus ? false : true);
  }
  return (
    <input
      id="central-input"
      onKeyDown={(e) => (e.key === "Enter" ? setTask() : "")}
      className={styles.input}
      onFocus={handlePlaceholder}
      onBlur={handlePlaceholder}
      type="text"
      placeholder={
        inputStatus ? "Descrição da Tarefa" : "Adicione uma nova tarefa"
      }
    />
  );
}
