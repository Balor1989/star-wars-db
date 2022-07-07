import { createContext } from "react";

const { Provider: ApiServiceProvider, Consumer: ApiServiceConsumer } =
  createContext();

export { ApiServiceConsumer, ApiServiceProvider };
