import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Hello from "./Hello";

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

// With these snapshots, we can “save” the rendered component output and ensure that a change to it has to be explicitly committed as a change to the snapshot

it("should render a greeting", () => {
  act(() => {
    render(<Hello />, container);
  });

  expect(
pretty(container.innerHTML)).
toMatchInlineSnapshot(`"<span>Hey, Python</span>"`); /* ... gets filled automatically by jest ... */

  act(() => {
    render(<Hello name="Jenny" />, container);
  });

  expect(
pretty(container.innerHTML)).
toMatchInlineSnapshot(`"<h1>Hello, Jenny!</h1>"`); /* ... gets filled automatically by jest ... */

  act(() => {
    render(<Hello name="Margaret" />, container);
  });

  expect(
pretty(container.innerHTML)).
toMatchInlineSnapshot(`"<h1>Hello, Margaret!</h1>"`); /* ... gets filled automatically by jest ... */
});