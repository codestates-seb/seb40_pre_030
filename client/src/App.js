import { GlobalStyle } from ".";
import Header from "./components/Header";
import Signup from "./components/Signup/Signup";




function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App"></div>
      <Header />
     <Signup />
      
    </>
  );
}

export default App;
