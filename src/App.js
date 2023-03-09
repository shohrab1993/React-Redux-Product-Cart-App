import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./component/CartPage";
import Home from "./component/Home";
import Layout from "./component/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart-page" element={<CartPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
