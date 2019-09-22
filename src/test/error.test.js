import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Error from "../components/Error";

describe("Testing Error component", () => {
  const testError = "test error";
  test("shows the proper error text that's passed in", () => {
    const { getByText } = render(
      <Error isError={true} errorMessage={testError} />
    );

    // isError is true and we expect the text "test error"
    expect(getByText(testError)).toBeInTheDocument();
  });

  test("doesn't show the error message", () => {
    const { getByText } = render(
      <Error isError={false} errorMessage={testError} />
    );

    // isError is false so we expect no visible text
    expect(getByText(testError)).not.toBeVisible();
  });
});
