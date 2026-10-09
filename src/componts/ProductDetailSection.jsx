import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./Cartcontext";
import {
  FiShield,
  FiHeart,
  FiShare2,
  FiChevronRight,
  FiTrendingUp,
  FiTrendingDown,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import {
  FaXTwitter,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

const ProductDetailSection = ({ product, onSelectProduct }) => {
  // ===================================================
  // DEFAULT PRODUCT FALLBACK
  // ===================================================
  const currentProduct = product || {
    id: 6,
    name: "New Balance 580 Dark Olive",
    price: 159,
    category: "Sneaker",
    stock: 320,
    sold: 610,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80",
  };

  // Extract brand from name
  const getBrand = (name) => {
    if (!name) return "Sneakers";
    const lower = name.toLowerCase();
    if (lower.includes("new balance")) return "New Balance";
    if (lower.includes("nike")) return "Nike";
    if (lower.includes("adidas")) return "Adidas";
    if (lower.includes("puma")) return "Puma";
    if (lower.includes("vans")) return "Vans";
    if (lower.includes("asics")) return "Asics";
    if (lower.includes("reebok")) return "Reebok";
    if (lower.includes("jordan")) return "Jordan";
    if (lower.includes("under armour")) return "Under Armour";
    if (lower.includes("timberland")) return "Timberland";
    if (lower.includes("on cloud")) return "On Running";
    if (lower.includes("converse") || lower.includes("chuck taylor"))
      return "Converse";
    return name.split(" ")[0];
  };

  const brand = getBrand(currentProduct.name);

  // Derive gallery images
  const defaultGallery = [
    {
      id: 1,
      title: "Lateral Studio View",
      url: currentProduct.image,
    },
    {
      id: 2,
      title: "Medial Angled Profile",
      url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Tread & Outsole Grip",
      url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Heel & Collar Cushioning",
      url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      title: "Top-Down Tongue & Lacing",
      url: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  // ===================================================
  // STATES
  // ===================================================
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("44.5");
  const [sizeUnit, setSizeUnit] = useState("EU");
  const [gender, setGender] = useState("Men");
  const [activeTab, setActiveTab] = useState("Description");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useContext(CartContext) || {};
  const [timeRange, setTimeRange] = useState("ALL");
  const [chartHoverIndex, setChartHoverIndex] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [relatedFilter, setRelatedFilter] = useState("Sneakers");

  // Reset selected image when product changes
  useEffect(() => {
    setSelectedImage(0);
    setCartSuccess(false);
  }, [currentProduct.id, currentProduct.name]);

  // Sizes available
  const sizes = [
    "40",
    "40.5",
    "41",
    "42",
    "43",
    "43.5",
    "44",
    "44.5",
    "45",
    "46",
  ];

  // Price calculations in IDR & USD
  const basePriceUSD = currentProduct.price || 150;
  const basePriceIDR = Math.round(basePriceUSD * 10500);
  const retailPriceIDR = Math.round(basePriceUSD * 11800);
  const formattedIDR = `IDR ${basePriceIDR.toLocaleString("id-ID")}`;
  const formattedRetail = `IDR ${retailPriceIDR.toLocaleString("id-ID")}`;

  // ===================================================
  // HISTORICAL PRICE DATA POINTS (Dynamic to shoe price)
  // ===================================================
  const multiplier = basePriceIDR / 1590000;

  const chartDatasets = {
    "1M": [
      { date: "May 1", price: Math.round(1720000 * multiplier) },
      { date: "May 8", price: Math.round(1680000 * multiplier) },
      { date: "May 15", price: Math.round(1620000 * multiplier) },
      { date: "May 22", price: Math.round(1590000 * multiplier) },
      { date: "May 30", price: Math.round(basePriceIDR) },
    ],
    "3M": [
      { date: "Mar", price: Math.round(1850000 * multiplier) },
      { date: "Apr", price: Math.round(1750000 * multiplier) },
      { date: "May", price: Math.round(basePriceIDR) },
    ],
    "6M": [
      { date: "Dec", price: Math.round(2100000 * multiplier) },
      { date: "Jan", price: Math.round(1950000 * multiplier) },
      { date: "Feb", price: Math.round(1880000 * multiplier) },
      { date: "Mar", price: Math.round(1790000 * multiplier) },
      { date: "Apr", price: Math.round(1650000 * multiplier) },
      { date: "May", price: Math.round(basePriceIDR) },
    ],
    "1Y": [
      { date: "Jun '23", price: Math.round(3400000 * multiplier) },
      { date: "Sep '23", price: Math.round(2800000 * multiplier) },
      { date: "Dec '23", price: Math.round(2200000 * multiplier) },
      { date: "Mar '24", price: Math.round(1850000 * multiplier) },
      { date: "Jun '24", price: Math.round(basePriceIDR) },
    ],
    YTD: [
      { date: "Jan", price: Math.round(1980000 * multiplier) },
      { date: "Feb", price: Math.round(1890000 * multiplier) },
      { date: "Mar", price: Math.round(1780000 * multiplier) },
      { date: "Apr", price: Math.round(1690000 * multiplier) },
      { date: "May", price: Math.round(basePriceIDR) },
    ],
    ALL: [
      { date: "6/02/23", price: Math.round(1200000 * multiplier) },
      { date: "9/02/23", price: Math.round(4200000 * multiplier) },
      { date: "11/02/23", price: Math.round(3100000 * multiplier) },
      { date: "1/02/24", price: Math.round(3800000 * multiplier) },
      { date: "3/02/24", price: Math.round(2400000 * multiplier) },
      { date: "5/02/24", price: Math.round(1900000 * multiplier) },
      { date: "7/02/24", price: Math.round(2900000 * multiplier) },
      { date: "9/02/24", price: Math.round(1750000 * multiplier) },
      { date: "11/02/24", price: Math.round(2150000 * multiplier) },
      { date: "1/02/25", price: Math.round(1650000 * multiplier) },
      { date: "3/02/25", price: Math.round(basePriceIDR) },
    ],
  };

  const activePoints = (chartDatasets[timeRange] || chartDatasets["ALL"]).map(
    (item) => ({
      ...item,
      display: `IDR ${item.price.toLocaleString("id-ID")}`,
    }),
  );

  const maxPrice = Math.max(...activePoints.map((p) => p.price)) * 1.15;
  const minPrice = Math.min(...activePoints.map((p) => p.price)) * 0.85;

  const svgWidth = 800;
  const svgHeight = 220;
  const paddingX = 40;
  const paddingY = 20;

  const pointsCoordinates = activePoints.map((pt, i) => {
    const x =
      paddingX + (i / (activePoints.length - 1)) * (svgWidth - paddingX * 2);
    const normalizedY = (pt.price - minPrice) / (maxPrice - minPrice || 1);
    const y = svgHeight - paddingY - normalizedY * (svgHeight - paddingY * 2);
    return { x, y, pt };
  });

  const generateSmoothPath = (pts) => {
    if (pts.length < 2) return "";
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const current = pts[i];
      const next = pts[i + 1];
      const mx = (current.x + next.x) / 2;
      d += ` C ${mx} ${current.y}, ${mx} ${next.y}, ${next.x} ${next.y}`;
    }
    return d;
  };

  const linePath = generateSmoothPath(pointsCoordinates);
  const areaPath = `${linePath} L ${
    pointsCoordinates[pointsCoordinates.length - 1].x
  } ${svgHeight} L ${pointsCoordinates[0].x} ${svgHeight} Z`;

  // Average price calculation
  const avgPrice = Math.round(
    activePoints.reduce((acc, p) => acc + p.price, 0) / activePoints.length,
  );
  const lowestSale = Math.min(...activePoints.map((p) => p.price));
  const highestSale = Math.max(...activePoints.map((p) => p.price));

  // ===================================================
  // RELATED PRODUCTS
  // ===================================================
  const relatedProducts = [
    {
      id: 2,
      name: "Nike Air Force 1 '07 Triple White",
      brand: "Nike",
      price: 160.4,
      category: "Sneaker",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80",
      badge: "Trending",
    },
    {
      id: 3,
      name: "Adidas Ultraboost 22 Core Black",
      brand: "Adidas",
      price: 190,
      category: "Sports",
      image:
        "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=500&q=80",
      featured: true,
    },
    {
      id: 4,
      name: "Puma RS-X3 Neon Cyber Tech",
      brand: "Puma",
      price: 120.99,
      category: "Sneaker",
      image:
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 9,
      name: "Asics Gel-Kayano 29 Pro Runner",
      brand: "Asics",
      price: 160.5,
      category: "Sports",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500&q=80",
    },
  ];

  // ===================================================
  // HANDLERS
  // ===================================================
  const handleAddToCart = () => {
    if (addToCart) {
      addToCart({
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        category: currentProduct.category,
        size: selectedSize,
        color: selectedColor,
      });
    }
    setCartSuccess(true);
    setTimeout(() => setCartSuccess(false), 2500);
  };

  const handleShare = () => {
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <section
      id="product-detail-section"
      className="scroll-mt-8 w-full bg-[#f8f9fa] py-12 font-sans text-gray-900 antialiased"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            SECTION ANCHOR NOTIFICATION / ACTIVE PILL
        =================================================== */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <span className="cursor-pointer transition hover:text-gray-900">
              {currentProduct.category || "Sneakers"}
            </span>
            <FiChevronRight className="text-gray-400" size={12} />
            <span className="cursor-pointer transition hover:text-gray-900">
              {brand}
            </span>
            <FiChevronRight className="text-gray-400" size={12} />
            <span className="font-bold text-gray-900 truncate max-w-[200px] sm:max-w-xs">
              {currentProduct.name}
            </span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Interactive Shoe Detail View Active</span>
          </div>
        </div>

        {/* ===================================================
            MAIN SHOWCASE: 2-COLUMNS
        =================================================== */}
        <div className="grid grid-cols-1 gap-10 rounded-3xl border border-gray-200/70 bg-white p-6 shadow-sm lg:grid-cols-12 lg:p-10">
          {/* -------------------------------------------------
              LEFT: GALLERY & IMAGES (7 cols)
          ------------------------------------------------- */}
          <div className="flex flex-col justify-between lg:col-span-7">
            {/* MAIN PREVIEW CONTAINER */}
            <div className="relative flex min-h-[380px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#f4f5f7] p-8 sm:min-h-[460px]">
              <img
                src={defaultGallery[selectedImage].url}
                alt={defaultGallery[selectedImage].title}
                className="max-h-[360px] w-full object-contain transition-transform duration-500 hover:scale-105 drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]"
              />

              {/* BRAND WATERMARK BADGE */}
              <div className="absolute left-4 top-4 rounded-md bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-700 shadow-sm backdrop-blur-sm">
                Authentic Verification Pass
              </div>

              {/* IMAGE INDEX PILL */}
              <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-md">
                {selectedImage + 1} / {defaultGallery.length} •{" "}
                {defaultGallery[selectedImage].title}
              </div>
            </div>

            {/* THUMBNAIL STRIP */}
            <div className="mt-4 grid grid-cols-4 gap-3">
              {defaultGallery.slice(0, 3).map((img, index) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`relative flex h-24 items-center justify-center overflow-hidden rounded-xl border bg-[#f4f5f7] p-2 transition-all ${
                    selectedImage === index
                      ? "border-black ring-2 ring-black/10"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="h-full w-full object-contain mix-blend-multiply"
                  />
                </button>
              ))}

              {/* + MORE THUMBNAIL / MODAL TRIGGER */}
              <button
                type="button"
                onClick={() => setShowGalleryModal(true)}
                className="group relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-[#f4f5f7] p-2 transition-all hover:border-gray-900"
              >
                <img
                  src={defaultGallery[3]?.url || defaultGallery[0].url}
                  alt="More photos"
                  className="h-full w-full object-contain mix-blend-multiply opacity-40 transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-xs font-bold text-white backdrop-blur-[2px] transition group-hover:bg-black/40">
                  + 2 more
                </div>
              </button>
            </div>
          </div>

          {/* -------------------------------------------------
              RIGHT: BUY BOX & SPECS (5 cols)
          ------------------------------------------------- */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              {/* BRAND & STATUS */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-900 font-serif text-xs font-black italic text-white">
                    {brand.substring(0, 2).toUpperCase()}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    {brand}
                  </span>
                </div>

                <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-0.5 text-[11px] font-semibold text-gray-700">
                  Brand New
                </span>
              </div>

              {/* PRODUCT TITLE */}
              <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {currentProduct.name}
              </h1>

              {/* REVIEWS & STARS */}
              <div className="mt-2 flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-amber-400" size={14} />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-500">
                  {currentProduct.sold
                    ? `${currentProduct.sold} Verified Reviews`
                    : "63 Reviews"}
                </span>
              </div>

              {/* PRICE SECTION */}
              <div className="mt-6 border-y border-gray-100 py-4">
                <p className="text-xs font-semibold text-gray-400">
                  Start from
                </p>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="text-3xl font-black tracking-tight text-gray-900">
                    {formattedIDR}
                  </span>
                  <span className="text-xs font-medium text-gray-400">
                    (~ ${basePriceUSD.toFixed(2)} USD)
                  </span>
                </div>
              </div>

              {/* SIZE CONTROLS */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-700">Size Chart</span>
                    <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-0.5 text-[11px] font-semibold">
                      {["US", "EU", "CM"].map((unit) => (
                        <button
                          key={unit}
                          type="button"
                          onClick={() => setSizeUnit(unit)}
                          className={`rounded-md px-2 py-0.5 transition ${
                            sizeUnit === unit
                              ? "bg-white text-gray-900 shadow-sm"
                              : "text-gray-400 hover:text-gray-700"
                          }`}
                        >
                          {unit}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-0.5 text-[11px] font-semibold">
                      {["Men", "Women"].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setGender(g)}
                          className={`rounded-md px-2.5 py-0.5 transition ${
                            gender === g
                              ? "bg-white text-gray-900 shadow-sm"
                              : "text-gray-400 hover:text-gray-700"
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SIZES GRID */}
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {sizes.map((sz) => {
                    const isSelected = selectedSize === sz;
                    return (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`rounded-xl py-2.5 text-center text-xs font-bold transition-all ${
                          isSelected
                            ? "bg-black text-white shadow-md ring-2 ring-black"
                            : "border border-gray-200 bg-white text-gray-800 hover:border-gray-400 hover:bg-gray-50"
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>

                {/* SIZE GUIDE LINK */}
                <div className="mt-2 text-right">
                  <button
                    type="button"
                    onClick={() => setShowSizeGuide(true)}
                    className="text-[11px] font-semibold text-gray-500 underline hover:text-gray-900"
                  >
                    Size Guide
                  </button>
                </div>
              </div>

              {/* AUTHENTIC GUARANTEE BOX */}
              <div className="mt-5 rounded-2xl border border-gray-100 bg-[#f9fafb] p-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <FiShield size={12} />
                  </div>
                  <span className="text-xs font-bold text-gray-900">
                    Authentic. Guaranteed
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-gray-500">
                  We thoroughly check every purchase you make and apply our
                  company's guarantee to the product's legitimacy.{" "}
                  <span className="cursor-pointer font-semibold text-gray-800 underline">
                    read more...
                  </span>
                </p>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-zinc-800 hover:shadow-xl active:scale-[0.98]"
              >
                <FiShoppingCart size={15} />
                <span>
                  {cartSuccess
                    ? "Added to Cart ✓"
                    : `Add to cart • Size ${selectedSize}`}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label="Wishlist"
                className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all ${
                  isWishlisted
                    ? "border-red-200 bg-red-50 text-red-500"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                <FiHeart
                  size={18}
                  className={isWishlisted ? "fill-red-500" : ""}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================
            TABS: DESCRIPTION / REVIEWS / DISCUSSION
        =================================================== */}
        <div className="mt-10 rounded-3xl border border-gray-200/70 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center">
            {/* TABS SELECTOR */}
            <div className="flex gap-8 text-sm font-semibold">
              {["Description", "Reviews", "Discussion"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-2 transition ${
                    activeTab === tab
                      ? "font-bold text-gray-900"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-black" />
                  )}
                </button>
              ))}
            </div>

            {/* SOCIAL SHARE ICONS */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share on X"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-black hover:text-white"
              >
                <FaXTwitter size={13} />
              </button>
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share on TikTok"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-black hover:text-white"
              >
                <FaTiktok size={13} />
              </button>
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share on Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-black hover:text-white"
              >
                <FaInstagram size={13} />
              </button>
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share on Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-black hover:text-white"
              >
                <FaFacebookF size={13} />
              </button>
              <button
                type="button"
                onClick={handleShare}
                aria-label="Copy Link"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-black hover:text-white"
              >
                <FiShare2 size={13} />
              </button>
              {copiedShare && (
                <span className="text-[10px] font-bold text-emerald-600 animate-fade-in">
                  Link Copied!
                </span>
              )}
            </div>
          </div>

          {/* TAB CONTENT */}
          {activeTab === "Description" && (
            <div className="pt-6">
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                The {currentProduct.name} is engineered for peak style and
                unmatched all-day comfort. Featuring premium lightweight
                materials, ergonomic contouring, and advanced grip engineering,
                this silhouette delivers effortless versatility on city
                pavements and athletic courts alike. Crafted with precision
                attention to detail, ensuring long-lasting durability,
                responsive cushioning, and timeless visual appeal.
              </p>

              {/* 6 ATTRIBUTE SPECIFICATION TILES */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                <div className="flex flex-col items-center justify-center rounded-2xl bg-[#f4f5f7] p-4 text-center">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    SKU
                  </span>
                  <span className="mt-1 text-xs font-bold text-gray-900">
                    {brand.substring(0, 2).toUpperCase()}
                    {currentProduct.id * 73}ADC
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center rounded-2xl bg-[#f4f5f7] p-4 text-center">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Category
                  </span>
                  <span className="mt-1 text-xs font-bold text-gray-900 uppercase">
                    {currentProduct.category || "Sneaker"}
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center rounded-2xl bg-[#f4f5f7] p-4 text-center">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Material
                  </span>
                  <span className="mt-1 text-xs font-bold text-gray-900">
                    SUEDE & MESH
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center rounded-2xl bg-[#f4f5f7] p-4 text-center">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Dimension
                  </span>
                  <span className="mt-1 text-xs font-bold text-gray-900">
                    40 - 46
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center rounded-2xl bg-[#f4f5f7] p-4 text-center">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Stock Level
                  </span>
                  <span className="mt-1 text-xs font-bold text-gray-900">
                    {currentProduct.stock || 250} Units
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center rounded-2xl bg-[#f4f5f7] p-4 text-center">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Retail (approx)
                  </span>
                  <span className="mt-1 text-xs font-bold text-gray-900">
                    {formattedRetail}
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="py-8 text-center text-gray-500">
              <div className="text-3xl font-bold text-gray-900">4.9 / 5.0</div>
              <div className="mt-2 flex justify-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-amber-400" size={18} />
                ))}
              </div>
              <p className="mt-2 text-xs">
                Based on {currentProduct.sold || 63} verified buyer ratings
              </p>
            </div>
          )}

          {activeTab === "Discussion" && (
            <div className="py-8 text-center text-xs text-gray-500">
              Join the sneaker community discussion on sizing & fit for{" "}
              {currentProduct.name}.
            </div>
          )}
        </div>

        {/* ===================================================
            PRODUCT HISTORICAL DATA (INTERACTIVE CHART & STATS)
        =================================================== */}
        <div className="mt-10 rounded-3xl border border-gray-200/70 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center">
            {/* TIMEFRAME PILLS */}
            <div className="flex flex-wrap items-center gap-1.5">
              {["1M", "3M", "6M", "1Y", "YTD", "ALL"].map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setTimeRange(range)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    timeRange === range
                      ? "bg-black text-white"
                      : "bg-[#f4f5f7] text-gray-500 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

            <h3 className="text-sm font-bold text-gray-900">
              Product Historical Data • {currentProduct.name}
            </h3>
          </div>

          {/* SVG WAVE CHART */}
          <div className="relative mt-6 w-full overflow-hidden">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="h-60 w-full overflow-visible"
            >
              <defs>
                <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.45" />
                  <stop offset="60%" stopColor="#16a34a" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#15803d" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* GRID LINES & Y LABELS */}
              {[4.5, 3.5, 3.0, 2.0].map((val, idx) => {
                const yPos =
                  paddingY + (idx / 3) * (svgHeight - paddingY * 2 - 20);
                const displayVal = (
                  (maxPrice / 1000000) *
                  (1 - idx * 0.25)
                ).toFixed(1);
                return (
                  <g key={val}>
                    <line
                      x1={paddingX}
                      y1={yPos}
                      x2={svgWidth - paddingX}
                      y2={yPos}
                      stroke="#f1f2f4"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={paddingX - 10}
                      y={yPos + 4}
                      textAnchor="end"
                      fill="#a1a1aa"
                      fontSize="9"
                      fontWeight="600"
                    >
                      {displayVal} M
                    </text>
                  </g>
                );
              })}

              {/* AREA FILL */}
              <path d={areaPath} fill="url(#priceGradient)" />

              {/* SMOOTH LINE */}
              <path
                d={linePath}
                fill="none"
                stroke="#22c55e"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* INTERACTIVE DATA POINTS */}
              {pointsCoordinates.map((ptObj, i) => (
                <g key={i} className="cursor-pointer">
                  <circle
                    cx={ptObj.x}
                    cy={ptObj.y}
                    r={chartHoverIndex === i ? 6 : 4}
                    fill={chartHoverIndex === i ? "#15803d" : "#ffffff"}
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    onMouseEnter={() => setChartHoverIndex(i)}
                    onMouseLeave={() => setChartHoverIndex(null)}
                  />
                  {/* DATE LABELS */}
                  <text
                    x={ptObj.x}
                    y={svgHeight - 4}
                    textAnchor="middle"
                    fill="#9ca3af"
                    fontSize="9"
                    fontWeight="500"
                  >
                    {ptObj.pt.date}
                  </text>
                </g>
              ))}
            </svg>

            {/* CHART TOOLTIP */}
            {chartHoverIndex !== null && (
              <div
                className="pointer-events-none absolute -top-2 rounded-lg bg-gray-900 px-3 py-1.5 text-xs text-white shadow-xl transition-all"
                style={{
                  left: `${(pointsCoordinates[chartHoverIndex].x / svgWidth) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <div className="text-[10px] text-zinc-400">
                  {pointsCoordinates[chartHoverIndex].pt.date}
                </div>
                <div className="font-bold text-emerald-400">
                  {pointsCoordinates[chartHoverIndex].pt.display}
                </div>
              </div>
            )}
          </div>

          {/* 4 STAT METRIC TILES */}
          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="flex flex-col justify-between rounded-2xl bg-[#f4f5f7] p-4">
              <span className="text-[11px] font-semibold text-gray-500">
                Average Price
              </span>
              <span className="mt-2 text-base font-extrabold text-gray-900 sm:text-lg">
                IDR {avgPrice.toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex flex-col justify-between rounded-2xl bg-[#f4f5f7] p-4">
              <span className="text-[11px] font-semibold text-gray-500">
                Price Premium
              </span>
              <div className="mt-2 flex items-center gap-1 text-base font-extrabold text-emerald-600 sm:text-lg">
                <FiTrendingUp size={16} />
                <span>+ 14.32%</span>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl bg-[#f4f5f7] p-4">
              <span className="text-[11px] font-semibold text-gray-500">
                Lowest Sale
              </span>
              <div className="mt-2 flex items-center gap-1 text-base font-extrabold text-red-600 sm:text-lg">
                <FiTrendingDown size={16} />
                <span>IDR {lowestSale.toLocaleString("id-ID")}</span>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl bg-[#f4f5f7] p-4">
              <span className="text-[11px] font-semibold text-gray-500">
                Highest Sale
              </span>
              <div className="mt-2 flex items-center gap-1 text-base font-extrabold text-emerald-600 sm:text-lg">
                <FiTrendingUp size={16} />
                <span>IDR {highestSale.toLocaleString("id-ID")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            RELATED / SIMILAR PRODUCTS
        =================================================== */}
        <div className="mt-10 rounded-3xl border border-gray-200/70 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center">
            {/* CATEGORY CHIPS */}
            <div
              className="flex gap-2 overflow-x-auto pb-1"
              style={{ scrollbarWidth: "none" }}
            >
              {[
                "Blind Box",
                "Sneakers",
                "Apparel",
                "Luxury",
                "Collectibles",
                "Watches",
              ].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setRelatedFilter(cat)}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition ${
                    relatedFilter === cat
                      ? "bg-black text-white"
                      : "bg-[#f4f5f7] text-gray-500 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* SORT DROPDOWN */}
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
              <span>Sort:</span>
              <select className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 outline-none">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          {/* RELATED PRODUCTS GRID */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  if (onSelectProduct) {
                    onSelectProduct({
                      id: prod.id,
                      name: prod.name,
                      price: prod.price,
                      category: prod.category || "Sneaker",
                      image: prod.image,
                      stock: 300,
                      sold: 520,
                    });
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative mb-3 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-[#f8f9fb] p-3">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  />
                  {prod.badge && (
                    <span className="absolute left-2.5 top-2.5 rounded-md bg-red-500 px-2 py-0.5 text-[9px] font-bold uppercase text-white">
                      {prod.badge}
                    </span>
                  )}
                </div>

                {/* DETAILS */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      {prod.brand}
                    </span>
                    <h4 className="line-clamp-2 text-xs font-bold text-gray-900">
                      {prod.name}
                    </h4>
                  </div>

                  <div className="mt-3">
                    <div className="text-sm font-extrabold text-gray-900">
                      IDR{" "}
                      {Math.round(prod.price * 10500).toLocaleString("id-ID")}
                    </div>
                    <div className="text-[10px] text-gray-400 line-through">
                      IDR{" "}
                      {Math.round(prod.price * 11800).toLocaleString("id-ID")}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart();
                      }}
                      className="mt-3 w-full rounded-xl bg-black py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-zinc-800"
                    >
                      View & Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================
            SIZE GUIDE MODAL
        =================================================== */}
        {showSizeGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b pb-4">
                <h3 className="text-base font-bold text-gray-900">
                  Size Guide & Conversions
                </h3>
                <button
                  type="button"
                  onClick={() => setShowSizeGuide(false)}
                  className="rounded-full bg-gray-100 p-2 text-xs font-bold text-gray-500 hover:bg-gray-200"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 overflow-x-auto text-xs">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b bg-gray-50 text-gray-500">
                      <th className="p-2.5">US Men</th>
                      <th className="p-2.5">US Women</th>
                      <th className="p-2.5">EU</th>
                      <th className="p-2.5">CM</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-2.5 font-bold">7.0</td>
                      <td className="p-2.5">8.5</td>
                      <td className="p-2.5">40.0</td>
                      <td className="p-2.5">25.0</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">7.5</td>
                      <td className="p-2.5">9.0</td>
                      <td className="p-2.5">40.5</td>
                      <td className="p-2.5">25.5</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">8.0</td>
                      <td className="p-2.5">9.5</td>
                      <td className="p-2.5">41.5</td>
                      <td className="p-2.5">26.0</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">9.0</td>
                      <td className="p-2.5">10.5</td>
                      <td className="p-2.5">42.5</td>
                      <td className="p-2.5">27.0</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">10.0</td>
                      <td className="p-2.5">11.5</td>
                      <td className="p-2.5">44.0</td>
                      <td className="p-2.5">28.0</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">10.5</td>
                      <td className="p-2.5">12.0</td>
                      <td className="p-2.5">44.5</td>
                      <td className="p-2.5">28.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button
                type="button"
                onClick={() => setShowSizeGuide(false)}
                className="mt-6 w-full rounded-xl bg-black py-3 text-xs font-bold text-white transition hover:bg-zinc-800"
              >
                Close Size Guide
              </button>
            </div>
          </div>
        )}

        {/* ===================================================
            FULL GALLERY MODAL
        =================================================== */}
        {showGalleryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
            <div className="w-full max-w-4xl rounded-3xl bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b pb-4">
                <h3 className="text-base font-bold text-gray-900 truncate max-w-md">
                  {currentProduct.name} • All Photos ({defaultGallery.length})
                </h3>
                <button
                  type="button"
                  onClick={() => setShowGalleryModal(false)}
                  className="rounded-full bg-gray-100 p-2 text-xs font-bold text-gray-500 hover:bg-gray-200"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 grid max-h-[60vh] grid-cols-1 gap-4 overflow-y-auto p-1 sm:grid-cols-2 lg:grid-cols-3">
                {defaultGallery.map((img, idx) => (
                  <div
                    key={img.id}
                    onClick={() => {
                      setSelectedImage(idx);
                      setShowGalleryModal(false);
                    }}
                    className="cursor-pointer rounded-2xl border border-gray-100 bg-[#f4f5f7] p-4 text-center transition hover:border-black"
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="h-44 w-full object-contain mix-blend-multiply"
                    />
                    <div className="mt-2 text-xs font-bold text-gray-800">
                      {img.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetailSection;
