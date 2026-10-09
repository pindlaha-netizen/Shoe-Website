
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";

// Components
import Forget from "./componts/Forget";
import Cart from "./componts/Cart";

// Cart Context
import { CartProvider } from "./componts/Cartcontext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Product Details */}
          <Route
            path="/product/:id"
            element={<ProductDetail />}
          />

          <Route
            path="/product"
            element={<ProductDetail />}
          />

          {/* Other Pages */}
          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Authentication */}
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/forget"
            element={<Forget />}
          />

          {/* Cart */}
          <Route
            path="/cart"
            element={<Cart />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="text-center">
                  <h1 className="text-6xl font-black text-gray-900">
                    404
                  </h1>

                  <p className="mt-3 text-gray-500">
                    Page Not Found
                  </p>

                  <a
                    href="/"
                    className="mt-6 inline-block rounded-full bg-[#FF4633] px-6 py-3 font-bold text-white transition hover:bg-[#e93827]"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            }
          />

        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
