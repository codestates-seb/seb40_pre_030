import { GlobalStyle } from ".";
import Main from "./pages/Main";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import LogOut from "./components/Logout/";
import Askquetion from "./components/Askquetion";
import Tags from "./pages/Tags";
import Users from "./pages/Users";
import QuestionsView from "./pages/QuestionView";
import EditQuestion from "./pages/EditQuestion";
import EditAnswer from "./pages/EditAnswer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/users/logout" element={<LogOut />} />
          <Route path="/ask" element={<Askquetion />} />
          <Route path="/tags" element={<Tags />}></Route>
          <Route path="/question/:id" element={<QuestionsView />}></Route>
          <Route path="/question/:id/edit" element={<EditQuestion />}></Route>
          <Route path="/answer/:id/edit" element={<EditAnswer />}></Route>
          {/* 아래는 확인용. 나중에 지울 것 */}
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
