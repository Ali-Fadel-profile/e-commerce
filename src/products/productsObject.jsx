import flashSalesProductImage0 from "@images/products/flashSales/product0.svg";
import flashSalesProductImage0_1 from "@images/products/flashSales/product0_1.svg";
import flashSalesProductImage0_2 from "@images/products/flashSales/product0_2.svg";
import flashSalesProductImage0_3 from "@images/products/flashSales/product0_3.svg";
import flashSalesProductImage0_4 from "@images/products/flashSales/product0_4.svg";
import flashSalesProductImage1 from "@images/products/flashSales/product1.svg";
import flashSalesProductImage2 from "@images/products/flashSales/product2.svg";
import flashSalesProductImage3 from "@images/products/flashSales/product3.svg";
import flashSalesProductImage4 from "@images/products/flashSales/product4.svg";
import flashSalesProductImage5 from "@images/products/flashSales/product5.svg";
import bestSellingProductImage1 from "@images/products/bestSelling/product1.svg";
import bestSellingProductImage2 from "@images/products/bestSelling/product2.svg";
import bestSellingProductImage3 from "@images/products/bestSelling/product3.svg";
import bestSellingProductImage4 from "@images/products/bestSelling/product4.svg";
import allProductsImage1 from "@images/products/allProducts/product1.svg";
import allProductsImage2 from "@images/products/allProducts/product2.svg";
import allProductsImage3 from "@images/products/allProducts/product3.svg";
import allProductsImage4 from "@images/products/allProducts/product4.svg";
import allProductsImage5 from "@images/products/allProducts/product5.svg";
import allProductsImage6 from "@images/products/allProducts/product6.svg";
import allProductsImage7 from "@images/products/allProducts/product7.svg";
import allProductsImage8 from "@images/products/allProducts/product8.svg";
import allProductsImage9 from "@images/products/allProducts/product9.png";
import allProductsImage10 from "@images/products/allProducts/product10.svg";
import allProductsImage11 from "@images/products/allProducts/product11.svg";
import allProductsImage12 from "@images/products/allProducts/product13.png";
import allProductsImage13 from "@images/products/allProducts/product12.svg";
import allProductsImage14 from "@images/products/specialProducts/music.svg";

export const flashSaleEndTime = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
const calculateDiscountPrice = (originalPrice, discount) =>
  originalPrice - (discount / 100) * originalPrice;

const generateProductId = (prefix, index) => {
  const timestamp = Date.now().toString(36);
  return `${prefix}-${index}-${timestamp}`;
};

const products = {
  newArrival: [
    {
      id: generateProductId("specialProducts", 0),
      isNew: true,
      discount: false,
      productName: "iPhone 14 Series",
      productImage: allProductsImage9,
      originalPrice: 660,
      rateNumber: 56,
      rateStar: 4.5,
      category: "technology",
      productDetails: {
        description:
          "The latest iPhone 14 Series offers powerful performance, stunning display, and cutting-edge camera technology.",
        features: [
          "5G Enabled",
          "Super Retina XDR display",
          "Triple-lens Camera System",
        ],
      },
    },
    {
      id: generateProductId("specialProducts", 1),
      isNew: true,
      discount: false,
      productName: "PlayStation 5",
      productImage: allProductsImage10,
      originalPrice: 660,
      rateNumber: 56,
      rateStar: 4.5,
      category: "gaming",
      productDetails: {
        description: "Black and White version of the PS5 coming out on sale.",
        features: [
          "Ultra HD Blu-ray",
          "Adaptive Triggers",
          "Ray Tracing Technology",
        ],
      },
    },
    {
      id: generateProductId("specialProducts", 2),
      isNew: true,
      discount: false,
      productName: "Women's Collection",
      productImage: allProductsImage12,
      originalPrice: 660,
      rateNumber: 56,
      rateStar: 4.5,
      category: "newArrival",
      productDetails: {
        description: "Featured woman collections that give you another vibe.",
        features: [
          "Seasonal Wear",
          "High-quality Fabric",
          "Elegant and Trendy Designs",
        ],
      },
    },
    {
      id: generateProductId("specialProducts", 3),
      isNew: true,
      discount: false,
      productName: "Amazon Speakers",
      productImage: allProductsImage11,
      originalPrice: 660,
      rateNumber: 56,
      rateStar: 4.5,
      category: "technology",
      productDetails: {
        description: "Amazon wireless speakers",
        features: ["Bluetooth Connectivity", "360° Sound", "Portable Design"],
      },
    },
    {
      id: generateProductId("specialProducts", 4),
      isNew: true,
      discount: false,
      productName: "Perfume",
      productImage: allProductsImage13,
      originalPrice: 660,
      rateNumber: 56,
      rateStar: 4.5,
      category: "newArrival",
      productDetails: {
        description: "GUCCI INTENSE OUD EDP",
        features: [
          "Long-lasting Scent",
          "Exquisite Bottle Design",
          "Perfect for All Occasions",
        ],
      },
    },
    {
      id: generateProductId("specialProducts", 5),
      isNew: true,
      discount: false,
      productName: "Portable Music Player",
      productImage: allProductsImage14,
      originalPrice: 660,
      rateNumber: 56,
      rateStar: 4.5,
      category: "technology",
      productDetails: {
        description: "Enhance your listening experience",
        features: [
          "Bluetooth Support",
          "High-Resolution Audio",
          "Compact and Lightweight",
        ],
      },
    },
  ],
  flashSales: [
    {
      id: generateProductId("flashSalesProducts", 0),
      isNew: false,
      discount: 20,
      productName: "Havic HV G-92 Gamepad",
      productImage: flashSalesProductImage0,
      productImage1: flashSalesProductImage0_1,
      productImage2: flashSalesProductImage0_2,
      productImage3: flashSalesProductImage0_3,
      productImage4: flashSalesProductImage0_4,
      originalPrice: 160,
      discountPrice: calculateDiscountPrice(160, 20),
      rateNumber: 88,
      rateStar: 5,
      category: "gaming",
      productDetails: {
        description:
          "The HAVIT HV-G92 Gamepad is designed for gamers seeking comfort and precision, featuring an ergonomic design for extended play sessions.",
        features: [
          "Wireless Connectivity",
          "Dual Vibration Feedback",
          "Compatible with PC and Consoles",
        ],
      },
    },

    {
      id: generateProductId("flashSalesProducts", 1),
      isNew: false,
      discount: 35,
      productName: "AK-900 Wired Keyboard",
      productImage: flashSalesProductImage2,
      originalPrice: 160,
      discountPrice: calculateDiscountPrice(160, 35),
      rateNumber: 75,
      rateStar: 4,
      category: "technology",
      productDetails: {
        description:
          "The AK-900 Wired Keyboard offers a responsive typing experience with customizable RGB backlighting, perfect for both gaming and productivity.",
        features: ["Mechanical Keys", "RGB Backlighting", "Durable Build"],
      },
    },

    {
      id: generateProductId("flashSalesProducts", 2),
      isNew: false,
      discount: 30,
      productName: "IPS LCD Gaming Monitor",
      productImage: flashSalesProductImage3,
      originalPrice: 400,
      discountPrice: calculateDiscountPrice(400, 30),
      rateNumber: 99,
      rateStar: 5,
      category: "technology",
      productDetails: {
        description:
          "Experience stunning visuals with the IPS LCD Gaming Monitor, featuring vibrant colors and fast refresh rates for an immersive gaming experience.",
        features: [
          "1920x1080 Resolution",
          "144Hz Refresh Rate",
          "Wide Viewing Angles",
        ],
      },
    },
    {
      id: generateProductId("flashSalesProducts", 3),
      isNew: false,
      discount: 25,
      productName: "S-Series Comfort Chair",
      productImage: flashSalesProductImage4,
      originalPrice: 400,
      discountPrice: calculateDiscountPrice(400, 25),
      rateNumber: 99,
      rateStar: 4.5,
      category: "furniture",
      productDetails: {
        description:
          "The S-Series Comfort Chair combines ergonomic design with premium materials, ensuring maximum comfort for long hours of use, whether gaming or working.",
        features: ["Adjustable Height", "Lumbar Support", "Stylish Design"],
      },
    },
    {
      id: generateProductId("flashSalesProducts", 4),
      isNew: false,
      discount: 40,
      productName: "HAVIT HV-G92 Gamepad",
      productImage: flashSalesProductImage1,
      originalPrice: 160,
      discountPrice: calculateDiscountPrice(160, 40),
      rateNumber: 88,
      rateStar: 5,
      category: "gaming",
      productDetails: {
        description:
          "The HAVIT HV-G92 Gamepad is designed for gamers seeking comfort and precision, featuring an ergonomic design for extended play sessions.",
        features: [
          "Wireless Connectivity",
          "Dual Vibration Feedback",
          "Compatible with PC and Consoles",
        ],
      },
    },
    {
      id: generateProductId("flashSalesProducts", 5),
      isNew: false,
      discount: 20,
      productName: "ASUS FHD Gaming Laptop",
      productImage: flashSalesProductImage5,
      originalPrice: 700,
      discountPrice: calculateDiscountPrice(700, 20),
      rateNumber: 325,
      rateStar: 5,
      category: "technology",
      productDetails: {
        description:
          "The ASUS FHD Gaming Laptop delivers high performance with a sleek design, perfect for gamers and professionals alike.",
        features: ["Intel i7 Processor", "16GB RAM", "NVIDIA GeForce GTX 1660"],
      },
    },
  ],
  bestSelling: [
    {
      id: generateProductId("bestSellingProducts", 0),
      isNew: false,
      discount: 30,
      productName: "The North Coat",
      productImage: bestSellingProductImage1,
      originalPrice: 360,
      discountPrice: calculateDiscountPrice(360, 30),
      rateNumber: 85,
      rateStar: 5,
      category: "clothes",
      productDetails: {
        description:
          "Stay warm and stylish with The North Coat, crafted from high-quality materials to provide ultimate comfort and durability.",
        features: [
          "Water-resistant",
          "Insulated",
          "Available in multiple colors",
        ],
      },
    },
    {
      id: generateProductId("bestSellingProducts", 1),
      isNew: false,
      discount: 25,
      productName: "Gucci Duffle Bag",
      productImage: bestSellingProductImage2,
      originalPrice: 1160,
      discountPrice: calculateDiscountPrice(1160, 25),
      rateNumber: 65,
      rateStar: 4.5,
      category: "clothes",
      productDetails: {
        description:
          "The Gucci Duffle Bag is a luxurious and spacious accessory, perfect for travel or everyday use, combining style with functionality.",
        features: [
          "Premium Leather",
          "Spacious Interior",
          "Iconic Gucci Design",
        ],
      },
    },
    {
      id: generateProductId("bestSellingProducts", 2),
      isNew: false,
      discount: 20,
      productName: "RGB Liquid CPU Cooler",
      productImage: bestSellingProductImage3,
      originalPrice: 170,
      discountPrice: calculateDiscountPrice(170, 20),
      rateNumber: 65,
      rateStar: 4.5,
      category: "technology",
      productDetails: {
        description:
          "Enhance your gaming rig with the RGB Liquid CPU Cooler, designed for optimal cooling performance and customizable lighting effects.",
        features: [
          "Efficient Cooling",
          "RGB Lighting",
          "Compatible with Most CPUs",
        ],
      },
    },
    {
      id: generateProductId("bestSellingProducts", 3),
      isNew: false,
      discount: false,
      productName: "Small Bookshelf",
      productImage: bestSellingProductImage4,
      originalPrice: 360,
      rateNumber: 65,
      rateStar: 5,
      category: "furniture",
      productDetails: {
        description:
          "The Small Bookshelf offers a stylish solution for organizing your books and decor, crafted with durable materials for long-lasting use.",
        features: ["Compact Design", "Easy Assembly", "Versatile Use"],
      },
    },
  ],
  ourProducts: [
    {
      id: generateProductId("restOfProducts", 0),
      isNew: false,
      discount: false,
      productName: "Breed Dry Dog Food",
      productImage: allProductsImage1,
      originalPrice: 100,
      rateNumber: 35,
      rateStar: 3,
      category: "Genrel",
      productDetails: {
        description:
          "Breed Dry Dog Food is specially formulated to provide your furry friend with all the essential nutrients for a healthy and happy life.",
        features: [
          "High Protein",
          "Natural Ingredients",
          "No Artificial Additives",
        ],
      },
    },
    {
      id: generateProductId("restOfProducts", 1),
      isNew: false,
      discount: false,
      productName: "CANON EOS DSLR Camera",
      productImage: allProductsImage2,
      originalPrice: 360,
      rateNumber: 95,
      rateStar: 4,
      category: "technology",
      productDetails: {
        description:
          "Capture stunning photos and videos with the CANON EOS DSLR Camera, perfect for both beginners and professionals.",
        features: [
          "High Resolution",
          "Interchangeable Lenses",
          "Full HD Video",
        ],
      },
    },
    {
      id: generateProductId("restOfProducts", 2),
      isNew: false,
      discount: false,
      productName: "ASUS FHD Gaming Laptop",
      productImage: allProductsImage3,
      originalPrice: 700,
      rateNumber: 325,
      rateStar: 5,
      category: "gaming",
      productDetails: {
        description:
          "Powerful performance meets sleek design in the ASUS FHD Gaming Laptop, ideal for gaming and productivity.",
        features: ["High-Performance GPU", "Fast SSD", "Slim Profile"],
      },
    },
    {
      id: generateProductId("restOfProducts", 3),
      isNew: false,
      discount: false,
      productName: "Curology Product Set",
      productImage: allProductsImage4,
      originalPrice: 500,
      rateNumber: 145,
      rateStar: 4,
      category: "Genrel",
      productDetails: {
        description:
          "Achieve clearer skin with the Curology Product Set, customized for your skin type and needs.",
        features: [
          "Personalized Formula",
          "Cruelty-Free",
          "Dermatologist-Recommended",
        ],
      },
    },
    {
      id: generateProductId("restOfProducts", 4),
      isNew: false,
      discount: false,
      productName: "Kids Electric Car",
      productImage: allProductsImage5,
      originalPrice: 60,
      rateNumber: 35,
      rateStar: 5,
      category: "gaming",
      productDetails: {
        description:
          "Let your kids enjoy fun rides with the Kids Electric Car, designed for safety and excitement.",
        features: [
          "Rechargeable Battery",
          "Remote Control",
          "Realistic Design",
        ],
      },
    },
    {
      id: generateProductId("restOfProducts", 5),
      isNew: false,
      discount: false,
      productName: "Jr. Zoom Soccer Cleats",
      productImage: allProductsImage6,
      originalPrice: 1160,
      rateNumber: 35,
      rateStar: 5,
      category: "gaming",
      productDetails: {
        description:
          "Boost your performance on the field with Jr. Zoom Soccer Cleats, designed for speed and control.",
        features: ["Lightweight", "Durable Material", "Excellent Traction"],
      },
    },
    {
      id: generateProductId("restOfProducts", 6),
      isNew: false,
      discount: false,
      productName: "GP11 Shooter USB Gamepad",
      productImage: allProductsImage7,
      originalPrice: 660,
      rateNumber: 55,
      rateStar: 4.5,
      category: "gaming",
      productDetails: {
        description:
          "Enhance your gaming experience with the GP11 Shooter USB Gamepad, known for its responsive controls.",
        features: [
          "Ergonomic Design",
          "Plug and Play",
          "Compatible with Multiple Platforms",
        ],
      },
    },
    {
      id: generateProductId("restOfProducts", 7),
      isNew: false,
      discount: false,
      productName: "Quilted Satin Jacket",
      productImage: allProductsImage8,
      originalPrice: 660,
      rateNumber: 56,
      rateStar: 4.5,
      category: "clothes",
      productDetails: {
        description:
          "Stay warm and stylish with The North Coat, crafted from high-quality materials to provide ultimate comfort and durability.",
        features: [
          "Water-resistant",
          "Insulated",
          "Available in multiple colors",
        ],
      },
    },
  ],
};
export const allProducts = [
  ...products.bestSelling,
  ...products.flashSales,
  ...products.newArrival,
  ...products.ourProducts,
];
export default products;
