import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Button from "./index";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return <Button className="btn-primary">Primary Button</Button>;
  });
