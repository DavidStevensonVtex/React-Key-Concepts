import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Root from "./routes/Root" ;
import Layout from "./components/shared/Layout" ;

const Welcome = lazy( () => import("./routes/Welcome" )) ;
const Products = lazy( () => import("./routes/Products")) ;
const ProductDetail = lazy( () => import("./routes/ProductDetail")) ;

function App() {
  return (
    <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
          <Route path="/" element={<Root />}>
            <Route path="" element={<Welcome />} index />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
