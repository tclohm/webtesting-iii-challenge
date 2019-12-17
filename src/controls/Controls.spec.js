// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Controls from "./Controls";

test("buttons rendered", () => {
	const { getByTestId } = render(<Controls/>);
	const openGate = getByTestId("controlDoorButton");
	const lockGate = getByTestId("controlLockButton");
	expect(openGate).toBeInTheDocument();
	expect(lockGate).toBeInTheDocument();
})

test("button text to be in locked state", () => {
	// let closed = true;
	// let locked = true;
	const { getByTestId, getByText, findByText } = render(<Controls/>)

	expect(getByTestId("controlDoorButton")).toHaveTextContent("Close Gate");
	expect(getByTestId("controlLockButton")).toHaveTextContent("Lock Gate"); 
});

test("change state on lock button", () => {
	const { getByTestId, getByText, findByText } = render(<Controls/>)
	fireEvent.click(getByTestId("controlLockButton"));
	expect(getByTestId("controlLockButton")).toHaveTextContent("Lock Gate");
});

test("change state on gate button", () => {
	const { getByTestId, getByText, findByText } = render(<Controls closed={true} />)
	fireEvent.click(getByText("Open Gate"));
	findByText(/close gate/i);
});

test("gate button is disabled", () => {
	const { getByTestId, getByText, findByText } = render(<Controls closed={false} locked={true} />)
	expect(getByTestId("controlDoorButton")).toBeDisabled();
});

test("lock button is disabled", () => {
	const { getByTestId, getByText, findByText } = render(<Controls closed={false} locked={false} />)
	expect(getByTestId("controlLockButton")).toBeDisabled();
});