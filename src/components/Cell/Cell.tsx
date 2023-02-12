import React, { useState } from "react";
import { CellTypes } from "../../types";
import styles from "./Cell.module.css";

export const Cell: React.FunctionComponent<CellTypes> = ({ number, color }) => {
  const [isNumberVisible, setIsNumberVisible] = useState(false);
  return (
    <div
      className={styles.cell}
      style={{ backgroundColor: color }}
      onClick={() => setIsNumberVisible(!isNumberVisible)}
    >
      {isNumberVisible && <div className={styles.cellContent}>{number}</div>}
    </div>
  );
};
