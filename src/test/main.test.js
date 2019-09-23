import React from "react";
import { render, fireEvent, getByTestId, waitForElement } from "@testing-library/react";
import Main from "../components/Main";
import Dropzone from "../components/Dropzone"

describe("Testing Main component", () => {
  const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
  const API_URL =
    "https://wordcount-api.dev.openlaw.io/api/wordcount/v1/upload";
  const WORKING_FILE_URL = "https://www.w3.org/TR/PNG/iso_8859-1.txt";
  const BIG_FILE_URL = "https://norvig.com/big.txt";

  test("user fails to upload a file and clicks Analyze", () => {
    const { getByText, queryByText } = render(<Main />);

    fireEvent.click(getByText(/analyz/i).closest("button"));
    expect(queryByText("Please select a file first")).toBeInTheDocument();
  });

  test("user uploads a file that is rejected by the API" , async () => {

  })

  test("user uploads valid text file", () => {

  })


});
