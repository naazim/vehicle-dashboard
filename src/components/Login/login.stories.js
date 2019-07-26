import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";
import Login from "./index";

storiesOf("Login", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const from = {
      pathname: "/dashboard",
      search: "",
      hash: "",
      key: "test"
    };

    return <Login location={from} />;
  });
