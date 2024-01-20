import { createRoot } from "react-dom/client";
import React from "react";

import App from "./react-components/app.jsx";

import { sum } from "./helpers-functions/helpers";
import { multiply } from "./utils";

document.addEventListener("DOMContentLoaded", function () {
  console.log("11");
  const button = document.getElementById("clickMe");
  const message = document.getElementById("message");
  button.addEventListener("click", function () {
    if (!message.innerHTML) {
      message.innerHTML = "You clicked the button!";
    } else {
      message.innerHTML = "";
    }
  });
});

console.log("vardan  as");

const foo = () => "hellow";
const text = foo();

const total = sum(10, 5);
console.log(total, text);

const product = multiply(10, 5);
console.log(product);

// Render your React component instead
const root = createRoot(document.getElementById("app"));

root.render(<App />);
