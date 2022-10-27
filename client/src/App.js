import { GlobalStyle } from ".";
import Article from "./components/Article";
import QuestionsContainer from "./components/Board/QuestionsContainer";
import Header from "./components/Header";
import LogOut from "./components/LogOut";



function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        {/* <QuestionsContainer /> */}
        <Article />
        <LogOut />
      </div>
    </>
  );
}

export default App;
