import { sendFile } from "../utils";
import testResults from "./testResults.json"

describe("Testing util functions", () => {
  jest.setTimeout(30000);
  const API_URL =
    "https://wordcount-api.dev.openlaw.io/api/wordcount/v1/upload";
  const FILE_URL = "https://www.w3.org/TR/PNG/iso_8859-1.txt"

  test("should show that file was successfully uploaded", async () => {
    
    const file = await fetch(FILE_URL)
    .then(response => response.blob())

    const fileInfo = await sendFile(API_URL, file);
    expect(fileInfo.counts).toEqual(testResults)
  });
});
