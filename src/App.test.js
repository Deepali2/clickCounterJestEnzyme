import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import { exportAllDeclaration } from "../node_modules/@babel/types";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */

const setUp = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

// test("renders without crashing", () => {
//   const wrapper = shallow(<App />);
//   console.log(wrapper.debug());
// });

test("renders increment button", () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {});

test("clicking button increments the counter display", () => {});
