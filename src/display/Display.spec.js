// Test away!
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Display from "./Display";

test("renders initial locked state to be unlocked", () => {
	const { getByText } = render(<Display />);
	const lockStatus = getByText("Unlocked");
	expect(lockStatus).toHaveTextContent(/Unlocked/i);
});

test("renders initial door state to be open", () => {
	const { getByText } = render(<Display />);
	const doorStatus = getByText("Open");
	expect(doorStatus).toHaveTextContent(/Open/i);
});

test("renders initial door state to not be closed", () => {
	const { queryByText } = render(<Display />);
	const doorStatus = queryByText("Closed");
	expect(doorStatus).toBeNull();
});

test("door is locked and closed", () => {
	const closed = true;
	const locked = true;
	const { getByText } = render(<Display closed={closed} locked={locked}/>);
	const lockedDoor = getByText("Locked");
	expect(lockedDoor).toHaveClass("led red-led");
});

test("door is unlocked and open", () => {
	const closed = false;
	const locked = false;
	const { queryByText } = render(<Display closed={closed} locked={locked}/>);
	const lock = queryByText("Unlocked");
	const open = queryByText("Open");
	expect(lock).toHaveClass("led green-led");
	expect(open).toHaveClass("led green-led");
})