import { sendFile } from "../utils";
import testResults from "./testResults.json";

describe("Testing util functions", () => {
  const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
  const API_URL =
    "https://wordcount-api.dev.openlaw.io/api/wordcount/v1/upload";

  const WORKING_FILE_URL = "https://www.w3.org/TR/PNG/iso_8859-1.txt";
  const BIG_FILE_URL = "https://norvig.com/big.txt";

  test("response from file upload should equal verified results", async () => {
    const file = await fetch(PROXY_URL + WORKING_FILE_URL).then(response =>
      response.blob()
    );

    const fileInfo = await sendFile(API_URL, file);
    expect(fileInfo.counts).toEqual(testResults);
  });

  test("response from big file upload should return error", async () => {
    // Disable console.error for this test
    console.error = jest.fn()
    const file = await fetch(PROXY_URL + BIG_FILE_URL).then(response =>
      response.blob()
    );

    // File exceeds maximum upload size, rejected by server
    await expect(sendFile(API_URL, file))
    .rejects
    .toThrow();
  });
});
