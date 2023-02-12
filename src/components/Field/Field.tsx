import React from "react";
import { FieldTypes } from "../../types";
import { Cell } from "../Cell/Cell";
import styles from "./Field.module.css";

export const Field: React.FunctionComponent<FieldTypes> = ({ cells }) => {
  return (
    <div className={styles.field}>
      {cells.map((cell, index) => (
        <Cell number={cell.number} color={cell.color} key={index} />
      ))}
    </div>
  );
};
