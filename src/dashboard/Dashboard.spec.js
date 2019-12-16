// Test away
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Dashboard from "./Dashboard";

test("renders both components in Dashboard", () => {
	const { getByTestId, rerender } = render(<Dashboard/>);
	const displayComp = getByTestId("displayComponent");
	expect(displayComp).toBeInTheDocument();

	rerender(<Dashboard/>);
	const controlComp = getByTestId("controlComponent");
	expect(controlComp).toBeInTheDocument();

});

test("does not render a fake component", () => {
	const { queryByTestId } = render(<Dashboard/>);
	const extraFeatureComp = queryByTestId("extraFeatureComponent");
	expect(extraFeatureComp).not.toBeInTheDocument();
});

test("render control lock button", () => {
	const { getByTestId } = render(<Dashboard/>);
	const button = getByTestId("controlLockButton");
	expect(button).toBeInTheDocument();
});

test("render control door button", () => {
	const { getByTestId } = render(<Dashboard/>);
	const button = getByTestId("controlDoorButton");
	expect(button).toBeInTheDocument();
});

test("dashboard state `closed` and `locked` to initialize as false", () => {
	const locked = false;
	const closed = false;
	const tree = render(<Dashboard locked={locked} closed={closed}/>);
	expect(tree.baseElement).toMatchSnapshot();
})