
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaArrowLeft,
  FaCreditCard,
  FaMobileAlt,
  FaMoneyBillWave,
  FaTimes,
  FaCheck,
} from "react-icons/fa";

import Header from "../componts/Header";
import Footer from "../componts/Footer";

const Cart = () => {
  // =====================================================
  // STATES
  // =====================================================

  const [cart, setCart] = useState([]);
  const [removingId, setRemovingId] = useState(null);
  const [addedAnimation, setAddedAnimation] = useState(null);

  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const [orderPlaced, setOrderPlaced] = useState(false);

  // =====================================================
  // LOAD CART
  // =====================================================

  useEffect(() => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem("cart")
      );

      if (Array.isArray(savedCart)) {
        setCart(savedCart);
      } else {
        setCart([]);
      }
    } catch (error) {
      console.error("Error loading cart:", error);
      setCart([]);
    }
  }, []);

  // =====================================================
  // UPDATE CART
  // =====================================================

  const updateCart = (updatedCart) => {
    setCart(updatedCart);

    if (updatedCart.length > 0) {
      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );
    } else {
      localStorage.removeItem("cart");
    }
  };

  // =====================================================
  // INCREASE QUANTITY
  // =====================================================

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Number(item.quantity || 1) + 1,
          }
        : item
    );

    updateCart(updatedCart);

    setAddedAnimation(id);

    setTimeout(() => {
      setAddedAnimation(null);
    }, 300);
  };

  // =====================================================
  // DECREASE QUANTITY
  // =====================================================

  const decreaseQuantity = (id) => {
    const currentProduct = cart.find(
      (item) => item.id === id
    );

    if (!currentProduct) return;

    const currentQuantity = Number(
      currentProduct.quantity || 1
    );

    if (currentQuantity <= 1) {
      removeFromCart(id);
      return;
    }

    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: currentQuantity - 1,
          }
        : item
    );

    updateCart(updatedCart);

    setAddedAnimation(id);

    setTimeout(() => {
      setAddedAnimation(null);
    }, 300);
  };

  // =====================================================
  // REMOVE PRODUCT
  // =====================================================

  const removeFromCart = (id) => {
    setRemovingId(id);

    setTimeout(() => {
      const updatedCart = cart.filter(
        (item) => item.id !== id
      );

      updateCart(updatedCart);

      setRemovingId(null);
    }, 350);
  };

  // =====================================================
  // CLEAR CART
  // =====================================================

  const clearCart = () => {
    setCart([]);

    localStorage.removeItem("cart");

    setPaymentMethod("");
    setShowPayment(false);
  };

  // =====================================================
  // TOTAL
  // =====================================================

  const total = cart.reduce(
    (sum, item) =>
      sum +
      Number(item.price || 0) *
        Number(item.quantity || 1),
    0
  );

  // =====================================================
  // TOTAL ITEMS
  // =====================================================

  const totalItems = cart.reduce(
    (sum, item) =>
      sum + Number(item.quantity || 1),
    0
  );

  // =====================================================
  // OPEN PAYMENT
  // =====================================================

  const openPayment = () => {
    if (cart.length === 0) return;

    setShowPayment(true);
  };

  // =====================================================
  // CLOSE PAYMENT
  // =====================================================

  const closePayment = () => {
    setShowPayment(false);
    setPaymentMethod("");
  };

  // =====================================================
  // PLACE ORDER
  // =====================================================

  const placeOrder = () => {
    // Payment method select nahi hai
    if (!paymentMethod) {
      return;
    }

    // Cart empty hai
    if (cart.length === 0) {
      return;
    }

    // =================================================
    // CREATE ORDER
    // =================================================

    const order = {
      id: Date.now(),
      items: cart.map((item) => ({
        ...item,
        quantity: Number(item.quantity || 1),
        price: Number(item.price || 0),
      })),
      totalItems: totalItems,
      subtotal: total,
      shipping: 0,
      total: total,
      paymentMethod: paymentMethod,
      status: "Placed",
      createdAt: new Date().toISOString(),
    };

    // =================================================
    // SAVE ORDER
    // =================================================

    try {
      const existingOrders =
        JSON.parse(
          localStorage.getItem("orders")
        ) || [];

      const ordersArray = Array.isArray(existingOrders)
        ? existingOrders
        : [];

      localStorage.setItem(
        "orders",
        JSON.stringify([
          ...ordersArray,
          order,
        ])
      );
    } catch (error) {
      console.error(
        "Error saving order:",
        error
      );
    }

    // =================================================
    // VERY IMPORTANT
    // CLEAR CART IMMEDIATELY
    // =================================================

    localStorage.removeItem("cart");

    setCart([]);

    // Payment modal close
    setShowPayment(false);

    // Success popup
    setOrderPlaced(true);
  };

  // =====================================================
  // CLOSE SUCCESS POPUP
  // =====================================================

  useEffect(() => {
    if (!orderPlaced) return;

    const timer = setTimeout(() => {
      setOrderPlaced(false);
      setPaymentMethod("");
    }, 2500);

    return () => clearTimeout(timer);
  }, [orderPlaced]);

  // =====================================================
  // EMPTY CART
  // =====================================================

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#f5f5f5]">
        <Header />

        <main className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="text-center">

            {/* CART ICON */}

            <div
              className="
                mx-auto
                mb-6
                flex
                h-28
                w-28
                animate-bounce
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-xl
              "
            >
              <FaShoppingCart
                className="text-5xl text-gray-300"
              />
            </div>

            {/* TITLE */}

            <h1
              className="
                animate-[fadeIn_0.6s_ease-out]
                text-3xl
                font-black
                text-gray-900
              "
            >
              Your Cart is Empty
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Looks like you haven't added anything yet.
            </p>

            {/* BUTTON */}

            <Link
              to="/"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#FF4633]
                px-7
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-red-500/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#e93827]
                hover:shadow-xl
              "
            >
              <FaArrowLeft className="text-xs" />

              Continue Shopping
            </Link>
          </div>
        </main>

        <Footer />

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  }

  // =====================================================
  // MAIN CART
  // =====================================================

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />

      <main className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* =================================================
              PAGE HEADER
          ================================================= */}

          <div
            className="
              mb-8
              animate-[slideDown_0.5s_ease-out]
            "
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF4633]">
              Shopping
            </p>

            <h1 className="text-4xl font-black text-gray-900">
              Your Cart
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {totalItems} item
              {totalItems !== 1 ? "s" : ""} in your cart
            </p>
          </div>

          {/* =================================================
              MAIN GRID
          ================================================= */}

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* =================================================
                CART ITEMS
            ================================================= */}

            <div className="space-y-4 lg:col-span-2">

              {cart.map((item, index) => (
                <div
                  key={item.id}
                  className={`
                    group
                    flex
                    flex-col
                    gap-5
                    rounded-3xl
                    border
                    border-gray-100
                    bg-white
                    p-4
                    shadow-sm
                    transition-all
                    duration-500
                    sm:flex-row
                    sm:items-center

                    ${
                      removingId === item.id
                        ? "translate-x-full scale-90 opacity-0"
                        : "translate-x-0 scale-100 opacity-100"
                    }

                    ${
                      addedAnimation === item.id
                        ? "scale-[1.02] shadow-lg"
                        : ""
                    }
                  `}
                  style={{
                    animation: `slideUp 0.5s ease-out ${
                      index * 0.08
                    }s both`,
                  }}
                >

                  {/* IMAGE */}

                  <div
                    className="
                      relative
                      h-40
                      w-full
                      shrink-0
                      overflow-hidden
                      rounded-2xl
                      bg-[#f5f6f8]
                      sm:h-32
                      sm:w-32
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        mix-blend-multiply
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />

                    {/* QUANTITY BADGE */}

                    <div
                      className="
                        absolute
                        right-2
                        top-2
                        flex
                        h-7
                        min-w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-black
                        px-2
                        text-xs
                        font-bold
                        text-white
                        shadow-lg
                      "
                    >
                      {item.quantity}
                    </div>
                  </div>

                  {/* DETAILS */}

                  <div className="flex flex-1 flex-col">

                    <span
                      className="
                        mb-1
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-gray-400
                      "
                    >
                      {item.category}
                    </span>

                    <h2
                      className="
                        text-lg
                        font-black
                        text-gray-900
                        transition-colors
                        duration-300
                        group-hover:text-[#FF4633]
                      "
                    >
                      {item.name}
                    </h2>

                    <p className="mt-2 text-base font-bold text-[#FF4633]">
                      ${Number(item.price || 0).toFixed(2)}
                    </p>

                    {/* QUANTITY */}

                    <div className="mt-4 flex items-center gap-3">

                      {/* MINUS */}

                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-gray-100
                          text-gray-700
                          transition-all
                          duration-200
                          hover:scale-110
                          hover:bg-gray-900
                          hover:text-white
                          active:scale-90
                        "
                      >
                        <FaMinus className="text-[10px]" />
                      </button>

                      {/* NUMBER */}

                      <span
                        className={`
                          flex
                          min-w-8
                          justify-center
                          text-lg
                          font-black
                          text-gray-900
                          transition-all
                          duration-200

                          ${
                            addedAnimation === item.id
                              ? "scale-125 text-[#FF4633]"
                              : "scale-100"
                          }
                        `}
                      >
                        {item.quantity}
                      </span>

                      {/* PLUS */}

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-gray-100
                          text-gray-700
                          transition-all
                          duration-200
                          hover:scale-110
                          hover:bg-gray-900
                          hover:text-white
                          active:scale-90
                        "
                      >
                        <FaPlus className="text-[10px]" />
                      </button>

                    </div>
                  </div>

                  {/* RIGHT SIDE */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-t
                      border-gray-100
                      pt-4
                      sm:flex-col
                      sm:items-end
                      sm:border-t-0
                      sm:pt-0
                    "
                  >

                    {/* TOTAL */}

                    <div className="text-right">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        Total
                      </p>

                      <p className="mt-1 text-xl font-black text-gray-900">
                        $
                        {(
                          Number(item.price || 0) *
                          Number(item.quantity || 1)
                        ).toFixed(2)}
                      </p>
                    </div>

                    {/* REMOVE */}

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        px-3
                        py-2
                        text-xs
                        font-bold
                        text-red-500
                        transition-all
                        duration-300
                        hover:bg-red-50
                        hover:text-red-700
                      "
                    >
                      <FaTrash className="text-xs" />

                      Remove
                    </button>
                  </div>
                </div>
              ))}

              {/* BOTTOM ACTIONS */}

              <div
                className="
                  flex
                  flex-col
                  justify-between
                  gap-4
                  pt-3
                  sm:flex-row
                  sm:items-center
                "
              >

                <Link
                  to="/"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-gray-600
                    transition-all
                    hover:-translate-x-1
                    hover:text-black
                  "
                >
                  <FaArrowLeft className="text-xs" />

                  Continue Shopping
                </Link>

                <button
                  type="button"
                  onClick={clearCart}
                  className="
                    text-left
                    text-xs
                    font-bold
                    text-red-500
                    transition-colors
                    hover:text-red-700
                    sm:text-right
                  "
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* =================================================
                ORDER SUMMARY
            ================================================= */}

            <div
              className="
                h-fit
                rounded-3xl
                bg-gray-900
                p-6
                text-white
                shadow-2xl
                lg:sticky
                lg:top-28
              "
              style={{
                animation:
                  "slideRight 0.6s ease-out",
              }}
            >

              {/* HEADER */}

              <div className="mb-6 flex items-center justify-between">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Checkout
                  </p>

                  <h2 className="mt-1 text-2xl font-black">
                    Order Summary
                  </h2>
                </div>

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FF4633]
                    shadow-lg
                    shadow-red-500/20
                  "
                >
                  <FaShoppingCart />
                </div>
              </div>

              {/* SUMMARY */}

              <div className="space-y-4">

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    Items
                  </span>

                  <span className="font-semibold">
                    {totalItems}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    Shipping
                  </span>

                  <span className="font-bold text-green-400">
                    FREE
                  </span>
                </div>
              </div>

              <div className="my-6 border-t border-white/10"></div>

              {/* TOTAL */}

              <div className="flex items-end justify-between">

                <div>
                  <p className="text-xs text-gray-400">
                    Total Amount
                  </p>

                  <p className="mt-1 text-3xl font-black">
                    ${total.toFixed(2)}
                  </p>
                </div>

                <span className="mb-1 text-xs text-gray-500">
                  USD
                </span>
              </div>

              {/* CHECKOUT */}

              <button
                type="button"
                onClick={openPayment}
                className="
                  group
                  mt-7
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-[#FF4633]
                  px-5
                  py-4
                  text-sm
                  font-black
                  text-white
                  shadow-lg
                  shadow-red-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ff301a]
                  hover:shadow-xl
                  active:scale-95
                "
              >
                <FaCreditCard />

                Proceed to Checkout

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="mt-4 text-center text-[10px] text-gray-500">
                🔒 Secure & encrypted checkout
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* =====================================================
          PAYMENT MODAL
      ===================================================== */}

      {showPayment && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/60
            px-4
            py-8
            backdrop-blur-sm
          "
        >
          <div
            className="
              w-full
              max-w-lg
              animate-[paymentPopup_0.3s_ease-out]
              rounded-3xl
              bg-white
              p-6
              shadow-2xl
              sm:p-8
            "
          >

            {/* PAYMENT HEADER */}

            <div className="mb-6 flex items-start justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#FF4633]">
                  Secure Payment
                </p>

                <h2 className="mt-1 text-2xl font-black text-gray-900">
                  Choose Payment
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Select your preferred payment method
                </p>
              </div>

              <button
                type="button"
                onClick={closePayment}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-gray-100
                  text-gray-500
                  transition
                  hover:bg-gray-900
                  hover:text-white
                "
              >
                <FaTimes />
              </button>
            </div>

            {/* PAYMENT OPTIONS */}

            <div className="space-y-3">

              {/* UPI */}

              <button
                type="button"
                onClick={() =>
                  setPaymentMethod("UPI")
                }
                className={`
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  p-4
                  text-left
                  transition-all
                  duration-300

                  ${
                    paymentMethod === "UPI"
                      ? "border-[#FF4633] bg-[#fff4f2] shadow-md"
                      : "border-gray-200 bg-white hover:border-gray-400 hover:shadow-sm"
                  }
                `}
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-purple-100
                      text-purple-600
                    "
                  >
                    <FaMobileAlt className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      UPI
                    </h3>

                    <p className="text-xs text-gray-500">
                      Google Pay, PhonePe, Paytm
                    </p>
                  </div>
                </div>

                <div
                  className={`
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    transition-all
                    duration-300

                    ${
                      paymentMethod === "UPI"
                        ? "scale-110 border-[#FF4633] bg-[#FF4633]"
                        : "border-gray-300"
                    }
                  `}
                >
                  {paymentMethod === "UPI" && (
                    <FaCheck className="text-[10px] text-white" />
                  )}
                </div>
              </button>

              {/* CARD */}

              <button
                type="button"
                onClick={() =>
                  setPaymentMethod("CARD")
                }
                className={`
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  p-4
                  text-left
                  transition-all
                  duration-300

                  ${
                    paymentMethod === "CARD"
                      ? "border-[#FF4633] bg-[#fff4f2] shadow-md"
                      : "border-gray-200 bg-white hover:border-gray-400 hover:shadow-sm"
                  }
                `}
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-100
                      text-blue-600
                    "
                  >
                    <FaCreditCard className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Credit / Debit Card
                    </h3>

                    <p className="text-xs text-gray-500">
                      Visa, Mastercard, RuPay
                    </p>
                  </div>
                </div>

                <div
                  className={`
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    transition-all
                    duration-300

                    ${
                      paymentMethod === "CARD"
                        ? "scale-110 border-[#FF4633] bg-[#FF4633]"
                        : "border-gray-300"
                    }
                  `}
                >
                  {paymentMethod === "CARD" && (
                    <FaCheck className="text-[10px] text-white" />
                  )}
                </div>
              </button>

              {/* COD */}

              <button
                type="button"
                onClick={() =>
                  setPaymentMethod("COD")
                }
                className={`
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  p-4
                  text-left
                  transition-all
                  duration-300

                  ${
                    paymentMethod === "COD"
                      ? "border-[#FF4633] bg-[#fff4f2] shadow-md"
                      : "border-gray-200 bg-white hover:border-gray-400 hover:shadow-sm"
                  }
                `}
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-green-100
                      text-green-600
                    "
                  >
                    <FaMoneyBillWave className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Cash on Delivery
                    </h3>

                    <p className="text-xs text-gray-500">
                      Pay when your order arrives
                    </p>
                  </div>
                </div>

                <div
                  className={`
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    transition-all
                    duration-300

                    ${
                      paymentMethod === "COD"
                        ? "scale-110 border-[#FF4633] bg-[#FF4633]"
                        : "border-gray-300"
                    }
                  `}
                >
                  {paymentMethod === "COD" && (
                    <FaCheck className="text-[10px] text-white" />
                  )}
                </div>
              </button>
            </div>

            {/* SELECTED PAYMENT DETAILS */}

            {paymentMethod && (
              <div
                className="
                  mt-5
                  rounded-2xl
                  border
                  border-gray-100
                  bg-gray-50
                  p-4
                  animate-[fadeIn_0.3s_ease-out]
                "
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm text-gray-500">
                    Payment Method
                  </span>

                  <span className="font-bold text-gray-900">
                    {paymentMethod === "UPI"
                      ? "UPI"
                      : paymentMethod === "CARD"
                      ? "Credit / Debit Card"
                      : "Cash on Delivery"}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between">

                  <span className="text-sm text-gray-500">
                    Total Amount
                  </span>

                  <span className="text-lg font-black text-[#FF4633]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            {/* PAY BUTTON */}

            <button
              type="button"
              disabled={!paymentMethod}
              onClick={placeOrder}
              className="
                mt-6
                w-full
                rounded-2xl
                bg-[#FF4633]
                px-5
                py-4
                text-sm
                font-black
                text-white
                shadow-lg
                shadow-red-500/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#e93827]
                hover:shadow-xl
                active:scale-95
                disabled:cursor-not-allowed
                disabled:bg-gray-300
                disabled:shadow-none
                disabled:hover:translate-y-0
              "
            >
              {paymentMethod
                ? `Pay $${total.toFixed(2)} →`
                : "Select Payment Method"}
            </button>

            <p className="mt-4 text-center text-[10px] text-gray-400">
              🔒 Your payment information is secure
            </p>
          </div>
        </div>
      )}

      {/* =====================================================
          ORDER SUCCESS
      ===================================================== */}

      {orderPlaced && (
        <div
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-black/60
            px-4
            backdrop-blur-sm
          "
        >
          <div
            className="
              w-full
              max-w-sm
              animate-[successPopup_0.4s_ease-out]
              rounded-3xl
              bg-white
              p-8
              text-center
              shadow-2xl
            "
          >

            <div
              className="
                mx-auto
                flex
                h-20
                w-20
                animate-[successIcon_0.6s_ease-out]
                items-center
                justify-center
                rounded-full
                bg-green-100
              "
            >
              <FaCheck className="text-4xl text-green-500" />
            </div>

            <h2 className="mt-5 text-2xl font-black text-gray-900">
              Order Placed!
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Your order has been placed successfully.
            </p>

            <p className="mt-4 text-xs font-semibold text-[#FF4633]">
              Payment: {paymentMethod}
            </p>

            <p className="mt-1 text-lg font-black text-gray-900">
              ${total.toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes paymentPopup {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes successPopup {
          from {
            opacity: 0;
            transform: scale(0.8);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes successIcon {
          from {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }

          to {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;

