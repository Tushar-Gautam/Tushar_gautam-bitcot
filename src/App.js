import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, ProtectedRoute, Login, SignUp } from "./pages";
import { AddProduct, ProductList, SharedLayout } from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<ProductList />} />
          <Route path="edit-product/:id" element={<AddProduct />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
