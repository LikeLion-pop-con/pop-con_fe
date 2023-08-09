import Router from "./Router";
import GlobalStyle from "./Global";
import ShowCate from "./pages/CategoryPage/ShowCate";
import Modal from "react-modal";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
Modal.setAppElement("#root");

export default App;
