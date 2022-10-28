import { GlobalStyle } from ".";
import Main from "./pages/Main";
import Signup from "./components/Signup/Signup";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        {/* <Main /> */}
        <Header />
      </div>
    </>
  );
}

export default App;
