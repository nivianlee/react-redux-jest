import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Signup from "./Container/Signup";

test("button turns secondary when clicked", () => {
  render(<App />);
});
