const index = require("../src/index");

describe("Index", () => {
  it.only("should call config on dotenv", () => {
    // mockar config e ver se ela foi chamada
    jest.mock("dotenv", () => {
      config: jest.fn();
    });

    index;

    // mockar usando o manual mocks __mocks__/

    // mock o process .env
  });

  it("should exit the node process with code 1 when no PORT env var is found", () => {});
  it("should parse PORT process.env to number", () => {});
  it("should instantiate express into app variable", () => {});
  it("should call app.use thrice", () => {});
  it("should call json() on express and pass as app.use parameter", () => {});
  it("should call loggerMiddleware as app.use parameter", () => {});
  it("should call router as app.use parameter", () => {});
  it("should listen on PORT and console when app is running", () => {});
});
