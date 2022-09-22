import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "./styles.css";
import { Requirements } from "../components/Requirements";
import { SignUpForm } from "../components/Forms/sign_up_form/SignUpForm";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <SignUpForm />;
});
