import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../componts/Header";
import Footer from "../componts/Footer";
import { FaShoppingCart, FaCheck } from "react-icons/fa";

import { CartContext } from "../componts/Cartcontext";

// =====================================================
// GOOGLE FONT
// =====================================================
const GoogleFont = () => {
  useEffect(() => {
    const link = document.createElement("link");

    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@600;700;800;900&display=swap";

    link.rel = "stylesheet";

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
};

// =====================================================
// CATEGORIES
// =====================================================
const categories = [
  "All Products",
  "Most Purchased",
  "Shoes",
  "Slippers",
  "Sneaker",
  "Sports",
];

// =====================================================
// PRODUCTS
// =====================================================
const products = [
  {
    id: 1,
    name: "Chuck Taylor All Star Madison",
    price: 150.5,
    category: "Sneaker",
    stock: 544,
    sold: 256,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Nike Air Force 1",
    price: 160.4,
    category: "Sneaker",
    stock: 420,
    sold: 850,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Adidas Ultraboost 22",
    price: 190,
    category: "Sports",
    stock: 230,
    sold: 412,
    image:
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Puma RS-X3 Neon",
    price: 120.99,
    category: "Sneaker",
    stock: 150,
    sold: 89,
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Nike Downshifter 12",
    price: 150.5,
    category: "Sports",
    stock: 544,
    sold: 920,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "New Balance 574 Heritage",
    price: 85,
    category: "Shoes",
    stock: 320,
    sold: 610,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Nike Air Max 90 Pulse",
    price: 110.2,
    category: "Sneaker",
    stock: 544,
    sold: 490,
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Vans Old Skool Skate",
    price: 65,
    category: "Sneaker",
    stock: 800,
    sold: 1200,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Asics Gel-Kayano 29 Pro",
    price: 160.5,
    category: "Sports",
    stock: 115,
    sold: 76,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Reebok Classic Leather Retro",
    price: 75.4,
    category: "Shoes",
    stock: 430,
    sold: 310,
    image:
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Jordan Air 1 Mid Hyper",
    price: 180,
    category: "Sneaker",
    stock: 210,
    sold: 740,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Under Armour Flow Velociti",
    price: 140,
    category: "Sports",
    stock: 180,
    sold: 290,
    image:
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 13,
    name: "Adidas Adilette Comfort Slider",
    price: 45,
    category: "Slippers",
    stock: 650,
    sold: 880,
    image:
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Nike Calm Slide Sandal",
    price: 50,
    category: "Slippers",
    stock: 490,
    sold: 670,
    image:
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Timberland Premium 6-Inch",
    price: 198,
    category: "Shoes",
    stock: 120,
    sold: 340,
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "On Cloudmonster Running",
    price: 170,
    category: "Sports",
    stock: 260,
    sold: 510,
    image:
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=500&q=80",
  },
];

// =====================================================
// NEW COLLECTION
// =====================================================
const collectionProducts = [
  {
    id: 17,
    name: "Nike Air Zoom Pegasus",
    price: 145,
    category: "Sports",
    stock: 240,
    sold: 530,
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Adidas Forum Low",
    price: 110,
    category: "Sneaker",
    stock: 310,
    sold: 420,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 19,
    name: "Puma Future Rider",
    price: 95,
    category: "Shoes",
    stock: 180,
    sold: 360,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 20,
    name: "Nike Victori One Slide",
    price: 55,
    category: "Slippers",
    stock: 450,
    sold: 720,
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 21,
    name: "New Balance Fresh Foam",
    price: 135,
    category: "Sports",
    stock: 220,
    sold: 480,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 22,
    name: "Vans Sk8 Hi Classic",
    price: 90,
    category: "Sneaker",
    stock: 360,
    sold: 590,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80",
  },
];

// =====================================================
// HOME
// =====================================================
function Home() {
  const navigate = useNavigate();

  // IMPORTANT
  const { addToCart } = useContext(CartContext);

  const [addedId, setAddedId] = useState(null);

  const shoes = {
    airZoom: {
      name: "Air Zoom",
      tagline: "CONQUER",
      accent: "EVERY",
      subline: "TERRAIN",
      tag: "New Collection 2026",
      hotspot: "Eco-Smart Materials",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
      description:
        "Engineered for the fearless. Built for the relentless. Push beyond limits with revolutionary trail technology.",
    },

    lebronLow: {
      name: "Lebron Low",
      tagline: "DOMINATE",
      accent: "EVERY",
      subline: "COURT",
      tag: "Limited Edition 2026",
      hotspot: "Air Zoom Unit",
      image:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1000&q=80",
      description:
        "Ultra-responsive dual Zoom Air units with multidirectional traction for explosive agility on all surfaces.",
    },
  };

  const [activeShoe, setActiveShoe] = useState("airZoom");

  const [activeCategory, setActiveCategory] = useState("All Products");

  const [searchQuery, setSearchQuery] = useState("");

  const [showCollection, setShowCollection] = useState(false);

  const [visibleCount, setVisibleCount] = useState(10);

  const [priceFilter, setPriceFilter] = useState("all");

  const [stockFilter, setStockFilter] = useState("all");

  const current = shoes[activeShoe];

  const allProducts = [...products, ...collectionProducts];

  // =====================================================
  // ADD TO CART
  // =====================================================
  const handleAddToCart = (product) => {
    addToCart(product);

    setAddedId(product.id);

    setTimeout(() => {
      setAddedId(null);
    }, 800);
  };

  // =====================================================
  // PRODUCT DETAILS
  // =====================================================
  const handleSelectProduct = (product) => {
    navigate(`/product/${product.id}`, {
      state: {
        product,
      },
    });
  };

  // =====================================================
  // EXPLORE COLLECTION
  // =====================================================
  const handleExploreCollection = () => {
    setShowCollection(true);
    setVisibleCount(allProducts.length);

    setTimeout(() => {
      const section = document.getElementById("products-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  // =====================================================
  // EXPLORE MORE
  // =====================================================
  const handleExploreMore = () => {
    setShowCollection(true);
    setVisibleCount(allProducts.length);
  };

  // =====================================================
  // SHOW ORIGINAL
  // =====================================================
  const handleShowOriginal = () => {
    setShowCollection(false);
    setVisibleCount(10);
    setActiveCategory("All Products");
    setSearchQuery("");
    setPriceFilter("all");
    setStockFilter("all");

    setTimeout(() => {
      const section = document.getElementById("products-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  // =====================================================
  // CLEAR FILTERS
  // =====================================================
  const clearFilters = () => {
    setActiveCategory("All Products");
    setSearchQuery("");
    setPriceFilter("all");
    setStockFilter("all");
    setVisibleCount(10);
  };

  // =====================================================
  // FILTER
  // =====================================================
  const filteredProducts = allProducts
    .filter((product) => {
      const categoryMatch =
        activeCategory === "All Products" ||
        activeCategory === "Most Purchased" ||
        product.category.toLowerCase() === activeCategory.toLowerCase();

      const searchMatch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      let priceMatch = true;

      if (priceFilter === "under50") {
        priceMatch = product.price < 50;
      }

      if (priceFilter === "50to100") {
        priceMatch = product.price >= 50 && product.price <= 100;
      }

      if (priceFilter === "100to150") {
        priceMatch = product.price > 100 && product.price <= 150;
      }

      if (priceFilter === "over150") {
        priceMatch = product.price > 150;
      }

      let stockMatch = true;

      if (stockFilter === "low") {
        stockMatch = product.stock < 200;
      }

      if (stockFilter === "medium") {
        stockMatch = product.stock >= 200 && product.stock <= 500;
      }

      if (stockFilter === "high") {
        stockMatch = product.stock > 500;
      }

      return categoryMatch && searchMatch && priceMatch && stockMatch;
    })
    .sort((a, b) => {
      if (activeCategory === "Most Purchased") {
        return b.sold - a.sold;
      }

      return 0;
    });

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <>
      <GoogleFont />

      <div className="min-h-screen bg-[#e8e9eb] font-['Inter']">
        <Header />

        {/* =====================================================
            HERO
        ===================================================== */}
        <main className="w-full bg-white px-1 py-2">
          <div
            className="
              relative
              min-h-150
              w-full
              overflow-hidden
              rounded-3xl
              bg-linear-to-br
              from-[#1E2027]
              via-[#15161A]
              to-[#0D0E11]
              p-6
              shadow-2xl
              sm:p-8
              md:p-15
            "
          >
            <div className="pointer-events-none absolute inset-0">
              <div
                className="
                  absolute
                  right-0
                  top-1/4
                  h-75
                  w-75
                  rounded-full
                  bg-white/5
                  blur-3xl
                  md:right-1/4
                  md:h-150
                  md:w-150
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-72
                  w-72
                  -translate-x-1/2
                  rounded-full
                  bg-[#FF4633]/10
                  blur-3xl
                "
              />
            </div>

            <div className="relative z-10 max-w-xl">
              <div
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  px-3
                  py-1.5
                  shadow-lg
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#FF4633]
                    shadow-[0_0_12px_#FF4633]
                  "
                />

                <span className="text-xs font-semibold text-zinc-300">
                  {current.tag}
                </span>
              </div>

              <h1
                className="
                  font-['Montserrat']
                  text-4xl
                  font-black
                  uppercase
                  leading-none
                  tracking-tight
                  text-white
                  sm:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                "
              >
                {current.tagline}

                <br />

                <span className="text-[#FF4633]">{current.accent}</span>

                <br />

                {current.subline}
              </h1>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleExploreCollection}
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#FF4633]
                    px-7
                    py-4
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-red-500/30
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-105
                    hover:bg-[#ff301a]
                    sm:w-auto
                  "
                >
                  <span>Explore Collection</span>

                  <span className="text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>

            <div
              className="
                relative
                z-0
                mx-auto
                mt-10
                w-full
                sm:w-120
                md:absolute
                md:right-0
                md:top-1/2
                md:mt-0
                md:w-145
                md:-translate-y-1/2
                lg:right-10
                lg:w-180
              "
            >
              <img
                src={current.image}
                alt={current.name}
                className="
                  w-full
                  object-contain
                  drop-shadow-[0_40px_50px_rgba(0,0,0,0.8)]
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />

              <div className="absolute bottom-8 right-5 flex items-center gap-2">
                <div
                  className="
                    h-3
                    w-3
                    rounded-full
                    bg-white
                    shadow-[0_0_15px_white]
                    ring-4
                    ring-[#FF4633]/60
                  "
                />

                <div
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-black/80
                    px-4
                    py-1.5
                    text-xs
                    font-semibold
                    text-white
                    shadow-lg
                    backdrop-blur-md
                  "
                >
                  {current.hotspot}
                </div>
              </div>
            </div>

            <div
              className="
                relative
                z-10
                mt-10
                flex
                flex-col
                gap-5
                border-t
                border-white/5
                pt-6
                md:flex-row
                md:items-end
                md:justify-between
              "
            >
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setActiveShoe("airZoom")}
                  className={`
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-left
                    shadow-lg
                    transition-all
                    hover:-translate-y-1
                    ${
                      activeShoe === "airZoom"
                        ? "border-white/30 bg-white/10"
                        : "border-white/10 bg-black/40 opacity-70"
                    }
                  `}
                >
                  <div className="text-xs font-bold text-white">Air Zoom</div>

                  <div className="text-[10px] text-zinc-400">See Details +</div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveShoe("lebronLow")}
                  className={`
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-left
                    shadow-lg
                    transition-all
                    hover:-translate-y-1
                    ${
                      activeShoe === "lebronLow"
                        ? "border-white/30 bg-white/10"
                        : "border-white/10 bg-black/40 opacity-70"
                    }
                  `}
                >
                  <div className="text-xs font-bold text-white">Lebron Low</div>

                  <div className="text-[10px] text-zinc-400">See Details +</div>
                </button>
              </div>

              <div
                className="
                  max-w-md
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/50
                  p-4
                  shadow-xl
                  backdrop-blur-md
                "
              >
                <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm">
                  {current.description}
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* =====================================================
            PRODUCTS
        ===================================================== */}
        <section
          id="products-section"
          className="scroll-mt-5 p-2 sm:p-4 md:p-6"
        >
          <div
            className="
              mx-auto
              w-full
              rounded-3xl
              border
              border-gray-100
              bg-white
              p-4
              shadow-xl
              sm:p-6
              md:p-8
            "
          >
            {/* COLLECTION */}
            {showCollection && (
              <div
                className="
                  mb-6
                  flex
                  flex-col
                  justify-between
                  gap-4
                  rounded-2xl
                  border
                  border-red-100
                  bg-[#fff4f2]
                  p-5
                  sm:flex-row
                  sm:items-center
                "
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#FF4633] px-2.5 py-1 text-[9px] font-bold uppercase text-white">
                      New
                    </span>

                    <h3 className="font-bold text-gray-900">
                      2026 New Collection
                    </h3>
                  </div>

                  <p className="mt-1 text-xs text-gray-500">
                    Discover our latest footwear arrivals.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleShowOriginal}
                  className="
                    rounded-full
                    bg-white
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-[#FF4633]
                    shadow-sm
                    transition
                    hover:bg-[#FF4633]
                    hover:text-white
                  "
                >
                  ← Show Original
                </button>
              </div>
            )}

            {/* HEADER */}
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-['Montserrat'] text-xl font-bold text-gray-900">
                  Products
                  <span className="ml-2 text-sm font-normal text-gray-400">
                    ({displayedProducts.length} of {filteredProducts.length})
                  </span>
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Explore our latest footwear collection
                </p>
              </div>

              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(10);
                  }}
                  placeholder="Search product..."
                  className="
                    w-full
                    rounded-full
                    bg-gray-100
                    py-3
                    pl-5
                    pr-10
                    text-sm
                    outline-none
                    shadow-inner
                    focus:bg-white
                    focus:ring-2
                    focus:ring-gray-200
                  "
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setVisibleCount(10);
                    }}
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-xs
                      text-gray-400
                    "
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* FILTERS */}
            <div className="mb-6 rounded-2xl border border-gray-100 bg-[#fafafa] p-4">
              <div className="flex flex-wrap items-center gap-3">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-2.5
                    text-xs
                    font-medium
                    text-gray-700
                    shadow-sm
                    outline-none
                  "
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-2.5
                    text-xs
                    font-medium
                    text-gray-700
                    shadow-sm
                    outline-none
                  "
                >
                  <option value="all">All Prices</option>

                  <option value="under50">Under $50</option>

                  <option value="50to100">$50 - $100</option>

                  <option value="100to150">$100 - $150</option>

                  <option value="over150">Over $150</option>
                </select>

                <select
                  value={stockFilter}
                  onChange={(e) => setStockFilter(e.target.value)}
                  className="
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-2.5
                    text-xs
                    font-medium
                    text-gray-700
                    shadow-sm
                    outline-none
                  "
                >
                  <option value="all">All Stock</option>

                  <option value="low">Low Stock</option>

                  <option value="medium">Medium Stock</option>

                  <option value="high">High Stock</option>
                </select>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    rounded-full
                    bg-[#FF4633]
                    px-5
                    py-2.5
                    text-xs
                    font-bold
                    text-white
                    shadow-md
                    transition
                    hover:bg-[#e93827]
                  "
                >
                  Clear Filters
                </button>
              </div>
            </div>

            {/* CATEGORY */}
            <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    whitespace-nowrap
                    rounded-full
                    px-5
                    py-2.5
                    text-xs
                    font-semibold
                    transition-all
                    ${
                      activeCategory === category
                        ? "bg-gray-900 text-white shadow-lg"
                        : "bg-[#f4f5f7] text-gray-500 hover:bg-gray-200"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* =====================================================
                PRODUCT GRID
            ===================================================== */}
            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {displayedProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product)}
                    className="
                      group
                      relative
                      flex
                      cursor-pointer
                      flex-col
                      rounded-2xl
                      border
                      border-gray-100
                      bg-white
                      p-3
                      shadow-md
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:border-gray-300
                      hover:shadow-2xl
                    "
                  >
                    {/* IMAGE */}
                    <div
                      className="
                        relative
                        mb-4
                        flex
                        h-52
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-2xl
                        bg-[#f8f9fb]
                        p-4
                      "
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="
                          h-full
                          w-full
                          rounded-xl
                          object-cover
                          mix-blend-multiply
                          transition-transform
                          duration-500
                          group-hover:scale-110
                        "
                      />

                      <span
                        className="
                          absolute
                          left-3
                          top-3
                          rounded-md
                          bg-white/90
                          px-2
                          py-1
                          text-[10px]
                          font-bold
                          uppercase
                          text-gray-700
                          shadow-md
                        "
                      >
                        {product.category}
                      </span>

                      {product.id > 16 && (
                        <span
                          className="
                            absolute
                            right-3
                            top-3
                            rounded-full
                            bg-[#FF4633]
                            px-2.5
                            py-1
                            text-[9px]
                            font-bold
                            uppercase
                            text-white
                          "
                        >
                          New
                        </span>
                      )}

                      {/* DETAILS BUTTON */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();

                          handleSelectProduct(product);
                        }}
                        className="
                          absolute
                          bottom-3
                          right-3
                          rounded-full
                          bg-white
                          p-2
                          text-xs
                          font-bold
                          shadow-lg
                          transition
                          hover:bg-[#FF4633]
                          hover:text-white
                        "
                      >
                        ↗
                      </button>
                    </div>

                    {/* DETAILS */}
                    <div className="flex flex-1 flex-col px-1">
                      <h3
                        className="
                          truncate
                          font-['Montserrat']
                          text-sm
                          font-bold
                          text-gray-900
                          transition
                          group-hover:text-[#FF4633]
                        "
                      >
                        {product.name}
                      </h3>

                      <p className="mt-1 text-sm font-bold text-[#FF4633]">
                        ${product.price.toFixed(2)}
                      </p>

                      <div className="mt-auto border-t border-gray-50 pt-4">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Stock:{" "}
                            <span
                              className={
                                product.stock < 200
                                  ? "font-semibold text-red-500"
                                  : "font-semibold text-gray-800"
                              }
                            >
                              {product.stock}
                            </span>
                          </span>

                          <span className="text-xs text-gray-500">
                            Sold:{" "}
                            <span className="font-semibold text-gray-800">
                              {product.sold}
                            </span>
                          </span>
                        </div>

                        {/* =================================================
                            ADD TO CART BUTTON
                        ================================================= */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();

                            handleAddToCart(product);
                          }}
                          className={`
                            relative
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            overflow-hidden
                            rounded-xl
                            px-4
                            py-3
                            text-xs
                            font-bold
                            text-white
                            shadow-md
                            transition-all
                            duration-300
                            active:scale-95
                            ${
                              addedId === product.id
                                ? "bg-green-500"
                                : "bg-gray-900 hover:-translate-y-1 hover:bg-[#FF4633]"
                            }
                          `}
                        >
                          {addedId === product.id ? (
                            <>
                              <FaCheck
                                className="
                                  animate-[cartPop_0.4s_ease-out]
                                "
                              />

                              <span>Added to Cart</span>
                            </>
                          ) : (
                            <>
                              <FaShoppingCart
                                className="
                                  transition-transform
                                  duration-300
                                  group-hover:scale-125
                                "
                              />

                              <span>Add to Cart</span>

                              <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <div className="mb-4 text-5xl">🔍</div>

                <h3 className="font-['Montserrat'] font-bold text-gray-900">
                  No products found
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Try changing your search or filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    mt-5
                    rounded-full
                    bg-[#FF4633]
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* BOTTOM BUTTON */}
            {filteredProducts.length > 0 && (
              <div className="mt-12 border-t border-gray-100 pt-8 text-center">
                {visibleCount < filteredProducts.length ? (
                  <button
                    type="button"
                    onClick={handleExploreMore}
                    className="
                      rounded-full
                      bg-[#FF4633]
                      px-8
                      py-4
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      transition-all
                      hover:-translate-y-1
                      hover:bg-[#ff301a]
                    "
                  >
                    Explore More Shoes →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .getElementById("products-section")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        })
                    }
                    className="
                      rounded-full
                      bg-gray-900
                      px-6
                      py-3
                      text-xs
                      font-bold
                      text-white
                    "
                  >
                    Back to Top ↑
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}
      <style>{`

        @keyframes cartPop {
          0% {
            transform: scale(0.4) rotate(-20deg);
            opacity: 0;
          }

          60% {
            transform: scale(1.3) rotate(10deg);
            opacity: 1;
          }

          100% {
            transform: scale(1) rotate(0);
          }
        }

      `}</style>
    </>
  );
}

export default Home;
