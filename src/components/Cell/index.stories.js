import React from "react";
import { Cell, ClassCell } from "./Cell";
import { cellMock, cellMock2 } from "./cell.mock";
import { number } from "@storybook/addon-knobs";
import { color } from "@storybook/addon-knobs";

export default {
  title: "CellStory",
  component: Cell,
};

export const CellStory = () => {
  return (
    <div>
      <div>
        functional component
        <Cell {...cellMock} />
      </div>
      <div>
        class component
        <ClassCell {...cellMock} />
      </div>
      <div>
        class components with disabled updates
        <ClassCell {...cellMock2} />
      </div>
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
