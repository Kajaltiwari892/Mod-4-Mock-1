import { StrictMode } from "react";
import { Provider } from "@/components/ui/provider";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider , extendTheme } from "@chakra-ui/react";

 const theme = extendTheme({});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
