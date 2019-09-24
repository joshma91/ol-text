import React from "react";
import Dropzone from "../components/Dropzone";
import { fireEvent, render, waitForElement } from "@testing-library/react";
import { simulateFileDrop } from "./helpers";

describe("Testing Dropzone component", () => {
  test("show file name after dropping file in component", async () => {
    const file = new File(["test"], "some.txt", {type: "text/plain"})
    const { getByTestId, getByText, queryByText } = render(<Dropzone setFiles={jest.fn()} />);
    simulateFileDrop(getByTestId, file);

    // Wait for DOM change
    await waitForElement(() => getByText(/some.txt/i));

    expect(queryByText("some.txt")).toBeDefined();
  });
});