import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Header from "../componts/Header";
import Footer from "../componts/Footer";
import ProductDetailSection from "../componts/ProductDetailSection";
import { allProductsList } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on navigation/ID change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Find product from state or ID
  const productFromState = location.state?.product;
  const productFromCatalog = allProductsList.find(
    (p) => String(p.id) === String(id)
  );

  const product =
    productFromState ||
    productFromCatalog ||
    allProductsList.find((p) => p.name.includes("New Balance")) ||
    allProductsList[0];

  const handleSelectProduct = (nextProduct) => {
    navigate(`/product/${nextProduct.id}`, {
      state: { product: nextProduct },
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col justify-between">
      <Header />

      <main className="flex-1">
        <ProductDetailSection
          product={product}
          onSelectProduct={handleSelectProduct}
        />
      </main>

      <Footer />
    </div>
  );
}

export default ProductDetail;
