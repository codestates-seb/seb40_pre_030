import { GlobalStyle } from ".";
import Main from "./pages/Main";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import LogOut from "./components/LogOut";
import Askquetion from "./components/Askquetion";
import Tag from "./pages/Tag";
import Users from "./pages/Users";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/users/logout" element={<LogOut />} />
          <Route path="/ask" element={<Askquetion />} />
          <Route path="/tags" element={<Tag />}></Route>
          {/* 아래는 확인용. 나중에 지울 것 */}
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
