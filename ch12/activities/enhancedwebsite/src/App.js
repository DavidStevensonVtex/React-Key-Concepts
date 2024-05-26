import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from "./components/shared/Layout" ;
import Welcome from "./routes/Welcome" ;
import Products from "./routes/Products";
import ProductDetail from "./routes/ProductDetail";


function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
