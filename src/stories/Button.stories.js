import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "./styles.css";
import { Button } from "../components/Button/Button";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <Button onClick={() => console.log("clicked")} text={"Button"} />;
});
