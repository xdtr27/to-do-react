
import styles from "./Checkbox.module.css";
import { Check } from "lucide-react";


type CheckBoxProps = {
  checked: boolean;
  checkFunction: () => void; 
}

export default function Checkbox(props: CheckBoxProps) {
  const { checked, checkFunction } = props;
  
  return (
    <div onClick={checkFunction} className={checked ? styles.checkboxChecked : styles.checkBox}>
      <Check size={12}  />
    </div>
  );
}
