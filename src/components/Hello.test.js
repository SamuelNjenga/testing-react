import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "./Hello";

// Test whether a component renders correctly for the given props

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Hello />, container);
  });
  expect(container.textContent).toBe("Hey, Python");

  act(() => {
    render(<Hello name="JavaScript" />, container);
  });
  expect(container.textContent).toBe("Hello, JavaScript!");

  act(() => {
    render(<Hello name="React JS" />, container);
  });
  expect(container.textContent).toBe("Hello, React JS!");
});
