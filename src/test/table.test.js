import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Table from "../components/Table";

describe("Testing Table component", () => {
  const testFile = {
    counts: {
      test: 50,
      words: 4
    },
    totalCount: 54
  };

  test("component is empty when fileInfo is null", () => {
    render(<Table fileInfo={null} />);

    // fileInfo is null so table should not render
    expect(document.querySelector("table")).not.toBeInTheDocument();
  });

  test("component has proper number of child table elements", () => {
    render(<Table fileInfo={testFile} />);

    // There should be 3 <tr> child elements
    expect(document.querySelector("tbody").childNodes.length).toEqual(3);
  });

  test("component should show fileInfo data", () => {
    const { getByText } = render(<Table fileInfo={testFile} />);

      expect(getByText("Total Words")).toBeInTheDocument();
      expect(getByText("54")).toBeInTheDocument();
      expect(getByText("test")).toBeInTheDocument();
      expect(getByText("50")).toBeInTheDocument();
      expect(getByText("words")).toBeInTheDocument();
      expect(getByText("4")).toBeInTheDocument();
  });


  test("should call window.scrollTo when supplied with data", () => {
    // Access scrolling behaviour through global name space
    global.scrollTo = jest.fn();

    // Component rendering without data - shouldn't scroll
    const { rerender } = render(<Table fileInfo={null} />);
    expect(window.scrollTo).not.toHaveBeenCalled();
    
    // Component rendering with data - should scroll
    rerender(<Table fileInfo={testFile} />);
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
