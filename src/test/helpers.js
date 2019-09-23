import React from "react";
import { fireEvent, act } from "@testing-library/react";

export const simulateFileDrop = (getByTestId, file) => {
  const formElement = getByTestId("dropzone");

  // Define files property on Dropzone element and fire drop event
  Object.defineProperty(formElement, "files", { value: [file] });
  fireEvent.drop(formElement)
}