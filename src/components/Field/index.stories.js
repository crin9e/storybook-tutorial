import React from "react";
import { Field } from "./Field";
import { fieldMock } from "./field.mock";

export default {
  title: "FieldStory",
  component: Field,
};

export const FieldStory = () => {
  return (
    <div>
      <Field cells={fieldMock} />
    </div>
  );
};
