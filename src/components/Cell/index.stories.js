import React from "react";
import { Cell } from "./Cell";
import { cellMock } from "./cell.mock";
import { number } from "@storybook/addon-knobs";
import { color } from "@storybook/addon-knobs";

export default {
  title: "CellStory",
  component: Cell,
};

export const CellStory = () => {
  return (
    <div>
      <Cell {...cellMock} />
    </div>
  );
};

export const CellStoryWithKnobs = () => {
  const numberValue = number("Number", 25);
  const colorValue = color("Color", "#ffffff");

  return (
    <div>
      <Cell color={colorValue} number={numberValue} />
    </div>
  );
};
