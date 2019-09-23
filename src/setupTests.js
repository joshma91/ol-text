import "@testing-library/jest-dom/extend-expect";
jest.setTimeout(30000);

// Empty implementation of window.scrollTo to supress jsdom error
const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });
