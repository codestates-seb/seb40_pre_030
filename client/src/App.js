import { GlobalStyle } from ".";
import Header from "./components/Header";
import Login from "./components/Login/Login"



function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App"></div>
      <Header />
     
      <Login />
    </>
  );
}

export default App;
