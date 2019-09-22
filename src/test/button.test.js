import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("Testing Button component", () => {
  const notLoadingText = "Analyze";
  const loadingText = "Analyzing";

  test("shows button enabled the proper text when button is not loading", () => {
    const { getByText } = render(<Button loading={false} />);

    // Loading is false and we expect the text "Analyze"
    expect(getByText(notLoadingText)).toBeInTheDocument();

    // Button should be enabled
    expect(document.querySelector('button')).toBeEnabled()
  });

  test("shows button disabled and the proper text when button is loading", () => {
    const { getByText } = render(<Button loading={true} />);

    // Loading is true and we expect the text "Analyzing"
    expect(getByText(loadingText)).toBeInTheDocument();

    // Button should be disabled
    expect(document.querySelector('button')).toBeDisabled()
  });

  test("invokes the parent callback", () => {
    const mockFn = jest.fn();

    const { getByText } = render(
      <Button loading={false} onClick={() => mockFn()} />
    );

    // Simulate click to fire mock function, which does nothing 
    fireEvent.click(getByText(/analyz/i).closest("button"));

    // Assertion to check that the function was called
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("updates the component text onClick", () => {
    let loading = false;
    const mockFn = jest.fn(() => (loading = true));

    // Component contains mock function to set loading to true onClick
    const { getByText, rerender } = render(
      <Button loading={loading} onClick={() => mockFn()} />
    );

    // In the first case, loading is false and we expect the text "Analyze"
    expect(getByText(notLoadingText)).toBeInTheDocument();

    // Fire onClick event to set loading to true, then re-render
    fireEvent.click(getByText(/analyz/i).closest("button"));
    rerender(<Button loading={loading} />);

    // In the second case, loading is true and we expect the text "Analyzing"
    expect(getByText(loadingText)).toBeInTheDocument();
    
  });
});
