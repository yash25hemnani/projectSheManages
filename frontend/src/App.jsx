import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import IdeaPage from "./components/IdeaPage";
import { useAuth } from "./context/AuthProvider";
import AddProductForm from "./user/AddProductForm";
import ProductList from "./user/ProductList";
import { useParams } from "react-router-dom";
import NotFound from "./notfoundpage/NotFound";
import ProfileSetup from "./pages/ProfileSetup";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import Profile from "./pages/Profile";

const UserProducts = (del) => {
  const { userId } = useParams();
  return <ProductList userId={userId} del={del} />;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/profile/:userId" element={<Profile />} />

        {/* <Route path="/products/:productId" element={<Product />} /> */}
        <Route path="/addproduct" element={<AddProductForm />} />
        <Route
          path="/products/:userId"
          element={<UserProducts del="false" />}
        />

        <Route
          path="/products/myproduct/:userId"
          element={<UserProducts del="true" />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/signup/*"
          element={<Signup routing="path" path="/signup" />}
        />
        <Route
          path="/sign-in/*"
          element={<Login routing="path" path="/sign-in" />}
        />
        <Route path="/ideas" element={<IdeaPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
