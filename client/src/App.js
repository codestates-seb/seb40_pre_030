import { GlobalStyle } from ".";
import Main from "./pages/Main";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
