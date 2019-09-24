import React from "react";
import { render, fireEvent, act, waitForElement } from "@testing-library/react";
import Main from "../components/Main";
import Dropzone from "../components/Dropzone";
import { simulateFileDrop } from "./helpers";

describe("Testing Main component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("user fails to upload a file and clicks Analyze", () => {
    const { getByText, queryByText } = render(<Main />);

    fireEvent.click(getByText(/analyz/i).closest("button"));
    expect(queryByText("Please select a file first")).toBeInTheDocument();
  });

  test("user uploads valid text file", async () => {
    const file = new File(["test"], "some.txt", { type: "text/plain" });

    const { getByText, getByTestId } = render(<Main />);

    // Wrapping in await act because of React bug
    await act(async () => {
      simulateFileDrop(getByTestId, file);
    });

    // Simulate click and call API
    fireEvent.click(getByText(/analyz/i).closest("button"));

    // Wait for DOM change
    await waitForElement(() => getByText(/total words/i));
    expect(getByText(/total words/i)).toBeInTheDocument();
  });

  test("user uploads text file with non-ascii characters", async () => {
    const file = new File(["♭"], "some.txt", { type: "text/plain" });

    const { getByText, getByTestId } = render(<Main />);

    // Wrapping in await act because of React bug
    await act(async () => {
      simulateFileDrop(getByTestId, file);
    });

    // Simulate click and call API
    fireEvent.click(getByText(/analyz/i).closest("button"));

    // Wait for DOM change
    await waitForElement(() => getByText(/appears to be empty/i));
    expect(getByText(/appears to be empty/i)).toBeInTheDocument();
  });

  test("user uploads a file that is rejected by the API", async () => {
    // Disable console.error for this test
    console.error = jest.fn();

    // Mock fetch response error
    global.fetch = jest.fn();
    global.fetch.mockImplementation(() => {
      throw new Error();
    });
    const file = new File(["test"], "some.txt", { type: "text/plain" });

    const { getByText, getByTestId } = render(<Main />);

    // Wrapping in await act because of React bug
    await act(async () => {
      simulateFileDrop(getByTestId, file);
    });

    // Simulate click and call API
    fireEvent.click(getByText(/analyz/i).closest("button"));

    await waitForElement(() => getByText(/There seems to be a problem/i));
    expect(getByText(/There seems to be a problem/i)).toBeInTheDocument();
  });
});
