import { GlobalStyle } from ".";
import Main from "./pages/Main";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
